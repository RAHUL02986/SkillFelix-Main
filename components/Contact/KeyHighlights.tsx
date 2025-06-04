"use client";
import Image from "next/image";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  MonitorPlay,
  Users,
  CalendarDays,
  RefreshCw,
  ShieldCheck,
  School,
  Laptop,
} from "lucide-react";

interface Highlight {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  color: string;
  iconBg: string;
  iconColor: string;
}

const highlights: Highlight[] = [
  { icon: BookOpen, title: "Industry-Aligned Curriculum", color: "bg-blue-500", iconBg: "bg-blue-100", iconColor: "text-blue-700" },
  { icon: Briefcase, title: "Hands-on Learning", color: "bg-blue-500", iconBg: "bg-blue-100", iconColor: "text-blue-700" },
  { icon: Laptop, title: "Flexible Learning Mode", color: "bg-teal-700", iconBg: "bg-teal-100", iconColor: "text-teal-700" },
  { icon: GraduationCap, title: "Career Advancement", color: "bg-blue-500", iconBg: "bg-blue-100", iconColor: "text-blue-700" },
  { icon: Users, title: "Expert Faculty & Mentorship", color: "bg-teal-700", iconBg: "bg-teal-100", iconColor: "text-teal-700" },
  { icon: MonitorPlay, title: "Masterclasses from Industry Experts", color: "bg-blue-900", iconBg: "bg-blue-900", iconColor: "text-white" },
  { icon: CalendarDays, title: "LMS for Anytime learning", color: "bg-teal-700", iconBg: "bg-teal-100", iconColor: "text-teal-700" },
  { icon: RefreshCw, title: "Multiple Exit Option to suit your Career", color: "bg-teal-700", iconBg: "bg-teal-100", iconColor: "text-teal-700" },
  { icon: ShieldCheck, title: "Strong Alumni Network", color: "bg-blue-500", iconBg: "bg-blue-100", iconColor: "text-blue-700" },
  { icon: School, title: "Classes at PES University", color: "bg-blue-500", iconBg: "bg-blue-100", iconColor: "text-blue-700" },
];

export default function KeyHighlights() {
  return (
    <section className="md:px-4 md:py-16 px-2 py-10 mx-auto bg-[linear-gradient(315.61deg,_#FFFFFF_53.51%,_#F2FAFF_91.44%)]">
      <div className="container p-0">
        <h2 className="md:text-5xl text-3xl text-center mb-10">
          Key <span className="text-[#0B96F3]">Highlights</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:col-span-2">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-2 py-2 rounded-xl hover:border-[#0B96F3] hover:border border border-white bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <div
                    className={`${item.iconBg} rounded-full p-3 flex items-center justify-center`}
                  >
                    <IconComponent width={25} height={25} className={item.iconColor} />
                  </div>
                  <h3 className="text-base font-normal">{item.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="space-y-4 md:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              <Image
                src="/contact/11.jpeg"
                alt="Meeting"
                width={400}
                height={200}
                className="rounded-lg object-cover rounded-xl w-full h-[305px]"
              />
              <Image
                src="/contact/12.jpeg"
                alt="PES Campus"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full rounded-xl h-[305px]"
              />
            </div>
            <Image
              src="/contact/13.png"
              alt="Certificate"
              width={820}
              height={200}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
