import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { formatPKR } from '../utils/cart';

export const WishlistPage: React.FC = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
    setActivePage,
    setSelectedCategory,
    navigateToProduct,
  } = useShop();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleStartShopping = () => {
    setSelectedCategory('All');
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F4F5F6] min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-[#FF642D] fill-[#FF642D]" />
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#747B83]">
              Saved Products
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] uppercase tracking-tight">
            MY WISHLIST ({savedProducts.length})
          </h1>
          <p className="text-sm text-[#747B83] mt-1">
            Keep track of gear you want to order or inspect at our Quetta shop.
          </p>
        </div>

        {savedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E2E5E8] p-12 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#F4F5F6] flex items-center justify-center mx-auto text-zinc-400">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-bold text-xl text-[#101214]">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-[#747B83]">
              Save cricket bats, football boots, and fitness gear here for fast access later.
            </p>
            <button
              type="button"
              onClick={handleStartShopping}
              className="mt-2 px-6 py-2.5 bg-[#101214] hover:bg-[#C6F135] text-white hover:text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Explore Products Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-[#E2E5E8] overflow-hidden flex flex-col justify-between hover:border-[#101214] transition-all"
              >
                <div
                  onClick={() => navigateToProduct(product)}
                  className="aspect-square bg-[#F8F9FA] relative cursor-pointer group overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 text-[#FF642D] hover:bg-white flex items-center justify-center shadow-xs"
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-500">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => navigateToProduct(product)}
                      className="font-heading font-bold text-sm text-[#101214] hover:text-[#FF642D] cursor-pointer line-clamp-2 mt-1"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                    <span className="font-mono font-bold text-base text-[#101214]">
                      {formatPKR(product.price)}
                    </span>

                    <button
                      type="button"
                      onClick={() => addToCart(product, 1, product.variants?.[0]?.name)}
                      className="px-3 py-1.5 bg-[#101214] hover:bg-[#C6F135] text-white hover:text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
