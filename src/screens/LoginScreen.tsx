import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Bot } from 'lucide-react';
import { autoLogin } from '../lib/auth/autoLogin';
import { Button } from '../components/ui/Button';

export default function LoginScreen() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await autoLogin();
      if (success) {
        navigate('/');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Bot className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold text-primary">Agent Mob</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Demo Login
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            loading={loading}
            icon={LogIn}
            className="w-full"
          >
            {loading ? 'Signing in...' : 'Continue to Demo'}
          </Button>

          <p className="text-sm text-center text-gray-500">
            This is a demo version with automatic authentication
          </p>
        </form>
      </div>
    </div>
  );
}