import React, { useState } from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { SHOP_INFO } from '../data/shopInfo';

interface PolicyPageProps {
  initialTab?: 'privacy' | 'terms';
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="py-10 sm:py-16 bg-[#F4F5F6] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Tab Switcher */}
        <div className="flex border-b border-zinc-200 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-4 text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-[#101214] text-[#101214]'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#C6F135]" />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`pb-3 px-4 text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'border-[#101214] text-[#101214]'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <FileText className="w-4 h-4 text-[#FF642D]" />
            <span>Terms &amp; Conditions</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-[#E2E5E8] p-6 sm:p-10 shadow-xs prose prose-zinc max-w-none text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-6">
          {activeTab === 'privacy' ? (
            <>
              <div>
                <h1 className="font-heading font-extrabold text-2xl text-[#101214] uppercase tracking-tight mb-2">
                  Privacy Policy
                </h1>
                <p className="text-zinc-500 text-xs">
                  Last Updated: {new Date().getFullYear()} • Balochistan Sports Shop, Quetta
                </p>
              </div>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  1. Information We Collect
                </h2>
                <p>
                  When you submit an order request, inquiry, or contact form on our website, we may collect your name, contact phone number, city, delivery address, and any specific gear notes you provide. We do not collect unnecessary personal information or store payment card credentials.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  2. How Your Information Is Used
                </h2>
                <p>
                  Your information is used solely to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Confirm product availability and sizing from our Quetta storefront.</li>
                  <li>Coordinate order fulfillment, local store pickup, or courier dispatch.</li>
                  <li>Respond directly to customer inquiries made via phone or WhatsApp.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  3. Local Browser Storage
                </h2>
                <p>
                  We utilize browser local storage strictly to save your shopping cart contents and wishlist items across page reloads. This information remains on your local device.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  4. Contact &amp; Inquiries
                </h2>
                <p>
                  For any privacy questions or to request the deletion of your order inquiry records, please reach out to us at {SHOP_INFO.phone} or visit our store at {SHOP_INFO.address}.
                </p>
              </section>
            </>
          ) : (
            <>
              <div>
                <h1 className="font-heading font-extrabold text-2xl text-[#101214] uppercase tracking-tight mb-2">
                  Terms &amp; Conditions
                </h1>
                <p className="text-zinc-500 text-xs">
                  Last Updated: {new Date().getFullYear()} • Balochistan Sports Shop, Quetta
                </p>
              </div>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  1. Product Catalogue &amp; Pricing
                </h2>
                <p>
                  All products, specifications, and prices (quoted in Pakistani Rupee, PKR) listed on this website represent current catalogue information. While we make every effort to keep pricing accurate, final prices, physical stock availability, and weights (especially for natural willow cricket bats) must be confirmed directly by the shop prior to purchase.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  2. Order Requests &amp; Confirmation
                </h2>
                <p>
                  Submitting an order request or initiating a WhatsApp inquiry through this website does not constitute a legally binding transaction or guarantee immediate dispatch until confirmed by our retail team on Prince Road, Quetta.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  3. Inspection &amp; Returns Policy
                </h2>
                <p>
                  Customers visiting our shop are encouraged to inspect equipment thoroughly before taking custody. For items dispatched via courier or cargo, please verify the package immediately upon receipt. Any discrepancies should be reported within 48 hours to {SHOP_INFO.phone}.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading font-bold text-base text-[#101214]">
                  4. Store Jurisdiction
                </h2>
                <p>
                  Balochistan Sports Shop operates under the commercial laws of Pakistan, with primary business premises located at {SHOP_INFO.address}.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
