import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { sendPasswordResetEmail } from "@/lib/email";

// Rate limiting - store IP addresses and request counts
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // 5 requests per window

// Rate limiting function
const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (now - userLimit.timestamp > RATE_LIMIT_WINDOW) {
    // Reset if window has passed
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  userLimit.count++;
  rateLimitMap.set(ip, userLimit);
  return false;
};

// Clean up rate limit map periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required",
        },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Find user by email - select fields we need
    const user = await User.findOne({ email: email.toLowerCase() }).select('+resetPasswordToken +resetPasswordExpires');
    
    // Always return success even if user doesn't exist for security
    if (!user) {
      console.log(`Password reset requested for non-existent email: ${email}`);
      return NextResponse.json(
        {
          success: true,
          message: "If an account exists with this email, you will receive password reset instructions.",
        },
        { status: 200 }
      );
    }

    // Generate secure reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Hash the token before storing
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    
    // Set token expiration (15 minutes from now)
    const tokenExpiry = new Date();
    tokenExpiry.setMinutes(tokenExpiry.getMinutes() + 15);
    
    // Save hashed token and expiry to database
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = tokenExpiry;
    await user.save();

    // Send reset email
    try {
      await sendPasswordResetEmail(user.email, user.fullName, resetToken);
      console.log(`Password reset email sent to ${user.email}`);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Still return success to not reveal email existence
      return NextResponse.json(
        {
          success: true,
          message: "If an account exists with this email, you will receive password reset instructions.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "If an account exists with this email, you will receive password reset instructions.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}