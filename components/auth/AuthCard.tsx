'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface AuthCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="w-full max-w-[500px] mx-auto px-4">
      {/* Logo Section */}
      <div className="flex justify-center mb-10">
        <Image 
          src="/logo.png" 
          alt="Cash in Flash Logo" 
          width={300} 
          height={60} 
          priority
        />
      </div>

      {/* Auth Card */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 md:p-10">
        {title && (
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center font-poppins">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-gray-600 text-center mb-8 font-poppins text-sm">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}