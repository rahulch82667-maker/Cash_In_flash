import { Eye, ChevronDown } from "lucide-react";

const PersonalInfoForm = ({ onNext }: { onNext: () => void }) => {
  const inputStyle = "w-full h-[52px] px-4 border border-gray-300 rounded-lg text-gray-700 outline-none focus:border-[#15C15D] placeholder:text-gray-400";
  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Personal Information</h2>

      {/* Name Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>NAME</label>
          <input type="text" placeholder="First Name" className={inputStyle} required />
        </div>
        <div>
          <label className={labelStyle}>&nbsp;</label>
          <input type="text" placeholder="Middle Name" className={inputStyle} />
        </div>
        <div>
          <label className={labelStyle}>&nbsp;</label>
          <input type="text" placeholder="Last Name" className={inputStyle} required />
        </div>
      </div>

      {/* Loan Amount */}
      <div className="relative">
        <label className={labelStyle}>LOAN AMOUNT</label>
        <select className={`${inputStyle} appearance-none cursor-pointer`} defaultValue="" required>
          <option value="" disabled >Please Select</option>
          <option value="100">$100.00</option>
          <option value="150">$150.00</option>
          <option value="200">$200.00</option>
          <option value="255">$255.00</option>
        </select>
        <ChevronDown className="absolute right-4 top-[43px] text-gray-400" size={20} />
      </div>

      {/* SSN Inputs */}
      {[ "SOCIAL SECURITY NUMBER", "CONFIRM SOCIAL SECURITY NUMBER" ].map((label) => (
        <div key={label} className="relative">
          <label className={labelStyle}>{label}</label>
          <input type="password" placeholder="XXX-XX-XXXX" className={inputStyle} required />
          <Eye className="absolute right-4 top-[43px] text-gray-400 cursor-pointer" size={20} />
        </div>
      ))}

      {/* DOB and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>DATE OF BIRTH</label>
          <input type="text" placeholder="MM/DD/YYYY" className={inputStyle} required />
        </div>
        <div>
          <label className={labelStyle}>PHONE NUMBER</label>
          <input type="tel" placeholder="(000) 000-0000" className={inputStyle} required />
        </div>
      </div>

      {/* Home Address Section */}
      <div>
        <label className={labelStyle}>HOME ADDRESS</label>
        <input type="text" placeholder="Start typing your address..." className={`${inputStyle} mb-4`} required />
        <input type="text" placeholder="Street Address Line 2 (optional)" className={inputStyle} />
      </div>

      {/* City, State, ZIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <input type="text" placeholder="City" className={inputStyle} required />
        </div>
        <div className="relative">
          <select className={`${inputStyle} appearance-none`} disabled>
            <option value="CA">CA</option>
          </select>
          <ChevronDown className="absolute right-4 top-[16px] text-gray-400" size={20} />
        </div>
        <div>
          <input type="text" placeholder="ZIP Code" className={inputStyle} required />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelStyle}>EMAIL</label>
        <input type="email" placeholder="yourname@example.com" className={inputStyle} required />
      </div>

      <button type="submit" className="w-full h-[60px] bg-[#15C15D] text-white rounded-full font-semibold text-[18px] mt-10 shadow-lg hover:bg-[#12a850]">
        Continue →
      </button>
    </form>
  );
};

export default PersonalInfoForm;