const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Apply Online", desc: "Fill out our simple 4-step application in minutes." },
    { num: "02", title: "Instant Review", desc: "We review your income and financial details instantly." },
    { num: "03", title: "Get Your Cash", desc: "Funds are deposited directly into your bank account." }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[36px] font-bold mb-16 font-poppins">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-[64px] font-black text-[#15C15D] group-hover:text-[#12a850] transition-colors leading-none mb-2">
                {step.num}
              </div>
              <h4 className="text-[22px] font-bold mb-4 font-poppins text-[#2D2D32]">{step.title}</h4>
              <p className="text-[#606060] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;