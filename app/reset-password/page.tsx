'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthCard from '@/components/auth/AuthCard';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  if (!token) {
    return (
      <AuthCard title="Invalid Reset Link">
        <div className="text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Invalid Reset Link</h3>
            <p className="text-gray-600 mb-6">
              This password reset link is invalid or has expired.
            </p>
            <a
              href="/forgot-password"
              className="inline-block px-6 py-3 bg-[#15C15D] text-white rounded-md hover:bg-[#12a850] transition-all font-poppins"
            >
              Request New Reset Link
            </a>
          </div>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Create New Password"
      subtitle="Please enter your new password below."
    >
      <ResetPasswordForm token={token} />
    </AuthCard>
  );
}

export default function ResetPasswordPage() {
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
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Suspense >
          <ResetPasswordContent />
        </Suspense>
      </div>
    </>
  );
}