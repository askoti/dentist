'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function SmileSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-125 rounded-2xl overflow-hidden shadow-2xl group cursor-col-resize">
      {/* "Yellow" Teeth (Before) - Background */}
      <Image 
        src="/3.jpg" 
        alt="Before Teeth Whitening"
        fill
        className="object-cover"
      />

      {/* "White" Teeth (After) - Foreground with Clip-Path */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image 
          src="/2.jpg" 
          alt="After Teeth Whitening"
          fill
          className="object-cover"
        />
      </div>

      {/* The Slider Handle Bar */}
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-blue-500 text-blue-500 font-bold text-xs select-none">
          ↔
        </div>
      </div>

      {/* Hidden Input for Range Control */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPos} 
        onChange={handleSliderChange}
        className="absolute inset-0 z-30 opacity-0 cursor-col-resize w-full h-full"
      />

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-20 bg-black/50 text-white text-[10px] tracking-widest uppercase px-3 py-1 backdrop-blur-sm">Before</div>
      <div className="absolute bottom-4 right-4 z-20 bg-blue-600/50 text-white text-[10px] tracking-widest uppercase px-3 py-1 backdrop-blur-sm">After</div>
    </div>
  );
}