import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AppLayout from './layouts/AppLayout';
import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage';
import BeautyAnalysisPage from './pages/BeautyAnalysisPage';
import RecommendationsPage from './pages/RecommendationsPage';
import VirtualTryOnPage from './pages/VirtualTryOnPage';
import MakeupCoachPage from './pages/MakeupCoachPage';
import ProductsPage from './pages/ProductsPage';
import DashboardPage from './pages/DashboardPage';
import SavedLooksPage from './pages/SavedLooksPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Routes>
      {/* Public routes wrapped in PublicLayout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Main app feature routes wrapped in AppLayout */}
      <Route element={<AppLayout />}>
        <Route path="/beauty-analysis" element={<BeautyAnalysisPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/virtual-try-on" element={<VirtualTryOnPage />} />
        <Route path="/makeup-coach" element={<MakeupCoachPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/saved-looks" element={<SavedLooksPage />} />
        
        {/* User protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Fallback 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
