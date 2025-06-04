"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Career() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    location: "",
    file: null as File | null,
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = formData.firstName && formData.lastName && formData.email && formData.mobile && formData.location;
    if (!isValid) return;

    console.log(formData);
  };

  const inputClass =
    "focus:border-2 border p-2 rounded w-full outline-none transition-colors duration-300 border-gray-300 focus:border-blue-500";

  return (
    <>
      <div className="bg-gradient-to-tl from-[#F2FAFF] to-[#FFFFFF] flex items-center justify-center text-center lg:text-left md:px-5 py-10 px-2 md:py-16 ">
        <div className="container w-full bg-white/70 backdrop-blur-md shadow-md rounded-xl flex flex-col md:flex-row items-center gap-10 py-10 px-4 lg:p-10">
          {/* Left Section with Slide-In from Left */}
          <motion.div
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-normal mb-8 text-[#162726]">
              Internship opportunities at <span className="text-[#0B96F3]">Mirafra</span>
            </h2>
            <p className="mb-4">
              Embark on a dynamic learning journey with Mirafra. Our internship programs provide hands-on
              experience, mentorship, and the chance to work on cutting-edge projects, setting you on the path
              to a rewarding career in technology.
            </p>
            <p className="mb-6">
              Join us and unleash your potential at Mirafra, where you’ll also have the opportunity to collaborate
              with a diverse client base, gaining exposure to a wide range of industries and perspectives.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => setShowForm(true)}
                className='btn-primary flex items-center mt-4 gap-2 text-[#ffffff] hover:bg-[#000717]'>
                Apply for internship
                <span className="ml-4 text-[22px] rounded-full">&rarr;</span>
              </button>
            </div>
          </motion.div>

          {/* Right Section with Slide-In from Right */}
          <motion.div
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
              alt="Internship meeting"
              width={800}
              height={500}
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Animated Popup Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 mx-2 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white p-6 rounded-xl w-full max-w-3xl shadow-lg relative"
              >
                <button
                  className="absolute top-2 right-2 text-2xl text-white pb-1 bg-[#0B96F3] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#0B96F9]"
                  onClick={() => setShowForm(false)}
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Internship Openings</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  <input name="firstName" type="text" placeholder="First Name*" className={inputClass} value={formData.firstName} onChange={handleChange} required />
                  <input name="lastName" type="text" placeholder="Last Name*" className={inputClass} value={formData.lastName} onChange={handleChange} required />
                  <input name="email" type="email" placeholder="Email ID*" className={inputClass} value={formData.email} onChange={handleChange} required />
                  <input name="mobile" type="text" placeholder="Mobile*" className={inputClass} value={formData.mobile} onChange={handleChange} required />
                  <select name="location" className={inputClass} value={formData.location} onChange={handleChange} required>
                    <option value="">Select location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                  </select>
                  <input name="file" type="file" className="border p-2 rounded w-full focus:border-blue-500 outline-none transition-colors duration-300 border-gray-300" onChange={handleChange} />
                  <textarea name="message" placeholder="Message" className={`md:col-span-2 h-32 ${inputClass}`} value={formData.message} onChange={handleChange}></textarea>
                  <div className="md:col-span-2 flex justify-start">
                    <button type="submit"   className='btn-primary flex items-center mt-4 gap-2 text-[#ffffff] hover:bg-[#000717]'>
                      Submit
                        <span className="ml-4 text-[22px] rounded-full">&rarr;</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
