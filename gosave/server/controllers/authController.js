import { getSupabase } from '../config/supabase.js';
import { signToken } from '../utils/jwt.js';

export async function register(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return res.status(400).json({ error: error.message });
    const token = signToken({ sub: data.user.id, email: data.user.email });
    return res.status(201).json({ token, user: { id: data.user.id, email: data.user.email } });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) return res.status(401).json({ error: error?.message || 'Invalid credentials' });
    const token = signToken({ sub: data.user.id, email: data.user.email });
    return res.json({ token, user: { id: data.user.id, email: data.user.email } });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

export async function logout(_req, res) {
  return res.json({ success: true });
}

export async function profile(req, res) {
  return res.json({ user: req.user });
}