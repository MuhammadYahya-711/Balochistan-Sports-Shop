import React from 'react';
import { Zap, Phone, MapPin } from 'lucide-react';
import { SHOP_INFO } from '../../data/shopInfo';

export const TopAnnouncement: React.FC = () => {
  return (
    <div className="bg-[#101214] text-white border-b border-[#242A30] text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        {/* Athletic Slogan */}
        <div className="flex items-center gap-2 font-medium tracking-wide text-zinc-300">
          <span className="flex items-center justify-center w-4 h-4 rounded bg-[#C6F135]/20 text-[#C6F135]">
            <Zap className="w-3 h-3 fill-[#C6F135]" />
          </span>
          <span className="font-heading font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
            {SHOP_INFO.tagline}
          </span>
          <span className="hidden md:inline text-zinc-600">|</span>
          <span className="hidden md:inline text-zinc-400 text-[11px]">
            Quetta &amp; All-Pakistan Sports Inquiries Welcome
          </span>
        </div>

        {/* Business details */}
        <div className="flex items-center gap-4 text-[11px] text-zinc-400">
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-[#C6F135] transition-colors"
            title="Call Balochistan Sports Shop"
          >
            <Phone className="w-3 h-3 text-[#FF642D]" />
            <span className="font-mono">{SHOP_INFO.phone}</span>
          </a>

          <a
            href={SHOP_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 hover:text-[#C6F135] transition-colors"
            title="View Location on Google Maps"
          >
            <MapPin className="w-3 h-3 text-[#C6F135]" />
            <span className="truncate max-w-[190px]">Prince Road, Quetta</span>
          </a>
        </div>
      </div>
    </div>
  );
};
