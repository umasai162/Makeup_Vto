import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Virtual Try-On', path: '/virtual-try-on' },
    { name: 'Beauty Coach', path: '/beauty-coach' },
    { name: 'Products', path: '/products' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[#FAF5F6] border-b border-[#EADCE0] h-20 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-[#2A0714] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-extrabold tracking-wider text-[#2A0714]">
                LAVIX <span className="text-[#B85C72] font-sans text-xs font-bold tracking-widest uppercase ml-1">AI BEAUTY</span>
              </span>
              <span className="text-[10px] text-[#756A6D] font-medium -mt-1 tracking-tight">AI Makeup Advisor & Try-On</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? 'text-[#2A0714] font-bold' : 'text-[#4A373E] hover:text-[#2A0714]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="px-4 py-2 rounded-full bg-[#F2D6DC] hover:bg-[#EACCD4] text-[#2A0714] font-bold text-xs flex items-center gap-2 transition-colors">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <div className="flex items-center gap-2 pl-2 border-l border-[#EADCE0]">
                  <Link to="/profile" title="Profile Settings" className="p-2 rounded-full hover:bg-[#F2E5E8] text-[#2A0714] transition-colors">
                    <User className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    title="Logout"
                    className="p-2 rounded-full hover:bg-[#F2E5E8] text-[#756A6D] hover:text-[#2A0714] transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-xs font-bold text-[#2A0714] hover:text-[#B85C72] px-3 py-2">
                  Sign In
                </Link>
                <Link to="/analyze" className="px-5 py-2.5 rounded-full bg-[#2A0714] hover:bg-[#3A0C18] text-white font-bold text-xs shadow-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F2C9D2]" />
                  <span>Get Started</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-[#2A0714] hover:bg-[#F2E5E8]"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        isAuthenticated={isAuthenticated}
        onLogout={() => {
          logout();
          navigate('/');
        }}
      />
    </>
  );
};

export default Navbar;
