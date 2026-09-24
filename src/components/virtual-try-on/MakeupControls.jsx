import React from 'react';
import Card from '../common/Card';
import MakeupCategoryTabs from './MakeupCategoryTabs';
import ShadeSelector from './ShadeSelector';
import IntensitySlider from './IntensitySlider';
import LookSelector from './LookSelector';
import { MAKEUP_CATEGORIES } from '../../data/makeupCategories';

const MakeupControls = ({
  activeTab,
  onTabChange,
  activeSubcategory,
  onSubcategoryChange,
  vtoOptions,
  onUpdateShade,
  onUpdateIntensity,
  onUpdateOpacity,
  onApplyPresetLook,
}) => {
  const currentCategory = MAKEUP_CATEGORIES.find(c => c.id === activeTab) || MAKEUP_CATEGORIES[0];
  const currentSubcategoryObj = currentCategory.subcategories.find(s => s.id === activeSubcategory) || currentCategory.subcategories[0];

  // Map subcategory to option key
  const optionKey = activeSubcategory === 'lipstick' ? 'lipstick'
    : activeSubcategory === 'blush' ? 'blush'
    : activeSubcategory === 'eyeshadow' ? 'eyeshadow'
    : activeSubcategory === 'eyeliner' ? 'eyeliner'
    : activeSubcategory === 'browPencil' ? 'brows'
    : 'foundation';

  const currentOptionState = vtoOptions[optionKey] || { shade: '#E26D5C', intensity: 75, opacity: 70 };

  return (
    <Card glass className="p-6 border border-rose-100 space-y-6">
      <MakeupCategoryTabs
        activeTab={activeTab}
        onTabChange={onTabChange}
        activeSubcategory={activeSubcategory}
        onSubcategoryChange={onSubcategoryChange}
      />

      <ShadeSelector
        shades={currentSubcategoryObj?.shades || []}
        selectedShade={currentOptionState.shade}
        onSelectShade={(shadeHex) => onUpdateShade(optionKey, shadeHex)}
      />

      <div className="space-y-4 pt-2 border-t border-plum-50">
        <IntensitySlider
          label="Pigment Intensity"
          value={currentOptionState.intensity || 75}
          onChange={(val) => onUpdateIntensity(optionKey, val)}
        />

        {currentOptionState.opacity !== undefined && (
          <IntensitySlider
            label="Blend Opacity"
            value={currentOptionState.opacity}
            onChange={(val) => onUpdateOpacity(optionKey, val)}
          />
        )}
      </div>

      <div className="pt-2 border-t border-plum-50">
        <LookSelector onSelectLook={onApplyPresetLook} />
      </div>
    </Card>
  );
};

export default MakeupControls;
