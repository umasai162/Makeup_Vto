import React, { useState } from 'react';
import LookCard from './LookCard';
import LookFilters from './LookFilters';
import Modal from '../common/Modal';
import Button from '../common/Button';

const LookGallery = ({ looks = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLookModal, setActiveLookModal] = useState(null);

  const filteredLooks = looks.filter(l => {
    if (selectedCategory === 'All') return true;
    return l.category.toLowerCase() === selectedCategory.toLowerCase() || l.name.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="space-y-8">
      <LookFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLooks.map((look) => (
          <LookCard
            key={look.id}
            look={look}
            onViewDetails={(l) => setActiveLookModal(l)}
          />
        ))}
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={!!activeLookModal}
        onClose={() => setActiveLookModal(null)}
        title={activeLookModal?.name || 'Look Details'}
        maxWidth="max-w-lg"
      >
        {activeLookModal && (
          <div className="space-y-4 pt-2">
            <img
              src={activeLookModal.image}
              alt={activeLookModal.name}
              className="w-full h-56 object-cover rounded-2xl border border-border-pink"
            />
            <div className="space-y-2">
              <span className="text-xs font-bold text-rose-accent uppercase tracking-wider">{activeLookModal.category}</span>
              <p className="text-sm text-charcoal leading-relaxed">{activeLookModal.description}</p>
            </div>
            
            {activeLookModal.details && (
              <div className="space-y-2 pt-2 border-t border-border-pink text-xs">
                <p><strong>Foundation:</strong> {activeLookModal.details.foundation}</p>
                <p><strong>Blush:</strong> {activeLookModal.details.blush}</p>
                <p><strong>Eyes:</strong> {activeLookModal.details.eyes}</p>
                <p><strong>Eyeliner:</strong> {activeLookModal.details.eyeliner}</p>
                <p><strong>Lips:</strong> {activeLookModal.details.lips}</p>
              </div>
            )}

            <Button
              variant="primary"
              size="md"
              className="w-full mt-2"
              onClick={() => {
                setActiveLookModal(null);
                window.location.href = '/virtual-try-on';
              }}
            >
              Apply in Virtual Try-On
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LookGallery;
