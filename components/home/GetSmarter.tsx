"use client";

import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    img: "/get_smarter_img_1.jpg",
    text: "Secured loans: What they are, how they work, and when to use them",
    textWidth: "321px",
  },
  {
    id: 2,
    img: "/get_smarter_img_2.jpg",
    text: "How to pay off a loan early: 7 smart ways to save on interest",
    textWidth: "335.9px",
  },
  {
    id: 3,
    img: "/get_smarter_img_3.jpg",
    text: "How to get a personal loan",
    textWidth: "219px",
  },
  {
    id: 4,
    img: "/get_smarter_img_4.jpg",
    text: "What is a credit inquiry?",
    font: "inter",
    textWidth: "360.98px",
  },
  {
    id: 5,
    img: "/get_smarter_img_5.jpg",
    text: "How to get a loan without a cosigner",
    font: "inter",
    textWidth: "360.98px",
  },
  {
    id: 6,
    img: "/get_smarter_img_6.jpg",
    text: "Benefits and drawbacks of refinancing a personal loan",
    font: "inter",
    textWidth: "360.98px",
  },
  {
    id: 7,
    img: "/get_smarter_img_7.jpg",
    text: "What's the difference between debt consolidation and personal loans?",
    font: "inter",
    textWidth: "360.98px",
  },
  {
    id: 8,
    img: "/get_smarter_img_8.jpg",
    text: "How to review loan agreements",
    font: "inter",
    textWidth: "360.98px",
  },
  {
    id: 9,
    img: "/get_smarter_img_9.png",
    text: "Moving and relocation loans",
    font: "inter",
    textWidth: "360.98px",
  },
];

const MOBILE_CARD_GAP = 16;

const GetSmarter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop Constants
  const GAP = 19;
  const CARD_WIDTH = 360.98;

  return (
    <section className="relative overflow-hidden bg-white w-full flex justify-center">
      {/* ── DESKTOP & TABLET LAYOUT ── */}
      <div
        className="hidden md:flex flex-col items-center w-full max-w-[1440px] px-6 lg:px-[120px] mb-[128px]"
        style={{ marginTop: "52px" }}
      >
        {/* Decorative Overlays - Hidden on smaller tablets to avoid overlap */}
        <div className="absolute top-[241px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[475px] z-0 pointer-events-none hidden xl:block">
          <div className="absolute w-[223px] h-[223px] top-[-15px] left-[360px] bg-[#12A14D1A] rounded-tl-[86.4px] rounded-tr-[100.8px] rounded-br-[201.6px] rounded-bl-[187.2px]" />
          <div className="absolute w-[173px] h-[173px] top-[250px] left-[29px] bg-[#DCF9E880] rounded-tl-[134.4px] rounded-tr-[44.8px] rounded-br-[145.6px] rounded-bl-[78.4px]" />
          <div className="absolute w-[61px] h-[62px] top-[250px] left-[503px] bg-[#DCF9E8] rounded-full blur-[24px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Header Section */}
          <div className="flex flex-col gap-[18px] items-center text-center max-w-[586px]">
            <h2
              className="text-[#353535]"
              style={{
                fontFamily: "Tilt Warp",
                fontSize: "clamp(34px, 4vw, 52px)",
                lineHeight: "1.1",
                fontWeight: 400,
              }}
            >
              Get{" "}
              <span className="relative inline-block text-[#13EC6D]">
                Smarter
                <div className="absolute left-0 -bottom-1 w-full h-[12px]">
                  <Image
                    src="/get_started_line.png"
                    alt="line"
                    fill
                    className="object-contain"
                  />
                </div>
              </span>{" "}
              With <br />
              Your Money.
            </h2>
            <p
              className="text-[#676F7E]"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "clamp(16px, 1.5vw, 18px)",
                lineHeight: "26px",
              }}
            >
              Stop guessing with your money and start making it work harder
              through smart, actionable strategies.
            </p>
          </div>

          {/* Carousel Container */}
          <div
            className="relative mt-[59px] overflow-hidden"
            style={{ width: "100%", maxWidth: "1140px" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
                gap: `${GAP}px`,
              }}
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 flex flex-col"
                  style={{ width: `calc((100% - ${GAP * 2}px) / 3)`, paddingTop: "32px" }}
                >
                  <div
                    className="relative overflow-hidden rounded-[15px] w-full aspect-[360/176]"
                  >
                    <Image
                      src={post.img}
                      alt="blog"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p
                    className={`mt-[19.99px] text-[#353535] ${post.font === "inter" ? "font-inter" : "font-poppins"}`}
                    style={{
                      width: "100%",
                      maxWidth: post.textWidth,
                      fontSize: post.font === "inter" ? "16.3px" : "16px",
                      fontWeight: post.font === "inter" ? 400 : 500,
                      lineHeight: "27px",
                      textAlign: post.font === "inter" ? "center" : "left",
                    }}
                  >
                    {post.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-[40px] flex gap-[16px] items-center h-[10px]">
            {[0, 1, 2].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="rounded-full border-2 transition-all duration-300"
                style={{
                  width: currentPage === page ? "24px" : "10px",
                  height: "10px",
                  backgroundColor: currentPage === page ? "#15C15D" : "white",
                  borderColor: currentPage === page ? "#15C15D" : "#000000",
                }}
              />
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="mt-[39px] flex items-center justify-center rounded-[40px] px-8 py-3 text-white hover:opacity-90 transition-opacity"
            style={{
              minWidth: "265px",
              height: "47px",
              background: "linear-gradient(90deg, #15C15D 0%, #13EC6D 100%)",
            }}
          >
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Explore financial education
            </span>
          </button>
        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden relative w-full bg-white pt-10 pb-10 flex flex-col items-center overflow-hidden mb-[40px]">
        {/* Decorative blobs */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            width: "160px",
            height: "160px",
            top: "260px",
            left: "-30px",
            background: "#DCF9E880",
            borderRadius: "134px 45px 146px 78px",
          }}
        />
        <div
          className="absolute pointer-events-none z-0"
          style={{
            width: "110px",
            height: "110px",
            top: "160px",
            right: "-20px",
            background: "#12A14D1A",
            borderRadius: "86px 101px 202px 187px",
          }}
        />

        {/* Header */}
        <div className="relative z-10 flex flex-col gap-4 items-center text-center px-6 w-full">
          <h2
            className="text-[#353535]"
            style={{
              fontFamily: "Tilt Warp",
              fontSize: "34px",
              lineHeight: "40px",
              fontWeight: 400,
            }}
          >
            Get{" "}
            <span className="relative inline-block text-[#13EC6D]">
              Smarter
              <div className="absolute left-0 -bottom-1 w-full h-[10px]">
                <Image
                  src="/get_started_line.png"
                  alt="line"
                  fill
                  className="object-contain"
                />
              </div>
            </span>{" "}
            With <br />
            Your Money.
          </h2>
          <p
            className="text-[#676F7E]"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "24px",
            }}
          >
            Stop guessing with your money and start making it work harder
            through smart, actionable strategies.
          </p>
        </div>

        <div className="relative z-10 w-full mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(24px - ${mobileIndex} * (100vw - 32px)))`,
              gap: `${MOBILE_CARD_GAP}px`,
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 flex flex-col"
                style={{ width: "calc(100vw - 48px)" }}
              >
                <div
                  className="relative overflow-hidden rounded-[15px] w-full"
                  style={{ height: "200px" }}
                >
                  <Image
                    src={post.img}
                    alt="blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="mt-4 text-[#353535]"
                  style={{
                    fontFamily:
                      post.font === "inter"
                        ? "Inter, sans-serif"
                        : "Poppins, sans-serif",
                    fontSize: "15px",
                    fontWeight: post.font === "inter" ? 400 : 500,
                    lineHeight: "24px",
                    textAlign: "left",
                  }}
                >
                  {post.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="relative z-10 mt-6 flex gap-[10px] items-center h-[10px] px-6 overflow-x-auto no-scrollbar max-w-full">
          {blogPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              className="flex-shrink-0 rounded-full border-2 transition-all duration-300"
              style={{
                width: mobileIndex === i ? "24px" : "10px",
                height: "10px",
                backgroundColor: mobileIndex === i ? "#15C15D" : "white",
                borderColor: mobileIndex === i ? "#15C15D" : "#000000",
              }}
            />
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="relative z-10 mt-8 flex items-center justify-center rounded-[40px] text-white hover:opacity-90 transition-opacity"
          style={{
            width: "260px",
            height: "46px",
            background: "linear-gradient(90deg, #15C15D 0%, #13EC6D 100%)",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "15px",
            }}
          >
            Explore financial education
          </span>
        </button>
      </div>
    </section>
  );
};

export default GetSmarter;