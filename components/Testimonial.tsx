"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonial = () => {
  // function PrevArrow(props: { className?: string; onClick?: () => void }) {
  //   const { className, onClick } = props;
  //   return (
  //     <div className={`${className} custom-prev`} onClick={onClick}>
  //       <Image src="/lt.svg" alt="lt" width={22} height={22} />
  //     </div>
  //   );
  // }

  // function NextArrow(props: { className?: string; onClick?: () => void }) {
  //   const { className, onClick } = props;
  //   return (
  //     <div className={`${className} custom-next`} onClick={onClick}>
  //       <Image src="/rt.svg" alt="lt" width={22} height={22} />
  //     </div>
  //   );
  // }

  const reviews = [
    {
      name: "Matthew Martin",
      image: "/demoSession/t1.png",
      position: "Director, Hobby Lobby",
      text: `“I knew that strong language skills were just as important as coding abilities. This academy provided me with structured courses, interactive speaking sessions, and personalized feedback.”`,
    },
    {
      name: "Julian Walker",
      image: "/demoSession/t2.png",
      position: "Director, 7Eleven",
      text: `“I knew that strong language skills were just as important as coding abilities. This academy provided me with structured courses, interactive speaking sessions, and personalized feedback.”`,
    },
    {
      name: "Julian Walker",
      image: "/demoSession/t2.png",
      position: "Director, 7Eleven",
      text: `“I knew that strong language skills were just as important as coding abilities. This academy provided me with structured courses, interactive speaking sessions, and personalized feedback.”`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: () => (
      <div className="custom-dott testi_dott md:my-16 my-4">
        {/* <span className="block w-1 h-1 bg-gray-300 rounded-full"></span> */}
      </div>
    ),
    dotsClass: "slick-dotss custom-dotss",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[url('/secbg.png')] bg-cover bg-center w-full overflow-hidden px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-normal text-center text-white md:py-16 py-10">
        Review From Top Recruiters
      </h2>

      <Slider {...settings} className="max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <div className="p-4 md:p-8 rounded-xl backdrop-blur-[64px] custom_border_all h-full flex flex-col gap-4">
              <div className="mb-4 md:pr-12 pr-0">
                <p className="text-white md:text-xl text-base font-normal">
                  {review.text}
                </p>
              </div>
              <hr className="border border-[#E0E5EB1A]" />
              <div className="flex gap-3 mt-4 items-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full"
                  width={80}
                  height={80}
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-normal text-white">{review.name}</h3>
                  <h4 className="text-sm font-normal text-white">{review.position}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
