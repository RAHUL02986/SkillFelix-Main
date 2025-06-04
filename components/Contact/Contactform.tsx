"use client";
import React from "react";
import Infoform from "@/components/Contact/Infoform";
import Ourcollabs from "@/components/Contact/Ourcollabs";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <>
      <section className="bg-[#032035] md:py-16 py-10 px-2 md:px-5">
        <div className="container px-0">
          <div className="lg:flex justify-between lg:my-8 bg-[#F2FAFF] rounded-xl px-10">
            <div className="flex items-center justify-center ">
              <div className="py-8 space-y-4">
                <h2 className="text-3xl md:text-5xl font-normal  text-center lg:text-left">
                  Our <span className="text-[#0B96F3]">Collaborators</span>
                </h2>
                <p className="text-base text-center lg:text-left max-w-100">
                  The Goto place for Industry standard VLSI learning with highly
                  rated Programs.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="px-4  py-2 bg-[#0B96F3] cursor-pointer hover:shadow-lg hover:bg-[#000717]  text-white rounded my-4">
                    know More &rarr;
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <Ourcollabs />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="lg:flex justify-between lg:gap-8 text-white lg:my-16 py-8 mx-4">
          <div className="w-full rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-[80px] shadow-2xl">
            <div
              className="p-6 bg-[url('/image2/circuit1.jpg')] rounded-2xl h-[280px] bg-center bg-cover flex justify-start items-end"
              role="img"
              aria-label="Circuit design image 1"
            >
              <div className="flex mr-4 text-md rounded bg-[#0B96F3] py-1 px-4">
                <FontAwesomeIcon icon={faCalendar} className="w-[14px] mr-3" />
                <span className="text-[18px]">&rarr;</span>
              </div>
              <div className="flex justify-center items-center">
                <Image src="/image2/tv.svg" alt="TV icon" width={35} height={35} />
                <p className="px-3">Weekend Program</p>
              </div>
            </div>
            <div className="text-black  pl-4 mt-4">
              <ul className="space-y-3">
                {[
                  "System on Chip designSystem on Chip design",
                  "Advanced Computer Architecture - RISC V",
                  "Analog Mixed Signal Design",
                  "AI Chip Design",
                  "ASIC Verification with SystemVerilog and SVA",
                  "Design For Test (DFT) for SoCs",
                  "Next Generation IC Manufacturing, Packaging and Testing",
                  "UVM for Digital and AMS Verification",
                ].map((text, idx) => (
                  <li className="flex items-center" key={idx}>
                    <Image
                      src="/image2/rightGreen.svg"
                      height={40}
                      width={40}
                      alt="Check icon"
                    />
                    <p className="pl-2 lg:pl-4">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 pb-8 pl-16">
              <button className="hover:bg-[#000717] bg-[#0B96F3] mt-6 cursor-pointer px-8 rounded text-white py-3">
                Know More &rarr;
              </button>
            </div>
          </div>

          <div className="w-full rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-[80px] mt-12 lg:mt-0 shadow-2xl">
            <div
              className="p-6 bg-[url('/image2/circuit2.jpg')] rounded-2xl h-[280px] bg-center bg-cover flex justify-start items-end"
              role="img"
              aria-label="Circuit design image 2"
            >
              <div className="flex mr-4 text-md rounded bg-[#0B96F3] py-1 px-4">
                <FontAwesomeIcon icon={faCalendar} className="w-[14px] mr-3" />
                <span className="text-[18px]">&rarr;</span>
              </div>
              <div className="flex justify-center items-center">
                <Image src="/image2/tv.svg" alt="TV icon" width={35} height={35} />
                <p className="px-3">Weekend Program</p>
              </div>
            </div>
            <div className="text-black  pl-4 mt-4">
              <ul className="space-y-3">
                {[
                  "Physical Design and Validation of Complex SoCs",
                  "Formal Verification Practices",
                  "Power Aware Design and Verification",
                  "Embedded Systems - Chip Programming",
                  "Machine Learning for EDA",
                  "Design Automation using Python",
                  "Gen AI for VLSI",
                  "IC Project Management",
                ].map((text, idx) => (
                  <li className="flex items-center" key={idx}>
                    <Image
                      src="/image2/rightGreen.svg"
                      height={40}
                      width={40}
                      alt="Check icon"
                    />
                    <p className="pl-2 lg:pl-4">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 pb-8 pl-16">
              <button className="hover:bg-[#000717] bg-[#0B96F3] mt-6 cursor-pointer px-8 rounded text-white py-3">
                Know More &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <Infoform />
      <div className="h-[400px] lg:h-[600px] lg:pt-8 pb-0 shadow-2xl">
        <iframe
          className="border-0 w-full shadow-2xl  h-full outline-none"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11444.428925424347!2d77.3656463590162!3d28.625313494230607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747980328131!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
        />
      </div>
    </>
  );
};

export default Contact;
