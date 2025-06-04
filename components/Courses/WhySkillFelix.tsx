import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Hands-on experience",
    image: "/f1.svg",
    bg: "bg-[#E4F4F7]",
  },
  {
    title: "Continuous practice test",
    image: "/f2.svg",
    bg: "bg-[#E4F4F7]",
  },
  {
    title: "Mock interviews",
    image: "/f3.svg",
    bg: "bg-[#F4EBFB]",
  },
  {
    title: "Technical group discussion",
    image: "/f4.svg",
    bg: "bg-[#ECF7EC]",
  },
  {
    title: "24/7 online support",
    image: "/f5.png",
    bg: "bg-[#F4F6FA]",
  },
  {
    title: "Highly qualified faculties",
    image: "/f6.svg",
    bg: "bg-[#F4F6F6]",
  },
];

export default function WhySkillFelix() {
  return (
    <section className="py-16 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl  mb-10">Why <span className="text-[#0B96F3]">SkillFelix?</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`rounded-xl p-6 ${item.bg} flex flex-col items-center space-y-6 justify-center h-64 shadow-md `}
            >

              <div className="w-56 h-40  relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className=" text-xl">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
