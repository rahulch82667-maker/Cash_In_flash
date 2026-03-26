"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="relative w-full h-[723px] overflow-hidden flex justify-center" 
      style={{ background: "linear-gradient(199.18deg, #EFFDF7 11.77%, #FFFFFF 88.23%)" }}
    >
      <div className="relative w-[1440px] h-full flex-shrink-0">
        
        <div 
          className="absolute z-10"
          style={{
            width: '288px', height: '288px', top: '133px', left: '-90px',
            backgroundColor: '#15C15D1A', borderRadius: '9999px', backdropFilter: 'blur(64px)'
          }}
        />

        {/* Content Wrapper */}
        <div className="absolute top-[142px] left-[120px] w-[1248.4px] h-[488px] flex items-start">
          
          <div className="flex flex-col w-[608px] mt-[56px] z-20">
            
            {/* Heading Container */}
            <div className="relative w-[550px] mb-[18px]">
              <h1 
                className="text-[#353535]"
                style={{ 
                  fontFamily: 'Tilt Warp', 
                  fontSize: '58px', 
                  lineHeight: '61.8px', 
                  fontWeight: 400 
                }}
              >
                Fast Cash <br />
                When You <span className="relative inline-block text-[#13EC6D]">
                  Need It
                  <div className="absolute left-0 -bottom-2 w-full h-[12px]">
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
              className="text-[#676F7E] w-[435px] mb-[40px]"
              style={{ fontFamily: 'Poppins', fontSize: '18px', lineHeight: '26px', fontWeight: 500 }}
            >
              Affordable loans from $100 to $255. Start moving forward.
            </p>

            {/* Features List */}
            <div className="flex gap-[8px] items-center w-[674px] mb-[40px]">
              <FeatureItem text="Approved in minutes" width="227px" />
              <FeatureItem text="Money same day" width="187px" />
              <FeatureItem text="Good credit not needed" width="244px" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-[18px] w-[457px] mb-[40px]">
              <button 
                className="w-[125px] h-[47px] rounded-[40px] text-white font-medium shadow-lg hover:opacity-90 transition-all active:scale-95"
                style={{ background: 'linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)' }}
              >
                Apply now
              </button>
              <p className="text-[#353535] italic w-[314px]" style={{ fontFamily: 'Arimo', fontSize: '18px', lineHeight: '26px' }}>
                Visit a store or apply online in minutes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-[20px]">
              <Image src="/google_reviews.png" alt="Google" width={89} height={36} className="object-contain" />
              <Image src="/BBB.png" alt="BBB" width={88} height={30} className="object-contain" />
              <Image src="/consumer_affairs.png" alt="Consumer" width={153} height={23} className="object-contain" />
            </div>
          </div>

          <div className="relative w-[583px] h-[475px] ml-auto">
            <div className="absolute w-[223px] h-[223px] top-[17px] left-[360px] bg-[#12A14D1A] rounded-tr-[100.8px] rounded-tl-[86.4px] rounded-br-[201.6px] rounded-bl-[187.2px]" />
            <div className="absolute w-[173px] h-[173px] top-[302px] left-[29px] bg-[#DCF9E880] rounded-tr-[44.8px] rounded-tl-[134.4px] rounded-br-[145.6px] rounded-bl-[78.4px]" />
            
            <div className="absolute top-[50px] left-[93px] flex gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                  <div className="relative w-[163px] h-[278px] overflow-hidden rounded-[14px]">
                      <Image src="/fast_img_1.png" alt="Fast 1" fill className="object-cover" />
                  </div>
                  <div className="relative w-[163px] h-[129px] overflow-hidden rounded-[14px]">
                      <Image src="/fast_img_3.png" alt="Fast 3" fill className="object-cover" />
                  </div>
              </div>
              <div className="relative w-[250.75px] h-[423px] overflow-hidden rounded-[14px]">
                  <Image src="/fast_img_2.png" alt="Fast 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute rotate-[-12deg]"
          style={{
            width: '80px', height: '80px', top: '564px', left: '1320px',
            opacity: 0.2, borderRadius: '24px',
            background: 'linear-gradient(135deg, #15C15D 0%, #13EC6D 100%)'
          }}
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ text, width }: { text: string; width: string }) => (
  <div className="flex items-center gap-[6px]" style={{ width }}>
    <CheckCircle2 className="w-[20px] h-[20px] text-[#15C15D]" strokeWidth={2.5} />
    <span className="text-[#353535] whitespace-nowrap" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 500 }}>
      {text}
    </span>
  </div>
);

export default Hero;