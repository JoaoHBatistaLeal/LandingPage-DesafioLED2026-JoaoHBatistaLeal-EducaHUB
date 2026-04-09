import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-stone-200 rounded-[1.5rem] mb-4 bg-white overflow-hidden transition-all duration-300 hover:border-[#2D6A4F]/30 hover:shadow-sm">
      <button
        className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2 group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-serif font-bold text-xl text-stone-900 pr-4 group-hover:text-[#2D6A4F] transition-colors">{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-stone-50 text-stone-400 group-hover:bg-[#2D6A4F]/10 group-hover:text-[#2D6A4F] transition-all duration-300 shrink-0 ${isOpen ? 'bg-[#2D6A4F]/10 text-[#2D6A4F]' : ''}`}>
          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            size={24}
          />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="p-6 md:p-8 pt-0 text-stone-600 leading-relaxed font-medium text-lg border-t border-stone-100 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
