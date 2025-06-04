"use client";
import {
  FaBook,
  FaChartLine,
  FaChalkboardTeacher,
  FaLaptop,
  FaDoorOpen,
  FaProjectDiagram,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Benefit {
  title: string;
  description: string;
  icon: IconType;
}

const benefits: Benefit[] = [
  {
    title: "Industry-Endorsed Curriculum",
    description:
      "Our curriculum is designed in collaboration with leading semiconductor companies to ensure you gain the most relevant and up-to-date VLSI knowledge.",
    icon: FaBook,
  },
  {
    title: "Career Growth",
    description:
      "Our program equips you with the right skills and industry connections to land high-paying roles in top semiconductor companies.",
    icon: FaChartLine,
  },
  {
    title: "Masterclasses from Industry Experts",
    description:
      "Learn from the best! Our faculty includes seasoned professionals from top semiconductor companies, delivering masterclasses and hands-on insights.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "LMS for Anytime Learning",
    description:
      "Gain access to our state-of-the-art Learning Management System (LMS), where you can revisit lectures, access assignments, and engage with content anytime, anywhere.",
    icon: FaLaptop,
  },
  {
    title: "Multiple Exit Options to suit your Career",
    description:
      "We provide a flexible exit policy, allowing students to earn industry-recognized certifications at different stages if they need to pause their M.Tech journey.",
    icon: FaDoorOpen,
  },
  {
    title: "One Pilot Project Every Semester",
    description:
      "Each semester, you'll work on real-world pilot projects, applying your knowledge to solve practical VLSI design challenges and build a strong portfolio.",
    icon: FaProjectDiagram,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-[linear-gradient(147.47deg,_#FFFFFF_33.31%,_#F2FAFF_64.7%)] md:px-5 md:py-16 py-10 px-2">
      <div className="container mx-auto text-center p-0">
        <h2 className="text-3xl md:text-5xl font-normal mb-12">
          Benefits of <span className="text-[#0B96F3]"> Maven courses</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6
                       border border-transparent rounded-md
                       transition-all duration-300
                       hover:border-[#0B96F3] rounded-xl
                       hover:-translate-y-3
                       hover:shadow-lg
                       cursor-pointer"
              >
                <div
                  className="bg-gradient-to-br from-blue-500 to-indigo-500 p-4 rounded-full mb-4
                            transition-colors duration-300
                            group-hover:bg-white group-hover:text-blue-600"
                >
                  <Icon
                    className="text-white text-2xl
                              group-hover:text-[#0B96F3]
                              transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl mb-2">{benefit.title}</h3>
                <p className="text-base">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
