import React from 'react';
import heroImage from '../../public/images/heroimage.png'; // Replace with your image path
import Button from '../common/Button/Button';

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen py-[30px] flex flex-col items-center justify-center">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%), url(${heroImage.src})`,
        }}
      ></div>

      {/* Navbar */}
      <nav className="relative z-10 w-[90%] max-w-[675px] h-[55px] bg-white/10 backdrop-blur-[10px] rounded-[30px] border border-white/10 flex justify-center items-center gap-6 px-4 sm:px-10 py-2 text-white text-[15px] font-helvetica font-bold hover:text-[#F8B03B] transition-colors duration-300 mx-auto">
        <a href="#">Ancestro Energy</a>
        <a href="#">Ancestro Capital</a>
        <a href="#">Ancestro Charge</a>
        <a href="#">Ancestro Applicants</a>
      </nav>

      {/* Centered Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[1080px] px-4 min-h-screen">
        {/* Highlighted Banner */}
        <div className="bg-[#F8B03B4D] border border-[#F8B03B] px-2.5 py-[5px] mb-6 rounded-[5px]">
          <p className="font-helvetica font-normal text-[20px] tracking-[2px] text-white">
            Join the Movement — #LOSANCESTROS
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-helvetica font-bold text-[40px] tracking-[2px] uppercase mb-6 text-white">
          We are not hiring employees — we are awakening leaders.
        </h1>

        {/* Paragraphs */}
        <p className="font-helvetica font-normal text-[20px] leading-[22px] mb-4 text-white">
          Across Latin America, Ancestro Energy is building the first private renewable energy grid: a system owned by the people, <br /> powered by the sun, and guided by spirit. <br /> We combine modern technology with ancestral wisdom — because progress and nature were never meant to be separate.
        </p>
        <p className="font-helvetica font-normal text-[20px] leading-[22px] text-white">
          Here, we believe in health, discipline, freedom, and prosperity through purpose. Every person who joins us becomes part of something much larger than a company — a continental movement for energy independence, abundance, and truth.
        </p>
             <Button text={"Apply Now"} classes={" mt-[20px] bg-[#F8B03B] "} textClasses={"font-haas font-bold !text-black text-[15px] mt-[10px]"} />
      </div>
    </section>
  );
}

export default HeroSection;
