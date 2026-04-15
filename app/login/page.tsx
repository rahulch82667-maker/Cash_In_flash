import LoginForm from "@/components/login/LoginForm";
import AuthAnimation from "@/components/AuthAnimation";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Cash in Flash',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow-xl flex overflow-hidden">
        <AuthAnimation />
        <div className="w-full lg:w-1/2 flex items-center justify-center py-10 lg:py-16">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}