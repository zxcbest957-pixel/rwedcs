
import React, { useState } from 'react';
import LoginForm from './components/LoginForm.tsx';
import Dashboard from './components/Dashboard.tsx';
import { User } from './types.ts';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string) => {
    setUser({
      email,
      name: email.split('@')[0],
      isLoggedIn: true
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen">
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <Dashboard userEmail={user.email} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
