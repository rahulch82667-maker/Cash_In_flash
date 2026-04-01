// components/login/LoginForm.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="w-full max-w-[760px] mx-auto px-4">
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

      {/* Login Card */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 md:p-10">
        <form className="space-y-6">
          {/* Username/Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[#555] text-[17px] font-medium font-poppins">
              Username, Email, or Phone
            </label>
            <input
              type="text"
              placeholder="Required"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md outline-none focus:border-[#15C15D] text-gray-600 placeholder:text-gray-400 transition-all"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[#555] text-[17px] font-medium font-poppins">
              Password
            </label>
            <input
              type="password"
              placeholder="Required"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md outline-none focus:border-[#15C15D] text-gray-600 placeholder:text-gray-400 transition-all"
              required
            />
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center gap-4 py-2">
            <Link 
              href="/register" 
              className="text-[#0066cc] hover:underline text-[15.5px] font-poppins"
            >
              New User? Click here to register
            </Link>
            <Link 
              href="/forgot-password" 
              className="text-[#0066cc] hover:underline text-[15.5px] font-poppins"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-[#15C15D] hover:bg-[#12a850] transition-all active:scale-[0.98] rounded-md text-white font-semibold text-[18px] font-poppins shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;