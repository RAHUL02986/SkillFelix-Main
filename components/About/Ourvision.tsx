import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Ourvision: React.FC = () => {
  return (
    <div className='md:px-5 px-2 md:py-16 py-10 bg-[linear-gradient(109.34deg,_#FFFFFF_55.54%,_#F2FAFF_97.38%)]'>
      <div className="container px-0">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">

          {/* Left Text - slide from left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:max-w-lg md:pr-3 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl">
              Our <span className='text-[#0B96F3]'>Vision</span>
            </h2>
            <p className="text-lg text-[#4F4F4F] mt-4">
              Empowering the global semiconductor and software industries
              by developing highly skilled engineers to meet the rising market demand.
            </p>
          </motion.div>

          {/* Right Image - slide from right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 w-full lg:w-auto"
          >
            <Image
              src="/ourmisson.jpg"
              alt="ourmission"
              height={500}
              width={500}
              className="rounded-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ourvision;
