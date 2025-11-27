import { Briefcase, MapPin, DollarSign, Music } from 'lucide-react';

export default function ForOrganizers() {
  const venues = [
    'clubasia',
    'WOMB',
    'ageHa (Memory)',
    'Circus Tokyo',
    'Contact',
    'Sound Museum Vision'
  ];

  const genres = ['House', 'Techno', 'HipHop', 'Open Format'];

  return (
    <section className="px-6 md:px-12 py-20">
      <h2 className="text-3xl md:text-4xl tracking-[0.3em] text-center mb-4">
        <span className="border-b-2 border-[#A855F7] pb-2">FOR ORGANIZERS</span>
      </h2>
      <p className="text-center text-gray-400 text-sm md:text-base mb-12">ブッキングのご依頼</p>

      <div className="space-y-6">
        {/* Genre */}
        <div className="p-6 md:p-8 border border-gray-800 rounded-2xl bg-linear-to-br from-gray-900/30 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-5 h-5 text-[#A855F7]" />
            <h3 className="text-lg md:text-xl">出演ジャンル</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-4 py-2 bg-[#A855F7]/20 border border-[#A855F7]/30 rounded-full text-sm md:text-base"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="p-6 md:p-8 border border-gray-800 rounded-2xl bg-linear-to-br from-gray-900/30 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#22D3EE]" />
            <h3 className="text-lg md:text-xl">出演可能エリア</h3>
          </div>
          <p className="text-gray-300 text-sm md:text-base">東京・神奈川・千葉（遠征応相談）</p>
        </div>

        {/* Fee */}
        <div className="p-6 md:p-8 border border-gray-800 rounded-2xl bg-linear-to-br from-gray-900/30 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-5 h-5 text-[#A855F7]" />
            <h3 className="text-lg md:text-xl">出演料</h3>
          </div>
          <p className="text-2xl md:text-3xl mb-2">¥20,000〜</p>
          <p className="text-sm md:text-base text-gray-400">イベント規模により応相談</p>
        </div>

        {/* Past Venues */}
        <div className="p-6 md:p-8 border border-gray-800 rounded-2xl bg-linear-to-br from-gray-900/30 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-[#22D3EE]" />
            <h3 className="text-lg md:text-xl">主な実績</h3>
          </div>
          <ul className="space-y-2">
            {venues.map((venue) => (
              <li key={venue} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]"></span>
                <span>{venue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Booking Button */}
        <a
          href="#"
          className="block w-full h-[52px] md:h-[56px] bg-gradient-to-r from-[#A855F7] to-[#22D3EE] rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#A855F7]/20 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          <span>📩</span>
          <span>ブッキングフォーム</span>
        </a>
      </div>
    </section>
  );
}