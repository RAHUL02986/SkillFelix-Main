"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Review {
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    title: "Eligibility Criteria",
    subtitle: "Executive M.Tech in VLSI Design",
    description:
      "Working professionals with a BE/B.Tech in ECE, EEE, CSE, or relevant circuit branches, with a minimum of 60% aggregate marks and at least 2 years of work experience.",
    avatar: "/contact/cs2.svg",
  },
  {
    title: "Cohort Details",
    subtitle: "Executive M.Tech in VLSI Design",
    description: "Next Cohort Starts on July 9th, 2025.",
    avatar: "/contact/cs6.svg",
  },
  {
    title: "EDA Tools",
    subtitle: "Executive M.Tech in VLSI Design",
    description: "Synopsys | Cadence | Siemens",
    avatar: "/contact/cs2.svg",
  },
  {
    title: "Selection Process",
    subtitle: "Executive M.Tech in VLSI Design",
    description:
      "Apply - Application Review - Admission Test - Interview - Program Enrollment",
    avatar: "/contact/cs6.svg",
  },
  {
    title: "Learning Mode",
    subtitle: "Executive M.Tech in VLSI Design",
    description:
      "PES University: 3-year blended weekend program. 1-2 years on-campus, final year online (labs & projects).",
    avatar: "/contact/cs3.svg",
  },
  {
    title: "Application Deadline",
    subtitle: "Executive M.Tech in VLSI Design",
    description: "May 30th, 2025",
    avatar: "/contact/cs4.svg",
  },
  {
    title: "Total Credits",
    subtitle: "Executive M.Tech in VLSI Design",
    description: "80 credits",
    avatar: "/contact/cs5.svg",
  },
];

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  customPaging: () => <div className="custom-dott testi_dott mt-5"></div>,
  dotsClass: "slick-dotss custom-dotss mt-10",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function ContactSlider() {
  return (
    <section className="py-16 w-full mx-auto px-4 bg-white bg-[url('/secbg.png')]">
      <div className="container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="py-6 px-3 h-full">
              <div className="bg-gray-50 hover:bg-white transition duration-300 rounded-xl shadow-md hover:shadow-lg p-6 h-full flex flex-col justify-between gap-4 md:min-h-[200px] min-h-[240px]">
                <div className="flex items-center gap-4">
                  <Image
                    src={review.avatar}
                    alt={review.title}
                    width={60}
                    height={60}
                    className="rounded-full object-contain"
                  />
                  <div>
                    <h3 className="text-xl">{review.title}</h3>
                    <p className="text-sm ">{review.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm mt-2">{review.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
