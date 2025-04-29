import { useState } from 'react';
import { FAQ } from '../types';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is Dev Market?",
      answer: "Dev Market is an AI-powered platform that allows you to create custom landing pages according to your specific requirements. You can easily deploy and host these pages on our platform, and even connect them to your own domain."
    },
    {
      id: 2,
      question: "How does the pricing work?",
      answer: "We offer a simple pay-as-you-go model. You pay ₹1000 for creating and hosting a landing page, plus any domain charges if you choose to connect your own domain. There are no hidden fees or subscription costs."
    },
    {
      id: 3,
      question: "Can I use my own domain name?",
      answer: "Yes! You can connect your own domain to your landing page. We handle all the technical aspects of deployment and hosting, making it seamless for you to get your landing page online with your branded domain."
    },
    {
      id: 4,
      question: "Do I need any technical skills to use Dev Market?",
      answer: "Not at all. Our AI-powered platform makes it easy for anyone, regardless of technical skills, to create beautiful landing pages. Simply specify your requirements, and our system will generate a custom landing page for you."
    },
    {
      id: 5,
      question: "How long does it take to get my landing page online?",
      answer: "With Dev Market, you can have your landing page created, deployed, and live within minutes. The AI handles the heavy lifting, while our automated deployment system ensures your page goes live instantly."
    },
    {
      id: 6,
      question: "Can I make changes to my landing page after it's published?",
      answer: "Absolutely! You can make unlimited changes to your landing page after it's published. Our platform makes it easy to update content, design elements, and functionality whenever you need to."
    },
    {
      id: 7,
      question: "What kind of landing pages can I create?",
      answer: "You can create any type of landing page including product launches, event registrations, lead generation, email sign-ups, promotional campaigns, and more. Our AI adapts to your specific requirements and goals."
    },
    {
      id: 8,
      question: "Is there any long-term commitment?",
      answer: "No. With our pay-as-you-go model, there are no contracts or long-term commitments. You only pay for what you use, when you use it."
    }
  ];

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
          Find answers to common questions about Dev Market, our AI-powered landing page platform.
        </p>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-5">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaq === faq.id}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openFaq === faq.id ? (
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {openFaq === faq.id && (
                <div className="mt-3 pr-12">
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">Still have questions?</p>
          <a
            href="#cta"
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
          >
            Contact our support team
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;