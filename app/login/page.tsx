import LoginForm from "@/components/login/LoginForm";
import AuthAnimation from "@/components/AuthAnimation";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Cash in Flash',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full flex">
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center py-10 lg:py-20 bg-gray-50">
        <LoginForm />
      </div>
      <AuthAnimation />
    </main>
  );
}