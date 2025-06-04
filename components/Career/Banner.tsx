import Image from 'next/image'
import React from 'react'

export default function  Banner() {
    return (
        <>
            <div className=' px-5 p-16 md:p-32  bg-cover bg-top bg-[url("/Careerb.png")] mt-[85px] '>
                {/* Overlay */}

                <div className="container relative z-10">
                    <div className='text-center text-white'>
                        <div className='w-full lg:max-w-5xl mx-auto'>
                            <h1 className='text-4xl md:text-7xl'>
                                Join us on our path to
                                <span className='text-[#0B96F3]'> excellence </span>
                                <p className='text-lg py-3'>Let’s innovate and grow together!</p>
                            </h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button  className='btn-primary flex items-center mt-4 gap-3 text-[#ffffff] hover:bg-[#000717]'>
                                Apply now <Image src='/arrow.svg' alt='arrow' height={16} width={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

