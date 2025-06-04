"use client"
import React from 'react'
import Image from 'next/image'

export default function Nextcomponent() {
  return (
    <>
      <div className="bg-[url('/gradientbackground.png')] bg-cover bg-center px-3 md:py-16 py-10">
        <div className="container p-0 m-auto text-center">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center lg:text-left text-center">
            {/* Left Side */}
            <div className='lg:col-span-8'>
              <h2 className="text-3xl md:text-5xl font-normal">
                <span className="text-[#0B96F3]">Our</span> Approach
              </h2>
              <p className="text-[#4F4F4F] md:w-4/6 w-full pt-5 font-normal break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>

              <div className="md:pt-16 pt-5">
                {/* Grid for icons & text */}
                <div className="grid grid-cols-2 lg:grid-cols-2 md:gap-8 gap-2">
                  {/* Item 1 */}
                  <div className="group text-center lg:text-left flex flex-col lg:flex-row items-center border shadow-[0_4px_24px_-10px_rgba(8,60,96,0.38)] border-[#0B96F3] py-2 rounded px-3 lg:items-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <div>
                      <Image src="/icon1.png" width={81} height={81} alt="icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    </div>
                    <div className="mt-3 lg:mt-0 lg:ml-4 max-w-[298px]">
                      <h5 className="font-normal text-xl text-black mb-2">Pragmatic Approach</h5>
                      <p className="text-sm font-normal text-[#4F4F4F]">
                        Learn from industry-expert trainers with years of hands-on experience in VLSI and Embedded Systems.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="group text-center lg:text-left flex flex-col lg:flex-row items-center border shadow-[0_4px_24px_-10px_rgba(8,60,96,0.38)] border-[#0B96F3] py-2 rounded px-3 lg:items-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <div>
                      <Image src="/icon2.png" width={81} height={81} alt="icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    </div>
                    <div className="mt-3 lg:mt-0 lg:ml-4 max-w-[298px]">
                      <h5 className="font-normal text-xl text-black mb-2">Experienced Team</h5>
                      <p className="text-sm font-normal text-[#4F4F4F]">
                        Learn from industry-expert trainers with years of hands-on experience in VLSI and Embedded Systems.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="group text-center lg:text-left flex flex-col lg:flex-row items-center border shadow-[0_4px_24px_-10px_rgba(8,60,96,0.38)] border-[#0B96F3] py-2 rounded px-3 lg:items-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <div>
                      <Image src="/icon.png" width={81} height={81} alt="icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    </div>
                    <div className="mt-3 lg:mt-0 lg:ml-4 max-w-[298px]">
                      <h5 className="font-normal text-xl text-black mb-2">Industry Tools Access</h5>
                      <p className="text-sm font-normal text-[#4F4F4F]">
                        Learn from industry-expert trainers with years of hands-on experience in VLSI and Embedded Systems.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="group text-center lg:text-left flex flex-col lg:flex-row items-center border shadow-[0_4px_24px_-10px_rgba(8,60,96,0.38)] border-[#0B96F3] py-2 rounded px-3 lg:items-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <div>
                      <Image src="/icon4.png" width={81} height={81} alt="icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    </div>
                    <div className="mt-3 lg:mt-0 lg:ml-4 max-w-[298px]">
                      <h5 className="font-normal text-black text-xl mb-2">Mobile App</h5>
                      <p className="text-sm font-normal text-[#4F4F4F]">
                        Learn from industry-expert trainers with years of hands-on experience in VLSI and Embedded Systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full h-full mt-12 text-right lg:mt-0 lg:col-span-4">
              <Image
                src="/girlimage.png"
                width={465}
                height={559}
                alt="girl"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
