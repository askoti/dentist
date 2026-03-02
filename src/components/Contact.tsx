export default function Contact() {
  return (
    <section id="booking" className="bg-[#1A252F] py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <span className="text-blue-400 text-[10px] tracking-[0.5em] font-bold uppercase">Ready to start?</span>
            <h2 className="text-white text-5xl md:text-6xl font-serif leading-tight">
              Book your <br/> appointment <br/> today.
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
              Take the first step toward the smile you’ve always wanted. Our team will contact you within 24 hours to confirm.
            </p>
          </div>

          {/* Right: The Modern Form */}
          <div className="lg:w-1/2 bg-white/5 p-10 backdrop-blur-sm border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-blue-500 outline-none transition-colors font-light" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Phone Number</label>
                  <input type="tel" placeholder="(123) 456-7890" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-blue-500 outline-none transition-colors font-light" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Service of Interest</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-blue-500 outline-none transition-colors font-light appearance-none">
                  <option className="bg-[#1A252F]">General Checkup</option>
                  <option className="bg-[#1A252F]">Invisalign® Consultation</option>
                  <option className="bg-[#1A252F]">Dental Implants</option>
                  <option className="bg-[#1A252F]">Teeth Whitening</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Message (Optional)</label>
                <textarea rows={3} placeholder="Tell us how we can help..." className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-blue-500 outline-none transition-colors font-light resize-none"></textarea>
              </div>

              <button className="w-full bg-white text-black py-5 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 mt-4">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}