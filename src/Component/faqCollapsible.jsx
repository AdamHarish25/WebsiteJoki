import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';


export default function FaqDropdown({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Pertanyaan yang Sering <span className="text-Emerald-green">Ditanyakan</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full px-5 py-4 text-left font-medium text-gray-700 hover:bg-purple-50 transition"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-Emerald-green" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-Emerald-green" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600 bg-purple-50 transition">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
