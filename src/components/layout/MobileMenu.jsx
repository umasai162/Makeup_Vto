import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, User, LogOut } from 'lucide-react';
import Button from '../common/Button';

const MobileMenu = ({ isOpen, onClose, navLinks, isAuthenticated, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-warm-white border-b border-border-pink px-4 pt-3 pb-6 space-y-4 shadow-beauty-md animate-fade-in">
      <div className="space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={onClose}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal hover:bg-light-blush hover:text-deep-burgundy transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="pt-3 border-t border-border-pink space-y-2">
        {isAuthenticated ? (
          <>
            <Link
              to="/dashboard"
              onClick={onClose}
              className="block w-full text-center py-2.5 rounded-2xl bg-deep-burgundy text-cream font-bold text-xs"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              onClick={onClose}
              className="block w-full text-center py-2.5 rounded-2xl bg-light-blush text-deep-burgundy font-bold text-xs"
            >
              My Profile Settings
            </Link>
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="block w-full text-center py-2.5 rounded-2xl border border-border-pink text-muted-text font-bold text-xs"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              onClick={onClose}
              className="block w-full text-center py-2.5 rounded-2xl border border-deep-burgundy text-deep-burgundy font-bold text-xs"
            >
              Sign In
            </Link>
            <Link
              to="/analyze"
              onClick={onClose}
              className="block w-full text-center py-2.5 rounded-2xl bg-deep-burgundy text-cream font-bold text-xs shadow-glow"
            >
              Analyze My Face
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
