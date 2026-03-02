import { Phone, Calendar, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 text-white">
      {/* Top Utility Bar */}
      <div className="flex justify-end gap-8 px-6 md:px-12 py-3 text-[10px] tracking-[0.25em] uppercase border-b border-white/10 backdrop-blur-sm font-medium">
        <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
          <Calendar size={13} strokeWidth={1.5} /> Appointments
        </a>
        <a href="tel:4132857114" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
          <Phone size={13} strokeWidth={1.5} /> Call 413.285.7114
        </a>
      </div>

      {/* Main Brand Row */}
      <div className="flex justify-between items-center px-6 md:px-12 py-8">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-serif tracking-tighter leading-none">
            ASKDENTIST
          </h1>
          <span className="text-[9px] tracking-[0.4em] uppercase text-blue-400 font-bold mt-1">
            Gentle & Solution Dentistry
          </span>
        </div>
        
        <button className="p-2 hover:scale-110 transition-transform">
          <Menu size={32} strokeWidth={1} className="text-white" />
        </button>
      </div>
    </nav>
  );
}