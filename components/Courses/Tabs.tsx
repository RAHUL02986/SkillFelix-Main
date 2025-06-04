import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "./CourseCard";

// Course and category types
export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
};

export type CourseCategory =
  | "Job-Oriented Specialization"
  | "Academic Programs"
  | "Emerging Technology"
  | "VLSI Internship"
  | "Part-Time Courses"
  | "Online Courses"
  | "Core Technical Courses";

// Generate slug from title
const generateLink = (title: string) =>
  "/courses/" + title.toLowerCase().replace(/[^\w]+/g, "-");

// Tabs component
const Tabs = () => {
  const [activeTab, setActiveTab] = useState<CourseCategory>(
    "Job-Oriented Specialization"
  );


  const coursesByCategory: Record<CourseCategory, Course[]> = {
    "Job-Oriented Specialization": [
      {
        id: 1,
        title: "Advanced Embedded System Design",
        description: "Course details...",
        image: "/blog/blog1.jpg",
        link: generateLink("Advanced Embedded System Design"),
        category: "job-oriented",
      },
      {
        id: 2,
        title: "Advanced VLSI Design & Verification",
        description: "Course details...",
        image: "/blog/blog1.jpg",
        link: generateLink("Advanced VLSI Design & Verification"),
        category: "job-oriented",
      },
      {
        id: 3,
        title: "Advanced ASIC Verification (VLSI VM)",
        description: "Course details...",
        image: "/blog/blog1.jpg",
        link: generateLink("Advanced ASIC Verification (VLSI VM)"),
        category: "job-oriented",
      },
      {
        id: 4,
        title: "Advanced VLSI Design & DFT (VLSI DFT)",
        description: "Course details...",
        image: "/blog/blog1.jpg",
        link: generateLink("Advanced VLSI Design & DFT (VLSI DFT)"),
        category: "job-oriented",
      },
      {
        id: 5,
        title: "Advanced Physical Design & Verification (VLSI PD)",
        description: "Course details...",
        image: "/blog/blog1.jpg",
        link: generateLink("Advanced Physical Design & Verification (VLSI PD)"),
        category: "job-oriented",
      },
    ],
    "Academic Programs": [
      {
        id: 1,
        title: "Executive M.Tech Program",
        description: "Course details...",
        image: "/blog/blog2.jpg",
        link: generateLink("Executive M.Tech Program"),
        category: "academic programs",
      },
      {
        id: 2,
        title: "VLSI Internship Program",
        description: "Course details...",
        image: "/blog/blog2.jpg",
        link: generateLink("VLSI Internship Program"),
        category: "academic programs",
      },
    ],
    "Emerging Technology": [
      {
        id: 1,
        title: "IoT – Internet of Things",
        description: "Course details...",
        image: "/blog/blog3.jpg",
        link: generateLink("IoT – Internet of Things"),
        category: "emerging technology",
      },
      {
        id: 2,
        title: "Edge AI – Edge Artificial Intelligence",
        description: "Course details...",
        image: "/blog/blog3.jpg",
        link: generateLink("Edge AI – Edge Artificial Intelligence"),
        category: "emerging technology",
      },
      {
        id: 3,
        title: "RISC-V Architecture",
        description: "Course details...",
        image: "/blog/blog3.jpg",
        link: generateLink("RISC-V Architecture"),
        category: "emerging technology",
      },
      {
        id: 4,
        title: "ARM Architecture",
        description: "Course details...",
        image: "/blog/blog3.jpg",
        link: generateLink("ARM Architecture"),
        category: "emerging technology",
      },
      {
        id: 5,
        title: "IC Packaging & Manufacturing",
        description: "Course details...",
        image: "/blog/blog3.jpg",
        link: generateLink("IC Packaging & Manufacturing"),
        category: "emerging technology",
      },
    ],
    "VLSI Internship": [
      {
        id: 1,
        title: "Physical Design (PD)",
        description: "Internship details on Physical Design.",
        image: "/blog/blogf.jpg",
        link: generateLink("Physical Design (PD)"),
        category: "VLSI internship",
      },
      {
        id: 2,
        title: "Physical Verification (PV)",
        description: "Internship details on Physical Verification.",
        image: "/blog/blogf.jpg",
        link: generateLink("Physical Verification (PV)"),
        category: "VLSI internship",
      },
      {
        id: 3,
        title: "Design For Testing (DFT)",
        description: "Internship details on Design For Testing.",
        image: "/blog/blogf.jpg",
        link: generateLink("Design For Testing (DFT)"),
        category: "VLSI internship",
      },
      {
        id: 4,
        title: "ASIC Design",
        description: "Internship details on ASIC Design.",
        image: "/blog/blogf.jpg",
        link: generateLink("ASIC Design"),
        category: "VLSI internship",
      },
      {
        id: 5,
        title: "Synthesis",
        description: "Internship details on Synthesis.",
        image: "/blog/blogf.jpg",
        link: generateLink("Synthesis"),
        category: "VLSI internship",
      },
      {
        id: 6,
        title: "Static Timing Analysis (STA)",
        description: "Internship details on Static Timing Analysis.",
        image: "/blog/blogf.jpg",
        link: generateLink("Static Timing Analysis (STA)"),
        category: "VLSI internship",
      },
    ],
    "Part-Time Courses": [
      {
        id: 1,
        title: "VLSI Design Methodology (PT)",
        description: "Part-time course...",
        image: "/blog/blog5.jpg",
        link: generateLink("VLSI Design Methodology (PT)"),
        category: "part-time",
      },
      {
        id: 2,
        title: "Advanced ASIC Verification (VLSI VM-PT)",
        description: "Part-time course...",
        image: "/blog/blog5.jpg",
        link: generateLink("Advanced ASIC Verification (VLSI VM-PT)"),
        category: "part-time",
      },
    ],
    "Online Courses": [
      {
        id: 1,
        title: "RTL Design using Verilog HDL",
        description: "Online course on RTL design using Verilog HDL.",
        image: "/blog/blog6.jpg",
        link: generateLink("RTL Design using Verilog HDL"),
        category: "online courses",
      },
      {
        id: 2,
        title: "Design Stream (RTL, STA, Synthesis)",
        description: "Covers RTL, STA, and Synthesis.",
        image: "/blog/blog6.jpg",
        link: generateLink("Design Stream (RTL, STA, Synthesis)"),
        category: "online courses",
      },
      {
        id: 3,
        title: "Verification Stream (UVM, SV)",
        description: "UVM and SystemVerilog courses.",
        image: "/blog/blog6.jpg",
        link: generateLink("Verification Stream (UVM, SV)"),
        category: "online courses",
      },
      {
        id: 4,
        title: "Embedded Systems & IoT",
        description: "Courses on Embedded Systems and IoT.",
        image: "/blog/blog6.jpg",
        link: generateLink("Embedded Systems & IoT"),
        category: "online courses",
      },
      {
        id: 5,
        title: "Core Electronics (DSP, RF, Device Physics)",
        description: "Covers DSP, RF, and Device Physics.",
        image: "/blog/blog6.jpg",
        link: generateLink("Core Electronics (DSP, RF, Device Physics)"),
        category: "online courses",
      },
      {
        id: 6,
        title: "Emerging Tech (RISC-V, Edge AI, ARM)",
        description: "Covers RISC-V, Edge AI, and ARM.",
        image: "/blog/blog6.jpg",
        link: generateLink("Emerging Tech (RISC-V, Edge AI, ARM)"),
        category: "online courses",
      },
    ],
    "Core Technical Courses": [
      {
        id: 1,
        title: "Semiconductor Physics and Device Modelling",
        description: "Study of semiconductor physics and modeling.",
        image: "/blog/blog7.jpg",
        link: generateLink("Semiconductor Physics and Device Modelling"),
        category: "core technical",
      },
      {
        id: 2,
        title: "Semiconductor Manufacturing & Process Technology",
        description: "Manufacturing processes and technology.",
        image: "/blog/blog7.jpg",
        link: generateLink("Semiconductor Manufacturing & Process Technology"),
        category: "core technical",
      },
      {
        id: 3,
        title: "RF and Microwave Engineering",
        description: "Topics in RF and microwave engineering.",
        image: "/blog/blog7.jpg",
        link: generateLink("RF and Microwave Engineering"),
        category: "core technical",
      },
      {
        id: 4,
        title: "Hardware Security and Reliability",
        description: "Ensuring hardware security.",
        image: "/blog/blog7.jpg",
        link: generateLink("Hardware Security and Reliability"),
        category: "core technical",
      },
      {
        id: 5,
        title: "PCB Design and Hardware Prototyping",
        description: "PCB design techniques and prototyping.",
        image: "/blog/blog7.jpg",
        link: generateLink("PCB Design and Hardware Prototyping"),
        category: "core technical",
      },
      {
        id: 6,
        title: "PLC – SCADA (Industrial Automation)",
        description: "PLC and SCADA systems.",
        image: "/blog/blog7.jpg",
        link: generateLink("PLC – SCADA (Industrial Automation)"),
        category: "core technical",
      },
      {
        id: 7,
        title: "Industrial Electrical and Control Systems",
        description: "Industrial electrical systems and control.",
        image: "/blog/blog7.jpg",
        link: generateLink("Industrial Electrical and Control Systems"),
        category: "core technical",
      },
    ],
  };

  const handleTabChange = (category: CourseCategory) => {
    setActiveTab(category);
  };

  return (
    <section className="md:py-16 py-10 md:px-5 px-2">
      <div className="container p-0">
        <div className="flex flex-wrap gap-4 mb-6 bg-[#EBF7FF] py-4 px-3 justify-center">
          {Object.keys(coursesByCategory).map((category) => (
            <button
              key={category}
              onClick={() => handleTabChange(category as CourseCategory)}
              className={`px-4 py-2 rounded-[2px] text-base transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#0B96F3] text-white"
                  : "bg-white text-[#4F4F4F]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coursesByCategory[activeTab].map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tabs;
