// components/Form/ProjectManagerForm.jsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import ThanksModal from './ThanksModal';

export default function ProjectManagerForm({ isOpen = false, onClose }) {
    const [step, setStep] = useState(1);
    const [showThankYou, setShowThankYou] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        control,
        clearErrors,
        setValue,
        reset,
        watch,
    } = useForm({
        mode: 'onChange',
        reValidateMode: "onChange"
    });

    // File states
    const [cvFileName, setCvFileName] = useState('');
    const [videoFileName, setVideoFileName] = useState('');
    const [certificatesFileName, setCertificatesFileName] = useState('');
    const [personalPhotoFileName, setPersonalPhotoFileName] = useState('');

    const cvInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const certificatesInputRef = useRef(null);
    const personalPhotoInputRef = useRef(null);

    // Watch final step required fields
    const fullTimeAvailability = watch('fullTimeAvailability');
    const trainingCommitment = watch('trainingCommitment');

    const isStep10Complete = !!cvFileName && !!fullTimeAvailability && !!trainingCommitment;

    useEffect(() => {
        if (!isOpen) {
            setStep(1);
            setShowThankYou(false);
            setCvFileName('');
            setVideoFileName('');
            setCertificatesFileName('');
            setPersonalPhotoFileName('');
            reset();
            if (cvInputRef.current) cvInputRef.current.value = '';
            if (videoInputRef.current) videoInputRef.current.value = '';
            if (certificatesInputRef.current) certificatesInputRef.current.value = '';
            if (personalPhotoInputRef.current) personalPhotoInputRef.current.value = '';
        }
    }, [isOpen, reset]);

    const validateStep = async () => {
        const fields = getFieldsForStep(step);
        return await trigger(fields);
    };

    const nextStep = async () => {
        const isValid = await validateStep();
        if (isValid) setStep(prev => Math.min(prev + 1, 10));
    };

    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const getFieldsForStep = (currentStep) => {
        const map = {
            1: ['fullName', 'location', 'whatsapp', 'email', 'dob', 'languages', 'linkedin'],
            2: ['pmYears', 'industries', 'largeProject', 'teamSizeManaged', 'toolsUsed', 'renewableExperience', 'education'],
            3: ['teamAlignment', 'conflictResolution', 'clientCommunication', 'leadershipStyle', 'balanceSpeedSafety', 'motivationBeyondDeadlines', 'turnaroundStory'],
            4: ['profitabilityTracking', 'lessonsLearned', 'processImprovement', 'multiProjectCoordination', 'projectHealthIndicators'],
            5: ['whyAncestro', 'ancestralGridMeaning', 'countryTransformation', 'resonanceTriangle', 'threeYearGoals', 'successDefinition'],
            6: ['selfDiscipline', 'dailyHabits', 'habitToImprove', 'handlePressure', 'mindfulness', 'internalDialogue'],
            7: ['currentLimitation', 'freedomFrustration', 'workThatEnergizes', 'whyHealthPurposeOrg'],
            8: ['energyType', 'publicSpeaking', 'learningOpenness', 'structureVsAutonomy', 'bestEnvironment'],
            9: ['spiritualTeam', 'physicalWellbeing', 'personalGrowth', 'fitnessSupport', 'fitnessChallenge'],
            10: ['fullTimeAvailability', 'trainingCommitment']
        };
        return map[currentStep] || [];
    };

    const onSubmit = (data) => {
        console.log('Project Manager Form Submitted:', {
            ...data,
            cvFileName,
            videoFileName,
            certificatesFileName,
            personalPhotoFileName
        });
        setShowThankYou(true);
    };

    const handleClose = () => {
        setStep(1);
        setShowThankYou(false);
        onClose?.();
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
                                                        ANCESTRO ENERGY – PROJECT MANAGER APPLICATION
                                                    </h1>
                                                    <p className="text-lg opacity-90">
                                                        Lead the coordination that powers a continent.
                                                    </p>
                                                    <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">#LosAncestros</p>
                                                </header>
                                            </div>

                                            {/* Form Fields */}
                                            <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
                                                <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
                                                    {step === 1 && 'Personal Information'}
                                                    {step === 2 && 'Experience & Qualifications'}
                                                    {step === 3 && 'Leadership & Execution'}
                                                    {step === 4 && 'Strategy & Systems'}
                                                    {step === 5 && 'Vision & Purpose'}
                                                    {step === 6 && 'Personal Alignment & Self-Awareness'}
                                                    {step === 7 && 'Personal Alignment & Self-Awareness'}
                                                    {step === 8 && 'Personal Alignment & Self-Awareness'}
                                                    {step === 9 && 'Personal Alignment & Self-Awareness'}
                                                    {step === 10 && 'Final Steps'}
                                                </h2>

                                                <div className={`grid gap-x-12 gap-y-3 ${step === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                    {/* STEP 1 */}
                                                    {step === 1 && (
                                                        <>
                                                            <Input label="Full Name" name="fullName" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Country / City" name="location" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="WhatsApp Number" name="whatsapp" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Email Address" name="email" register={register} required type="email" errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Date of Birth" name="dob" register={register} required type="date" errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Languages Spoken" name="languages" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <div className="col-span-2">
                                                                <Input label="LinkedIn Profile (optional)" name="linkedin" register={register} errors={errors} clearErrors={clearErrors} />
                                                            </div>
                                                        </>
                                                    )}

                                                    {/* STEP 2 */}
                                                    {step === 2 && (
                                                        <>
                                                            <Input label="How many years of experience do you have in project management?" name="pmYears" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What industries have you managed projects in (solar, construction, telecom, infrastructure, etc.)?" name="industries" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Describe one large-scale project you led from start to finish. What was the outcome?" name="largeProject" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What was the largest team or number of subcontractors you have overseen?" name="teamSizeManaged" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Which tools or software do you use for scheduling, communication, and reporting (Asana, Trello, ClickUp, etc.)?" name="toolsUsed" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Have you worked with renewable-energy or technical installation teams before?" name="renewableExperience" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What is your educational background or certification (engineering, PMP, etc.)?" name="education" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <FileUpload label="Upload any relevant certificates, diplomas, or letters of reference." fileName={certificatesFileName} onChange={(e) => e.target.files[0] && setCertificatesFileName(e.target.files[0].name)} inputRef={certificatesInputRef} />
                                                        </>
                                                    )}

                                                    {/* STEP 3 */}
                                                    {step === 3 && (
                                                        <>
                                                            <Input label="How do you ensure your team stays aligned, accountable, and on schedule?" name="teamAlignment" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What’s your process for resolving conflicts or delays between departments?" name="conflictResolution" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you manage client communication during stressful situations?" name="clientCommunication" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Describe your leadership style in three words." name="leadershipStyle" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you balance speed, safety, and quality on complex projects?" name="balanceSpeedSafety" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What motivates you to see a project succeed beyond meeting deadlines?" name="motivationBeyondDeadlines" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Give an example of a time you turned a failing project into a success." name="turnaroundStory" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 4 */}
                                                    {step === 4 && (
                                                        <>
                                                            <Input label="How do you track project profitability and resource efficiency?" name="profitabilityTracking" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you document lessons learned or continuous-improvement actions?" name="lessonsLearned" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Have you ever implemented a new process that saved time or cost? Describe it." name="processImprovement" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you coordinate across multiple active projects simultaneously?" name="multiProjectCoordination" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What indicators do you monitor daily or weekly to measure project health?" name="projectHealthIndicators" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 5 */}
                                                    {step === 5 && (
                                                        <>
                                                            <Input label="Why do you want to join Ancestro Energy?" name="whyAncestro" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What does “building the Ancestral Grid” mean to you?" name="ancestralGridMeaning" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you see renewable-energy development transforming your country?" name="countryTransformation" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Ancestro connects finance, construction, and spirituality — which part of that triangle resonates most with you and why?" name="resonanceTriangle" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What are your professional and personal goals for the next 3 years?" name="threeYearGoals" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you define success as a project manager within a movement like Ancestro?" name="successDefinition" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 6 */}
                                                    {step === 6 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Lifestyle & Mindset</p>

                                                            <Input label="On a scale of 1–10, how would you rate your self-discipline?" name="selfDiscipline" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What daily habits keep you focused or grounded?" name="dailyHabits" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What’s one habit you’d like to improve this year?" name="habitToImprove" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you handle pressure, setbacks, or uncertainty?" name="handlePressure" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Do you meditate or practice mindfulness? How often?" name="mindfulness" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How would you describe your internal dialogue when challenges appear?" name="internalDialogue" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 7 */}
                                                    {step === 7 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Motivation & Purpose</p>

                                                            <Input label="What currently limits your highest potential?" name="currentLimitation" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Describe a time when you were frustrated by the systems of society and wanted to create more freedom — for yourself or others." name="freedomFrustration" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What type of work makes you feel most alive?" name="workThatEnergizes" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Why do you want to belong to a health- and purpose-driven organization like Ancestro?" name="whyHealthPurposeOrg" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 8 */}
                                                    {step === 8 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Personality & Communication</p>

                                                            <Input label="Are you more of an introvert, extrovert, or ambivert?" name="energyType" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How comfortable are you speaking to groups or presenting on stage? (1–10)" name="publicSpeaking" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How open are you to weekly learning and coaching?" name="learningOpenness" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="Do you prefer structure or autonomy when leading?" name="structureVsAutonomy" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What environment brings out your best performance?" name="bestEnvironment" register={register} required errors={errors} clearErrors={clearErrors} />
                                                        </>
                                                    )}

                                                    {/* STEP 9 */}
                                                    {step === 9 && (
                                                        <>
                                                            <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">Growth & Culture Fit</p>

                                                            <Input label="Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?" name="spiritualTeam" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="How do you maintain your physical wellbeing and energy levels during demanding projects?" name="physicalWellbeing" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="What areas of personal growth are you actively developing right now?" name="personalGrowth" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?" name="fitnessSupport" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <Input label="If you were selected for this role only after demonstrating commitment to improve your physical fitness or overall wellbeing, would you accept that challenge and guidance?" name="fitnessChallenge" register={register} required errors={errors} clearErrors={clearErrors} />
                                                            <FileUpload label="Upload a recent photo that represents who you are (optional)." fileName={personalPhotoFileName} onChange={(e) => e.target.files[0] && setPersonalPhotoFileName(e.target.files[0].name)} inputRef={personalPhotoInputRef} />
                                                        </>
                                                    )}

                                                    {/* STEP 10 - FINAL */}
                                                    {step === 10 && (
                                                        <>
                                                            <FileUpload
                                                                label="Upload CV or résumé"
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

                                                            <FileUpload
                                                                label="Upload a 1-minute video introducing yourself and describing how you lead teams. (optional)"
                                                                fileName={videoFileName}
                                                                onChange={(e) => e.target.files[0] && setVideoFileName(e.target.files[0].name)}
                                                                inputRef={videoInputRef}
                                                                accept="video/*"
                                                            />

                                                            <RadioCheckbox
                                                                label="CONFIRM FULL-TIME AVAILABILITY."
                                                                options={['YES', 'NO']}
                                                                name="fullTimeAvailability"
                                                                register={register}
                                                                required
                                                                error={errors.fullTimeAvailability}
                                                                watch={watch}
                                                                clearErrors={clearErrors}
                                                            />

                                                            <RadioCheckbox
                                                                label="Confirm willingness to participate in onboarding and training."
                                                                options={['YES', 'NO']}
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
                                                        Back
                                                    </button>
                                                )}
                                                {step < 10 ? (
                                                    <button type="button" onClick={nextStep} className="w-full py-4 cursor-pointer bg-[#F8B03B] uppercase text-black font-bold rounded-full transition text-lg">
                                                        Next
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
                                                        Submit Application
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
                                        text1="Thank you for applying to lead projects at Ancestro Energy."
                                        text2="We will review your application and contact you within 48 hours."
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

// SAME EXACT COMPONENTS AS SALES & INSTALLER FORM
function Input({ label, name, register, required, errors, type = 'text', clearErrors, ...props }) {
    return (
        <div className="relative">
            <label className="block text-[14px] font-helvetica font-bold uppercase tracking-wider mb-2 opacity-90">
                {label}
            </label>
            <input
                type={type}
                {...register(name, {
                    required: required && 'This field is required',
                    onChange: () => clearErrors(name),
                })}
                className="w-full font-helvetica font-normal bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 transition"
                {...props}
            />
            {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
        </div>
    );
}

function RadioCheckbox({ label, options, name, register, required, error, watch, clearErrors }) {
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
                                required: required && 'This field is required',
                                onChange: () => clearErrors(name),
                            })}
                            className="sr-only"
                        />
                        <div className="relative w-6 h-6 rounded-md border border-white flex items-center justify-center">
                            {watch(name) === option && (
                                <svg className="h-4 w-4 text-[#F8B03B]" viewBox="0 0 18 18" fill="none">
                                    <path d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z" fill="#F8B03B"/>
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

function FileUpload({ label, required, fileName, onChange, inputRef, accept }) {
    const id = `upload-${label.replace(/\s+/g, '-')}`;
    return (
        <div className="mt-6 border-b-2 border-white/40 pb-5">
            <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">{label}</label>
            <div className="flex items-center gap-4">
                <input type="file" id={id} className="hidden" ref={inputRef} onChange={onChange} accept={accept} />
                <label htmlFor={id} className="cursor-pointer inline-flex items-center justify-center w-[70px] h-[34px] rounded-[10px] bg-[#FFFFFF33] text-white font-medium text-sm hover:bg-[#FFFFFF44] transition">
                    Upload
                </label>
                <span className="text-white/70 text-sm">{fileName || 'No file chosen'}</span>
            </div>
        </div>
    );
}