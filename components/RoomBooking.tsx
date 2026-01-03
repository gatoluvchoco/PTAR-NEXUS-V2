import React from 'react';
import { Room } from '../types';

const RoomBooking: React.FC = () => {
  const rooms: Room[] = [
    { id: '1', name: 'Discussion Room 1', capacity: 4, status: 'Occupied', nextAvailable: '14:00 PM' },
    { id: '2', name: 'Discussion Room 2', capacity: 6, status: 'Available' },
    { id: '3', name: 'Quiet Pod A', capacity: 1, status: 'Available' },
    { id: '4', name: 'Media Room', capacity: 10, status: 'Maintenance' },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold flex items-center gap-2">
            <i className="fa-solid fa-people-roof text-pink-400"></i> Smart Room Booking
        </h3>
        <button className="text-xs text-purple-300 hover:text-white transition-colors">View All</button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full shadow-lg ${
                    room.status === 'Available' ? 'bg-green-500 shadow-green-500/50' : 
                    room.status === 'Occupied' ? 'bg-red-500 shadow-red-500/50' : 'bg-gray-500'
                }`}></div>
                <div>
                    <h4 className="text-white text-sm font-medium">{room.name}</h4>
                    <p className="text-xs text-gray-400">Cap: {room.capacity} pax</p>
                </div>
            </div>

            {room.status === 'Available' ? (
                 <button className="px-3 py-1.5 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg text-xs font-semibold hover:bg-green-500 hover:text-black transition-all">
                    Book Now
                 </button>
            ) : room.status === 'Occupied' ? (
                <span className="text-xs text-red-400 font-medium">Until {room.nextAvailable}</span>
            ) : (
                <span className="text-xs text-gray-500 font-medium">Closed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomBooking;