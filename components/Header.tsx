import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
  isOnline: boolean;
  setIsOnline: (status: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ user, isOnline, setIsOnline }) => {
  return (
    <header className="h-20 px-6 flex items-center justify-between bg-nexus-dark/60 backdrop-blur-md sticky top-0 z-10 border-b border-nexus-glassBorder">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back, <span className="text-purple-400">{user.name}</span>
        </h1>
        <p className="text-sm text-gray-400">Bachelor of Information Systems • {user.studentId}</p>
      </div>

      <div className="flex items-center gap-6">
        {/* System Status Toggle (Simulating Network State) */}
        <div 
          onClick={() => setIsOnline(!isOnline)}
          className={`cursor-pointer px-4 py-2 rounded-full border flex items-center gap-2 transition-all duration-300 ${
            isOnline 
              ? 'bg-green-500/10 border-green-500/30 text-green-400' 
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
          <span className="text-sm font-semibold">{isOnline ? 'System Online' : 'Offline Mode'}</span>
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-nexus-glassBorder">
           <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors relative">
            <i className="fa-solid fa-bell"></i>
            <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full"></span>
          </button>
          
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-10 h-10 rounded-full border-2 border-purple-500/50 object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;