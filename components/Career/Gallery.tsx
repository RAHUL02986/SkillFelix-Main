"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/Gallery/Gallery1.webp", span: "lg:col-span-2 lg:row-span-2", title: "Main Event" },
  { src: "/Gallery/Gallery2.webp", span: "lg:col-span-1 lg:row-span-2", title: "Moment 2" },
  { src: "/Gallery/Gallery3.webp", span: "lg:col-span-1 lg:row-span-1", title: "Moment 3" },
  { src: "/Gallery/Gallery4.webp", span: "lg:col-span-1 lg:row-span-2", title: "Vertical Vibes" },
  { src: "/Gallery/Gallery5.webp", span: "lg:col-span-2 lg:row-span-1", title: "Snapshot 5" },
  { src: "/Gallery/Gallery6.webp", span: "lg:col-span-1 lg:row-span-1", title: "Wide Shot" },
];

// Animation variants for staggered fade + slide + scale
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 80,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="px-2 md:px-5 py-10 md:py-16 bg-[linear-gradient(315.61deg,_#FFFFFF_53.51%,_#F2FAFF_91.44%)]">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:auto-rows-[200px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {images.map(({ src, span, title }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => setSelectedImg(src)}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group
                transform transition-transform duration-700 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-2xl
                ${span} aspect-[4/3] lg:aspect-auto mt-2 sm:mt-0`}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 ease-in-out rounded-xl group-hover:scale-110 group-hover:brightness-110 hover:rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg font-semibold">
                {title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[50vh] md:max-h-[80vh] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src={selectedImg}
              alt="Selected"
              layout="responsive"
              width={800}
              height={600}
              objectFit="contain"
              className="rounded-xl"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
