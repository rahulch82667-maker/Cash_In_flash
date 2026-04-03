import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import FAQHero from "@/components/faq/FAQHero";
import ThatsSaysItAll from "@/components/home/ThatsSaysItAll";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex flex-col gap-10 md:gap-20 pb-20 mt-[70px]">
        
        <FAQHero />

        <section className="container mx-auto">
          < ThatsSaysItAll />
        </section>
        
      </div>

      <Footer />
    </main>
  );
}