"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PressCardProps {
  image: string;
  title: string;
  link: string;
  height?: string; // optional, defaults to "h-full"
}

const PressCard: React.FC<PressCardProps> = ({ image, title, link, height = "h-full" }) => (
  <div className={`relative group overflow-hidden rounded-lg w-full ${height}`}>
    <Image
      src={image}
      alt="release"
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
    <div className="absolute inset-0 flex items-end mb-5 px-6 z-20 text-white">
      <div>
        <Link href={link} className="text-lg font-semibold lg:text-xl">
          {title}
        </Link>
        <Link href={link} className="text-sm flex gap-2 items-center py-2">
          Know more <Image src="/arrow.svg" alt="arrow" height={16} width={16} />
        </Link>
      </div>
    </div>
    <div className="absolute top-8 left-6 z-20">
      <Link
        href={link}
        className="bg-[#00535e] text-sm py-2 px-5 text-white rounded-md shadow-md"
      >
        Press Release
      </Link>
    </div>
  </div>
);

const Release: React.FC = () => {
  return (
    <div className="px-4 lg:px-20 xl:px-32 2xl:px-52 pt-20">
      <h2 className="text-2xl lg:text-3xl font-bold text-center">
        News & Media
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 pt-2">
        Get the latest updates about Maven Silicon and the semiconductor industry, from news coverage to press releases and media highlights.
      </p>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-7 h-[1300px] lg:h-[630px]">
        {/* Left large card */}
        <div className="lg:col-span-2 lg:row-span-2">
          <PressCard
            image="/release2.png"
            title="Empowering The Next Generation Of Chip Designers: Maven Silicon's Journey To Excellence In VLSI"
            link="#"
            height="h-full"
          />
        </div>

        {/* Right column (3 stacked cards) */}
        <div className="flex flex-col gap-7">
          <PressCard
            image="/release2.png"
            title="Silicon India Magazine: Top 10 Most Promising CEOs in India 2023"
            link="#"
            height="h-[200px] lg:h-[200px]"
          />
          <PressCard
            image="/release3.jpg"
            title="Reminiscing Maven Silicon's Feature in Business India Magazine"
            link="#"
            height="h-[200px] lg:h-[200px]"
          />
          <PressCard
            image="/release4.png"
            title="Maven Silicon's RISC-V Processor IP Verification Flow"
            link="#"
            height="h-[200px] lg:h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Release;
