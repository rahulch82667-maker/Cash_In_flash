"use client";

import ApplicationStepper from "@/components/apply/ApplicationStepper";
import DocumentsForm from "@/components/apply/DocumentsForm";
import FinancialInfoForm from "@/components/apply/FinancialInfoForm";
import IncomeInfoForm from "@/components/apply/IncomeInfoForm";
import PersonalInfoForm from "@/components/apply/PersonalInfoForm";
import Navbar from "@/components/home/Navbar";
import { useState } from "react";

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0FDF4] py-12 px-6">
        <Navbar />
      <div className="max-w-[800px] mx-auto text-center font-poppins mb-10 mt-[120px]">
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#2D2D32]">
          Payday Loan Application
        </h1>
        <p className="text-gray-500 text-[14px] mt-1">
          Fast approval • Up to $255 • California residents only
        </p>
      </div>

      {/* Stepper Component */}
      <ApplicationStepper currentStep={currentStep} />

      {/* Form Card Container */}
      <div className="max-w-[700px] mx-auto bg-white border border-[#E0F2E9] rounded-2xl shadow-sm p-6 md:p-10 font-poppins">
        {currentStep === 1 && <PersonalInfoForm onNext={handleNext} />}
        {currentStep === 2 && <IncomeInfoForm onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <FinancialInfoForm onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && <DocumentsForm onBack={handleBack} />}
      </div>

      <div className="text-center text-gray-400 text-[12px] mt-12 font-poppins">
         256-bit SSL encrypted • Your information is secure
      </div>
    </main>
  );
}