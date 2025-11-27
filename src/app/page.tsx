import Hero from '@/components/individual/Hero';
import GigInfo from '@/components/individual/GigInfo';
import MixVideo from '@/components/individual/MixVideo';
import ForOrganizers from '@/components/individual/ForOrganizers';
import FanSpecial from '@/components/individual/FanSpecial';
import SocialLinks from '@/components/individual/SocialLinks';
import Footer from '@/components/individual/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-2xl mx-auto">
        <Hero />
        <GigInfo />
        <MixVideo />
        <ForOrganizers />
        <FanSpecial />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
}