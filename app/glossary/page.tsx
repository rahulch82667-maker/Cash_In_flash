import GlossaryContent from "@/components/glossary/GlossaryContent";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary | Cash in Flash",
  description: "Learn about various financial terms and tools to understand our products better.",
};

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-[120px]">
      <Navbar />
      <div className="flex-1 w-full bg-white">
        <div className="max-w-[1440px] mx-auto">
          <GlossaryContent />
        </div>
      </div>
      <Footer />
    </main>
  );
}
