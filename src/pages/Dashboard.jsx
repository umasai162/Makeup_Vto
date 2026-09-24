import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BeautyContext } from '../context/BeautyContext';
import { LOOKS_DATA } from '../data/looks';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatsCards from '../components/dashboard/StatsCards';
import FaceProfile from '../components/dashboard/FaceProfile';
import RecommendedLooks from '../components/dashboard/RecommendedLooks';
import RecentActivity from '../components/dashboard/RecentActivity';
import Button from '../components/common/Button';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { beautyProfile, savedLooks } = useContext(BeautyContext);

  const stats = {
    looksTried: 14,
    savedLooks: savedLooks.length || 6,
    aiRecommendations: 28,
    favoriteProducts: 5
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      <DashboardHeader userName={user?.name || 'Sophia Vance'} />
      <StatsCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Profile & Recommended Looks */}
        <div className="lg:col-span-7 space-y-6">
          <FaceProfile profile={beautyProfile} />
          <RecommendedLooks looks={LOOKS_DATA} />
        </div>

        {/* Right Column (5 cols): Activity Timeline & AI Coach Quick Action */}
        <div className="lg:col-span-5 space-y-6">
          <RecentActivity />

          <div className="bg-gradient-to-br from-deep-burgundy to-dark-wine p-6 rounded-3xl text-cream border border-rose-accent/30 shadow-beauty-md text-center space-y-3">
            <span className="text-xs font-bold text-soft-blush uppercase tracking-widest">AI Beauty Assistant</span>
            <h4 className="font-serif font-bold text-lg text-white">Need Personal Advice?</h4>
            <p className="text-xs text-light-blush/80">Ask your AI Coach about contouring, shade selection, or lip brush techniques.</p>
            <Button variant="gold" size="sm" onClick={() => navigate('/beauty-coach')}>
              Chat with AI Coach
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
