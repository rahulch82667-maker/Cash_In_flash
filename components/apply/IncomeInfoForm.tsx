import { ChevronDown } from "lucide-react";

const IncomeInfoForm = ({ onNext, onBack }: { onNext: () => void; onBack: () => void; }) => {
  const inputStyle = "w-full h-[52px] px-4 border border-gray-300 rounded-lg text-gray-700 outline-none focus:border-[#15C15D]";
  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Income Information</h2>

      <div className="relative">
        <label className={labelStyle}>PRIMARY INCOME SOURCE</label>
        <select className={`${inputStyle} appearance-none`} required>
          <option value="" disabled selected>Select Source</option>
          <option value="employment">Employment (W-2)</option>
          <option value="self_employed">Self-Employed / Independent Contractor</option>
          <option value="benefits">Government Benefits (SSI/SSDI)</option>
        </select>
        <ChevronDown className="absolute right-4 top-[43px] text-gray-400" size={20} />
      </div>

      {[ "EMPLOYER NAME", "JOB TITLE" ].map(label => (
        <div key={label}>
          <label className={labelStyle}>{label}</label>
          <input type="text" placeholder="Required" className={inputStyle} required />
        </div>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>GROSS MONTHLY INCOME (Before Taxes)</label>
          <input type="text" placeholder="$0.00" className={inputStyle} required />
        </div>
        <div className="relative">
          <label className={labelStyle}>PAY FREQUENCY</label>
          <select className={`${inputStyle} appearance-none`} required>
            <option value="" disabled selected>Select</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <ChevronDown className="absolute right-4 top-[43px] text-gray-400" size={20} />
        </div>
      </div>

      <div>
        <label className={labelStyle}>NEXT PAY DATE</label>
        <input type="text" placeholder="MM/DD/YYYY" className={inputStyle} required />
      </div>

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

export default IncomeInfoForm;