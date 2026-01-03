import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AnalyticsData } from '../types';

const data: AnalyticsData[] = [
  { name: 'Sci-Fi', value: 400 },
  { name: 'History', value: 300 },
  { name: 'Tech', value: 550 },
  { name: 'Biz', value: 200 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const Analytics: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl h-full flex flex-col">
       <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold flex items-center gap-2">
            <i className="fa-solid fa-chart-pie text-cyan-400"></i> Live Analytics
        </h3>
        <select className="bg-black/30 text-xs text-white border border-white/10 rounded px-2 py-1 outline-none">
            <option>Most Borrowed</option>
            <option>Occupancy</option>
        </select>
      </div>

      <div className="flex-1 w-full min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.1)'}}
                contentStyle={{ backgroundColor: '#1e293b', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2">Real-time data update: 2 mins ago</p>
    </div>
  );
};

export default Analytics;