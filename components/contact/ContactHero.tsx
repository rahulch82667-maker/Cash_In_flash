import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
      {/* Map Side */}
      <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <Image 
          src="/contact_map.webp" 
          alt="Store Location Map"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 font-poppins">
        <h1 className="text-[48px] font-bold text-[#2D2D32] mb-6">Contact Us</h1>
        <p className="text-[#606060] text-[18px] leading-[28px] mb-10">
          Our friendly team is ready to assist you every step of the way—whether you visit us in person, reach out by chat, call us, or send an email. We're here to make sure you get the fast, reliable service you deserve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-[20px] mb-2">Store Location</h3>
            <p className="text-[#606060]">13937B Van Nuys Blvd<br />Arleta, CA 91331</p>
            <p className="mt-4 font-medium">(747) 270-7121</p>
          </div>
          <div>
            <h3 className="font-bold text-[20px] mb-2">Store Hours:</h3>
            <p className="text-[#606060]">Monday-Friday: 10AM-7PM</p>
            <p className="text-[#606060]">Saturday: 10AM-6PM</p>
            <p className="text-[#606060]">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;