'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface TabData {
  title: string;
  image: string;
  heading: string;
  subheading: string;
  description: string;
}

const tabsData: TabData[] = [
  {
    title: 'Training Methodology',
    image: '/aboutt-3.jpg',
    heading: 'Our trainers are all experienced professionals.',
    subheading: 'Our Training Methodology',
    description: `Our trainers deliver a highly interactive learning experience by incorporating the best-in-class training methodology...`,
  },
  {
    title: 'Primary Objective',
    image: '/aboutt-2.jpg',
    heading: 'Our mission to produce skilled VLSI & Embedded Systems Engineers',
    subheading: 'Our Primary Objective',
    description: `At Maven, we teach the concepts and encourage the students to do experiments and practice extensively...`,
  },
  {
    title: 'Placement Support',
    image: '/aboutt-1.jpg',
    heading: 'A well-deﬁned policy for placement support.',
    subheading: 'Our Placement Support',
    description: `Maven Silicon provides 100% placement assistance (Placement support for 12 months after course completion)...`,
  },
];

const TabsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default tab index

  return (
    <section className="bg-[#f3feff] py-16 px-4 sm:px-6 lg:px-20">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center bg-[#EBF7FF] rounded md:space-x-10 space-x-4 space-y-4 md:space-y-0 mb-6 py-4">
          {tabsData.map((tab, index) => (
            <button
              key={tab.title}
              className={`text-base sm:text-lg font-normal border-white rounded py-3 px-6 transition ${
                activeIndex === index
                  ? 'text-white bg-[#0B96F3] shadow-[0px_4px_16px_0px_#00000026]'
                  : 'text-[#4F4F4F] hover:text-black bg-white'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-auto"
            >
              <Image
                src={tabsData[activeIndex].image}
                alt={tabsData[activeIndex].title}
                width={600}
                height={400}
                className="rounded-3xl w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-[#0B96F3] font-normal mb-1">
                {tabsData[activeIndex].subheading}
              </h4>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {tabsData[activeIndex].heading}
              </h2>
              <p className="mb-6 text-lg">{tabsData[activeIndex].description}</p>
              <button className="bg-[#0B96F3] text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-[#000717]">
                Connect With Us <span className="text-xl">→</span>
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabsSection;
