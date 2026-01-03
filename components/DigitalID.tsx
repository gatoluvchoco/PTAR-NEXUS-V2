import React from 'react';
import { User } from '../types';

interface DigitalIDProps {
  user: User;
}

const DigitalID: React.FC<DigitalIDProps> = ({ user }) => {
  // Generate a QR code URL
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.studentId}&color=6d28d9&bgcolor=ffffff`;

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
      
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <i className="fa-solid fa-id-card text-purple-400"></i> My Digital ID
        </h3>
        <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30">Active</span>
      </div>

      <div className="bg-white p-3 rounded-xl mb-4 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
        <img src={qrUrl} alt="Student ID QR" className="w-32 h-32" />
      </div>

      <p className="text-gray-300 font-mono text-lg tracking-wider mb-4">{user.studentId}</p>

      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-medium shadow-lg shadow-purple-900/40 transition-all flex items-center justify-center gap-2">
        <i className="fa-solid fa-expand"></i> Scan at Kiosk
      </button>
    </div>
  );
};

export default DigitalID;