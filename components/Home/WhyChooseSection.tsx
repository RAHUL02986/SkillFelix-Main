// components/WhyChooseUs.tsx
import Image from 'next/image';

const features: { title: string; icon: string; hoverBg: string }[] = [
  { title: '1:1 Mentor Support', icon: '/g1.svg', hoverBg: '#E3F2FD' },
  { title: 'Practice Tests', icon: '/g2.svg', hoverBg: '#E8F5E9' },
  { title: 'Hands on Training', icon: '/g3.svg', hoverBg: '#FFF3E0' },
  { title: '1:1 Mentor Support', icon: '/g1.svg', hoverBg: '#FFF3E0' },
  { title: 'Practice Tests', icon: '/g2.svg', hoverBg: '#F3E5F5' },
  { title: 'Hands on Training', icon: '/g3.svg', hoverBg: '#E0F7FA' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-[#f6fbff] to-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-normal mb-12 text-[#0B96F3]">
          Why choose Us <span className="text-black">?</span>
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 relative z-10">
         {features.map((feature, index) => (
  <div
    key={index}
    className="relative bg-white border border-[#0B96F3] rounded-xl shadow-[0_4px_24px_-10px_rgba(8,60,96,0.38)] md:p-16 p-10 flex flex-col items-center text-center group transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_-10px_rgba(8,60,96,0.4)]"
    style={{
      transition: 'background-color 0.3s ease',
      backgroundColor: undefined,
    }}
  >
    <div
      className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
      style={{ backgroundColor: feature.hoverBg }}
    />
    <div className="text-center z-10">
      <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
        <Image src={feature.icon} alt={feature.title} width={97} height={97} />
      </div>
      <p className="font-normal text-xl text-[#1a1a1a] group-hover:text-black transition-colors duration-300">
        {feature.title}
      </p>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
