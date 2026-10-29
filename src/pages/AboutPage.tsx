import React from 'react';
import { MapPin, Phone, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { SHOP_INFO } from '../data/shopInfo';
import { STORE_RATING } from '../data/reviews';
import { useShop } from '../context/ShopContext';

export const AboutPage: React.FC = () => {
  const { setActivePage, setSelectedCategory } = useShop();

  const handleExplore = () => {
    setSelectedCategory('All');
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F4F5F6]">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#101214] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden border border-[#242A30]">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#C6F135] text-[#101214] text-[11px] font-heading font-extrabold uppercase tracking-widest inline-block">
              About Our Store
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight leading-tight">
              SERVING ATHLETES IN QUETTA &amp; ACROSS BALOCHISTAN
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Balochistan Sports Shop is dedicated to equipping cricketers, footballers, gym lifters, and everyday athletes with dependable sporting goods. Located on Prince Road in Quetta, we bring authentic sporting gear to players who train hard and play with passion.
            </p>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
              alt="Athletics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pillars / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E2E5E8] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#101214] text-[#C6F135] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#101214]">
              Genuine Athletic Equipment
            </h3>
            <p className="text-xs text-[#747B83] leading-relaxed">
              We focus on carefully vetted willow bats, regulation footballs, stitched team kits, and heavy-duty gym plates built for repeated training sessions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E5E8] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#101214] text-[#FF642D] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#101214]">
              Local Community Connection
            </h3>
            <p className="text-xs text-[#747B83] leading-relaxed">
              Supporting Quetta&apos;s football clubs, cricket academies, schools, and tournament organizers with tailored gear recommendations and team kit packages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E5E8] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#101214] text-[#C6F135] flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#101214]">
              Verified Customer Trust
            </h3>
            <p className="text-xs text-[#747B83] leading-relaxed">
              Holding a verified {STORE_RATING.score}/5 rating from {STORE_RATING.totalReviews} reviews, reflecting honest advice and consistent quality.
            </p>
          </div>
        </div>

        {/* Storefront Location Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E5E8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-xl text-[#101214]">
              Visit Our Store on Prince Road
            </h2>
            <div className="space-y-1 text-xs text-zinc-600">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF642D]" />
                <span className="font-medium text-zinc-900">{SHOP_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6F135]" />
                <span className="font-mono">{SHOP_INFO.phone}</span>
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={SHOP_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#101214] hover:bg-[#1B1F23] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              Google Maps
            </a>
            <button
              type="button"
              onClick={handleExplore}
              className="px-5 py-2.5 bg-[#C6F135] hover:bg-[#b8e426] text-[#101214] text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Explore Gear</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
