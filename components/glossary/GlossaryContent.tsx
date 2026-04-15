"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';

type GlossaryTerm = {
  term: string;
  definition: string;
};

const glossaryData: GlossaryTerm[] = [
  { term: "APR (Annual Percentage Rate)", definition: "The annual rate charged for borrowing or earned through an investment, expressed as a percentage that represents the actual yearly cost of funds over the term of a loan." },
  { term: "Amortization", definition: "The process of spreading out a loan into a series of fixed payments over time. You'll be paying off the loan's interest and principal in different amounts each month." },
  { term: "Cash Advance", definition: "A short-term loan from a bank or an alternative lender. The term also refers to a service provided by many credit card issuers allowing cardholders to withdraw a certain amount of cash." },
  { term: "Collateral", definition: "An asset that a lender accepts as security for a loan. If the borrower defaults on the loan payments, the lender can seize the collateral and resell it to recoup the losses." },
  { term: "Credit Score", definition: "A numerical expression based on a level analysis of a person's credit files, to represent the creditworthiness of an individual." },
  { term: "Default", definition: "Failure to repay a debt including interest or principal on a loan or security." },
  { term: "Installment Loan", definition: "A loan that is repaid over time with a set number of scheduled payments; normally at least two payments are made towards the loan." },
  { term: "Interest Rate", definition: "The proportion of a loan that is charged as interest to the borrower, typically expressed as an annual percentage of the loan outstanding." },
  { term: "Line of Credit", definition: "A preset borrowing limit that can be used at any time. The borrower can take money out as needed until the limit is reached, and as money is repaid, it can be borrowed again." },
  { term: "Payday Loan", definition: "A relatively small amount of money lent at a high rate of interest on the agreement that it will be repaid when the borrower receives their next paycheck." },
  { term: "Principal", definition: "The original sum of money borrowed in a loan or put into an investment." },
  { term: "Refinancing", definition: "The process of replacing an existing debt obligation with another debt obligation under different terms." }
];

export default function GlossaryContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryData.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B3229] font-['Poppins'] mb-4">
          Glossary of Financial Terms
        </h1>
        <p className="text-gray-600 font-['Poppins'] text-lg">
          Understand the vocabulary of finance to make informed borrowing decisions.
        </p>
      </div>

      <div className="relative mb-10 max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#15C15D] focus:border-[#15C15D] sm:text-sm transition-all"
          placeholder="Search for a term or definition..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#15C15D] font-['Poppins'] mb-2">
                {item.term}
              </h3>
              <p className="text-gray-700 leading-relaxed font-['Poppins']">
                {item.definition}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg font-['Poppins']">No terms found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
