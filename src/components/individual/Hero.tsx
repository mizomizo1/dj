import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      
      <div className="relative z-10 text-center space-y-8 w-full">
        {/* DJ Name/Logo */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] animate-fade-in">
            DJ Seikoh
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm md:text-base tracking-widest text-gray-400">
            <span>Osaka</span>
            <span className="w-1 h-1 rounded-full bg-[#A855F7]"></span>
            <span>HOUSE</span>
            <span className="w-1 h-1 rounded-full bg-[#A855F7]"></span>
            <span>TECHNO</span>
          </div>
        </div>

        {/* Next Gig Box */}
        <div className="mt-12 p-6 md:p-8 border border-[#A855F7]/30 rounded-2xl bg-linear-to-br from-[#A855F7]/10 to-transparent backdrop-blur-sm max-w-md mx-auto">
          <div className="text-xs md:text-sm tracking-widest text-[#A855F7] mb-3">NEXT GIG</div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl">2025.02.11 (Sat)</div>
            <div className="text-lg md:text-xl text-gray-300">@clubasia</div>
            <div className="text-sm md:text-base text-gray-400">24:00–</div>
          </div>
          <button className="mt-4 text-sm md:text-base text-[#22D3EE] hover:text-[#22D3EE]/80 transition-colors flex items-center gap-2 mx-auto">
            <span>詳細を見る</span>
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </button>
        </div>

        {/* CTA Button */}
        <button className="mt-8 w-full max-w-sm h-[52px] md:h-14 bg-linear-to-r from-[#A855F7] to-[#22D3EE] rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#A855F7]/20 mx-auto text-sm md:text-base">
          👉 最新の出演情報はこちら
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </div>
    </section>
  );
}