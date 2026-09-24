import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, Palette, Trash2, Sparkles } from 'lucide-react';
import { BeautyContext } from '../context/BeautyContext';
import Button from '../components/common/Button';

const SavedLooksPage = () => {
  const navigate = useNavigate();
  const { savedLooks, removeSavedLook } = useContext(BeautyContext);

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-2 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-rose-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-semibold mb-2">
            <Bookmark className="w-3.5 h-3.5 text-rose-500" />
            <span>Personal Lookbook</span>
          </div>
          <h1 className="text-3xl font-serif font-extrabold text-plum-950">
            My Saved Makeup Looks
          </h1>
        </div>

        <Button variant="gold" size="md" icon={Palette} onClick={() => navigate('/virtual-try-on')}>
          Open AR Try-On Studio
        </Button>
      </div>

      {savedLooks.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-rose-100 text-center space-y-4 shadow-beauty-sm">
          <Bookmark className="w-12 h-12 text-rose-300 mx-auto" />
          <h3 className="font-serif font-bold text-2xl text-plum-950">No Saved Looks Yet</h3>
          <p className="text-charcoal-600 text-sm max-w-md mx-auto">
            Design your favorite foundation, blush, and lipstick combinations in the AR Try-On studio and bookmark them here.
          </p>
          <Button variant="primary" size="md" icon={Palette} onClick={() => navigate('/virtual-try-on')}>
            Create a Look
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedLooks.map((look) => (
            <div key={look.id} className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-beauty-sm space-y-4 p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-plum-950 text-lg">{look.name}</h4>
                  <button
                    onClick={() => removeSavedLook(look.id)}
                    className="p-1.5 text-charcoal-400 hover:text-rose-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <img
                  src={look.image}
                  alt={look.name}
                  className="w-full h-52 object-cover rounded-2xl border border-rose-100"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-plum-50">
                <span className="text-charcoal-500 font-medium">Occasion: {look.occasion || 'Everyday'}</span>
                <Button variant="secondary" size="sm" onClick={() => navigate('/virtual-try-on')}>
                  Apply in AR
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedLooksPage;
