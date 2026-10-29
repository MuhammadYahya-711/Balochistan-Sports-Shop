import React from 'react';
import { Layers, Target, Compass, MapPin, Star } from 'lucide-react';
import { STORE_RATING } from '../../data/reviews';
import { SHOP_INFO } from '../../data/shopInfo';

export const BrandValueSection: React.FC = () => {
  const values = [
    {
      icon: Layers,
      title: 'Sports Essentials in One Place',
      description:
        'Explore cricket, football, fitness, and multisport equipment without running between separate specialty shops.',
    },
    {
      icon: Compass,
      title: 'Options for Different Sports',
      description:
        'Gear for casual street games, university leagues, club competitions, and high-intensity individual strength training.',
    },
    {
      icon: Target,
      title: 'Practical Gear for Training and Play',
      description:
        'Focused on durability, athletic ergonomics, and honest value for players of all levels across Balochistan.',
    },
    {
      icon: MapPin,
      title: 'Local Shopping in Quetta',
      description:
        'Conveniently situated on Prince Road. Come inspect sizes, bat balance, and ball quality firsthand.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E2E5E8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Rating Banner Top */}
        <div className="bg-[#101214] rounded-2xl p-6 sm:p-8 text-white mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-16 h-16 rounded-xl bg-[#C6F135] text-[#101214] font-heading font-extrabold text-2xl flex flex-col items-center justify-center shrink-0 shadow-lg">
              <span>{STORE_RATING.score}</span>
              <span className="text-[10px] tracking-widest uppercase font-sans font-bold">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#C6F135] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C6F135]" />
                ))}
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Customer Rating: 4.5/5 from 172 Reviews
              </h3>
              <p className="text-xs text-zinc-400">
                Verified reviews from athletes, academy players, and sports enthusiasts in Quetta.
              </p>
            </div>
          </div>

          <a
            href={SHOP_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#1B1F23] hover:bg-[#252C34] text-xs font-heading font-bold text-[#C6F135] border border-[#2F3741] transition-colors shrink-0"
          >
            View Shop On Google Maps
          </a>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF642D]" />
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#747B83]">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] uppercase tracking-tight">
            COMMITTED TO LOCAL ATHLETES
          </h2>
          <p className="text-sm sm:text-base text-[#747B83] mt-2">
            Balochistan Sports Shop provides dependable sporting goods to clubs, schools, academies, and everyday players.
          </p>
        </div>

        {/* 4 Value Propositions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="p-6 rounded-xl bg-[#F8F9FA] border border-[#E2E5E8] hover:border-[#101214] transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#101214] text-[#C6F135] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#101214] mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-xs text-[#747B83] leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
