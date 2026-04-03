'use client'

import { useRouter } from 'next/navigation'

const FAQHero = () => {
  const router = useRouter();
  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-24 px-6 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="font-['Poppins'] font-bold text-[36px] md:text-[52px] text-[#2D2D32] leading-tight">
          More than a loan. <br />
          <span className="text-[#15C15D]">It's peace of mind.</span>
        </h1>
        <p className="font-['Poppins'] text-[#606060] text-[18px] md:text-[20px] mt-6 max-w-[700px] mx-auto">
          Find answers to common questions about our payday loans, application process, and repayment options.
        </p>
        <div className="mt-10">
            <button onClick={() => router.push('/apply')} className="bg-[#15C15D] hover:bg-[#12a850] text-white font-semibold py-4 px-10 rounded-full text-[18px] transition-all shadow-lg active:scale-95">
              Apply now
            </button>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;