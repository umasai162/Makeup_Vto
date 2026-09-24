import React, { useContext, useState } from 'react';
import { User, Shield, Save, Check, Bookmark, Heart } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { BeautyContext } from '../context/BeautyContext';
import Button from '../components/common/Button';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { beautyProfile, savedLooks, myMakeupBag } = useContext(BeautyContext);
  const [savedMsg, setSavedMsg] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || 'Sophia Vance',
    email: user?.email || 'sophia@example.com',
    skinType: 'Combination / Sensitive',
    sensitivities: 'Fragrance-free preferred',
    favoriteFinish: 'Satin & Dewy Glow'
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      <div className="pb-4 border-b border-border-pink flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-deep-burgundy">User Profile & Preferences</h1>
          <p className="text-muted-text text-sm">Manage personal information, skin preferences, and saved beauty profiles.</p>
        </div>
        {savedMsg && (
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1">
            <Check className="w-4 h-4" /> Profile saved!
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal Details */}
        <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-sm space-y-4">
          <h3 className="font-serif font-bold text-lg text-deep-burgundy flex items-center gap-2">
            <User className="w-5 h-5 text-rose-accent" /> Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent"
              />
            </div>
          </div>
        </div>

        {/* Skin & Sensitivity Info */}
        <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-sm space-y-4">
          <h3 className="font-serif font-bold text-lg text-deep-burgundy flex items-center gap-2">
            <Shield className="w-5 h-5 text-rose-accent" /> Beauty & Skin Profile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy">Skin Type</label>
              <input
                type="text"
                value={formData.skinType}
                onChange={(e) => setFormData({ ...formData, skinType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy">Preferred Finish</label>
              <input
                type="text"
                value={formData.favoriteFinish}
                onChange={(e) => setFormData({ ...formData, favoriteFinish: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="secondary" size="lg" icon={Save} type="submit">
            Save Preferences
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
