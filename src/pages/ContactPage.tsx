import React from 'react';
import { ContactSection } from '../components/Home/ContactSection';
import { SHOP_INFO } from '../data/shopInfo';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-8 bg-[#F4F5F6]">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <div className="text-xs text-[#747B83] font-medium flex items-center gap-1.5 mb-2">
          <span>Home</span>
          <span>/</span>
          <span className="text-[#101214] font-semibold">Contact &amp; Store Location</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] uppercase tracking-tight">
          CONNECT WITH BALOCHISTAN SPORTS SHOP
        </h1>
        <p className="text-sm text-[#747B83] mt-1 max-w-2xl">
          We welcome local walk-ins at Prince Road, Quetta, phone inquiries, and nationwide WhatsApp orders across Pakistan.
        </p>
      </div>

      <ContactSection />
    </div>
  );
};
