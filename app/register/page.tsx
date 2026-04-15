import RegisterForm from "@/components/register/RegisterForm";
import AuthAnimation from "@/components/AuthAnimation";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Cash in Flash',
  description: 'Create your account to get started',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen w-full flex">
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center py-10 lg:py-20 bg-gray-50">
        <RegisterForm />
      </div>
      <AuthAnimation />
    </main>
  );
}