 // components/payment/PaymentForm.tsx
"use client";

import { useState } from "react";
import { CreditCard, Landmark, Search } from "lucide-react";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const inputStyle = "w-full h-[52px] px-4 border border-gray-300 rounded-lg outline-none focus:border-[#15C15D] transition-all";
  const labelStyle = "text-[#555] text-[13px] font-semibold uppercase tracking-wide mb-2 block";

  return (
    <div className="max-w-[600px] mx-auto px-6 font-poppins">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
        
        {/* Account Lookup Section */}
        <div className="mb-10 pb-8 border-b border-gray-100">
          <h3 className="text-[20px] font-bold mb-6 text-[#2D2D32]">Find Your Account</h3>
          <div className="space-y-4">
            <div>
              <label className={labelStyle}>Loan Number or SSN</label>
              <div className="relative">
                <input type="text" placeholder="Enter details" className={inputStyle} />
                <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
              </div>
            </div>
            <button className="w-full h-[52px] bg-[#15C15D] hover:bg-[#12a850] text-white font-bold rounded-lg transition-all">
              Verify Account
            </button>
          </div>
        </div>

        {/* Payment Details Section */}
        <h3 className="text-[20px] font-bold mb-6 text-[#2D2D32]">Payment Information</h3>
        
        {/* Method Toggle */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setPaymentMethod("card")}
            className={`flex-1 flex flex-col items-center py-4 rounded-xl border-2 transition-all ${paymentMethod === 'card' ? 'border-[#15C15D] bg-[#F0FDF4]' : 'border-gray-100 bg-gray-50 text-gray-400'}`}
          >
            <CreditCard size={24} className={paymentMethod === 'card' ? 'text-[#15C15D]' : ''} />
            <span className="text-[14px] font-bold mt-2">Debit Card</span>
          </button>
          <button 
            onClick={() => setPaymentMethod("bank")}
            className={`flex-1 flex flex-col items-center py-4 rounded-xl border-2 transition-all ${paymentMethod === 'bank' ? 'border-[#15C15D] bg-[#F0FDF4]' : 'border-gray-100 bg-gray-50 text-gray-400'}`}
          >
            <Landmark size={24} className={paymentMethod === 'bank' ? 'text-[#15C15D]' : ''} />
            <span className="text-[14px] font-bold mt-2">Bank Account</span>
          </button>
        </div>

        <form className="space-y-6">
          <div>
            <label className={labelStyle}>Payment Amount</label>
            <input type="text" placeholder="$0.00" className={inputStyle} />
          </div>

          {paymentMethod === "card" ? (
            <>
              <div>
                <label className={labelStyle}>Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" className={inputStyle} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelStyle}>Expiry (MM/YY)</label>
                  <input type="text" placeholder="MM/YY" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>CVV</label>
                  <input type="password" placeholder="***" className={inputStyle} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className={labelStyle}>Routing Number</label>
                <input type="text" placeholder="9 Digits" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Account Number</label>
                <input type="text" placeholder="Your checking account number" className={inputStyle} />
              </div>
            </>
          )}

          <button className="w-full h-[60px] bg-[#15C15D] hover:bg-[#12a850] text-white font-bold text-[18px] rounded-full shadow-lg mt-8 transition-all active:scale-95">
            Submit Payment
          </button>
        </form>
        
        <p className="text-center text-[12px] text-gray-400 mt-6">
           Payments are processed securely.
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;