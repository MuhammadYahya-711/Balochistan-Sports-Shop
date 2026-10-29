import React from 'react';
import { Phone, MapPin, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Logo } from '../Common/Logo';
import { SHOP_INFO } from '../../data/shopInfo';
import { useShop } from '../../context/ShopContext';
import { ProductCategory } from '../../types/product';

export const Footer: React.FC = () => {
  const { setActivePage, setSelectedCategory } = useShop();
  const currentYear = new Date().getFullYear();

  const handleCategoryClick = (cat: ProductCategory | 'All') => {
    setSelectedCategory(cat);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageClick = (page: 'about' | 'contact' | 'faq' | 'privacy' | 'terms') => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101214] text-white border-t border-[#242A30] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#242A30]">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="md" showTagline />
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Balochistan Sports Shop is your trusted destination for genuine cricket equipment, tournament footballs, athletic footwear, sportswear, and gym gear on Prince Road, Quetta.
            </p>

            <div className="space-y-2 pt-2 text-xs text-zinc-300">
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#C6F135] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF642D]" />
                <span className="font-mono">{SHOP_INFO.phone}</span>
              </a>

              <a
                href={SHOP_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#C6F135] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C6F135] shrink-0 mt-0.5" />
                <span>{SHOP_INFO.address}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={SHOP_INFO.whatsappUrl("Hello Balochistan Sports Shop, I'm reaching out from your website footer.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat On WhatsApp ({SHOP_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#C6F135]">
              Shop Sports
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('All')}
                  className="hover:text-white transition-colors"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Cricket')}
                  className="hover:text-white transition-colors"
                >
                  Cricket Gear
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Football')}
                  className="hover:text-white transition-colors"
                >
                  Football Equipment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Sportswear')}
                  className="hover:text-white transition-colors"
                >
                  Sportswear &amp; Jerseys
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Footwear')}
                  className="hover:text-white transition-colors"
                >
                  Athletic Shoes &amp; Studs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Gym Equipment')}
                  className="hover:text-white transition-colors"
                >
                  Gym &amp; Fitness Equipment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Accessories')}
                  className="hover:text-white transition-colors"
                >
                  Training Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#C6F135]">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Store
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePageClick('faq')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  Call: {SHOP_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={SHOP_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Information & Policies */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#C6F135]">
              Information
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => handlePageClick('about')}
                  className="hover:text-white transition-colors"
                >
                  About Our Shop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePageClick('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePageClick('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li className="pt-2 flex items-center gap-1.5 text-zinc-500 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6F135]" />
                <span>Verified Quetta Retailer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {SHOP_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Prices listed in Pakistani Rupee ({SHOP_INFO.currency})</span>
            <span>Prince Road, Quetta, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
