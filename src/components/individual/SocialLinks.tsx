import { Instagram, Twitter, Music2, MessageCircle, Youtube } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: '#',
      color: 'hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500'
    },
    {
      name: 'TikTok',
      icon: <Music2 className="w-6 h-6" />,
      url: '#',
      color: 'hover:bg-black'
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-6 h-6" />,
      url: '#',
      color: 'hover:bg-black'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      url: '#',
      color: 'hover:bg-red-600'
    },
    {
      name: 'Discord',
      icon: <MessageCircle className="w-6 h-6" />,
      url: '#',
      color: 'hover:bg-indigo-600'
    }
  ];

  return (
    <section className="px-6 md:px-12 py-20">
      <h2 className="text-3xl md:text-4xl tracking-[0.3em] text-center mb-12">
        <span className="border-b-2 border-[#22D3EE] pb-2">FOLLOW ME</span>
      </h2>

      {/* Social Icons Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className={`group aspect-square border border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all ${social.color}`}
          >
            <div className="group-hover:scale-110 transition-transform">
              {social.icon}
            </div>
            <span className="text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* All Links Button */}
      <a
        href="#"
        className="block w-full h-[52px] md:h-14 border border-gray-800 rounded-xl hover:border-[#A855F7] hover:bg-[#A855F7]/10 transition-all items-center justify-center text-sm md:text-base"
      >
        すべてのリンクを見る
      </a>

      {/* LINE Open Chat */}
      <div className="mt-6 p-5 md:p-6 bg-linear-to-br from-[#06C755]/20 to-transparent border border-[#06C755]/30 rounded-2xl text-center">
        <div className="text-2xl md:text-3xl mb-2">💚</div>
        <h3 className="mb-1 text-base md:text-lg">LINEオープンチャット</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">ファンコミュニティに参加</p>
        <a
          href="#"
          className="inline-block px-6 py-2 bg-[#06C755] rounded-full text-sm md:text-base hover:bg-[#06C755]/80 transition-colors"
        >
          参加する
        </a>
      </div>
    </section>
  );
}