import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackToTop from "@/components/BackToTop"
const Footer = () => {
  return (
    <footer className="bg-[#032035] text-white ">
      <div className="">
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-[#D9D9D9]/20 flex flex-col lg:flex-row items-center justify-between gap-6'>
          <div className=''>
            <Link href="/">
              <Image src="/Skillfelixfooter.svg" alt="Logo" width={200} height={43} />
            </Link>
          </div>
          <div className="">

            <h2 className="text-2xl font-normal text-white mb-5">Subscribe to our Newsletter</h2>
            <div className="flex w-fullrounded-[2px] border border-gray-300 focus-within:border-[#0077cc] transition group">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full px-4 py-3 text-black  rounded-l-md outline-none"
              />
              <button className="bg-white px-2 py-1">
                <Image src="/send.svg" alt="Send" width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Contact Info */}

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-normal mb-5">Quick Links</h3>
          <ul className="space-y-4 text-base font-normal">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Explore</Link></li>
            <li><Link href="#">Opportunities</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Career</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-xl font-normal mb-5">Programs</h3>
          <ul className="space-y-4 text-base font-normal">
            <li><Link href="#">Free VLSI Courses</Link></li>
            <li><Link href="#">Internships/Jobs</Link></li>
            <li><Link href="#">Hire Talent</Link></li>
            <li><Link href="#">Workshops</Link></li>
            <li><Link href="#">Global Programs</Link></li>
            <li><Link href="#">Podcasts</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-normal mb-5">Contact Us</h3>
          <div className="space-y-4 text-base font-normal">
            <div className="flex gap-4 items-start">
              <Image src="/locata.svg" alt="Location" width={36} height={36} />
              <p>
                B03A H159 VDS BUILDING, Near BSI business park, Noida, Uttar Pradesh</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/email.svg" alt="Email" width={36} height={36} />
              <p>skillfelix@learnproacademy.com</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/calll.svg" alt="Phone" width={36} height={36} />
              <p>+91 1204515954</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/earthh.svg" alt="Website" width={36} height={36} />
              <p>www.skillfelix.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-normal mb-5">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" >
              <Image src="/facebook.svg" alt="facebook" width={36} height={36} />
            </Link>
            <Link href="#" >
              <Image src="/insta.svg" alt="insta" width={36} height={36} />
            </Link>
            <Link href="#" >
              <Image src="/utube.svg" alt="utube" width={36} height={36} />
            </Link>
            <Link href="#">
              <Image src="/in.svg" alt="in" width={36} height={36} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" bg-[#0B96F305] text-center pt-6 pb-2 text-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Image src="/arm.png" alt="ARM Logo" width={51} height={30} />
              <span className="text-[18px] font-normal">ARM Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/rvc.png" alt="RISC-V Logo" width={30} height={30} />
              <span className="text-[18px] font-normal">RISC-V Program</span>
            </div>
          </div>
          <hr className="border-[#FFFFFF2B] px-16 mb-3" />
          <p className="text-[#FFFFFF8A] text-sm font-normal">&copy; 2025 Skillfelix. All Rights Reserved.</p>
        </div>
      </div>
      <BackToTop/>
    </footer>
  );
};

export default Footer;
