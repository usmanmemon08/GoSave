import { useState } from 'react';
import Button from '../components/common/Button.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await register(email, password);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white rounded-xl shadow-card border border-black/5 p-6 space-y-4">
        <h1 className="font-display text-2xl font-semibold">Create your account</h1>
        {error && <div className="text-sm text-error">{error}</div>}
        <div>
          <label className="text-sm">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2" />
        </div>
        <Button type="submit" disabled={loading} className="w-full">{loading ? 'Creating…' : 'Register'}</Button>
      </form>
    </div>
  );
}