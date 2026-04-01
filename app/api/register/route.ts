import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";

const validateInput = (data: {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}) => {
  const errors: string[] = [];

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push("Full name must be at least 2 characters long");
  }
  if (data.fullName && data.fullName.length > 100) {
    errors.push("Full name cannot exceed 100 characters");
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("Please provide a valid email address");
  }

  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!data.phoneNumber || !phoneRegex.test(data.phoneNumber)) {
    errors.push("Please provide a valid phone number (format: 123-456-7890)");
  }

  if (!data.password || data.password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }

  return errors;
};

const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber, password } = body;

    if (!fullName || !email || !phoneNumber || !password) {
      return NextResponse.json(
        { 
          success: false, 
          error: "All fields are required" 
        },
        { status: 400 }
      );
    }

    const validationErrors = validateInput({ fullName, email, phoneNumber, password });
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          errors: validationErrors 
        },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { phoneNumber }],
    });

    if (existingUser) {
      const conflictField = existingUser.email === email.toLowerCase() ? "email" : "phone number";
      return NextResponse.json(
        { 
          success: false, 
          error: `User with this ${conflictField} already exists` 
        },
        { status: 409 }
      );
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);

    // Create new user
    const user = await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phoneNumber: formattedPhone,
      password,
    });

    // Remove password from response
    const userResponse = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
    };

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: userResponse,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json(
        {
          success: false,
          error: `User with this ${field} already exists`,
        },
        { status: 409 }
      );
    }

    // Handle mongoose validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        {
          success: false,
          errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const phoneNumber = searchParams.get("phone");

    if (email) {
      const user = await User.findOne({ email: email.toLowerCase() });
      return NextResponse.json({ exists: !!user });
    }

    if (phoneNumber) {
      const user = await User.findOne({ phoneNumber });
      return NextResponse.json({ exists: !!user });
    }

    return NextResponse.json(
      { error: "Email or phone parameter required" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Check existence error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}