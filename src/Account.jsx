import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [interests, setInterests] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    setLoading(true);
    let { data, error } = await supabase
      .from('profiles')
      .select(`username, interests, location`)
      .eq('id', session.user.id)
      .single();

    if (error) console.warn(error);
    else {
      setUsername(data.username);
      setInterests(data.interests);
      setLocation(data.location);
    }
    setLoading(false);
  }

  async function updateProfile() {
    try {
      setLoading(true);
      const updates = {
        id: session.user.id,
        username,
        interests,
        location,
        updated_at: new Date(),
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
      alert('Profil aktualisiert!');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="account">
      <h2>Profil</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" />
      <input value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="Interessen" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Standort" />
      <button onClick={updateProfile} disabled={loading}>
        {loading ? 'Speichern...' : 'Speichern'}
      </button>
      <button onClick={() => supabase.auth.signOut()}>Abmelden</button>
    </div>
  );
}