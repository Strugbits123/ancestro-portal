// // components/Form/InstallerForm.jsx
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';
// import { useForm, useWatch } from 'react-hook-form';
// import ThanksModal from './ThanksModal';

// export default function InstallerForm({ isOpen = false, onClose }) {
//     const [step, setStep] = useState(1);
//     const [showThankYou, setShowThankYou] = useState(false);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         trigger,
//         control,
//         clearErrors,
//         setValue,
//         reset,
//         watch,
//     } = useForm({
//         mode: 'onChange',
//         reValidateMode: "onChange"
//     });

//     // File states
//     const [businessRegFile, setBusinessRegFile] = useState('');
//     const [certificationsFile, setCertificationsFile] = useState('');
//     const [pastProjectsFile, setPastProjectsFile] = useState('');
//     const [insuranceFile, setInsuranceFile] = useState('');
//     const [companyDocsFile, setCompanyDocsFile] = useState('');
//     const [cvFile, setCvFile] = useState('');
//     const [videoFile, setVideoFile] = useState('');
//     const [personalPhotoFile, setPersonalPhotoFile] = useState('');

//     const refs = {
//         businessReg: useRef(null),
//         certifications: useRef(null),
//         pastProjects: useRef(null),
//         insurance: useRef(null),
//         companyDocs: useRef(null),
//         cv: useRef(null),
//         video: useRef(null),
//         personalPhoto: useRef(null),
//     };

//     useEffect(() => {
//         if (!isOpen) {
//             setStep(1);
//             setShowThankYou(false);
//             Object.values(refs).forEach(r => r.current && (r.current.value = ''));
//             setBusinessRegFile(''); setCertificationsFile(''); setPastProjectsFile(''); setInsuranceFile('');
//             setCompanyDocsFile(''); setCvFile(''); setVideoFile(''); setPersonalPhotoFile('');
//             reset();
//         }
//     }, [isOpen, reset]);

//     const totalSteps = 11;

//     const validateStep = async () => {
//         const fields = getFieldsForStep(step);
//         return await trigger(fields);
//     };

//     const nextStep = async () => {
//         const isValid = await validateStep();
//         if (isValid) setStep(prev => Math.min(prev + 1, totalSteps));
//     };

//     const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

//     const getFieldsForStep = (currentStep) => {
//         const map = {
//             1: ['companyName', 'location', 'website', 'whatsapp', 'email', 'contactPerson', 'yearsInOperation'],
//             2: ['systemTypes', 'totalProjects', 'avgSystemSize', 'teamSize', 'certifiedSupervisor', 'equipment', 'brands', 'pastWork', 'serviceRegions', 'regionalTravel'],
//             3: ['references', 'safetyTraining'],
//             4: ['workflow', 'softwareTools', 'qualityVerification', 'clientCommunication', 'fieldChallenges', 'installationTime', 'maintenanceServices', 'teamProfessionalism'],
//             5: ['energyFreedom', 'leadershipStyle', 'teamMorale', 'motivation', 'goodVsGreat', 'philanthropy', 'brandRepresentation'],
//             6: ['whyAncestro', 'latamNetwork', 'futureVision', 'monthlyCapacity', 'partnershipType', 'ancestroAcademy'],
//             7: ['selfDiscipline', 'dailyHabits', 'habitToImprove', 'stressHandling', 'mindfulness', 'selfTalk'],
//             8: ['craftImprovement', 'frustrationMoment1', 'frustrationMoment2', 'missionAlignment'],
//             9: ['energyType', 'leadershipComfort', 'learningOpenness', 'communicationPref', 'bestEnvironment'],
//             10: ['teamValues', 'physicalWellbeing', 'personalGrowth', 'fitnessSupport', 'fitnessChallenge'],
//             11: ['availabilityConfirmation']
//         };
//         return map[currentStep] || [];
//     };

//     const onSubmit = (data) => {
//         console.log('Installer Form Submitted:', {
//             ...data,
//             files: { businessRegFile, certificationsFile, pastProjectsFile, insuranceFile, companyDocsFile, cvFile, videoFile, personalPhotoFile }
//         });
//         setShowThankYou(true);
//     };

//     const handleClose = () => {
//         setStep(1);
//         setShowThankYou(false);
//         onClose?.();
//     };

//     // Step 11 logic
//     const availabilityConfirmation = watch('availabilityConfirmation');
//     const hasAtLeastOneDoc = !!companyDocsFile || !!cvFile;
//     const isStep11Complete = hasAtLeastOneDoc && !!availabilityConfirmation;

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
//                                                         Ancestro Energy – Installer Application
//                                                     </h1>
//                                                     <p className="text-lg opacity-90">
//                                                         Join the builders powering Latin America’s renewable revolution.
//                                                     </p>
//                                                     <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">#LosAncestros</p>
//                                                 </header>
//                                             </div>

//                                             {/* Form Fields */}
//                                             <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
//                                                 <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
//                                                     {step === 1 && 'Company & Contact Information'}
//                                                     {step === 2 && 'Experience & Capability'}
//                                                     {step === 3 && 'Certifications & References'}
//                                                     {step === 4 && 'Workflow & Operations'}
//                                                     {step === 5 && 'Philosophy & Team Culture'}
//                                                     {step === 6 && 'Future Vision'}
//                                                     {step === 7 && 'Personal Alignment & Self-Awareness'}
//                                                     {step === 8 && 'What drives you to keep improving your craft?'}
//                                                     {step === 9 && 'Personal Alignment & Self-Awareness'}
//                                                     {step === 10 && 'Personal Alignment & Self-Awareness'}
//                                                     {step === 11 && 'Final Steps'}
//                                                 </h2>

//                                                 <div className={`grid gap-x-12 gap-y-3 ${step === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
//                                                     {/* STEP 1 */}
//                                                     {step === 1 && (
//                                                         <>
//                                                             <Input label="Full Name or Company Name" name="companyName" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Country / City / Region of Operation" name="location" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <div className="col-span-2">
//                                                                 <FileUpload label="Business Registration (upload legal certificate if applicable)" required fileName={businessRegFile} onChange={(e) => { const f = e.target.files[0]; if (f) { setBusinessRegFile(f.name); setValue('businessReg', f); } }} inputRef={refs.businessReg} />
//                                                             </div>
//                                                             <Input label="Company Website or Social Media (if available)" name="website" register={register} errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="WhatsApp Number" name="whatsapp" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Email Address" name="email" register={register} required type="email" errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Primary Contact Person" name="contactPerson" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <div className="col-span-2">
//                                                                 <Input label="Years in Operation" name="yearsInOperation" register={register} required type="number" errors={errors} clearErrors={clearErrors} />
//                                                             </div>
//                                                         </>
//                                                     )}

//                                                     {/* STEP 2 */}
//                                                     {step === 2 && (
//                                                         <>
//                                                             <Input label="What types of renewable systems have you installed? (Solar PV, battery storage, EV chargers, hybrid systems, etc.)" name="systemTypes" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How many total projects have you completed to date?" name="totalProjects" register={register} required type="number" errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What is your average system size (kW) for installations?" name="avgSystemSize" register={register} required type="number" errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How many technicians or workers are on your team?" name="teamSize" register={register} required type="number" errors={errors} clearErrors={clearErrors} />
//                                                             <RadioCheckbox label="Do you have a dedicated electrical engineer or certified supervisor on staff?" options={['YES', 'NO']} name="certifiedSupervisor" register={register} required control={control} clearErrors={clearErrors} />
//                                                             <Input label="What tools, vehicles, and safety equipment do you currently own?" name="equipment" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What inverter, panel, and battery brands are you familiar with?" name="brands" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Have you previously worked under a larger EPC, or directly with clients?" name="pastWork" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Which regions or cities can you serve within your country?" name="serviceRegions" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <RadioCheckbox label="Are you available to travel or expand regionally under Ancestro’s network?" options={['YES', 'NO']} name="regionalTravel" register={register} required control={control} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 3 */}
//                                                     {step === 3 && (
//                                                         <>
//                                                             <FileUpload label="Upload all relevant certifications (electrical, solar, battery, EV, or safety)." required fileName={certificationsFile} onChange={(e) => e.target.files[0] && setCertificationsFile(e.target.files[0].name)} inputRef={refs.certifications} />
//                                                             <FileUpload label="Upload photos of 3–5 past projects (roof, ground mount, or EV)." required fileName={pastProjectsFile} onChange={(e) => e.target.files[0] && setPastProjectsFile(e.target.files[0].name)} inputRef={refs.pastProjects} />
//                                                             <Input label="Provide two professional references (clients or companies). Include name, phone, and email." name="references" register={register} required errors={errors} clearErrors={clearErrors} placeholder="1. Juan Pérez – +57 300... | 2. María Gómez – +51..." />
//                                                             <FileUpload label="Do you have liability insurance, installation insurance, or worker protection coverage? (upload proof)" fileName={insuranceFile} onChange={(e) => e.target.files[0] && setInsuranceFile(e.target.files[0].name)} inputRef={refs.insurance} />
//                                                             <RadioCheckbox label="Are your installers trained in fall protection, electrical safety, and first aid?" options={['YES', 'NO']} name="safetyTraining" register={register} required control={control} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 4 */}
//                                                     {step === 4 && (
//                                                         <>
//                                                             <Input label="Describe your typical workflow from receiving project documents to completion." name="workflow" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What software or tools do you use for scheduling, design, or reporting?" name="softwareTools" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How do you verify that installations meet quality and safety standards?" name="qualityVerification" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What is your process for communicating updates to clients or project managers?" name="clientCommunication" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What challenges do you face most often in the field, and how do you solve them?" name="fieldChallenges" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What’s your average installation time for a 10 kW system? For a 100 kW system?" name="installationTime" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Do you offer ongoing maintenance or monitoring services?" name="maintenanceServices" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How do you ensure your team stays professional and presentable on-site?" name="teamProfessionalism" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 5 */}
//                                                     {step === 5 && (
//                                                         <>
//                                                             <Input label="What does “building energy freedom” mean to you?" name="energyFreedom" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Describe your leadership style when managing your team." name="leadershipStyle" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How do you keep morale and focus high during long or difficult installations?" name="teamMorale" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What motivates you to continue working in this field?" name="motivation" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What do you believe separates a good installer from a great one?" name="goodVsGreat" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Ancestro’s projects combine technology and philanthropy. How do you feel about installing systems that also serve low-income or indigenous communities?" name="philanthropy" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Are you comfortable representing Ancestro’s brand standards and values on every site?" name="brandRepresentation" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 6 */}
//                                                     {step === 6 && (
//                                                         <>
//                                                             <Input label="Why do you want to work with Ancestro Energy?" name="whyAncestro" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What excites you most about joining a LATAM-wide renewable network?" name="latamNetwork" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Where do you see your business or career 3 years from now?" name="futureVision" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How many projects per month could your team realistically complete?" name="monthlyCapacity" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What type of partnership would you prefer: subcontractor, exclusive installer, or regional EPC partner?" name="partnershipType" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Are you interested in future training or certification under the Ancestro Academy program?" name="ancestroAcademy" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 7 */}
//                                                     {step === 7 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Lifestyle & Mindset</p>

//                                                             <Input label="On a scale of 1–10, how would you rate your self-discipline?" name="selfDiscipline" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What daily habits keep you focused or grounded?" name="dailyHabits" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What’s one habit you’d like to improve this year?" name="habitToImprove" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How do you handle stress or setbacks on-site?" name="stressHandling" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Do you meditate, exercise, or have a mindfulness practice? How often?" name="mindfulness" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How would you describe your self-talk when things get difficult?" name="selfTalk" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 8 */}
//                                                     {step === 8 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Motivation & Purpose</p>

//                                                             <Input label="What drives you to keep improving your craft?" name="craftImprovement" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Describe a moment when you felt frustrated by the limits of the system and wanted to create more freedom for yourself or your community." name="frustrationMoment1" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Describe a moment when you felt frustrated by the limits of the system and wanted to create more freedom for yourself or your community." name="frustrationMoment2" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="Why do you want to be part of a mission-driven, health-conscious company like Ancestro?" name="missionAlignment" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 9 */}
//                                                     {step === 9 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Personality & Communication</p>

//                                                             <Input label="How would you describe your natural energy: introvert, extrovert, or ambivert?" name="energyType" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How comfortable are you training others or leading a team? (1–10)" name="leadershipComfort" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How open are you to learning new methods or technologies each month?" name="learningOpenness" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How do you prefer to communicate with your project managers — voice notes, calls, or written reports?" name="communicationPref" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What type of environment helps you perform at your best?" name="bestEnvironment" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 10 */}
//                                                     {step === 10 && (
//                                                         <>
//                                                             <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Growth & Culture Fit</p>

//                                                             <Input label="Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?" name="teamValues" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="How do you maintain your physical wellbeing and energy levels while working long days outdoors?" name="physicalWellbeing" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="What areas of personal growth are you actively working on right now?" name="personalGrowth" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?" name="fitnessSupport" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <Input label="If you were selected for this role only after demonstrating a commitment to improve your physical fitness or overall wellbeing, would you be open to that challenge and to receiving support from our team to achieve it?" name="fitnessChallenge" register={register} required errors={errors} clearErrors={clearErrors} />
//                                                             <FileUpload label="Upload a recent photo that represents who you are (optional)." fileName={personalPhotoFile} onChange={(e) => e.target.files[0] && setPersonalPhotoFile(e.target.files[0].name)} inputRef={refs.personalPhoto} />
//                                                         </>
//                                                     )}

//                                                     {/* STEP 11 */}
//                                                     {step === 11 && (
//                                                         <>

//                                                             <FileUpload label="Upload your company profile, ID, or registration documents." required fileName={companyDocsFile} onChange={(e) => { const f = e.target.files[0]; if (f) { setCompanyDocsFile(f.name); setValue('companyDocsFile', f); } }} inputRef={refs.companyDocs} />
//                                                             <FileUpload label="Upload your CV or résumé (for individuals)." fileName={cvFile} onChange={(e) => { const f = e.target.files[0]; if (f) { setCvFile(f.name); setValue('cvFile', f); } }} inputRef={refs.cv} />
//                                                             <FileUpload label="Upload a 1-minute video introducing yourself or your team and why you want to join Ancestro. (Optional)" fileName={videoFile} onChange={(e) => e.target.files[0] && setVideoFile(e.target.files[0].name)} inputRef={refs.video} accept="video/*" />
//                                                             <Input label="Confirm availability for onboarding and field evaluation." name="availabilityConfirmation" register={register} required={hasAtLeastOneDoc} errors={errors} clearErrors={clearErrors} placeholder="Yes, I am available and committed" />
//                                                         </>
//                                                     )}
//                                                 </div>
//                                             </div>

//                                             {/* Navigation Buttons */}
//                                             <div className="flex flex-col gap-4">
//                                                 {step > 1 && (
//                                                     <button type="button" onClick={prevStep} className="w-full cursor-pointer py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium">
//                                                         Back
//                                                     </button>
//                                                 )}
//                                                 {step < 11 ? (
//                                                     <button type="button" onClick={nextStep} className="w-full py-4 cursor-pointer bg-[#F8B03B] uppercase text-black font-bold rounded-full transition text-lg">
//                                                         Next
//                                                     </button>
//                                                 ) : (
//                                                     <button
//                                                         type="submit"
//                                                         disabled={!isStep11Complete}
//                                                         className={`w-full py-4 rounded-full transition text-lg font-bold uppercase
//                                                             ${isStep11Complete
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

//             {/* Thank You Modal */}
//             <Transition appear show={showThankYou} as={Fragment}>
//                 <Dialog as="div" className="relative z-50" onClose={handleClose}>
//                     <Transition.Child as={Fragment}>
//                         <div className="fixed inset-0 bg-black/80" />
//                     </Transition.Child>
//                     <div className="fixed inset-0 overflow-y-auto">
//                         <div className="flex min-h-full items-center justify-center p-4">
//                             <Transition.Child as={Fragment}>
//                                 <Dialog.Panel style={{
//                                     width: '800px', height: '306px', maxWidth: '95vw', background: '#FFFFFF1A',
//                                     border: '1px solid #F8B03B', borderRadius: '20px', padding: '50px',
//                                     backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
//                                     boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.5)', display: 'flex',
//                                     flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
//                                     gap: '30px', textAlign: 'center', color: 'white', fontFamily: 'Lato, sans-serif',
//                                 }}>
//                                     <ThanksModal
//                                         text1="Thank you for applying to become an Ancestro Installer Partner."
//                                         text2="We will review your submission and contact you within 48 hours."
//                                     />
//                                 </Dialog.Panel>
//                             </Transition.Child>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition>
//         </>
//     );
// }

// // EXACT SAME COMPONENTS AS SALES FORM
// function Input({ label, name, register, required, errors, type = 'text', clearErrors, ...props }) {
//     return (
//         <div className="relative">
//             <label className="block text-[14px] font-helvetica font-bold uppercase tracking-wider mb-2 opacity-90">
//                 {label}
//             </label>
//             <input
//                 type={type}
//                 {...register(name, {
//                     required: required && 'This field is required',
//                     onChange: () => clearErrors(name),
//                 })}
//                 className="w-full font-helvetica font-normal bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 transition"
//                 {...props}
//             />
//             {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
//         </div>
//     );
// }

// function RadioCheckbox({ label, options, name, register, required, control, clearErrors }) {
//     const value = useWatch({ control, name });
//     const error = control._formState.errors[name];

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
//                                 required: required && 'This field is required',
//                                 onChange: () => clearErrors(name),
//                             })}
//                             className="sr-only"
//                         />
//                         <div className="relative w-6 h-6 rounded-md border border-white flex items-center justify-center">
//                             {value === option && (
//                                 <svg className="h-4 w-4 text-[#F8B03B]" viewBox="0 0 18 18" fill="none">
//                                     <path d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z" fill="#F8B03B"/>
//                                 </svg>
//                             )}
//                         </div>
//                         <span className="text-white font-medium uppercase text-sm tracking-wider">{option}</span>
//                     </label>
//                 ))}
//             </div>
//             {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
//         </div>
//     );
// }

// function FileUpload({ label, required, fileName, onChange, inputRef, accept }) {
//     const id = `upload-${label.replace(/\s+/g, '-')}`;
//     return (
//         <div className="mt-6 border-b-2 border-white/40 pb-5">
//             <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">{label}</label>
//             <div className="flex items-center gap-4">
//                 <input type="file" id={id} className="hidden" ref={inputRef} onChange={onChange} accept={accept} />
//                 <label htmlFor={id} className="cursor-pointer inline-flex items-center justify-center w-[70px] h-[34px] rounded-[10px] bg-[#FFFFFF33] text-white font-medium text-sm hover:bg-[#FFFFFF44] transition">
//                     Upload
//                 </label>
//                 <span className="text-white/70 text-sm">{fileName || 'No file chosen'}</span>
//             </div>
//         </div>
//     );
// }

import { installerConfig } from "./installerConfig";
import FormBuilder from "../FormBuilder"; // a generalized form component

export default function InstallerModal({ isOpen, onClose }) {
  return (
    <FormBuilder
      isOpen={isOpen}
      onClose={onClose}
      config={installerConfig} // pass the config here
    />
  );
}
