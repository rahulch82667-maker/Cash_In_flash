import RegisterForm from "@/components/register/RegisterForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Cash in Flash',
  description: 'Create your account to get started',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <RegisterForm />
    </main>
  );
}