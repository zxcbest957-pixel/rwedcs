
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { User } from './types';

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
