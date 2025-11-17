import React from 'react';
import card1Image from '../../public/images/card1.png';
import card2Image from '../../public/images/card2.png';

function MissionSection() {
  return (
    <section className="relative w-full px-14 py-[20px] bg-black flex justify-center -mt-[5%]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-x-[65px] w-full mx-auto">
        {/* Card 1 */}
        <div
          className="relative w-full md:flex-1 h-[500px] sm:h-[500px] md:h-[615px] rounded-[20px] border-2 border-white/10 overflow-hidden"
          style={{
            backgroundImage: `url(${card1Image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute left-4 sm:left-[40px] bottom-4 sm:bottom-[40px] flex flex-col items-start text-left max-w-full w-full max-sm:px-5 sm:max-w-[75%] ">
            {/* Badge */}
            <div className="bg-[#F8B03B4D] border border-[#F8B03B1A] rounded-[5px] px-2 py-1 sm:px-2.5 sm:py-[5px] w-[124px] h-[28px] mb-4 flex items-center justify-center">
              <p className="text-white font-helvetica font-bold text-sm sm:text-[18px] leading-[18px] text-center">
                Our Mission
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-helvetica font-bold text-3xl sm:text-[40px] text-white mb-4">
              The Ancestral Grid
            </h2>

            {/* Paragraphs */}
            <p className="font-helvetica font-normal text-base sm:text-[18px] leading-6 sm:leading-[24px] text-white mb-2">
              To create a decentralized web of solar, battery, and EV infrastructure that reconnects Latin America to its natural power. This is more than electricity — it’s sovereignty.
            </p>
            <p className="font-helvetica font-normal text-base sm:text-[18px] leading-6 sm:leading-[24px] text-white">
              We are reviving the primal human right to generate your own energy, to live freely, and to provide for your community with your own hands and mind.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative w-full md:flex-1 h-[500px] sm:h-[500px] md:h-[615px] rounded-[20px] border-2 border-white/10 overflow-hidden mt-6 md:mt-0"
          style={{
            backgroundImage: `url(${card2Image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute left-4 sm:left-[40px] bottom-4 sm:bottom-[40px] flex flex-col items-start text-left max-w-full max-sm:px-5 sm:max-w-[90%]">
            {/* Heading */}
            <h2 className="font-helvetica font-bold text-3xl sm:text-[40px] text-white mb-4">
              Why Join Ancestro
            </h2>

            {/* Bullet Points */}
            <ul className="list-disc pl-5 space-y-2 text-white font-helvetica font-normal text-base sm:text-[18px] leading-6 sm:leading-[24px]">
              <li>Prosperity With Purpose: Earn high commissions and real equity potential.</li>
              <li>Global Network: Operate across 18 nations under one spiritual and financial mission.</li>
              <li>Health & Freedom: Partial remote culture, sunlight work, and clean-living energy.</li>
              <li>Education & Growth: World-class sales, finance, and leadership training.</li>
              <li>Philanthropy: Every project funds community solar and indigenous empowerment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
