// // // // components/Form/SalesRepresentativeForm.jsx
// // // 'use client';

// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Dialog, Transition } from '@headlessui/react';
// // // import { Fragment } from 'react';
// // // import { useForm } from 'react-hook-form';
// // // import ThanksModal from './ThanksModal';
// // // import { useTranslation } from "react-i18next";


// // // export default function SalesRepresentativeForm({ isOpen = false, onClose }) {
// // //     const [step, setStep] = useState(1);
// // //     const [showThankYou, setShowThankYou] = useState(false);
// // //       const { t, i18n } = useTranslation();

// // //     const {
// // //         register,
// // //         handleSubmit,
// // //         formState: { errors },
// // //         trigger,
// // //         watch,
// // //         clearErrors,
// // //         setValue,
// // //         reset,
// // //     } = useForm({
// // //         mode: 'onChange',
// // //         reValidateMode: "onChange"
// // //     });

// // //     // File states
// // //     const [cvFileName, setCvFileName] = useState('');
// // //     const [videoFileName, setVideoFileName] = useState('');
// // //     const cvInputRef = useRef(null);
// // //     const videoInputRef = useRef(null);

// // //     // Watch Step 10 required fields
// // //     const fullTimeAvailability = watch('fullTimeAvailability');
// // //     const trainingCommitment = watch('trainingCommitment');

// // //     // Submit button enabled only when all required Step 10 fields are filled
// // //     const isStep10Complete = !!cvFileName && !!fullTimeAvailability && !!trainingCommitment;

// // //     useEffect(() => {
// // //         if (!isOpen) {
// // //             // Reset everything when modal is closed
// // //             setStep(1);
// // //             setShowThankYou(false);
// // //             setCvFileName('');
// // //             setVideoFileName('');
// // //             reset(); // ← Clears all form values & errors
// // //             if (cvInputRef.current) cvInputRef.current.value = '';
// // //             if (videoInputRef.current) videoInputRef.current.value = '';
// // //         }
// // //     }, [isOpen]);

// // //     // Validate current step
// // //     const validateStep = async () => {
// // //         const fieldsToValidate = getFieldsForStep(step);
// // //         const result = await trigger(fieldsToValidate);
// // //         return result;
// // //     };

// // //     const nextStep = async () => {
// // //         const isValid = await validateStep();
// // //         if (isValid) setStep(prev => Math.min(prev + 1, 10));
// // //     };

// // //     const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

// // //     const onSubmit = (data) => {
// // //         console.log('Form submitted:', { ...data, cvFileName, videoFileName });
// // //         setShowThankYou(true);
// // //     };

// // //     const handleClose = () => {
// // //         setStep(1);
// // //         setShowThankYou(false);
// // //         setCvFileName('');
// // //         setVideoFileName('');
// // //         onClose?.();
// // //     };

// // //     const getFieldsForStep = (currentStep) => {
// // //         switch (currentStep) {
// // //             case 1: return ['fullName', 'location', 'whatsapp', 'email', 'dob', 'languages', 'socialProfile'];
// // //             case 2: return ['education', 'salesExperience', 'renewableExperience', 'bestSalesStory', 'currentWorkStatus'];
// // //             case 3: return ['buildTrust', 'commStyle', 'motivationRenewable', 'cameraComfort', 'crmComfort', 'strongMarkets'];
// // //             case 4: return ['remoteWork', 'inPersonDays', 'handleObjections', 'learnProducts', 'lifeChangingSale', 'followUpStyle'];
// // //             case 5: return ['whyAncestro', 'freedomMeaning', 'latamFuture', 'resonance', 'incomeGoals', 'successVision'];
// // //             case 6: return ['discipline', 'dailyHabits', 'habitToImprove', 'handleFailure', 'meditation', 'selfTalk'];
// // //             case 7: return ['currentBlock', 'freedomMoment', 'workThatEnergizes', 'whyMissionDriven'];
// // //             case 8: return ['energyType', 'publicSpeaking', 'learningWillingness', 'structurePreference', 'bestEnvironment'];
// // //             case 9: return ['spiritualTeam', 'physicalWellbeing', 'personalGrowth', 'fitnessEncouragement', 'fitnessChallenge'];
// // //             case 10: return ['fullTimeAvailability', 'trainingCommitment'];
// // //             default: return [];
// // //         }
// // //     };

// // //     return (
// // //         <>
// // //             <Transition appear show={isOpen} as={Fragment}>
// // //                 <Dialog as="div" className="relative z-50" onClose={handleClose}>
// // //                     <Transition.Child as={Fragment}>
// // //                         <div className="fixed inset-0 bg-black/80" />
// // //                     </Transition.Child>

// // //                     <div className="fixed inset-0 overflow-y-auto">
// // //                         <div className="flex min-h-full items-center justify-center p-4">
// // //                             <Transition.Child as={Fragment}>
// // //                                 <Dialog.Panel
// // //                                     className="w-full max-w-4xl rounded-2xl overflow-hidden font-lato"
// // //                                     style={{
// // //                                         width: '823px',
// // //                                         maxWidth: '95vw',
// // //                                         background: '#FFFFFF1A',
// // //                                         border: '1px solid rgba(255, 255, 255, 0.10)',
// // //                                         backdropFilter: 'blur(20px)',
// // //                                         WebkitBackdropFilter: 'blur(20px)',
// // //                                         boxShadow: '0px 4px 4px 0px #000000CC',
// // //                                     }}
// // //                                 >
// // //                                     <form onSubmit={handleSubmit(onSubmit)}>
// // //                                         <div className="flex flex-col p-5 sm:p-12 text-white">
// // //                                             {/* Header - FIXED */}
// // //                                             <div className='w-full flex justify-center items-center'>
// // //                                                 <header className="text-center mb-10 w-full">
// // //                                                     <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
// // //                                                         ANCESTRO ENERGY – SALES REPRESENTATIVE APPLICATION
// // //                                                     </h1>
// // //                                                     <p className="text-lg opacity-90">
// // //                                                         Join the movement powering a cleaner, freer Latin America.
// // //                                                     </p>
// // //                                                     <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">#LosAncestros</p>
// // //                                                 </header>
// // //                                             </div>

// // //                                             {/* Form Fields */}
// // //                                             <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
// // //                                                 <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
// // //                                                     {step === 1 && 'Personal Information'}
// // //                                                     {step === 2 && 'Background & Education'}
// // //                                                     {step === 3 && 'Skills & Communication'}
// // //                                                     {step === 4 && 'Role Expectations & Execution'}
// // //                                                     {step === 5 && 'Vision & Purpose'}
// // //                                                     {step === 6 && 'Personal Alignment & Self-Awareness'}
// // //                                                     {step === 7 && 'Motivation & Purpose'}
// // //                                                     {step === 8 && 'Personality & Communication'}
// // //                                                     {step === 9 && 'Growth & Culture Fit'}
// // //                                                     {step === 10 && 'Final Steps'}
// // //                                                 </h2>

// // //                                                 <div className={`grid gap-x-12 gap-y-3 ${step === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
// // //                                                     {/* STEP 1 */}
// // //                                                     {step === 1 && (
// // //                                                         <>
// // //                                                             <Input label="Full Name" name="fullName" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Country and City" name="location" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="WhatsApp Number" name="whatsapp" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Email Address" name="email" register={register} required errors={errors} type="email" clearErrors={clearErrors} />
// // //                                                             <Input label="Date of Birth" name="dob" register={register} required errors={errors} type="date" clearErrors={clearErrors} />

// // //                                                             <Input label="Languages Spoken" name="languages" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <div className="col-span-2">
// // //                                                                 <Input label="LinkedIn or Instagram Profile" name="socialProfile" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             </div>
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 2 */}
// // //                                                     {step === 2 && (
// // //                                                         <>
// // //                                                             <Input label="What is your educational background?" name="education" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Do you have prior experience in sales? If yes, describe the industries and products you’ve worked with." name="salesExperience" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Have you ever sold renewable energy or financial services before?" name="renewableExperience" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Describe your most successful sales experience and what made it successful." name="bestSalesStory" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Are you currently self-employed, working in sales, or transitioning from another field?" name="currentWorkStatus" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 3 */}
// // //                                                     {step === 3 && (
// // //                                                         <>
// // //                                                             <Input label="How do you build trust with clients during your first interaction?" name="buildTrust" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Describe your communication style in three words." name="commStyle" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What motivates you most about selling renewable energy solutions?" name="motivationRenewable" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How comfortable are you speaking on camera or conducting video calls? (1–10)" name="cameraComfort" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Rate your comfort level using CRM systems and digital tools. (1–10)" name="crmComfort" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What languages or markets are you most confident selling in?" name="strongMarkets" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 4 */}
// // //                                                     {step === 4 && (
// // //                                                         <>
// // //                                                             <Input label="Are you comfortable working remotely with a results-based structure?" name="remoteWork" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Are you able to attend two in-person collaboration days per week?" name="inPersonDays" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How do you handle objections or rejection in a sales conversation?" name="handleObjections" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What’s your process for learning and mastering new products quickly?" name="learnProducts" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Describe a time you helped someone make a decision that truly improved their life." name="lifeChangingSale" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What’s your approach to follow-ups and closing deals?" name="followUpStyle" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 5 */}
// // //                                                     {step === 5 && (
// // //                                                         <>
// // //                                                             <Input label="Why do you want to represent Ancestro Energy?" name="whyAncestro" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What does “freedom through energy” mean to you personally?" name="freedomMeaning" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How do you think renewable energy will transform Latin America in the next 5 years?" name="latamFuture" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Ancestro combines spirituality, business, and philanthropy — which of these resonates most with you and why?" name="resonance" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What are your personal income and lifestyle goals for the next 12 months?" name="incomeGoals" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What will success look like for you one year from now as part of this movement?" name="successVision" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 6 */}
// // //                                                     {step === 6 && (
// // //                                                         <>
// // //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Lifestyle & Mindset</p>
// // //                                                             <Input label="On a scale of 1–10, how would you rate your self-discipline?" name="discipline" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What daily habits keep you focused or grounded?" name="dailyHabits" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What’s one habit you’d like to improve this year?" name="habitToImprove" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How do you handle rejection or failure?" name="handleFailure" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Do you meditate or have a mindfulness practice? If so, how often?" name="meditation" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How would you describe your self-talk when you face challenges?" name="selfTalk" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <FileUpload label="Upload a recent photo that represents who you are (optional)" />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 7 */}
// // //                                                     {step === 7 && (
// // //                                                         <>
// // //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Motivation & Purpose</p>
// // //                                                             <Input label="What is currently holding you back from your highest potential?" name="currentBlock" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Describe a moment when you felt frustrated by limits or systems in society..." name="freedomMoment" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What kind of work makes you feel most alive?" name="workThatEnergizes" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Why do you want to be part of a mission-driven, health-conscious company like Ancestro?" name="whyMissionDriven" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 8 */}
// // //                                                     {step === 8 && (
// // //                                                         <>
// // //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Personality & Communication</p>
// // //                                                             <Input label="How would you describe your natural energy: introvert, extrovert, or ambivert?" name="energyType" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How comfortable are you speaking to a group or presenting on stage? (1–10)" name="publicSpeaking" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How comfortable are you learning new material weekly or receiving coaching?" name="learningWillingness" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="Do you prefer structured guidance or freedom to self-direct?" name="structurePreference" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What type of environment helps you perform at your best?" name="bestEnvironment" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 9 */}
// // //                                                     {step === 9 && (
// // //                                                         <>
// // //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Growth & Culture Fit</p>
// // //                                                             <Input label="Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?" name="spiritualTeam" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="How do you maintain your physical wellbeing and energy levels?" name="physicalWellbeing" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="What areas of personal growth are you actively working on right now?" name="personalGrowth" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?" name="fitnessEncouragement" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <Input label="If you were selected for this role only after demonstrating a commitment to improve your physical fitness..." name="fitnessChallenge" register={register} required errors={errors} clearErrors={clearErrors} />
// // //                                                             <FileUpload label="Upload a recent photo that represents who you are (optional)." />
// // //                                                         </>
// // //                                                     )}

// // //                                                     {/* STEP 10 - FINAL STEP */}
// // //                                                     {step === 10 && (
// // //                                                         <>
// // //                                                             <FileUpload
// // //                                                                 label="Upload your CV or resume."
// // //                                                                 required
// // //                                                                 fileName={cvFileName}
// // //                                                                 onChange={(e) => {
// // //                                                                     const file = e.target.files[0];
// // //                                                                     if (file) {
// // //                                                                         setCvFileName(file.name);
// // //                                                                         setValue('cvFile', file, { shouldValidate: true });
// // //                                                                         clearErrors('cvFile');
// // //                                                                     }
// // //                                                                 }}
// // //                                                                 inputRef={cvInputRef}
// // //                                                             />
// // //                                                             {errors.cvFile && <p className="text-red-500 text-xs mt-1">{errors.cvFile.message}</p>}

// // //                                                             <FileUpload
// // //                                                                 label="Upload a 1-minute video introducing yourself and why you want to join Ancestro. (Optional)"
// // //                                                                 fileName={videoFileName}
// // //                                                                 onChange={(e) => e.target.files[0] && setVideoFileName(e.target.files[0].name)}
// // //                                                                 inputRef={videoInputRef}
// // //                                                             />

// // //                                                             <RadioCheckbox
// // //                                                                 label="CONFIRM FULL-TIME AVAILABILITY."
// // //                                                                 options={['YES', 'NO']}
// // //                                                                 name="fullTimeAvailability"
// // //                                                                 register={register}
// // //                                                                 required
// // //                                                                 error={errors.fullTimeAvailability}
// // //                                                                 watch={watch}
// // //                                                                 clearErrors={clearErrors}
// // //                                                             />

// // //                                                             <RadioCheckbox
// // //                                                                 label="Confirm willingness to participate in initial training and evaluation phase."
// // //                                                                 options={['YES', 'NO']}
// // //                                                                 name="trainingCommitment"
// // //                                                                 register={register}
// // //                                                                 required
// // //                                                                 error={errors.trainingCommitment}
// // //                                                                 watch={watch}
// // //                                                                 clearErrors={clearErrors}
// // //                                                             />
// // //                                                         </>
// // //                                                     )}
// // //                                                 </div>
// // //                                             </div>

// // //                                             {/* Buttons */}
// // //                                             <div className="flex flex-col gap-4">
// // //                                                 {step > 1 && (
// // //                                                     <button type="button" onClick={prevStep} className="w-full cursor-pointer py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium">
// // //                                                         Back
// // //                                                     </button>
// // //                                                 )}
// // //                                                 {step < 10 ? (
// // //                                                     <button type="button" onClick={nextStep} className="w-full py-4 cursor-pointer bg-[#F8B03B] uppercase text-black font-bold rounded-full transition text-lg">
// // //                                                         Next
// // //                                                     </button>
// // //                                                 ) : (
// // //                                                     <button
// // //                                                         type="submit"
// // //                                                         disabled={!isStep10Complete}
// // //                                                         className={`w-full py-4 rounded-full transition text-lg font-bold uppercase
// // //                                                             ${isStep10Complete
// // //                                                                 ? 'bg-[#F8B03B] text-black cursor-pointer hover:bg-[#f9c65b]'
// // //                                                                 : 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-70'
// // //                                                             }`}
// // //                                                     >
// // //                                                         {isStep10Complete ? 'Submit Application' : 'Submit Application'}
// // //                                                     </button>
// // //                                                 )}
// // //                                             </div>
// // //                                         </div>
// // //                                     </form>
// // //                                 </Dialog.Panel>
// // //                             </Transition.Child>
// // //                         </div>
// // //                     </div>
// // //                 </Dialog>
// // //             </Transition>

// // //             {/* Thank You Modal */}
// // //             <Transition appear show={showThankYou} as={Fragment}>
// // //                 <Dialog as="div" className="relative z-50" onClose={handleClose}>
// // //                     <Transition.Child as={Fragment}>
// // //                         <div className="fixed inset-0 bg-black/80" />
// // //                     </Transition.Child>
// // //                     <div className="fixed inset-0 overflow-y-auto">
// // //                         <div className="flex min-h-full items-center justify-center p-4">
// // //                             <Transition.Child as={Fragment}>
// // //                                 <Dialog.Panel style={{
// // //                                     width: '800px', height: '306px', maxWidth: '95vw', background: '#FFFFFF1A',
// // //                                     border: '1px solid #F8B03B', borderRadius: '20px', padding: '50px',
// // //                                     backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
// // //                                     boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.5)', display: 'flex',
// // //                                     flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
// // //                                     gap: '30px', textAlign: 'center', color: 'white', fontFamily: 'Lato, sans-serif',
// // //                                 }}>
// // //                                     <ThanksModal text1={"This is more than a sales role — it’s an initiation into leadership."} text2={"Every conversation you have spreads the light of clean energy, freedom, and abundance across Latin America."}/>
// // //                                 </Dialog.Panel>
// // //                             </Transition.Child>
// // //                         </div>
// // //                     </div>
// // //                 </Dialog>
// // //             </Transition>
// // //         </>
// // //     );
// // // }

// // // // Reusable Input - Error disappears on typing
// // // // Updated Input component ─ makes date picker icon WHITE
// // // function Input({ label, name, register, required, errors, type = 'text', clearErrors, ...props }) {
// // //     return (
// // //         <div className="relative">
// // //             <label className="block text-[14px] font-helvetica font-bold uppercase tracking-wider mb-2 opacity-90">
// // //                 {label}
// // //             </label>
// // //             <input
// // //                 type={type}
// // //                 {...register(name, {
// // //                     required: required && 'This field is required',
// // //                     onChange: () => clearErrors(name),
// // //                 })}
// // //                 className={`w-full font-helvetica font-normal bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 transition
// // //                     ${type === 'date' ? 'date-input-white' : ''}
// // //                 `}
// // //                 {...props}
// // //             />
// // //             {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
// // //         </div>
// // //     );
// // // }
// // // // Radio with error clearing on select
// // // function RadioCheckbox({ label, options, name, register, required, error, watch, clearErrors }) {
// // //     return (
// // //         <div className="mt-8">
// // //             <p className="text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">{label}</p>
// // //             <div className="flex gap-6">
// // //                 {options.map((option) => (
// // //                     <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
// // //                         <input
// // //                             type="radio"
// // //                             value={option}
// // //                             {...register(name, {
// // //                                 required: required && 'This field is required',
// // //                                 onChange: () => clearErrors(name),
// // //                             })}
// // //                             className="sr-only"
// // //                         />
// // //                         <div className="relative w-6 h-6 rounded-md border border-white flex items-center justify-center">
// // //                             {watch(name) === option && (
// // //                                 <svg className="h-4 w-4 text-[#F8B03B]" viewBox="0 0 18 18" fill="none">
// // //                                     <path d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z" fill="#F8B03B"/>
// // //                                 </svg>
// // //                             )}
// // //                         </div>
// // //                         <span className="text-white font-medium uppercase text-sm tracking-wider">{option}</span>
// // //                     </label>
// // //                 ))}
// // //             </div>
// // //             {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
// // //         </div>
// // //     );
// // // }

// // // // File Upload
// // // function FileUpload({ label, required, fileName, onChange, inputRef }) {
// // //     const id = `upload-${label.replace(/\s+/g, '-')}`;
// // //     return (
// // //         <div className="mt-6 border-b-2 border-white/40 pb-5">
// // //             <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">{label}</label>
// // //             <div className="flex items-center gap-4">
// // //                 <input type="file" id={id} className="hidden" ref={inputRef} onChange={onChange} />
// // //                 <label htmlFor={id} className="cursor-pointer inline-flex items-center justify-center w-[70px] h-[34px] rounded-[10px] bg-[#FFFFFF33] text-white font-medium text-sm hover:bg-[#FFFFFF44] transition">
// // //                     Upload
// // //                 </label>
// // //                 <span className="text-white/70 text-sm">{fileName || 'No file chosen'}</span>
// // //             </div>
// // //         </div>
// // //     );
// // // }



// // // components/Form/SalesRepresentativeForm.jsx
// // 'use client';

// // import React, { useState, useRef, useEffect } from 'react';
// // import { Dialog, Transition } from '@headlessui/react';
// // import { Fragment } from 'react';
// // import { useForm } from 'react-hook-form';
// // import ThanksModal from './ThanksModal';
// // import { useTranslation } from "react-i18next";

// // export default function SalesRepresentativeForm({ isOpen = false, onClose }) {
// //     const [step, setStep] = useState(1);
// //     const [showThankYou, setShowThankYou] = useState(false);
// //     const { t, i18n } = useTranslation();

// //     const {
// //         register,
// //         handleSubmit,
// //         formState: { errors },
// //         trigger,
// //         watch,
// //         clearErrors,
// //         setValue,
// //         reset,
// //     } = useForm({
// //         mode: 'onChange',
// //         reValidateMode: "onChange"
// //     });

// //     // File states
// //     const [cvFileName, setCvFileName] = useState('');
// //     const [videoFileName, setVideoFileName] = useState('');
// //     const cvInputRef = useRef(null);
// //     const videoInputRef = useRef(null);

// //     // Watch Step 10 required fields
// //     const fullTimeAvailability = watch('fullTimeAvailability');
// //     const trainingCommitment = watch('trainingCommitment');

// //     // Submit button enabled only when all required Step 10 fields are filled
// //     const isStep10Complete = !!cvFileName && !!fullTimeAvailability && !!trainingCommitment;

// //     useEffect(() => {
// //         if (!isOpen) {
// //             setStep(1);
// //             setShowThankYou(false);
// //             setCvFileName('');
// //             setVideoFileName('');
// //             reset();
// //             if (cvInputRef.current) cvInputRef.current.value = '';
// //             if (videoInputRef.current) videoInputRef.current.value = '';
// //         }
// //     }, [isOpen]);

// //     const validateStep = async () => {
// //         const fieldsToValidate = getFieldsForStep(step);
// //         const result = await trigger(fieldsToValidate);
// //         return result;
// //     };

// //     const nextStep = async () => {
// //         const isValid = await validateStep();
// //         if (isValid) setStep(prev => Math.min(prev + 1, 10));
// //     };

// //     const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

// //     const onSubmit = (data) => {
// //         console.log('Form submitted:', { ...data, cvFileName, videoFileName });
// //         setShowThankYou(true);
// //     };

// //     const handleClose = () => {
// //         setStep(1);
// //         setShowThankYou(false);
// //         setCvFileName('');
// //         setVideoFileName('');
// //         onClose?.();
// //     };

// //     const getFieldsForStep = (currentStep) => {
// //         switch (currentStep) {
// //             case 1: return ['fullName', 'location', 'whatsapp', 'email', 'dob', 'languages', 'socialProfile'];
// //             case 2: return ['education', 'salesExperience', 'renewableExperience', 'bestSalesStory', 'currentWorkStatus'];
// //             case 3: return ['buildTrust', 'commStyle', 'motivationRenewable', 'cameraComfort', 'crmComfort', 'strongMarkets'];
// //             case 4: return ['remoteWork', 'inPersonDays', 'handleObjections', 'learnProducts', 'lifeChangingSale', 'followUpStyle'];
// //             case 5: return ['whyAncestroymmetry', 'freedomMeaning', 'latamFuture', 'resonance', 'incomeGoals', 'successVision'];
// //             case 6: return ['discipline', 'dailyHabits', 'habitToImprove', 'handleFailure', 'meditation', 'selfTalk'];
// //             case 7: return ['currentBlock', 'freedomMoment', 'workThatEnergizes', 'whyMissionDriven'];
// //             case 8: return ['energyType', 'publicSpeaking', 'learningWillingness', 'structurePreference', 'bestEnvironment'];
// //             case 9: return ['spiritualTeam', 'physicalWellbeing', 'personalGrowth', 'fitnessEncouragement', 'fitnessChallenge'];
// //             case 10: return ['fullTimeAvailability', 'trainingCommitment'];
// //             default: return [];
// //         }
// //     };

// //     return (
// //         <>
// //             <Transition appear show={isOpen} as={Fragment}>
// //                 <Dialog as="div" className="relative z-50" onClose={handleClose}>
// //                     <Transition.Child as={Fragment}>
// //                         <div className="fixed inset-0 bg-black/80" />
// //                     </Transition.Child>

// //                     <div className="fixed inset-0 overflow-y-auto">
// //                         <div className="flex min-h-full items-center justify-center p-4">
// //                             <Transition.Child as={Fragment}>
// //                                 <Dialog.Panel
// //                                     className="w-full max-w-4xl rounded-2xl overflow-hidden font-lato"
// //                                     style={{
// //                                         width: '823px',
// //                                         maxWidth: '95vw',
// //                                         background: '#FFFFFF1A',
// //                                         border: '1px solid rgba(255, 255, 255, 0.10)',
// //                                         backdropFilter: 'blur(20px)',
// //                                         WebkitBackdropFilter: 'blur(20px)',
// //                                         boxShadow: '0px 4px 4px 0px #000000CC',
// //                                     }}
// //                                 >
// //                                     <form onSubmit={handleSubmit(onSubmit)}>
// //                                         <div className="flex flex-col p-5 sm:p-12 text-white">
// //                                             {/* Header */}
// //                                             <div className='w-full flex justify-center items-center'>
// //                                                 <header className="text-center mb-10 w-full">
// //                                                     <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
// //                                                         {t('forms.salesRepresentative.title')}
// //                                                     </h1>
// //                                                     <p className="text-lg opacity-90">
// //                                                         {t('forms.salesRepresentative.subtitle')}
// //                                                     </p>
// //                                                     <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                                         {t('forms.salesRepresentative.hashtag')}
// //                                                     </p>
// //                                                 </header>
// //                                             </div>

// //                                             {/* Form Fields */}
// //                                             <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
// //                                                 <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
// //                                                     {t(`forms.salesRepresentative.steps.step${step}`)}
// //                                                 </h2>

// //                                                 <div className={`grid gap-x-12 gap-y-3 ${step === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
// //                                                     {/* STEP 1 */}
// //                                                     {step === 1 && (
// //                                                         <>
// //                                                             <Input label={t('forms.salesRepresentative.fields.fullName')} name="fullName" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.location')} name="location" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.whatsapp')} name="whatsapp" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.email')} name="email" register={register} required errors={errors} type="email" clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.dob')} name="dob" register={register} required errors={errors} type="date" clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.languages')} name="languages" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <div className="col-span-2">
// //                                                                 <Input label={t('forms.salesRepresentative.fields.socialProfile')} name="socialProfile" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             </div>
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 2 */}
// //                                                     {step === 2 && (
// //                                                         <>
// //                                                             <Input label={t('forms.salesRepresentative.fields.education')} name="education" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.salesExperience')} name="salesExperience" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.renewableExperience')} name="renewableExperience" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.bestSalesStory')} name="bestSalesStory" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.currentWorkStatus')} name="currentWorkStatus" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 3 */}
// //                                                     {step === 3 && (
// //                                                         <>
// //                                                             <Input label={t('forms.salesRepresentative.fields.buildTrust')} name="buildTrust" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.commStyle')} name="commStyle" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.motivationRenewable')} name="motivationRenewable" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.cameraComfort')} name="cameraComfort" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.crmComfort')} name="crmComfort" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.strongMarkets')} name="strongMarkets" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 4 */}
// //                                                     {step === 4 && (
// //                                                         <>
// //                                                             <Input label={t('forms.salesRepresentative.fields.remoteWork')} name="remoteWork" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.inPersonDays')} name="inPersonDays" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.handleObjections')} name="handleObjections" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.learnProducts')} name="learnProducts" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.lifeChangingSale')} name="lifeChangingSale" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.followUpStyle')} name="followUpStyle" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 5 */}
// //                                                     {step === 5 && (
// //                                                         <>
// //                                                             <Input label={t('forms.salesRepresentative.fields.whyAncestro')} name="whyAncestro" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.freedomMeaning')} name="freedomMeaning" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.latamFuture')} name="latamFuture" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.resonance')} name="resonance" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.incomeGoals')} name="incomeGoals" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.successVision')} name="successVision" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 6 */}
// //                                                     {step === 6 && (
// //                                                         <>
// //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                                                 {t('forms.salesRepresentative.sections.lifestyleMindset')}
// //                                                             </p>
// //                                                             <Input label={t('forms.salesRepresentative.fields.discipline')} name="discipline" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.dailyHabits')} name="dailyHabits" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.habitToImprove')} name="habitToImprove" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.handleFailure')} name="handleFailure" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.meditation')} name="meditation" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.selfTalk')} name="selfTalk" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <FileUpload label={t('forms.salesRepresentative.fields.photoOptional')} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 7 */}
// //                                                     {step === 7 && (
// //                                                         <>
// //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                                                 {t('forms.salesRepresentative.sections.motivationPurpose')}
// //                                                             </p>
// //                                                             <Input label={t('forms.salesRepresentative.fields.currentBlock')} name="currentBlock" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.freedomMoment')} name="freedomMoment" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.workThatEnergizes')} name="workThatEnergizes" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.whyMissionDriven')} name="whyMissionDriven" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 8 */}
// //                                                     {step === 8 && (
// //                                                         <>
// //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                                                 {t('forms.salesRepresentative.sections.personalityComm')}
// //                                                             </p>
// //                                                             <Input label={t('forms.salesRepresentative.fields.energyType')} name="energyType" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.publicSpeaking')} name="publicSpeaking" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.learningWillingness')} name="learningWillingness" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.structurePreference')} name="structurePreference" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.bestEnvironment')} name="bestEnvironment" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 9 */}
// //                                                     {step === 9 && (
// //                                                         <>
// //                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                                                 {t('forms.salesRepresentative.sections.growthCulture')}
// //                                                             </p>
// //                                                             <Input label={t('forms.salesRepresentative.fields.spiritualTeam')} name="spiritualTeam" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.physicalWellbeing')} name="physicalWellbeing" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.personalGrowth')} name="personalGrowth" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.fitnessEncouragement')} name="fitnessEncouragement" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <Input label={t('forms.salesRepresentative.fields.fitnessChallenge')} name="fitnessChallenge" register={register} required errors={errors} clearErrors={clearErrors} />
// //                                                             <FileUpload label={t('forms.salesRepresentative.fields.photoOptional')} />
// //                                                         </>
// //                                                     )}

// //                                                     {/* STEP 10 */}
// //                                                     {step === 10 && (
// //                                                         <>
// //                                                             <FileUpload
// //                                                                 label={t('forms.salesRepresentative.fields.uploadCV')}
// //                                                                 required
// //                                                                 fileName={cvFileName}
// //                                                                 onChange={(e) => {
// //                                                                     const file = e.target.files[0];
// //                                                                     if (file) {
// //                                                                         setCvFileName(file.name);
// //                                                                         setValue('cvFile', file, { shouldValidate: true });
// //                                                                         clearErrors('cvFile');
// //                                                                     }
// //                                                                 }}
// //                                                                 inputRef={cvInputRef}
// //                                                             />
// //                                                             {errors.cvFile && <p className="text-red-500 text-xs mt-1">{errors.cvFile.message}</p>}

// //                                                             <FileUpload
// //                                                                 label={t('forms.salesRepresentative.fields.uploadVideo')}
// //                                                                 fileName={videoFileName}
// //                                                                 onChange={(e) => e.target.files[0] && setVideoFileName(e.target.files[0].name)}
// //                                                                 inputRef={videoInputRef}
// //                                                             />

// //                                                             <RadioCheckbox
// //                                                                 label={t('forms.salesRepresentative.fields.fullTimeAvailability')}
// //                                                                 options={[t('common.yes'), t('common.no')]}
// //                                                                 name="fullTimeAvailability"
// //                                                                 register={register}
// //                                                                 required
// //                                                                 error={errors.fullTimeAvailability}
// //                                                                 watch={watch}
// //                                                                 clearErrors={clearErrors}
// //                                                             />

// //                                                             <RadioCheckbox
// //                                                                 label={t('forms.salesRepresentative.fields.trainingCommitment')}
// //                                                                 options={[t('common.yes'), t('common.no')]}
// //                                                                 name="trainingCommitment"
// //                                                                 register={register}
// //                                                                 required
// //                                                                 error={errors.trainingCommitment}
// //                                                                 watch={watch}
// //                                                                 clearErrors={clearErrors}
// //                                                             />
// //                                                         </>
// //                                                     )}
// //                                                 </div>
// //                                             </div>

// //                                             {/* Buttons */}
// //                                             <div className="flex flex-col gap-4">
// //                                                 {step > 1 && (
// //                                                     <button type="button" onClick={prevStep} className="w-full cursor-pointer py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium">
// //                                                         {t('common.back')}
// //                                                     </button>
// //                                                 )}
// //                                                 {step < 10 ? (
// //                                                     <button type="button" onClick={nextStep} className="w-full py-4 cursor-pointer bg-[#F8B03B] uppercase text-black font-bold rounded-full transition text-lg">
// //                                                         {t('common.next')}
// //                                                     </button>
// //                                                 ) : (
// //                                                     <button
// //                                                         type="submit"
// //                                                         disabled={!isStep10Complete}
// //                                                         className={`w-full py-4 rounded-full transition text-lg font-bold uppercase
// //                                                             ${isStep10Complete
// //                                                                 ? 'bg-[#F8B03B] text-black cursor-pointer hover:bg-[#f9c65b]'
// //                                                                 : 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-70'
// //                                                             }`}
// //                                                     >
// //                                                         {t('forms.salesRepresentative.submitButton')}
// //                                                     </button>
// //                                                 )}
// //                                             </div>
// //                                         </div>
// //                                     </form>
// //                                 </Dialog.Panel>
// //                             </Transition.Child>
// //                         </div>
// //                     </div>
// //                 </Dialog>
// //             </Transition>

// //             {/* Thank You Modal */}
// //             <Transition appear show={showThankYou} as={Fragment}>
// //                 <Dialog as="div" className="relative z-50" onClose={handleClose}>
// //                     <Transition.Child as={Fragment}>
// //                         <div className="fixed inset-0 bg-black/80" />
// //                     </Transition.Child>
// //                     <div className="fixed inset-0 overflow-y-auto">
// //                         <div className="flex min-h-full items-center justify-center p-4">
// //                             <Transition.Child as={Fragment}>
// //                                 <Dialog.Panel style={{
// //                                     width: '800px', height: '306px', maxWidth: '95vw', background: '#FFFFFF1A',
// //                                     border: '1px solid #F8B03B', borderRadius: '20px', padding: '50px',
// //                                     backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
// //                                     boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.5)', display: 'flex',
// //                                     flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
// //                                     gap: '30px', textAlign: 'center', color: 'white', fontFamily: 'Lato, sans-serif',
// //                                 }}>
// //                                     <ThanksModal
// //                                         text1={t('forms.salesRepresentative.thanks.text1')}
// //                                         text2={t('forms.salesRepresentative.thanks.text2')}
// //                                     />
// //                                 </Dialog.Panel>
// //                             </Transition.Child>
// //                         </div>
// //                     </div>
// //                 </Dialog>
// //             </Transition>
// //         </>
// //     );
// // }

// // // Reusable Input
// // function Input({ label, name, register, required, errors, type = 'text', clearErrors, ...props }) {
// //     return (
// //         <div className="relative">
// //             <label className="block text-[14px] font-helvetica font-bold uppercase tracking-wider mb-2 opacity-90">
// //                 {label} {required && <span className="text-red-400">*</span>}
// //             </label>
// //             <input
// //                 type={type}
// //                 {...register(name, {
// //                     required: required && t('common.required'),
// //                     onChange: () => clearErrors(name),
// //                 })}
// //                 className={`w-full font-helvetica font-normal bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 transition
// //                     ${type === 'date' ? 'date-input-white' : ''}
// //                 `}
// //                 placeholder={t('common.typeHere')}
// //                 {...props}
// //             />
// //             {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message || t('common.required')}</p>}
// //         </div>
// //     );
// // }

// // // Radio with error clearing
// // function RadioCheckbox({ label, options, name, register, required, error, watch, clearErrors }) {
// //     return (
// //         <div className="mt-8">
// //             <p className="text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">{label}</p>
// //             <div className="flex gap-6">
// //                 {options.map((option) => (
// //                     <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
// //                         <input
// //                             type="radio"
// //                             value={option}
// //                             {...register(name, {
// //                                 required: required && t('common.required'),
// //                                 onChange: () => clearErrors(name),
// //                             })}
// //                             className="sr-only"
// //                         />
// //                         <div className="relative w-6 h-6 rounded-md border border-white flex items-center justify-center">
// //                             {watch(name) === option && (
// //                                 <svg className="h-4 w-4 text-[#F8B03B]" viewBox="0 0 18 18" fill="none">
// //                                     <path d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z" fill="#F8B03B"/>
// //                                 </svg>
// //                             )}
// //                         </div>
// //                         <span className="text-white font-medium uppercase text-sm tracking-wider">{option}</span>
// //                     </label>
// //                 ))}
// //             </div>
// //             {error && <p className="text-red-500 text-xs mt-2">{error.message || t('common.required')}</p>}
// //         </div>
// //     );
// // }

// // // File Upload
// // function FileUpload({ label, required, fileName, onChange, inputRef }) {
// //     const id = `upload-${label.replace(/\s+/g, '-')}`;
// //     return (
// //         <div className="mt-6 border-b-2 border-white/40 pb-5">
// //             <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">
// //                 {label} {required && <span className="text-red-400">*</span>}
// //             </label>
// //             <div className="flex items-center gap-4">
// //                 <input type="file" id={id} className="hidden" ref={inputRef} onChange={onChange} />
// //                 <label htmlFor={id} className="cursor-pointer inline-flex items-center justify-center w-[70px] h-[34px] rounded-[10px] bg-[#FFFFFF33] text-white font-medium text-sm hover:bg-[#FFFFFF44] transition">
// //                     {t('common.upload')}
// //                 </label>
// //                 <span className="text-white/70 text-sm">{fileName || t('common.noFileChosen')}</span>
// //             </div>
// //         </div>
// //     );
// // }




// // components/Form/SalesRepresentativeForm.jsx
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';
// import { useForm } from 'react-hook-form';
// import ThanksModal from './ThanksModal';
// import { useTranslation } from "react-i18next";

// export default function SalesRepresentativeForm({ isOpen = false, onClose }) {
//     const [step, setStep] = useState(1);
//     const [showThankYou, setShowThankYou] = useState(false);
//     const { t } = useTranslation();

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         trigger,
//         watch,
//         clearErrors,
//         setValue,
//         reset,
//     } = useForm({
//         mode: 'onChange',
//         reValidateMode: "onChange"
//     });

//     const [cvFileName, setCvFileName] = useState('');
//     const [videoFileName, setVideoFileName] = useState('');
//     const cvInputRef = useRef(null);
//     const videoInputRef = useRef(null);

//     const fullTimeAvailability = watch('fullTimeAvailability');
//     const trainingCommitment = watch('trainingCommitment');
//     const isStep10Complete = !!cvFileName && !!fullTimeAvailability && !!trainingCommitment;

//     useEffect(() => {
//         if (!isOpen) {
//             setStep(1);
//             setShowThankYou(false);
//             setCvFileName('');
//             setVideoFileName('');
//             reset();
//             if (cvInputRef.current) cvInputRef.current.value = '';
//             if (videoInputRef.current) videoInputRef.current.value = '';
//         }
//     }, [isOpen]);

//     const validateStep = async () => {
//         const fields = getFieldsForStep(step);
//         return await trigger(fields);
//     };

//     const nextStep = async () => {
//         if (await validateStep()) setStep(prev => Math.min(prev + 1, 10));
//     };

//     const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

//     const onSubmit = (data) => {
//         console.log('Form submitted:', { ...data, cvFileName, videoFileName });
//         setShowThankYou(true);
//     };

//     const handleClose = () => {
//         setStep(1);
//         setShowThankYou(false);
//         setCvFileName('');
//         setVideoFileName('');
//         onClose?.();
//     };

//     const getFieldsForStep = (currentStep) => {
//         switch (currentStep) {
//             case 1: return ['fullName', 'location', 'whatsapp', 'email', 'dob', 'languages', 'socialProfile'];
//             case 2: return ['education', 'salesExperience', 'renewableExperience', 'bestSalesStory', 'currentWorkStatus'];
//             case 3: return ['buildTrust', 'commStyle', 'motivationRenewable', 'cameraComfort', 'crmComfort', 'strongMarkets'];
//             case 4: return ['remoteWork', 'inPersonDays', 'handleObjections', 'learnProducts', 'lifeChangingSale', 'followUpStyle'];
//             case 5: return ['whyAncestro', 'freedomMeaning', 'latamFuture', 'resonance', 'incomeGoals', 'successVision'];
//             case 6: return ['discipline', 'dailyHabits', 'habitToImprove', 'handleFailure', 'meditation', 'selfTalk'];
//             case 7: return ['currentBlock', 'freedomMoment', 'workThatEnergizes', 'whyMissionDriven'];
//             case 8: return ['energyType', 'publicSpeaking', 'learningWillingness', 'structurePreference', 'bestEnvironment'];
//             case 9: return ['spiritualTeam', 'physicalWellbeing', 'personalGrowth', 'fitnessEncouragement', 'fitnessChallenge'];
//             case 10: return ['fullTimeAvailability', 'trainingCommitment'];
//             default: return [];
//         }
//     };

//     return (
//         <>
//             <Transition appear show={isOpen} as={Fragment}>
//                 <Dialog as="div" className="relative z-50" onClose={handleClose}>
//                     <Transition.Child as={Fragment}>
//                         <div className="fixed inset-0 bg-black/80" />
//                     </Transition.Child>

//                     <div className="fixed inset-0 overflow-y-auto">
//                         <div className="flex min-h-full items-center justify-center p-4">
//                             <Transition.Child as={Fragment}>
//                                 <Dialog.Panel
//                                     className="w-full max-w-4xl rounded-2xl overflow-hidden font-lato"
//                                     style={{
//                                         width: '823px',
//                                         maxWidth: '95vw',
//                                         background: '#FFFFFF1A',
//                                         border: '1px solid rgba(255, 255, 255, 0.10)',
//                                         backdropFilter: 'blur(20px)',
//                                         WebkitBackdropFilter: 'blur(20px)',
//                                         boxShadow: '0px 4px 4px 0px #000000CC',
//                                     }}
//                                 >
//                                     <form onSubmit={handleSubmit(onSubmit)}>
//                                         <div className="flex flex-col p-5 sm:p-12 text-white">

//                                             {/* Header */}
//                                             <div className='w-full flex justify-center items-center'>
//                                                 <header className="text-center mb-10 w-full">
//                                                     <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
//                                                         {t('forms.salesRepresentative.title')}
//                                                     </h1>
//                                                     <p className="text-lg opacity-90">
//                                                         {t('forms.salesRepresentative.subtitle')}
//                                                     </p>
//                                                     <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                                         {t('forms.salesRepresentative.hashtag')}
//                                                     </p>
//                                                 </header>
//                                             </div>

//                                             <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
//                                                 <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
//                                                     {step === 1 && 'Personal Information'}
//                                                     {step === 2 && 'Background & Education'}
//                                                     {step === 3 && 'Skills & Communication'}
//                                                     {step === 4 && 'Role Expectations & Execution'}
//                                                     {step === 5 && 'Vision & Purpose'}
//                                                     {step === 6 && 'Personal Alignment & Self-Awareness'}
//                                                     {step === 7 && 'Motivation & Purpose'}
//                                                     {step === 8 && 'Personality & Communication'}
//                                                     {step === 9 && 'Growth & Culture Fit'}
//                                                     {step === 10 && 'Final Steps'}
//                                                 </h2>

//                                                 <div className={`grid gap-x-12 gap-y-3 ${step === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>

//                                                     {/* STEP 1 */}
//                                                     {step === 1 && (
//                                                         <>
//                                                             <Input t={t} label="Full Name" name="fullName" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Country and City" name="location" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="WhatsApp Number" name="whatsapp" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Email Address" name="email" register={register} required errors={errors} type="email" clearErrors={clearErrors} />
//                                                             <Input t={t} label="Date of Birth" name="dob" register={register} required errors={errors} type="date" clearErrors={clearErrors} />
//                                                             <Input t={t} label="Languages Spoken" name="languages" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <div className="col-span-2">
//                                                                 <Input t={t} label="LinkedIn or Instagram Profile" name="socialProfile" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             </div>
//                                                         </>
//                                                     )}

//                                                     {/* STEP 2 */}
//                                                     {step === 2 && (
//                                                         <>
//                                                             <Input t={t} label="What is your educational background?" name="education" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Do you have prior experience in sales? If yes, describe the industries and products you’ve worked with." name="salesExperience" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Have you ever sold renewable energy or financial services before?" name="renewableExperience" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Describe your most successful sales experience and what made it successful." name="bestSalesStory" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Are you currently self-employed, working in sales, or transitioning from another field?" name="currentWorkStatus" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 3 */}
//                                                     {step === 3 && (
//                                                         <>
//                                                             <Input t={t} label="How do you build trust with clients during your first interaction?" name="buildTrust" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Describe your communication style in three words." name="commStyle" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What motivates you most about selling renewable energy solutions?" name="motivationRenewable" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How comfortable are you speaking on camera or conducting video calls? (1–10)" name="cameraComfort" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Rate your comfort level using CRM systems and digital tools. (1–10)" name="crmComfort" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What languages or markets are you most confident selling in?" name="strongMarkets" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 4 */}
//                                                     {step === 4 && (
//                                                         <>
//                                                             <Input t={t} label="Are you comfortable working remotely with a results-based structure?" name="remoteWork" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Are you able to attend two in-person collaboration days per week?" name="inPersonDays" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How do you handle objections or rejection in a sales conversation?" name="handleObjections" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What’s your process for learning and mastering new products quickly?" name="learnProducts" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Describe a time you helped someone make a decision that truly improved their life." name="lifeChangingSale" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What’s your approach to follow-ups and closing deals?" name="followUpStyle" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 5 */}
//                                                     {step === 5 && (
//                                                         <>
//                                                             <Input t={t} label="Why do you want to represent Ancestro Energy?" name="whyAncestro" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What does “freedom through energy” mean to you personally?" name="freedomMeaning" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How do you think renewable energy will transform Latin America in the next 5 years?" name="latamFuture" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Ancestro combines spirituality, business, and philanthropy — which of these resonates most with you and why?" name="resonance" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What are your personal income and lifestyle goals for the next 12 months?" name="incomeGoals" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What will success look like for you one year from now as part of this movement?" name="successVision" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 6 */}
//                                                     {step === 6 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                                                 Lifestyle & Mindset
//                                                             </p>
//                                                             <Input t={t} label="On a scale of 1–10, how would you rate your self-discipline?" name="discipline" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What daily habits keep you focused or grounded?" name="dailyHabits" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What’s one habit you’d like to improve this year?" name="habitToImprove" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How do you handle rejection or failure?" name="handleFailure" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Do you meditate or have a mindfulness practice? If so, how often?" name="meditation" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How would you describe your self-talk when you face challenges?" name="selfTalk" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <FileUpload t={t} label="Upload a recent photo that represents who you are (optional)" />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 7 */}
//                                                     {step === 7 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                                                 Motivation & Purpose
//                                                             </p>
//                                                             <Input t={t} label="What is currently holding you back from your highest potential?" name="currentBlock" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Describe a moment when you felt frustrated by limits or systems in society..." name="freedomMoment" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What kind of work makes you feel most alive?" name="workThatEnergizes" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Why do you want to be part of a mission-driven, health-conscious company like Ancestro?" name="whyMissionDriven" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 8 */}
//                                                     {step === 8 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                                                 Personality & Communication
//                                                             </p>
//                                                             <Input t={t} label="How would you describe your natural energy: introvert, extrovert, or ambivert?" name="energyType" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How comfortable are you speaking to a group or presenting on stage? (1–10)" name="publicSpeaking" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How comfortable are you learning new material weekly or receiving coaching?" name="learningWillingness" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="Do you prefer structured guidance or freedom to self-direct?" name="structurePreference" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What type of environment helps you perform at your best?" name="bestEnvironment" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 9 */}
//                                                     {step === 9 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                                                 Growth & Culture Fit
//                                                             </p>
//                                                             <Input t={t} label="Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?" name="spiritualTeam" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="How do you maintain your physical wellbeing and energy levels?" name="physicalWellbeing" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="What areas of personal growth are you actively working on right now?" name="personalGrowth" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?" name="fitnessEncouragement" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input t={t} label="If you were selected for this role only after demonstrating a commitment to improve your physical fitness..." name="fitnessChallenge" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <FileUpload t={t} label="Upload a recent photo that represents who you are (optional)." />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 10 */}
//                                                     {step === 10 && (
//                                                         <>
//                                                             <FileUpload
//                                                                 t={t}
//                                                                 label="Upload your CV or resume."
//                                                                 required
//                                                                 fileName={cvFileName}
//                                                                 onChange={(e) => {
//                                                                     const file = e.target.files[0];
//                                                                     if (file) {
//                                                                         setCvFileName(file.name);
//                                                                         setValue('cvFile', file, { shouldValidate: true });
//                                                                         clearErrors('cvFile');
//                                                                     }
//                                                                 }}
//                                                                 inputRef={cvInputRef}
//                                                             />
//                                                             {errors.cvFile && <p className="text-red-500 text-xs mt-1">This field is required</p>}

//                                                             <FileUpload
//                                                                 t={t}
//                                                                 label="Upload a 1-minute video introducing yourself and why you want to join Ancestro. (Optional)"
//                                                                 fileName={videoFileName}
//                                                                 onChange={(e) => e.target.files[0] && setVideoFileName(e.target.files[0].name)}
//                                                                 inputRef={videoInputRef}
//                                                             />

//                                                             <RadioCheckbox
//                                                                 t={t}
//                                                                 label="CONFIRM FULL-TIME AVAILABILITY."
//                                                                 options={['YES', 'NO']}
//                                                                 name="fullTimeAvailability"
//                                                                 register={register}
//                                                                 required
//                                                                 error={errors.fullTimeAvailability}
//                                                                 watch={watch}
//                                                                 clearErrors={clearErrors}
//                                                             />

//                                                             <RadioCheckbox
//                                                                 t={t}
//                                                                 label="Confirm willingness to participate in initial training and evaluation phase."
//                                                                 options={['YES', 'NO']}
//                                                                 name="trainingCommitment"
//                                                                 register={register}
//                                                                 required
//                                                                 error={errors.trainingCommitment}
//                                                                 watch={watch}
//                                                                 clearErrors={clearErrors}
//                                                             />
//                                                         </>
//                                                     )}
//                                                 </div>
//                                             </div>

//                                             {/* Buttons */}
//                                             <div className="flex flex-col gap-4">
//                                                 {step > 1 && (
//                                                     <button type="button" onClick={prevStep} className="w-full cursor-pointer py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium">
//                                                         Back
//                                                     </button>
//                                                 )}
//                                                 {step < 10 ? (
//                                                     <button type="button" onClick={nextStep} className="w-full py-4 cursor-pointer bg-[#F8B03B] uppercase text-black font-bold rounded-full transition text-lg">
//                                                         Next
//                                                     </button>
//                                                 ) : (
//                                                     <button
//                                                         type="submit"
//                                                         disabled={!isStep10Complete}
//                                                         className={`w-full py-4 rounded-full transition text-lg font-bold uppercase
//                                                             ${isStep10Complete
//                                                                 ? 'bg-[#F8B03B] text-black cursor-pointer hover:bg-[#f9c65b]'
//                                                                 : 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-70'
//                                                             }`}
//                                                     >
//                                                         Submit Application
//                                                     </button>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </Dialog.Panel>
//                             </Transition.Child>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition>

//             <ThanksModal
//                 isOpen={showThankYou}
//                 onClose={handleClose}
//                 text1={t('forms.salesRepresentative.thanks.text1')}
//                 text2={t('forms.salesRepresentative.thanks.text2')}
//             />
//         </>
//     );
// }

// /* ==================== REUSABLE COMPONENTS ==================== */
// function Input({ t, label, name, register, required, errors, type = 'text', clearErrors, ...props }) {
//     return (
//         <div className="relative">
//             <label className="block text-[14px] font-helvetica font-bold uppercase tracking-wider mb-2 opacity-90">
//                 {label} {required && <span className="text-red-400">*</span>}
//             </label>
//             <input
//                 type={type}
//                 {...register(name, {
//                     required: required && t('common.required'),
//                     onChange: () => clearErrors(name),
//                 })}
//                 className={`w-full font-helvetica font-normal bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 transition
//                     ${type === 'date' ? 'date-input-white' : ''}
//                 `}
//                 {...props}
//             />
//             {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message || t('common.required')}</p>}
//         </div>
//     );
// }

// function RadioCheckbox({ t, label, options, name, register, required, error, watch, clearErrors }) {
//     return (
//         <div className="mt-8">
//             <p className="text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">{label}</p>
//             <div className="flex gap-6">
//                 {options.map((option) => (
//                     <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
//                         <input
//                             type="radio"
//                             value={option}
//                             {...register(name, {
//                                 required: required && t('common.required'),
//                                 onChange: () => clearErrors(name),
//                             })}
//                             className="sr-only"
//                         />
//                         <div className="relative w-6 h-6 rounded-md border border-white flex items-center justify-center">
//                             {watch(name) === option && (
//                                 <svg className="h-4 w-4 text-[#F8B03B]" viewBox="0 0 18 18" fill="none">
//                                     <path d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z" fill="#F8B03B"/>
//                                 </svg>
//                             )}
//                         </div>
//                         <span className="text-white font-medium uppercase text-sm tracking-wider">{option}</span>
//                     </label>
//                 ))}
//             </div>
//             {error && <p className="text-red-500 text-xs mt-2">{error.message || t('common.required')}</p>}
//         </div>
//     );
// }

// function FileUpload({ t, label, required, fileName, onChange, inputRef }) {
//     const id = `upload-${label.replace(/\s+/g, '-')}`;
//     return (
//         <div className="mt-6 border-b-2 border-white/40 pb-5">
//             <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">
//                 {label} {required && <span className="text-red-400">*</span>}
//             </label>
//             <div className="flex items-center gap-4">
//                 <input type="file" id={id} className="hidden" ref={inputRef} onChange={onChange} />
//                 <label htmlFor={id} className="cursor-pointer inline-flex items-center justify-center w-[70px] h-[34px] rounded-[10px] bg-[#FFFFFF33] text-white font-medium text-sm hover:bg-[#FFFFFF44] transition">
//                     Upload
//                 </label>
//                 <span className="text-white/70 text-sm">{fileName || 'No file chosen'}</span>
//             </div>
//         </div>
//     );
// }
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import ThanksModal from './ThanksModal';
import { useTranslation } from "react-i18next";

export default function SalesRepresentativeForm({ isOpen = false, onClose }) {
    const [step, setStep] = useState(1);
    const [showThankYou, setShowThankYou] = useState(false);
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        watch,
        clearErrors,
        setValue,
        reset,
    } = useForm({
        mode: 'onChange',
        reValidateMode: "onChange"
    });

    const [cvFileName, setCvFileName] = useState('');
    const [videoFileName, setVideoFileName] = useState('');
    const cvInputRef = useRef(null);
    const videoInputRef = useRef(null);

    const fullTimeAvailability = watch('fullTimeAvailability');
    const trainingCommitment = watch('trainingCommitment');
    const isStep10Complete = !!cvFileName && !!fullTimeAvailability && !!trainingCommitment;

    useEffect(() => {
        if (!isOpen) {
            setStep(1);
            setShowThankYou(false);
            setCvFileName('');
            setVideoFileName('');
            reset();
            if (cvInputRef.current) cvInputRef.current.value = '';
            if (videoInputRef.current) videoInputRef.current.value = '';
        }
    }, [isOpen]);

    const validateStep = async () => {
        const fieldsToValidate = getFieldsForStep(step);
        return await trigger(fieldsToValidate);
    };

    const nextStep = async () => {
        const isValid = await validateStep();
        if (isValid) setStep(prev => Math.min(prev + 1, 10));
    };

    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const onSubmit = (data) => {
        console.log('Form submitted:', { ...data, cvFileName, videoFileName });
        setShowThankYou(true);
    };

    const handleClose = () => {
        setStep(1);
        setShowThankYou(false);
        setCvFileName('');
        setVideoFileName('');
        onClose?.();
    };

    const getFieldsForStep = (currentStep) => {
        switch (currentStep) {
            case 1: return ['fullName', 'location', 'whatsapp', 'email', 'dob', 'languages', 'socialProfile'];
            case 2: return ['education', 'salesExperience', 'renewableExperience', 'bestSalesStory', 'currentWorkStatus'];
            case 3: return ['buildTrust', 'commStyle', 'motivationRenewable', 'cameraComfort', 'crmComfort', 'strongMarkets'];
            case 4: return ['remoteWork', 'inPersonDays', 'handleObjections', 'learnProducts', 'lifeChangingSale', 'followUpStyle'];
            case 5: return ['whyAncestro', 'freedomMeaning', 'latamFuture', 'resonance', 'incomeGoals', 'successVision'];
            case 6: return ['discipline', 'dailyHabits', 'habitToImprove', 'handleFailure', 'meditation', 'selfTalk'];
            case 7: return ['currentBlock', 'freedomMoment', 'workThatEnergizes', 'whyMissionDriven'];
            case 8: return ['energyType', 'publicSpeaking', 'learningWillingness', 'structurePreference', 'bestEnvironment'];
            case 9: return ['spiritualTeam', 'physicalWellbeing', 'personalGrowth', 'fitnessEncouragement', 'fitnessChallenge'];
            case 10: return ['fullTimeAvailability', 'trainingCommitment'];
            default: return [];
        }
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={handleClose}>
                    <Transition.Child as={Fragment}>
                        <div className="fixed inset-0 bg-black/80" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child as={Fragment}>
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="flex flex-col p-5 sm:p-12 text-white">
                                            {/* Header */}
                                            <div className='w-full flex justify-center items-center'>
                                                <header className="text-center mb-10 w-full">
                                                    <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
                                                        {t('forms.salesRepresentative.title')}
                                                    </h1>
                                                    <p className="text-lg opacity-90">
                                                        {t('forms.salesRepresentative.subtitle')}
                                                    </p>
                                                    <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
                                                        {t('forms.salesRepresentative.hashtag')}
                                                    </p>
                                                </header>
                                            </div>

                                            {/* Form Fields */}
                                            <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
                                                <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
                                                    {t(`forms.salesRepresentative.steps.step${step}`)}
                                                </h2>

                                                <div className={`grid gap-x-12 gap-y-3 ${step === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                    {/* STEP 1 */}
                                                    {step === 1 && (
                                                        <>
                                                            <Input label={t('forms.salesRepresentative.fields.fullName')} name="fullName" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.location')} name="location" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.whatsapp')} name="whatsapp" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.email')} name="email" register={register} required errors={errors} type="email" clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.dob')} name="dob" register={register} required errors={errors} type="date" clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.languages')} name="languages" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <div className="col-span-2">
                                                                <Input label={t('forms.salesRepresentative.fields.socialProfile')} name="socialProfile" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            </div>
                                                        </>
                                                    )}

                                                    {/* STEP 2 */}
                                                    {step === 2 && (
                                                        <>
                                                            <Input label={t('forms.salesRepresentative.fields.education')} name="education" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.salesExperience')} name="salesExperience" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.renewableExperience')} name="renewableExperience" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.bestSalesStory')} name="bestSalesStory" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.currentWorkStatus')} name="currentWorkStatus" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 3 */}
                                                    {step === 3 && (
                                                        <>
                                                            <Input label={t('forms.salesRepresentative.fields.buildTrust')} name="buildTrust" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.commStyle')} name="commStyle" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.motivationRenewable')} name="motivationRenewable" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.cameraComfort')} name="cameraComfort" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.crmComfort')} name="crmComfort" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.strongMarkets')} name="strongMarkets" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 4 */}
                                                    {step === 4 && (
                                                        <>
                                                            <Input label={t('forms.salesRepresentative.fields.remoteWork')} name="remoteWork" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.inPersonDays')} name="inPersonDays" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.handleObjections')} name="handleObjections" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.learnProducts')} name="learnProducts" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.lifeChangingSale')} name="lifeChangingSale" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.followUpStyle')} name="followUpStyle" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 5 */}
                                                    {step === 5 && (
                                                        <>
                                                            <Input label={t('forms.salesRepresentative.fields.whyAncestro')} name="whyAncestro" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.freedomMeaning')} name="freedomMeaning" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.latamFuture')} name="latamFuture" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.resonance')} name="resonance" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.incomeGoals')} name="incomeGoals" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.successVision')} name="successVision" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 6 */}
                                                    {step === 6 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
                                                                {t('forms.salesRepresentative.sections.lifestyleMindset')}
                                                            </p>
                                                            <Input label={t('forms.salesRepresentative.fields.discipline')} name="discipline" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.dailyHabits')} name="dailyHabits" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.habitToImprove')} name="habitToImprove" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.handleFailure')} name="handleFailure" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.meditation')} name="meditation" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.selfTalk')} name="selfTalk" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <FileUpload label={t('forms.salesRepresentative.fields.photoOptional')} />
                                                        </>
                                                    )}

                                                    {/* STEP 7 */}
                                                    {step === 7 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
                                                                {t('forms.salesRepresentative.sections.motivationPurpose')}
                                                            </p>
                                                            <Input label={t('forms.salesRepresentative.fields.currentBlock')} name="currentBlock" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.freedomMoment')} name="freedomMoment" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.workThatEnergizes')} name="workThatEnergizes" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.whyMissionDriven')} name="whyMissionDriven" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 8 */}
                                                    {step === 8 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
                                                                {t('forms.salesRepresentative.sections.personalityComm')}
                                                            </p>
                                                            <Input label={t('forms.salesRepresentative.fields.energyType')} name="energyType" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.publicSpeaking')} name="publicSpeaking" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.learningWillingness')} name="learningWillingness" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.structurePreference')} name="structurePreference" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.bestEnvironment')} name="bestEnvironment" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 9 */}
                                                    {step === 9 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
                                                                {t('forms.salesRepresentative.sections.growthCulture')}
                                                            </p>
                                                            <Input label={t('forms.salesRepresentative.fields.spiritualTeam')} name="spiritualTeam" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.physicalWellbeing')} name="physicalWellbeing" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.personalGrowth')} name="personalGrowth" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.fitnessEncouragement')} name="fitnessEncouragement" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label={t('forms.salesRepresentative.fields.fitnessChallenge')} name="fitnessChallenge" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <FileUpload label={t('forms.salesRepresentative.fields.photoOptional')} />
                                                        </>
                                                    )}

                                                    {/* STEP 10 */}
                                                    {step === 10 && (
                                                        <>
                                                            <FileUpload
                                                                label={t('forms.salesRepresentative.fields.uploadCV')}
                                                                required
                                                                fileName={cvFileName}
                                                                onChange={(e) => {
                                                                    const file = e.target.files[0];
                                                                    if (file) {
                                                                        setCvFileName(file.name);
                                                                        setValue('cvFile', file, { shouldValidate: true });
                                                                        clearErrors('cvFile');
                                                                    }
                                                                }}
                                                                inputRef={cvInputRef}
                                                            />
                                                            {errors.cvFile && <p className="text-red-500 text-xs mt-1">{t('common.required')}</p>}

                                                            <FileUpload
                                                                label={t('forms.salesRepresentative.fields.uploadVideo')}
                                                                fileName={videoFileName}
                                                                onChange={(e) => e.target.files[0] && setVideoFileName(e.target.files[0].name)}
                                                                inputRef={videoInputRef}
                                                            />

                                                            <RadioCheckbox
                                                                label={t('forms.salesRepresentative.fields.fullTimeAvailability')}
                                                                options={[t('common.yes'), t('common.no')]}
                                                                name="fullTimeAvailability"
                                                                register={register}
                                                                required
                                                                error={errors.fullTimeAvailability}
                                                                watch={watch}
                                                                clearErrors={clearErrors}
                                                            />
                                                            <RadioCheckbox
                                                                label={t('forms.salesRepresentative.fields.trainingCommitment')}
                                                                options={[t('common.yes'), t('common.no')]}
                                                                name="trainingCommitment"
                                                                register={register}
                                                                required
                                                                error={errors.trainingCommitment}
                                                                watch={watch}
                                                                clearErrors={clearErrors}
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex flex-col gap-4">
                                                {step > 1 && (
                                                    <button type="button" onClick={prevStep} className="w-full cursor-pointer py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium">
                                                        {t('common.back')}
                                                    </button>
                                                )}
                                                {step < 10 ? (
                                                    <button type="button" onClick={nextStep} className="w-full py-4 cursor-pointer bg-[#F8B03B] uppercase text-black font-bold rounded-full transition text-lg">
                                                        {t('common.next')}
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        disabled={!isStep10Complete}
                                                        className={`w-full py-4 rounded-full transition text-lg font-bold uppercase
                                                            ${isStep10Complete
                                                                ? 'bg-[#F8B03B] text-black cursor-pointer hover:bg-[#f9c65b]'
                                                                : 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-70'
                                                            }`}
                                                    >
                                                        {t('forms.salesRepresentative.submitButton')}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Thank You Modal */}
            <Transition appear show={showThankYou} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
                                    <ThanksModal
                                        text1={t('forms.salesRepresentative.thanks.text1')}
                                        text2={t('forms.salesRepresentative.thanks.text2')}
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

// Fixed: error messages translated + no placeholder
function Input({ label, name, register, required, errors, type = 'text', clearErrors, ...props }) {
    const { t } = useTranslation();
    return (
        <div className="relative">
            <label className="block text-[14px] font-helvetica font-bold uppercase tracking-wider mb-2 opacity-90">
                {label}
            </label>
            <input
                type={type}
                {...register(name, {
                    required: required && t('common.required'),
                    onChange: () => clearErrors(name),
                })}
                // Placeholder removed completely
                className={`w-full font-helvetica font-normal bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 transition
                    ${type === 'date' ? 'date-input-white' : ''}
                `}
                {...props}
            />
            {/* {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>} */}
            {errors[name] && (
                <p className="text-red-500 text-xs mt-1">
                    {errors[name]?.message || t('common.required')}   {/* <-- fresh translation */}
                </p>
            )}
        </div>
    );
}

function RadioCheckbox({ label, options, name, register, required, error, watch, clearErrors }) {
    const { t } = useTranslation();
    return (
        <div className="mt-8">
            <p className="text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">{label}</p>
            <div className="flex gap-6">
                {options.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                            type="radio"
                            value={option}
                            {...register(name, {
                                required: required && t('common.required'),
                                onChange: () => clearErrors(name),
                            })}
                            className="sr-only"
                        />
                        <div className="relative w-6 h-6 rounded-md border border-white flex items-center justify-center">
                            {watch(name) === option && (
                                <svg className="h-4 w-4 text-[#F8B03B]" viewBox="0 0 18 18" fill="none">
                                    <path d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z" fill="#F8B03B" />
                                </svg>
                            )}
                        </div>
                        <span className="text-white font-medium uppercase text-sm tracking-wider">{option}</span>
                    </label>
                ))}
            </div>
            {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
        </div>
    );
}

function FileUpload({ label, required, fileName, onChange, inputRef }) {
    const { t } = useTranslation();
    const id = `upload-${label.replace(/\s+/g, '-')}`;
    return (
        <div className="mt-6 border-b-2 border-white/40 pb-5">
            <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">{label}</label>
            <div className="flex items-center gap-4">
                <input type="file" id={id} className="hidden" ref={inputRef} onChange={onChange} />
                <label htmlFor={id} className="cursor-pointer inline-flex items-center justify-center w-[70px] h-[34px] rounded-[10px] bg-[#FFFFFF33] text-white font-medium text-sm hover:bg-[#FFFFFF44] transition">
                    {t('common.upload')}
                </label>
                <span className="text-white/70 text-sm">{fileName || t('common.noFileChosen')}</span>
            </div>
        </div>
    );
}