'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthCard from '@/components/auth/AuthCard';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
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
        <AuthCard
          title="Forgot Password?"
          subtitle="Enter your email address and we'll send you a link to reset your password."
        >
          <ForgotPasswordForm />
        </AuthCard>
      </div>
    </>
  );
}