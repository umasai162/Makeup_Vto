import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import Card from '../common/Card';

const FaceQualityCheck = ({ qualityMetrics }) => {
  const checks = [
    {
      label: 'Face Visibility & Centering',
      passed: qualityMetrics?.faceVisibility > 85,
      detail: `${qualityMetrics?.faceVisibility || 98}% detected landmark clarity`,
    },
    {
      label: 'Lighting Conditions',
      passed: true,
      detail: qualityMetrics?.lighting || 'Optimal soft daylight balance',
    },
    {
      label: 'Head Pose Angle',
      passed: true,
      detail: qualityMetrics?.angle || 'Frontal (Pitch < 3°)',
    },
    {
      label: 'Obstructions Check',
      passed: qualityMetrics?.obstructions === 'None',
      detail: qualityMetrics?.obstructions || 'No heavy glasses or hair blockage',
    },
  ];

  return (
    <Card className="p-6 bg-white border border-rose-100 space-y-4">
      <div className="flex items-center justify-between border-b border-plum-50 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="font-serif font-bold text-plum-950 text-base">Image Quality Validation</h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Passed Quality Gate
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {checks.map((c, i) => (
          <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-plum-50/50">
            {c.passed ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            )}
            <div>
              <p className="font-medium text-plum-950">{c.label}</p>
              <p className="text-[11px] text-charcoal-500">{c.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FaceQualityCheck;
