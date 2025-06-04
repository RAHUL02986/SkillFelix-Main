"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        logo: "/rc1.svg", 
        text: `We are truly delighted by the level of commitment and professionalism given by your team. The resources are good at fundamentals and know what the industry demands from them.`
    },
    {
        logo: "/rc4.png",
        text: `We are pleased with the support & coordination by the Maven team, thank you! The quality of applicants from Maven are very good, credits to Maven for their industry relevant course content, teaching staff and...`
    },
    {
        logo: "/rc3.png",
        text: `Overall Experience is very good, and able to source quality resources with the help of Maven team.`
    }
];

export default function RecruitersReviewSlider() {
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

    return (
        <section className='md:py-16 py-10 md:px-5 px-2 bg-[linear-gradient(315.61deg,_#FFFFFF_53.51%,_#F2FAFF_91.44%)]' >
            <div className="container mx-auto ">
                <h2 className="text-center mb-8 text-3xl md:text-5xl">
                    Recruiters <span className='text-[#0B96F3]'>Review</span>
                </h2>

                <Slider className='pb-6' {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white p-6 rounded-xl h-64 shadow-xl hover:scale-105 my-3 space-y-4 flex flex-col justify-start">
                                <Image src={review.logo} alt="Logo" width={100} height={20} />
                                <p className="text-lg text-black leading-relaxed">{review.text}</p>
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
        </section>
    );
};


