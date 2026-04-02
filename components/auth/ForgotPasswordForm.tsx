'use client';

import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { forgotPassword, resetForgotPasswordSuccess } from '@/store/slices/authSlice';

const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export default function ForgotPasswordForm() {
  const dispatch = useAppDispatch();
  const { loading, forgotPasswordSuccess } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      dispatch(forgotPassword({ email: values.email }));
    },
  });

  // Reset success state on unmount
  useEffect(() => {
    return () => {
      if (forgotPasswordSuccess) {
        dispatch(resetForgotPasswordSuccess());
      }
    };
  }, [forgotPasswordSuccess, dispatch]);

  if (forgotPasswordSuccess) {
    return (
      <div className="text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Check Your Email</h3>
          <p className="text-gray-600 mb-6">
            We've sent password reset instructions to <strong>{formik.values.email}</strong>
          </p>
          <Link
            href="/login"
            className="inline-block px-6 py-3 bg-[#15C15D] text-white rounded-md hover:bg-[#12a850] transition-all font-poppins"
          >
            Return to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
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

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-[52px] bg-[#15C15D] hover:bg-[#12a850] transition-all active:scale-[0.98] rounded-md text-white font-semibold text-[18px] font-poppins shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            Sending...
          </span>
        ) : (
          'Send Reset Link'
        )}
      </button>

      {/* Back to Login Link */}
      <div className="text-center">
        <Link 
          href="/login" 
          className="text-[#0066cc] hover:underline text-[15.5px] font-poppins transition-all"
        >
          Back to Login
        </Link>
      </div>
    </form>
  );
}