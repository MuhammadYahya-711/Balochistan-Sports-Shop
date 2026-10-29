import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../data/shopInfo';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Where is Balochistan Sports Shop located in Quetta?',
      answer: `Our retail storefront is located at 52Q7+JGQ, Prince Road, Quetta, Pakistan. You are welcome to visit our shop to check equipment, test willow bat balances, and verify sizing.`,
    },
    {
      question: 'How does WhatsApp ordering work?',
      answer: `Browse the catalogue, add your selected gear to the shopping cart, and tap "Send Cart via WhatsApp" or submit an order request. A pre-formatted message detailing the items and quantities will open in your WhatsApp directly to our shop number (+923491232756). We will promptly confirm current shelf stock, size options, and arrange pickup or courier dispatch.`,
    },
    {
      question: 'What currency are the prices listed in?',
      answer: `All prices on the website are in Pakistani Rupees (PKR / ₨). Prices reflect standard retail prices at our Quetta shop. Bulk team kit orders may receive customized tournament quotes upon consultation.`,
    },
    {
      question: 'Can I order custom jerseys or bulk match balls for our local team?',
      answer: `Yes. We regularly supply cricket academies, school leagues, and football tournament teams with matched jerseys, numbered kits, and regulation leather balls. Contact us at 03491232756 or via WhatsApp with your squad requirements.`,
    },
    {
      question: 'Do you deliver to other cities in Balochistan or Pakistan?',
      answer: `Yes. While our primary storefront serves Quetta, we coordinate courier and bus cargo dispatches to surrounding districts (such as Chaman, Pishin, Sibi, Gwadar) as well as broader cities across Pakistan. Courier charges are confirmed transparently prior to dispatch.`,
    },
    {
      question: 'How do I know what cricket bat weight or size to choose?',
      answer: `Standard senior bats are Short Handle (SH), typically weighing between 2.7 lbs and 2.10 lbs. For specific advice regarding handle flexibility, grain density, or knocking-in services, please give our shop a call at ${SHOP_INFO.phone}.`,
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#F4F5F6] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-[#FF642D]" />
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#747B83]">
              Help &amp; Answers
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-sm text-[#747B83] mt-2">
            Everything you need to know about shopping, local pickup, and equipment orders at Balochistan Sports Shop.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E2E5E8] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#101214] hover:text-[#FF642D] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#101214]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 p-6 sm:p-8 bg-[#101214] rounded-2xl text-white text-center space-y-4">
          <h3 className="font-heading font-bold text-lg text-white">
            Still Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
            Our team on Prince Road, Quetta is ready to help you with equipment advice, sizing, and order details.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="px-5 py-2.5 bg-white hover:bg-zinc-100 text-[#101214] text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF642D]" />
              <span>Call {SHOP_INFO.phone}</span>
            </a>
            <a
              href={SHOP_INFO.whatsappUrl("Hello Balochistan Sports Shop, I have a question about ordering sports equipment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask On WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
