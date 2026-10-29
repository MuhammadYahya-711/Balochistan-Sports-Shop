import React, { useState } from 'react';
import { Star, MessageSquare, Send, Check } from 'lucide-react';
import { REVIEWS } from '../../data/reviews';

export const CustomerReviewsSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [feedbackAuthor, setFeedbackAuthor] = useState('');
  const [feedbackSport, setFeedbackSport] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackAuthor || !feedbackComment) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowForm(false);
      setFeedbackAuthor('');
      setFeedbackComment('');
    }, 3000);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F4F5F6] border-b border-[#E2E5E8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#C6F135]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#747B83]">
                Customer Testimonials
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101214] uppercase tracking-tight">
              WHAT CUSTOMERS SAY
            </h2>
            <p className="text-sm sm:text-base text-[#747B83] mt-1">
              Feedback from players, club coaches, and athletics enthusiasts who rely on our gear.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="self-start sm:self-end px-4 py-2.5 bg-[#101214] hover:bg-[#1B1F23] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#C6F135]" />
            <span>{showForm ? 'Close Feedback' : 'Leave Feedback'}</span>
          </button>
        </div>

        {/* Feedback Submission Form (Collapsible) */}
        {showForm && (
          <div className="mb-10 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-base text-[#101214] mb-1">
              Share Your Experience With Balochistan Sports Shop
            </h3>
            <p className="text-xs text-zinc-500 mb-4">
              Your feedback helps other athletes in Quetta choose the right equipment.
            </p>

            {isSubmitted ? (
              <div className="p-4 bg-emerald-50 text-emerald-800 rounded-lg flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Thank you! Your feedback has been received and recorded.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-zinc-700 mb-1">
                      Your Name / Club *
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackAuthor}
                      onChange={(e) => setFeedbackAuthor(e.target.value)}
                      placeholder="e.g. Asad Ullah (Quetta FC)"
                      className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-lg focus:outline-none focus:border-[#101214]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-zinc-700 mb-1">
                      Sport / Category
                    </label>
                    <input
                      type="text"
                      value={feedbackSport}
                      onChange={(e) => setFeedbackSport(e.target.value)}
                      placeholder="e.g. Cricket, Football, Gym"
                      className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-lg focus:outline-none focus:border-[#101214]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-zinc-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= feedbackRating
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-zinc-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-zinc-700 mb-1">
                    Your Review / Comments *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    placeholder="Tell us about the gear quality, sizing, or service you received..."
                    className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-lg focus:outline-none focus:border-[#101214]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#101214] text-white hover:bg-[#C6F135] hover:text-[#101214] font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Feedback</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-xl border border-[#E2E5E8] flex flex-col justify-between shadow-xs hover:border-[#101214] transition-colors"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Meta */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-heading font-bold text-zinc-900">{rev.author}</p>
                  <p className="text-[11px] text-zinc-500">{rev.location}</p>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
