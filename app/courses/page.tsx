"use client";
import Tab from "@/components/Courses/Tabs";
import Banner from "@/components/Courses/banner";
import PromoBanner from "@/components/Courses/PromoBanner";
import Varification from "@/components/Courses/Varification";
export default function courses() {


  return (
    <>
    <Banner/>
      <Tab />
      <Varification/>
      <PromoBanner/>
    </>
  );
}
