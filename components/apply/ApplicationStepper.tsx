import { Check } from "lucide-react";

const steps = ["PERSONAL", "INCOME", "FINANCIAL", "DOCUMENTS"];

const ApplicationStepper = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="max-w-[700px] mx-auto mb-12 relative flex items-center justify-between font-poppins text-[12px]">
      {/* Background connecting line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 transform -translate-y-1/2 z-0"></div>

      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;
        const isComplete = stepNumber < currentStep;

        return (
          <div key={stepNumber} className="relative z-10 flex flex-col items-center flex-1">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center border-2 font-bold mb-2 transition-colors
                ${isActive ? "bg-[#15C15D] border-[#15C15D] text-white" : "bg-white border-gray-300 text-gray-500"}`}
            >
              {isComplete ? <Check size={20} /> : stepNumber}
            </div>
            <span
              className={`font-semibold tracking-wide
                ${isActive ? "text-[#15C15D]" : "text-gray-400"}`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationStepper;