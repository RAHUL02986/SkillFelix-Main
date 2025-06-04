'use client';
import React from 'react';
import Image from 'next/image';
const page = () => {
    return (
        <>
            <div className="grid bg-[url('/Course.svg')] lg:grid-cols-12 bg-center bg-cover mt-16" >
                {/* Left section with text and button */}
                <div className=' col-span-3 lg:col-span-7 text-center px-4 lg:px-0 py-10 lg:py-0 lg:text-left flex lg:flex-col lg:justify-center  lg:pl-[81px] w-full lg:max-w-3xl'>
                    <div>
                        <div className=''>
                            <h2 className='font-normal text-3xl md:text-[45px] leading-[100%] text-[#ffffff]'>
                                Go from student to hired with Courses, Mentorship & Labs.
                            </h2>
                        </div>
                        <div className='py-6'>
                            <p className='font-normal text-base md:text-[18px] leading-[21px] text-[#ffffff]'>
                                We pride ourselves on having the most relevant and up-to-date skills
                                training available, and experienced mentors who are motivated to
                                guide and provide individualized training.
                            </p>
                        </div>
                        <div className='flex  justify-center lg:justify-start'>
                            <button className=' w-60 bg-[#0B96F3] p-3 rounded-[2px] text-[16px]  hover:bg-[#000717] leading-[100%] text-[#ffffff] flex gap-2 justify-center items-center'>
                                Explore friendly Courses
                                <Image src="/arrow.svg" alt='arrow' height={16} width={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right section with image */}

                <div className='col-span-12 md:col-span-5 lg:flex justify-end items-end hidden'>
                    <Image className='object-cover' src='/Group.svg' alt='Group' height={551} width={659} />
                </div>
            </div>
        </>
    )
}

export default page
