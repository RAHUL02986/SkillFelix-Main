"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
    {
        question: "How to get started learning RISC-V?",
        answer:
            "Maven silicon offers the RISC-V RV321 ISA & RTL course. Start your RISC-V learning journey by understanding its ISA (Instruction Set Architecture) fundamentals. Gain hands-on experience with RTL coding, simulation, and verification using industry tools.",
    },
    {
        question: "What is the purpose of RISC-V?",
        answer:
            "RISC-V is an open standard instruction set architecture designed for flexibility and scalability across devices.",
    },
    {
        question: "Is VLSI a good career?",
        answer:
            "Yes, VLSI is a promising field with increasing demand in the semiconductor and electronics industries.",
    },
    {
        question: "Are there any prerequisites for the VLSI Course?",
        answer:
            "Basic knowledge of digital logic design and C programming is helpful for starting a VLSI course.",
    },
];

export default function Accordion() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="md:py-16 py-10">
            <div className="mx-auto container bg-[linear-gradient(315.61deg,_rgba(255,255,255,0.95)_53.51%,_rgba(242,250,255,0.95)_91.44%)] rounded-[10px] md:p-10 p-3 bg-white/20 backdrop-blur-[114px] shadow-[0px_4px_52px_-5px_#0000000D]">
            <div className="  p-0">
                <div >

                    {/* ----------------Our Recruiters------------- */}
                    <div className="text-center md:max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl leading-[100%]">Our <span className="text-[#0B96F3]">Recruiters</span></h2>
                        <p className="text-[#4F4F4F] text-[18px] mt-4">
                            Maven Silicon is the essential choice for recruiting by more than 250
                            leading semiconductor companies. This enables us to empower the next
                            generation in VLSI & Embedded Systems technology and bring success
                            and advancements to their VLSI & Embedded Systems career.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 md:gap-12 gap-3 md:mt-5 mt-0 items-center mx-auto py-10">
                        <Image className="duration-300 hover:scale-110" src='/logo1.svg' height={76} width={93} alt="Logo" />
                        <Image className="duration-300 hover:scale-110" src='/logo2.svg' height={90} width={126} alt="Logo" />
                        <Image className="duration-300 hover:scale-110" src='/r3.png' height={54} width={204} alt="Logo" />
                        <Image className="duration-300 hover:scale-110" src='/logo4.svg' height={90} width={187} alt="Logo" />
                        <Image className="duration-300 hover:scale-110" src='/logo5.svg' height={181} width={200} alt="Logo" />
                        <Image className="duration-300 hover:scale-110" src='/rend.png' height={181} width={200} alt="Logo" />
                    </div>

                </div>
            </div>
            <hr className="container text-[#EFEFEF]"/>
            <div className=" w-full md:max-w-[933px] mx-auto">
                <div className=" rounded-br-lg rounded-bl-lg    lg:p-10 p-0  ">

                   <div className="p-0 md:p-4 grid gap-4 pt-10 border-[#EFEFEF] ">
  {faqData.map((item, index) => (
    <div
      key={index}
      className={`border rounded p-8 transition-all duration-300 ${
        openIndex === index ? 'border-[#0B96F3]' : 'border-[rgba(0,0,0,0.1)]'
      }`}
    >
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full text-left flex justify-between items-center font-semibold"
      >
        <h4 className="text-xl font-normal leading-[100%] pb-2">{`Q. ${item.question}`}</h4>
        <Image
          src={openIndex === index ? "/minus.svg" : "/plus.svg"}
          alt={openIndex === index ? "Collapse" : "Expand"}
          height={31}
          width={31}
        />
      </button>

      {openIndex === index && (
        <div className="mt-6 text-[#4F4F4F] text-[15px] border-t border-[rgba(0,0,0,0.1)] pt-3">
          {item.answer}
        </div>
      )}
    </div>
  ))}
</div>

                    {/* ---------------accordian section ------------------- */}
                </div>
            </div>
            </div>
        </div>

    );
}
