import { Play, Music2 } from 'lucide-react';
import ImageWithFallback from "../ImageWithFallback";

export default function MixVideo() {
  const mixes = [
    {
      title: 'Night Drive Set',
      duration: '45min',
      thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop',
      url: '#'
    },
    {
      title: 'Deep Techno Mix',
      duration: '60min',
      thumbnail: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
      url: '#'
    },
    {
      title: 'House Classics',
      duration: '52min',
      thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop',
      url: '#'
    },
    {
      title: 'Sunrise Session',
      duration: '38min',
      thumbnail: 'https://images.unsplash.com/photo-1571266028243-d220c6d2b3f3?w=300&h=300&fit=crop',
      url: '#'
    }
  ];

  return (
    <section className="px-6 md:px-12 py-20 bg-linear-to-b from-transparent via-[#A855F7]/5 to-transparent">
      <h2 className="text-3xl md:text-4xl tracking-[0.3em] text-center mb-12">
        <span className="border-b-2 border-[#22D3EE] pb-2">MIX & TRANSITION</span>
      </h2>

      {/* Latest Mix Feature */}
      <div className="mb-8 p-6 md:p-8 border border-[#22D3EE]/30 rounded-2xl bg-linear-to-br from-[#22D3EE]/10 to-transparent">
        <div className="flex items-center gap-2 text-[#22D3EE] mb-3">
          <Music2 className="w-5 h-5" />
          <span className="text-sm md:text-base tracking-wider">最新MIX</span>
        </div>
        <h3 className="text-xl md:text-2xl mb-2">Night Drive Set – 45min</h3>
        <button className="mt-3 flex items-center gap-2 text-sm md:text-base hover:text-[#22D3EE] transition-colors">
          <Play className="w-4 h-4" />
          <span>再生する</span>
        </button>
      </div>

      {/* Mix Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {mixes.map((mix, index) => (
          <a
            key={index}
            href={mix.url}
            className="group relative aspect-square rounded-xl overflow-hidden"
          >
            <ImageWithFallback 
              src={mix.thumbnail}
              alt={mix.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
              <p className="text-sm md:text-base mb-1">{mix.title}</p>
              <p className="text-xs md:text-sm text-gray-400">{mix.duration}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#A855F7]/90 flex items-center justify-center">
                <Play className="w-6 h-6 md:w-8 md:h-8" fill="white" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Transition Clips Link */}
      <a
        href="#"
        className="block p-5 md:p-6 border border-gray-800 rounded-xl hover:border-[#A855F7]/50 transition-colors text-center"
      >
        <div className="text-sm md:text-base text-gray-400 mb-1">🎚 つなぎ動画まとめ</div>
        <div className="text-lg md:text-xl">25本のTransition Clips</div>
      </a>
    </section>
  );
}