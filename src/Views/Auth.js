import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../services/user';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>{error}</h1>
      <h1>Sign In</h1>
      {error && <div>{error}</div>}
      <form className="auth" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
