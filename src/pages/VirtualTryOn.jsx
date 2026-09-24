import React, { useState } from 'react';
import { Sparkles, BookmarkCheck, RotateCcw, Eye, Bookmark, Share2 } from 'lucide-react';
import { useVirtualTryOn } from '../hooks/useVirtualTryOn';
import TryOnCanvas from '../components/vto/TryOnCanvas';
import MakeupCategory from '../components/vto/MakeupCategory';
import MakeupControls from '../components/vto/MakeupControls';
import Button from '../components/common/Button';

const VirtualTryOn = () => {
  const {
    uploadedImage,
    vtoOptions,
    activeTab,
    setActiveTab,
    compareMode,
    setCompareMode,
    updateShade,
    updateIntensity,
    updateOpacity,
    resetAllMakeup,
    saveCurrentLook
  } = useVirtualTryOn();

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSave = async () => {
    setSaving(true);
    const res = await saveCurrentLook();
    setSaving(false);
    if (res.success) {
      setSuccessMsg('Look saved to your profile!');
      setTimeout(() => setSuccessMsg(''), 3500);
    }
  };

  const currentOption = vtoOptions[activeTab] || { shade: '#D47A8F', intensity: 80, opacity: 75 };

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-4 px-4 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border-pink">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-light-blush text-deep-burgundy text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-accent" />
            <span>Professional Beauty Studio</span>
          </div>
          <h1 className="text-3xl font-serif font-extrabold text-deep-burgundy">
            AR Virtual Try-On Studio
          </h1>
        </div>

        {successMsg && (
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold animate-fade-in">
            <BookmarkCheck className="w-4 h-4 text-emerald-600" />
            <span>{successMsg}</span>
          </div>
        )}
      </div>

      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-warm-white rounded-2xl border border-border-pink shadow-beauty-sm">
        <div className="flex items-center gap-2">
          <Button
            variant={compareMode ? "secondary" : "primary"}
            size="sm"
            icon={Eye}
            onClick={() => setCompareMode(!compareMode)}
          >
            {compareMode ? "Single View" : "Before / After Slider"}
          </Button>
          <Button variant="ghost" size="sm" icon={RotateCcw} onClick={resetAllMakeup}>
            Reset
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" icon={Bookmark} loading={saving} onClick={handleSave}>
            Save Look
          </Button>
          <Button variant="gold" size="sm" icon={Share2} onClick={() => alert("Look share link copied to clipboard!")}>
            Share Look
          </Button>
        </div>
      </div>

      {/* Studio Canvas + Controls Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Panel: Canvas Preview */}
        <div className="lg:col-span-7">
          <TryOnCanvas
            originalImage={uploadedImage}
            makeupOptions={vtoOptions}
            compareMode={compareMode}
          />
        </div>

        {/* Right Panel: Controls & Swatches */}
        <div className="lg:col-span-5 bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-md space-y-6">
          <MakeupCategory
            activeCategory={activeTab}
            onCategoryChange={setActiveTab}
          />

          <MakeupControls
            activeCategory={activeTab}
            currentOption={currentOption}
            onUpdateShade={updateShade}
            onUpdateIntensity={updateIntensity}
            onUpdateOpacity={updateOpacity}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;
