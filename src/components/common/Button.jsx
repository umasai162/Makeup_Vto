import React from 'react';

const Button = ({
  children,
  variant = 'primary', // 'primary' (cream bg, dark text), 'secondary' (outline blush border), 'gold', 'ghost', 'text'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-2xl active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none shadow-sm';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-xs sm:text-sm',
    lg: 'px-7 py-3.5 text-sm sm:text-base',
  };

  const variantStyles = {
    primary: 'bg-cream text-deep-burgundy hover:bg-white border border-soft-blush shadow-beauty-sm hover:shadow-beauty-md',
    secondary: 'bg-deep-burgundy text-white hover:bg-dark-wine border border-burgundy/60 shadow-beauty-sm',
    gold: 'bg-gradient-to-r from-soft-blush via-light-blush to-soft-blush text-deep-burgundy hover:brightness-105 border border-rose-accent/40 shadow-glow',
    outline: 'bg-transparent text-cream border border-soft-blush/40 hover:bg-soft-blush/15',
    ghost: 'bg-transparent text-deep-burgundy hover:bg-light-blush/60',
    text: 'bg-transparent text-rose-accent hover:text-deep-burgundy p-0 shadow-none',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
        </span>
      )}
    </button>
  );
};

export default Button;
