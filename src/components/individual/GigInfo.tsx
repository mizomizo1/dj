import { Calendar, MapPin, Ticket } from 'lucide-react';
import ImageWithFallback from '../ImageWithFallback';

export default function GigInfo() {
  const gigs = [
    {
      date: '2025.02.11',
      venue: 'clubasia',
      time: 'Open 23:00 / Start 24:00',
      lineup: 'DJ NEXUS / KENTO / MAYA',
      ticketUrl: '#',
      mapUrl: '#',
      flyer: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
    },
    {
      date: '2025.02.18',
      venue: 'WOMB',
      time: 'Open 22:00 / Start 23:00',
      lineup: 'DJ NEXUS / HIROSHI / AIKO',
      ticketUrl: '#',
      mapUrl: '#',
      flyer: 'https://images.unsplash.com/photo-1571266028243-d220c6d2b3f3?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section className="px-6 md:px-12 py-20">
      <h2 className="text-3xl md:text-4xl tracking-[0.3em] text-center mb-12">
        <span className="border-b-2 border-[#A855F7] pb-2">GIG INFO</span>
      </h2>

      <div className="space-y-8">
        {gigs.map((gig, index) => (
          <div key={index} className="border border-gray-800 rounded-2xl overflow-hidden bg-linear-to-br from-gray-900/50 to-transparent">
            {/* Flyer Image */}
            <ImageWithFallback 
              src={gig.flyer} 
              alt={`${gig.venue} flyer`}
              className="w-full aspect-square object-cover"
            />
            
            {/* Event Details */}
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#22D3EE]">
                <Calendar className="w-5 h-5" />
                <span className="text-xl md:text-2xl">{gig.date}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl">@{gig.venue}</h3>
              
              <div className="text-sm md:text-base text-gray-400 space-y-1">
                <p>{gig.time}</p>
                <p>出演：{gig.lineup}</p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a
                  href={gig.ticketUrl}
                  className="flex items-center justify-center gap-2 h-[48px] md:h-[52px] bg-[#A855F7] rounded-xl hover:bg-[#A855F7]/80 transition-colors text-sm md:text-base"
                >
                  <Ticket className="w-5 h-5" />
                  <span>チケット予約</span>
                </a>
                <a
                  href={gig.mapUrl}
                  className="flex items-center justify-center gap-2 h-[48px] md:h-[52px] border border-gray-700 rounded-xl hover:bg-gray-800 transition-colors text-sm md:text-base"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Google Map</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}