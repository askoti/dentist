import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dark Overlay for Luxury Look */}
      <div className="absolute inset-0 bg-black/45 z-10" />
      
      {/* Background Image - Optimized by Next.js */}
      <Image 
        src="/1.jpg" 
        alt="AskDentist Modern Dental Clinic"
        fill // This makes it cover the parent section
        className="object-cover" // Equivalent to object-cover in CSS
        priority // Tells Next.js to load this immediately (LCP optimization)
        quality={90} // High quality for that luxury feel
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <p className="text-white/90 text-[11px] md:text-xs tracking-[0.5em] uppercase mb-6 font-light">
          Premier Dentist in West Springfield
        </p>
        <h2 className="text-white text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-10 italic">
          smile for a <br/> lifetime
        </h2>
        <button className="px-12 py-5 border border-white/40 bg-white/5 backdrop-blur-md text-white text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
}