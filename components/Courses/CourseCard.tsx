import Link from "next/link";
import Image from "next/image";

type Course = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
};

const CourseCard = ({ title, description, image, link }: Course) => {
  return (
    <Link href={link} passHref>
      <div className="flex flex-col h-full  cursor-pointer bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden relative">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <h3 className="text-lg font-semibold text-[#162726] mb-2">{title}</h3>
          <p className="text-sm text-[#4F4F4F] mb-4">{description}</p>
          <span className="mt-4  text-[#0B96F3]  font-medium hover:underline">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
