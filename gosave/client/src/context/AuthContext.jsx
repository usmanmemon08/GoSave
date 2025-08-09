import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient.js';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    navigate('/dashboard');
  };

  const register = async (email, password) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    navigate('/dashboard');
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);