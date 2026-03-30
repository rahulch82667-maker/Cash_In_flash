"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FinancialSolutions = () => {
  return (
    <section
      className="relative w-full h-[677px] overflow-hidden flex justify-center"
      style={{
        background: "linear-gradient(118.99deg, #1B3229 0%, #0C1D17 100%)",
      }}
    >
      <div className="relative w-[1440px] h-full flex-shrink-0">
        {/* Decorative Blur Overlays */}
        <div
          className="absolute z-0 rounded-full blur-[120px]"
          style={{
            width: "384px",
            height: "384px",
            top: "213px",
            left: "1016px",
            background: "#0EA46D",
            opacity: 0.15,
          }}
        />
        <div
          className="absolute z-0 rounded-full blur-[100px]"
          style={{
            width: "288px",
            height: "288px",
            top: "378px",
            left: "70px",
            background: "#27B07D",
            opacity: 0.15,
          }}
        />

        <div
          className="absolute z-10"
          style={{
            width: "767px",
            height: "265px",
            top: "16px",
            left: "337px",
          }}
        >
          <Image
            src="/financial_img.png"
            alt="App Preview"
            fill
            className="object-contain"
          />
        </div>

        {/* Center Content Section */}
        <div
          className="absolute z-20 flex flex-col items-center text-center"
          style={{
            width: "633px",
            height: "243px",
            top: "339px",
            left: "404px",
          }}
        >
          {/* Header and Subtext Container */}
          <div className="flex flex-col gap-[18px] w-[633px] items-center mb-[50px]">
            <h2
              className="text-white capitalize"
              style={{
                fontFamily: "Tilt Warp",
                fontSize: "52px",
                lineHeight: "57.2px",
                fontWeight: 400,
              }}
            >
              Smart{" "}
              <span className="relative inline-block text-[#13EC6D]">
                Financial Solutions
                <div className="absolute left-0 -bottom-1 w-full h-[10px]">
                  <Image
                    src="/financial_line.png"
                    alt="underline"
                    fill
                    className="object-contain"
                  />
                </div>
              </span>
              , <br />
              Right At Your Fingertips.
            </h2>

            <p
              className="text-white"
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                lineHeight: "28px",
                fontWeight: 400,
              }}
            >
              The Cash in Flash app helps you set goals and save automatically.
            </p>
          </div>

          <button
            className="group relative flex items-center justify-center gap-[4px] transition-transform active:scale-95"
            style={{
              width: "259px",
              height: "47px",
              borderRadius: "40px",
              background: "linear-gradient(90deg, #15C15D 0%, #13EC6D 100%)",
              boxShadow:
                "0px 10px 15px -3px #0000001A, 0px 4px 6px -4px #0000001A",
            }}
          >
            <span
              className="text-white"
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
              }}
            >
              Get the Cash in Flash app
            </span>
            <ArrowRight
              className="text-white w-[16px] h-[16px]"
              strokeWidth={2.5}
            />
          </button>
        </div>

        {/* Footer Disclaimer Text */}
        <p
          className="absolute text-white italic opacity-100"
          style={{
            width: "273px",
            height: "27px",
            top: "597px",
            left: "584px",
            fontFamily: "Arimo",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          Standard data charges may apply
        </p>
      </div>
    </section>
  );
};

export default FinancialSolutions;
