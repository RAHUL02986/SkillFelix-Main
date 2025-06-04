"use client";
import dynamic from "next/dynamic";

import AboutPES from "@/components/Contact/AboutPES";
import StatsSection from "@/components/Contact/StatsSection";
const ContactSlider = dynamic(() => import("@/components/Contact/ContactSlider"), {
  ssr: false,
});
import KeyHighlights from "@/components/Contact/KeyHighlights";
import BenefitsSection from "@/components/Contact/BenefitsSection";
import Contactform from "@/components/Contact/Contactform";
export default function contact() {


  return (
    <>
      <div className=" md:py-24 py-20 mt-[85px] px-3 bg-[url('/contactb.png')] bg-center bg-cover">
        {/* Black Overlay */}

        {/* Content */}
        <div className="container relative z-10 flex justify-center items-center text-center min-h-[400px]">
          <div className="text-white lg:max-w-7xl">
            <h1 className="text-4xl sm:text-4xl lg:text-7xl ">
              Advance Your Career with an Executive <span className="text-[#0B96F3]">M.Tech in VLSI Design</span>
            </h1>
            <div className="mt-6">
              <h2 className="text-2xl md:text-5xl font-normal">
                For professionals with 2+ years of Experience
              </h2>
              <p className="text-[16px] py-2">
                Blended Weekend Classroom Program | Multiple Exit Options | Learn from Industry Experts
              </p>
              <button className="mt-6 px-8 py-3 bg-[#0B96F3] hover:bg-[#000717] text-white rounded">
                Enquire Now &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      <StatsSection />
      <AboutPES />    
      <ContactSlider />
      <KeyHighlights />
      <BenefitsSection />
      <Contactform />
    </>
  );
}
