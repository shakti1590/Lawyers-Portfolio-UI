import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

const faqData = [
  {
    question: "How do I update my billing information?",
    answer: "To update your billing information, log in and go to the billing or payment page. Look for an option to 'Update payment method' or 'Edit billing information' and follow the prompts. Be sure to save your changes before exiting.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact customer support by visiting our support page and filling out the contact form.",
  },
  {
    question: "How do I join a group or community?",
    answer: "To join a group or community, navigate to the groups section and click 'Join' on the group you want to be part of.",
  },
  {
    question: "How do I change my email address?",
    answer: "To change your email address, go to your account settings and update your email information.",
  },
  {
    question: "How do I change my privacy settings?",
    answer: "To change your privacy settings, go to the privacy section under your account settings and adjust your preferences.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h1 className="text-4xl  font-bold mb-2">Frequently asked questions</h1>
          <p className="text-gray-500">Trusted in more than 100 countries and 5 million customers.</p>
        </div>
        <div className="w-full ml-5 md:w-2/3 bg-white shadow-md rounded-lg divide-y divide-gray-200">
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center transition duration-300"
              >
                <span className={`font-semibold text-lg ${open === index ? 'text-blue-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${open === index ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Collapse isOpened={open === index}>
                <div className="px-6 py-4 text-gray-700 bg-gray-50 transition duration-300">
                  {faq.answer}
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
