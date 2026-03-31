"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-11 px-6 md:px-10 xl:px-0">
      <div className="max-w-[1200px] mx-auto py-10 lg:py-[87px]">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-y-12 md:gap-x-4 lg:gap-x-0">
          
          <div className="flex flex-col w-full md:w-[30%] lg:w-[196px]">
            <h4 className="font-semibold text-[17.4px] font-poppins text-black mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-[#606060] font-poppins text-[16px]">
              <Link href="#" className="hover:text-[#15C15D]">About</Link>
              <Link href="#" className="hover:text-[#15C15D]">Team</Link>
              <Link href="#" className="hover:text-[#15C15D]">Careers</Link>
              <Link href="#" className="hover:text-[#15C15D]">News</Link>
              <Link href="#" className="hover:text-[#15C15D]">Investors</Link>
              <Link href="#" className="hover:text-[#15C15D]">Enterprise Platform</Link>
              <Link href="#" className="hover:text-[#15C15D]">HealthPlan Transparency in Coverage</Link>
              <Link href="#" className="hover:text-[#15C15D]">Form ADV</Link>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[30%] lg:w-[196px]">
            <h4 className="font-semibold text-[17.4px] font-poppins text-black mb-4">
              Help
            </h4>
            <div className="flex flex-col gap-3 text-[#606060] font-poppins text-[16px]">
              <Link href="#" className="hover:text-[#15C15D]">App help center</Link>
              <Link href="#" className="hover:text-[#15C15D]">Contact us</Link>
              <Link href="#" className="hover:text-[#15C15D]">Questions</Link>
              <Link href="#" className="hover:text-[#15C15D]">Locations</Link>
              <Link href="#" className="hover:text-[#15C15D]">Tools & learning</Link>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[30%] lg:w-[196px]">
            <h4 className="font-semibold text-[17.4px] font-poppins text-black mb-4">
              Products
            </h4>
            <div className="flex flex-col gap-3 text-[#606060] font-poppins text-[16px]">
              <Link href="#" className="hover:text-[#15C15D]">Make a payment</Link>
              <Link href="#" className="hover:text-[#15C15D]">Personal loans</Link>
              <Link href="#" className="hover:text-[#15C15D]">Savings: Set & Save</Link>
            </div>
          </div>

          <div className="flex flex-col relative w-full md:w-[45%] lg:w-[200px]">
            <h4 className="font-semibold text-[17.4px] font-poppins text-black mb-4">
              Contact
            </h4>
            <p className="text-[#606060] font-poppins text-[16.6px] leading-[30px] md:leading-[33.6px]">
              (866) 488-6090
              <br />
              cashinflash.com
            </p>
            <Link
              href="#"
              className="text-[#606060] font-poppins text-[16.3px] hover:text-black mt-4 lg:absolute lg:top-[100px]"
            >
              Log in
            </Link>
          </div>

          <div className="flex flex-col w-full md:w-[50%] lg:w-[386px]">
            <h4 className="font-semibold text-[17.4px] font-poppins text-black mb-4">
              Sign up
            </h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[10px] mb-8 lg:mb-12">
              <input
                type="email"
                placeholder="Your email"
                className="pl-[17px] border border-black rounded-[38px] outline-none w-full sm:w-[264px] h-[47px]"
                style={{
                  fontSize: "12.7px",
                  fontWeight: 300,
                  fontFamily: "Poppins",
                }}
              />
              <button
                className="w-full sm:w-auto px-6 sm:px-5 h-[47px] text-[16px] rounded-[40px] text-white font-medium transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)",
                }}
              >
                Subscribe
              </button>
            </div>

            <div className="mt-4 lg:mt-[50px]">
              <h5 className="font-semibold text-[19.1px] font-poppins text-black mb-1">
                Get the Clash in Flash app
              </h5>
              <p className="text-[14.8px] font-poppins text-black mb-4">
                All your financial needs, right at your fingertips.
              </p>
              <div className="flex flex-wrap gap-[15px]">
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

        <div className="flex flex-col lg:flex-row items-start mt-[55px] lg:items-center gap-8 lg:gap-0 border-t border-gray-100 pt-8 lg:border-none lg:pt-0">
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={250} height={32} />
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-[40px] text-[#606060] font-poppins text-[15.6px] lg:ml-[57px]">
            <Link href="#" className="hover:text-black">Terms of use</Link>
            <Link href="#" className="hover:text-black">Accessibility</Link>
            <Link href="#" className="hover:text-black text-[16.7px]">Privacy</Link>
            <Link href="#" className="hover:text-black text-[16.2px]">Privacy settings</Link>
            <Link href="#" className="hover:text-black text-[16.5px]">Report vulnerability</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;