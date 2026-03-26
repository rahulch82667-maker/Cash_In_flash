"use client";

import Image from "next/image";

const Trust = () => {
  return (
    <section
      className="w-full h-[624px] relative overflow-hidden flex justify-center"
      style={{
        background: "linear-gradient(118.99deg, #1B3229 0%, #0C1D17 100%)",
      }}
    >
      {/* Background Image  */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/trust_img.jpg"
          alt="Trust Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Wrapper  */}
      <div className="relative z-10 w-[1440px] h-full flex flex-col items-center">
        
        {/* Heading Section */}
        <div className="mt-[62px] w-[681px] h-[108px] relative">
          <h2 
            className="text-white text-center capitalize"
            style={{
              fontFamily: "var(--font-tilt)",
              fontSize: "52px",
              lineHeight: "57.2px",
              fontWeight: 400,
            }}
          >
            <span className="relative inline-block text-[#13EC6D]">
              Trusted
              <div className="absolute left-0 -bottom-2 w-full h-[12px]">
                <Image 
                  src="/line_trust.png" 
                  alt="underline" 
                  fill 
                  className="object-contain"
                />
              </div>
            </span>{" "}
            By Thousands. Built On Relationships.
          </h2>
        </div>

        {/* Three Tabs Container */}
        <div className="mt-[81px] flex gap-[24px] w-[1020px] h-[308px]">
          
          <TrustCard 
            icon="/profile_trust_icon.png"
            title="9 of 10 Members"
            description="would recommend Cash in Flash to friends"
          />

          <TrustCard 
            icon="/smile_trust_icon.png"
            title="Get Approved Quickly"
            description="Our team reviews your info and gives you an instant decision."
            isTallDesc={true}
          />

          <TrustCard 
            icon="/wallet_trust_icon.png"
            title="Testimonial"
            description="Team reviewed my info, instant decision!"
          />
        </div>
      </div>
    </section>
  );
};

const TrustCard = ({ 
  icon, 
  title, 
  description, 
  isTallDesc = false 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  isTallDesc?: boolean;
}) => (
  <div 
    className="relative flex flex-col items-center border border-[#FFFFFF1A] rounded-[24px]"
    style={{
      width: '324px',
      height: '308px',
      background: '#FFFFFF14',
      backdropFilter: 'blur(24px)',
    }}
  >
    <div className="mt-[56px] w-[55px] h-[55px] relative">
      <Image src={icon} alt={title} fill className="object-contain" />
    </div>

    <div 
      className="mt-[43px] flex flex-col gap-[17px] text-center"
      style={{ width: '269px', height: isTallDesc ? '117px' : '89px' }}
    >
      <h3 
        className="text-white font-bold"
        style={{
          fontFamily: "Poppins",
          fontSize: "24px",
          lineHeight: "28px",
        }}
      >
        {title}
      </h3>
      <p 
        className="text-[#B8B8B8]"
        style={{
          fontFamily: "Poppins",
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default Trust;