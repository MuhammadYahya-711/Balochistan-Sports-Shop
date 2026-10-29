import React from 'react';
import { HeroBanner } from '../components/Hero/HeroBanner';
import { TrustBenefitsStrip } from '../components/Home/TrustBenefitsStrip';
import { ShopByCategory } from '../components/Home/ShopByCategory';
import { FeaturedProducts } from '../components/Home/FeaturedProducts';
import { PromoBanner } from '../components/Home/PromoBanner';
import { SportCollections } from '../components/Home/SportCollections';
import { BrandValueSection } from '../components/Home/BrandValueSection';
import { CustomerReviewsSection } from '../components/Home/CustomerReviewsSection';
import { NewsletterSection } from '../components/Home/NewsletterSection';
import { ContactSection } from '../components/Home/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroBanner />
      <TrustBenefitsStrip />
      <ShopByCategory />
      <FeaturedProducts />
      <PromoBanner />
      <SportCollections />
      <BrandValueSection />
      <CustomerReviewsSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
};
