import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5F6] selection:bg-[#F2C9D2] selection:text-[#2A0714]">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
