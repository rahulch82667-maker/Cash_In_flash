// app/contact-us/page.tsx
import ContactHero from "@/components/contact/ContactHero";
import StoreLocations from "@/components/contact/StoreLocations";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import ThatsSaysItAll from "@/components/home/ThatsSaysItAll";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col">
        <section className="py-10 md:py-16 mt-[50px]">
          <ContactHero />
        </section>

        <section className="py-10 md:py-16 bg-gray-50">
          <StoreLocations />
        </section>

        <section className="py-10 md:py-16">
          <ThatsSaysItAll />
        </section>
      </div>

      <Footer />
    </main>
  );
}