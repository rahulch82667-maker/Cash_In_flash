import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

// Password validation
const validatePassword = (password: string): string[] => {
  const errors: string[] = [];
  
  if (!password) {
    errors.push("Password is required");
    return errors;
  }
  
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number");
  }
  
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    errors.push("Password must contain at least one special character");
  }
  
  return errors;
};

export async function POST(request: NextRequest) {
  try {
    const { token, password, confirmPassword } = await request.json();

    // Validate input
    if (!token || !password || !confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          error: "Token, password, and confirm password are required",
        },
        { status: 400 }
      );
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          error: "Passwords do not match",
        },
        { status: 400 }
      );
    }

    // Validate password strength
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors: passwordErrors,
        },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Hash the provided token
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // Find user with valid token - IMPORTANT: Select the password field
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: new Date() },
    }).select('+resetPasswordToken +resetPasswordExpires +password');

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid or expired reset token. Please request a new password reset.",
        },
        { status: 400 }
      );
    }

    // Check if new password is same as old password
    // user.password is now available because we selected it above
    const isSamePassword = await bcrypt.compare(password, user.password);
    if (isSamePassword) {
      return NextResponse.json(
        {
          success: false,
          error: "New password cannot be the same as your old password",
        },
        { status: 400 }
      );
    }

    // Update password and clear reset fields
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Password has been reset successfully. You can now login with your new password.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}