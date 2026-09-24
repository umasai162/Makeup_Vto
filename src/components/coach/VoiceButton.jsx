import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceButton = ({ onListeningToggle }) => {
  const [isListening, setIsListening] = useState(false);

  const handleToggle = () => {
    const next = !isListening;
    setIsListening(next);
    if (onListeningToggle) onListeningToggle(next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`p-2.5 rounded-2xl transition-all duration-300 ${
        isListening
          ? 'bg-rose-accent text-white shadow-glow animate-pulse'
          : 'bg-light-blush text-deep-burgundy hover:bg-soft-blush'
      }`}
      title={isListening ? "Voice Listening Active" : "Click to Speak"}
    >
      {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
    </button>
  );
};

export default VoiceButton;
