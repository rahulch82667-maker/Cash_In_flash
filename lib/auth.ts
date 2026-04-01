import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export interface JWTPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

// Get current user from token (Server-side)
export async function getCurrentUser() {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get('auth_token')?.value;
    
    if (!token) {
      return null;
    }
    
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }
    
    const decoded = jwt.verify(token, secret) as JWTPayload;
    
    return {
      userId: decoded.userId,
      email: decoded.email,
    };
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Verify token (for API routes)
export function verifyToken(token: string): JWTPayload | null {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }
    
    const decoded = jwt.verify(token, secret) as JWTPayload;
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}