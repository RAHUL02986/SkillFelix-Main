"use client";

import Ourceo from "@/components/About/Ourceo";
import Fiveslider from "@/components/About/Fiveslider";
import Partner from "@/components/About/Partner";
import TabsSection from "@/components/About/TabsSection";
import Banner from "@/components/About/banner";
import Ourvision from "@/components/About/Ourvision";
import CoreValuesSection from "@/components/About/Ourcore";
import Differentslider from "@/components/About/Differentslider";
import Message from "@/components/About/Message";
import Blogpost from "@/components/About/Blogpost";
 

export default function about() {
  return (
    <>
      <Banner />
      <Ourvision />
      <CoreValuesSection />
      <Differentslider />
      <Ourceo />
      <Fiveslider />
      <Message />
      <Partner />
      <TabsSection />
      <Blogpost />

    </>
  );
}
