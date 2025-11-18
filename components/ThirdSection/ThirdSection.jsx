'use client'
import React from 'react';
import bgImage from '../../public/images/thirdSection.png';
import Button from '../common/Button/Button';
import { useTranslation } from 'react-i18next';

function ThirdSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-black w-full overflow-hidden">
      {/* Main Background with Rounded Container */}
      <div className="relative mx-auto max-w-[1920px]">
        <div
          className="relative mx-4 sm:mx-8 lg:mx-20 xl:mx-32 2xl:mx-48"
          style={{
            borderRadius: '50px',
            height: '700px',
            backgroundImage: `
              linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
              linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
              linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
              linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
              linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
              linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%),
              url(${bgImage.src})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content Inside */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-52">
            <div className="bg-[#F8B03B4D] border border-[#F8B03B] px-4 sm:px-6 py-2 mb-8 rounded-md">
              <p className="font-helvetica font-normal text-lg sm:text-xl lg:text-[20px] tracking-[2px] text-white uppercase">
                {t('cultureSection.topBanner')}
              </p>
            </div>

            <h1 className="font-helvetica font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-10 tracking-[2px] uppercase mb-8 text-white max-w-3xl text-center">
              {t('cultureSection.topTitle')}
            </h1>

            <div className="space-y-6 max-w-3xl text-center">
              <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[26px] text-white">
                {t('cultureSection.topP1')}
              </p>
              <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[26px] text-white">
                {t('cultureSection.topP2')}
              </p>
              <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[26px] text-white">
                {t('cultureSection.topP3')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Frosted Glass Card */}
      <div className="relative -mt-20 sm:-mt-28 lg:-mt-32 xl:-mt-10 px-5 sm:px-10 lg:px-20 xl:px-48 2xl:px-64">
        <div
          className="mx-auto w-full max-w-[1338px] px-[10px] rounded-2xl lg:rounded-[20px] py-16 sm:py-20 lg:py-[87px] text-center"
          style={{
            backdropFilter: 'blur(20px)',
            background: 'linear-gradient(90deg, rgba(248, 176, 59, 0.3) 0%, rgba(248, 176, 59, 0.09) 100%)',
            border: '1px solid rgba(248, 176, 59, 0.2)',
          }}
        >
          <div className="bg-[#F8B03B4D] border border-[#F8B03B] px-6 py-2 mb-8 inline-block rounded-md">
            <p className="font-helvetica font-normal text-lg sm:text-xl lg:text-[20px] tracking-[2px] text-white uppercase">
              {t('cultureSection.bottomBanner')}
            </p>
          </div>

          <h2 className="font-helvetica font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-10 uppercase text-white mb-8 max-w-4xl mx-auto px-4">
            {t('cultureSection.bottomTitle')}
          </h2>

          <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[28px] text-white max-w-[900px] mx-auto px-4">
            {t('cultureSection.bottomParagraph')}
          </p>

          <Button
            text={t('cultureSection.applyButton')}
            classes="mt-[20px] mb-[10px]"
            textClasses="font-haas font-bold !text-[#F8B03B] text-[15px] mt-[10px]"
          />

          <p className="font-helvetica font-light italic text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[28px] text-white max-w-[900px] mx-auto px-4">
            {t('cultureSection.bottomFooter')}
          </p>
        </div>
      </div>

      <div className="h-20 lg:h-32" />
    </section>
  );
}

export default ThirdSection;