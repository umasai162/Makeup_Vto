import { useContext, useState } from 'react';
import { BeautyContext } from '../context/BeautyContext';
import { beautyService } from '../services/beautyService';

export const useBeautyAnalysis = () => {
  const context = useContext(BeautyContext);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState(null);

  if (!context) {
    throw new Error('useBeautyAnalysis must be used within a BeautyProvider');
  }

  const startAnalysis = async (imageUrl) => {
    setAnalyzing(true);
    setError(null);
    try {
      const result = await beautyService.analyzeBeauty(imageUrl || context.uploadedImage);
      if (result.success) {
        context.setBeautyProfile(result.profile);
        setAnalyzing(false);
        return result.profile;
      } else {
        setError(result.message);
        setAnalyzing(false);
        return null;
      }
    } catch (err) {
      setError('Something went wrong while analyzing your image.');
      setAnalyzing(false);
      return null;
    }
  };

  return {
    ...context,
    analyzing,
    error,
    startAnalysis,
  };
};
