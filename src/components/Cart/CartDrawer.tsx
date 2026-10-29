import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { calculateSubtotal, formatPKR, buildWhatsAppOrderMessage } from '../../utils/cart';
import { SHOP_INFO } from '../../data/shopInfo';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    setIsOrderModalOpen,
    setActivePage,
    setSelectedCategory,
  } = useShop();

  if (!isCartOpen) return null;

  const subtotal = calculateSubtotal(cart);

  const handleWhatsAppCheckout = () => {
    const msg = buildWhatsAppOrderMessage({ items: cart });
    window.open(SHOP_INFO.whatsappUrl(msg), '_blank');
  };

  const handleStartShopping = () => {
    setIsCartOpen(false);
    setSelectedCategory('All');
    setActivePage('shop');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
      className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs flex justify-end"
    >
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#101214] text-white flex items-center justify-between border-b border-[#242A30]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C6F135]" />
            <h2 className="font-heading font-extrabold text-base uppercase tracking-wider">
              Shopping Cart ({cart.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-[#1B1F23]"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F4F5F6] flex items-center justify-center text-zinc-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#101214]">
              Your Cart is Empty
            </h3>
            <p className="text-xs text-[#747B83] max-w-xs">
              Explore our cricket bats, match footballs, sportswear, and fitness equipment.
            </p>
            <button
              type="button"
              onClick={handleStartShopping}
              className="mt-2 px-6 py-2.5 bg-[#101214] hover:bg-[#C6F135] text-white hover:text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Start Exploring Gear
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 divide-y divide-zinc-100">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedVariant || 'def'}`}
                  className="py-3.5 flex gap-3.5"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg bg-zinc-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-heading font-semibold text-xs text-[#101214] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id, item.selectedVariant)}
                          className="text-zinc-400 hover:text-[#FF642D] p-1"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedVariant && (
                        <p className="text-[11px] text-zinc-500 font-medium">
                          Option: {item.selectedVariant}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-zinc-200 rounded-md">
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedVariant
                            )
                          }
                          className="px-2 py-0.5 text-xs text-zinc-600 hover:bg-zinc-100"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-mono font-bold text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedVariant
                            )
                          }
                          className="px-2 py-0.5 text-xs text-zinc-600 hover:bg-zinc-100"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-mono font-bold text-xs text-[#101214]">
                        {formatPKR(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="p-4 sm:p-5 bg-[#F8F9FA] border-t border-[#E2E5E8] space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-600">
                <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-mono font-bold text-base text-[#101214]">
                  {formatPKR(subtotal)}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsOrderModalOpen(true);
                  }}
                  className="w-full py-3 bg-[#101214] hover:bg-[#1B1F23] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Proceed to Order Details</span>
                  <ArrowRight className="w-4 h-4 text-[#C6F135]" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Cart via WhatsApp</span>
                </button>

                <div className="flex justify-between items-center text-[11px] text-zinc-500 pt-1">
                  <span>Prince Road Shop, Quetta</span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-zinc-500 hover:text-[#FF642D] underline"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
