'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface Slide {
  title: string;
  content: string;
  highlights: string[];
}

const slides: Slide[] = [
  {
    title: 'Online VLSI Courses',
    content:
      'Maven Silicon offers a range of online VLSI courses designed to equip students with the knowledge and skills needed to excel in the field of VLSI. These courses cover topics such as Digital Design, Verification, Physical Design, DFT, RISC-V, ARM and are led by experienced trainers. Students benefit from flexible learning options and hands-on training. Once the engineering students complete their degree from the colleges, they can upgrade to our job-oriented VLSI Courses to get jobs in VLSI Industry easily.',
    highlights: [
      'Live Q&A, and Review Sessions',
      'Online courses with labs, & projects',
      'Learn anywhere & anytime with mobile apps',
      'Upgrade to Job-oriented courses',
    ],
  },
  {
    title: 'Industry Experts',
    content:
      'Our trainers come from leading semiconductor companies and have hands-on experience in real-world VLSI projects. They bring their deep expertise to the classroom to ensure students gain practical insights.',
    highlights: [
      'Hands-on mentorship',
      'Real-world projects',
      'Latest industry tools',
      'One-on-one guidance',
    ],
  },
  {
    title: 'Career Assistance',
    content:
      'We help students with resume building, mock interviews, and job placement assistance. Our network of hiring partners regularly recruits from our trained talent pool.',
    highlights: [
      'Resume workshops',
      'Mock interviews',
      'Placement drives',
      'Industry connects',
    ],
  },
];

function Fiveslider() {
  const [current, setCurrent] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const updateHeights = () => {
      const heights = refs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  return (
    <section className="bg-[#032035] text-white py-16 px-0 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl m-auto text-center max-w-xl font-normal mb-10">
          Five reasons to muse on Maven Silicon
        </h2>

        <div style={{ height: maxHeight }} className="relative">
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-4 space-x-0 space-y-5 absolute inset-0">
              <div className="md:col-span-1 text-lg font-medium">
                {slides[current].title}
              </div>
              <div className="md:col-span-3 text-base">{slides[current].content}</div>
            </div>
          </div>

          {/* Hidden Slides for measuring height */}
          <div className="absolute opacity-0 pointer-events-none -z-10">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  refs.current[idx] = el;
                }}
                className="grid md:grid-cols-4 gap-10 mb-4"
              >
                <div className="md:col-span-1 text-lg">{slide.title}</div>
                <div className="md:col-span-3">{slide.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-4 gap-10 md:mt-12 mt-5">
          <div className="md:col-span-1 text-lg font-medium">Key highlights</div>
          <div className="md:col-span-3 grid md:grid-cols-3 gap-8 text-sm text-gray-300 border-t border-gray-600 pt-6">
            {slides[current].highlights.slice(0, 3).map((point, idx) => (
              <div key={idx}>{point}</div>
            ))}
            <div className="col-span-3 pt-4 border-t border-gray-600">
              {slides[current].highlights[3]}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <div className="flex space-x-4 ml-6">
            <button
              onClick={prevSlide}
              className="w-7 h-7 rounded-full bg-white text-[#002C2C] flex items-center justify-center font-normal"
            >
              <Image src="/lt.svg" alt="Previous" width={20} height={20} />
            </button>

            <div className="flex space-x-2 items-center">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-7 h-1 rounded-full inline-block transition-transform duration-300 ${
                    current === idx ? 'bg-[#0B96F3] scale-125' : 'bg-gray-400 scale-100'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#002C2C] font-normal"
            >
              <Image src="/rt.svg" alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fiveslider;
