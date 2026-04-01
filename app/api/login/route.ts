import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Validation function for login input
const validateLoginInput = (data: { email: string; password: string }) => {
  const errors: string[] = [];

  if (!data.email || data.email.trim() === "") {
    errors.push("Email is required");
  } else {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(data.email)) {
      errors.push("Please provide a valid email address");
    }
  }

  if (!data.password || data.password.trim() === "") {
    errors.push("Password is required");
  }

  return errors;
};

// Generate JWT token
const generateToken = (userId: string, email: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const expiresIn = (process.env.JWT_EXPIRES_IN ||
    "7d") as jwt.SignOptions["expiresIn"];

  return jwt.sign(
    {
      userId,
      email,
      iat: Math.floor(Date.now() / 1000),
    },
    secret,
    { expiresIn },
  );
};

// Set cookie with token
const setTokenCookie = (response: NextResponse, token: string) => {
  response.cookies.set({
    name: "auth_token",
    value: token,
    httpOnly: true, // Prevents XSS attacks
    secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
    sameSite: "strict", // CSRF protection
    maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    path: "/", // Available on all routes
  });
};

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    const validationErrors = validateLoginInput({ email, password });
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors: validationErrors,
        },
        { status: 400 },
      );
    }

    // Connect to database
    await dbConnect();

    // Find user by email (with password field included)
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password",
    );

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    // Generate JWT token
    const token = generateToken(user._id.toString(), user.email);

    // Prepare user data (exclude sensitive info)
    const userData = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
    };

    // Create response with user data
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: userData,
      },
      { status: 200 },
    );

    // Set token in HTTP-only cookie
    setTokenCookie(response, token);

    return response;
  } catch (error: any) {
    console.error("Login error:", error);

    // Handle specific errors
    if (error.name === "JsonWebTokenError") {
      return NextResponse.json(
        {
          success: false,
          error: "Token generation failed",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    );
  }
}
