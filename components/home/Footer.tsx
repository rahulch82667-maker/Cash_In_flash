"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative bg-white overflow-hidden mx-auto"
      style={{ width: "1440px", height: "690px", marginTop: "44px" }}
    >
      {/* Main Content Area */}
      <div
        className="absolute"
        style={{ width: "1200px", height: "516px", top: "87px", left: "120px" }}
      >
        {/* Column 1: Quick Links */}
        <div
          className="absolute"
          style={{ width: "196.66px", top: "0", left: "0" }}
        >
          <h4 className="font-semibold text-[17.4px] font-poppins text-black">
            Quick Links
          </h4>
          {/* Quick Links Sub Options Div */}
          <div
            className="absolute flex flex-col justify-between py-2"
            style={{
              width: "196.66px",
              height: "378px",
              top: "34px",
              opacity: 1,
            }}
          >
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Team
            </Link>

            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              News
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Investors
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Enterprise Platform
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              HealthPlan Transparency in Coverage{" "}
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Form ADV
            </Link>
          </div>
        </div>

        {/* Column 2: Help */}
        <div
          className="absolute"
          style={{ width: "196.67px", top: "0", left: "196.67px" }}
        >
          <h4 className="font-semibold text-[17.4px] font-poppins text-black">
            Help
          </h4>
          {/* Help Sub Options Div */}
          <div
            className="absolute flex flex-col justify-between py-2"
            style={{
              width: "196.67px",
              height: "207px",
              top: "33px",
              opacity: 1,
            }}
          >
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              App help center
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Questions
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Locations
            </Link>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16px] hover:text-[#15C15D]"
            >
              Tools & learning
            </Link>
          </div>
        </div>

        {/* Column 3: Products */}
        <div
          className="absolute flex flex-col gap-4"
          style={{ width: "196.67px", top: "0", left: "393.34px" }}
        >
          <h4 className="font-semibold text-[17.4px] font-poppins text-black">
            Products
          </h4>
          <div className="flex flex-col gap-[15px] text-[#606060] font-poppins text-[16px] mt-[12px]">
            <Link href="#" className="hover:text-[#15C15D]">
              Make a payment
            </Link>
            <Link href="#" className="hover:text-[#15C15D]">
              Personal loans
            </Link>
            <Link href="#" className="hover:text-[#15C15D]">
              Savings: Set & Save
            </Link>
          </div>
        </div>

        {/* Column 4: Contact & Login */}
        <div
          className="absolute"
          style={{ width: "200px", top: "0", left: "600px" }}
        >
          <h4 className="font-semibold text-[17.4px] font-poppins text-black mb-[12px]">
            Contact
          </h4>
          <p className="text-[#606060] font-poppins text-[16.6px] leading-[39.6px]">
            (866) 488-6090
            <br />
            clashinflash.com
          </p>
          <Link
            href="#"
            className="absolute text-[#606060] font-poppins text-[16.3px] hover:text-black"
            style={{ top: "127px" }}
          >
            Log in
          </Link>
        </div>

        {/* Column 5: Newsletter & Apps */}
        <div
          className="absolute"
          style={{ width: "386.67px", top: "0", left: "813.33px" }}
        >
          <h4 className="font-semibold text-[17.4px] font-poppins text-black mb-4">
            Sign up
          </h4>
          <div className="flex items-center gap-[10px] mb-12">
            <input
              type="email"
              placeholder="Your email"
              className="pl-[17px] border border-black rounded-[38px] outline-none"
              style={{
                width: "264px",
                height: "47px",
                fontSize: "12.7px",
                fontWeight: 300,
                fontFamily: "Poppins",
              }}
            />

            <button
              className="text-white font-medium text-[16px] rounded-[40px] transition-opacity hover:opacity-90"
              style={{
                width: "125px",
                height: "47px",
                background:
                  "linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)",
              }}
            >
              Subscribe
            </button>
          </div>
          <div className="mt-[50px]">
            <h5 className="font-semibold text-[19.1px] font-poppins text-black mb-1">
              Get the Clash in Flash app
            </h5>
            <p className="text-[14.8px] font-poppins text-black mb-4">
              All your financial needs, right at your fingertips.
            </p>
            <div className="flex gap-[15px]">
              <Image
                src="/app_store_2.png"
                alt="App Store"
                width={150}
                height={50}
                className="object-contain cursor-pointer hover:scale-105 transition-transform"
              />
              <Image
                src="/google_play_2.png"
                alt="Google Play"
                width={150}
                height={50}
                className="object-contain cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Logo and Legal Links */}
      <div
        className="absolute  border-[#f0f0f0]"
        style={{
          width: "1200px",
          height: "80px",
          bottom: "50px",
          left: "120px",
        }}
      >
        <div className="relative w-full h-full flex items-center">
          <Image src="/logo.png" alt="Logo" width={250} height={32} />

          <div className="flex items-center gap-[40px] text-[#606060] font-poppins text-[15.6px] ml-[57px]">
            <Link href="#" className="hover:text-black">
              Terms of use
            </Link>
            <Link href="#" className="hover:text-black">
              Accessibility
            </Link>
            <Link href="#" className="hover:text-black text-[16.7px]">
              Privacy
            </Link>
            <Link href="#" className="hover:text-black text-[16.2px]">
              Privacy settings
            </Link>
            <Link href="#" className="hover:text-black text-[16.5px]">
              Report vulnerability
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
