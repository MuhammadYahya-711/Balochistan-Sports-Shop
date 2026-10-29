import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../Products/ProductCard';
import { useShop } from '../../context/ShopContext';
import { ProductCategory } from '../../types/product';

export const FeaturedProducts: React.FC = () => {
  const { setActivePage, setSelectedCategory } = useShop();
  const [activeTab, setActiveTab] = useState<'All' | ProductCategory>('All');

  const filterTabs: { label: string; value: 'All' | ProductCategory }[] = [
    { label: 'All Gear', value: 'All' },
    { label: 'Cricket', value: 'Cricket' },
    { label: 'Football', value: 'Football' },
    { label: 'Sportswear', value: 'Sportswear' },
    { label: 'Gym Equipment', value: 'Gym Equipment' },
    { label: 'Accessories', value: 'Accessories' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'All') return p.isFeatured || p.isNew;
    return p.category === activeTab;
  }).slice(0, 8);

  const handleViewAll = () => {
    setSelectedCategory(activeTab === 'All' ? 'All' : activeTab);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E2E5E8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF642D]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#747B83]">
                Shop Inventory
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] tracking-tight uppercase">
              FEATURED SPORTS GEAR
            </h2>
            <p className="text-sm sm:text-base text-[#747B83] mt-1">
              Top-performance equipment, protective wear, and match apparel available now.
            </p>
          </div>

          <button
            type="button"
            onClick={handleViewAll}
            className="self-start md:self-end flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#101214] hover:text-[#FF642D] group transition-colors"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === tab.value
                  ? 'bg-[#101214] text-[#C6F135] shadow-sm'
                  : 'bg-[#F4F5F6] text-zinc-600 hover:text-[#101214] hover:bg-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
