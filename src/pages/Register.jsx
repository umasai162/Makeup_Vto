import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, User, Mail, Lock, UserPlus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setError('');
    const res = await register(name, email, password);
    setLoading(false);
    if (res.success) {
      navigate('/analyze');
    } else {
      setError(res.message || 'Failed to create account.');
    }
  };

  return (
    <div className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 items-center max-w-7xl mx-auto py-8 px-4 animate-fade-in gap-8">
      {/* Left Column: Visual */}
      <div className="lg:col-span-6 hidden lg:block">
        <div className="relative h-[580px] rounded-3xl overflow-hidden border border-border-pink shadow-beauty-lg bg-deep-burgundy p-10 flex flex-col justify-between text-cream">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
            alt="LAVIX Beauty Visual"
            className="absolute inset-0 w-full h-full object-cover opacity-65 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-burgundy via-deep-burgundy/40 to-transparent" />

          <div className="relative z-10 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-dark-wine flex items-center justify-center text-ai-accent border border-rose-accent/40 shadow-glow">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-extrabold tracking-widest uppercase text-soft-blush">JOIN LAVIX ARCHITECTURE</span>
          </div>

          <div className="relative z-10 space-y-2">
            <h2 className="text-3xl font-serif font-extrabold text-white">Unlock Your AI Beauty Profile</h2>
            <p className="text-xs text-light-blush/90 leading-relaxed max-w-md">
              Create a free account to save your AR looks, shade matches, and beauty coach advice.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Sign Up Form */}
      <div className="lg:col-span-6 max-w-md mx-auto w-full">
        <div className="bg-warm-white rounded-3xl p-8 border border-border-pink shadow-beauty-lg space-y-5">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-deep-burgundy mx-auto flex items-center justify-center text-ai-accent shadow-glow">
              <Sparkles className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-extrabold text-deep-burgundy">Create Account</h1>
            <p className="text-xs text-muted-text">Join LAVIX AI Beauty Studio</p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-light-blush text-deep-burgundy text-xs font-bold text-center border border-soft-blush">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent text-deep-burgundy"
                  placeholder="Sophia Vance"
                />
              </div>
            </div>

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

            <div className="space-y-1">
              <label className="text-xs font-bold text-deep-burgundy uppercase tracking-wider">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent text-deep-burgundy"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full shadow-glow mt-2"
              icon={UserPlus}
              loading={loading}
              type="submit"
            >
              Create Free Account
            </Button>
          </form>

          <div className="text-center pt-1">
            <p className="text-xs text-muted-text">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-rose-accent hover:text-deep-burgundy">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
