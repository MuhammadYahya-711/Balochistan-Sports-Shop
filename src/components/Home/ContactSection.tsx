import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';
import { SHOP_INFO } from '../../data/shopInfo';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo || !formData.message) return;

    // Save message locally or prepare WhatsApp forward
    try {
      const messages = JSON.parse(localStorage.getItem('bss_contact_inquiries') || '[]');
      messages.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('bss_contact_inquiries', JSON.stringify(messages));
    } catch {
      // ignore
    }

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', contactInfo: '', subject: '', message: '' });
    }, 4000);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hello Balochistan Sports Shop, I am ${formData.name || 'a customer'}. ${formData.message ? `Regarding: ${formData.message}` : "I'd like to check product availability at your Quetta store."}`;
    window.open(SHOP_INFO.whatsappUrl(text), '_blank');
  };

  return (
    <section id="contact-section" className="py-14 sm:py-20 bg-white border-b border-[#E2E5E8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#FF642D]" />
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#747B83]">
              Visit &amp; Inquire
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] uppercase tracking-tight">
            CONTACT &amp; STORE LOCATION
          </h2>
          <p className="text-sm sm:text-base text-[#747B83] mt-2">
            Have questions about sports equipment or custom team orders? Call our shop or send an inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Shop Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-[#E2E5E8] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#101214] text-[#C6F135] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#101214]">
                    Store Address
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium mt-0.5">
                    {SHOP_INFO.address}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-mono mt-1">
                    Plus Code: {SHOP_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={SHOP_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#101214] hover:bg-[#1B1F23] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C6F135]" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-[#E2E5E8] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#101214] text-[#FF642D] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#101214]">
                    Call The Shop
                  </h3>
                  <a
                    href={`tel:${SHOP_INFO.phone}`}
                    className="text-lg font-mono font-bold text-[#101214] hover:text-[#FF642D] block mt-0.5"
                  >
                    {SHOP_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-500">
                    Direct phone line for gear advice &amp; stock check
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="py-2.5 px-3 bg-white hover:bg-zinc-100 text-[#101214] border border-zinc-300 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF642D]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={SHOP_INFO.whatsappUrl("Hello Balochistan Sports Shop, I'd like to check product availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Note on Shopping */}
            <div className="p-4 rounded-xl bg-[#F4F5F6] border border-[#E2E5E8] flex items-center gap-3 text-xs text-[#747B83]">
              <Clock className="w-4 h-4 text-[#101214] shrink-0" />
              <span>
                Orders and inquiries can be coordinated directly with our Prince Road storefront team.
              </span>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] p-6 sm:p-8 rounded-2xl border border-[#E2E5E8]">
            <h3 className="font-heading font-bold text-xl text-[#101214] mb-1">
              Send a Message or Inquiry
            </h3>
            <p className="text-xs text-zinc-600 mb-6">
              Inquire about tournament bulk discounts, bat weights, or specific footwear sizes.
            </p>

            {isSent ? (
              <div className="p-5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Your message has been recorded!</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Our shop team on Prince Road will review your request. For immediate assistance, feel free to call {SHOP_INFO.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg text-sm text-[#101214] focus:outline-none focus:border-[#101214]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 03001234567 or email"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg text-sm text-[#101214] focus:outline-none focus:border-[#101214]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Subject / Product Interested In
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. English Willow Bat or Football Kit Order"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg text-sm text-[#101214] focus:outline-none focus:border-[#101214]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your specifications, quantity, or questions here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg text-sm text-[#101214] focus:outline-none focus:border-[#101214]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#101214] hover:bg-[#1B1F23] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C6F135]" />
                    <span>Send Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
