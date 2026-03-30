"use client";

import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Whatever from "@/components/home/Whatever";
import FinancialSolutions from "@/components/home/FinancialSolutions";
import GetStarted from "@/components/home/GetStarted";
import GetSmarter from "@/components/home/GetSmarter";
import ThatsSaysItAll from "@/components/home/ThatsSaysItAll";
import MediaLogos from "@/components/home/MediaLogos";
import PeaceOfMind from "@/components/home/PeaceOfMind";
import Footer from "@/components/home/Footer";
import Disclosures from "@/components/home/Disclosures";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="w-full">
         <Hero />
         <Trust />
         <Whatever />
         <FinancialSolutions />
         <GetStarted />
         <GetSmarter />
         <ThatsSaysItAll />
         <MediaLogos />
         <PeaceOfMind />
         <Footer />
         <Disclosures />
      </main>
    </div>
  );
}