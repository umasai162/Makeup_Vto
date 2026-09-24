import api from './api';

export const authService = {
  login: async (email, password) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/auth/login', { email, password });
      await new Promise(res => setTimeout(res, 800)); // Simulating network latency
      const mockUser = {
        id: 'user-101',
        name: email.split('@')[0] || 'Sophia Vance',
        email: email,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        joinedDate: '2026-01-15',
      };
      localStorage.setItem('lavix_token', 'mock_jwt_token_lavix_2026');
      localStorage.setItem('lavix_user', JSON.stringify(mockUser));
      return { success: true, user: mockUser };
    } catch (err) {
      return { success: false, message: 'Invalid credentials. Please try again.' };
    }
  },

  register: async (name, email, password) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/auth/register', { name, email, password });
      await new Promise(res => setTimeout(res, 800));
      const mockUser = {
        id: 'user-101',
        name: name || 'Sophia Vance',
        email: email,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        joinedDate: new Date().toISOString(),
      };
      localStorage.setItem('lavix_token', 'mock_jwt_token_lavix_2026');
      localStorage.setItem('lavix_user', JSON.stringify(mockUser));
      return { success: true, user: mockUser };
    } catch (err) {
      return { success: false, message: 'Registration failed. Email may already be in use.' };
    }
  },

  logout: () => {
    localStorage.removeItem('lavix_token');
    localStorage.removeItem('lavix_user');
  },

  getCurrentUser: () => {
    const saved = localStorage.getItem('lavix_user');
    return saved ? JSON.parse(saved) : null;
  }
};
