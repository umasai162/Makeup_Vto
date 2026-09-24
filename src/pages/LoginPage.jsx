import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';

const LoginPage = () => {
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
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-rose-100 shadow-beauty-lg space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-plum-800 to-plum-950 mx-auto flex items-center justify-center text-rose-200 shadow-beauty-sm">
            <Sparkles className="w-6 h-6 text-rose-300" />
          </div>
          <h1 className="font-serif text-2xl font-extrabold text-plum-950">Welcome Back to LAVIX</h1>
          <p className="text-xs text-charcoal-600">Access your saved beauty profiles & AR Try-On studio</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 text-rose-700 text-xs font-semibold text-center border border-rose-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-plum-950 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-sm focus:outline-none focus:border-plum-800"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-plum-950 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-sm focus:outline-none focus:border-plum-800"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full mt-2"
            icon={LogIn}
            loading={loading}
          >
            Sign In
          </Button>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-charcoal-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-plum-800 hover:text-rose-500">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
