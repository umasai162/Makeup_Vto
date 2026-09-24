import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import AICoachModal from '../common/AICoachModal';

const BeautyCoachSection = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-beauty-md flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-rose-500" />
            <span>Interactive AI Assistant</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-plum-950">
            BEAUTY COACH
          </h2>

          <p className="text-lg font-serif italic text-rose-500">
            Your personal AI makeup assistant
          </p>

          <p className="text-sm text-charcoal-700 leading-relaxed">
            Get instant answers on brush selection, contouring techniques for your face shape, and step-by-step masterclasses.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button
              variant="gold"
              size="lg"
              icon={MessageSquare}
              onClick={() => setIsModalOpen(true)}
              className="text-plum-950 font-extrabold"
            >
              Ask Your Coach
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={GraduationCap}
              onClick={() => navigate('/makeup-coach')}
            >
              Explore Tutorials
            </Button>
          </div>
        </div>

        {/* Visual Coach Avatar Badge */}
        <div className="w-full md:w-80 p-6 rounded-3xl bg-gradient-to-br from-plum-950 to-plum-900 text-white shadow-beauty-lg space-y-4 text-center border border-rose-400/20">
          <div className="w-16 h-16 rounded-full bg-rose-400/20 border-2 border-rose-300 mx-auto flex items-center justify-center text-rose-200">
            <Sparkles className="w-8 h-8 animate-pulse text-rose-300" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-rose-100">LAVIX AI Coach</h3>
            <p className="text-xs text-rose-200/80">Available 24/7 for instant shade & contour advice</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2.5 rounded-xl bg-white text-plum-950 font-bold text-xs hover:bg-rose-50 transition-colors shadow-sm"
          >
            Start Chatting Now
          </button>
        </div>
      </div>

      {/* Interactive Chat Modal */}
      <AICoachModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default BeautyCoachSection;
