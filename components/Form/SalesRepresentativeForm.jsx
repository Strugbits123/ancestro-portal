// components/Form/SalesRepresentativeForm.jsx

'use client';

import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function SalesRepresentativeForm({ isOpen = false, onClose }) {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleClose = () => {
        setStep(1);
        onClose?.();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={handleClose}>

                {/* Dark backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-4xl rounded-2xl overflow-hidden font-lato"
                                style={{
                                    width: '823px',
                                    maxWidth: '95vw',
                                    background: '#FFFFFF1A',
                                    border: '1px solid rgba(255, 255, 255, 0.10)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0px 4px 4px 0px #000000CC',
                                }}
                            >
                                <div className="flex flex-col p-12 text-white">
                                    {/* Header */}
                                    <div className='w-full flex justify-center items-center'>
                                        <header className="text-center mb-10 w-full">
                                            <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
                                                ANCESTRO ENERGY – SALES REPRESENTATIVE APPLICATION
                                            </h1>
                                            <p className="text-lg opacity-90">
                                                Join the movement powering a cleaner, freer Latin America.
                                            </p>
                                            <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A]">#LosAncestros</p>
                                        </header>
                                    </div>

                                    {/* Step Title */}


                                    {/* Form Fields - Auto height, no scroll */}
                                    <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
                                        <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
                                            {step === 1 && 'Personal Information'}
                                            {step === 2 && 'Professional Experience'}
                                            {step === 3 && 'Sales & Network'}
                                            {step === 4 && 'Motivation & Availability'}
                                            {step === 5 && 'Final Confirmation'}
                                        </h2>
                                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                            {step === 1 && (
                                                <>
                                                    <Input label="Full Name" placeholder="John Doe" />
                                                    <Input label="Country and City" placeholder="Mexico City, Mexico" />
                                                    <Input label="WhatsApp Number" placeholder="+52 123 456 7890" />
                                                    <Input label="Email Address" placeholder="john@example.com" />
                                                    <Input label="Date of Birth" type="date" />
                                                    <Input label="Languages Spoken" placeholder="Spanish, English" />
                                                    <div className="col-span-2">
                                                        <Input label="LinkedIn or Instagram Profile" placeholder="https://linkedin.com/in/johndoe" />
                                                    </div>
                                                </>
                                            )}

                                            {step === 2 && (
                                                <>
                                                    <Input label="Current or Last Job Title" placeholder="Sales Manager" />
                                                    <Input label="Company Name" placeholder="SolarTech Inc." />
                                                    <Input label="Years of Experience" placeholder="5" />
                                                    <Input label="Industry" placeholder="Renewable Energy" />
                                                    <Input label="Biggest Professional Achievement" placeholder="Closed $2M in solar contracts" />
                                                    <div className="col-span-2">
                                                        <Textarea label="Brief Work History" rows={4} placeholder="Tell us about your career path..." />
                                                    </div>
                                                </>
                                            )}

                                            {step === 3 && (
                                                <>
                                                    <Input label="Monthly Sales Average (USD)" placeholder="15000" />
                                                    <Input label="Current Network Size" placeholder="LinkedIn: 2500+ contacts" />
                                                    <Input label="Do You Have a Team?" placeholder="Yes, 8 people" />
                                                    <Input label="Cities/Regions You Cover" placeholder="CDMX, Guadalajara, Monterrey" />
                                                    <Input label="Have You Sold Energy Products Before?" placeholder="Yes" />
                                                    <div className="col-span-2">
                                                        <Select label="Preferred Sales Channel" options={['Direct Sales', 'Digital Marketing', 'Referrals', 'Events']} />
                                                    </div>
                                                </>
                                            )}

                                            {step === 4 && (
                                                <>
                                                    <div className="col-span-2">
                                                        <Textarea label="Why do you want to join Ancestro Energy?" rows={5} />
                                                    </div>
                                                    <Input label="Available Start Date" type="date" />
                                                    <Input label="Hours Available per Week" placeholder="40+" />
                                                    <Select label="Are you willing to travel?" options={['Yes, frequently', 'Yes, occasionally', 'No']} />
                                                    <Select label="Do you have your own vehicle?" options={['Yes', 'No']} />
                                                </>
                                            )}

                                            {step === 5 && (
                                                <div className="col-span-2 text-center py-16">
                                                    <p className="text-4xl font-bold mb-6">Thank you for your application!</p>
                                                    <p className="text-xl opacity-80">We will review your information and contact you within 48 hours.</p>
                                                    <p className="mt-10 text-5xl font-bold text-[#F8B03B]">#LOSANCESTROS</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Full Width Buttons */}
                                    <div className="flex flex-col gap-4">
                                        {step > 1 && (
                                            <button
                                                onClick={prevStep}
                                                className="w-full py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium"
                                            >
                                                Back
                                            </button>
                                        )}
                                        {step < 5 ? (
                                            <button
                                                onClick={nextStep}
                                                className="w-full py-4 bg-[#F8B03B] cursor-pointer uppercase text-black font-bold rounded-full transition text-lg"
                                            >
                                                Next
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleClose}
                                                className="w-full py-4 bg-[#F8B03B] text-black font-bold rounded-full hover:bg-yellow-400 transition text-lg"
                                            >
                                                Submit Application
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

// Reusable Components
function Input({ label, ...props }) {
    return (
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-90">
                {label}
            </label>
            <input
                className="w-full bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none py-2 text-white placeholder-white/50 transition"
                {...props}
            />
        </div>
    );
}

function Textarea({ label, rows = 3, ...props }) {
    return (
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-90">
                {label}
            </label>
            <textarea
                rows={rows}
                className="w-full bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none py-2 text-white placeholder-white/50 resize-none transition"
                {...props}
            />
        </div>
    );
}

function Select({ label, options }) {
    return (
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-90">
                {label}
            </label>
            <select className="w-full bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none py-2 text-white">
                <option value="" disabled selected className="text-black">Select an option</option>
                {options.map(opt => (
                    <option key={opt} value={opt} className="text-black">{opt}</option>
                ))}
            </select>
        </div>
    );
}