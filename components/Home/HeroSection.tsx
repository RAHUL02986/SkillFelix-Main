import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative  hero bg-cover md:bg-center bg-right mt-20  bg-no-repeat">
       <div className="absolute inset-0 bg-black opacity-40 md:opacity-0"></div>
      <div className="container mx-auto px-4 sm:px-6 py-10 lg:py-16 text-center lg:text-left relative z-10">
        <h1 className="my-5 capitalize text-[#0B96F3] text-4xl lg:text-7xl ">
          Leaders <span className="text-white">&</span> Trainers
        </h1>

        <p className="text-white mt-4 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg">
          Join our Professional Courses: 360° Training covering theory, labs, practical projects, aptitude,
          resume building, interview preparation, and placement assistance.
        </p>

        <div className="cta-buttons flex flex-wrap gap-4 mt-6 lg:mt-8 justify-center lg:justify-start">
          <button className="btn-primary flex items-center justify-center gap-2 hover:bg-[#000717]">
            Explore Now <Image src="/arrowb.svg" alt="arrow" width={16} height={16} />
          </button>
          <button className="btn-secondary flex items-center justify-center hover:bg-[#0079C9] gap-2">
            Recent Placement <Image src="/arrowb.svg" alt="arrow" width={16} height={16} />
          </button>
        </div>

        {/* Partners section - full width but responsive */}
        <div className="w-full max-w-5xl mt-16 bg-[#D9D9D90A] backdrop-blur-[64px] rounded-md flex flex-col md:flex-row items-center justify-center md:justify-around py-6 px-6 gap-4 md:gap-0">
          <h3 className="text-white text-base md:text-xl font-medium md:pr-8 border-b md:border-b-0 md:border-r border-white mb-4 md:mb-0">
            Our Industry <br/>Partners
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Image src="/Mask2.webp" alt="m1" width={148} height={56} />
            <Image src="/Mask1.png" alt="m2" width={148} height={46} />
            <Image src="/Mask3.png" alt="m3" width={148} height={46} />
            <Image src="/h4.svg" alt="m4" width={148} height={53} />
          </div>
        </div>
       

      </div>
    </section>
  );
};

export default HeroSection;
