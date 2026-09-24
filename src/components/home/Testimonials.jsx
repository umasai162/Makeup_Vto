import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../common/Card';
import SectionHeader from '../common/SectionHeader';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena Rostova',
      role: 'Beauty Enthusiast',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'LAVIX accurately detected my olive undertone and recommended a warm bronzed soft glam look that turned out flawless on my first attempt!'
    },
    {
      name: 'Maya Lin',
      role: 'Fashion Blogger',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      comment: 'The virtual try-on before/after slider is unbelievable. It felt like having a celebrity makeup artist advising me right in my bedroom.'
    },
    {
      name: 'Camila Rodriguez',
      role: 'Bridal Stylist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      comment: 'The AI Makeup Coach step-by-step overlays showing exact blending direction took all the guesswork out of winged eyeliner for my almond eyes.'
    }
  ];

  return (
    <section className="py-20 bg-plum-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Verified Reviews"
          title="Loved by Beauty Lovers Worldwide"
          subtitle="See how LAVIX AI BEAUTY is transforming personal makeup routines."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((rev, idx) => (
            <Card key={idx} glass className="p-8 relative">
              <Quote className="w-8 h-8 text-rose-300 opacity-40 mb-4" />
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-6 italic">
                "{rev.comment}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-plum-100">
                <img src={rev.image} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-rose-200" />
                <div>
                  <h4 className="text-sm font-serif font-bold text-plum-950">{rev.name}</h4>
                  <p className="text-xs text-charcoal-500">{rev.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
