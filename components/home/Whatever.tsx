"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const Whatever = () => {
  return (
    <section className="relative w-full flex justify-center bg-white py-10 md:py-14 xl:py-20">
      {/* Main Container */}
      <div className="relative w-full max-w-[1200px] px-5 sm:px-8 md:px-10 xl:px-0 flex flex-col md:flex-row md:items-start md:justify-between md:gap-6 xl:gap-[30px] xl:h-[439px]">

        <div className="relative w-full md:w-[45%] xl:w-[583px] xl:h-[475px] flex-shrink-0 mb-8 md:mb-0">

          <div className="hidden xl:block absolute w-[223px] h-[223px] top-[17px] left-[360px] bg-[#12A14D1A] rounded-tl-[86.4px] rounded-tr-[100.8px] rounded-br-[201.6px] rounded-bl-[187.2px] z-0" />
          <div className="hidden xl:block absolute w-[173px] h-[173px] top-[302px] left-[29px] bg-[#DCF9E880] rounded-tl-[134.4px] rounded-tr-[44.8px] rounded-br-[145.6px] rounded-bl-[78.4px] z-0" />
          <div className="hidden xl:block absolute w-[49px] h-[49px] top-[147px] left-[48px] bg-[#12A14D33] rounded-full blur-[24px] z-0" />
          <div className="hidden xl:block absolute w-[61px] h-[62px] top-[250px] left-[503px] bg-[#DCF9E8] rounded-full blur-[24px] z-10" />

          {/* Images */}
          <div className="relative z-10 flex flex-col gap-[16px]">
            <div
              className="relative w-full xl:w-[423px] overflow-hidden rounded-[20px]"
              style={{ aspectRatio: "423/222" }}
            >
              <Image src="/whatever_img_1.jpg" alt="Whatever 1" fill className="object-cover" />
            </div>
            <div
              className="relative w-full xl:w-[423px] overflow-hidden rounded-[20px]"
              style={{ aspectRatio: "423/185" }}
            >
              <Image src="/whatever_img_2.jpg" alt="Whatever 2" fill className="object-cover" />

              {/* Happy Customer Box */}
              <div className="absolute bottom-[12px] left-[12px] right-[12px] md:left-[16px] md:right-[16px] xl:left-[27px] xl:right-auto xl:w-[329px] h-[58px] md:h-[64px] xl:h-[71px] bg-white rounded-[12px] shadow-sm flex items-center px-[12px] xl:px-[14px] z-20">
                <div className="flex -space-x-3 xl:-space-x-4">
                  {[3, 2, 1].map((i) => (
                    <div
                      key={i}
                      className="relative w-[34px] h-[34px] md:w-[38px] md:h-[38px] xl:w-[45px] xl:h-[45px] rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={`/happy_customer_profile_${i}.jpg`}
                        alt="profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-3 xl:ml-4">
                  <p className="text-[#353535] text-[13px] md:text-[14px] xl:text-[17px] font-medium font-poppins leading-none whitespace-nowrap">
                    10k Happy Customers
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="#FFB400" color="#FFB400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[52%] xl:w-[664px] xl:h-[439px] flex flex-col relative z-20">

          {/* Heading */}
          <h2
            className="text-[#353535]"
            style={{
              fontFamily: "Tilt Warp",
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: "1.13",
              fontWeight: 400,
            }}
          >
            Cash Advances For <br />
            <span className="relative inline-block text-[#13EC6D]">
              Whatever
              <div className="absolute left-0 -bottom-2 w-full h-[12px]">
                <Image src="/line_whatever.png" alt="underline" fill className="object-contain" />
              </div>
            </span>{" "}
            Comes Next
          </h2>

          {/* Description */}
          <p
            className="text-[#676F7E] mt-[17px] w-full xl:w-[675px]"
            style={{
              fontFamily: "Poppins",
              fontSize: "clamp(13px, 1.6vw, 18px)",
              fontWeight: 500,
              lineHeight: "26px",
            }}
          >
            Fast online applications, quick approvals, and flexible repayment
            options so you can access your funds without delay.
          </p>

          <div className="mt-[19px] flex flex-col xl:flex-row xl:gap-[17px] xl:w-[631px] xl:h-[150px] divide-y divide-[#F2F2F2] xl:divide-y-0">
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

          {/* Buttons */}
          <div className="mt-[24px] xl:mt-[34px] flex items-center gap-[18px]">
            <button
              className="w-[125px] h-[47px] rounded-[40px] text-white transition-transform active:scale-95"
              style={{
                background: "linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Apply now
            </button>
            <button
              className="text-[#353535] italic"
              style={{ fontFamily: "Arimo", fontSize: "18px", fontWeight: 400 }}
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
  <div className="w-full xl:w-[199px] xl:h-[150px] xl:border xl:border-[#F2F2F2] xl:rounded-[20px] bg-white py-4 md:py-5 xl:p-[18px] flex flex-col gap-[6px] xl:gap-[10px]">
    <h3
      className="text-[#353535]"
      style={{
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "clamp(14px, 1.8vw, 17px)",
        lineHeight: "24px",
      }}
    >
      {title}
    </h3>
    <p
      className="text-[#353535]"
      style={{
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "clamp(12px, 1.5vw, 16px)",
        lineHeight: "22px",
      }}
    >
      {desc}
    </p>
  </div>
);

export default Whatever;