import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Home } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6 animate-fade-in">
      <div className="w-16 h-16 rounded-3xl bg-rose-100 text-rose-500 flex items-center justify-center">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="font-serif text-4xl font-extrabold text-plum-950">404 - Page Not Found</h1>
        <p className="text-charcoal-600 text-sm">
          The beauty page you are looking for doesn't exist or has been relocated.
        </p>
      </div>
      <Button variant="primary" size="md" icon={Home} onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
