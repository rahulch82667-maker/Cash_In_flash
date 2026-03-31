"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF]">
      <div
        className="hidden xl:block relative"
        style={{ width: "1440px", height: "600px" }}
      >
        {/* Background Decorative Blurs */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            width: "384px",
            height: "384px",
            top: "316px",
            left: "1111px",
            borderRadius: "9999px",
            background: "rgba(21, 193, 93, 0.05)",
            backdropFilter: "blur(64px)",
            WebkitBackdropFilter: "blur(64px)",
          }}
        />
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            width: "384px",
            height: "384px",
            top: "108px",
            left: "-100px",
            borderRadius: "9999px",
            background: "rgba(21, 193, 93, 0.05)",
            backdropFilter: "blur(64px)",
            WebkitBackdropFilter: "blur(64px)",
          }}
        />

        {/* Main Content Container */}
        <div
          className="absolute z-10"
          style={{ width: "1400px", height: "454px", top: "96px", left: "20px" }}
        >
          {/* Header and Subtext */}
          <div
            className="absolute flex flex-col gap-[18px]"
            style={{
              width: "679.23px",
              height: "170px",
              top: "-3px",
              left: "100px",
            }}
          >
            <div
              className="flex flex-col gap-[3px]"
              style={{ width: "483px", height: "104px" }}
            >
              <h2
                className="text-[#14181F]"
                style={{
                  fontFamily: "Tilt Warp",
                  fontSize: "48px",
                  lineHeight: "48px",
                  fontWeight: 400,
                  letterSpacing: "-1.2px",
                }}
              >
                Three Simple Ways To <br />
                <span className="relative inline-block text-[#13EC6D]">
                  Get Started
                  <div className="absolute left-0 -bottom-1 w-full h-[12px]">
                    <Image
                      src="/get_started_line.png"
                      alt="line"
                      fill
                      className="object-contain"
                    />
                  </div>
                </span>
              </h2>
            </div>
            <p
              className="text-[#676F7E]"
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                lineHeight: "26px",
                fontWeight: 500,
                width: "679.23px",
              }}
            >
              Apply online today for fast approval and flexible repayment options.
              Our streamlined process helps you access your funds quickly.
            </p>
          </div>

          {/* Maria R. Testimonial Tab */}
          <div
            className="absolute bg-[#EEF9F4] rounded-[15px]"
            style={{
              width: "453px",
              height: "123px",
              top: "44px",
              left: "847px",
            }}
          >
            <div
              className="absolute flex items-center gap-[16px]"
              style={{
                width: "421px",
                height: "81px",
                top: "21px",
                left: "15.5px",
              }}
            >
              <div
                className="relative rounded-full border-2 border-white overflow-hidden flex-shrink-0"
                style={{ width: "75px", height: "75px" }}
              >
                <Image
                  src="/get_started_img.jpg"
                  alt="Maria R"
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className="flex flex-col gap-[5px]"
                style={{ width: "330px", height: "81px" }}
              >
                <div
                  className="flex items-center gap-[15px]"
                  style={{ width: "207.82px", height: "30px" }}
                >
                  <span
                    className="text-black whitespace-nowrap"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    — Maria R.
                  </span>
                  <div
                    className="flex gap-[2px]"
                    style={{ width: "87.82px", height: "14.36px" }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFB400" color="#FFB400" />
                    ))}
                  </div>
                </div>
                <p
                  className="text-[#676F7E]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    lineHeight: "21px",
                    fontWeight: 400,
                  }}
                >
                  "Fast, easy, and stress-free. Cash in Flash really came through
                  when I needed it."
                </p>
              </div>
            </div>
          </div>

          {/* Three Step Tabs Container */}
          <div
            className="absolute flex gap-[62px]"
            style={{
              width: "1126px",
              height: "127px",
              top: "280px",
              left: "137px",
            }}
          >
            {/* Step 01: In Person */}
            <div
              style={{ width: "328px", height: "127px" }}
              className="relative flex"
            >
              <div style={{ width: "80px", height: "80px" }} className="relative">
                <Image
                  src="/get_started_location.png"
                  alt="In Person"
                  width={55}
                  height={55}
                />
                <div className="absolute bottom-0 left-0 w-full h-[15px]">
                  <Image src="/get_started_icons_line.png" alt="decor" fill />
                </div>
              </div>
              <div
                className="absolute flex flex-col gap-[15px]"
                style={{
                  width: "236px",
                  height: "116px",
                  top: "11px",
                  left: "92px",
                }}
              >
                <div
                  className="flex items-center gap-[10px]"
                  style={{ width: "145px", height: "32px" }}
                >
                  <div
                    className="relative flex items-center justify-center text-white"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "9999px",
                      background:
                        "linear-gradient(135deg, #172136 0%, #2D3953 100%)",
                      boxShadow:
                        "0px 10px 15px -3px #0000001A, 0px 4px 6px -4px #0000001A",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      01
                    </span>
                  </div>
                  <h3
                    className="text-[#14181F]"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "24px",
                      fontWeight: 500,
                      letterSpacing: "-0.6px",
                    }}
                  >
                    In Person
                  </h3>
                </div>
                <p
                  className="text-[#676F7E]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    lineHeight: "26px",
                    fontWeight: 400,
                  }}
                >
                  Complete our simple online application in just 5 minutes no
                  hassle.
                </p>
              </div>
            </div>

            {/* Step 02: By Phone */}
            <div
              style={{ width: "328px", height: "127px" }}
              className="relative flex"
            >
              <div style={{ width: "80px", height: "80px" }} className="relative">
                <Image
                  src="/get_started_phone.png"
                  alt="By Phone"
                  width={55}
                  height={55}
                />
                <div className="absolute bottom-0 left-0 w-full h-[15px]">
                  <Image src="/get_started_icons_line.png" alt="decor" fill />
                </div>
              </div>
              <div
                className="absolute flex flex-col gap-[15px]"
                style={{
                  width: "236px",
                  height: "116px",
                  top: "11px",
                  left: "92px",
                }}
              >
                <div
                  className="flex items-center gap-[10px]"
                  style={{ width: "145px", height: "32px" }}
                >
                  <div
                    className="flex items-center justify-center text-white"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "9999px",
                      background:
                        "linear-gradient(135deg, #172136 0%, #2D3953 100%)",
                      boxShadow: "0px 10px 15px -3px #0000001A",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      02
                    </span>
                  </div>
                  <h3
                    className="text-[#14181F]"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "24px",
                      fontWeight: 500,
                      letterSpacing: "-0.6px",
                    }}
                  >
                    By Phone
                  </h3>
                </div>
                <p
                  className="text-[#676F7E]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    lineHeight: "26px",
                    fontWeight: 400,
                  }}
                >
                  Get an instant decision. Most applications are approved within
                  minutes.
                </p>
              </div>
            </div>

            {/* Step 03: Online */}
            <div
              style={{ width: "328px", height: "127px" }}
              className="relative flex"
            >
              <div style={{ width: "80px", height: "80px" }} className="relative">
                <Image
                  src="/get_started_web.png"
                  alt="Online"
                  width={55}
                  height={55}
                />
                <div className="absolute bottom-0 left-0 w-full h-[15px]">
                  <Image src="/get_started_icons_line.png" alt="decor" fill />
                </div>
              </div>
              <div
                className="absolute flex flex-col gap-[15px]"
                style={{
                  width: "254px",
                  height: "91px",
                  top: "11px",
                  left: "92px",
                }}
              >
                <div
                  className="flex items-center gap-[10px]"
                  style={{ width: "116px", height: "32px" }}
                >
                  <div
                    className="flex items-center justify-center text-white"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "9999px",
                      background:
                        "linear-gradient(135deg, #172136 0%, #2D3953 100%)",
                      boxShadow: "0px 10px 15px -3px #0000001A",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      03
                    </span>
                  </div>
                  <h3
                    className="text-[#14181F]"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "24px",
                      fontWeight: 500,
                      letterSpacing: "-0.6px",
                    }}
                  >
                    Online
                  </h3>
                </div>
                <p
                  className="text-[#676F7E]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    lineHeight: "26px",
                    fontWeight: 400,
                  }}
                >
                  Get your funds are deposited directly and quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TABLET LAYOUT (768px – 1279px) ── */}
      <div className="hidden md:flex xl:hidden relative w-full bg-white flex-col gap-10 px-10 py-14">
        {/* Decorative Blurs */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            width: "300px",
            height: "300px",
            top: "-60px",
            right: "-80px",
            borderRadius: "9999px",
            background: "rgba(21, 193, 93, 0.05)",
            filter: "blur(64px)",
          }}
        />
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            width: "300px",
            height: "300px",
            bottom: "0px",
            left: "-80px",
            borderRadius: "9999px",
            background: "rgba(21, 193, 93, 0.05)",
            filter: "blur(64px)",
          }}
        />

        {/* Top Row: Heading + Testimonial side by side */}
        <div className="relative z-10 flex items-start gap-8 flex-wrap lg:flex-nowrap">
          {/* Heading + Subtext */}
          <div className="flex flex-col gap-4 flex-1 min-w-[280px]">
            <h2
              className="text-[#14181F]"
              style={{
                fontFamily: "Tilt Warp",
                fontSize: "40px",
                lineHeight: "44px",
                fontWeight: 400,
                letterSpacing: "-1px",
              }}
            >
              Three Simple Ways To{" "}
              <span className="relative inline-block text-[#13EC6D]">
                Get Started
                <div className="absolute left-0 -bottom-1 w-full h-[11px]">
                  <Image
                    src="/get_started_line.png"
                    alt="line"
                    fill
                    className="object-contain"
                  />
                </div>
              </span>
            </h2>
            <p
              className="text-[#676F7E]"
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                lineHeight: "26px",
                fontWeight: 500,
              }}
            >
              Apply online today for fast approval and flexible repayment
              options. Our streamlined process helps you access your funds
              quickly.
            </p>
          </div>

          {/* Testimonial Card */}
          <div
            className="bg-[#EEF9F4] rounded-[15px] p-4 flex items-center gap-4 flex-shrink-0"
            style={{ width: "340px" }}
          >
            <div
              className="relative rounded-full border-2 border-white overflow-hidden flex-shrink-0"
              style={{ width: "68px", height: "68px" }}
            >
              <Image
                src="/get_started_img.jpg"
                alt="Maria R"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="flex items-center gap-3">
                <span
                  className="text-black whitespace-nowrap"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    fontWeight: 600,
                  }}
                >
                  — Maria R.
                </span>
                <div className="flex gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#FFB400" color="#FFB400" />
                  ))}
                </div>
              </div>
              <p
                className="text-[#676F7E]"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 400,
                }}
              >
                "Fast, easy, and stress-free. Cash in Flash really came through
                when I needed it."
              </p>
            </div>
          </div>
        </div>

        {/* Steps Row: 3 columns on tablet */}
        <div className="relative z-10 grid grid-cols-3 gap-6">
          {[
            {
              icon: "/get_started_location.png",
              alt: "In Person",
              num: "01",
              title: "In Person",
              desc: "Complete our simple online application in just 5 minutes no hassle.",
            },
            {
              icon: "/get_started_phone.png",
              alt: "By Phone",
              num: "02",
              title: "By Phone",
              desc: "Get an instant decision. Most applications are approved within minutes.",
            },
            {
              icon: "/get_started_web.png",
              alt: "Online",
              num: "03",
              title: "Online",
              desc: "Get your funds are deposited directly and quickly.",
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-3 items-start">
              {/* Icon */}
              <div className="relative flex-shrink-0" style={{ width: "60px" }}>
                <Image src={step.icon} alt={step.alt} width={48} height={48} />
                <div className="absolute bottom-0 left-0 w-full h-[13px]">
                  <Image src="/get_started_icons_line.png" alt="decor" fill />
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[8px]">
                  <div
                    className="flex items-center justify-center text-white flex-shrink-0"
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "9999px",
                      background:
                        "linear-gradient(135deg, #172136 0%, #2D3953 100%)",
                      boxShadow: "0px 10px 15px -3px #0000001A",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="text-[#14181F]"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-[#676F7E]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 400,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE LAYOUT (<768px) ── */}
      <div className="md:hidden relative w-full bg-white px-6 pt-10 pb-10 flex flex-col gap-8">
        {/* Decorative Blurs */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            width: "200px",
            height: "200px",
            top: "-40px",
            right: "-60px",
            borderRadius: "9999px",
            background: "rgba(21, 193, 93, 0.05)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            width: "200px",
            height: "200px",
            bottom: "40px",
            left: "-60px",
            borderRadius: "9999px",
            background: "rgba(21, 193, 93, 0.05)",
            filter: "blur(50px)",
          }}
        />

        {/* Heading */}
        <div className="relative z-10 flex flex-col gap-4">
          <h2
            className="text-[#14181F]"
            style={{
              fontFamily: "Tilt Warp",
              fontSize: "32px",
              lineHeight: "36px",
              fontWeight: 400,
              letterSpacing: "-0.8px",
            }}
          >
            Three Simple Ways To{" "}
            <span className="relative inline-block text-[#13EC6D]">
              Get Started
              <div className="absolute left-0 -bottom-1 w-full h-[10px]">
                <Image
                  src="/get_started_line.png"
                  alt="line"
                  fill
                  className="object-contain"
                />
              </div>
            </span>
          </h2>

          <p
            className="text-[#676F7E]"
            style={{
              fontFamily: "Poppins",
              fontSize: "15px",
              lineHeight: "24px",
              fontWeight: 500,
            }}
          >
            Apply online today for fast approval and flexible repayment options.
            Our streamlined process helps you access your funds quickly.
          </p>
        </div>

        {/* Maria R. Testimonial */}
        <div className="relative z-10 bg-[#EEF9F4] rounded-[15px] p-4 flex items-center gap-4">
          <div
            className="relative rounded-full border-2 border-white overflow-hidden flex-shrink-0"
            style={{ width: "64px", height: "64px" }}
          >
            <Image
              src="/get_started_img.jpg"
              alt="Maria R"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-3">
              <span
                className="text-black whitespace-nowrap"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                — Maria R.
              </span>
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#FFB400" color="#FFB400" />
                ))}
              </div>
            </div>
            <p
              className="text-[#676F7E]"
              style={{
                fontFamily: "Poppins",
                fontSize: "13px",
                lineHeight: "19px",
                fontWeight: 400,
              }}
            >
              "Fast, easy, and stress-free. Cash in Flash really came through
              when I needed it."
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative z-10 flex flex-col gap-7">
          {/* Step 01 */}
          <div className="flex gap-4 items-start">
            <div className="relative flex-shrink-0" style={{ width: "52px" }}>
              <Image
                src="/get_started_location.png"
                alt="In Person"
                width={44}
                height={44}
              />
              <div className="absolute bottom-0 left-0 w-full h-[12px]">
                <Image src="/get_started_icons_line.png" alt="decor" fill />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[8px]">
                <div
                  className="flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "9999px",
                    background:
                      "linear-gradient(135deg, #172136 0%, #2D3953 100%)",
                    boxShadow:
                      "0px 10px 15px -3px #0000001A, 0px 4px 6px -4px #0000001A",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    01
                  </span>
                </div>
                <h3
                  className="text-[#14181F]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 500,
                    letterSpacing: "-0.5px",
                  }}
                >
                  In Person
                </h3>
              </div>
              <p
                className="text-[#676F7E]"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
              >
                Complete our simple online application in just 5 minutes no
                hassle.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex gap-4 items-start">
            <div className="relative flex-shrink-0" style={{ width: "52px" }}>
              <Image
                src="/get_started_phone.png"
                alt="By Phone"
                width={44}
                height={44}
              />
              <div className="absolute bottom-0 left-0 w-full h-[12px]">
                <Image src="/get_started_icons_line.png" alt="decor" fill />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[8px]">
                <div
                  className="flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "9999px",
                    background:
                      "linear-gradient(135deg, #172136 0%, #2D3953 100%)",
                    boxShadow: "0px 10px 15px -3px #0000001A",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    02
                  </span>
                </div>
                <h3
                  className="text-[#14181F]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 500,
                    letterSpacing: "-0.5px",
                  }}
                >
                  By Phone
                </h3>
              </div>
              <p
                className="text-[#676F7E]"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
              >
                Get an instant decision. Most applications are approved within
                minutes.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex gap-4 items-start">
            <div className="relative flex-shrink-0" style={{ width: "52px" }}>
              <Image
                src="/get_started_web.png"
                alt="Online"
                width={44}
                height={44}
              />
              <div className="absolute bottom-0 left-0 w-full h-[12px]">
                <Image src="/get_started_icons_line.png" alt="decor" fill />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[8px]">
                <div
                  className="flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "9999px",
                    background:
                      "linear-gradient(135deg, #172136 0%, #2D3953 100%)",
                    boxShadow: "0px 10px 15px -3px #0000001A",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    03
                  </span>
                </div>
                <h3
                  className="text-[#14181F]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 500,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Online
                </h3>
              </div>
              <p
                className="text-[#676F7E]"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
              >
                Get your funds are deposited directly and quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;