import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ScanFace, Palette, GraduationCap, ShoppingBag } from 'lucide-react';

const MobileNavigation = () => {
  const items = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Analyze', path: '/beauty-analysis', icon: ScanFace },
    { name: 'Try-On', path: '/virtual-try-on', icon: Palette },
    { name: 'Coach', path: '/makeup-coach', icon: GraduationCap },
    { name: 'Products', path: '/products', icon: ShoppingBag },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-100 shadow-beauty-lg py-2 px-3">
      <div className="flex justify-around items-center">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center py-1 px-3 rounded-xl transition-all ${
                isActive ? 'text-plum-800 font-bold' : 'text-charcoal-500 hover:text-plum-800'
              }`
            }
          >
            <item.icon className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] tracking-tight">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
