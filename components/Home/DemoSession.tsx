"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DemoSession() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const reviews = [
    { name: "5000+ Alumni Shining Globally", image: "/demoSession/s1.svg" },
    { name: "Highly Expert Trainers", image: "/demoSession/s2.svg" },
    { name: "App-Based Courses", image: "/demoSession/s3.svg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => <div className="custom-dot testi_dot mt-12"></div>,
    dotsClass: "slick-dots custom-dots mt-10",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 md:max-w-[1097px] w-full m-auto px-4 bg-white">
      <div className="text-center relative">
        <h2 className="text-3xl md:text-5xl font-normal mb-5">
          Watch Free <span className="text-[#0B96F3]">Demo Sessions</span>
        </h2>
        <p className="text-[#4F4F4F] text-lg mb-10 max-w-3xl mx-auto">
          We pride ourselves on having the most relevant and up to date skills
          training available, and experienced mentors who are motivated to guide
          and provide individualised training.
        </p>

        <div className="rounded-xl px-2 sm:px-4 py-7 shadow-box-v bg-white relative">
          <div className="relative w-full max-w-full aspect-video mx-auto">
            {isPlaying ? (
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/ZK-rNEhJIDs?autoplay=1"
                title="Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <Image
                  src="/demoSession/bg.png"
                  alt="Demo session"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div onClick={handlePlay} className="relative cursor-pointer">
                    {/* Outline animation layer */}
                    <div className="pulse-outline"></div>

                    {/* Button layer */}
                    <div className="relative z-10 bg-white/80 rounded-full p-6 hover:scale-110 transition duration-300">
                      <FaPlay className="text-[#0077cc] text-2xl" />
                    </div>
                  </div>
                </div>

                <Image
                  src="/demoSession/abso.png"
                  alt="abso"
                  width={174}
                  height={174}
                  className="absolute right-[-2.75rem] top-[1rem] hidden md:block"
                />

                {/* Teacher Image only shown when video is NOT playing */}
                <div className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 rounded-lg overflow-hidden shadow-md z-10">
                  <Image
                    src="/demoSession/teacher.png"
                    alt="Teacher"
                    width={100}
                    height={100}
                    className="md:w-[188px] md:h-[188px]"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="py-6 px-2 sm:px-3 ">
            <div className="px-4 py-2 custom-light rounded ">
              <div className="flex gap-4 items-center group">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={77}
                  height={77}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <h3 className="text-[18px] md:text-[20px] font-normal text-black">
                  {review.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
