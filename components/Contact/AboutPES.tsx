'use client';
import Image from 'next/image';

interface Highlight {
  title: string;
  subtitle: string;
  source: string;
  description: string;
  image: string;
}

const highlights: Highlight[] = [
  {
    title: '',
    subtitle: 'University in Karnataka',
    source: '*KSURF',
    description: 'Top-ranked university in Karnataka, known for excellence in education and research.',
    image: '/contact/c1.png',
  },
  {
    title: '',
    subtitle: 'Ranked University in India',
    source: '*Outlook',
    description: 'Ranked #6 in India, excelling in academics, research, and innovation.',
    image: '/contact/c2.png',
  },
  {
    title: 'SINCE 1973',
    subtitle: 'Pioneering Excellence',
    source: 'MTech',
    description: 'Leading innovation and academic excellence for over five decades since 1973.',
    image: '/contact/c3.png',
  },
  {
    title: '',
    subtitle: 'Top 25 MTech College in India',
    source: '*CareerIndia',
    description: 'Recognized among the top 25 M.Tech colleges in India for academic excellence and research.',
    image: '/contact/c4.png',
  },
  {
    title: '',
    subtitle: '2000+ Research Papers Published',
    source: 'MTech',
    description: 'Over 2000 research papers published, showcasing innovation and academic excellence.',
    image: '/contact/c5.png',
  },
];

const AboutPES: React.FC = () => {
  return (
    <section className="bg-[linear-gradient(315.61deg,_#FFFFFF_53.51%,_#F2FAFF_91.44%)] text-white md:py-16 py-10 px-2 md:px-5">
      <div className="container p-0 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-normal mb-5 text-black">
          About <span className="text-[#0B96F3]">PES</span>
        </h2>
        <p className="mb-12 text-[#4F4F4F] text-center">
          PES University was established in 2013, while People’s Education Society was established in 1973.
          PESU is a leading private University in India, focused on creating globally competent and ethically
          strong professionals. It offers a wide range of programs in fields like Engineering, Management,
          Life Sciences, and more, with state-of-the-art infrastructure and a focus on student development.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="border border-[#0B96F300] rounded-xl p-10 text-left bg-[#062A45] shadow-xl transition-shadow duration-300 hover:scale-105"
            >
              <div className="flex items-start md:gap-10 gap-5">
                {item.image ? (
                  <div className="relative w-30 h-20 mt-1">
                    <Image
                      src={item.image}
                      alt="icon"
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                ) : (
                  <h3 className="text-7xl font-bold text-white">{item.title}</h3>
                )}
                <div>
                  <h4 className="text-xl text-[#0B96F3]">{item.subtitle}</h4>
                  <p className="text-sm mt-2">{item.source}</p>
                  <p className="mt-5 md:w-2/3 w-full">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPES;
