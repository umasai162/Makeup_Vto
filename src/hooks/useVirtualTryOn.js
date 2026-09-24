import { useContext, useState } from 'react';
import { BeautyContext } from '../context/BeautyContext';
import { vtoService } from '../services/vtoService';

export const useVirtualTryOn = () => {
  const context = useContext(BeautyContext);
  const [activeTab, setActiveTab] = useState('lips'); // face, eyes, lips, brows
  const [activeSubcategory, setActiveSubcategory] = useState('lipstick');
  const [compareMode, setCompareMode] = useState(false); // Before / After slider state
  const [saving, setSaving] = useState(false);

  if (!context) {
    throw new Error('useVirtualTryOn must be used within a BeautyProvider');
  }

  const updateShade = (categoryKey, shadeHex) => {
    context.setVtoOptions(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        shade: shadeHex
      }
    }));
  };

  const updateIntensity = (categoryKey, intensityValue) => {
    context.setVtoOptions(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        intensity: Number(intensityValue)
      }
    }));
  };

  const updateOpacity = (categoryKey, opacityValue) => {
    context.setVtoOptions(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        opacity: Number(opacityValue)
      }
    }));
  };

  const resetAllMakeup = () => {
    context.setVtoOptions({
      foundation: { shade: '#E8C5B0', intensity: 80 },
      blush: { shade: '#E26D5C', intensity: 0, opacity: 0 },
      lipstick: { shade: '#D47A8F', intensity: 0, opacity: 0 },
      eyeshadow: { shade: '#C5A087', intensity: 0 },
      eyeliner: { shade: '#1A1A1A', intensity: 0 },
      brows: { shade: '#4A3728', intensity: 0 }
    });
  };

  const applyPresetLook = (lookObj) => {
    if (!lookObj) return;
    context.setVtoOptions({
      foundation: { shade: '#E8C5B0', intensity: 85 },
      blush: { shade: lookObj.blush?.shade === 'Peach / Coral' ? '#E26D5C' : '#F48B9B', intensity: 75, opacity: 70 },
      lipstick: { shade: lookObj.lips?.shade?.includes('Rose') ? '#D47A8F' : '#B83B5E', intensity: 85, opacity: 85 },
      eyeshadow: { shade: '#C5A087', intensity: 70 },
      eyeliner: { shade: '#1A1A1A', intensity: 80 },
      brows: { shade: '#4A3728', intensity: 75 }
    });
  };

  return {
    ...context,
    activeTab,
    setActiveTab,
    activeSubcategory,
    setActiveSubcategory,
    compareMode,
    setCompareMode,
    saving,
    updateShade,
    updateIntensity,
    updateOpacity,
    resetAllMakeup,
    applyPresetLook,
  };
};
