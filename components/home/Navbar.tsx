"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<"loans" | "save" | null>(null);

  const DropdownContent = ({ type }: { type: "loans" | "save" }) => {
    const isLoans = type === "loans";
    return (
      <div 
        className={`absolute top-[83px] z-50 shadow-2xl flex p-[50px]
          ${isLoans ? "w-[891px] left-[299px]" : "w-[719px] left-[385px]"} 
          h-[339px] bg-gradient-to-br from-[#1B3229] to-[#0C1D17]`}
      >
        <div className="flex gap-[41px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-[33px]">
              <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase tracking-wider leading-none">
                {isLoans ? "Loans" : "Save"}
              </h3>
              <div className="flex flex-col gap-[17px]">
                {(isLoans 
                  ? ["Cash Advance", "Contact Us", "Make a Payment", "Locations"] 
                  : ["Tools", "FAQ", "Glossary of financial terms", "Contact"]
                ).map((item) => (
                  <div key={item} className="flex items-center gap-[7px] group cursor-pointer w-max">
                    <span className="text-white font-medium text-[16px] leading-[19.2px] font-['Poppins'] group-hover:text-[#13EC6D] transition-colors">
                      {item}
                    </span>
                    <ArrowRight className="w-[14px] h-[16px] text-white group-hover:text-[#13EC6D]" strokeWidth={3} />
                  </div>
                ))}
              </div>
            </div>

            {!isLoans && (
              <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">
                Money, Figured Out
              </h3>
            )}
          </div>

          {isLoans && (
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[33px]">
                <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">Tools</h3>
                <div className="flex flex-col gap-[17px]">
                  {["FAQs", "Glossary of financial terms"].map((item) => (
                    <div key={item} className="flex items-center gap-[7px] group cursor-pointer w-max">
                      <span className="text-white font-medium text-[16px] leading-[19.2px] font-['Poppins'] group-hover:text-[#13EC6D]">
                        {item}
                      </span>
                      <ArrowRight className="w-[14px] h-[16px] text-white group-hover:text-[#13EC6D]" strokeWidth={3} />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">
                Money, Figured Out
              </h3>
            </div>
          )}
        </div>

        <div className={`flex flex-col absolute ${isLoans ? "left-[581px]" : "left-[409px]"} top-[50px]`}>
           <div className="w-[201px] flex flex-col gap-[18px]">
             <div className="w-[170px] h-[22px] relative">
                <Image 
                    src="/logo_2.png" 
                    alt="Cash in Flash Logo" 
                    fill 
                    className="object-contain"
                />
             </div>
             <p className="text-[#FAFAFA] font-medium text-[14px] leading-[19.2px] font-['Poppins']">
               Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
             </p>
           </div>
           
           <div className="flex gap-[12px] mt-[72px]">
             <Image src="/apple_store.png" alt="App Store" width={123} height={41} className="cursor-pointer hover:opacity-80 transition-opacity" />
             <Image src="/google_play.png" alt="Play Store" width={123} height={41} className="cursor-pointer hover:opacity-80 transition-opacity" />
           </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col items-center bg-white">
      {/* Top Banner Text */}
      <div className="w-full h-[23px] mt-[18px] flex items-center justify-center">
        <p className="font-['Poppins'] font-medium text-[16px] leading-[27px] text-[#353535]">
          Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
        </p>
      </div>

      <div className="w-full h-0 border-t border-[#E8E8E8] mt-[18px]" />

      <div className="w-[1440px] h-[83px] flex items-center justify-center relative">
        <div className="w-[1200px] flex items-center justify-between">
          
          <div className="flex items-center gap-[71px]">
            <Image src="/logo.png" alt="Logo" width={250} height={32} priority />
            
            <div className="flex items-center gap-[30px] h-[83px]">
              <div 
                className="relative h-full flex items-center px-[14px] cursor-pointer group"
                onMouseEnter={() => setActiveDropdown("loans")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {activeDropdown === "loans" && (
                  <div className="absolute inset-0 bg-[#F9F9F9] border-b-[3px] border-[#08A226] z-0" />
                )}
                <span className="font-['Poppins'] font-medium text-[16px] text-[#353535] z-10">Loans</span>
              </div>

              <span className="font-['Poppins'] font-medium text-[16px] text-[#353535] cursor-pointer">Location</span>

              <div 
                className="relative h-full flex items-center px-[14px] cursor-pointer group"
                onMouseEnter={() => setActiveDropdown("save")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {activeDropdown === "save" && (
                  <div className="absolute inset-0 bg-[#F9F9F9] border-b-[3px] border-[#08A226] z-0" />
                )}
                <span className="font-['Poppins'] font-medium text-[16px] text-[#353535] z-10">Save</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[35px]">
            <div className="flex items-center gap-[8px] cursor-pointer group">
              <MapPin className="w-[24px] h-[24px] text-[#353535] group-hover:text-[#15C15D]" />
              <span className="font-['Poppins'] font-medium text-[16px] group-hover:text-[#15C15D]">Find a Store</span>
            </div>
            <div className="flex gap-[10px]">
              <button className="w-[125px] h-[47px] cursor-pointer rounded-[40px] bg-gradient-to-r from-[#15C15D] to-[#13EC6D] font-['Poppins'] font-medium text-white shadow-md hover:shadow-lg transition-all">
                Apply now
              </button>
              <button className="w-[125px] h-[47px] cursor-pointer rounded-[40px] border-2 border-[#15C15D4D] bg-white font-['Poppins'] font-medium text-[#353535] hover:border-[#15C15D] transition-all">
                Log in
              </button>
            </div>
          </div>
        </div>

        {activeDropdown && (
          <div 
            onMouseEnter={() => setActiveDropdown(activeDropdown)} 
            onMouseLeave={() => setActiveDropdown(null)}
            className="w-full absolute top-0 left-0"
          >
            <DropdownContent type={activeDropdown} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;