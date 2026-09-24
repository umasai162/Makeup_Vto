import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import ChatMessage from './ChatMessage';
import QuickActions from './QuickActions';
import VoiceButton from './VoiceButton';
import Button from '../common/Button';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello Sophia! Based on your Oval face shape and warm undertone, I recommend a soft bronze look with peach blush and warm nude lipstick. What would you like to explore today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (queryText) => {
    const text = queryText || input;
    if (!text.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text }]);
    if (!queryText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I recommend placing blush slightly higher on your cheekbones, sweeping up towards the temples. This enhances your Oval face symmetry!";
      const lower = text.toLowerCase();
      if (lower.includes('foundation')) {
        reply = "For your warm medium undertone, Velvet Skin Radiant in M24 Warm Sand provides medium satin buildable coverage without clogging pores.";
      } else if (lower.includes('lip')) {
        reply = "Melted Silk Satin in Rose Dusk 12 is your top 98% AI match. Its creamy rosewood pigment complements warm skin depth beautifully.";
      } else if (lower.includes('party')) {
        reply = "For a party look, pair a smokey warm bronze crease with 2mm lifted espresso eyeliner and a hydrating nude satin lip!";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-md flex flex-col h-[520px] justify-between space-y-4">
      {/* Scrollable Chat Bubbles */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 hide-scrollbar">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-muted-text font-medium italic p-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-accent animate-spin" />
            <span>LAVIX AI Assistant is typing...</span>
          </div>
        )}
      </div>

      <div className="space-y-3 pt-2 border-t border-border-pink">
        <QuickActions onSelectAction={(act) => handleSend(act)} />

        {/* Input Bar */}
        <div className="flex items-center gap-2">
          <VoiceButton onListeningToggle={(active) => active && handleSend("How should I apply blush?")} />
          <input
            type="text"
            placeholder="Ask LAVIX AI Coach anything about makeup, shades, or brushes..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-3 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent text-deep-burgundy"
          />
          <Button variant="secondary" size="md" icon={Send} onClick={() => handleSend()}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
