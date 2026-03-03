"use client"; // Add this at the very top

import { useState, useEffect } from 'react';
import { getSchedule } from '@/lib/getSchedule';
import { Circle } from 'lucide-react';

export default function SchedulePage() {
  const [schedule, setSchedule] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
    async function loadData() {
      const data = await getSchedule();
      setSchedule(data);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center font-serif italic text-gray-400">Loading Clinic Schedule...</div>;

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#1A252F]">
      {/* Hero Section */}
      <div className="pt-44 pb-32 px-6 text-center bg-[#1A252F] text-white">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-tight">
          Clinical <span className="italic opacity-80">Availability</span>
        </h1>
        <div className="w-16 h-[1px] bg-blue-400 mx-auto mb-6"></div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold">
          Precision Care • Modern Solutions
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10 -mt-16 mb-20">
        
        <div className="flex items-center justify-between mb-4 px-2 text-gray-400">
          <div className="flex items-center gap-2">
            <Circle size={8} className="fill-green-500 text-green-500 animate-pulse" />
            <span className="text-[9px] tracking-[0.2em] uppercase font-bold">Live Office Sync</span>
          </div>
        </div>
        
        {/* --- DESKTOP TABLE (Hidden on Mobile) --- */}
        <div className="hidden md:block bg-white shadow-xl border-2 border-gray-300 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-300">
                <th className="p-6 w-32 text-[10px] tracking-widest font-bold text-blue-600 uppercase border-r-2 border-gray-300">Time</th>
                {days.map(day => (
                  <th key={day} className="p-6 text-[10px] tracking-widest font-bold text-[#1A252F] uppercase border-r-2 border-gray-300 last:border-r-0">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-gray-300">
              {schedule.map((row, i) => (
                <tr key={i} className="group odd:bg-white even:bg-gray-50/30">
                  <td className="p-6 text-center bg-gray-100/40 border-r-2 border-gray-300 text-[11px] font-bold text-gray-500">{row.Time}</td>
                  {days.map((day, idx) => {
                    const cell = row[day];
                    return (
                      <td key={idx} className="p-6 text-xs border-r-2 border-gray-300 last:border-r-0">
                        {cell ? (
                          <div className="flex flex-col">
                            <span className="font-serif italic text-sm text-[#1A252F]">{cell}</span>
                            <span className="text-[8px] text-blue-500 font-bold uppercase mt-1">Confirmed</span>
                          </div>
                        ) : <span className="text-gray-200">—</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- MOBILE VIEW (Hidden on Desktop) --- */}
        <div className="md:hidden space-y-6">
          {schedule.map((row, i) => (
            <div key={i} className="bg-white rounded-xl border-2 border-gray-300 shadow-md overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b-2 border-gray-300 flex justify-between items-center text-blue-600 font-bold text-[10px] uppercase">
                <span>{row.Time}</span>
                <div className="h-1 w-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="px-4 pb-2 divide-y divide-gray-300">
                {days.map((day) => {
                  const appointment = row[day];
                  return (
                    <div key={day} className={`flex justify-between items-center py-4 px-2 border-l-4 ${appointment ? 'border-l-blue-500 bg-blue-50/10' : 'border-l-transparent bg-white'}`}>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-gray-400 font-bold mb-1">{day}</span>
                        <span className={`text-xs ${appointment ? 'font-serif italic text-[#1A252F] font-bold' : 'text-gray-200'}`}>
                          {appointment || 'Available'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}