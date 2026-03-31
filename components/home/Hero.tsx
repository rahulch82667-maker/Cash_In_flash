"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex justify-center items-center"
      style={{
        background:
          "linear-gradient(199.18deg, #EFFDF7 11.77%, #FFFFFF 88.23%)",
      }}
    >
      {/* Desktop height constraint & Container centering */}
      <div className="relative w-full max-w-[1440px] min-h-[700px] lg:h-[723px] flex-shrink-0">
        {/* Decorative blur circle — Hidden on small mobile for cleaner UI, visible on md+ */}
        <div
          className="absolute z-10 hidden md:block"
          style={{
            width: "288px",
            height: "288px",
            top: "10%",
            left: "-90px",
            backgroundColor: "#15C15D1A",
            borderRadius: "9999px",
            backdropFilter: "blur(64px)",
          }}
        />

        {/* Content Wrapper */}
        <div className="relative lg:absolute lg:top-[142px] lg:left-[120px] lg:w-[calc(100%-240px)] xl:w-[1248.4px] lg:h-[488px] w-full flex flex-col lg:flex-row lg:items-start px-6 sm:px-12 lg:px-0 pt-32 md:pt-53 lg:pt-0 pb-12 lg:pb-0">
          {/* Left: Text Content */}
          <div className="flex flex-col w-full lg:w-[50%] xl:w-[608px] lg:mt-[56px] z-20">
            {/* Heading */}
            <div className="relative w-full lg:w-[550px] mb-[18px]">
              <h1
                className="text-[#353535]"
                style={{
                  fontFamily: "Tilt Warp",
                  fontSize: "clamp(32px, 5vw, 58px)",
                  lineHeight: "1.1",
                  fontWeight: 400,
                }}
              >
                Fast Cash <br />
                When You{" "}
                <span className="relative inline-block text-[#13EC6D]">
                  Need It
                  <div className="absolute left-0 -bottom-1 lg:-bottom-2 w-full h-[8px] lg:h-[12px]">
                    <Image
                      src="/line_hero.png"
                      alt="underline decoration"
                      fill
                      className="object-contain"
                    />
                  </div>
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p
              className="text-[#676F7E] w-full lg:max-w-[435px] mb-[24px] lg:mb-[40px]"
              style={{
                fontFamily: "Poppins",
                fontSize: "clamp(16px, 1.8vw, 18px)",
                lineHeight: "1.5",
                fontWeight: 500,
              }}
            >
              Affordable loans from $100 to $255.
              <br className="hidden lg:block" /> Start moving forward.
            </p>

            {/* Features List */}
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-3 items-center mb-[32px] lg:mb-[40px]">
              <FeatureItem text="Approved in minutes" />
              <FeatureItem text="Money same day" />
              <FeatureItem text="Good credit not needed" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] lg:gap-[18px] mb-[32px] lg:mb-[40px]">
              <button
                className="
    w-fit
    px-5 sm:px-8
    h-[36px] sm:h-[47px]
    text-[14px] sm:text-base
    rounded-[40px]
    text-white font-medium
    shadow-md
    hover:opacity-90 transition-all active:scale-95
  "
                style={{
                  background:
                    "linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)",
                }}
              >
                Apply now
              </button>{" "}
              <p
                className="text-[#353535] italic"
                style={{
                  fontFamily: "Arimo",
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  lineHeight: "1.2",
                }}
              >
                Visit a store or apply online in minutes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-[20px] lg:gap-[24px]">
              <Image
                src="/google_reviews.png"
                alt="Google"
                width={89}
                height={36}
                className="object-contain h-[30px] lg:h-[36px] w-auto"
              />
              <Image
                src="/BBB.png"
                alt="BBB"
                width={88}
                height={30}
                className="object-contain h-[26px] lg:h-[30px] w-auto"
              />
              <Image
                src="/consumer_affairs.png"
                alt="Consumer"
                width={153}
                height={23}
                className="object-contain h-[20px] lg:h-[23px] w-auto"
              />
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="relative w-full lg:w-[45%] xl:w-[583px] lg:h-[475px] lg:ml-auto mt-12 lg:mt-8 flex justify-center ">
            {/* Decorative blobs — hidden on tablets to prevent clutter, visible on lg+ */}
            <div className="hidden xl:block absolute w-[223px] h-[223px] top-[17px] left-[360px] bg-[#12A14D1A] rounded-tr-[100.8px] rounded-tl-[86.4px] rounded-br-[201.6px] rounded-bl-[187.2px]" />
            <div className="hidden xl:block absolute w-[173px] h-[173px] top-[302px] left-[29px] bg-[#DCF9E880] rounded-tr-[44.8px] rounded-tl-[134.4px] rounded-br-[145.6px] rounded-bl-[78.4px]" />

            {/* Responsive Image Grid (Mobile & Tablet Layout) */}
            <div className="flex lg:hidden gap-[10px] w-full max-w-[500px]">
              <div className="flex flex-col gap-[10px] flex-1">
                <div className="relative w-full aspect-[163/278] overflow-hidden rounded-[14px]">
                  <Image
                    src="/fast_img_1.png"
                    alt="Fast 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[163/129] overflow-hidden rounded-[14px]">
                  <Image
                    src="/fast_img_3.png"
                    alt="Fast 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative flex-[1.5] aspect-[250/423] overflow-hidden rounded-[14px]">
                <Image
                  src="/fast_img_2.png"
                  alt="Fast 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Desktop Image Grid (Visible only on LG monitors) */}
            <div className="hidden lg:flex absolute lg:top-[20px] xl:top-[50px] lg:left-0 xl:left-[93px] gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <div className="relative lg:w-[130px] xl:w-[163px] lg:h-[220px] xl:h-[278px] overflow-hidden rounded-[14px]">
                  <Image
                    src="/fast_img_1.png"
                    alt="Fast 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative lg:w-[130px] xl:w-[163px] lg:h-[100px] xl:h-[129px] overflow-hidden rounded-[14px]">
                  <Image
                    src="/fast_img_3.png"
                    alt="Fast 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative lg:w-[200px] xl:w-[250.75px] lg:h-[340px] xl:h-[423px] overflow-hidden rounded-[14px]">
                <Image
                  src="/fast_img_2.png"
                  alt="Fast 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative rotated square — Hidden on small screens */}
        <div
          className="hidden xl:block absolute rotate-[-12deg]"
          style={{
            width: "80px",
            height: "80px",
            top: "564px",
            left: "1320px",
            opacity: 0.2,
            borderRadius: "24px",
            background: "linear-gradient(135deg, #15C15D 0%, #13EC6D 100%)",
          }}
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-[6px]">
    <CheckCircle2
      className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] flex-shrink-0 text-[#15C15D]"
      strokeWidth={2.5}
    />
    <span
      className="text-[#353535] whitespace-nowrap"
      style={{
        fontFamily: "Poppins",
        fontSize: "clamp(14px, 1.5vw, 18px)",
        fontWeight: 500,
      }}
    >
      {text}
    </span>
  </div>
);

export default Hero;
