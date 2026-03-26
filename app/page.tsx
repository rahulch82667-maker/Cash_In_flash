"use client";

import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="w-full">
         <Hero />
         <Trust />
      </main>
    </div>
  );
}