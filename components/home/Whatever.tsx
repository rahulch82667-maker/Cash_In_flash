"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const Whatever = () => {
  return (
    <section className="relative w-full flex justify-center bg-white py-20  ">
      {/* Main Container */}
      <div className="relative w-[1200px] h-[439px] flex items-start justify-between gap-[30px]">
        
        <div className="relative w-[583px] h-[475px]  flex-shrink-0">
          
          {/* Decorative Overlays */}
          <div className="absolute w-[223px] h-[223px] top-[17px] left-[360px] bg-[#12A14D1A] rounded-tl-[86.4px] rounded-tr-[100.8px] rounded-br-[201.6px] rounded-bl-[187.2px] z-0" />
          <div className="absolute w-[173px] h-[173px] top-[302px] left-[29px] bg-[#DCF9E880] rounded-tl-[134.4px] rounded-tr-[44.8px] rounded-br-[145.6px] rounded-bl-[78.4px] z-0" />
          <div className="absolute w-[49px] h-[49px] top-[147px] left-[48px] bg-[#12A14D33] rounded-full blur-[24px] z-0" />
          <div className="absolute w-[61px] h-[62px] top-[250px] left-[503px] bg-[#DCF9E8] rounded-full blur-[24px] z-10" />

          <div className="relative z-10 flex flex-col gap-[16px]">
            <div className="relative w-[423px] h-[222px] overflow-hidden rounded-[20px]">
              <Image src="/whatever_img_1.jpg" alt="Whatever 1" fill className="object-cover" />
            </div>
            <div className="relative w-[423px] h-[185px] overflow-hidden rounded-[20px]">
              <Image src="/whatever_img_2.jpg" alt="Whatever 2" fill className="object-cover" />
              
              {/* Happy Customer Box */}
              <div 
                className="absolute bottom-[20px] left-[27px] w-[329px] h-[71px] bg-white rounded-[12px] shadow-sm flex items-center px-[14px] z-20"
              >
                <div className="flex -space-x-4">
                  {[3, 2, 1].map((i) => (
                    <div key={i} className="relative w-[45px] h-[45px] rounded-full border-2 border-white overflow-hidden">
                      <Image src={`/happy_customer_profile_${i}.jpg`} alt="profile" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-[#353535] text-[17px] font-medium font-poppins leading-none whitespace-nowrap">10k Happy Customers</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFB400" color="#FFB400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[664px] h-[439px] flex flex-col relative z-20">
          
          {/* Header */}
          <h2 
            className="text-[#353535]"
            style={{ fontFamily: 'Tilt Warp', fontSize: '52px', lineHeight: '58.75px', fontWeight: 400 }}
          >
            Cash Advances For <br />
            <span className="relative inline-block text-[#13EC6D]">
              Whatever
              <div className="absolute left-0 -bottom-2 w-full h-[12px]">
                <Image src="/line_whatever.png" alt="underline" fill className="object-contain" />
              </div>
            </span> Comes Next
          </h2>

          {/* Description */}
          <p 
            className="text-[#676F7E] mt-[17px] w-[675px]"
            style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 500, lineHeight: '26px' }}
          >
            Fast online applications, quick approvals, and flexible repayment options so you can access your funds without delay.
          </p>

          {/* Three Tabs Container */}
          <div className="mt-[19px] flex gap-[17px] w-[631px] h-[150px]">
            <InfoTab 
              title="From $100 to $255"
              desc="For bills, repairs, deposits, and more"
            />
            <InfoTab 
              title="Fast funding. Simple application"
              desc="Direct deposit, get paid faster"
            />
            <InfoTab 
              title="Payments you can afford"
              desc="Designed to fit your budget and lifestyle"
            />
          </div>

          <div className="mt-[34px] flex items-center gap-[18px]">
            <button 
              className="w-[125px] h-[47px] rounded-[40px] text-white transition-transform active:scale-95"
              style={{ 
                background: 'linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)',
                fontFamily: 'Poppins', fontSize: '16px', fontWeight: 500
              }}
            >
              Apply now
            </button>
            <button 
              className="text-[#353535] italic"
              style={{ fontFamily: 'Arimo', fontSize: '18px', fontWeight: 400 }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoTab = ({ title, desc }: { title: string; desc: string }) => (
  <div className="w-[199px] h-[150px] border border-[#F2F2F2] rounded-[20px] bg-[#FFFFFF] p-[18px] flex flex-col gap-[10px]">
    <h3 
      className="text-[#353535] w-[165px]"
      style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '17px', lineHeight: '24px' }}
    >
      {title}
    </h3>
    <p 
      className="text-[#353535] w-[167px]"
      style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '22px' }}
    >
      {desc}
    </p>
  </div>
);

export default Whatever;