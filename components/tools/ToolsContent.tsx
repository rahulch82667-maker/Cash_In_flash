import React from 'react';
import Link from 'next/link';
import { Calculator, MapPin, CreditCard, FileText, PieChart, ShieldCheck } from 'lucide-react';

const toolsData = [
  {
    title: "Loan Calculator",
    description: "Estimate your monthly payments and see how interest rates affect your total loan cost.",
    icon: <Calculator className="w-8 h-8 text-[#15C15D]" />,
    link: "/apply",
    buttonText: "Calculate Now"
  },
  {
    title: "Store Locator",
    description: "Find the nearest Cash in Flash location to speak with a representative in person.",
    icon: <MapPin className="w-8 h-8 text-[#15C15D]" />,
    link: "/location-finder",
    buttonText: "Find a Store"
  },
  {
    title: "Make a Payment",
    description: "Securely make payments towards your existing loan balance online, anytime.",
    icon: <CreditCard className="w-8 h-8 text-[#15C15D]" />,
    link: "/make-payment",
    buttonText: "Pay Online"
  },
  {
    title: "Apply for a Loan",
    description: "Fill out our quick and secure online application to get cash fast.",
    icon: <FileText className="w-8 h-8 text-[#15C15D]" />,
    link: "/apply",
    buttonText: "Start Application"
  },
  {
    title: "Financial Glossary",
    description: "Brush up on your financial knowledge with our comprehensive dictionary of terms.",
    icon: <PieChart className="w-8 h-8 text-[#15C15D]" />,
    link: "/glossary",
    buttonText: "View Glossary"
  },
  {
    title: "Security Center",
    description: "Learn how we keep your personal and financial information safe.",
    icon: <ShieldCheck className="w-8 h-8 text-[#15C15D]" />,
    link: "/contact-us",
    buttonText: "Learn More"
  }
];

export default function ToolsContent() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1B3229] font-['Poppins'] mb-6">
          Financial Tools & Resources
        </h1>
        <p className="text-gray-600 font-['Poppins'] text-lg max-w-2xl mx-auto">
          Take control of your finances. We offer a suite of tools designed to help you quickly understand your options, manage your payments, and find the resources you need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolsData.map((tool, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
              {tool.icon}
            </div>
            <h3 className="text-2xl font-semibold text-[#1B3229] font-['Poppins'] mb-4">
              {tool.title}
            </h3>
            <p className="text-gray-600 leading-relaxed font-['Poppins'] mb-8 flex-grow">
              {tool.description}
            </p>
            <Link href={tool.link}>
              <button className="w-full py-3 rounded-[40px] font-medium font-['Poppins'] text-white bg-gradient-to-r from-[#15C15D] to-[#13EC6D] hover:shadow-md transition-all">
                {tool.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
