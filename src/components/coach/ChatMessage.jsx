import React from 'react';
import { Bot, User } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex items-start gap-3 ${isAI ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      {isAI && (
        <div className="w-8 h-8 rounded-full bg-deep-burgundy text-rose-accent flex items-center justify-center text-xs shrink-0 shadow-sm border border-rose-accent/30">
          <Bot className="w-4 h-4" />
        </div>
      )}
      <div
        className={`p-4 rounded-3xl text-xs sm:text-sm max-w-[82%] leading-relaxed ${
          isAI
            ? 'bg-warm-white text-deep-burgundy border border-border-pink shadow-beauty-sm rounded-tl-none'
            : 'bg-deep-burgundy text-cream rounded-tr-none shadow-sm'
        }`}
      >
        {message.text}
      </div>
      {!isAI && (
        <div className="w-8 h-8 rounded-full bg-rose-accent text-white flex items-center justify-center text-xs shrink-0 shadow-sm">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
