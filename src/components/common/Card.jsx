import React from 'react';

const Card = ({
  children,
  className = '',
  glass = false,
  hover = false,
  padding = 'p-6',
  onClick,
  ...props
}) => {
  const baseCard = glass
    ? 'glass-card rounded-2xl border border-rose-100/80 shadow-beauty-sm'
    : 'bg-white rounded-2xl border border-plum-100 shadow-beauty-sm';
  
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-beauty-md hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div
      onClick={onClick}
      className={`${baseCard} ${hoverStyles} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
