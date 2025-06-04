"use client";
import Banner from "@/components/Career/Banner";
import Career from "@/components/Career/Career";
import Careerslide from "@/components/Career/Careerslide";
import Benefits from "@/components/Career/Benifits";
import Innovation from "@/components/Career/Innovation";
import Investing from "@/components/Career/Investing";
import Gallery from "@/components/Career/Gallery";
export default function career() {


  return (
    <>
      <Banner />
      <Investing />
       <Innovation />
      <Careerslide />
      <Gallery/>
      <Career />
      <Benefits />
    </>
  );
}
