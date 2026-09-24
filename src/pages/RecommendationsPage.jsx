import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, SlidersHorizontal, Camera, Check, ShoppingBag, Palette, ArrowRight } from 'lucide-react';
import { BeautyContext } from '../context/BeautyContext';
import OccasionSelector from '../components/recommendations/OccasionSelector';
import StyleSelector from '../components/recommendations/StyleSelector';
import ReferenceLookUploader from '../components/recommendations/ReferenceLookUploader';
import RecommendedLook from '../components/recommendations/RecommendedLook';
import MakeupCategoryCard from '../components/recommendations/MakeupCategoryCard';
import Button from '../components/common/Button';
import { MOCK_PRODUCTS } from '../data/mockProducts';

const RecommendationsPage = () => {
  const navigate = useNavigate();
  const {
    beautyProfile,
    selectedOccasion,
    setSelectedOccasion,
    selectedStyle,
    setSelectedStyle,
    recommendedLook,
    referenceLookImage,
    setReferenceLookImage
  } = useContext(BeautyContext);

  const [activeTab, setActiveTab] = useState('recommendations');

  return (
    <div className="max-w-6xl mx-auto space-y-10 py-4 animate-fade-in">
      {/* Page Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-rose-100">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>AI Makeup Advisor Recommendations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-plum-950">
            Tailored Makeup Looks & Products
          </h1>
          <p className="text-charcoal-700 text-sm sm:text-base">
            Customized for your <strong className="text-plum-900">{beautyProfile.skinTone} {beautyProfile.undertone}</strong> skin tone and <strong className="text-plum-900">{beautyProfile.faceShape}</strong> face shape.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="md"
            icon={Camera}
            onClick={() => navigate('/beauty-analysis')}
          >
            Re-Analyze Face
          </Button>
          <Button
            variant="gold"
            size="md"
            icon={Palette}
            onClick={() => navigate('/virtual-try-on')}
          >
            Virtual Try-On
          </Button>
        </div>
      </div>

      {/* Interactive Selectors: Occasion & Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Customization Parameters */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-beauty-md space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-plum-950 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-rose-500" />
                Customize Parameters
              </h3>
            </div>

            {/* Occasion Selector */}
            <OccasionSelector selectedOccasion={selectedOccasion} onSelect={setSelectedOccasion} />

            {/* Style Preference */}
            <StyleSelector selectedStyle={selectedStyle} onSelect={setSelectedStyle} />

            {/* Reference Look Match Uploader */}
            <ReferenceLookUploader
              referenceImage={referenceLookImage}
              onImageUpload={setReferenceLookImage}
            />
          </div>
        </div>

        {/* Right Side: Recommended Look & Specific Step Cards */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Hero Recommended Look */}
          <RecommendedLook
            look={recommendedLook}
            occasion={selectedOccasion}
            style={selectedStyle}
          />

          {/* Curated Product Matches */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-plum-950">Recommended Products</h3>
                <p className="text-xs text-charcoal-600">Perfect shade matches from leading luxury brands</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={ShoppingBag}
                onClick={() => navigate('/products')}
              >
                View Full Catalog
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MOCK_PRODUCTS.slice(0, 4).map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 border border-rose-100 shadow-beauty-sm flex items-center gap-4 hover:border-rose-300 transition-all">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] font-bold uppercase text-rose-500 tracking-wider">{product.brand}</span>
                    <h4 className="text-sm font-bold text-plum-950 line-clamp-1">{product.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-charcoal-700">{product.shade}</span>
                      <span className="px-2 py-0.5 rounded-full bg-rose-100 text-plum-900 text-[10px] font-bold">
                        {product.matchScore}% Match
                      </span>
                    </div>
                    <div className="text-sm font-bold text-plum-800">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
