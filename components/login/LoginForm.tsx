"use client";

import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loginUser, resetState, clearError, resetLoginSuccess } from '@/store/slices/authSlice';
import { loginSchema } from './loginSchema';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, loginSuccess, error } = useAppSelector((state) => state.auth);
  const hasRedirected = useRef(false);

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      dispatch(loginUser(values));
    },
  });

  // Handle successful login
  useEffect(() => {
    if (loginSuccess && !hasRedirected.current) {
      hasRedirected.current = true;
      
      // Reset form
      formik.resetForm();
      
      // Redirect to home page after success
      const timer = setTimeout(() => {
        dispatch(resetState());
        router.push('/');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [loginSuccess, formik.resetForm, dispatch, router]);

  // Reset the redirect flag when loginSuccess becomes false
  useEffect(() => {
    if (!loginSuccess) {
      hasRedirected.current = false;
    }
  }, [loginSuccess]);

  // Clear error on unmount
  useEffect(() => {
    return () => {
      dispatch(clearError());
      dispatch(resetLoginSuccess());
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

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 md:p-10">
          
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#555] text-[17px] font-medium font-poppins">
                Email Address 
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 placeholder:text-gray-400 transition-all ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                disabled={loading}
                autoComplete="email"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#555] text-[17px] font-medium font-poppins">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 placeholder:text-gray-400 transition-all ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                disabled={loading}
                autoComplete="current-password"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
              )}
            </div>

            {/* Links Section */}
            <div className="flex flex-col items-center gap-4 py-2">
              <Link 
                href="/register" 
                className="text-[#0066cc] hover:underline text-[15.5px] font-poppins transition-all"
              >
                New User? Click here to register
              </Link>
              <Link 
                href="/forgot-password" 
                className="text-[#0066cc] hover:underline text-[15.5px] font-poppins transition-all"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[52px] bg-[#15C15D] hover:bg-[#12a850] transition-all active:scale-[0.98] rounded-md text-white font-semibold text-[18px] font-poppins shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;