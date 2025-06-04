"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Innovation() {
    const [showParagraph, setparagraph] = useState(false);

    const handletoagle = () => {
        setparagraph(true);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
                className="bg-[url('/secbg.png')] bg-cover px-2 md:px-5 py-10 md:py-16 shadow-[0px_4px_52px_-5px_#0000000D]"
            >
                <div className="container p-0 text-black  ">
                    <div className='w-full md:flex justify-between gap-5 items-center text-center md:max-w-6xl w-full bg-white md:p-10 p-5 rounded-xl m-auto'>
                        <div className='md:w-1/2'>
                            <h2 className='text-3xl md:text-5xl text-center md:text-left'>Innovation through <span className='text-[#0B96F3]'>collaboration</span></h2>
                        </div>


                        <div className='md:w-1/2 mt-5 lg:mt-0 text-center md:text-left'>
                            <p className=' text-center text-lg text-[#4F4F4F] md:text-left'>
                                Mirafra’s culture is a tapestry of innovation, collaboration, and excellence. We foster an environment where creativity thrives, ideas flourish, and every team member is empowered to make a meaningful impact. Our commitment to continuous learning, inclusivity, and a shared passion for technology creates a vibrant atmosphere where personal growth and professional development are central to our values.
                            </p>
                            <p className=' mt-2 text-[#4F4F4F] text-lg text-center md:text-left hidden lg:block'>
                                We embrace the power of diversity and are committed to fostering an inclusive workplace where every voice is heard and valued. We actively support initiatives to increase the representation of women in our workforce, leadership roles, and technology-related roles. Through mentoring programmes, networking opportunities, and a commitment to gender equality, we aim to create a workplace where women can excel and thrive in their careers.
                            </p>

                            <div className=''>

                                {!showParagraph && (
                                    <div className='flex justify-center md:justify-start'>
                                        <button
                                            onClick={handletoagle}
                                            className='btn-primary flex items-center mt-4 gap-2 text-[#ffffff] hover:bg-[#000717]'>
                                            view more <Image src='/arrow.svg' alt='arrow' height={16} width={16} />
                                        </button>
                                    </div>

                                )}

                                {
                                    showParagraph && (
                                        <p className=' mt-2 text-lg text-center lg:text-left text-[#4F4F4F]'>
                                            We understand the importance of work-life balance and offer a range of activities to ensure our employees enjoy a fun and healthy work environment. From sporting events to team outings, birthday celebrations, and family days, we
                                        </p>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            
        </motion.div >
        </>
    );
}
