import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import PaymentHero from "@/components/payment/PaymentHero";
import PaymentForm from "@/components/payment/PaymentForm";

export default function MakeAPaymentPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <PaymentHero />
        <div className="py-16 md:py-24 bg-gray-50">
          <PaymentForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}