import React from 'react';
import { Scan, User, Sparkles, Eye } from 'lucide-react';
import Badge from '../common/Badge';

const FaceProfile = ({ profile }) => {
  return (
    <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-sm space-y-4">
      <div className="flex items-center justify-between border-b border-border-pink pb-3">
        <h3 className="font-serif font-bold text-lg text-deep-burgundy">Your Face Profile</h3>
        <Badge variant="ai">Verified Neural Mesh</Badge>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-2xl bg-cream border border-border-pink space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-text">Face Shape</span>
          <p className="font-serif font-bold text-deep-burgundy text-base">{profile?.faceShape || 'Oval'}</p>
        </div>
        <div className="p-3 rounded-2xl bg-light-blush/60 border border-soft-blush space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-text">Skin Tone</span>
          <p className="font-serif font-bold text-deep-burgundy text-base">{profile?.skinTone || 'Medium'}</p>
        </div>
        <div className="p-3 rounded-2xl bg-cream border border-border-pink space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-text">Undertone</span>
          <p className="font-serif font-bold text-rose-accent text-base">{profile?.undertone || 'Warm'}</p>
        </div>
        <div className="p-3 rounded-2xl bg-light-blush/60 border border-soft-blush space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-text">Eye Shape</span>
          <p className="font-serif font-bold text-deep-burgundy text-base">{profile?.eyeShape || 'Almond'}</p>
        </div>
      </div>
    </div>
  );
};

export default FaceProfile;
