'use client';

import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetPassword, resetResetPasswordSuccess } from '@/store/slices/authSlice';

const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, resetPasswordSuccess, error } = useAppSelector((state) => state.auth);
  const [redirectTimer, setRedirectTimer] = useState<NodeJS.Timeout | null>(null);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      dispatch(resetPassword({
        token,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }));
    },
  });

  // Handle success redirect
  useEffect(() => {
    if (resetPasswordSuccess) {
      const timer = setTimeout(() => {
        dispatch(resetResetPasswordSuccess());
        router.push('/login');
      }, 3000);
      setRedirectTimer(timer);
    }

    return () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [resetPasswordSuccess, router, dispatch]);

  // Handle token invalid error
  useEffect(() => {
    if (error && (error.includes('Invalid') || error.includes('expired'))) {
      const timer = setTimeout(() => {
        router.push('/forgot-password');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, router]);

  if (resetPasswordSuccess) {
    return (
      <div className="text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Password Reset Successful!</h3>
          <p className="text-gray-600 mb-6">
            Your password has been reset successfully. You will be redirected to the login page.
          </p>
          <Link
            href="/login"
            className="inline-block px-6 py-3 bg-[#15C15D] text-white rounded-md hover:bg-[#12a850] transition-all font-poppins"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* Password Input */}
      <div className="flex flex-col gap-2">
        <label className="text-[#555] text-[17px] font-medium font-poppins">
          New Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter new password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 placeholder:text-gray-400 transition-all ${
            formik.touched.password && formik.errors.password
              ? 'border-red-500'
              : 'border-gray-300'
          }`}
          disabled={loading}
          autoComplete="new-password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
        )}
        <p className="text-gray-500 text-xs mt-1">
          Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.
        </p>
      </div>

      {/* Confirm Password Input */}
      <div className="flex flex-col gap-2">
        <label className="text-[#555] text-[17px] font-medium font-poppins">
          Confirm New Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full h-[48px] px-4 border rounded-md outline-none focus:border-[#15C15D] text-gray-600 placeholder:text-gray-400 transition-all ${
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? 'border-red-500'
              : 'border-gray-300'
          }`}
          disabled={loading}
          autoComplete="new-password"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>
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
            Resetting Password...
          </span>
        ) : (
          'Reset Password'
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