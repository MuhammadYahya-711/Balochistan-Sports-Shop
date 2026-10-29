import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const NewsletterSection: React.FC = () => {
  const { setActivePage } = useShop();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    // Save locally or demonstrate newsletter subscription
    try {
      const existing = JSON.parse(localStorage.getItem('bss_newsletter_emails') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('bss_newsletter_emails', JSON.stringify(existing));
      }
    } catch {
      // ignore
    }

    setStatus('success');
    setStatusMessage('Thank you! Your email has been registered for shop stock announcements.');
    setEmail('');
  };

  return (
    <section className="py-14 sm:py-16 bg-[#16191D] text-white border-b border-[#242A30]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-xl bg-[#1B1F23] border border-[#2E353E] text-[#C6F135] flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
          STAY IN THE GAME
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
          Get updates about new arrivals, sports essentials, and shop announcements directly from our Prince Road storefront.
        </p>

        {status === 'success' ? (
          <div className="mt-6 p-4 bg-[#1B2B1F] border border-[#2B542F] text-[#C6F135] rounded-xl flex items-center justify-center gap-2 text-sm max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-6 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-[#1B1F23] text-white placeholder-zinc-500 border border-[#2E353E] focus:outline-none focus:border-[#C6F135] text-sm"
                aria-label="Email address for announcements"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#C6F135] hover:bg-[#b8e426] text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </div>
            {status === 'error' && (
              <p className="mt-2 text-xs text-[#FF642D] text-left">{statusMessage}</p>
            )}
          </form>
        )}

        <p className="mt-4 text-[11px] text-zinc-500">
          We respect your inbox. Read our{' '}
          <button
            type="button"
            onClick={() => {
              setActivePage('privacy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-zinc-400 underline hover:text-white"
          >
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </section>
  );
};
