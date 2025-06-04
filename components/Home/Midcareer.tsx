"use client"
import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Midcareer() {
  const { ref, inView } = useInView({ threshold: 0.3 }) // run every time in view
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) {
      setStartCount(false) // reset
      setTimeout(() => setStartCount(true), 100) // trigger restart
    }
  }, [inView])

  const stats = [
    { label: 'Years of Excellence', value: 15 },
    { label: 'Years of avg exp. of faculties', value: 15 },
    { label: 'Industry Partners', value: 250 },
  ]

  return (
    <div ref={ref}>
      <div className="custom-gradientt md:py-16 py-10">
        <div className="container bg-[url('/backgroundimg2.png')] rounded-xl bg-cover bg-right md:pt-[209px] pt-20 md:pb-0 pb-4">
          <div className='flex lg:justify-start items-center text-white lg:p-8'>
            <div className='lg:p-0 text-center lg:text-left'>
              <h2 className='text-3xl md:text-5xl md:max-w-2xl w-full'>
                Our VLSI Courses for Mid-Career Professionals
              </h2>
              <p className='lg:max-w-2xl mt-7'>
                The rapidly changing nature of jobs and workplace challenges have made real-time upskilling a fundamental need for every professional today. Our transformation learning process will add real value to your professional career.
              </p>

              {/* Desktop Stats */}
              <div className='hidden lg:block'>
                <div className='flex justify-start bg-white/10 backdrop-blur-md pl-6 py-4 w-[914px] rounded mt-20'>
                  {stats.map((item, idx) => (
                    <div key={idx} className={`transition duration-300 hover:scale-110 ${idx !== 0 ? 'ml-16' : ''}`}>
                      <h2 className='text-[40px] font-normal'>
                        {startCount && <CountUp end={item.value} duration={3} />}+
                      </h2>
                      <p className='text-xl'>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className='lg:hidden'>
          <div className='text-center'>
            {stats.map((item, index) => (
              <div
                key={index}
                className='rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] py-4 border-gray-700 m-4 sm:mx-16 md:mx-32 space-y-3 transition duration-300 hover:scale-105'
              >
                <h2 className='text-3xl md:text-4xl font-normal underline'>
                  {startCount && <CountUp end={item.value} duration={3} />}+
                </h2>
                <p className='md:text-xl text-base'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
