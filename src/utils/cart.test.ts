import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatPKR,
  calculateSubtotal,
  getCartCount,
  buildWhatsAppOrderMessage,
  buildSingleProductWhatsAppMessage,
} from './cart';
import { Product, CartItem } from '../types/product';

const sampleProductA: Product = {
  id: 'p1',
  name: 'CA Plus 15000 Cricket Bat',
  category: 'Cricket',
  price: 18500,
  rating: 4.9,
  reviewCount: 42,
  inStock: true,
  image: 'https://example.com/bat.jpg',
  description: 'English willow cricket bat',
  features: ['Grade 1 English Willow', 'Massive edges'],
};

const sampleProductB: Product = {
  id: 'p2',
  name: 'FIFA Quality Match Football Size 5',
  category: 'Football',
  price: 4200,
  rating: 4.8,
  reviewCount: 28,
  inStock: true,
  image: 'https://example.com/football.jpg',
  description: 'Thermally bonded match ball',
  features: ['FIFA standard', 'Water resistant'],
};

test('formatPKR formats numbers into Pakistani Rupee currency notation', () => {
  assert.equal(formatPKR(0), '₨ 0');
  assert.equal(formatPKR(18500), '₨ 18,500');
  assert.equal(formatPKR(4200.75), '₨ 4,201');
});

test('calculateSubtotal handles empty, single, and multiple cart items', () => {
  assert.equal(calculateSubtotal([]), 0);

  const singleItem: CartItem[] = [
    { product: sampleProductA, quantity: 2, selectedVariant: 'Short Handle' },
  ];
  assert.equal(calculateSubtotal(singleItem), 37000);

  const multipleItems: CartItem[] = [
    { product: sampleProductA, quantity: 1, selectedVariant: 'Short Handle' },
    { product: sampleProductB, quantity: 3 },
  ];
  // 18500 + 3 * 4200 = 18500 + 12600 = 31100
  assert.equal(calculateSubtotal(multipleItems), 31100);
});

test('getCartCount aggregates quantities correctly', () => {
  assert.equal(getCartCount([]), 0);
  const items: CartItem[] = [
    { product: sampleProductA, quantity: 2 },
    { product: sampleProductB, quantity: 5 },
  ];
  assert.equal(getCartCount(items), 7);
});

test('buildWhatsAppOrderMessage produces formatted inquiry message with Quetta note', () => {
  const items: CartItem[] = [
    { product: sampleProductA, quantity: 1, selectedVariant: 'Short Handle' },
  ];
  const message = buildWhatsAppOrderMessage({
    items,
    customerName: 'Ahmed Khan',
    phoneNumber: '03001234567',
    city: 'Quetta',
    address: 'Near Prince Road',
    notes: 'Please let me know if pickup is available today',
  });

  assert.ok(message.includes('BALOCHISTAN SPORTS SHOP - ORDER INQUIRY'));
  assert.ok(message.includes('Ahmed Khan'));
  assert.ok(message.includes('CA Plus 15000 Cricket Bat (Short Handle)'));
  assert.ok(message.includes('₨ 18,500'));
  assert.ok(message.includes('Quetta'));
});

test('buildSingleProductWhatsAppMessage generates valid inquiry string', () => {
  const message = buildSingleProductWhatsAppMessage('Pro Shin Guards', 1200, 'Large');
  assert.ok(message.includes('Pro Shin Guards'));
  assert.ok(message.includes('Option/Size: Large'));
  assert.ok(message.includes('₨ 1,200'));
  assert.ok(message.includes('Quetta shop'));
});
