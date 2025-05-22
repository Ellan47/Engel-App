import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (type) => {
    const fn = type === 'LOGIN' ? supabase.auth.signInWithPassword : supabase.auth.signUp;
    const { data, error } = await fn({ email, password });
    if (error) alert(error.message);
    else alert('Check your inbox or you are logged in!');
  };

  return (
    <div className="auth">
      <h2>Engel App Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleLogin('LOGIN')}>Login</button>
      <button onClick={() => handleLogin('SIGNUP')}>Sign up</button>
    </div>
  );
}