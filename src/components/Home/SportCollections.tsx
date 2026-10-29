import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../Products/ProductCard';

export const SportCollections: React.FC = () => {
  const { navigateToCategory } = useShop();

  const footballProducts = PRODUCTS.filter((p) => p.category === 'Football' || p.id === 'bss-ftb-002').slice(0, 3);
  const cricketProducts = PRODUCTS.filter((p) => p.category === 'Cricket').slice(0, 3);

  return (
    <div className="py-14 sm:py-20 bg-[#F4F5F6] space-y-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* FOOTBALL COLLECTION SECTION */}
        <div className="bg-white rounded-2xl border border-[#E2E5E8] overflow-hidden shadow-sm p-6 sm:p-8 lg:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Banner Side */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-[#101214] text-white min-h-[360px] p-8 flex flex-col justify-between">
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
                alt="Football player in action"
                className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/60 to-transparent" />

              <div className="relative z-10">
                <span className="px-2.5 py-1 rounded bg-[#C6F135] text-[#101214] text-[10px] font-heading font-extrabold uppercase tracking-wider">
                  Football Collection
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                  FOR THE LOVE OF FOOTBALL
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Precision match balls, firm ground cleats, goalkeeper gloves, and club kit sets for pitch supremacy.
                </p>
                <button
                  type="button"
                  onClick={() => navigateToCategory('Football')}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6F135] hover:bg-[#b5e028] text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  <span>SHOP FOOTBALL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Showcase Products Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {footballProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>

        {/* CRICKET COLLECTION SECTION */}
        <div className="bg-white rounded-2xl border border-[#E2E5E8] overflow-hidden shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Showcase Products Side */}
            <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cricketProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {/* Banner Side */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative rounded-xl overflow-hidden bg-[#101214] text-white min-h-[360px] p-8 flex flex-col justify-between">
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
                alt="Cricket match gear"
                className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/60 to-transparent" />

              <div className="relative z-10">
                <span className="px-2.5 py-1 rounded bg-[#FF642D] text-white text-[10px] font-heading font-extrabold uppercase tracking-wider">
                  Cricket Division
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                  BUILT FOR THE NEXT INNINGS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Grade English willow bats, regulation leather balls, soft sheepskin batting gloves, and protective gear.
                </p>
                <button
                  type="button"
                  onClick={() => navigateToCategory('Cricket')}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-100 text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  <span>SHOP CRICKET</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF642D]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
