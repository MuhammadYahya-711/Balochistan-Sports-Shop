import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { useShop } from '../../context/ShopContext';

export const ShopByCategory: React.FC = () => {
  const { navigateToCategory } = useShop();

  return (
    <section id="shop-by-category" className="py-14 sm:py-20 bg-[#F4F5F6]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#C6F135]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#747B83]">
                Categories
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] tracking-tight uppercase">
              FIND YOUR GAME
            </h2>
            <p className="text-sm sm:text-base text-[#747B83] mt-1.5 max-w-xl">
              Explore equipment and essentials for your favourite sport. From competitive turf to everyday training.
            </p>
          </div>
        </div>

        {/* Categories Grid (8 Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => navigateToCategory(cat.name)}
              className="group relative rounded-xl overflow-hidden bg-[#1B1F23] h-60 sm:h-72 text-left shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6F135] cursor-pointer"
              aria-label={`Explore ${cat.name} category`}
            >
              {/* Category Image with hover zoom */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/60 to-transparent" />

              {/* Accent Corner Line */}
              <div className="absolute top-0 right-0 w-12 h-1 bg-[#C6F135] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between z-10">
                {/* Top Badge */}
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 rounded bg-[#101214]/70 backdrop-blur-xs text-[10px] font-mono text-zinc-300 border border-zinc-700">
                    {cat.itemCount} Items
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C6F135] group-hover:text-[#101214] text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Title & Tagline */}
                <div>
                  <p className="text-[10px] font-heading font-semibold text-[#C6F135] uppercase tracking-wider mb-0.5">
                    {cat.tagline}
                  </p>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-[#C6F135] transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-1 mt-1 opacity-80 group-hover:opacity-100">
                    {cat.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
