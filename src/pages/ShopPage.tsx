import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  PackageOpen,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/Products/ProductCard';
import { useShop } from '../context/ShopContext';
import { ProductCategory } from '../types/product';
import { formatPKR } from '../utils/cart';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'rating-desc';

export const ShopPage: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useShop();

  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Available categories list
  const categoryOptions: ('All' | ProductCategory)[] = [
    'All',
    'Cricket',
    'Football',
    'Sportswear',
    'Footwear',
    'Gym Equipment',
    'Team Kits',
    'Accessories',
    'Other Sports',
  ];

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesDesc) {
          return false;
        }
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // In stock filter
      if (onlyInStock && !product.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      if (sortOption === 'rating-desc') return b.rating - a.rating;
      // Default: featured first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, maxPrice, onlyInStock, sortOption]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setMaxPrice(30000);
    setOnlyInStock(false);
    setSortOption('featured');
    setVisibleCount(8);
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    searchQuery.trim() !== '' ||
    maxPrice < 30000 ||
    onlyInStock;

  return (
    <div className="py-8 sm:py-12 bg-[#F4F5F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Breadcrumbs & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[#747B83] mb-2 font-medium">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#101214] font-semibold">Store Catalogue</span>
            {selectedCategory !== 'All' && (
              <>
                <span>/</span>
                <span className="text-[#FF642D] font-bold">{selectedCategory}</span>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] uppercase tracking-tight">
                {selectedCategory === 'All' ? 'ALL SPORTS EQUIPMENT' : `${selectedCategory} GEAR`}
              </h1>
              <p className="text-xs sm:text-sm text-[#747B83] mt-1">
                Explore genuine sporting goods available at our Prince Road, Quetta storefront.
              </p>
            </div>

            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setIsFilterDrawerOpen(true)}
              className="lg:hidden self-start flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-[#E2E5E8] text-xs font-heading font-bold uppercase text-[#101214]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#FF642D]" />
              <span>Filters {hasActiveFilters ? '• Active' : ''}</span>
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(8);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#101214] text-[#C6F135] shadow-xs'
                  : 'bg-white text-zinc-700 border border-[#E2E5E8] hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-[#E2E5E8] h-fit">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <h3 className="font-heading font-bold text-sm text-[#101214] uppercase tracking-wider flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#101214]" />
                <span>Filters</span>
              </h3>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-[#FF642D] hover:underline flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Search Input Filter */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-2">
                Keyword Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Willow, Leather, Studs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 pl-8 border border-zinc-300 rounded-lg text-xs focus:outline-none focus:border-[#101214]"
                />
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-2">
                <span>Max Price</span>
                <span className="font-mono text-[#101214]">{formatPKR(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#101214]"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                <span>₨ 1,000</span>
                <span>₨ 30,000</span>
              </div>
            </div>

            {/* Availability Filter */}
            <div className="pt-2">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="w-4 h-4 rounded text-[#101214] focus:ring-[#C6F135] accent-[#101214]"
                />
                <span className="text-xs font-semibold text-zinc-700">
                  In Stock Only
                </span>
              </label>
            </div>

            {/* Quetta Shop Info Badge */}
            <div className="p-3 bg-[#F4F5F6] rounded-xl border border-zinc-200 text-xs text-zinc-600 leading-relaxed">
              <p className="font-bold text-[#101214] mb-1">Local Pickup Available</p>
              Visit our shop at Prince Road, Quetta to check items in person.
            </div>
          </aside>

          {/* Product Listings Main Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Controls Bar: Results Count & Sort Dropdown */}
            <div className="bg-white p-4 rounded-xl border border-[#E2E5E8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-[#747B83] font-medium">
                Showing{' '}
                <span className="font-bold text-[#101214]">{displayedProducts.length}</span> of{' '}
                <span className="font-bold text-[#101214]">{filteredProducts.length}</span> sports items
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-xs text-[#747B83] font-medium whitespace-nowrap">
                  Sort By:
                </label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="px-3 py-1.5 bg-[#F8F9FA] border border-zinc-300 rounded-lg text-xs font-semibold text-[#101214] focus:outline-none focus:border-[#101214]"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Highest Rated</option>
                  <option value="name-asc">Product Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Products Grid or Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#E2E5E8] p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F4F5F6] flex items-center justify-center mx-auto text-zinc-400">
                  <PackageOpen className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#101214]">
                  No Matching Sports Gear Found
                </h3>
                <p className="text-xs text-[#747B83] max-w-sm mx-auto">
                  Try adjusting your search terms, price ceiling, or category filter to discover available equipment.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-[#101214] hover:bg-[#1B1F23] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredProducts.length && (
                  <div className="pt-6 text-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                      className="px-8 py-3 bg-white hover:bg-zinc-50 border border-[#E2E5E8] hover:border-zinc-400 text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
                    >
                      Load More Products ({filteredProducts.length - visibleCount} remaining)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
