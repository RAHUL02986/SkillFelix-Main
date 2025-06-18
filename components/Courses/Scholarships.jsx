'use client';
import { useState } from 'react';
import { Percent, FileText, GraduationCap } from "lucide-react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


const scholarshipData = [
  {
    title: "MS1",
    academic: "60% & above",
    testScore: "60% & above",
    scholarship: "Upto 5%",
    direction: "left",
  },
  {
    title: "MS2",
    academic: "75% & above",
    testScore: "80% & above",
    scholarship: "Upto 10%",
    direction: "top",
  },
  {
    title: "MS3",
    academic: "80% & above",
    testScore: "90% & above",
    scholarship: "Upto 20%",
    direction: "bottom",
  },
];

// Animation helper
const getInitial = (direction) => {
  switch (direction) {
    case 'left':
      return { x: -100, opacity: 0 };
    case 'top':
      return { y: -100, opacity: 0 };
    case 'bottom':
      return { y: 100, opacity: 0 };
    default:
      return { opacity: 0 };
  }
};
const scholarshipSteps = [
  {
    title: "Our scholarship process consists of two rounds:",
    boldText: "Online application and technical interview.",
    icon: "/sco1.svg", 
  },
  {
    title:
      "The candidate has to score above 60% on the online test to get qualified to apply for the course.",
 icon: "/sco2.svg",  },
  {
    title:
      "Candidates with good GATE scores can also grab the opportunity to avail of this additional scholarship scheme.",
 icon: "/sco3.svg",    linkText: "T&C Apply",
    linkUrl: "#", // Add actual T&C link
  },
];

export default function Scholarships() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-white flex flex-col items-center justify-center md:px-5 py-10 px-2 md:py-16">
     
       <div ref={ref} className="container py-16 px-0 m-auto text-center">
      <h2 className="text-3xl md:text-5xl mb-12">
        You Can <span className="text-[#0B96F3]">Win A Scholarship</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {scholarshipSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-36 h-36 relative mb-8">
              <Image
                src={step.icon}
                alt="Scholarship Step"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[#4F4F4F]">
              {step.title.split(step.boldText ?? "").map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && step.boldText && (
                    <strong className="text-black">{step.boldText}</strong>
                  )}
                </span>
              ))}
              {step.linkText && (
                <span className="mt-2">
                  <a href={step.linkUrl} className="underline text-sm text-[#4F4F4F]">
                    {step.linkText}
                  </a>
                </span>
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
      <div className="container p-0">
        {/* Background Image */}
        <img
          src="/bgslider.jpg"
          alt="Scholarship Background"
          className="w-full h-auto rounded-2xl object-cover"
        />

        {/* Overlay Cards */}
        <div className="flex flex-col -mt-40 md:flex-row justify-center items-center md:gap-6 gap-14 px-4 py-8">
          {scholarshipData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={getInitial(item.direction)}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-xl w-full md:w-1/3 p-6 relative z-10"
            >
              {/* Header */}
              <div className="bg-[#032035] text-white p-4 rounded-xl absolute -top-6 left-4 right-4 shadow-md z-20">
                <p className="text-sm text-[#4F4F4F]">Scholarship Scheme</p>
                <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>

              {/* Content */}
              <div className="space-y-6 bg-[#f5f7f7] mt-16 p-5 rounded-xl">
                {/* Academic Criteria */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0B96F3] text-white rounded-full p-3 shadow-md">
                    <Percent className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-black">Academic Criteria | Degree,12th & 10th</p>
                    <p className="text-[#0B96F3] font-semibold">{item.academic}</p>
                  </div>
                </div>

                {/* Test Score */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#032035] text-white rounded-full p-3 shadow-md">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-black">SkillFelix online test score</p>
                    <p className="text-[#032035] font-semibold">{item.testScore}</p>
                  </div>
                </div>

                {/* Scholarship */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#002b2e] text-white rounded-full p-3 shadow-md">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-black">Scholarship on course fee</p>
                    <p className="text-gray-800 font-semibold">{item.scholarship}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Check Eligibility Button */}
      <button
        onClick={() => setShowModal(true)}
        className='btn-primary flex items-center mt-12 gap-3 text-[#ffffff] hover:bg-[#000717]'>
        Check Eligibility <Image src="/arrowb.svg" alt="arrow" height={10} width={20} />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-5xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 text-xl"
            >
              ×
            </button>
            {/* Modal Content */}
            <p className="text-center">Eligibility Form or Details...</p>
          </div>
        </div>
      )}
    </div>
  );
}
