import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';

const BeautyCategories = () => {
  const categories = [
    {
      title: 'Everyday & Office',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
      tag: 'Fresh & Breathable',
    },
    {
      title: 'Soft Glam & Dates',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13Dee7a37e?auto=format&fit=crop&w=600&q=80',
      tag: 'Warm Bronzed Radiance',
    },
    {
      title: 'Party & Red Carpet',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
      tag: 'Bold Statement Lips',
    },
    {
      title: 'Wedding & Traditional',
      image: 'https://images.unsplash.com/photo-1599733589046-9b8308b5b50d?auto=format&fit=crop&w=600&q=80',
      tag: 'Timeless Elegance',
    },
  ];

  return (
    <section className="py-20 bg-plum-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Curated Collections"
          title="Explore Makeup Styles by Occasion"
          subtitle="AI-tailored looks created for every moment in your calendar."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((cat, idx) => (
            <Link key={idx} to="/virtual-try-on" className="group relative rounded-3xl overflow-hidden h-80 shadow-beauty-md border border-rose-400/20">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase font-bold text-rose-300 tracking-wider block mb-1">
                  {cat.tag}
                </span>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-rose-200 transition-colors">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyCategories;
