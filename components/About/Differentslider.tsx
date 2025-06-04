'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from 'react-slick';

// Dynamically import Slider component with no SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

type Review = {
  name: string;
  image: string;
  bgcolor?: string;
};

const Differentslider = () => {
  const reviews: Review[] = [
    { name: "Dynamic Course Structure", image: "/slideicon1.svg", bgcolor: "#EB5757" },
    { name: "State-of-the-art Infrastructure", image: "/slideicon2.svg" },
    { name: "24/7 Lab access through VPN", image: "/slideicon3.svg" },
    { name: "Value for Money", image: "/slideicon4.svg" },
    { name: "100% Placement Support", image: "/slideicon5.svg" },
    { name: "Highly Rated Courses", image: "/slideicon6.png" },
    { name: "Affordable Online Courses", image: "/slideicon7.svg" },
    { name: "5000+ Alumni", image: "/slideicon8.svg" },
    { name: "250+ Industry Partners", image: "/slideicon9.svg" },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => <div className="custom-dot testi_dot mt-2 md:mt-5"></div>,
    dotsClass: "slick-dots custom-dots mt-10",
    appendDots: (dots) => {
      const dotArray = React.Children.toArray(dots);
      const activeIndex = dotArray.findIndex((dot) => {
        if (React.isValidElement(dot)) {
          const el = dot as React.ReactElement<{ className?: string }>;
          return el.props?.className?.includes("slick-active");
        }
        return false;
      });

      const total = dotArray.length;
      let start = 0;

      if (total <= 3) {
        start = 0;
      } else if (activeIndex > 1 && activeIndex < total - 1) {
        start = activeIndex - 1;
      } else if (activeIndex >= total - 1) {
        start = Math.max(0, total - 3);
      }

      const limitedDots = dotArray.slice(start, start + 3);
      return <ul className="custom-dotss md:mt-10 mt-4">{limitedDots}</ul>;
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl text-center font-normal">
            Our Winning <span className="text-[#0B96F3]">Difference</span>
          </h2>
        </div>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-4 rounded shadow flex items-center my-4 gap-4 h-full">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="p-3 bg-[#FFF0E3] rounded transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <h3 className="text-base md:text-lg font-medium text-black">
                  {review.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Differentslider;
