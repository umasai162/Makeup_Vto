import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Scan,
  UserCheck,
  Sparkles,
  Palette,
  GraduationCap,
  ShoppingBag,
  Bookmark,
  Settings as SettingsIcon,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Face Analysis', path: '/beauty-analysis', icon: Scan },
    { name: 'Beauty Profile', path: '/profile', icon: UserCheck },
    { name: 'Look Recommendations', path: '/recommendations', icon: Sparkles },
    { name: 'Virtual Try-On', path: '/virtual-try-on', icon: Palette },
    { name: 'AI Makeup Coach', path: '/makeup-coach', icon: GraduationCap },
    { name: 'Products Catalog', path: '/products', icon: ShoppingBag },
    { name: 'Saved Looks', path: '/saved-looks', icon: Bookmark },
    { name: 'Settings & Privacy', path: '/settings', icon: SettingsIcon },
  ];

  return (
    <aside className="w-64 bg-[#FAF5F6] flex flex-col justify-between py-6 pr-6 pl-2 hidden lg:flex shrink-0 min-h-[calc(100vh-5rem)]">
      <div className="space-y-5">
        <div className="px-3">
          <p className="text-[11px] font-extrabold text-[#B85C72] tracking-widest uppercase">BEAUTY WORKSPACE</p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2A0714] text-white shadow-md'
                      : 'text-[#4A373E] hover:bg-[#F2E5E8] hover:text-[#2A0714]'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom AI Precision Model Card matching screenshot */}
      <div className="p-4 bg-[#F9E8EC] rounded-2xl border border-[#EACCD4] space-y-1 hover:border-[#B85C72] transition-colors cursor-pointer group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#2A0714] font-extrabold text-xs">
            <Sparkles className="w-4 h-4 text-[#B85C72]" />
            <span>AI Precision Model</span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#B85C72] group-hover:translate-x-1 transition-transform" />
        </div>
        <p className="text-[10px] text-[#756A6D] font-medium">
          Your personal beauty assistant
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
