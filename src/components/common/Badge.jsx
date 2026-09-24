import React from 'react';

const Badge = ({ children, variant = 'ai', className = '' }) => {
  const variantStyles = {
    ai: 'bg-deep-burgundy text-light-blush border border-rose-accent/40 shadow-sm',
    gold: 'bg-gradient-to-r from-cream to-light-blush text-deep-burgundy border border-soft-blush',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-900 border border-amber-200',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
