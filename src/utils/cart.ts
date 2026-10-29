import { CartItem } from '../types/product';

/**
 * Format a number as Pakistani Rupee (PKR).
 * Example: 4500 -> "₨ 4,500"
 */
export function formatPKR(amount: number): string {
  const rounded = Math.round(amount || 0);
  return `₨ ${rounded.toLocaleString('en-PK')}`;
}

/**
 * Calculate the total item count in cart.
 */
export function getCartCount(items: CartItem[]): number {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, item) => sum + Math.max(0, item.quantity || 0), 0);
}

/**
 * Calculate subtotal of items in cart.
 */
export function calculateSubtotal(items: CartItem[]): number {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, item) => {
    const qty = Math.max(0, item.quantity || 0);
    const price = Math.max(0, item.product?.price || 0);
    return sum + qty * price;
  }, 0);
}

/**
 * Build pre-formatted WhatsApp message for an entire cart or order request.
 */
export function buildWhatsAppOrderMessage(data: {
  items: CartItem[];
  customerName?: string;
  phoneNumber?: string;
  city?: string;
  address?: string;
  notes?: string;
}): string {
  const { items, customerName, phoneNumber, city, address, notes } = data;
  const subtotal = calculateSubtotal(items);

  let message = `*BALOCHISTAN SPORTS SHOP - ORDER INQUIRY*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  if (customerName) {
    message += `👤 *Customer:* ${customerName}\n`;
  }
  if (phoneNumber) {
    message += `📞 *Phone:* ${phoneNumber}\n`;
  }
  if (city || address) {
    message += `📍 *Location:* ${city || ''}${city && address ? ', ' : ''}${address || ''}\n`;
  }

  message += `\n*SELECTED ITEMS:*\n`;

  if (!items || items.length === 0) {
    message += `(No items selected)\n`;
  } else {
    items.forEach((item, idx) => {
      const variantStr = item.selectedVariant ? ` (${item.selectedVariant})` : '';
      const itemTotal = (item.quantity || 1) * (item.product?.price || 0);
      message += `${idx + 1}. *${item.product.name}${variantStr}*\n`;
      message += `   Qty: ${item.quantity} × ${formatPKR(item.product.price)} = ${formatPKR(itemTotal)}\n`;
    });
  }

  message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Estimated Subtotal:* ${formatPKR(subtotal)}\n`;
  if (notes && notes.trim()) {
    message += `📝 *Notes/Requirements:* ${notes.trim()}\n`;
  }
  message += `\n_Note: Please confirm current product availability, sizes, and local delivery/pickup details in Quetta._`;

  return message;
}

/**
 * Build direct WhatsApp message for a single product inquiry.
 */
export function buildSingleProductWhatsAppMessage(
  productName: string,
  price: number,
  variant?: string
): string {
  let msg = `Hello Balochistan Sports Shop,\n`;
  msg += `I am interested in ordering:\n`;
  msg += `*${productName}*\n`;
  if (variant) {
    msg += `Option/Size: ${variant}\n`;
  }
  msg += `Price: ${formatPKR(price)}\n\n`;
  msg += `Please let me know if this is currently available in your Quetta shop and how I can proceed.`;
  return msg;
}
