import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { TopAnnouncement } from './components/Header/TopAnnouncement';
import { Navbar } from './components/Header/Navbar';
import { Footer } from './components/Footer/Footer';
import { CartDrawer } from './components/Cart/CartDrawer';
import { OrderRequestModal } from './components/Checkout/OrderRequestModal';
import { ProductDetailModal } from './components/Products/ProductDetailModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PolicyPage } from './pages/PolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CheckCircle2, Info } from 'lucide-react';
import { ActivePage, ProductCategory } from './types/product';

const AppContent: React.FC = () => {
  const {
    activePage,
    setActivePage,
    setSelectedCategory,
    selectedProduct,
    setSelectedProduct,
    notification,
  } = useShop();

  // URL Hash synchronization for bookmarks and direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash || hash === 'home') {
        setActivePage('home');
      } else if (hash === 'shop' || hash === 'products') {
        setActivePage('shop');
      } else if (hash === 'cricket') {
        setSelectedCategory('Cricket');
        setActivePage('shop');
      } else if (hash === 'football') {
        setSelectedCategory('Football');
        setActivePage('shop');
      } else if (hash === 'sportswear') {
        setSelectedCategory('Sportswear');
        setActivePage('shop');
      } else if (hash === 'footwear') {
        setSelectedCategory('Footwear');
        setActivePage('shop');
      } else if (hash === 'gym') {
        setSelectedCategory('Gym Equipment');
        setActivePage('shop');
      } else if (hash === 'wishlist') {
        setActivePage('wishlist');
      } else if (hash === 'about') {
        setActivePage('about');
      } else if (hash === 'contact') {
        setActivePage('contact');
      } else if (hash === 'faq') {
        setActivePage('faq');
      } else if (hash === 'privacy') {
        setActivePage('privacy');
      } else if (hash === 'terms') {
        setActivePage('terms');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActivePage, setSelectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F6] text-[#101214] antialiased">
      {/* Top Announcement Strip */}
      <TopAnnouncement />

      {/* Main Header & Nav */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1" id="main-content">
        {activePage === 'home' && <HomePage />}
        {activePage === 'shop' && <ShopPage />}
        {activePage === 'category' && <ShopPage />}
        {activePage === 'wishlist' && <WishlistPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'faq' && <FaqPage />}
        {activePage === 'privacy' && <PolicyPage initialTab="privacy" />}
        {activePage === 'terms' && <PolicyPage initialTab="terms" />}
        {activePage === 'notfound' && <NotFoundPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CartDrawer />
      <OrderRequestModal />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#101214] text-white shadow-2xl border border-[#2D3339] animate-in fade-in slide-in-from-bottom-2 duration-200">
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-[#C6F135] shrink-0" />
          ) : (
            <Info className="w-4 h-4 text-[#FF642D] shrink-0" />
          )}
          <span className="text-xs font-heading font-medium tracking-wide">
            {notification.message}
          </span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
