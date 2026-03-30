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
    text: "What‘s the difference between debt consolidation and personal loans?",
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

const GetSmarter = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Constants to match Figma exactly
  const IMAGE_WIDTH = 360.98;
  const IMAGE_HEIGHT = 176;
  const GAP = 19; // Space between cards to allow the 4th to peek
  const CARD_WIDTH = IMAGE_WIDTH;

  return (
    <section
      className="relative flex flex-col items-center bg-white overflow-hidden"
      style={{ width: "1440px", height: "816px", marginTop: "52px" }}
    >
      {/* Decorative Overlays */}
      <div className="absolute top-[241px] left-[238px] w-[583px] h-[475px] z-0 pointer-events-none">
        <div className="absolute w-[223px] h-[223px] top-[-15px] left-[360px] bg-[#12A14D1A] rounded-tl-[86.4px] rounded-tr-[100.8px] rounded-br-[201.6px] rounded-bl-[187.2px]" />
        <div className="absolute w-[173px] h-[173px] top-[250px] left-[29px] bg-[#DCF9E880] rounded-tl-[134.4px] rounded-tr-[44.8px] rounded-br-[145.6px] rounded-bl-[78.4px]" />
        <div className="absolute w-[61px] h-[62px] top-[250px] left-[503px] bg-[#DCF9E8] rounded-full blur-[24px]" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ width: "1200px" }}
      >
        {/* Header Section */}
        <div
          className="flex flex-col gap-[18px] items-center text-center"
          style={{ width: "586px", height: "190px" }}
        >
          <h2
            className="text-[#353535]"
            style={{
              fontFamily: "Tilt Warp",
              fontSize: "52px",
              lineHeight: "58.75px",
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
              fontSize: "18px",
              lineHeight: "26px",
            }}
          >
            Stop guessing with your money and start making it work harder
            through smart, actionable strategies.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mt-[59px] h-[312px] overflow-hidden"
          style={{ width: "1140px" }}
        >
          <div
            className="flex gap-[19px] transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * (CARD_WIDTH * 3 + GAP * 2)}px)`,
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 flex flex-col"
                style={{ width: `${CARD_WIDTH}px`, paddingTop: "32px" }}
              >
                {/* Fixed Image Size from Figma */}
                <div
                  className="relative overflow-hidden rounded-[15px]"
                  style={{
                    width: `${IMAGE_WIDTH}px`,
                    height: `${IMAGE_HEIGHT}px`,
                  }}
                >
                  <Image
                    src={post.img}
                    alt="blog"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <p
                  className={`mt-[19.99px] text-[#353535] ${post.font === "inter" ? "font-inter" : "font-poppins"}`}
                  style={{
                    width: post.textWidth,
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
        <div className="mt-[20px] flex gap-[16px] items-center h-[10px]">
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
          className="mt-[39px] flex items-center justify-center rounded-[40px] text-white hover:opacity-90 transition-opacity"
          style={{
            width: "265px",
            height: "47px",
            background: "linear-gradient(90deg, #15C15D 0%, #13EC6D 100%)",
          }}
        >
          <span
            style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "16px" }}
          >
            Explore financial education
          </span>
        </button>
      </div>
    </section>
  );
};

export default GetSmarter;
