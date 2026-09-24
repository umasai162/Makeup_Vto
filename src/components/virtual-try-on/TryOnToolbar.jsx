import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw, Bookmark, GraduationCap, Eye } from 'lucide-react';
import Button from '../common/Button';

const TryOnToolbar = ({ compareMode, onToggleCompare, onReset, onSave, saving }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-rose-100 shadow-beauty-sm">
      <div className="flex items-center gap-2">
        <Button
          variant={compareMode ? "primary" : "secondary"}
          size="sm"
          icon={Eye}
          onClick={onToggleCompare}
        >
          {compareMode ? "Single Canvas" : "Before / After Slider"}
        </Button>

        <Button
          variant="text"
          size="sm"
          icon={RotateCcw}
          onClick={onReset}
        >
          Reset
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          icon={Bookmark}
          loading={saving}
          onClick={onSave}
        >
          Save Look
        </Button>

        <Button
          variant="gold"
          size="sm"
          icon={GraduationCap}
          onClick={() => navigate('/makeup-coach')}
        >
          Learn with AI Coach
        </Button>
      </div>
    </div>
  );
};

export default TryOnToolbar;
