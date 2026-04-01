"use client";

import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { registerUser, resetState, clearError } from '@/store/slices/authSlice';
import { registerSchema } from './registerSchema';

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, success, error } = useAppSelector((state) => state.auth);
  const hasRedirected = useRef(false);

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      dispatch(registerUser(values));
    },
  });

  useEffect(() => {
    if (success && !hasRedirected.current) {
      hasRedirected.current = true;
      
      // Reset form
      formik.resetForm();
      
      // Show success message and redirect after delay
      const timer = setTimeout(() => {
        dispatch(resetState());
        router.push('/login');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [success, formik.resetForm, dispatch, router]);

  useEffect(() => {
    if (!success) {
      hasRedirected.current = false;
    }
  }, [success]);

  // Clear error on unmount
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
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
          
          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#555] text-[16px] font-medium font-poppins">
                Full Name 
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all ${
                  formik.touched.fullName && formik.errors.fullName
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[#555] text-[16px] font-medium font-poppins">
                Email Address 
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-[#555] text-[16px] font-medium font-poppins">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="(000) 000-0000"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[#555] text-[16px] font-medium font-poppins">
                Password 
              </label>
              <input
                type="password"
                name="password"
                placeholder="Min. 8 characters"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 transition-all ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
              )}
            </div>

            {/* Register Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[52px] bg-[#15C15D] hover:bg-[#12a850] transition-all active:scale-[0.98] rounded-md text-white font-semibold text-[18px] font-poppins shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    Creating Account...
                  </span>
                ) : (
                  'Register'
                )}
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
    </>
  );
};

export default RegisterForm;