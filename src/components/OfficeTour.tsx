import SmileSlider from './SmileSlider';

export default function OfficeTour() {
  return (
    <section className="bg-white py-24 overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8">
            <span className="text-blue-500 text-[10px] tracking-[0.5em] font-bold uppercase">Clinical Excellence</span>
            <h2 className="text-slate-900 text-4xl md:text-5xl font-serif leading-tight">
              Transform Your Smile <br/> with Advanced Whitening
            </h2>
            <p className="text-slate-500 font-light leading-relaxed text-lg italic">
              "We don't just clean teeth; we restore confidence. Our professional whitening systems provide visible results in a single visit."
            </p>
            <div className="pt-4 flex items-center gap-4">
               <div className="h-px w-12 bg-blue-500" />
               <p className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Interactive Result Gallery</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <SmileSlider />
          </div>

        </div>
      </div>
    </section>
  );
}