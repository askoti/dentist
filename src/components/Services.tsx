// src/components/Services.tsx
import { ShieldCheck, Sparkles, Smile, Star } from 'lucide-react';

const services = [
  { title: "General Dentistry", icon: <ShieldCheck size={24} />, desc: "Comprehensive care for your family's oral health." },
  { title: "Invisalign®", icon: <Sparkles size={24} />, desc: "Clear, comfortable, and discreet teeth straightening." },
  { title: "Dental Implants", icon: <Smile size={24} />, desc: "Permanent, natural-looking tooth replacement solutions." },
  { title: "Cosmetic Care", icon: <Star size={24} />, desc: "Teeth whitening and veneers for your perfect smile." },
];

export default function Services() {
  return (
    <section className="bg-[#1A252F] py-32 border-t border-white/5">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-400 text-[10px] tracking-[0.5em] font-bold uppercase">Our Expertise</span>
            <h2 className="text-white text-4xl md:text-5xl font-serif mt-4 leading-tight">
              Modern Solutions for a <br/> Healthier Smile
            </h2>
          </div>
          <button className="border border-white/20 text-white px-8 py-4 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <div key={i} className="bg-[#1A252F] p-12 hover:bg-[#232F3E] transition-colors group cursor-default">
              <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-white text-xl font-serif mb-4">{s.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}