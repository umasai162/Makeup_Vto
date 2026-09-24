import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-md' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-burgundy/80 backdrop-blur-sm animate-fade-in">
      <div className={`w-full ${maxWidth} bg-warm-white rounded-3xl border border-border-pink shadow-beauty-lg overflow-hidden space-y-4 p-6 relative animate-slide-up`}>
        <div className="flex items-center justify-between border-b border-border-pink pb-4">
          <h3 className="font-serif text-xl font-bold text-deep-burgundy">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-muted-text hover:text-deep-burgundy hover:bg-light-blush transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
