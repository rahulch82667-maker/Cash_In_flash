import { ChevronDown } from "lucide-react";

const FinancialInfoForm = ({ onNext, onBack }: { onNext: () => void; onBack: () => void; }) => {
  const inputStyle = "w-full h-[52px] px-4 border border-gray-300 rounded-lg text-gray-700 outline-none focus:border-[#15C15D]";
  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Banking Information</h2>

      <p className="text-[14px] text-gray-500 mb-6 bg-[#F0FDF4] p-4 rounded-lg border border-[#DCFCE7]">
        A valid checking account is required for funding. We do not accept prepaid cards.
      </p>

      {[ "BANK NAME", "ROUTING NUMBER (9 digits)", "CHECKING ACCOUNT NUMBER", "CONFIRM ACCOUNT NUMBER" ].map(label => (
        <div key={label}>
          <label className={labelStyle}>{label}</label>
          <input type="text" placeholder="Required" className={inputStyle} required />
        </div>
      ))}

      <div className="grid grid-cols-2 gap-4 mt-10 pt-6">
        <button type="button" onClick={onBack} className="h-[60px] border border-gray-300 rounded-full font-semibold text-gray-600">
          ← Back
        </button>
        <button type="submit" className="h-[60px] bg-[#15C15D] text-white rounded-full font-semibold">
          Continue →
        </button>
      </div>
    </form>
  );
};

export default FinancialInfoForm;