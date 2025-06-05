// src/pages/Login/Login.tsx
import Layout from '../../components/ui/Layout';
import Title from './components/Title';
import TextInput from './components/TextInput';
import SignInButton from './components/SignInButton';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      alert('Login successful');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center justify-center w-full max-w-sm space-y-6 bg-[--color-card-bg] p-8 border border-[--color-text] text-[--color-text] shadow-md"
    >
      <Title />
      <TextInput
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SignInButton />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>

  );
}
