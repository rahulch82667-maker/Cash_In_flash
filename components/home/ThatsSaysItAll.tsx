"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqData = [
  "Can I qualify for a payday loan with bad credit?",
  "What can I use a payday loan for?",
  "How much can I borrow?",
  "How do I repay my payday loan?",
  "Is the application process complicated?",
  "Can I get a Payday Loan without a checking account?"
];

const ThatsSaysItAll = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative bg-white flex justify-center items-center lg:mt-[-128px]  lg:py-0"
      style={{ width: '100%', minHeight: '660px' }} 
    >
      {/* Main Container*/}
      <div 
        className="flex flex-col lg:flex-row justify-between items-start px-5 lg:px-0"
        style={{ width: '100%', maxWidth: '1200px', gap: '41px' }}
      >
        
        <div className="flex flex-col w-full lg:w-[523px] gap-[30px] lg:gap-[45px]">
          
          {/* Heading Section */}
          <div className="flex flex-col gap-[18px] w-full lg:w-[508px]">
            <div className="relative w-full lg:w-[413px]">
              <h2 
                className="text-black"
                style={{ fontFamily: 'Tilt Warp', fontSize: 'clamp(32px, 8vw, 48px)', lineHeight: '1.1', fontWeight: 400 }}
              >
                That Says It <span className="relative inline-block text-[#13EC6D]">
                  All
                  <div className="absolute left-0 -bottom-1 w-full h-[8px] lg:h-[12px]">
                    <Image src="/thats_says_line.png" alt="line" fill className="object-contain" />
                  </div>
                </span>
              </h2>
            </div>
            <p className="text-[#67737E]" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '18px', lineHeight: '26px' }}>
              Have questions? We’ve got answers.
            </p>
          </div>

          {/* Emoji Tab */}
          <div className="relative bg-[#ECF9F4] rounded-[28px] w-full lg:w-[523px] h-[152px]">
            <div className="absolute flex items-center justify-center rounded-full bg-[#27B07D33]" style={{ width: '48px', height: '48px', top: '32px', left: '32px' }}>
              <Image src="/thats_says_emoji.png" alt="emoji" width={30} height={30} />
            </div>
            <div className="absolute" style={{ top: '34px', left: '96px' }}>
                <p className="text-[#141A1F]" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}>Still have questions?</p>
                <p className="text-[#67737E]" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>We're here to help</p>
            </div>
            <button className="absolute flex items-center gap-2 text-[#27B07D]" style={{ bottom: '32px', left: '32px', fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px' }}>
              Contact Support <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] w-full lg:w-[636px]">
          {faqData.map((question, index) => (
            <div 
              key={index}
              className="bg-white border border-[#E0EBE780] rounded-[20px] overflow-hidden w-full"
              style={{ boxShadow: '0px 4px 20px -4px #2E6B551A' }}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full min-h-[66px] py-4 flex items-center justify-between px-[25px] text-left"
              >
                <span className="text-[#141A1F] pr-4" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px' }}>{question}</span>
                <ChevronDown className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && (
                <div className="px-[25px] pb-[20px]">
                  <p className="text-[#67737E]" style={{ fontFamily: 'Poppins', fontSize: '14px', lineHeight: '24px' }}>
                    Placeholder answer content for this frequently asked question. This section expands to provide detailed information.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThatsSaysItAll;