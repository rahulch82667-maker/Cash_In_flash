import { ShieldCheck, Zap, Lock } from "lucide-react";

const AdvanceBenefits = () => {
  const benefits = [
    { icon: <Zap className="text-[#15C15D]" size={32} />, title: "Flash Funding", desc: "Receive your funds as early as the same business day." },
    { icon: <Lock className="text-[#15C15D]" size={32} />, title: "Secure Data", desc: "256-bit SSL encryption keeps your info safe." },
    { icon: <ShieldCheck className="text-[#15C15D]" size={32} />, title: "No Hidden Fees", desc: "Transparent terms and straightforward repayment." }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6">{b.icon}</div>
            <h5 className="text-[20px] font-bold mb-3 font-poppins">{b.title}</h5>
            <p className="text-gray-500 text-[15px]">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvanceBenefits;