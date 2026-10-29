import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  Phone,
  ChevronDown,
  Layers,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { Logo } from '../Common/Logo';
import { useShop } from '../../context/ShopContext';
import { getCartCount, formatPKR } from '../../utils/cart';
import { CATEGORIES } from '../../data/categories';
import { PRODUCTS } from '../../data/products';
import { ProductCategory, Product } from '../../types/product';
import { SHOP_INFO } from '../../data/shopInfo';

export const Navbar: React.FC = () => {
  const {
    cart,
    wishlist,
    activePage,
    selectedCategory,
    setActivePage,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    setIsCartOpen,
    navigateToProduct,
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalCartCount = getCartCount(cart);
  const totalWishlistCount = wishlist.length;

  // Filter products for live search preview
  const liveSearchResults: Product[] = searchQuery.trim()
    ? PRODUCTS.filter((p) => {
        const query = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        );
      }).slice(0, 5)
    : [];

  // Close search preview when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActivePage('shop');
      setIsSearchFocused(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSearchResult = (product: Product) => {
    navigateToProduct(product);
    setIsSearchFocused(false);
  };

  const navLinks: { label: string; action: () => void; active: boolean }[] = [
    {
      label: 'Home',
      action: () => {
        setActivePage('home');
        setSelectedCategory('All');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'home',
    },
    {
      label: 'Football',
      action: () => {
        setSelectedCategory('Football');
        setActivePage('shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'shop' && selectedCategory === 'Football',
    },
    {
      label: 'Cricket',
      action: () => {
        setSelectedCategory('Cricket');
        setActivePage('shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'shop' && selectedCategory === 'Cricket',
    },
    {
      label: 'Sportswear',
      action: () => {
        setSelectedCategory('Sportswear');
        setActivePage('shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'shop' && selectedCategory === 'Sportswear',
    },
    {
      label: 'Footwear',
      action: () => {
        setSelectedCategory('Footwear');
        setActivePage('shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'shop' && selectedCategory === 'Footwear',
    },
    {
      label: 'Gym Equipment',
      action: () => {
        setSelectedCategory('Gym Equipment');
        setActivePage('shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'shop' && selectedCategory === 'Gym Equipment',
    },
    {
      label: 'Team Kits',
      action: () => {
        setSelectedCategory('Team Kits');
        setActivePage('shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'shop' && selectedCategory === 'Team Kits',
    },
    {
      label: 'All Products',
      action: () => {
        setSelectedCategory('All');
        setActivePage('shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'shop' && selectedCategory === 'All',
    },
    {
      label: 'Contact',
      action: () => {
        setActivePage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activePage === 'contact',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#101214] border-b border-[#242A30] shadow-xl">
      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-[#1B1F23] focus:outline-none focus:ring-2 focus:ring-[#C6F135]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left focus:outline-none focus:ring-2 focus:ring-[#C6F135] rounded-lg"
            aria-label="Balochistan Sports Shop Home"
          >
            <Logo variant="dark" size="md" />
          </button>

          {/* Product Search Bar (Desktop / Tablet) */}
          <div ref={searchContainerRef} className="hidden md:block flex-1 max-w-xl mx-2 relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search cricket bats, match footballs, gym gear, sportswear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full bg-[#1B1F23] text-white placeholder-zinc-400 pl-11 pr-24 py-2.5 rounded-lg border border-[#2D3339] focus:outline-none focus:border-[#C6F135] focus:ring-1 focus:ring-[#C6F135] text-sm transition-all shadow-inner"
                aria-label="Search sports gear"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#C6F135] hover:bg-[#bde82f] text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
              >
                Search
              </button>
            </form>

            {/* Live Search Preview Dropdown */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-[#1B1F23] border border-[#2D3339] rounded-xl shadow-2xl overflow-hidden z-50">
                <div className="p-2 border-b border-[#242A30] flex items-center justify-between text-xs text-zinc-400">
                  <span>Results for &quot;{searchQuery}&quot;</span>
                  <button
                    type="button"
                    onClick={() => {
                      setActivePage('shop');
                      setIsSearchFocused(false);
                    }}
                    className="text-[#C6F135] hover:underline font-semibold"
                  >
                    View all in catalogue
                  </button>
                </div>

                {liveSearchResults.length === 0 ? (
                  <div className="p-4 text-center text-xs text-zinc-400">
                    No matching sports gear found for &quot;{searchQuery}&quot;. Try searching for &quot;Cricket&quot;, &quot;Football&quot;, or &quot;Dumbbell&quot;.
                  </div>
                ) : (
                  <div className="divide-y divide-[#242A30]">
                    {liveSearchResults.map((prod) => (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => handleSelectSearchResult(prod)}
                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-[#242A30] transition-colors group"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-12 h-12 object-cover rounded-md bg-[#101214] shrink-0"
                          loading="lazy"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white group-hover:text-[#C6F135] truncate transition-colors">
                            {prod.name}
                          </p>
                          <p className="text-xs text-zinc-400">
                            {prod.category} • <span className="text-[#C6F135] font-mono font-medium">{formatPKR(prod.price)}</span>
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C6F135] -translate-x-1 group-hover:translate-x-0 transition-transform" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Icons & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Quick WhatsApp Inquiry */}
            <a
              href={SHOP_INFO.whatsappUrl("Hello Balochistan Sports Shop, I'd like to inquire about sports gear.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#242A30] hover:bg-[#2f373f] text-zinc-200 text-xs font-medium border border-[#363E47] transition-colors"
              title="Chat with shop on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Shop</span>
            </a>

            {/* Wishlist Link */}
            <button
              type="button"
              onClick={() => {
                setActivePage('wishlist');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-[#1B1F23] focus:outline-none focus:ring-2 focus:ring-[#C6F135] transition-colors"
              aria-label={`Wishlist with ${totalWishlistCount} items`}
            >
              <Heart className="w-5 h-5" />
              {totalWishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF642D] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {totalWishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1B1F23] hover:bg-[#252B31] border border-[#2D3339] text-white focus:outline-none focus:ring-2 focus:ring-[#C6F135] transition-all"
              aria-label={`Shopping cart with ${totalCartCount} items`}
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-[#C6F135]" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-[#C6F135] text-[#101214] font-heading font-extrabold text-[11px] rounded-full flex items-center justify-center shadow-md">
                    {totalCartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Cart
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search sports gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1B1F23] text-white placeholder-zinc-400 pl-10 pr-20 py-2 rounded-lg border border-[#2D3339] text-sm focus:outline-none focus:border-[#C6F135]"
              aria-label="Search sports gear mobile"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#C6F135] text-[#101214] font-bold text-xs rounded"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Desktop Secondary Category Navigation Bar */}
      <nav
        aria-label="Main categories navigation"
        className="hidden lg:block bg-[#16191D] border-t border-[#22272D] text-xs font-medium text-zinc-300"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* All Categories Dropdown Menu */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                className="flex items-center gap-2 px-4 py-3 bg-[#1B1F23] hover:bg-[#22282F] text-white font-heading font-semibold tracking-wider uppercase border-r border-[#242A30] transition-colors"
                aria-expanded={isCategoriesDropdownOpen}
              >
                <Layers className="w-4 h-4 text-[#C6F135]" />
                <span>All Categories</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isCategoriesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Flyout panel */}
              {isCategoriesDropdownOpen && (
                <div className="absolute left-0 top-full w-72 bg-[#1B1F23] border border-[#2E353D] shadow-2xl rounded-b-xl overflow-hidden py-2 z-50">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setActivePage('shop');
                        setIsCategoriesDropdownOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-left text-zinc-300 hover:text-white hover:bg-[#252B32] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#C6F135] group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-medium">{cat.name}</span>
                      </div>
                      <span className="text-[11px] text-zinc-500 group-hover:text-zinc-400">
                        {cat.itemCount} items
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Horizontal Category Nav Links */}
            <div className="flex items-center">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={link.action}
                  className={`px-4 py-3 font-medium transition-all relative ${
                    link.active
                      ? 'text-[#C6F135] font-semibold bg-[#1B1F23]/50'
                      : 'hover:text-white hover:bg-[#1B1F23]/30'
                  }`}
                >
                  {link.label}
                  {link.active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6F135]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Shop Phone CTA */}
          <div className="hidden xl:flex items-center gap-2 text-zinc-400">
            <span>Direct Shop Line:</span>
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="text-white hover:text-[#C6F135] font-mono font-semibold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#FF642D]" />
              {SHOP_INFO.phone}
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex"
        >
          <div className="w-4/5 max-w-sm bg-[#16191D] h-full flex flex-col p-6 shadow-2xl border-r border-[#242A30] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#242A30]">
              <Logo variant="dark" size="sm" />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-[#1B1F23]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-4 space-y-1">
              <p className="text-[11px] font-heading font-semibold tracking-wider text-zinc-500 uppercase px-3 py-1">
                Navigation
              </p>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    link.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm ${
                    link.active
                      ? 'bg-[#1B1F23] text-[#C6F135] font-semibold'
                      : 'text-zinc-300 hover:bg-[#1B1F23] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.active && <span className="w-1.5 h-1.5 rounded-full bg-[#C6F135]" />}
                </button>
              ))}
            </div>

            {/* Mobile Categories Accordion */}
            <div className="py-2 border-t border-[#242A30]">
              <p className="text-[11px] font-heading font-semibold tracking-wider text-zinc-500 uppercase px-3 py-1">
                Shop By Sport
              </p>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setActivePage('shop');
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-[#1B1F23] rounded-md text-left"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-zinc-600">{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="mt-auto pt-6 border-t border-[#242A30] space-y-2">
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="w-full py-2.5 px-3 bg-[#1B1F23] hover:bg-[#22282F] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border border-[#2E353D]"
              >
                <Phone className="w-4 h-4 text-[#FF642D]" />
                <span>Call {SHOP_INFO.phone}</span>
              </a>
              <a
                href={SHOP_INFO.whatsappUrl("Hello Balochistan Sports Shop, I'm reaching out from your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border border-[#25D366]/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quetta Shop</span>
              </a>
            </div>
          </div>
          {/* Overlay click to close */}
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
