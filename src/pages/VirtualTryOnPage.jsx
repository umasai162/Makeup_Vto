import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, BookmarkCheck, ShoppingBag, Eye, Bookmark, RefreshCw, RotateCcw } from 'lucide-react';
import { useVirtualTryOn } from '../hooks/useVirtualTryOn';
import TryOnCanvas from '../components/virtual-try-on/TryOnCanvas';
import MakeupCategoryTabs from '../components/virtual-try-on/MakeupCategoryTabs';
import ShadeSelector from '../components/virtual-try-on/ShadeSelector';
import IntensitySlider from '../components/virtual-try-on/IntensitySlider';
import LookSelector from '../components/virtual-try-on/LookSelector';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const VirtualTryOnPage = () => {
  const navigate = useNavigate();
  const {
    uploadedImage,
    vtoOptions,
    activeTab,
    setActiveTab,
    activeSubcategory,
    setActiveSubcategory,
    compareMode,
    setCompareMode,
    updateShade,
    updateIntensity,
    updateOpacity,
    resetAllMakeup,
    saveCurrentLook,
    applyPresetLook,
    addToMakeupBag
  } = useVirtualTryOn();

  const [saving, setSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  const handleSaveLook = async () => {
    setSaving(true);
    const res = await saveCurrentLook();
    setSaving(false);
    if (res.success) {
      setSaveSuccessMsg('Look saved successfully to your profile!');
      setTimeout(() => setSaveSuccessMsg(''), 4000);
    }
  };

  const currentCategoryKey = activeSubcategory || 'lipstick';
  const currentOption = vtoOptions[currentCategoryKey] || { shade: '#D47A8F', intensity: 80, opacity: 80 };

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-2 animate-fade-in">
      {/* Studio Header Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-rose-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Real-Time AR Neural Render</span>
          </div>
          <h1 className="text-3xl font-serif font-extrabold text-plum-950">
            LAVIX TRY-ON STUDIO
          </h1>
        </div>

        {saveSuccessMsg && (
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold animate-fade-in">
            <BookmarkCheck className="w-4 h-4 text-emerald-600" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}
      </div>

      {/* Main Grid: Left User Photo (Canvas) & Right Makeup Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left (7 cols): User Photo Canvas with BEFORE ↔ AFTER Slider */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-rose-100 shadow-beauty-sm">
            <Button
              variant={compareMode ? "primary" : "secondary"}
              size="sm"
              icon={Eye}
              onClick={() => setCompareMode(!compareMode)}
            >
              {compareMode ? "Single View" : "BEFORE ↔ AFTER Slider"}
            </Button>
            <Button variant="ghost" size="sm" icon={RotateCcw} onClick={resetAllMakeup}>
              Reset Studio
            </Button>
          </div>

          <TryOnCanvas
            originalImage={uploadedImage}
            makeupOptions={vtoOptions}
            compareMode={compareMode}
          />
        </div>

        {/* Right (5 cols): MAKEUP Control Panel */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-rose-100 shadow-beauty-md space-y-6">
          <div className="flex items-center justify-between border-b border-plum-100 pb-3">
            <h3 className="font-serif font-bold text-xl text-plum-950">MAKEUP</h3>
            <Badge variant="ai">AI Match: 96%</Badge>
          </div>

          {/* Preset Looks Carousel */}
          <LookSelector onSelectLook={applyPresetLook} />

          <hr className="border-plum-100" />

          {/* Makeup Category Tabs (Foundation, Concealer, Blush, Contour, Eyeshadow, Eyeliner, Lip) */}
          <MakeupCategoryTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            activeSubcategory={activeSubcategory}
            onSubcategoryChange={setActiveSubcategory}
          />

          {/* Shade Picker */}
          <ShadeSelector
            categoryKey={currentCategoryKey}
            currentShade={currentOption.shade}
            onSelectShade={(shade) => updateShade(currentCategoryKey, shade)}
          />

          {/* Intensity Slider */}
          <IntensitySlider
            label="Pigment Intensity"
            value={currentOption.intensity || 80}
            onChange={(val) => updateIntensity(currentCategoryKey, val)}
          />

          {/* Opacity Slider */}
          {currentOption.opacity !== undefined && (
            <IntensitySlider
              label="Coverage Blend Opacity"
              value={currentOption.opacity || 75}
              onChange={(val) => updateOpacity(currentCategoryKey, val)}
            />
          )}

          {/* Action Buttons: [Save Look] and [Try Another] */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="secondary"
              size="md"
              className="flex-1"
              icon={Bookmark}
              loading={saving}
              onClick={handleSaveLook}
            >
              Save Look
            </Button>

            <Button
              variant="gold"
              size="md"
              className="flex-1"
              icon={RefreshCw}
              onClick={() => navigate('/beauty-analysis')}
            >
              Try Another
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOnPage;
