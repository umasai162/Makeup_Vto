import React from 'react';
import Card from '../common/Card';
import ProgressBar from '../common/ProgressBar';

const FeatureConfidence = ({ scores }) => {
  const defaultScores = {
    skinTone: 96,
    undertone: 94,
    faceShape: 98,
    eyeShape: 95,
    lipProfile: 97,
    browProfile: 93,
  };

  const currentScores = scores || defaultScores;

  const items = [
    { label: 'Face Shape (Oval)', score: currentScores.faceShape },
    { label: 'Lip Profile (Full)', score: currentScores.lipProfile },
    { label: 'Skin Tone (Medium)', score: currentScores.skinTone },
    { label: 'Eye Shape (Almond)', score: currentScores.eyeShape },
    { label: 'Undertone (Warm/Neutral)', score: currentScores.undertone },
    { label: 'Brow Profile (Soft Arch)', score: currentScores.browProfile },
  ];

  return (
    <Card className="p-6 bg-white border border-rose-100 space-y-4">
      <div className="border-b border-plum-50 pb-3">
        <h3 className="font-serif font-bold text-plum-950 text-lg">AI Estimation Confidence</h3>
        <p className="text-xs text-charcoal-500">
          Landmark density and spectral color analysis accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="space-y-1">
            <ProgressBar
              label={it.label}
              progress={it.score}
              height="h-2"
              color="bg-plum-800"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FeatureConfidence;
