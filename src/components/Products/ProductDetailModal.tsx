import React, { useState } from 'react';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Check,
} from 'lucide-react';
import { Product } from '../../types/product';
import { formatPKR, buildSingleProductWhatsAppMessage } from '../../utils/cart';
import { useShop } from '../../context/ShopContext';
import { SHOP_INFO } from '../../data/shopInfo';
import { PRODUCTS } from '../../data/products';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const { addToCart, toggleWishlist, isInWishlist, navigateToProduct } = useShop();

  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]?.name
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product.image);

  const isSaved = isInWishlist(product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const whatsappInquiryUrl = SHOP_INFO.whatsappUrl(
    buildSingleProductWhatsAppMessage(product.name, product.price, selectedVariant)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#101214]/80 hover:bg-[#101214] text-white flex items-center justify-center transition-colors shadow-md"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* Left: Gallery & Image Display */}
            <div className="space-y-3">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F8F9FA] border border-[#E2E5E8]">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-heading font-extrabold uppercase tracking-wider bg-[#C6F135] text-[#101214] shadow-sm">
                    NEW ARRIVAL
                  </span>
                )}
              </div>

              {/* Thumbnail selector if gallery exists */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-2">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === img ? 'border-[#101214] scale-95' : 'border-transparent opacity-70'
                      }`}
                    >
                      <img src={img} alt={`${product.name} angle ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Shop Trust Point */}
              <div className="p-3 bg-[#F4F5F6] rounded-xl border border-[#E2E5E8] flex items-center gap-3 text-xs text-[#747B83]">
                <MapPin className="w-4 h-4 text-[#FF642D] shrink-0" />
                <span>
                  Available for in-person inspection and pickup at Prince Road, Quetta.
                </span>
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-heading font-bold uppercase tracking-wider text-[#747B83]">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-zinc-700">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-zinc-400">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#101214] leading-tight">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-mono font-extrabold text-2xl sm:text-3xl text-[#101214]">
                    {formatPKR(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="font-mono text-base text-[#747B83] line-through">
                      {formatPKR(product.originalPrice)}
                    </span>
                  )}
                  <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                    In Stock at Quetta Shop
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[#747B83] leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mt-4 space-y-1.5">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#101214]">
                      Key Specifications:
                    </p>
                    <ul className="text-xs text-zinc-600 space-y-1 pl-4 list-disc">
                      {product.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Variants Selector */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mt-5">
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#101214] mb-2">
                      Select {product.variantLabel || 'Option'}:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant) => {
                        const isSelected = selectedVariant === variant.name;
                        return (
                          <button
                            key={variant.id}
                            type="button"
                            disabled={!variant.inStock}
                            onClick={() => setSelectedVariant(variant.name)}
                            className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all border ${
                              isSelected
                                ? 'bg-[#101214] text-white border-[#101214]'
                                : variant.inStock
                                ? 'bg-white text-zinc-800 border-zinc-300 hover:border-[#101214]'
                                : 'bg-zinc-100 text-zinc-400 border-zinc-200 line-through cursor-not-allowed'
                            }`}
                          >
                            {variant.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#101214]">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-zinc-300 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-sm font-bold text-zinc-700"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 font-mono text-sm font-bold text-[#101214]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-sm font-bold text-zinc-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-zinc-200">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 px-4 bg-[#101214] hover:bg-[#1B1F23] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#C6F135]" />
                    <span>Add To Shopping Cart</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isSaved
                        ? 'bg-[#FF642D] text-white border-[#FF642D]'
                        : 'border-zinc-300 text-zinc-700 hover:text-[#FF642D] hover:border-[#FF642D]'
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`w-5 h-5 ${isSaved ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Direct WhatsApp Ordering */}
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order / Inquire via WhatsApp ({SHOP_INFO.phone})</span>
                </a>

                <p className="text-[11px] text-zinc-500 text-center">
                  Shop confirmation required for stock reservations, delivery charges, and local pickup timing.
                </p>
              </div>
            </div>
          </div>

          {/* Related Items */}
          {relatedProducts.length > 0 && (
            <div className="mt-10 pt-8 border-t border-zinc-200">
              <h3 className="font-heading font-bold text-base text-[#101214] uppercase tracking-wide mb-4">
                You May Also Need in {product.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    onClick={() => {
                      navigateToProduct(rel);
                      setActiveImage(rel.image);
                      setSelectedVariant(rel.variants?.[0]?.name);
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 hover:border-[#101214] text-left transition-all group"
                  >
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-14 h-14 object-cover rounded-lg bg-zinc-100 shrink-0"
                    />
                    <div>
                      <p className="font-heading font-semibold text-xs text-[#101214] group-hover:text-[#FF642D] line-clamp-1">
                        {rel.name}
                      </p>
                      <p className="text-xs font-mono font-bold text-[#101214] mt-0.5">
                        {formatPKR(rel.price)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
