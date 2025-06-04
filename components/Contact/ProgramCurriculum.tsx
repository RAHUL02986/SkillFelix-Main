"use client";
import Image from "next/image";
import { ArrowRight, Calendar, MonitorPlay } from "lucide-react";

const ProgramCurriculum: React.FC = () => {
  const curriculumItems: string[] = [
    "System on Chip design",
    "Advanced Computer Architecture - RISC V",
    "Analog Mixed Signal Design",
    "AI Chip Design",
    "ASIC Verification with SystemVerilog and SVA",
    "Design For Test (DFT) for SoCs",
    "Next Generation IC Manufacturing, Packaging and Testing",
    "UVM for Digital and AMS Verification",
  ];

  return (
    <section className="max-w-xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-white">
      {/* Top Image */}
      <div className="relative h-56 w-full">
        <Image
          src="/images/chip.jpg"
          alt="Program Image"
          fill
          className="object-cover"
        />
        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Calendar size={18} />
            <MonitorPlay size={18} />
            <span className="text-sm font-medium">Weekend Program</span>
          </div>
          <h2 className="text-xl font-semibold">Our Program Curriculum</h2>
        </div>
      </div>

      {/* Curriculum List */}
      <div className="p-6 space-y-4">
        {curriculumItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-gray-800 hover:text-[#15958C] transition"
          >
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <ArrowRight size={16} />
            </div>
            <span className="text-sm">{item}</span>
          </div>
        ))}

        {/* Button */}
        <div className="pt-6">
          <button className="flex items-center gap-2 px-6 py-2 bg-[#15958C] text-white text-sm rounded-full hover:bg-[#117c73] transition">
            Know More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProgramCurriculum;
