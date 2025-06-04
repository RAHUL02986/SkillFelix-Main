"use client"
import React, { useState } from 'react';

export default function ContactpageN() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const isValid = Object.values(formData).every(field => field.trim() !== '');
    if (!isValid) {
      return; 
    }

    
    console.log("Form submitted:", formData);
  };

  const getInputClass = (value: string) => {
    return `py-3 px-4 w-full border outline-0 rounded placeholder:text-black bg-white 
      ${submitted && !value ? 'border-red-500' : 'border-gray-200'} 
      focus:border-[#0B96F3] focus:ring-1 focus:ring-[#0B96F3]`;
  };

  return (
    <>
      <div className="container md:py-16 py-10">
        <div className='bg-[linear-gradient(147.47deg,_#FFFFFF_33.31%,_#F2FAFF_64.7%)] md:py-12 py-4 md:px-7 px-3 backdrop-blur-[124px] shadow-[0px_4px_52px_-5px_#0000000D] rounded-[10px]'>
          <div className='md:p-6 p-0'>
            <div className="bg-[url('/contactImage.png')] bg-center bg-cover w-full rounded shadow-xl">
              <div className='flex justify-center items-center h-100 text-white'>
                <div className='mt-[297px] text-center mb-4 bg-[#D9D9D90A] backdrop-blur-xl px-0 lg:px-20 rounded space-y-3 py-4'>
                  <h2 className='text-3xl md:text-5xl font-normal'>Get in <span className='text-[#0B96F3]'>Touch</span></h2>
                  <p className='text-[18px] font-normal text-white'>Stay in Touch with us, We’re Here for You</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center py-11 max-w-[930px] m-auto'>
            <form onSubmit={handleSubmit} className='w-full mx-4 lg:w-full px-0'>
              <div className='space-y-6'>
                <div className='lg:flex gap-6'>
                  <input
                    type="text"
                    name="name"
                    placeholder='Enter your Name'
                    value={formData.name}
                    onChange={handleChange}
                    className={getInputClass(formData.name)}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder='Enter your email Address'
                    value={formData.email}
                    onChange={handleChange}
                    className={`py-3 mt-6 lg:mt-0 px-4 w-full ${getInputClass(formData.email)}`}
                    required
                  />
                </div>
                <div className='space-y-6'>
                  <input
                    type="tel"
                    name="phone"
                    placeholder='Enter Mobile Number'
                    value={formData.phone}
                    onChange={handleChange}
                    className={getInputClass(formData.phone)}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder='Send Message'
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-6 py-3 ${getInputClass(formData.message)}`}
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button type='submit' className='bg-[#0B96F3] hover:bg-[#000717] text-white py-3 w-full'>Send Now &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
