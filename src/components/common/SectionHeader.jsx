import React from 'react';
import Badge from './Badge';

const SectionHeader = ({
  badgeText,
  title,
  subtitle,
  centered = false,
  className = ''
}) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      {badgeText && (
        <div className="mb-2">
          <Badge variant="ai">{badgeText}</Badge>
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-plum-950 font-bold tracking-tight mb-2">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
