import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fa-table-columns', label: 'Dashboard' },
    { id: 'search', icon: 'fa-magnifying-glass', label: 'Unified Search' },
    { id: 'rooms', icon: 'fa-people-roof', label: 'Room Booking' },
    { id: 'digital-id', icon: 'fa-id-card', label: 'My Digital ID' },
    { id: 'analytics', icon: 'fa-chart-line', label: 'Analytics' },
  ];

  return (
    <aside className="w-20 lg:w-64 h-full flex flex-col transition-all duration-300 bg-nexus-dark/80 backdrop-blur-xl border-r border-nexus-glassBorder z-20">
      <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-nexus-glassBorder">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
          <i className="fa-solid fa-layer-group text-white text-xl"></i>
        </div>
        <span className="hidden lg:block ml-3 font-bold text-xl text-white tracking-wide">
          PTAR <span className="text-purple-400">NEXUS</span>
        </span>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-2 px-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
              activeTab === item.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <i className={`fa-solid ${item.icon} w-6 text-center text-lg ${activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-purple-400'}`}></i>
            <span className="hidden lg:block ml-3 font-medium">{item.label}</span>
            
            {activeTab === item.id && (
              <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-nexus-glassBorder">
        <button className="flex items-center justify-center lg:justify-start w-full p-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors">
          <i className="fa-solid fa-arrow-right-from-bracket w-6 text-center"></i>
          <span className="hidden lg:block ml-3 font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;