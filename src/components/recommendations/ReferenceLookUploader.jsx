import React, { useState } from 'react';
import { Upload, Sparkles, ArrowRight, Image as ImageIcon } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { recommendationService } from '../../services/recommendationService';

const ReferenceLookUploader = ({ userSelfie, onAdaptLook }) => {
  const [refImage, setRefImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [adaptedData, setAdaptedData] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRefImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!refImage) return;
    setAnalyzing(true);
    const res = await recommendationService.analyzeReferenceLook(refImage, userSelfie);
    setAnalyzing(false);
    if (res.success) {
      setAdaptedData(res.detectedLook);
    }
  };

  return (
    <Card glass className="p-8 border border-rose-200 space-y-6">
      <div className="border-b border-plum-50 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="ai">Reference Look Transformer</Badge>
        </div>
        <h3 className="text-xl font-serif font-bold text-plum-950">Upload a Makeup Look You Love</h3>
        <p className="text-xs text-charcoal-600">
          Our AI extracts shades, textures, and eyeliner geometry from your favorite celebrity or Pinterest photo and adapts it to your face shape and undertone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Upload Box */}
        <div className="space-y-4">
          <p className="text-xs font-bold text-plum-900 uppercase tracking-wider">1. Reference Look Photo</p>
          {refImage ? (
            <div className="relative rounded-2xl overflow-hidden h-56 border border-rose-200">
              <img src={refImage} alt="Reference Look" className="w-full h-full object-cover" />
              <button
                onClick={() => { setRefImage(null); setAdaptedData(null); }}
                className="absolute top-2 right-2 bg-plum-950/80 text-white p-1 rounded-full text-xs"
              >
                Change
              </button>
            </div>
          ) : (
            <label className="border-2 border-dashed border-rose-200 rounded-2xl h-56 flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-rose-50/50 transition-colors">
              <Upload className="w-8 h-8 text-rose-400 mb-2" />
              <span className="text-xs font-bold text-plum-900">Upload Reference Image</span>
              <span className="text-[10px] text-charcoal-500">Pinterest, Instagram, Celebrity look</span>
              <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            </label>
          )}

          {refImage && !adaptedData && (
            <Button
              variant="gold"
              size="md"
              icon={Sparkles}
              loading={analyzing}
              onClick={handleAnalyze}
              className="w-full"
            >
              Analyze & Adapt To My Face
            </Button>
          )}
        </div>

        {/* Right: Target User Selfie */}
        <div className="space-y-4">
          <p className="text-xs font-bold text-plum-900 uppercase tracking-wider">2. Your Target Selfie</p>
          <div className="relative rounded-2xl overflow-hidden h-56 border border-rose-200">
            <img src={userSelfie} alt="Your Selfie" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 bg-plum-950/80 text-white px-2.5 py-1 rounded-full text-[10px]">
              Active Face Profile
            </div>
          </div>
        </div>
      </div>

      {/* Adapted Result Box */}
      {adaptedData && (
        <div className="bg-plum-950 text-white p-6 rounded-2xl border border-plum-800 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-300" />
              <h4 className="font-serif font-bold text-lg text-white">{adaptedData.name}</h4>
            </div>
            <Badge variant="gold">Personalized Adaptation</Badge>
          </div>

          <p className="text-xs text-rose-100/80 leading-relaxed">
            {adaptedData.adaptationNotes}
          </p>

          <Button
            variant="gold"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => onAdaptLook && onAdaptLook(adaptedData)}
          >
            Try Adapted Look On VTO Canvas
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ReferenceLookUploader;
