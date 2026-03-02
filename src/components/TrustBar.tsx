export default function TrustBar() {
  const partners = [
    "Invisalign", "CEREC", "ADA", "CareCredit", 
    "Delta Dental", "Cigna", "Aetna", "Humana", 
    "MetLife", "Straumann", "Nobel Biocare"
  ];

  // Double the logos for the infinite loop
  const displayPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-16 border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-slate-400 font-bold">
          Recognized Excellence & Partners
        </p>
      </div>

      {/* The container that hides the overflow */}
      <div className="relative w-full overflow-hidden logo-fade-edge">
        {/* This div now uses the manual CSS class we just made */}
        <div className="animate-infinite-scroll flex items-center gap-20 md:gap-32 py-4">
          {displayPartners.map((brand, index) => (
            <span 
              key={`${brand}-${index}`} 
              className="text-2xl md:text-3xl font-serif font-bold text-slate-900 grayscale opacity-40 hover:opacity-100 transition-all duration-500 cursor-default uppercase tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}