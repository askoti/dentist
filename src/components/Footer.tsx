// Update your globals.css with this darker hex
// --dental-dark: #1A252F; 

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="space-y-6">
            <h3 className="text-3xl font-serif tracking-tighter">ASKDENTIST</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-light">
              Redefining the dental experience through 
              boutique care and modern precision.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[12px] tracking-[0.4em] uppercase font-bold text-blue-700">Contact</h4>
            <div className="text-slate-700 space-y-4 text-sm font-light">
              <p className="hover:text-white transition cursor-pointer">413.285.7114</p>
              <p className="leading-loose">
                123 Riverdale St,<br/> 
                West Springfield, MA 01089
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[12px] tracking-[0.4em] uppercase font-bold text-blue-700">Hours</h4>
            <div className="text-slate-700 text-sm font-light space-y-3">
              <p className="flex justify-between"><span>Mon - Thu</span> <span className="text-white">8am - 5pm</span></p>
              <p className="flex justify-between"><span>Friday</span> <span className="text-white">8am - 2pm</span></p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end">
             <button className="bg-black text-white px-8 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-blue-500 hover:text-white transition-all w-full lg:w-auto">
               Book Online
             </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex justify-between text-[9px] tracking-[0.3em] text-slate-900 uppercase">
          <p>© 2026 ASKDENTIST // Build and Designed by <strong>Kastriot Aliu</strong></p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}