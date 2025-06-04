// lib/courseData.ts
export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;      // slug generated from title
  category: CourseCategory;
};

export type CourseCategory =
  | "Job-Oriented Specialization"
  | "Academic Programs"
  | "Emerging Technology"
  | "VLSI Internship"
  | "Part-Time Courses"
  | "Online Courses"
  | "Core Technical Courses";

// Utility to generate slug from title
const generateSlug = (title: string) =>
  title
     .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')    // Remove all non-word characters except spaces and hyphens
    .replace(/\s+/g, '-')        // Replace spaces with hyphens
    .replace(/-+/g, '-')         // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');// remove trailing hyphens if any

// Your courses grouped by category (removed `link` from here)
const coursesByCategory: Record<CourseCategory, Omit<Course, 'link'>[]> = {
  "Job-Oriented Specialization": [
    {
      id: 1,
      title: "Advanced Embedded System Design",
      description: "Course details...",
      image: "/blog/blog1.jpg",
      category: "Job-Oriented Specialization",
    },
    {
      id: 2,
      title: "Advanced VLSI Design & Verification",
      description: "Course details...",
      image: "/blog/blog1.jpg",
      category: "Job-Oriented Specialization",
    },
    {
      id: 3,
      title: "Advanced ASIC Verification (VLSI VM)",
      description: "Course details...",
      image: "/blog/blog1.jpg",
      category: "Job-Oriented Specialization",
    },
    {
      id: 4,
      title: "Advanced VLSI Design & DFT (VLSI DFT)",
      description: "Course details...",
      image: "/blog/blog1.jpg",
      category: "Job-Oriented Specialization",
    },
    {
      id: 5,
      title: "Advanced Physical Design & Verification (VLSI PD)",
      description: "Course details...",
      image: "/blog/blog1.jpg",
      category: "Job-Oriented Specialization",
    },
  ],
  "Academic Programs": [
    {
      id: 1,
      title: "Executive M.Tech Program",
      description: "Course details...",
      image: "/blog/blog2.jpg",
      category: "Academic Programs",
    },
    {
      id: 2,
      title: "VLSI Internship Program",
      description: "Course details...",
      image: "/blog/blog2.jpg",
      category: "Academic Programs",
    },
  ],
  "Emerging Technology": [
    {
      id: 1,
      title: "IoT – Internet of Things",
      description: "Course details...",
      image: "/blog/blog3.jpg",
      category: "Emerging Technology",
    },
    {
      id: 2,
      title: "Edge AI – Edge Artificial Intelligence",
      description: "Course details...",
      image: "/blog/blog3.jpg",
      category: "Emerging Technology",
    },
    {
      id: 3,
      title: "RISC-V Architecture",
      description: "Course details...",
      image: "/blog/blog3.jpg",
      category: "Emerging Technology",
    },
    {
      id: 4,
      title: "ARM Architecture",
      description: "Course details...",
      image: "/blog/blog3.jpg",
      category: "Emerging Technology",
    },
    {
      id: 5,
      title: "IC Packaging & Manufacturing",
      description: "Course details...",
      image: "/blog/blog3.jpg",
      category: "Emerging Technology",
    },
  ],
  "VLSI Internship": [
    {
      id: 1,
      title: "Physical Design (PD)",
      description: "Internship details on Physical Design.",
      image: "/blog/blogf.jpg",
      category: "VLSI Internship",
    },
    {
      id: 2,
      title: "Physical Verification (PV)",
      description: "Internship details on Physical Verification.",
      image: "/blog/blogf.jpg",
      category: "VLSI Internship",
    },
    {
      id: 3,
      title: "Design For Testing (DFT)",
      description: "Internship details on Design For Testing.",
      image: "/blog/blogf.jpg",
      category: "VLSI Internship",
    },
    {
      id: 4,
      title: "ASIC Design",
      description: "Internship details on ASIC Design.",
      image: "/blog/blogf.jpg",
      category: "VLSI Internship",
    },
    {
      id: 5,
      title: "Synthesis",
      description: "Internship details on Synthesis.",
      image: "/blog/blogf.jpg",
      category: "VLSI Internship",
    },
    {
      id: 6,
      title: "Static Timing Analysis (STA)",
      description: "Internship details on Static Timing Analysis.",
      image: "/blog/blogf.jpg",
      category: "VLSI Internship",
    },
  ],
  "Part-Time Courses": [
    {
      id: 1,
      title: "VLSI Design Methodology (PT)",
      description: "Part-time course...",
      image: "/blog/blog5.jpg",
      category: "Part-Time Courses",
    },
    {
      id: 2,
      title: "Advanced ASIC Verification (VLSI VM-PT)",
      description: "Part-time course...",
      image: "/blog/blog5.jpg",
      category: "Part-Time Courses",
    },
  ],
  "Online Courses": [
    {
      id: 1,
      title: "RTL Design using Verilog HDL",
      description: "Online course on RTL design using Verilog HDL.",
      image: "/blog/blog6.jpg",
      category: "Online Courses",
    },
    {
      id: 2,
      title: "Design Stream (RTL, STA, Synthesis)",
      description: "Covers RTL, STA, and Synthesis.",
      image: "/blog/blog6.jpg",
      category: "Online Courses",
    },
    {
      id: 3,
      title: "Verification Stream (UVM, SV)",
      description: "UVM and SystemVerilog courses.",
      image: "/blog/blog6.jpg",
      category: "Online Courses",
    },
    {
      id: 4,
      title: "Embedded Systems & IoT",
      description: "Courses on Embedded Systems and IoT.",
      image: "/blog/blog6.jpg",
      category: "Online Courses",
    },
    {
      id: 5,
      title: "Core Electronics (DSP, RF, Device Physics)",
      description: "Covers DSP, RF, and Device Physics.",
      image: "/blog/blog6.jpg",
      category: "Online Courses",
    },
    {
      id: 6,
      title: "Emerging Tech (RISC-V, Edge AI, ARM)",
      description: "Covers RISC-V, Edge AI, and ARM.",
      image: "/blog/blog6.jpg",
      category: "Online Courses",
    },
  ],
  "Core Technical Courses": [
    {
      id: 1,
      title: "Semiconductor Physics and Device Modelling",
      description: "Study of semiconductor physics and modeling.",
      image: "/blog/blog7.jpg",
      category: "Core Technical Courses",
    },
    {
      id: 2,
      title: "Semiconductor Manufacturing & Process Technology",
      description: "Manufacturing processes and technology.",
      image: "/blog/blog7.jpg",
      category: "Core Technical Courses",
    },
    {
      id: 3,
      title: "RF and Microwave Engineering",
      description: "Topics in RF and microwave engineering.",
      image: "/blog/blog7.jpg",
      category: "Core Technical Courses",
    },
    {
      id: 4,
      title: "Hardware Security and Reliability",
      description: "Ensuring hardware security.",
      image: "/blog/blog7.jpg",
      category: "Core Technical Courses",
    },
    {
      id: 5,
      title: "PCB Design and Hardware Prototyping",
      description: "PCB design techniques and prototyping.",
      image: "/blog/blog7.jpg",
      category: "Core Technical Courses",
    },
    {
      id: 6,
      title: "PLC – SCADA (Industrial Automation)",
      description: "PLC and SCADA systems.",
      image: "/blog/blog7.jpg",
      category: "Core Technical Courses",
    },
    {
      id: 7,
      title: "Industrial Electrical and Control Systems",
      description: "Industrial electrical systems and control.",
      image: "/blog/blog7.jpg",
      category: "Core Technical Courses",
    },
  ],
};

// Flatten all courses into a single array for easy lookup by slug and generate slug here
export const allCourses: Course[] = Object.values(coursesByCategory).flat().map(course => ({
  ...course,
  link: generateSlug(course.title),
}));

export default allCourses;
