import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('sophia@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await login(email, password);
    setLoading(false);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message || 'Invalid email or password.');
    }
  };

  return (
    <div className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 items-center max-w-7xl mx-auto py-8 px-4 animate-fade-in gap-8">
      {/* Left Column: Premium LAVIX Beauty Visual */}
      <div className="lg:col-span-6 hidden lg:block">
        <div className="relative h-[550px] rounded-3xl overflow-hidden border border-border-pink shadow-beauty-lg bg-deep-burgundy p-10 flex flex-col justify-between text-cream">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
            alt="LAVIX Luxury Visual"
            className="absolute inset-0 w-full h-full object-cover opacity-65 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-burgundy via-deep-burgundy/40 to-transparent" />

          <div className="relative z-10 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-dark-wine flex items-center justify-center text-ai-accent border border-rose-accent/40 shadow-glow">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-extrabold tracking-widest uppercase text-soft-blush">LAVIX ARCHITECTURE</span>
          </div>

          <div className="relative z-10 space-y-2">
            <h2 className="text-3xl font-serif font-extrabold text-white">Your Personal AI Beauty Studio</h2>
            <p className="text-xs text-light-blush/90 leading-relaxed max-w-md">
              Access 3D facial feature detection, real-time shade matching, and custom makeup coaching.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Authentication Form */}
      <div className="lg:col-span-6 max-w-md mx-auto w-full">
        <div className="bg-warm-white rounded-3xl p-8 border border-border-pink shadow-beauty-lg space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-deep-burgundy mx-auto flex items-center justify-center text-ai-accent shadow-glow">
              <Sparkles className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-extrabold text-deep-burgundy">Welcome Back to LAVIX</h1>
            <p className="text-xs text-muted-text">Sign in to your beauty profile & AR Try-On studio</p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-light-blush text-deep-burgundy text-xs font-bold text-center border border-soft-blush">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent text-deep-burgundy"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent text-deep-burgundy"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full shadow-glow mt-2"
              icon={LogIn}
              loading={loading}
              type="submit"
            >
              Sign In
            </Button>
          </form>

          <div className="text-center pt-2">
            <p className="text-xs text-muted-text">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-rose-accent hover:text-deep-burgundy">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
