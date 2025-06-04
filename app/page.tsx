import HeroSection from "@/components/Home/HeroSection";
import Offer from "@/components/Home/Offer";

import Testimonial from "@/components/Testimonial";
import DemoSession from "@/components/Home/DemoSession";
import Midcareer from "@/components/Home/Midcareer";
import Nextcomponent from "@/components/Home/Nextcomponent";
import ContactpageN from "@/components/Home/ContactpageN";
import Recruters from "@/components/Home/Recruters";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import Course from "@/components/Home/Course";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <DemoSession/> 
      <Course/>
      <Offer/>
      <Nextcomponent/>
      <Midcareer/>
      <Recruters/>
      <WhyChooseSection/>
      <Testimonial/>  
      <ContactpageN/>  
    </div>     
  );
}
