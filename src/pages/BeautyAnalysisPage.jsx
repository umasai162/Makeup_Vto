import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Camera, Upload, RefreshCw, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';
import { useBeautyAnalysis } from '../hooks/useBeautyAnalysis';
import ImageUploader from '../components/analysis/ImageUploader';
import CameraCapture from '../components/analysis/CameraCapture';
import FaceQualityCheck from '../components/analysis/FaceQualityCheck';
import AnalysisProgress from '../components/analysis/AnalysisProgress';
import FaceAnalysisOverlay from '../components/analysis/FaceAnalysisOverlay';
import BeautyProfileCard from '../components/beauty-profile/BeautyProfileCard';
import SkinProfile from '../components/beauty-profile/SkinProfile';
import FaceShapeCard from '../components/beauty-profile/FaceShapeCard';
import EyeShapeCard from '../components/beauty-profile/EyeShapeCard';
import LipProfileCard from '../components/beauty-profile/LipProfileCard';
import BrowProfileCard from '../components/beauty-profile/BrowProfileCard';
import FeatureConfidence from '../components/beauty-profile/FeatureConfidence';
import Button from '../components/common/Button';

const BeautyAnalysisPage = () => {
  const navigate = useNavigate();
  const { uploadedImage, setUploadedImage, beautyProfile, analyzing, startAnalysis, qualityCheck } = useBeautyAnalysis();
  
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'camera'
  const [analyzed, setAnalyzed] = useState(false);
  const [currentStepProgress, setCurrentStepProgress] = useState(0);

  const handleImageSelected = (imageUrl) => {
    setUploadedImage(imageUrl);
  };

  const handleRunAnalysis = async () => {
    setCurrentStepProgress(10);
    setAnalyzed(false);
    
    // Simulate progressive analysis feedback for user
    const interval = setInterval(() => {
      setCurrentStepProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 20;
      });
    }, 400);

    const profile = await startAnalysis(uploadedImage);
    clearInterval(interval);
    setCurrentStepProgress(100);
    if (profile) {
      setAnalyzed(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 py-4 animate-fade-in">
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 border border-rose-200 text-plum-900 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span>Powered by LAVIX Computer Vision & Neural Facial Analysis</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-plum-950">
          AI Face & Beauty Analysis
        </h1>
        <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
          Upload a clear portrait or take a photo to detect skin tone, undertone, face structure, eye shape, and brow symmetry with 98% accuracy.
        </p>
      </div>

      {/* Main Grid: Left Controls / Image & Right Analysis Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image Selector & Preview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-beauty-md space-y-5">
            {/* Mode Tabs */}
            <div className="flex rounded-2xl bg-plum-50/70 p-1 border border-rose-100">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'upload'
                    ? 'bg-plum-950 text-white shadow-sm'
                    : 'text-charcoal-700 hover:text-plum-950'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Upload Selfie
              </button>
              <button
                onClick={() => setActiveTab('camera')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'camera'
                    ? 'bg-plum-950 text-white shadow-sm'
                    : 'text-charcoal-700 hover:text-plum-950'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                Webcam Capture
              </button>
            </div>

            {/* Input Box */}
            {activeTab === 'upload' ? (
              <ImageUploader onImageSelected={handleImageSelected} currentImage={uploadedImage} />
            ) : (
              <CameraCapture onCapture={handleImageSelected} />
            )}

            {/* Quality Checklist */}
            <FaceQualityCheck quality={qualityCheck} />

            {/* Analyze Trigger Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              icon={analyzing ? RefreshCw : Sparkles}
              disabled={analyzing}
              onClick={handleRunAnalysis}
            >
              {analyzing ? 'Analyzing Facial Metrics...' : 'Run AI Face Analysis'}
            </Button>
          </div>
        </div>

        {/* Right Column: Interactive Analysis Feedback or Detailed Beauty Profile */}
        <div className="lg:col-span-7 space-y-6">
          {analyzing ? (
            <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-beauty-md flex flex-col items-center text-center space-y-6">
              <FaceAnalysisOverlay image={uploadedImage} />
              <AnalysisProgress progress={currentStepProgress} />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Profile Card Summary Header */}
              <BeautyProfileCard profile={beautyProfile} />

              {/* Grid of Individual Feature Breakdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkinProfile profile={beautyProfile} />
                <FaceShapeCard profile={beautyProfile} />
                <EyeShapeCard profile={beautyProfile} />
                <LipProfileCard profile={beautyProfile} />
                <BrowProfileCard profile={beautyProfile} />
                <FeatureConfidence scores={beautyProfile.confidenceScores} />
              </div>

              {/* Next Steps Action Box */}
              <div className="bg-gradient-to-r from-plum-950 to-plum-900 rounded-3xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-beauty-md">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs font-semibold text-rose-300 uppercase tracking-wider">Ready for Transformation</div>
                  <h3 className="font-serif text-lg font-bold text-rose-50">Generate Personalized Makeup & Try-On</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => navigate('/virtual-try-on')}
                  >
                    AR Try-On
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={ArrowRight}
                    onClick={() => navigate('/recommendations')}
                  >
                    Get Recommendations
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeautyAnalysisPage;
