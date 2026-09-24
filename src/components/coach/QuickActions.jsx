import React from 'react';

const QuickActions = ({ onSelectAction }) => {
  const actions = [
    'Recommend a Look',
    'How Should I Apply Blush?',
    'Find My Foundation',
    'Choose Lip Color',
    'Create Office Look',
    'Create Party Look'
  ];

  return (
    <div className="space-y-2">
      <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-text">Suggested Quick Actions:</span>
      <div className="flex flex-wrap gap-2">
        {actions.map((act) => (
          <button
            key={act}
            onClick={() => onSelectAction(act)}
            className="px-3 py-1.5 rounded-full bg-light-blush hover:bg-soft-blush text-deep-burgundy text-xs font-bold border border-border-pink transition-colors text-left"
          >
            {act}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
