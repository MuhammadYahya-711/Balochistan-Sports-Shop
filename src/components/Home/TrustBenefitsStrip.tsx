import React from 'react';
import { Award, ShoppingBag, Headphones, MapPin } from 'lucide-react';
import { SHOP_INFO } from '../../data/shopInfo';

export const TrustBenefitsStrip: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Quality Sports Gear',
      desc: 'Selected equipment for cricket, football, gym, and athletics.',
    },
    {
      icon: ShoppingBag,
      title: 'Easy Ordering',
      desc: 'Order in-store or connect directly via WhatsApp for quick reservations.',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      desc: `Direct call at ${SHOP_INFO.phone} for gear advice and availability.`,
    },
    {
      icon: MapPin,
      title: 'Convenient Shopping',
      desc: 'Visit Prince Road, Quetta or coordinate delivery arrangements.',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E2E5E8] py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 pt-4 sm:pt-0 ${
                  idx !== 0 ? 'sm:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#F4F5F6] border border-[#E2E5E8] flex items-center justify-center shrink-0 text-[#101214]">
                  <Icon className="w-5 h-5 text-[#101214]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#101214] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#747B83] mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
