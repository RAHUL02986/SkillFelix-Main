import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface CoreValue {
  icon: string;
  title: string;
  bgColor?: string;
}

const coreValuesData: { values: CoreValue[] } = {
  values: [
    {
      icon: "/coreicon.svg",
      title: "We are an excellent team",
      bgColor: ""
    },
    {
      icon: "/coreicon.svg",
      title: "We collaborate with customers.",
      bgColor: ""
    },
    {
      icon: "/coreicon.svg",
      title: "We innovate to grow.",
      bgColor: ""
    },
    {
      icon: "/coreicon.svg",
      title: "We are an excellent team",
      bgColor: ""
    }
  ]
};

const CoreValuesSection: React.FC = () => {
  return (
    <section className="md:px-5 md:py-16 px-2 py-10 rounded-lg bg-gradient-to-b from-[#f6fbff] to-white" >
      <div className="container px-0">
        <div className='lg:flex justify-between items-center gap-10'>
          <div className='w-full lg:w-auto'>
            <Image src='/values.png' alt='coreicon' height={500} width={500} />
          </div>
          <div>
            <h2 className="md:text-5xl text-3xl text-black text-center lg:text-left md:mb-10 mb-6">
              Our Core <span className='text-[#0B96F3]'> Values </span>
            </h2>
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              {coreValuesData.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="lg:text-left text-center lg:flex items-center md:space-x-2 space-y-3 border border-[#0B96F3] rounded p-2 "
                >
                  <div className="text-4xl rounded-lg flex justify-center">
                    <Image src={value.icon} alt='coreicon' height={81} width={81} />
                  </div>
                  <div>
                    <h3 className="md:text-xl text-base font-normal">{value.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
