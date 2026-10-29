export type ProductCategory =
  | 'Football'
  | 'Cricket'
  | 'Sportswear'
  | 'Footwear'
  | 'Gym Equipment'
  | 'Team Kits'
  | 'Accessories'
  | 'Other Sports';

export interface ProductVariant {
  id: string;
  name: string; // e.g. "Size 4", "Size 5", "Short Handle", "Long Handle", "M", "L", "XL", "UK 8"
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number; // in PKR
  originalPrice?: number; // optional strike-through price
  rating: number; // e.g. 4.8
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  image: string;
  gallery?: string[];
  description: string;
  features: string[];
  specs?: Record<string, string>;
  variants?: ProductVariant[];
  variantLabel?: string; // e.g. "Size", "Handle Type", "Weight"
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface CustomerOrderRequest {
  fullName: string;
  phoneNumber: string;
  city: string;
  address: string;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  estimatedTotal: number;
  timestamp: string;
  orderId: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  sport: string;
  rating: number;
  date: string;
  comment: string;
}

export type ActivePage =
  | 'home'
  | 'shop'
  | 'category'
  | 'wishlist'
  | 'about'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms'
  | 'notfound';
