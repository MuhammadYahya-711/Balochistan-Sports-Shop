import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { calculateSubtotal, formatPKR, buildWhatsAppOrderMessage } from '../../utils/cart';
import { SHOP_INFO } from '../../data/shopInfo';

export const OrderRequestModal: React.FC = () => {
  const {
    cart,
    isOrderModalOpen,
    setIsOrderModalOpen,
    clearCart,
    showNotification,
  } = useShop();

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('Quetta');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastOrderId, setLastOrderId] = useState('');

  if (!isOrderModalOpen) return null;

  const subtotal = calculateSubtotal(cart);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phoneNumber || !address) return;

    const orderId = `BSS-${Date.now().toString().slice(-6)}`;
    setLastOrderId(orderId);

    // Save order request to local storage history
    const orderRecord = {
      orderId,
      customerName,
      phoneNumber,
      city,
      address,
      notes,
      items: cart,
      subtotal,
      date: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('bss_order_history') || '[]');
      existing.unshift(orderRecord);
      localStorage.setItem('bss_order_history', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setIsSuccess(true);
    showNotification(`Order request ${orderId} created successfully!`);
  };

  const handleOpenWhatsApp = () => {
    const message = buildWhatsAppOrderMessage({
      items: cart,
      customerName,
      phoneNumber,
      city,
      address,
      notes: notes ? `Order Ref: #${lastOrderId}. ${notes}` : `Order Ref: #${lastOrderId}`,
    });

    window.open(SHOP_INFO.whatsappUrl(message), '_blank');
  };

  const handleFinish = () => {
    clearCart();
    setIsSuccess(false);
    setIsOrderModalOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order Request Checkout"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={() => setIsOrderModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 rounded-lg"
          aria-label="Close order window"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-[#101214]">
              Order Request Received!
            </h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto">
              Reference: <span className="font-mono font-bold text-zinc-900">#{lastOrderId}</span>
              <br />
              Send your order request to our shop WhatsApp to confirm immediate availability, size confirmation, and local Quetta pickup/dispatch.
            </p>

            <div className="p-4 bg-[#F8F9FA] rounded-xl border border-zinc-200 text-left max-w-md mx-auto text-xs space-y-1">
              <p className="font-bold text-zinc-800">Customer: {customerName}</p>
              <p className="text-zinc-600">Phone: {phoneNumber}</p>
              <p className="text-zinc-600">Location: {city}, {address}</p>
              <p className="font-mono font-bold text-[#101214] pt-1">Estimated Total: {formatPKR(subtotal)}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send To Shop WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleFinish}
                className="px-6 py-3 bg-[#101214] hover:bg-[#1B1F23] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Done / Back to Store
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-5 h-5 text-[#C6F135]" />
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#747B83]">
                Order Request
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-[#101214]">
              Complete Your Sports Gear Request
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Balochistan Sports Shop confirms all orders directly from our Prince Road shop.
            </p>

            <form onSubmit={handleSubmitOrder} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bilal Ahmed"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:border-[#101214]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 03491232756"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:border-[#101214]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    City / Town *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-lg text-sm bg-white focus:outline-none focus:border-[#101214]"
                  >
                    <option value="Quetta">Quetta (In-Store Pickup / Local)</option>
                    <option value="Chaman">Chaman</option>
                    <option value="Pishin">Pishin</option>
                    <option value="Sibi">Sibi</option>
                    <option value="Hub / Lasbela">Hub / Lasbela</option>
                    <option value="Gwadar">Gwadar</option>
                    <option value="Turbat">Turbat</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                    <option value="Other City in Pakistan">Other City in Pakistan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Delivery Address / Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Near Prince Road, Jinnah Town, etc."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:border-[#101214]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Order Notes (Optional Sizing or Pickup Timing)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Prefer picking up at Prince Road shop this afternoon..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:border-[#101214]"
                />
              </div>

              {/* Order Summary Box */}
              <div className="p-4 bg-[#F8F9FA] rounded-xl border border-zinc-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-heading font-bold uppercase text-zinc-700">
                  <span>Selected Gear ({cart.length} items)</span>
                  <span className="font-mono text-sm text-[#101214]">{formatPKR(subtotal)}</span>
                </div>
                <div className="max-h-28 overflow-y-auto divide-y divide-zinc-200 text-xs text-zinc-600">
                  {cart.map((item, idx) => (
                    <div key={idx} className="py-1 flex justify-between">
                      <span className="truncate pr-2">
                        {item.quantity}× {item.product.name} {item.selectedVariant ? `(${item.selectedVariant})` : ''}
                      </span>
                      <span className="font-mono shrink-0">
                        {formatPKR(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-zinc-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#FF642D] shrink-0 mt-0.5" />
                <span>
                  No online card charges are processed here. Final item availability, exact sizing, and delivery fees are confirmed directly with our Quetta shop team.
                </span>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#101214] hover:bg-[#1B1F23] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg"
                >
                  Confirm Order Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
