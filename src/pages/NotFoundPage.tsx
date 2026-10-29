import React from 'react';
import { ShieldAlert, Home, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const NotFoundPage: React.FC = () => {
  const { setActivePage, setSelectedCategory } = useShop();

  return (
    <div className="py-20 bg-[#F4F5F6] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#101214] text-[#FF642D] flex items-center justify-center mx-auto shadow-lg">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <span className="font-mono font-bold text-sm text-[#FF642D] tracking-widest uppercase">
          Error 404
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-[#101214] uppercase tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#747B83] leading-relaxed">
          The sports category, product, or link you are looking for has moved or does not exist.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-[#101214] hover:bg-[#1B1F23] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#C6F135]" />
            <span>Return Home</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setActivePage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-[#C6F135] hover:bg-[#b8e426] text-[#101214] text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Products</span>
          </button>
        </div>
      </div>
    </div>
  );
};
