import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CashAdvanceHero from "@/components/cash-advance/CashAdvanceHero";
import HowItWorks from "@/components/cash-advance/HowItWorks";
import AdvanceBenefits from "@/components/cash-advance/AdvanceBenefits";
export default function CashAdvancePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <CashAdvanceHero />
        <HowItWorks />
        <AdvanceBenefits />
      </div>

      <Footer />
    </main>
  );
}