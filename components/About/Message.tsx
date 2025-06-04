'use client';

import Image from 'next/image';
import React from 'react';

const Message: React.FC = () => {
  return (
    <div
      className="md:py-16 md:px-5 py-10 px-2 bg-[#EBF7FF]"
      style={{ boxShadow: '0px 4px 24px -10px #083C6026' }}
    >
      <div className="container">
        <h2 className="text-3xl md:text-5xl text-center pb-10">
          CEOs <span className="text-[#0B96F3]">Message</span>
        </h2>

        <div className="w-full lg:flex justify-between items-center rounded-2xl gap-10 md:pl-10 md:py-0 py-5 md:pt-10 md:px-0 px-6 bg-[#FFFFFF]">
          <div className="w-full lg:max-w-xl mt-5 lg:mt-0">
            <p className="text-lg">
              My vision is to produce truly talented and skilled VLSI & Embedded
              Systems engineers and introduce them to the semiconductor industry,
              by creating a good ECO system that consists of Training, Design Services,
              and Product business units.
            </p>

            <p className="text-lg mt-2">
              For more than 15 years, Maven Silicon has set the industry standard for
              the highest quality VLSI & Embedded Systems training for VLSI & Embedded
              Systems aspirants, professionals, and organizations across the globe.
            </p>

            <div className="mt-4 pb-4">
              <h4 className="text-2xl">SivaKumar PR</h4>
              <h5>Founder & CEO</h5>
            </div>
          </div>

          <div className="flex lg:justify-end items-center md:mt-10 mt-2 md:pb-0 pb-5 lg:mt-0">
            <div className="bg-[#e5f6f9] md:rounded-tl-[50px] md:rounded-br-xl rounded-xl w-full flex justify-center items-center mb-0 md:mb-[-2px]">
              <Image
                src="/Message.png"
                alt="CEO's Message"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
