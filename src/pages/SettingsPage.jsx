import React, { useContext, useState } from 'react';
import { User, Bell, Shield, Palette, Save, Check } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import Button from '../components/common/Button';

const SettingsPage = () => {
  const { user } = useContext(AuthContext);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'Sophia Vance',
    email: user?.email || 'sophia@example.com',
    skinSensitivities: 'Fragrance-free preferred',
    favoriteFinish: 'Satin & Dewy Glow',
    aiSensitivity: 'High Precision (95%+ match threshold)',
    notifications: true
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-2 animate-fade-in">
      <div className="pb-4 border-b border-rose-100">
        <h1 className="text-3xl font-serif font-extrabold text-plum-950">Account & AI Preferences</h1>
        <p className="text-charcoal-600 text-sm">Manage your beauty profile settings and recommendation parameters.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal Details */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-beauty-sm space-y-4">
          <h2 className="font-serif font-bold text-lg text-plum-950 flex items-center gap-2">
            <User className="w-5 h-5 text-rose-500" />
            Personal Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-plum-950">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-sm focus:outline-none focus:border-plum-800"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-plum-950">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-sm focus:outline-none focus:border-plum-800"
              />
            </div>
          </div>
        </div>

        {/* AI & Beauty Parameters */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-beauty-sm space-y-4">
          <h2 className="font-serif font-bold text-lg text-plum-950 flex items-center gap-2">
            <Palette className="w-5 h-5 text-rose-500" />
            AI Recommendation Tuning
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-plum-950">Skin Sensitivities</label>
              <input
                type="text"
                value={formData.skinSensitivities}
                onChange={(e) => setFormData({ ...formData, skinSensitivities: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-sm focus:outline-none focus:border-plum-800"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-plum-950">Preferred Finish</label>
              <input
                type="text"
                value={formData.favoriteFinish}
                onChange={(e) => setFormData({ ...formData, favoriteFinish: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-sm focus:outline-none focus:border-plum-800"
              />
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center justify-between">
          {saved ? (
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <Check className="w-4 h-4" /> Settings updated successfully!
            </span>
          ) : <div />}
          <Button variant="primary" size="lg" icon={Save} type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
