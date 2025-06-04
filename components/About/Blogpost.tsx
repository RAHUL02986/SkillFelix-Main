"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the TypeScript type for a blog post
type BlogPostType = {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  category: string;
};

// Static blog post data
const blogPosts: BlogPostType[] = [
  {
    slug: "soc-verification-methodologies",
    title: "SoC Verification Flow and Methodologies",
    date: "2022-12-12",
    author: "SIVAKUMAR P R",
    image: "/blog-b1.png",
    category: "SoC Verification",
  },
  {
    slug: "mqtt-iot-devices",
    title: "MQTT: Efficient Communication for IoT Devices",
    date: "2025-05-22",
    author: "MAVEN SILICON",
    image: "/blog-s1.png",
    category: "Embedded Systems",
  },
  {
    slug: "final-year-embedded-projects-2025",
    title: "Final Year Embedded System Projects 2025",
    date: "2025-05-20",
    author: "MAVEN SILICON",
    image: "/blog-s2.png",
    category: "Embedded Systems",
  },
  {
    slug: "understanding-coap",
    title: "Understanding CoAP: A Lightweight IoT Protocol",
    date: "2025-05-16",
    author: "MAVEN SILICON",
    image: "/blog-s3.png",
    category: "Embedded Systems",
  },
];

const BlogPost: React.FC = () => {
  const [featured, ...others] = blogPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-5xl text-[#162726] text-center mb-10 leading-snug">
        Expertise to level up <span className="text-">your VLSI skills</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Featured Post */}
        <div className="md:w-2/3 relative h-[450px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="absolute inset-0 w-full h-full object-cover z-0"
            priority
          />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,_#000_0%,_#000_32.5%,_transparent)]" />
          <Link href={`/blog/${featured.slug}`}>
            <div className="relative z-20 p-6 h-full flex flex-col justify-end text-white cursor-pointer">
              <p className="text-sm inline-block bg-white text-black px-2 py-1 rounded mb-2 w-fit">
                {featured.category}
              </p>
              <h2 className="text-2xl font-semibold">{featured.title}</h2>
              <p className="text-sm mt-2">
                BY {featured.author} • {featured.date}
              </p>
            </div>
          </Link>
        </div>

        {/* Sidebar Posts */}
        <div className="md:w-1/3 flex flex-col gap-6">
          {others.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="flex flex-col sm:flex-row items-start gap-4 cursor-pointer group">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={128}
                  height={128}
                  className="w-full sm:w-32 h-32 object-cover transition-all duration-300 group-hover:scale-105 group-hover:rounded-t-2xl"
                />
                <div className="flex-1">
                  <p className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded mb-1 inline-block">
                    {post.category}
                  </p>
                  <h4 className="text-xl font-semibold leading-tight">{post.title}</h4>
                  <p className="text-xs mt-1">
                    BY {post.author} • {post.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
