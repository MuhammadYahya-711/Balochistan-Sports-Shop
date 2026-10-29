import React from 'react';
import { ArrowRight, ShieldCheck, Star, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { SHOP_INFO } from '../../data/shopInfo';

export const HeroBanner: React.FC = () => {
  const { setActivePage, setSelectedCategory } = useShop();

  const handleExploreProducts = () => {
    setSelectedCategory('All');
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCategories = () => {
    const el = document.getElementById('shop-by-category');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCategory('All');
      setActivePage('shop');
    }
  };

  return (
    <section className="relative bg-[#101214] text-white overflow-hidden border-b border-[#242A30]">
      {/* Background Graphic Patterns & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Athletic dynamic backdrop image */}
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=2000&q=85"
          alt="Athletic training campaign"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />
        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101214] via-[#101214]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-[#101214]/60" />

        {/* Diagonal speed accents in electric lime & charcoal */}
        <div className="hidden xl:block absolute right-1/4 -top-24 w-1 h-96 bg-[#C6F135]/40 rotate-12 blur-xs" />
        <div className="hidden xl:block absolute right-1/3 -bottom-24 w-1.5 h-80 bg-[#FF642D]/30 rotate-12" />
        <div className="absolute top-1/2 right-12 w-96 h-96 rounded-full bg-[#C6F135]/5 filter blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B1F23] border border-[#2D3339] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C6F135] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-widest text-[#C6F135]">
                BUILT FOR EVERY CHALLENGE
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-[11px] text-zinc-300 hidden sm:inline">
                Prince Road, Quetta
              </span>
            </div>

            {/* Main Campaign Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] uppercase">
              <span className="text-white block">GEAR UP.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6F135] to-[#e4ff76] block mt-1">
                PLAY YOUR BEST.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
              Discover sportswear, equipment, and everyday essentials for your next performance. Authentic cricket, football, gym, and athletic gear ready for training and competition.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleExploreProducts}
                className="px-6 py-3.5 bg-[#C6F135] hover:bg-[#bce82e] text-[#101214] font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-[#C6F135]/20 flex items-center gap-2 group transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={handleScrollToCategories}
                className="px-6 py-3.5 bg-[#1B1F23] hover:bg-[#252B31] text-white border border-[#343C45] font-heading font-semibold text-sm uppercase tracking-wider rounded-lg transition-all hover:border-[#C6F135]/50 cursor-pointer"
              >
                SHOP CATEGORIES
              </button>
            </div>

            {/* Trust and Rating Micro-bar */}
            <div className="pt-6 border-t border-[#242A30] flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#C6F135]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6F135]" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">{SHOP_INFO.rating} / 5</span>
                <span>({SHOP_INFO.reviewCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6F135]" />
                <span>Genuine Sporting Goods</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF642D]" />
                <span>Direct Quetta Store Pickup</span>
              </div>
            </div>
          </div>

          {/* Right Athletic Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative angular frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#C6F135]/30 to-[#FF642D]/20 rounded-2xl transform rotate-1 blur-xs" />

              <div className="relative bg-[#1B1F23] rounded-2xl overflow-hidden border border-[#2D353E] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80"
                  alt="Sports training performance"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Card Badge */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#101214] via-[#101214]/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider bg-[#C6F135] text-[#101214] mb-1">
                        Featured Sport
                      </span>
                      <h3 className="font-heading font-bold text-lg text-white">
                        Cricket &amp; Football Essentials
                      </h3>
                      <p className="text-xs text-zinc-300">
                        Pro-grade bats, balls, boots &amp; protective gear
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleExploreProducts}
                      className="w-10 h-10 rounded-full bg-[#C6F135] text-[#101214] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      aria-label="View featured gear"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
