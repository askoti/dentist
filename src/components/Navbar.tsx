import { Phone, Calendar, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50">
      {/* Top Utility Bar - Clean White/Transparent */}
      <div className="flex justify-end px-6 md:px-12 py-3 text-[10px] tracking-[0.25em] uppercase border-b border-white/10 backdrop-blur-md bg-white/5 font-medium text-white/90">
        <a href="tel:4132857114" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone size={12} strokeWidth={1.5} /> Call 413.285.7114
        </a>
      </div>

      {/* Main Brand Row */}
      <div className="flex justify-between items-center px-6 md:px-12 py-8">
        <Link href="/" className="flex flex-col group">
          <h1 className="text-2xl md:text-3xl font-serif tracking-tighter leading-none text-white group-hover:opacity-80 transition-opacity">
            ASKDENTIST
          </h1>
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/60 font-bold mt-1">
            Gentle & Solution Dentistry
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          {/* Calendar moved next to Hamburger for quick access */}
          <Link href="/appointments" className="text-white/90 hover:text-white transition-colors">
            <Calendar size={24} strokeWidth={1} />
          </Link>
          
        </div>
      </div>
    </nav>
  );
}