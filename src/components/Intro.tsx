import Image from 'next/image';

export default function Intro() {
  return (
    <section className="bg-[#999999] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Left: Dark Mode Text Content */}
          <div className="lg:w-1/2 text-left space-y-8 z-20">
            <span className="text-blue-800 text-[10px] tracking-[0.5em] font-bold uppercase">
              Our Philosophy
            </span>
            <h2 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              Creating Beautiful <br/> Smiles for the Family
            </h2>
            <p className="text-white text-lg font-light leading-relaxed max-w-lg">
              We look forward to welcoming you to our family. Our office is warm and inviting. 
              You will always be greeted with a smile and treated with utmost dignity and respect.
            </p>
            <div className="pt-4">
               <button className="text-white text-[10px] tracking-widest uppercase border-b border-blue-600 pb-2 hover:text-blue-400 transition-all">
                 Learn more about our team
               </button>
            </div>
          </div>

          {/* Right: The High-End Visual */}
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Ambient Glow Effect */}
            <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
            
            <div className="relative z-10 w-full max-w-sm aspect-square">
              <Image 
                src="/tooth-render.png" 
                alt="AskDentist 3D Dental Excellence" 
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}