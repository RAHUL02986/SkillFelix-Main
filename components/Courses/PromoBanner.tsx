"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function PromoBanner() {
  return (
    <section
      className="bg-[url('/secbg.png')] bg-cover bg-center text-white md:py-16 py-10 px-2 md:px-5"
    >
      <motion.div
        className="container mx-auto grid md:grid-cols-3 gap-12 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Left Text */}
        <div className="md:col-span-2 space-y-10">
          <h2 className="text-3xl  md:text-5xl  leading-snug">
            Expand your Semicon Career <br className="hidden sm:block" />
           <span className="text-[#0B96F3]">Opportunities with SkillFelix</span> 
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg sm:text-xl">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-white">✔</span> Job-oriented VLSI courses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">✔</span> Job-oriented Embedded Systems course
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">✔</span> Part-time VLSI courses
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-white">✔</span> Online VLSI courses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">✔</span> VLSI Internship
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">✔</span> Embedded Internship
              </li>
            </ul>
          </div>
        </div>

        {/* Right Offer */}
        <div className=" md:text-left space-y-2">
          <p className="text-xl sm:text-2xl font-semibold">FLAT</p>
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <h2 className="text-6xl sm:text-7xl font-bold">40%</h2>
            <p className="text-2xl font-bold">OFF</p>
          </div>
          <p className="text-lg sm:text-xl">On Blended VLSI Courses</p>

          <button  className='btn-primary flex items-center mt-4 gap-3 text-[#ffffff] hover:bg-[#000717]'>
            Enroll Now!
            <Image src="/arrowb.svg" alt="arrow" width={20} height={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
