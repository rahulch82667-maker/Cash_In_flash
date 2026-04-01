import LoginForm from "@/components/login/LoginForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Cash in Flash',
  description: 'Login to your account',
};


export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20">
      <LoginForm />
    </main>
  );
}