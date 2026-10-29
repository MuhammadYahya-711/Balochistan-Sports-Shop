import React from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../../types/product';
import { formatPKR } from '../../utils/cart';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToProduct,
  } = useShop();

  const isSaved = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0]?.name);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => navigateToProduct(product)}
      className="group relative bg-white rounded-xl border border-[#E2E5E8] overflow-hidden flex flex-col justify-between hover:border-[#101214] hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square bg-[#F8F9FA] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="px-2 py-0.5 rounded text-[10px] font-heading font-extrabold uppercase tracking-wider bg-[#C6F135] text-[#101214] shadow-xs">
              NEW
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="px-2 py-0.5 rounded text-[10px] font-heading font-extrabold uppercase tracking-wider bg-[#FF642D] text-white shadow-xs">
              SALE
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-0.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300 shadow-xs">
              OUT OF STOCK
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleToggleWishlist}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 shadow-sm ${
            isSaved
              ? 'bg-[#FF642D] text-white'
              : 'bg-white/90 text-zinc-600 hover:text-[#FF642D] hover:bg-white'
          }`}
          aria-label={isSaved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
        </button>

        {/* Hover Quick View Overlay Action */}
        <div className="absolute inset-x-0 bottom-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex gap-2 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigateToProduct(product);
            }}
            className="flex-1 py-2 bg-[#101214] hover:bg-[#1B1F23] text-white rounded-lg text-xs font-heading font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5 text-[#747B83]">
            <span className="font-heading uppercase text-[11px] font-semibold tracking-wider text-zinc-500">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[11px]">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span className="font-semibold text-zinc-700">{product.rating}</span>
              <span className="text-zinc-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-heading font-bold text-sm sm:text-base text-[#101214] group-hover:text-[#FF642D] transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-[#E2E5E8] flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="font-mono font-bold text-base sm:text-lg text-[#101214] tracking-tight">
              {formatPKR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] font-mono text-[#747B83] line-through">
                {formatPKR(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Add to Cart button */}
          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            className={`px-3 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              product.inStock
                ? 'bg-[#101214] hover:bg-[#C6F135] text-white hover:text-[#101214] active:scale-95'
                : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
