import Link from "next/link";
import { DollarSign } from "lucide-react";

const CashAdvanceHero = () => {
  return (
    <section className="bg-[#F0FDF4] py-20 px-6 mt-[110px] border-b border-[#DCFCE7]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 font-poppins">
          <h1 className="text-[42px] md:text-[56px] font-bold text-[#2D2D32] leading-tight">
            Need Cash <span className="text-[#15C15D]">In A Flash?</span>
          </h1>
          <p className="text-[#606060] text-[18px] md:text-[20px] mt-6 leading-relaxed">
            Get a cash advance of up to $255 today. Our process is fast, secure,
            and designed for California residents who need immediate financial
            peace of mind.
          </p>
          <div className="mt-10">
            <Link href="/apply">
              <button className="bg-[#15C15D] hover:bg-[#12a850] text-white font-bold py-4 px-10 rounded-full text-[18px] shadow-lg transition-all active:scale-95">
                Apply for Advance →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          {/* Visual representation of a quick loan/money */}
          <div className="text-center">
            <DollarSign className="w-16 h-16 mx-auto text-green-500" />

            <h3 className="text-2xl font-bold mt-4">$255.00</h3>
            <p className="text-gray-400">Maximum Advance Amount</p>

            <div className="h-1 w-20 bg-[#15C15D] mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashAdvanceHero;
