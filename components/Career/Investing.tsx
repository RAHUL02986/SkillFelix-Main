"use client";
import Image from 'next/image';
import React, { useState } from 'react';

export default function  Investing() {
    const [showParagraph, setParagraph] = useState(false);

    const handleToggle = () => {
        setParagraph(true);
    };

    return (
        <div className="px-2 md:px-5 py-10 md:py-16 bg-[linear-gradient(23.46deg,_#FFFFFF_30.09%,_#F2FAFF_68.6%)]" >
            <div className="container p-0">
                <div className='md:flex justify-between gap-10 items-center'>

                    <div className="w-full md:w-1/2 mt-5 lg:mt-0 text-center md:text-left mx-auto">
                        <h2 className='text-3xl md:text-5xl mb-4'>Investing in your <span className='text-[#0B96F3]'>success</span></h2>
                        <p className="text-lg  text-[#4F4F4F]">
                            At Mirafra, we believe in investing in our employees’ success by providing them with the resources, tools, and training they need to excel in their roles. Our comprehensive training and development programs are designed to help our employees stay ahead of the curve and equip them with the skills and knowledge they need to meet the evolving needs of our clients.
                        </p>

                        <p className="text-lg  text-[#4F4F4F] mt-2 hidden lg:block">
                            We offer regular in-house training sessions, mentorship programs, and professional development courses to help our employees enhance their technical and soft skills. Our training programs cover a wide range of topics, including emerging technologies, project management, leadership development, and communication skills.
                        </p>

                        {!showParagraph && (
                            <div className="flex justify-center md:justify-start">
                                <button
                                    onClick={handleToggle}
                                    className='btn-primary flex items-center mt-4 gap-2 text-[#ffffff] hover:bg-[#000717]'>
                                    View more <Image src="/arrow.svg" alt="arrow" height={16} width={16} />
                                </button>
                            </div>
                        )}

                        {showParagraph && (
                            <>
                                <p className="text-lg  text-[#4F4F4F] mt-2">
                                    We also encourage our employees to pursue certifications and attend industry conferences and events to stay up-to-date with the latest trends and best practices. Our commitment to our employees’ professional growth and development is a testament to our values of excellence, innovation, and continuous improvement.
                                </p>
                                <p className='text-lg  text-[#4F4F4F] mt-2'>
                                    We believe that investing in our employees is the key to our success, and we are committed to providing them with the resources and support they need to achieve their goals and reach their full potential.
                                </p>
                            </>

                        )}
                    </div>

                    <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                        <video autoPlay loop controls>
                            <source src="https://mirafra.com/wp-content/uploads/2024/05/Collage-Mirafra-V2-1.mp4" />
                        </video>
                    </div>
                </div>



            </div>
        </div>
    );
};

