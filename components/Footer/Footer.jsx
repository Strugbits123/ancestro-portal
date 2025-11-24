'use client'
import React from 'react';
import companyLogo from '../../public/images/company-logo.png';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className='w-full bg-black flex items-center justify-center pb-5'>
<div className="sm:h-[119px] sm:w-[337px] bg-black w-full flex flex-col justify-center items-center ">
      <img 
        src={companyLogo.src} 
        alt="Ancestro Logo" 
        className='w-[200px] sm:h-[119px] sm:w-[337px]'
      />
      
      {/* <p className="font-helvetica font-normal text-center text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[28px] text-white  mx-auto px-4">
        {t('footer.address')} — {t('footer.contact')}
      </p> */}
    </div>
    </div>
  );
}

export default Footer;