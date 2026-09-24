import React, { createContext, useState, useEffect } from 'react';
import { vtoService } from '../services/vtoService';

export const BeautyContext = createContext();

export const BeautyProvider = ({ children }) => {
  // Default elegant demo beauty portrait URL
  const DEFAULT_SELFIE = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80";

  const [uploadedImage, setUploadedImage] = useState(DEFAULT_SELFIE);
  const [qualityCheck, setQualityCheck] = useState({
    faceVisibility: 98,
    lighting: 'Optimal',
    obstructions: 'None',
    passed: true
  });
  
  const [beautyProfile, setBeautyProfile] = useState({
    skinTone: 'Medium',
    undertone: 'Warm / Neutral',
    faceShape: 'Oval',
    eyeShape: 'Almond',
    lipProfile: 'Full',
    browProfile: 'Soft Arch',
    confidenceScores: {
      skinTone: 96,
      undertone: 94,
      faceShape: 98,
      eyeShape: 95,
      lipProfile: 97,
      browProfile: 93,
    },
    analyzedAt: new Date().toISOString()
  });

  const [selectedOccasion, setSelectedOccasion] = useState('everyday');
  const [selectedStyle, setSelectedStyle] = useState('soft-glam');
  
  const [recommendedLook, setRecommendedLook] = useState({
    lookName: 'Soft Glam Golden Hour',
    aiMatchScore: 98,
    foundation: { coverage: 'Medium Satin', recommendation: 'Warm-neutral Satin Foundation' },
    blush: { shade: 'Peach / Coral', recommendation: 'High cheekbone peach powder blush' },
    eyes: { shades: 'Warm bronze & champagne shimmer', recommendation: 'Bronze crease + champagne lid' },
    eyeliner: { style: '2mm lifted wing', recommendation: 'Dark espresso wing flick' },
    lips: { shade: 'Rose Nude', finish: 'Satin', recommendation: 'Rose Dusk creamy satin lipstick' }
  });

  const [vtoOptions, setVtoOptions] = useState({
    foundation: { shade: '#E8C5B0', intensity: 80 },
    blush: { shade: '#E26D5C', intensity: 75, opacity: 70 },
    lipstick: { shade: '#D47A8F', intensity: 85, opacity: 80 },
    eyeshadow: { shade: '#C5A087', intensity: 70 },
    eyeliner: { shade: '#1A1A1A', intensity: 90 },
    brows: { shade: '#4A3728', intensity: 75 }
  });

  const [myMakeupBag, setMyMakeupBag] = useState([
    { id: 'bag-1', category: 'Foundation', brand: 'LAVIX Atelier', name: 'Velvet Skin Radiant', shade: 'Medium Warm' },
    { id: 'bag-2', category: 'Lipstick', brand: 'LUMIÈRE', name: 'Melted Silk Satin', shade: 'Rose Dusk 12' },
    { id: 'bag-3', category: 'Blush', brand: 'NORDIC GLOW', name: 'Petal Touch', shade: 'Peach Blossom' },
  ]);

  const [referenceLookImage, setReferenceLookImage] = useState(null);
  const [savedLooks, setSavedLooks] = useState([]);

  useEffect(() => {
    const loadSaved = async () => {
      const looks = await vtoService.getSavedLooks();
      setSavedLooks(looks);
    };
    loadSaved();
  }, []);

  const saveCurrentLook = async (name = 'My Custom Glam') => {
    const res = await vtoService.saveLook({
      name,
      occasion: selectedOccasion,
      image: uploadedImage,
      options: vtoOptions
    });
    if (res.success) {
      setSavedLooks(prev => [res.savedLook, ...prev]);
    }
    return res;
  };

  const removeSavedLook = async (id) => {
    await vtoService.deleteSavedLook(id);
    setSavedLooks(prev => prev.filter(l => l.id !== id));
  };

  const addToMakeupBag = (item) => {
    setMyMakeupBag(prev => [...prev, { ...item, id: `bag-${Date.now()}` }]);
  };

  const removeFromMakeupBag = (id) => {
    setMyMakeupBag(prev => prev.filter(i => i.id !== id));
  };

  return (
    <BeautyContext.Provider value={{
      uploadedImage,
      setUploadedImage,
      qualityCheck,
      setQualityCheck,
      beautyProfile,
      setBeautyProfile,
      selectedOccasion,
      setSelectedOccasion,
      selectedStyle,
      setSelectedStyle,
      recommendedLook,
      setRecommendedLook,
      vtoOptions,
      setVtoOptions,
      myMakeupBag,
      addToMakeupBag,
      removeFromMakeupBag,
      referenceLookImage,
      setReferenceLookImage,
      savedLooks,
      saveCurrentLook,
      removeSavedLook,
      resetToDefaultSelfie: () => setUploadedImage(DEFAULT_SELFIE),
    }}>
      {children}
    </BeautyContext.Provider>
  );
};
