import React from 'react';

const ProgressBar = ({
  progress = 0, // 0 to 100
  label,
  showPercentage = true,
  height = 'h-2.5',
  color = 'bg-gradient-to-r from-plum-700 via-rose-500 to-peach-300',
  className = ''
}) => {
  const percentage = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1.5 text-xs font-medium text-plum-900">
          {label && <span>{label}</span>}
          {showPercentage && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={`w-full bg-plum-100 rounded-full overflow-hidden ${height}`}>
        <div
          className={`${height} ${color} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
