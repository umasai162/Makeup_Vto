import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Camera,
  Palette,
  Bookmark,
  ShoppingBag,
  Crown,
  CheckCircle2,
  Scan,
  Eye,
  Heart,
  User,
  ArrowRight,
  Trash2
} from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { BeautyContext } from '../context/BeautyContext';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    beautyProfile,
    myMakeupBag,
    removeFromMakeupBag,
    savedLooks,
    removeSavedLook,
    uploadedImage
  } = useContext(BeautyContext);

  const [activeTab, setActiveTab] = useState('looks'); // 'looks' | 'bag'

  return (
    <div className="max-w-[1280px] mx-auto space-y-7 py-2 px-2 sm:px-4 animate-fade-in">
      {/* 1. TOP PROFILE BANNER */}
      <div className="relative overflow-hidden bg-[#2A0714] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-[#421223]">
        {/* Crushed Powder Texture Background Effect */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-cover bg-right"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13Dee7a37e?auto=format&fit=crop&w=1200&q=80')`
          }}
        />

        <div className="relative z-10 flex items-center gap-5">
          <div className="relative">
            <img
              src={user?.avatar || uploadedImage}
              alt={user?.name || 'User Profile'}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#F2C9D2] shadow-md"
            />
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-[11px] font-extrabold text-[#F2C9D2] uppercase tracking-widest">
              <span>VIP BEAUTY PROFILE</span>
              <Crown className="w-3.5 h-3.5 text-[#F2C9D2]" />
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
              {user?.name || 'Sophia Vance'}
            </h1>

            <p className="text-xs text-[#E8C5CE] font-sans">
              {user?.email || 'sophia@example.com'} • Member since Feb 2026
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="relative z-10 flex items-center gap-3">
          <button
            onClick={() => navigate('/beauty-analysis')}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#2A0714] font-bold text-xs flex items-center gap-2 transition-transform active:scale-95 shadow-sm"
          >
            <Camera className="w-4 h-4 text-[#2A0714]" />
            <span>New Analysis</span>
          </button>

          <button
            onClick={() => navigate('/virtual-try-on')}
            className="px-5 py-2.5 rounded-full bg-[#F2C9D2] hover:bg-[#E8B2C0] text-[#2A0714] font-bold text-xs flex items-center gap-2 transition-transform active:scale-95 shadow-sm"
          >
            <Palette className="w-4 h-4 text-[#2A0714]" />
            <span>Try-On Studio →</span>
          </button>
        </div>
      </div>

      {/* 2. ROW OF 4 ANALYSIS METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Skin Tone & Undertone */}
        <div className="bg-white rounded-3xl p-5 border border-[#F2E5E8] shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-[#F9E8EC] flex items-center justify-center shrink-0">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#E8C5B0] to-[#F4D9C8] border border-[#D8A78F]" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-extrabold uppercase text-[#756A6D] tracking-wider">SKIN TONE & UNDERTONE</span>
            <h3 className="font-serif font-extrabold text-xl text-[#2A0714]">{beautyProfile.skinTone}</h3>
            <p className="text-xs font-bold text-[#B85C72]">{beautyProfile.undertone}</p>
          </div>
        </div>

        {/* Card 2: Face Structure */}
        <div className="bg-white rounded-3xl p-5 border border-[#F2E5E8] shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-[#F9E8EC] flex items-center justify-center shrink-0 text-[#2A0714]">
            <Scan className="w-6 h-6 text-[#2A0714]" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-extrabold uppercase text-[#756A6D] tracking-wider">FACE STRUCTURE</span>
            <h3 className="font-serif font-extrabold text-xl text-[#2A0714]">{beautyProfile.faceShape} Shape</h3>
            <p className="text-xs text-[#756A6D] font-medium">Oval Proportion</p>
          </div>
        </div>

        {/* Card 3: Eye & Brow Shape */}
        <div className="bg-white rounded-3xl p-5 border border-[#F2E5E8] shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-[#F9E8EC] flex items-center justify-center shrink-0 text-[#2A0714]">
            <Eye className="w-6 h-6 text-[#2A0714]" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-extrabold uppercase text-[#756A6D] tracking-wider">EYE & BROW SHAPE</span>
            <h3 className="font-serif font-extrabold text-xl text-[#2A0714]">{beautyProfile.eyeShape}</h3>
            <p className="text-xs text-[#756A6D] font-medium">{beautyProfile.browProfile}</p>
          </div>
        </div>

        {/* Card 4: Lip Geometry */}
        <div className="bg-white rounded-3xl p-5 border border-[#F2E5E8] shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-[#F9E8EC] flex items-center justify-center shrink-0 text-[#2A0714]">
            <Heart className="w-6 h-6 text-[#2A0714]" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-extrabold uppercase text-[#756A6D] tracking-wider">LIP GEOMETRY</span>
            <h3 className="font-serif font-extrabold text-xl text-[#2A0714]">{beautyProfile.lipProfile}</h3>
            <p className="text-xs font-bold text-emerald-600">98% AI Precision</p>
          </div>
        </div>
      </div>

      {/* 3. TABS NAVIGATION */}
      <div className="flex border-b border-[#EADCE0] space-x-8 pt-2">
        <button
          onClick={() => setActiveTab('looks')}
          className={`pb-3 text-sm font-serif font-bold transition-all flex items-center gap-2 relative ${
            activeTab === 'looks'
              ? 'text-[#2A0714] border-b-2 border-[#B85C72]'
              : 'text-[#756A6D] hover:text-[#2A0714]'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${activeTab === 'looks' ? 'text-[#B85C72]' : ''}`} />
          <span>Saved Makeup Looks ({savedLooks.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bag')}
          className={`pb-3 text-sm font-serif font-bold transition-all flex items-center gap-2 relative ${
            activeTab === 'bag'
              ? 'text-[#2A0714] border-b-2 border-[#B85C72]'
              : 'text-[#756A6D] hover:text-[#2A0714]'
          }`}
        >
          <ShoppingBag className={`w-4 h-4 ${activeTab === 'bag' ? 'text-[#B85C72]' : ''}`} />
          <span>My Makeup Bag ({myMakeupBag.length})</span>
        </button>
      </div>

      {/* 4. TAB CONTENT */}
      {activeTab === 'looks' ? (
        savedLooks.length === 0 ? (
          /* EMPTY STATE CARD MATCHING SCREENSHOT EXACTLY */
          <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center space-y-5 bg-gradient-to-r from-[#FCEBEF] via-[#FAF0F3] to-[#FCEBEF] border border-[#F2C9D2] shadow-sm">
            {/* Crushed Cosmetics Powder Texture Accent Overlay */}
            <div
              className="absolute inset-y-0 left-0 w-1/3 opacity-40 pointer-events-none bg-contain bg-left bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13Dee7a37e?auto=format&fit=crop&w=600&q=80')`
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/3 opacity-30 pointer-events-none bg-contain bg-right bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80')`
              }}
            />

            <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/90 text-[#B85C72] mx-auto flex items-center justify-center shadow-sm border border-[#F2C9D2]">
              <Bookmark className="w-7 h-7 text-[#B85C72]" />
            </div>

            <div className="relative z-10 space-y-2 max-w-md mx-auto">
              <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#2A0714]">
                No Saved Looks Yet
              </h3>
              <p className="text-[#6E6367] text-xs sm:text-sm font-medium leading-relaxed">
                Create custom lipstick & blush combinations in the AR Try-On Studio and save them here!
              </p>
            </div>

            <div className="relative z-10 pt-2">
              <button
                onClick={() => navigate('/virtual-try-on')}
                className="px-7 py-3 rounded-full bg-[#2A0714] hover:bg-[#3A0C18] text-white font-bold text-xs sm:text-sm flex items-center gap-2 mx-auto transition-transform active:scale-95 shadow-md"
              >
                <Palette className="w-4 h-4 text-[#F2C9D2]" />
                <span>Open Try-On Studio →</span>
              </button>
            </div>
          </div>
        ) : (
          /* SAVED LOOKS GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedLooks.map((look) => (
              <div key={look.id} className="bg-white rounded-3xl overflow-hidden border border-[#F2E5E8] shadow-sm space-y-4 p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-[#2A0714] text-lg">{look.name}</h4>
                    <button
                      onClick={() => removeSavedLook(look.id)}
                      className="p-1.5 text-[#756A6D] hover:text-[#B85C72] transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <img
                    src={look.image}
                    alt={look.name}
                    className="w-full h-52 object-cover rounded-2xl border border-[#F2E5E8]"
                  />
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-[#F9E8EC]">
                  <span className="text-[#756A6D] font-medium">{look.date || 'Saved recently'}</span>
                  <button
                    onClick={() => navigate('/virtual-try-on')}
                    className="px-4 py-1.5 rounded-full bg-[#2A0714] text-white font-bold text-xs"
                  >
                    Apply in AR
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        /* MAKEUP BAG LIST */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myMakeupBag.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 border border-[#F2E5E8] shadow-sm flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-[#B85C72] uppercase tracking-wider">{item.category}</span>
                <h4 className="text-sm font-bold text-[#2A0714]">{item.name}</h4>
                <p className="text-xs text-[#756A6D]">Brand: {item.brand} • Shade: {item.shade}</p>
              </div>
              <button
                onClick={() => removeFromMakeupBag(item.id)}
                className="p-2 text-[#756A6D] hover:text-[#B85C72] transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
