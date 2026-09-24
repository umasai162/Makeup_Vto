import api from './api';

export const recommendationService = {
  getRecommendation: async (occasion, style, profile) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/recommendations/generate', { occasion, style, profile });
      await new Promise(res => setTimeout(res, 800));
      return {
        success: true,
        lookName: `${style === 'full-glam' ? 'Radiant' : style === 'natural' ? 'Fresh' : 'Soft'} ${occasion ? occasion.toUpperCase() : 'GLAM'} Look`,
        foundation: {
          coverage: 'Medium buildable satin',
          undertone: profile?.undertone || 'Warm-neutral',
          recommendation: 'Hydrating medium-coverage satin foundation'
        },
        blush: {
          shade: 'Peach / Coral',
          placement: 'High cheekbone sweep',
          recommendation: 'Soft warm peach silk powder blush'
        },
        eyes: {
          shades: 'Warm bronze + soft champagne shimmer',
          recommendation: 'Bronze crease definition with metallic lid wash'
        },
        eyeliner: {
          style: 'Slightly lifted 2mm wing',
          recommendation: 'Dark espresso outer wing flick'
        },
        lips: {
          shade: 'Rose Dusk / Warm Nude',
          finish: 'Creamy satin',
          recommendation: 'Soft rose nude lipstick with precision liner'
        },
        aiMatchScore: 98,
      };
    } catch (err) {
      return { success: false, message: 'Could not fetch recommendations.' };
    }
  },

  analyzeReferenceLook: async (referenceImageUrl, userSelfieUrl) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/recommendations/reference-look', { referenceImageUrl, userSelfieUrl });
      await new Promise(res => setTimeout(res, 1500));
      return {
        success: true,
        detectedLook: {
          name: 'Reference Adapted Sunset Glam',
          vibe: 'Warm Amber Smokey Eye + Nude Lip',
          dominantColors: ['#C5A087', '#E26D5C', '#D47A8F'],
          adaptationNotes: 'Extracted smokey terracotta eyes from reference photo and adjusted undertone to match your Medium Warm skin profile.',
        }
      };
    } catch (err) {
      return { success: false, message: 'Failed to analyze reference look.' };
    }
  }
};
