"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <>
      <div
        className="md:py-48 py-16 bg-cover bg-top mt-[85px] bg-[url('/careerbg.png')]"
      >
        <div className="container mx-auto">
          <div className="text-center text-[#ffffff]">
            <h1 className="text-4xl lg:text-7xl">
              Programs <span className="text-[#0B96F3]">&</span> Courses
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
