import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-burgundy text-cream pt-16 pb-12 border-t border-burgundy/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-dark-wine flex items-center justify-center text-soft-blush border border-rose-accent/30 shadow-glow">
                <Sparkles className="w-5 h-5 text-ai-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-extrabold tracking-wider text-white">
                  LAVIX <span className="text-ai-accent font-sans text-xs font-bold tracking-widest uppercase ml-1">AI BEAUTY</span>
                </span>
                <span className="text-[10px] text-light-blush/70 font-medium -mt-1 tracking-tight">AI Makeup Advisor & Try-On</span>
              </div>
            </Link>

            <p className="text-sm text-light-blush/80 max-w-sm font-sans leading-relaxed">
              AI-powered beauty, personalized for you. Neural feature detection, AR real-time try-on, and custom makeup coaching tailored to your unique skin profile.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-dark-wine flex items-center justify-center text-soft-blush hover:bg-burgundy transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-wine flex items-center justify-center text-soft-blush hover:bg-burgundy transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-wine flex items-center justify-center text-soft-blush hover:bg-burgundy transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wide">Product</h4>
            <ul className="space-y-2 text-xs text-light-blush/80 font-medium">
              <li><Link to="/virtual-try-on" className="hover:text-white transition-colors">Virtual Try-On</Link></li>
              <li><Link to="/beauty-coach" className="hover:text-white transition-colors">Beauty Coach</Link></li>
              <li><Link to="/analyze" className="hover:text-white transition-colors">Face Analysis</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/looks" className="hover:text-white transition-colors">Makeup Looks</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wide">Company</h4>
            <ul className="space-y-2 text-xs text-light-blush/80 font-medium">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wide">Legal</h4>
            <ul className="space-y-2 text-xs text-light-blush/80 font-medium">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-dark-wine/80 flex flex-col sm:flex-row items-center justify-between text-xs text-light-blush/60 font-medium gap-4">
          <p>© 2026 LAVIX AI Beauty. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Powered by LAVIX Computer Vision Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
