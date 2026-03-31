"use client";

import Image from "next/image";

const Trust = () => {
  return (
    <section
      className="w-full relative overflow-hidden flex justify-center"
      style={{
        background: "linear-gradient(118.99deg, #1B3229 0%, #0C1D17 100%)",
        minHeight: "624px",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/trust_img.jpg"
          alt="Trust Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-[#15C15D]/20 lg:hidden" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] flex flex-col items-center px-5 sm:px-8 lg:px-0 py-12 lg:py-0">

        {/* Heading */}
        <div className="mt-0 lg:mt-[62px] w-full lg:w-[681px] mb-8 lg:mb-0 lg:h-[108px] relative text-center">
          <h2
            className="text-white capitalize"
            style={{
              fontFamily: "var(--font-tilt)",
              fontSize: "clamp(32px, 6vw, 52px)",
              lineHeight: "1.1",
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

        {/* Cards — vertical on mobile, horizontal on desktop */}
        <div className="mt-8 lg:mt-[81px] flex flex-col lg:flex-row gap-4 lg:gap-[24px] w-full lg:w-[1020px] lg:h-[308px] pb-4 lg:pb-0">
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
  isTallDesc = false,
}: {
  icon: string;
  title: string;
  description: string;
  isTallDesc?: boolean;
}) => (
  <div
    className="relative flex flex-row lg:flex-col items-center lg:items-center border border-[#FFFFFF1A] rounded-[20px] lg:rounded-[24px] w-full lg:w-[324px] lg:h-[308px] px-5 py-5 lg:px-0 lg:py-0"
    style={{
      background: "#FFFFFF14",
      backdropFilter: "blur(24px)",
    }}
  >
    {/* Icon */}
    <div className="flex-shrink-0 w-[48px] h-[48px] lg:w-[55px] lg:h-[55px] relative lg:mt-[56px]">
      <Image src={icon} alt={title} fill className="object-contain" />
    </div>

    {/* Text */}
    <div className="ml-4 lg:ml-0 lg:mt-[43px] flex flex-col gap-[8px] lg:gap-[17px] lg:text-center lg:w-[269px]">
      <h3
        className="text-white font-bold"
        style={{
          fontFamily: "Poppins",
          fontSize: "clamp(16px, 4vw, 24px)",
          lineHeight: "1.2",
        }}
      >
        {title}
      </h3>
      <p
        className="text-[#B8B8B8]"
        style={{
          fontFamily: "Poppins",
          fontSize: "clamp(13px, 3.5vw, 18px)",
          lineHeight: "1.6",
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default Trust;