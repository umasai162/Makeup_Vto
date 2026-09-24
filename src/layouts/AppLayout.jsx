import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-plum-50/40">
      <Navbar />
      <div className="flex flex-1 max-w-7xl w-full mx-auto pb-16 lg:pb-0">
        <Sidebar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
};

export default AppLayout;
