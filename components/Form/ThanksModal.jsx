"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

function ThanksModal({ isOpen, onClose, text1, text2 }) {
    const { t } = useTranslation();
    return (
 
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment}>
                    <div className="fixed inset-0 bg-black/80" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child as={Fragment}>
                            <Dialog.Panel style={{
                                width: '800px', height: '306px', maxWidth: '95vw', background: '#FFFFFF1A',
                                border: '1px solid #F8B03B', borderRadius: '20px', padding: '50px',
                                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.5)', display: 'flex',
                                flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                gap: '30px', textAlign: 'center', color: 'white', fontFamily: 'Lato, sans-serif',
                            }}>
                                <div className=''>
                                    <h1 className="font-helvetica font-bold text-[47px] tracking-[2px] uppercase mb-6 text-white"> Thank you! </h1>
                                    <p className="font-helvetica font-normal uppercase text-[18px] leading-[22px] mb-4 text-white">  {t(text1)}</p>
                                    <p className="font-helvetica font-normal text-[16px] leading-[22px] mb-4 text-white"> {t(text2)} </p>
                                    <p className="font-lato font-normal text-[16px] leading-[22px] mb-4 text-white"> Welcome to the Ancestro Energy. #LOSANCESTROS </p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default ThanksModal;
