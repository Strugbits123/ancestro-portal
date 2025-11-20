'use client'
import React, { useState } from 'react';
import heroImage from '../../public/images/heroimage.png';
import Button from '../common/Button/Button';
import { useTranslation } from "react-i18next";

function HeroSection() {
  const [currentPage, setCurrentPage] = useState('ancestro-applicants');
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  // Fully translatable navbar
  const navLinks = [
    { name: t('nav.energy'),       href: '#', id: 'ancestro-energy' },
    { name: t('nav.capital'),      href: '#', id: 'ancestro-capital' },
    { name: t('nav.charge'),       href: '#', id: 'ancestro-charge' },
    { name: t('nav.applicants'),   href: '#', id: 'ancestro-applicants' },
  ];

  const getTextEffect = (isActive) => {
    if (isActive) {
      return {
        textShadow: `
          0px 3px 7px #F5DC7B96,
          0px 13px 13px #F5DC7B82,
          0px 29px 18px #F5DC7B4D,
          0px 52px 21px #F5DC7B17,
          0px 82px 23px #F5DC7B03
        `.replace(/\s+/g, ' ').trim(),
      };
    }
    return {};
  };

  return (
    <section className="relative w-full min-h-screen py-[30px] flex flex-col items-center justify-center">

      {/* Language Toggle */}
      <div className="fixed top-[20px] right-[20px] z-[200]">
        <Button
          text={i18n.language === "en" ? "ES" : "EN"}
          classes="animate-top-to-bottom-hop bg-[#F8B03B] tracking-[2px] font-haas font-bold text-[16px] px-8 py-2 shadow-[0_10px_30px_rgba(248,176,59,0.8)] text-white border-1 border-[#F8B03B]"
          textClasses="!text-black uppercase"
          onClick={toggleLanguage}
        />
      </div>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%), url(${heroImage.src})`,
        }}
      />

      {/* Navbar - Now translated! */}
      <nav className="fixed top-2 z-10 w-[90%] max-w-[675px] h-[55px] bg-white/10 backdrop-blur-[10px] rounded-[30px] border border-white/10 flex justify-center items-center gap-6 px-4 sm:px-10 py-2 text-white text-[15px] font-helvetica font-bold transition-colors duration-300 mx-auto">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(link.id);
            }}
            className="hover:text-[#F8B03B] transition-colors duration-300"
            style={getTextEffect(currentPage === link.id)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[1200px]  px-4 min-h-screen">

        <div className="bg-[#F8B03B4D] border border-[#F8B03B] px-2.5 py-[2px] mb-6 rounded-[5px]">
          <p className="font-helvetica font-normal text-[20px] tracking-[2px] text-white">
            {t('heroSection.banner')}
          </p>
        </div>

        <h1 className="font-helvetica font-bold text-[40px] tracking-[2px] leading-10 max-w-[744px] uppercase mb-6 text-white">
          {t('heroSection.title')}
        </h1>

        <p 
          className="font-helvetica font-light w-full text-[20px] tracking-wider leading-[22px] mb-4 text-[#FFFFFF]"
          dangerouslySetInnerHTML={{ __html: t('heroSection.paragraph1') }} 
        />

        <p className="font-helvetica font-light w-full text-[20px] leading-[22px] text-white">
          {t('heroSection.paragraph2')}
        </p>

        <Button
          text={t('heroSection.applyButton')}
          classes="mt-[20px] bg-[#F8B03B]"
          textClasses="font-haas font-bold !text-black text-[15px] mt-[10px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;