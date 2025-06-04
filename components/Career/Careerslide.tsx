"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // <-- Import Next.js Image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Careerslide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderData = [
    {
      img: "/carrerimgs/sliderIcon1.webp",
      text: "Regular professional and personal growth training",
    },
    {
      img: "/carrerimgs/sliderIcon2.webp",
      text: "Recreational facilities",
    },
    {
      img: "/carrerimgs/sliderIcon3.webp",
      text: "Regular professional and personal growth training",
    },
    {
      img: "/carrerimgs/sliderIcon4.webp",
      text: "State-of-the-art facilities for work",
    },
    {
      img: "/carrerimgs/sliderIcon5.webp",
      text: "Excellent opportunity to work with the best talent",
    },
    {
      img: "/carrerimgs/sliderIcon6.webp",
      text: "Best-in-class compensation",
    },
  ];

  return (
    <div className="py-10 md:py-16 px-4 bg-[#F2FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="md:text-5xl text-3xl text-[#162726] font-normal leading-tight">
            At Mirafra, <span className="text-[#0B96F3]">we invest in our people</span>
          </h2>
        </div>

        <Slider className="md:pb-8 pb-4" {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-gradient-to-tl from-[#F2FAFF] to-[#FFFFFF] my-3 py-6 px-4 rounded-xl shadow-lg flex flex-col items-center justify-center h-56 text-center transition-transform duration-300 hover:scale-105">
                <div className="p-4 rounded-full bg-white shadow-lg flex justify-center items-center relative w-10 h-10">
                  <Image
                    src={item.img}
                    alt={`slider-icon-${index + 1}`}
                    layout="fill" // fills the parent div
                    objectFit="contain"
                    priority={true} // optional, for faster loading
                  />
                </div>
                <h3 className="text-lg mt-4 px-2">{item.text}</h3>
              </div>
            </div>
          ))}
        </Slider>

        {/* Dots styling */}
        <style jsx global>{`
          .slick-dots {
            bottom: -30px;
          }
          .slick-dots li button:before {
            font-size: 14px;
            color: #0000001a;
          }
          .slick-dots li.slick-active button:before {
            color: #0b96f3;
          }
        `}</style>
      </div>
    </div>
  );
}
