import React, { useState } from 'react';
import { Sparkles, Send, GraduationCap, X, Bot, User } from 'lucide-react';
import Modal from './Modal';
import Button from './Button';

const AICoachModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello gorgeous! I am your personal LAVIX AI Makeup Assistant. Ask me anything about shade matching, cheek contouring, or step-by-step techniques!'
    }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const quickQuestions = [
    'Which lipstick shade best suits warm undertones?',
    'How do I lift almond eyes with eyeliner?',
    'What foundation finish works best for oval faces?',
    'How to prevent foundation creasing under eyes?'
  ];

  const handleSend = (textToSend) => {
    const q = textToSend || input;
    if (!q.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: q }]);
    if (!textToSend) setInput('');
    setTyping(true);

    setTimeout(() => {
      let reply = "Based on your facial geometry & skin tone, I recommend starting with a hydrating skin tint, followed by a warm peach blush placed high on the cheekbones to elongate your features!";
      if (q.toLowerCase().includes('lipstick')) {
        reply = "For warm medium skin tones, creamy satin lipsticks with rosewood, terracotta, or warm nude pigments (like Rose Dusk 12) provide breathtaking natural warmth!";
      } else if (q.toLowerCase().includes('eyeliner') || q.toLowerCase().includes('eye')) {
        reply = "For Almond eye shapes, keep your liner thin at the inner corner and extend a subtle 2mm espresso wing flick following your lower lash line curve!";
      } else if (q.toLowerCase().includes('foundation') || q.toLowerCase().includes('creasing')) {
        reply = "To prevent under-eye creasing, apply 2 drops of hydrating hyaluronic serum, dot concealer lightly only on inner/outer corners, and set with micro-milled powder!";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setTyping(false);
    }, 800);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="LAVIX AI Beauty Assistant" maxWidth="max-w-lg">
      <div className="space-y-4 pt-2">
        {/* Chat History Box */}
        <div className="h-72 overflow-y-auto space-y-3 p-3 rounded-2xl bg-plum-50/50 border border-plum-100 hide-scrollbar">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-plum-950 text-rose-300 flex items-center justify-center text-xs shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`p-3.5 rounded-2xl text-xs max-w-[80%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-plum-950 text-white rounded-tr-none'
                    : 'bg-white text-plum-950 border border-rose-100 shadow-beauty-sm rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs shrink-0 shadow-sm">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="flex items-center gap-2 text-xs text-charcoal-500 italic p-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin" />
              <span>AI Coach is computing response...</span>
            </div>
          )}
        </div>

        {/* Quick Question Chips */}
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase text-charcoal-400">Suggested Questions:</p>
          <div className="flex flex-wrap gap-1.5">
            {quickQuestions.map((qq) => (
              <button
                key={qq}
                onClick={() => handleSend(qq)}
                className="px-2.5 py-1 rounded-full bg-rose-50 hover:bg-rose-100 text-plum-900 text-[11px] font-medium border border-rose-200 transition-colors text-left"
              >
                {qq}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="flex gap-2 pt-2 border-t border-plum-100">
          <input
            type="text"
            placeholder="Ask your beauty coach..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-xs focus:outline-none focus:border-plum-800"
          />
          <Button variant="primary" size="sm" icon={Send} onClick={() => handleSend()}>
            Send
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AICoachModal;
