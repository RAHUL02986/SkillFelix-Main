"use client";
import React from "react";
import CountUp from "react-countup";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 15, suffix: "+", label: "Yrs Avg Faculties Exp" },
  { value: 250, suffix: "+", label: "Industry Partners" },
  { value: 5000, suffix: "+", label: "Alumni Globally" },
  { value: 1000, suffix: "+", label: "Engineers Trained/Year" },
  { value: 1000, suffix: "+", label: "Institutions Collaborated" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#032035] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Maven proven <br className="md:hidden" />
          <span className="text-white"> track record</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl ">
                <CountUp end={stat.value} duration={4} />{stat.suffix}
              </div>
              <p className="text-xl mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
