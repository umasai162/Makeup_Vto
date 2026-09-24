import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Camera, Upload, ArrowRight } from 'lucide-react';
import { useBeautyAnalysis } from '../hooks/useBeautyAnalysis';
import ImageUploader from '../components/analysis/ImageUploader';
import CameraCapture from '../components/analysis/CameraCapture';
import FaceScanner from '../components/analysis/FaceScanner';
import FaceAnalysisCard from '../components/analysis/FaceAnalysisCard';
import FeatureResults from '../components/analysis/FeatureResults';
import Button from '../components/common/Button';

const Analyze = () => {
  const navigate = useNavigate();
  const { uploadedImage, setUploadedImage, beautyProfile, analyzing, startAnalysis } = useBeautyAnalysis();

  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'camera'
  const [currentProgress, setCurrentProgress] = useState(0);

  const handleImageSelected = (url) => {
    setUploadedImage(url);
  };

  const handleStartScan = async () => {
    setCurrentProgress(15);
    const interval = setInterval(() => {
      setCurrentProgress(p => (p >= 90 ? 90 : p + 25));
    }, 400);

    const profile = await startAnalysis(uploadedImage);
    clearInterval(interval);
    setCurrentProgress(100);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 py-6 px-4 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-light-blush text-deep-burgundy text-xs font-extrabold border border-soft-blush">
          <Sparkles className="w-4 h-4 text-rose-accent" />
          <span>Powered by LAVIX Computer Vision & Neural Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-deep-burgundy">
          AI Face & Beauty Analysis
        </h1>
        <p className="text-muted-text text-sm sm:text-base leading-relaxed">
          Upload a clear portrait or take a photo to detect skin tone, undertone, face structure, eye shape, and brow symmetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Upload / Camera Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-md space-y-5">
            <div className="flex rounded-2xl bg-cream p-1 border border-border-pink">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'upload' ? 'bg-deep-burgundy text-cream shadow-sm' : 'text-charcoal hover:text-deep-burgundy'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Upload Selfie
              </button>
              <button
                onClick={() => setActiveTab('camera')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'camera' ? 'bg-deep-burgundy text-cream shadow-sm' : 'text-charcoal hover:text-deep-burgundy'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                Webcam Capture
              </button>
            </div>

            {activeTab === 'upload' ? (
              <ImageUploader onImageSelected={handleImageSelected} currentImage={uploadedImage} />
            ) : (
              <CameraCapture onCapture={handleImageSelected} />
            )}

            <Button
              variant="primary"
              size="lg"
              className="w-full shadow-glow"
              icon={Sparkles}
              disabled={analyzing}
              onClick={handleStartScan}
            >
              {analyzing ? 'Analyzing Facial Features...' : 'Run AI Face Analysis'}
            </Button>
          </div>
        </div>

        {/* Right Column: Scan Visualizer or Results Display */}
        <div className="lg:col-span-7 space-y-6">
          {analyzing ? (
            <FaceScanner image={uploadedImage} progress={currentProgress} />
          ) : (
            <div className="space-y-6">
              <FaceAnalysisCard profile={beautyProfile} />
              <FeatureResults profile={beautyProfile} />

              <div className="bg-gradient-to-r from-deep-burgundy via-dark-wine to-deep-burgundy rounded-3xl p-6 text-cream flex flex-col sm:flex-row items-center justify-between gap-4 shadow-beauty-md border border-rose-accent/30">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-soft-blush uppercase tracking-wider">Analysis Complete</span>
                  <h3 className="font-serif text-lg font-bold text-white">Generate Personalized Makeup & Try-On</h3>
                </div>
                <Button
                  variant="gold"
                  size="sm"
                  icon={ArrowRight}
                  onClick={() => navigate('/virtual-try-on')}
                >
                  Open AR Studio
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analyze;
