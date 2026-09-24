import React from 'react';

const PageContainer = ({ children, className = '', maxWidth = 'max-w-7xl' }) => {
  return (
    <main className={`flex-1 w-full ${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
