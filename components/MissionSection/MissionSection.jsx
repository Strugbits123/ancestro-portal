'use client'
import React from 'react';
import card1Image from '../../public/images/card1_new.png';
import card2Image from '../../public/images/card2_new.png';
import { useTranslation } from 'react-i18next';

function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full px-5 sm:px-14 py-[20px] bg-black flex justify-center -mt-[11%]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-x-[65px] w-full mx-auto">
        {/* Card 1 - The Ancestral Grid */}
        <div
          className="relative w-full md:flex-1 h-[500px] sm:h-[500px] md:h-[615px] rounded-[20px] border-2 border-[#FFFFFF4D] overflow-hidden"
          style={{
            backgroundImage: `url(${card1Image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute px-2.5 lg:px-5 xl:px-[42px] bottom-4 sm:bottom-[40px] flex flex-col items-start text-left  ">
            {/* Badge */}
            <div className="bg-[#F8B03B4D] border border-[#F8B03B1A] rounded-[5px] px-2 py-1 sm:px-2.5 sm:py-[5px] mb-4 flex items-center justify-center">
              <p className="text-white font-helvetica font-bold text-sm sm:text-[18px] leading-[18px] text-center">
                {t('missionSection.badge')}
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-helvetica font-bold text-3xl sm:text-[40px] text-white mb-4">
              {t('missionSection.card1Title')}
            </h2>

            {/* Paragraphs */}
            <p className="font-helvetica font-normal text-base sm:text-[18px] leading-6 sm:leading-[24px] text-white mb-2">
              {t('missionSection.card1Paragraph1')}
            </p>
            <p className="font-helvetica font-normal text-base sm:text-[18px] leading-6 sm:leading-[24px] text-white">
              {t('missionSection.card1Paragraph2')}
            </p>
          </div>
        </div>

        {/* Card 2 - Why Join Ancestro */}
        <div
          className="relative w-full md:flex-1 h-[500px] sm:h-[500px] md:h-[615px] rounded-[20px]  border-2 border-[#FFFFFF4D] overflow-hidden mt-6 md:mt-0"
          style={{
            backgroundImage: `url(${card2Image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute px-2.5 lg:px-5 xl:px-[42px] bottom-4 sm:bottom-[40px] flex flex-col items-start text-left  ">
            {/* Heading */}
            <h2 className="font-helvetica font-bold text-3xl sm:text-[40px] text-white mb-4">
              {t('missionSection.card2Title')}
            </h2>

            {/* Bullet Points */}
            <ul className="list-disc pl-5  text-white font-helvetica font-normal text-base sm:text-[18px] leading-6 sm:leading-[24px]">
              <li>{t('missionSection.card2Bullet1')}</li>
              <li>{t('missionSection.card2Bullet2')}</li>
              <li>{t('missionSection.card2Bullet3')}</li>
              <li>{t('missionSection.card2Bullet4')}</li>
              <li>{t('missionSection.card2Bullet5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;