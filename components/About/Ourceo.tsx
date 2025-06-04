'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Ourceo: React.FC = () => {
  return (
    <section className="custom-gradientt md:py-16 py-10">
      <div className="container bg-[url('/secbg.png')] rounded-xl md:p-10 p-4 py-10 bg-cover bg-right">
        <div className="flex lg:justify-center items-center text-white">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-normal">About Our CEO</h2>
            <p className="mt-7">
              Sivakumar is the Founder and CEO of Maven Silicon. He is responsible for the company’s vision, overall strategy,
              business, and technology. He is also the Founder and CEO of Aceic Design Technologies.
            </p>
            <p className="mt-7">
              Sivakumar is a seasoned engineering professional who has worked in various fields, including electrical engineering,
              academia, and the semiconductor industry for more than 25 years. In the semiconductor sector, he has worked as a
              Verification Consultant for top EDA companies like Synopsys, Cadence, and Mentor and helped various ASIC and FPGA
              design houses deploy and use various verification methodologies effectively, resulting in successful tape-out of
              SoCs and Chips.
            </p>
            <p className="mt-7">
              He now specializes in offering Verification IPs and consulting services, EDA flow development, and corporate training
              on advanced ASIC verification methodologies and technologies. He is the recipient of the Outstanding Technical
              Achievement award from Cadence Design Systems and has delivered various corporate training courses at IBM, NXP,
              Cypress, Broadcom, Qualcomm, ST Micro, AMD, AvagoTech, Wipro, Samsung, etc.
            </p>
            <p className="mt-7">
              Sivakumar holds a degree in Electrical and Electronics Engineering from Madurai Kamaraj University. To know more
              about Sivakumar, please visit:
            </p>

            <Link
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-4 mt-6"
            >
              <FaLinkedin size={50} />
              <h3 className="hover:text-[#0B96F3] md:text-2xl text-xl font-normal">Profile</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourceo;
