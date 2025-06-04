"use client";
import React from 'react';
import RecruitersReviewSlider from "@/components/Courses/RecruitersReviewSlider";
import allCourses from '@/lib/courseData';
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from 'framer-motion';
import VLSIDesignMethodology from '@/components/Courses/VLSIDesignMethodology';
import PhysicalDesign from '@/components/Courses/PhysicalDesign';
import Scholarships from "@/components/Courses/Scholarships";
import WhySkillFelix from "@/components/Courses/WhySkillFelix";
import Image from 'next/image';
import { use } from 'react';

type Props = {
    params: Promise<{ slug: string }>;
};

export default function CoursePage({ params }: Props) {
    const { slug } = use(params); // Unwrap params as it's now a Promise
    const sanitizedSlug = slug.trim().replace(/-+$/g, '');

    const course = allCourses.find(c => c.link === sanitizedSlug);

    if (!course) {
        return <p className="text-center text-red-500 mt-20">Course not found</p>;
    }

    return (
        <main className="bg-white text-gray-900 mt-[85px]">

            <section className="bg-gradient-to-r from-[#032035] to-[#0B96F3] text-white py-24 px-6 md:px-12">
                <div className="container mx-auto flex flex-col p-0 md:flex-row items-center gap-12">

                    {/* Text Content Animation */}
                    <motion.div
                        className="md:w-1/2"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Breadcrumb
                            items={[
                                { label: 'Home', href: '/' },
                                { label: 'Courses', href: '/courses' },
                                { label: course.title }
                            ]}
                        />
                        <h1 className="md:text-7xl text-5xl font-extrabold mb-4">{course.title}</h1>
                        <p className="text-lg leading-relaxed">{course.description}</p>
                        <p className="mt-4 italic">Category: {course.category}</p>
                    </motion.div>

                    {/* Image Animation */}
                    <motion.div
                        className="md:w-1/2"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={800} // adjust width
                            height={500} // adjust height
                            className="rounded-xl shadow-xl w-full max-w-2xl mx-auto"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto py-20 px-6 md:px-12">
                <div className='container p-0'>
                    <h2 className="md:text-5xl text-3xl md:max-w-3xl w-full m-auto mb-6 text-center">
                        What is <span className='text-[#0B96F3]'>{course.title}?</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-center text-lg text-[#4F4F4F] leading-relaxed">
                        This course is designed to provide an in-depth understanding of {course.title} concepts,
                        methodologies, and practical applications. It is ideal for engineers and professionals
                        aiming to deepen their expertise in this advanced field.
                    </p>
                </div>
            </section>

            <section className="md:py-16 py-10 md:px-5 px-2 bg-[url('/secbg.png')] bg-cover bg-top">
                <div className='container py-20 rounded-2xl shadow-2xl 
    bg-gradient-to-r from-white/100 to-white/70 z-20'>
                    <h2 className="md:text-5xl text-3xl max-w-5xl m-auto mb-10 text-center">
                        Why Advanced Training for <span className='text-[#0B96F3]'>{course.category} Engineers?</span>
                    </h2>
                    <ul className="max-w-5xl m-auto flex items-top text-[#4F4F4F] text-lg flex-wrap list-disc list-inside">
                        <li className='md:w-1/2 '>Gain hands-on experience with industry-standard tools and software.</li>
                        <li className='md:w-1/2  mt-0'>Learn from experienced professionals and industry experts.</li>
                        <li className='md:w-1/2 '>Develop practical skills that are directly applicable to your projects.</li>
                        <li className='md:w-1/2 '>Access 24/7 online support and comprehensive learning materials.</li>
                        <li className='md:w-1/2 '>Join a global community of over 5000 alumni and industry partners.</li>
                    </ul>
                </div>
            </section>

            {course.link === "vlsi-design-methodology-pt" && <VLSIDesignMethodology />}
            {course.link === "physical-design-pd" && <PhysicalDesign />}

            <RecruitersReviewSlider />

            <section className="mx-auto md:py-16 py-10 md:px-5 px-2">
                <div className='container'>
                    <h2 className="md:text-5xl text-3xl mb-10 text-center">
                        Course <span className='text-[#0B96F3]'>Curriculum</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                        {[
                            {
                                title: "Module 1: Introduction & Basics",
                                content: `Overview of fundamentals, architecture, and core concepts of ${course.title}.`
                            },
                            {
                                title: "Module 2: Advanced Techniques",
                                content: "Deep dive into advanced methodologies and practical exercises."
                            },
                            {
                                title: "Module 3: Hands-on Labs",
                                content: "Interactive labs and real-world projects to apply the knowledge."
                            },
                            {
                                title: "Module 4: Industry Tools & Applications",
                                content: "Practical use of industry tools, simulations, and case studies."
                            }
                        ].map((mod, i) => (
                            <div key={i} className="p-10 border rounded-xl shadow-sm hover:shadow-xl hover:border-[#0B96F3] transition-shadow bg-white">
                                <h3 className="text-xl text-black mb-2">{mod.title}</h3>
                                <p className="text-[#4F4F4F] text-lg">{mod.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Scholarships />
            <WhySkillFelix />

        </main>
    );
}
