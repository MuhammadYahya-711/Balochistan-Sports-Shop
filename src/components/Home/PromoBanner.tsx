import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const PromoBanner: React.FC = () => {
  const { setActivePage, setSelectedCategory } = useShop();

  const handleExplore = () => {
    setSelectedCategory('All');
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#101214] overflow-hidden text-white border-y border-[#242A30]">
      {/* Background with Dark Sports Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80"
          alt="Athletic strength and conditioning"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101214] via-[#101214]/85 to-[#101214]/60" />

        {/* Diagonal Lime Accent Bar */}
        <div className="absolute -bottom-10 right-10 w-80 h-3 bg-[#C6F135] rotate-[-8deg] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B1F23] border border-[#2E353E] text-xs font-heading font-bold uppercase tracking-wider text-[#C6F135] mb-4">
            <Trophy className="w-3.5 h-3.5 text-[#C6F135]" />
            <span>Tournament &amp; Training Ready</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
            READY FOR YOUR <br className="hidden sm:inline" />
            <span className="text-[#C6F135]">NEXT CHALLENGE?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
            Discover gear for training, competition, and everyday play. From high-grade cricket willows and match footballs to club kits and strength conditioning.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleExplore}
              className="px-6 py-3.5 bg-[#C6F135] hover:bg-[#b8e52a] text-[#101214] font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-[#C6F135]/20 flex items-center gap-2 group transition-all"
            >
              <span>EXPLORE THE COLLECTION</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-zinc-400 font-medium">
              In-store Quetta inspection available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
