"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface Testimonial {
  id: string;
  image: string;
  name: string;
  designation: string;
  content: string;
  width: number;
  height: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    image: "/Mask1.png",
    name: "Sharat Kaul",
    designation: "Director, VP of Sales & Marketing",
    content:
      "Siva is a very good strategist and looks at things with an open mind. Siva is deeply technical and has strong domain knowledge of verification and verification methodology. The industry needs more and more verification design services companies and would highly recommend Siva for their projects",
    width: 148,
    height: 56,
  },
  {
    id: "2",
    image: "/h4.svg",
    name: "Vasant Mallya",
    designation: "Engineering Director, Cadence",
    content:
      "Sivakumar is an enthusiastic and result-oriented person who is self-driven to achieve the goals he sets. He has a good background in verification methodology and practices which he has proven many times.",
    width: 148,
    height: 53,
  },
  {
    id: "3",
    image: "/logo5.svg",
    name: "Srinivas P.",
    designation: "Senior Manager, Design Verification",
    content:
      "I had the pleasure of working with Sivakumar together on various technical engagements. Sivakumar has a passion for technology and team work, which is very refreshing and it is a delight to work with him. Sivakumar understood the core values and requirements of his position and executed to fulfill them. I wish him all the very best in his career.",
    width: 200,
    height: 181,
  },
  {
    id: "4",
    image: "/rend.png",
    name: "AmitraSudan Kar",
    designation: "Staff Engineer",
    content:
      "System Verilog training by Siva gave me a great opportunity to look into modern verification concepts using System Verilog. Through the course I could learn to develop a robust testbench which can generate different testcase scenarios using the concepts of Object Oriented Programming. Learning Assertion Based Verification was also an added advantage which is in high demand in todays Verification job market. I am sure this training will not only give openings to job seekers but also help to create great interest in Verification.",
    width: 200,
    height: 181,
  },
];

const Partner: React.FC = () => {
  return (
    <section className="bg-[#032035] py-10 md:py-16 mt-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-10 text-white text-3xl md:text-5xl">
          What Does Industry Say About Our CEO?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ id, image, name, designation, content, width, height }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: parseFloat(id) * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="px-6 py-8 space-y-4 border border-[#0B96F300] hover:border-[#0B96F3] rounded-xl text-white shadow-xl transition-shadow duration-300 hover:scale-105"
            >
              <div className="md:flex flex-column items-center md:space-x-4 space-y-2">
                <Image src={image} alt={name} width={width} height={height} />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#0B96F3]">{name}</h3>
                  <p className="text-lg">{designation}</p>
                </div>
              </div>
              <p className="text-left text-sm md:text-base leading-relaxed">{content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
