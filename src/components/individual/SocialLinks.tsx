import { Music2 } from 'lucide-react';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialLinks() {
  const socials = [
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-6 h-6" />,
      url: 'https://www.instagram.com/04hokies12?igsh=YmRkMGlqc2VjbGRz',
      color: 'hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500'
    },
    {
      name: 'TikTok',
      icon: <Music2 className="w-6 h-6" />,
      url: '#',
      color: 'hover:bg-black'
    },
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
    </section>
  );
}