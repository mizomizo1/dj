import { Lock, Gift, Music, DollarSign } from 'lucide-react';

export default function FanSpecial() {
  const specials = [
    {
      icon: <Music className="w-6 h-6" />,
      title: '限定MIX（フォロワー限定）',
      description: 'Deep Set 60min',
      color: 'from-[#A855F7]'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: '曲リクエスト（¥500〜）',
      description: 'あなたの曲を次のセットに',
      color: 'from-[#22D3EE]'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: '来場スタンプカード',
      description: '5回来場で限定MIXプレゼント',
      color: 'from-[#A855F7]'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'PASSWORD AREA',
      description: 'Instagramストーリーでパス配布',
      color: 'from-[#22D3EE]'
    }
  ];

  return (
    <section className="px-6 md:px-12 py-20 bg-linear-to-b from-transparent via-[#22D3EE]/5 to-transparent">
      <h2 className="text-3xl md:text-4xl tracking-[0.3em] text-center mb-12">
        <span className="border-b-2 border-[#A855F7] pb-2">FAN SPECIAL</span>
      </h2>

      <div className="space-y-4">
        {specials.map((special, index) => (
          <a
            key={index}
            href="#"
            className="group block p-6 md:p-8 border border-gray-800 rounded-2xl hover:border-[#A855F7]/50 transition-all bg-linear-to-br from-gray-900/30 to-transparent hover:shadow-lg hover:shadow-[#A855F7]/10"
          >
            <div className="flex items-start gap-4">
              <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-linear-to-br ${special.color} to-transparent flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {special.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl mb-1 group-hover:text-[#A855F7] transition-colors">
                  {special.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">{special.description}</p>
              </div>
              <div className="text-gray-600 group-hover:text-[#A855F7] transition-colors text-lg md:text-xl">
                ▶
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Password Input Section */}
      <div className="mt-8 p-6 md:p-8 border-2 border-dashed border-gray-800 rounded-2xl">
        <div className="flex items-center gap-2 text-[#22D3EE] mb-4">
          <Lock className="w-5 h-5" />
          <span className="tracking-wider text-sm md:text-base">SECRET AREA</span>
        </div>
        <input
          type="password"
          placeholder="パスワードを入力"
          className="w-full h-12 md:h-[52px] px-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-[#A855F7] transition-colors text-sm md:text-base"
        />
        <button className="mt-3 w-full h-12 md:h-[52px] bg-linear-to-r from-[#A855F7]/20 to-[#22D3EE]/20 border border-[#A855F7]/30 rounded-xl hover:border-[#A855F7]/50 transition-colors text-sm md:text-base">
          ログイン
        </button>
      </div>
    </section>
  );
}