
import React from 'react';

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userEmail, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">NovaAuth</h1>
          </div>
          <button 
            onClick={onLogout}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors border border-white/10"
          >
            Sign Out
          </button>
        </header>

        <main>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 mb-8 shadow-xl">
            <h2 className="text-4xl font-extrabold mb-4">Hello, {userEmail.split('@')[0]}!</h2>
            <p className="text-blue-100 text-lg max-w-xl">
              You have successfully authenticated into the NovaAuth ecosystem. This is the start of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
                <div className="h-10 w-10 bg-white/10 rounded-full mb-4"></div>
                <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
