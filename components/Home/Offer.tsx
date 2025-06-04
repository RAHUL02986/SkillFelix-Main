"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Offer = () => {
  // State to track active tab for animation
  const [activeTab, setActiveTab] = useState("domain");

  const domainCourses: Course[] = [
    {
      id: 1,
      title: "Domain Course 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Turpis amet condimentum iaculis non posuere.",
      image: "/ima1.png",
      link: "/courses/domain1",
    },
    {
      id: 2,
      title: "Domain Course 2",
      description:
        "Master RISC-V Design & Verification with hands-on training in ISA, RTL coding, and industry-standard verification methodologies.",
      image: "/ima2.png",
      link: "/courses/domain2",
    },
    {
      id: 3,
      title: "Domain Course 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Turpis amet condimentum iaculis non posuere.",
      image: "/ima3.png",
      link: "/courses/domain3",
    },
  ];

  const rtlDesignCourses: Course[] = [
    {
      id: 1,
      title: "RTL Design Course 1",
      description: "Hands-on RTL design and coding with practical projects.",
      image: "/ima1.png",
      link: "/courses/rtl1",
    },
    {
      id: 2,
      title: "RTL Design Course 2",
      description: "Learn the principles and tools used for RTL design.",
      image: "/ima2.png",
      link: "/courses/rtl2",
    },
    {
      id: 3,
      title: "RTL Design Course 3",
      description: "Advanced RTL optimization and verification basics.",
      image: "/ima3.png",
      link: "/courses/rtl3",
    },
  ];

  const rtlVerificationCourses: Course[] = [
    {
      id: 1,
      title: "RTL Verification Course 1",
      description: "Verification methodology basics with hands-on examples.",
      image: "/ima1.png",
      link: "/courses/verification1",
    },
    {
      id: 2,
      title: "RTL Verification Course 2",
      description: "Advanced verification techniques using industry standards.",
      image: "/ima2.png",
      link: "/courses/verification2",
    },
    {
      id: 3,
      title: "RTL Verification Course 3",
      description: "Practical verification environments and testbenches.",
      image: "/ima3.png",
      link: "/courses/verification3",
    },
  ];

  const testingTimingCourses: Course[] = [
    {
      id: 1,
      title: "Testing & Timing Course 1",
      description: "Learn static timing analysis and timing closure techniques.",
      image: "/ima1.png",
      link: "/courses/testing1",
    },
    {
      id: 2,
      title: "Testing & Timing Course 2",
      description: "Advanced test methodologies for RTL and gate level.",
      image: "/ima2.png",
      link: "/courses/testing2",
    },
    {
      id: 3,
      title: "Testing & Timing Course 3",
      description: "Industry best practices for testing and timing verification.",
      image: "/ima3.png",
      link: "/courses/testing3",
    },
  ];

  const renderCards = (courses: Course[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          className="relative rounded-xl text-left overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={400}
            className="w-full h-[400px] object-cover z-40"
          />
          <div className="absolute offer-sec-bg inset-0 p-5 flex flex-col justify-end text-white">
            <h3 className="text-xl font-normal mb-2">{course.title}</h3>
            <p className="text-base mb-4 pr-4 max-w-xs">
              {course.description}{" "}
              <Link href={course.link} className="underline">
                Learn more
              </Link>
            </p>
            <div className="absolute w-[95px] h-[95px] rounded-full bg-blue-500 flex items-start -right-10 -bottom-10 justify-start">
              <span className="mt-5 ml-5 text-white">→</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Animated content wrapper variants
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="pt-11 md:pb-20 pb-10 background-we">
      <div className="container flex flex-col gap-6">
        <h2 className="text-3xl md:text-5xl font-normal text-center text-[#0B96F3]">
          What we Offer<span className="text-[#000000]">?</span>
        </h2>

        <Tabs
          defaultValue="domain"
          className="text-center"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="flex flex-wrap justify-center bg-[#EBF7FF] py-6 space-x-6 rounded-lg mx-auto">
            <TabsTrigger
              value="domain"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              Domain
            </TabsTrigger>
            <TabsTrigger
              value="rtl-design"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              RTL Design
            </TabsTrigger>
            <TabsTrigger
              value="rtl-verification"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              RTL Verification
            </TabsTrigger>
            <TabsTrigger
              value="testing-timing"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              Testing & Timing
            </TabsTrigger>
          </TabsList>

          {/* AnimatePresence handles tab content animation on tab switch */}
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "domain" && (
              <TabsContent key="domain" value="domain" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(domainCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}

            {activeTab === "rtl-design" && (
              <TabsContent key="rtl-design" value="rtl-design" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(rtlDesignCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}

            {activeTab === "rtl-verification" && (
              <TabsContent key="rtl-verification" value="rtl-verification" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(rtlVerificationCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}

            {activeTab === "testing-timing" && (
              <TabsContent key="testing-timing" value="testing-timing" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(testingTimingCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default Offer;
