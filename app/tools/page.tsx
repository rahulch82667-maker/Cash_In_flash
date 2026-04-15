import ToolsContent from "@/components/tools/ToolsContent";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & Resources | Cash in Flash",
  description: "Explore our financial tools to help you manage your loans and resources.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-[120px]">
      <Navbar />
      <div className="flex-1 w-full bg-white">
        <ToolsContent />
      </div>
      <Footer />
    </main>
  );
}
