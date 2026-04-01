"use client";

import Image from "next/image";
import Link from "next/link";

const RegisterForm = () => {
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

      {/* Register Card */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center font-poppins">
          Create Your Account
        </h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[#555] text-[16px] font-medium font-poppins">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all"
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label className="text-[#555] text-[16px] font-medium font-poppins">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-[#555] text-[16px] font-medium font-poppins">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(000) 000-0000"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-[#555] text-[16px] font-medium font-poppins">
              Password
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all"
              required
            />
          </div>

          {/* Register Button - Full Width on Mobile, spans 2 cols on Desktop */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full h-[52px] bg-[#15C15D] hover:bg-[#12a850] transition-all active:scale-[0.98] rounded-md text-white font-semibold text-[18px] font-poppins shadow-md"
            >
              Register
            </button>
          </div>

          {/* Back to Login Link */}
          <div className="md:col-span-2 flex justify-center mt-2">
            <p className="text-gray-600 font-poppins text-[15px]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0066cc] hover:underline font-medium">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;