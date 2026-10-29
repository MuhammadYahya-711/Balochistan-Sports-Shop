import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = false,
}) => {
  const isDarkBg = variant === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm font-bold tracking-tight',
    md: 'text-base sm:text-lg font-bold tracking-tight',
    lg: 'text-xl sm:text-2xl font-extrabold tracking-tight',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] tracking-[0.2em]',
    lg: 'text-xs tracking-[0.25em]',
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group">
      {/* Dynamic Athletic Vector Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Base athletic shard */}
          <rect width="44" height="44" rx="10" fill={isDarkBg ? '#1B1F23' : '#101214'} />
          {/* Speed cuts */}
          <path
            d="M8 32L18 10H25L15 32H8Z"
            fill="#C6F135"
            className="transition-colors duration-300 group-hover:fill-[#d2f754]"
          />
          <path
            d="M20 32L30 10H35L25 32H20Z"
            fill="#FFFFFF"
          />
          {/* Kinetic sports accent */}
          <circle cx="33" cy="14" r="3.5" fill="#FF642D" />
          <path d="M27 26L34 26L31 32H24L27 26Z" fill="#C6F135" opacity="0.85" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading uppercase ${titleSizes[size]} ${
            isDarkBg ? 'text-white' : 'text-[#101214]'
          }`}
        >
          Balochistan
        </span>
        <span
          className={`font-heading font-semibold uppercase text-[#FF642D] ${subSizes[size]} mt-0.5 flex items-center gap-1`}
        >
          <span>SPORTS</span>
          <span className={isDarkBg ? 'text-zinc-400' : 'text-zinc-500'}>SHOP</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6F135] inline-block ml-0.5"></span>
        </span>
        {showTagline && (
          <span className="text-[10px] text-zinc-400 tracking-wider mt-1 font-sans">
            Quetta • Pakistan
          </span>
        )}
      </div>
    </div>
  );
};
