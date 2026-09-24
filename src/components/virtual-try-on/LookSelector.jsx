import React from 'react';
import Card from '../common/Card';

const LookSelector = ({ onSelectLook }) => {
  const presets = [
    { name: 'Soft Glam', blush: '#E26D5C', lips: '#D47A8F', tag: 'AI Top Pick' },
    { name: 'Minimal Natural', blush: '#F48B9B', lips: '#C88EA7', tag: 'Daily Fresh' },
    { name: 'Red Carpet Glam', blush: '#C85567', lips: '#900C3F', tag: 'Bold Night' },
  ];

  return (
    <div className="space-y-2">
      <span className="text-xs font-bold text-plum-900">Try Preset Look</span>
      <div className="grid grid-cols-3 gap-2">
        {presets.map((p, idx) => (
          <Card
            key={idx}
            onClick={() => onSelectLook(p)}
            className="p-2.5 text-center cursor-pointer hover:border-plum-800 transition-all bg-plum-50/50"
          >
            <p className="text-xs font-serif font-bold text-plum-950">{p.name}</p>
            <span className="text-[9px] text-rose-600 block">{p.tag}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LookSelector;
