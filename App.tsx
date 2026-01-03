import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UnifiedSearch from './components/UnifiedSearch';
import DigitalID from './components/DigitalID';
import RoomBooking from './components/RoomBooking';
import Analytics from './components/Analytics';
import { User } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isOnline, setIsOnline] = useState(true);

  // Mock User Data based on "Nurul Fatihah"
  const user: User = {
    name: 'Nurul Fatihah',
    studentId: '2024223254',
    avatarUrl: 'https://picsum.photos/200',
    department: 'Faculty of Business & Management'
  };

  return (
    <div className="flex h-screen bg-nexus-dark text-white font-sans overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
      
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-nexus-dark/90 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-blue-900/30 z-0 pointer-events-none"></div>

      <div className="relative z-10 flex w-full h-full">
        {/* Sidebar Navigation */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          
          <Header user={user} isOnline={isOnline} setIsOnline={setIsOnline} />

          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            
            {!isOnline && (
              <div className="w-full bg-red-500/20 border border-red-500/40 text-red-100 p-4 rounded-xl mb-6 flex items-center gap-3 animate-pulse">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <p><strong>Offline Mode Enabled:</strong> Transactions are being cached locally. Sync will occur automatically when connection is restored.</p>
              </div>
            )}

            {/* Dashboard View (Default) */}
            {activeTab === 'dashboard' && (
              <div className="flex flex-col gap-6 max-w-7xl mx-auto">
                {/* Hero / Search Section */}
                <div className="w-full">
                  <div className="mb-2">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Unified Search</h2>
                    <p className="text-gray-400">Access PTAR, KOHA, and Online Databases simultaneously.</p>
                  </div>
                  <UnifiedSearch />
                </div>

                {/* Widgets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Column: Digital ID */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <DigitalID user={user} />
                  </div>

                  {/* Middle Column: Room Booking */}
                  <div className="md:col-span-4 lg:col-span-5">
                    <RoomBooking />
                  </div>

                  {/* Right Column: Analytics */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <Analytics />
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder views for other tabs */}
            {activeTab === 'search' && <UnifiedSearch />}
            {activeTab === 'rooms' && (
                <div className="max-w-4xl mx-auto h-[600px]">
                    <RoomBooking />
                </div>
            )}
            {activeTab === 'digital-id' && (
                <div className="max-w-md mx-auto mt-20">
                    <DigitalID user={user} />
                </div>
            )}
            {activeTab === 'analytics' && (
                <div className="max-w-4xl mx-auto h-[400px] mt-10">
                    <Analytics />
                </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default App;