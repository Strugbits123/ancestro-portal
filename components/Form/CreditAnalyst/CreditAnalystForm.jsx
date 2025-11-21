// // "use client";

// // import React, { useState, useRef, useEffect } from "react";
// // import { Dialog, Transition } from "@headlessui/react";
// // import { Fragment } from "react";
// // import { useForm, useWatch } from "react-hook-form";
// // import ThanksModal from "./ThanksModal";
// // import { useTranslation } from "react-i18next";

// // export default function CreditAnalystForm({ isOpen = false, onClose }) {
// //   const [step, setStep] = useState(1);
// //   const { t, i18n } = useTranslation();
// //   const [showThankYou, setShowThankYou] = useState(false);
// //   const [hasTriedNext, setHasTriedNext] = useState(false);

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     trigger,
// //     control,
// //     clearErrors,
// //     setValue,
// //     reset,
// //     watch,
// //   } = useForm({
// //     mode: "onChange",
// //     reValidateMode: "onSubmit",
// //   });

// //   // File states
// //   const [certificationsFile, setCertificationsFile] = useState("");
// //   const [cvFileName, setCvFileName] = useState("");
// //   const [videoFileName, setVideoFileName] = useState("");
// //   const [personalPhotoFile, setPersonalPhotoFile] = useState("");
// //   const [finalCvFileName, setFinalCvFileName] = useState("");

// //   const refs = {
// //     certifications: useRef(null),
// //     cv: useRef(null),
// //     video: useRef(null),
// //     personalPhoto: useRef(null),
// //     finalCv: useRef(null),
// //   };

// //   // Final step validation
// //   const fullTimeAvailability = watch("fullTimeAvailability");
// //   const trainingCommitment = watch("trainingCommitment");
// //   const hasCv = !!cvFileName || !!finalCvFileName;
// //   const isStep11Complete = hasCv && fullTimeAvailability && trainingCommitment;

// //   useEffect(() => {
// //     if (!isOpen) {
// //       setStep(1);
// //       setShowThankYou(false);
// //       Object.values(refs).forEach((r) => r.current && (r.current.value = ""));
// //       setCertificationsFile("");
// //       setCvFileName("");
// //       setVideoFileName("");
// //       setPersonalPhotoFile("");
// //       setFinalCvFileName("");
// //       reset();
// //     }
// //   }, [isOpen, reset]);

// //   useEffect(() => {
// //     if (hasTriedNext) {
// //       trigger(getFieldsForStep(step));
// //     }
// //   }, [i18n.language]);

// //   const validateStep = async () => {
// //     const fields = getFieldsForStep(step);
// //     return await trigger(fields);
// //   };

// //   const nextStep = async () => {
// //     setHasTriedNext(true);
// //     const isValid = await validateStep();
// //     if (isValid) setStep((prev) => Math.min(prev + 1, 11));
// //   };

// //   const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

// //   const getFieldsForStep = (currentStep) => {
// //     const map = {
// //       1: [
// //         "fullName",
// //         "location",
// //         "whatsapp",
// //         "email",
// //         "dob",
// //         "languages",
// //         "linkedin",
// //       ],
// //       2: [
// //         "education",
// //         "creditYears",
// //         "industriesAnalyzed",
// //         "greenLendingExperience",
// //       ],
// //       3: [
// //         "creditProcess",
// //         "keyMetrics",
// //         "riskVsOpportunity",
// //         "softwareUsed",
// //         "fraudDetection",
// //         "judgmentUnderPressure",
// //         "documentationProcess",
// //       ],
// //       4: [
// //         "profitabilityTracking",
// //         "lessonsLearned",
// //         "processImprovement",
// //         "multiProjectCoordination",
// //         "healthIndicators",
// //       ],
// //       5: [
// //         "financialIntegrity",
// //         "fairnessVsProtection",
// //         "pressureStory",
// //         "latamChallenge",
// //         "preventedLoss",
// //         "personalValues",
// //       ],
// //       6: [
// //         "whyAncestro",
// //         "ancestralGrid",
// //         "economicTransformation",
// //         "financeTechSpirit",
// //         "missionContribution",
// //         "careerGoals",
// //         "startDate",
// //       ],
// //       7: [
// //         "selfDiscipline",
// //         "dailyHabits",
// //         "habitToImprove",
// //         "stressHandling",
// //         "mindfulness",
// //         "selfTalk",
// //       ],
// //       8: [
// //         "currentLimitation",
// //         "financialFreedomFrustration",
// //         "fulfillingWork",
// //         "whyConsciousFinance",
// //       ],
// //       9: [
// //         "energyType",
// //         "presentationComfort",
// //         "criticismResponse",
// //         "structureVsAutonomy",
// //         "bestEnvironment",
// //       ],
// //       10: [
// //         "spiritualTeamValue",
// //         "physicalWellbeing",
// //         "personalGrowth",
// //         "fitnessSupport",
// //         "fitnessChallenge",
// //       ],
// //       11: ["fullTimeAvailability", "trainingCommitment"],
// //     };
// //     return map[currentStep] || [];
// //   };

// //   const onSubmit = (data) => {
// //     console.log("Credit Analyst Form Submitted:", {
// //       ...data,
// //       files: {
// //         certificationsFile,
// //         cvFileName,
// //         videoFileName,
// //         personalPhotoFile,
// //         finalCvFileName,
// //       },
// //     });
// //     setShowThankYou(true);
// //   };

// //   const handleClose = () => {
// //     setStep(1);
// //     setShowThankYou(false);
// //     onClose?.();
// //   };

// //   return (
// //     <>
// //       <Transition appear show={isOpen} as={Fragment}>
// //         <Dialog as="div" className="relative z-50" onClose={handleClose}>
// //           <Transition.Child as={Fragment}>
// //             <div className="fixed inset-0 bg-black/80" />
// //           </Transition.Child>

// //           <div className="fixed inset-0 overflow-y-auto">
// //             <div className="flex min-h-full items-center justify-center p-4">
// //               <Transition.Child as={Fragment}>
// //                 <Dialog.Panel
// //                   className="w-full max-w-4xl rounded-2xl overflow-hidden font-lato"
// //                   style={{
// //                     width: "823px",
// //                     maxWidth: "95vw",
// //                     background: "#FFFFFF1A",
// //                     border: "1px solid rgba(255, 255, 255, 0.10)",
// //                     backdropFilter: "blur(20px)",
// //                     WebkitBackdropFilter: "blur(20px)",
// //                     boxShadow: "0px 4px 4px 0px #000000CC",
// //                   }}
// //                 >
// //                   <form onSubmit={handleSubmit(onSubmit)}>
// //                     <div className="flex flex-col p-5 sm:p-12 text-white">
// //                       {/* Header */}
// //                       <div className="w-full flex justify-center items-center">
// //                         <header className="text-center mb-10 w-full">
// //                           <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
// //                             {t("forms.creditAnalyst.title")}
// //                           </h1>
// //                           <p className="text-lg opacity-90">
// //                             {t("forms.creditAnalyst.subtitle")}
// //                           </p>
// //                           <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                             {t("forms.creditAnalyst.hashtag")}
// //                           </p>
// //                         </header>
// //                       </div>

// //                       {/* Form Fields */}
// //                       <div className="mb-10 flex flex-col border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
// //                         <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
// //                           {t(`forms.creditAnalyst.steps.step${step}`)}
// //                         </h2>

// //                         <div
// //                           className={`grid gap-x-12 gap-y-3 ${
// //                             step === 1 ? "grid-cols-2" : "grid-cols-1"
// //                           }`}
// //                         >
// //                           {/* STEP 1 */}
// //                           {step === 1 && (
// //                             <>
// //                               <Input
// //                                 label={t("forms.creditAnalyst.fields.fullName")}
// //                                 name="fullName"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t("forms.creditAnalyst.fields.location")}
// //                                 name="location"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t("forms.creditAnalyst.fields.whatsapp")}
// //                                 name="whatsapp"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t("forms.creditAnalyst.fields.email")}
// //                                 name="email"
// //                                 register={register}
// //                                 required
// //                                 type="email"
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t("forms.creditAnalyst.fields.dob")}
// //                                 name="dob"
// //                                 register={register}
// //                                 required
// //                                 type="date"
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.languages"
// //                                 )}
// //                                 name="languages"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <div className="col-span-2">
// //                                 <Input
// //                                   label={t(
// //                                     "forms.creditAnalyst.fields.linkedin"
// //                                   )}
// //                                   name="linkedin"
// //                                   register={register}
// //                                   errors={errors}
// //                                   clearErrors={clearErrors}
// //                                 />
// //                               </div>
// //                             </>
// //                           )}

// //                           {/* STEP 2 */}
// //                           {step === 2 && (
// //                             <>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.education"
// //                                 )}
// //                                 name="education"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <FileUpload
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.certifications"
// //                                 )}
// //                                 fileName={certificationsFile}
// //                                 onChange={(e) =>
// //                                   e.target.files[0] &&
// //                                   setCertificationsFile(e.target.files[0].name)
// //                                 }
// //                                 inputRef={refs.certifications}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.creditYears"
// //                                 )}
// //                                 name="creditYears"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.industriesAnalyzed"
// //                                 )}
// //                                 name="industriesAnalyzed"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.greenLendingExperience"
// //                                 )}
// //                                 name="greenLendingExperience"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <FileUpload
// //                                 label={t("forms.creditAnalyst.fields.uploadCV")}
// //                                 required
// //                                 fileName={cvFileName}
// //                                 onChange={(e) => {
// //                                   const f = e.target.files[0];
// //                                   if (f) {
// //                                     setCvFileName(f.name);
// //                                     setValue("cvFile", f);
// //                                   }
// //                                 }}
// //                                 inputRef={refs.cv}
// //                               />
// //                             </>
// //                           )}

// //                           {/* STEP 3 to STEP 10 – all labels translated */}
// //                           {step === 3 && (
// //                             <>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.creditProcess"
// //                                 )}
// //                                 name="creditProcess"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.keyMetrics"
// //                                 )}
// //                                 name="keyMetrics"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.riskVsOpportunity"
// //                                 )}
// //                                 name="riskVsOpportunity"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.softwareUsed"
// //                                 )}
// //                                 name="softwareUsed"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.fraudDetection"
// //                                 )}
// //                                 name="fraudDetection"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.judgmentUnderPressure"
// //                                 )}
// //                                 name="judgmentUnderPressure"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.documentationProcess"
// //                                 )}
// //                                 name="documentationProcess"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}

// //                           {step === 4 && (
// //                             <>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.profitabilityTracking"
// //                                 )}
// //                                 name="profitabilityTracking"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.lessonsLearned"
// //                                 )}
// //                                 name="lessonsLearned"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.processImprovement"
// //                                 )}
// //                                 name="processImprovement"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.multiProjectCoordination"
// //                                 )}
// //                                 name="multiProjectCoordination"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.healthIndicators"
// //                                 )}
// //                                 name="healthIndicators"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}

// //                           {step === 5 && (
// //                             <>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.financialIntegrity"
// //                                 )}
// //                                 name="financialIntegrity"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.fairnessVsProtection"
// //                                 )}
// //                                 name="fairnessVsProtection"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.pressureStory"
// //                                 )}
// //                                 name="pressureStory"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.latamChallenge"
// //                                 )}
// //                                 name="latamChallenge"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.preventedLoss"
// //                                 )}
// //                                 name="preventedLoss"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.personalValues"
// //                                 )}
// //                                 name="personalValues"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}

// //                           {step === 6 && (
// //                             <>
// //                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                 {t(
// //                                   "forms.creditAnalyst.sections.lifestyleMindset"
// //                                 )}
// //                               </p>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.whyAncestro"
// //                                 )}
// //                                 name="whyAncestro"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.ancestralGrid"
// //                                 )}
// //                                 name="ancestralGrid"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.economicTransformation"
// //                                 )}
// //                                 name="economicTransformation"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.financeTechSpirit"
// //                                 )}
// //                                 name="financeTechSpirit"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.missionContribution"
// //                                 )}
// //                                 name="missionContribution"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.careerGoals"
// //                                 )}
// //                                 name="careerGoals"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.startDate"
// //                                 )}
// //                                 name="startDate"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}

// //                           {step === 7 && (
// //                             <>
// //                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                 {t(
// //                                   "forms.creditAnalyst.sections.motivationPurpose"
// //                                 )}
// //                               </p>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.selfDiscipline"
// //                                 )}
// //                                 name="selfDiscipline"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.dailyHabits"
// //                                 )}
// //                                 name="dailyHabits"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.habitToImprove"
// //                                 )}
// //                                 name="habitToImprove"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.stressHandling"
// //                                 )}
// //                                 name="stressHandling"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.mindfulness"
// //                                 )}
// //                                 name="mindfulness"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t("forms.creditAnalyst.fields.selfTalk")}
// //                                 name="selfTalk"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}

// //                           {step === 8 && (
// //                             <>
// //                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                 {t(
// //                                   "forms.creditAnalyst.sections.personalityComm"
// //                                 )}
// //                               </p>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.currentLimitation"
// //                                 )}
// //                                 name="currentLimitation"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.financialFreedomFrustration"
// //                                 )}
// //                                 name="financialFreedomFrustration"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.fulfillingWork"
// //                                 )}
// //                                 name="fulfillingWork"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.whyConsciousFinance"
// //                                 )}
// //                                 name="whyConsciousFinance"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}

// //                           {step === 9 && (
// //                             <>
// //                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                 {t(
// //                                   "forms.creditAnalyst.sections.growthCulture"
// //                                 )}
// //                               </p>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.energyType"
// //                                 )}
// //                                 name="energyType"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.presentationComfort"
// //                                 )}
// //                                 name="presentationComfort"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.criticismResponse"
// //                                 )}
// //                                 name="criticismResponse"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.structureVsAutonomy"
// //                                 )}
// //                                 name="structureVsAutonomy"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.bestEnvironment"
// //                                 )}
// //                                 name="bestEnvironment"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}

// //                           {step === 10 && (
// //                             <>
// //                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
// //                                 {t(
// //                                   "forms.creditAnalyst.sections.growthCulture"
// //                                 )}
// //                               </p>
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.spiritualTeamValue"
// //                                 )}
// //                                 name="spiritualTeamValue"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.physicalWellbeing"
// //                                 )}
// //                                 name="physicalWellbeing"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.personalGrowth"
// //                                 )}
// //                                 name="personalGrowth"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.fitnessSupport"
// //                                 )}
// //                                 name="fitnessSupport"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <Input
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.fitnessChallenge"
// //                                 )}
// //                                 name="fitnessChallenge"
// //                                 register={register}
// //                                 required
// //                                 errors={errors}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <FileUpload
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.personalPhoto"
// //                                 )}
// //                                 fileName={personalPhotoFile}
// //                                 onChange={(e) =>
// //                                   e.target.files[0] &&
// //                                   setPersonalPhotoFile(e.target.files[0].name)
// //                                 }
// //                                 inputRef={refs.personalPhoto}
// //                               />
// //                             </>
// //                           )}

// //                           {/* STEP 11 */}
// //                           {step === 11 && (
// //                             <>
// //                               <FileUpload
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.finalUploadCV"
// //                                 )}
// //                                 required
// //                                 fileName={finalCvFileName}
// //                                 onChange={(e) => {
// //                                   const f = e.target.files[0];
// //                                   if (f) {
// //                                     setFinalCvFileName(f.name);
// //                                     setValue("finalCvFile", f);
// //                                   }
// //                                 }}
// //                                 inputRef={refs.finalCv}
// //                               />
// //                               <FileUpload
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.uploadVideo"
// //                                 )}
// //                                 fileName={videoFileName}
// //                                 onChange={(e) =>
// //                                   e.target.files[0] &&
// //                                   setVideoFileName(e.target.files[0].name)
// //                                 }
// //                                 inputRef={refs.video}
// //                                 accept="video/*"
// //                               />
// //                               <RadioCheckbox
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.fullTimeAvailability"
// //                                 )}
// //                                 options={[t("common.yes"), t("common.no")]}
// //                                 name="fullTimeAvailability"
// //                                 register={register}
// //                                 required
// //                                 control={control}
// //                                 clearErrors={clearErrors}
// //                               />
// //                               <RadioCheckbox
// //                                 label={t(
// //                                   "forms.creditAnalyst.fields.trainingCommitment"
// //                                 )}
// //                                 options={[t("common.yes"), t("common.no")]}
// //                                 name="trainingCommitment"
// //                                 register={register}
// //                                 required
// //                                 control={control}
// //                                 clearErrors={clearErrors}
// //                               />
// //                             </>
// //                           )}
// //                         </div>
// //                       </div>

// //                       {/* Navigation */}
// //                       <div className="flex flex-col gap-4">
// //                         {step > 1 && (
// //                           <button
// //                             type="button"
// //                             onClick={prevStep}
// //                             className="w-full cursor-pointer py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium"
// //                           >
// //                             {t("common.back")}
// //                           </button>
// //                         )}
// //                         {step < 11 ? (
// //                           <button
// //                             type="button"
// //                             onClick={nextStep}
// //                             className="w-full py-4 cursor-pointer bg-[#F8B03B] uppercase text-black font-bold rounded-full transition text-lg"
// //                           >
// //                             {t("common.next")}
// //                           </button>
// //                         ) : (
// //                           <button
// //                             type="submit"
// //                             disabled={!isStep11Complete}
// //                             className={`w-full py-4 rounded-full transition text-lg font-bold uppercase ${
// //                               isStep11Complete
// //                                 ? "bg-[#F8B03B] text-black cursor-pointer hover:bg-[#f9c65b]"
// //                                 : "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"
// //                             }`}
// //                           >
// //                             {t("forms.creditAnalyst.submitButton")}
// //                           </button>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </form>
// //                 </Dialog.Panel>
// //               </Transition.Child>
// //             </div>
// //           </div>
// //         </Dialog>
// //       </Transition>

// //       {/* Thank You Modal */}
// //       <Transition appear show={showThankYou} as={Fragment}>
// //         <Dialog as="div" className="relative z-50" onClose={handleClose}>
// //           <Transition.Child as={Fragment}>
// //             <div className="fixed inset-0 bg-black/80" />
// //           </Transition.Child>
// //           <div className="fixed inset-0 overflow-y-auto">
// //             <div className="flex min-h-full items-center justify-center p-4">
// //               <Transition.Child as={Fragment}>
// //                 <Dialog.Panel
// //                   style={{
// //                     width: "800px",
// //                     height: "306px",
// //                     maxWidth: "95vw",
// //                     background: "#FFFFFF1A",
// //                     border: "1px solid #F8B03B",
// //                     borderRadius: "20px",
// //                     padding: "50px",
// //                     backdropFilter: "blur(20px)",
// //                     WebkitBackdropFilter: "blur(20px)",
// //                     boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     justifyContent: "center",
// //                     alignItems: "center",
// //                     gap: "30px",
// //                     textAlign: "center",
// //                     color: "white",
// //                     fontFamily: "Lato, sans-serif",
// //                   }}
// //                 >
// //                   <ThanksModal
// //                     text1={t("forms.creditAnalyst.thanks.text1")}
// //                     text2={t("forms.creditAnalyst.thanks.text2")}
// //                   />
// //                 </Dialog.Panel>
// //               </Transition.Child>
// //             </div>
// //           </div>
// //         </Dialog>
// //       </Transition>
// //     </>
// //   );
// // }

// // /* Reusable components remain exactly the same */
// // function Input({
// //   label,
// //   name,
// //   register,
// //   required,
// //   errors,
// //   type = "text",
// //   clearErrors,
// //   ...props
// // }) {
// //   const { t } = useTranslation();
// //   return (
// //     <div className="relative">
// //       <label className="block text-[14px] font-helvetica font-bold uppercase tracking-wider mb-2 opacity-90">
// //         {label}
// //       </label>
// //       <input
// //         type={type}
// //         {...register(name, {
// //           required: required && t("common.required"),
// //           onChange: () => clearErrors(name),
// //         })}
// //         className="w-full font-helvetica font-normal bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 transition"
// //         {...props}
// //       />
// //       {errors[name] && (
// //         <p className="text-red-500 text-xs mt-1">
// //           {errors[name]?.message || t("common.required")}{" "}
// //           {/* <-- fresh translation */}
// //         </p>
// //       )}
// //     </div>
// //   );
// // }

// // function RadioCheckbox({
// //   label,
// //   options,
// //   name,
// //   register,
// //   required,
// //   control,
// //   clearErrors,
// // }) {
// //   const value = useWatch({ control, name });
// //   const error = control._formState.errors[name];
// //   const { t } = useTranslation();

// //   return (
// //     <div className="mt-8">
// //       <p className="text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">
// //         {label}
// //       </p>
// //       <div className="flex gap-6">
// //         {options.map((option) => (
// //           <label
// //             key={option}
// //             className="flex items-center gap-3 cursor-pointer select-none"
// //           >
// //             <input
// //               type="radio"
// //               value={option}
// //               {...register(name, {
// //                 required: required && "This field is required",
// //                 onChange: () => clearErrors?.(name),
// //               })}
// //               className="sr-only"
// //             />
// //             <div className="relative w-6 h-6 rounded-md border border-white flex items-center justify-center">
// //               {value === option && (
// //                 <svg
// //                   className="h-4 w-4 text-[#F8B03B]"
// //                   viewBox="0 0 18 18"
// //                   fill="none"
// //                 >
// //                   <path
// //                     d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z"
// //                     fill="#F8B03B"
// //                   />
// //                 </svg>
// //               )}
// //             </div>
// //             <span className="text-white font-medium uppercase text-sm tracking-wider">
// //               {option}
// //             </span>
// //           </label>
// //         ))}
// //       </div>
// //       {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
// //     </div>
// //   );
// // }

// // function FileUpload({ label, required, fileName, onChange, inputRef, accept }) {
// //   const { t } = useTranslation();
// //   const id = `upload-${label.replace(/\s+/g, "-")}`;
// //   return (
// //     <div className="mt-6 border-b-2 border-white/40 pb-5">
// //       <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">
// //         {label}
// //       </label>
// //       <div className="flex items-center gap-4">
// //         <input
// //           type="file"
// //           id={id}
// //           className="hidden"
// //           ref={inputRef}
// //           onChange={onChange}
// //           accept={accept}
// //         />
// //         <label
// //           htmlFor={id}
// //           className="cursor-pointer inline-flex items-center justify-center w-[70px] h-[34px] rounded-[10px] bg-[#FFFFFF33] text-white font-medium text-sm hover:bg-[#FFFFFF44] transition"
// //         >
// //           {t("common.upload")}
// //         </label>
// //         <span className="text-white/70 text-sm">
// //           {fileName || t("common.noFileChosen")}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { useForm, useWatch } from "react-hook-form";
// import ThanksModal from "./ThanksModal";
// import { useTranslation } from "react-i18next";

// export default function CreditAnalystForm({ isOpen = false, onClose }) {
//   const [step, setStep] = useState(1);
//   const { t } = useTranslation();
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [hasTriedNext, setHasTriedNext] = useState(false); // ← fixes language bug

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     trigger,
//     control,
//     clearErrors,
//     setValue,
//     reset,
//     watch,
//   } = useForm({
//     mode: "onChange", // instant feedback while typing
//     // reValidateMode removed → no errors on language change
//   });

//   // File states
//   const [certificationsFile, setCertificationsFile] = useState("");
//   const [cvFileName, setCvFileName] = useState("");
//   const [videoFileName, setVideoFileName] = useState("");
//   const [personalPhotoFile, setPersonalPhotoFile] = useState("");
//   const [finalCvFileName, setFinalCvFileName] = useState("");

//   const refs = {
//     certifications: useRef(null),
//     cv: useRef(null),
//     video: useRef(null),
//     personalPhoto: useRef(null),
//     finalCv: useRef(null),
//   };

//   const fullTimeAvailability = watch("fullTimeAvailability");
//   const trainingCommitment = watch("trainingCommitment");
//   const hasCv = !!cvFileName || !!finalCvFileName;
//   const isStep11Complete = hasCv && fullTimeAvailability && trainingCommitment;

//   useEffect(() => {
//     if (!isOpen) {
//       setStep(1);
//       setShowThankYou(false);
//       setHasTriedNext(false);
//       Object.values(refs).forEach((r) => r.current && (r.current.value = ""));
//       setCertificationsFile("");
//       setCvFileName("");
//       setVideoFileName("");
//       setPersonalPhotoFile("");
//       setFinalCvFileName("");
//       reset();
//     }
//   }, [isOpen, reset]);

//   const validateStep = async () => {
//     const fields = getFieldsForStep(step);
//     return await trigger(fields);
//   };

//   const nextStep = async () => {
//     setHasTriedNext(true);
//     const isValid = await validateStep();
//     if (isValid) {
//       setStep((prev) => Math.min(prev + 1, 11));
//       clearErrors();
//     }
//   };

//   const prevStep = () => {
//     setStep((prev) => Math.max(prev - 1, 1));
//     setHasTriedNext(false);
//   };

//   const getFieldsForStep = (currentStep) => {
//     const map = {
//       1: [
//         "fullName",
//         "location",
//         "whatsapp",
//         "email",
//         "dob",
//         "languages",
//         "linkedin",
//       ],
//       2: [
//         "education",
//         "creditYears",
//         "industriesAnalyzed",
//         "greenLendingExperience",
//       ],
//       3: [
//         "creditProcess",
//         "keyMetrics",
//         "riskVsOpportunity",
//         "softwareUsed",
//         "fraudDetection",
//         "judgmentUnderPressure",
//         "documentationProcess",
//       ],
//       4: [
//         "profitabilityTracking",
//         "lessonsLearned",
//         "processImprovement",
//         "multiProjectCoordination",
//         "healthIndicators",
//       ],
//       5: [
//         "financialIntegrity",
//         "fairnessVsProtection",
//         "pressureStory",
//         "latamChallenge",
//         "preventedLoss",
//         "personalValues",
//       ],
//       6: [
//         "whyAncestro",
//         "ancestralGrid",
//         "economicTransformation",
//         "financeTechSpirit",
//         "missionContribution",
//         "careerGoals",
//         "startDate",
//       ],
//       7: [
//         "selfDiscipline",
//         "dailyHabits",
//         "habitToImprove",
//         "stressHandling",
//         "mindfulness",
//         "selfTalk",
//       ],
//       8: [
//         "currentLimitation",
//         "financialFreedomFrustration",
//         "fulfillingWork",
//         "whyConsciousFinance",
//       ],
//       9: [
//         "energyType",
//         "presentationComfort",
//         "criticismResponse",
//         "structureVsAutonomy",
//         "bestEnvironment",
//       ],
//       10: [
//         "spiritualTeamValue",
//         "physicalWellbeing",
//         "personalGrowth",
//         "fitnessSupport",
//         "fitnessChallenge",
//       ],
//       11: ["fullTimeAvailability", "trainingCommitment"],
//     };
//     return map[currentStep] || [];
//   };

//   const onSubmit = (data) => {
//     console.log("Form Submitted:", data);
//     setShowThankYou(true);
//   };

//   const handleClose = () => {
//     setStep(1);
//     setShowThankYou(false);
//     setHasTriedNext(false);
//     onClose?.();
//   };

//   return (
//     <>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={handleClose}>
//           <Transition.Child as={Fragment}>
//             <div className="fixed inset-0 bg-black/80" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4">
//               <Transition.Child as={Fragment}>
//                 <Dialog.Panel
//                   className="w-full max-w-4xl rounded-2xl overflow-hidden font-lato"
//                   style={{
//                     width: "823px",
//                     maxWidth: "95vw",
//                     background: "#FFFFFF1A",
//                     border: "1px solid rgba(255, 255, 255, 0.10)",
//                     backdropFilter: "blur(20px)",
//                     WebkitBackdropFilter: "blur(20px)",
//                     boxShadow: "0px 4px 4px 0px #000000CC",
//                   }}
//                 >
//                   <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="flex flex-col p-5 sm:p-12 text-white">
//                       {/* HEADER */}
//                       <header className="text-center mb-10">
//                         <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
//                           {t("forms.creditAnalyst.title")}
//                         </h1>
//                         <p className="text-lg opacity-90">
//                           {t("forms.creditAnalyst.subtitle")}
//                         </p>
//                         <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                           {t("forms.creditAnalyst.hashtag")}
//                         </p>
//                       </header>

//                       {/* FORM CONTENT */}
//                       <div className="mb-10 border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
//                         <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
//                           {t(`forms.creditAnalyst.steps.step${step}`)}
//                         </h2>

//                         <div
//                           className={`grid gap-x-12 gap-y-6 ${
//                             step === 1 ? "grid-cols-2" : "grid-cols-1"
//                           }`}
//                         >
//                           {/* STEP 1 */}
//                           {step === 1 && (
//                             <>
//                               <Input
//                                 label={t("forms.creditAnalyst.fields.fullName")}
//                                 name="fullName"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t("forms.creditAnalyst.fields.location")}
//                                 name="location"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t("forms.creditAnalyst.fields.whatsapp")}
//                                 name="whatsapp"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t("forms.creditAnalyst.fields.email")}
//                                 name="email"
//                                 register={register}
//                                 required
//                                 type="email"
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t("forms.creditAnalyst.fields.dob")}
//                                 name="dob"
//                                 register={register}
//                                 required
//                                 type="date"
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.languages"
//                                 )}
//                                 name="languages"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <div className="col-span-2">
//                                 <Input
//                                   label={t(
//                                     "forms.creditAnalyst.fields.linkedin"
//                                   )}
//                                   name="linkedin"
//                                   register={register}
//                                   errors={errors}
//                                   clearErrors={clearErrors}
//                                   hasTriedNext={hasTriedNext}
//                                 />
//                               </div>
//                             </>
//                           )}

//                           {/* STEP 2 */}
//                           {step === 2 && (
//                             <>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.education"
//                                 )}
//                                 name="education"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <FileUpload
//                                 label={t(
//                                   "forms.creditAnalyst.fields.certifications"
//                                 )}
//                                 fileName={certificationsFile}
//                                 onChange={(e) =>
//                                   e.target.files[0] &&
//                                   setCertificationsFile(e.target.files[0].name)
//                                 }
//                                 inputRef={refs.certifications}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.creditYears"
//                                 )}
//                                 name="creditYears"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.industriesAnalyzed"
//                                 )}
//                                 name="industriesAnalyzed"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.greenLendingExperience"
//                                 )}
//                                 name="greenLendingExperience"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <FileUpload
//                                 label={t("forms.creditAnalyst.fields.uploadCV")}
//                                 required
//                                 fileName={cvFileName}
//                                 onChange={(e) => {
//                                   const f = e.target.files[0];
//                                   if (f) {
//                                     setCvFileName(f.name);
//                                     setValue("cvFile", f);
//                                   }
//                                 }}
//                                 inputRef={refs.cv}
//                               />
//                             </>
//                           )}

//                           {/* STEP 3 */}
//                           {step === 3 && (
//                             <>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.creditProcess"
//                                 )}
//                                 name="creditProcess"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.keyMetrics"
//                                 )}
//                                 name="keyMetrics"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.riskVsOpportunity"
//                                 )}
//                                 name="riskVsOpportunity"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.softwareUsed"
//                                 )}
//                                 name="softwareUsed"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.fraudDetection"
//                                 )}
//                                 name="fraudDetection"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.judgmentUnderPressure"
//                                 )}
//                                 name="judgmentUnderPressure"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.documentationProcess"
//                                 )}
//                                 name="documentationProcess"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}

//                           {/* STEP 4 */}
//                           {step === 4 && (
//                             <>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.profitabilityTracking"
//                                 )}
//                                 name="profitabilityTracking"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.lessonsLearned"
//                                 )}
//                                 name="lessonsLearned"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.processImprovement"
//                                 )}
//                                 name="processImprovement"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.multiProjectCoordination"
//                                 )}
//                                 name="multiProjectCoordination"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.healthIndicators"
//                                 )}
//                                 name="healthIndicators"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}

//                           {/* STEP 5 */}
//                           {step === 5 && (
//                             <>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.financialIntegrity"
//                                 )}
//                                 name="financialIntegrity"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.fairnessVsProtection"
//                                 )}
//                                 name="fairnessVsProtection"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.pressureStory"
//                                 )}
//                                 name="pressureStory"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.latamChallenge"
//                                 )}
//                                 name="latamChallenge"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.preventedLoss"
//                                 )}
//                                 name="preventedLoss"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.personalValues"
//                                 )}
//                                 name="personalValues"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}

//                           {/* STEP 6 */}
//                           {step === 6 && (
//                             <>
//                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                 {t(
//                                   "forms.creditAnalyst.sections.visionPurpose"
//                                 )}
//                               </p>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.whyAncestro"
//                                 )}
//                                 name="whyAncestro"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.ancestralGrid"
//                                 )}
//                                 name="ancestralGrid"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.economicTransformation"
//                                 )}
//                                 name="economicTransformation"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.financeTechSpirit"
//                                 )}
//                                 name="financeTechSpirit"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.missionContribution"
//                                 )}
//                                 name="missionContribution"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.careerGoals"
//                                 )}
//                                 name="careerGoals"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.startDate"
//                                 )}
//                                 name="startDate"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}

//                           {/* STEP 7 */}
//                           {step === 7 && (
//                             <>
//                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                 {t(
//                                   "forms.creditAnalyst.sections.lifestyleMindset"
//                                 )}
//                               </p>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.selfDiscipline"
//                                 )}
//                                 name="selfDiscipline"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.dailyHabits"
//                                 )}
//                                 name="dailyHabits"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.habitToImprove"
//                                 )}
//                                 name="habitToImprove"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.stressHandling"
//                                 )}
//                                 name="stressHandling"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.mindfulness"
//                                 )}
//                                 name="mindfulness"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t("forms.creditAnalyst.fields.selfTalk")}
//                                 name="selfTalk"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}

//                           {/* STEP 8 */}
//                           {step === 8 && (
//                             <>
//                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                 {t(
//                                   "forms.creditAnalyst.sections.motivationPurpose"
//                                 )}
//                               </p>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.currentLimitation"
//                                 )}
//                                 name="currentLimitation"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.financialFreedomFrustration"
//                                 )}
//                                 name="financialFreedomFrustration"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.fulfillingWork"
//                                 )}
//                                 name="fulfillingWork"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.whyConsciousFinance"
//                                 )}
//                                 name="whyConsciousFinance"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}

//                           {/* STEP 9 */}
//                           {step === 9 && (
//                             <>
//                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                 {t(
//                                   "forms.creditAnalyst.sections.personalityComm"
//                                 )}
//                               </p>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.energyType"
//                                 )}
//                                 name="energyType"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.presentationComfort"
//                                 )}
//                                 name="presentationComfort"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.criticismResponse"
//                                 )}
//                                 name="criticismResponse"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.structureVsAutonomy"
//                                 )}
//                                 name="structureVsAutonomy"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.bestEnvironment"
//                                 )}
//                                 name="bestEnvironment"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}

//                           {/* STEP 10 */}
//                           {step === 10 && (
//                             <>
//                               <p className="text-sm -mt-8 mb-[10px] sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
//                                 {t(
//                                   "forms.creditAnalyst.sections.growthCulture"
//                                 )}
//                               </p>
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.spiritualTeamValue"
//                                 )}
//                                 name="spiritualTeamValue"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.physicalWellbeing"
//                                 )}
//                                 name="physicalWellbeing"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.personalGrowth"
//                                 )}
//                                 name="personalGrowth"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.fitnessSupport"
//                                 )}
//                                 name="fitnessSupport"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <Input
//                                 label={t(
//                                   "forms.creditAnalyst.fields.fitnessChallenge"
//                                 )}
//                                 name="fitnessChallenge"
//                                 register={register}
//                                 required
//                                 errors={errors}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <FileUpload
//                                 label={t(
//                                   "forms.creditAnalyst.fields.personalPhoto"
//                                 )}
//                                 fileName={personalPhotoFile}
//                                 onChange={(e) =>
//                                   e.target.files[0] &&
//                                   setPersonalPhotoFile(e.target.files[0].name)
//                                 }
//                                 inputRef={refs.personalPhoto}
//                               />
//                             </>
//                           )}

//                           {/* STEP 11 - FINAL */}
//                           {step === 11 && (
//                             <>
//                               <FileUpload
//                                 label={t(
//                                   "forms.creditAnalyst.fields.finalUploadCV"
//                                 )}
//                                 required
//                                 fileName={finalCvFileName}
//                                 onChange={(e) => {
//                                   const f = e.target.files[0];
//                                   if (f) {
//                                     setFinalCvFileName(f.name);
//                                     setValue("finalCvFile", f);
//                                   }
//                                 }}
//                                 inputRef={refs.finalCv}
//                               />
//                               <FileUpload
//                                 label={t(
//                                   "forms.creditAnalyst.fields.uploadVideo"
//                                 )}
//                                 fileName={videoFileName}
//                                 onChange={(e) =>
//                                   e.target.files[0] &&
//                                   setVideoFileName(e.target.files[0].name)
//                                 }
//                                 inputRef={refs.video}
//                                 accept="video/*"
//                               />
//                               <RadioCheckbox
//                                 label={t(
//                                   "forms.creditAnalyst.fields.fullTimeAvailability"
//                                 )}
//                                 options={[t("common.yes"), t("common.no")]}
//                                 name="fullTimeAvailability"
//                                 register={register}
//                                 required
//                                 control={control}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                               <RadioCheckbox
//                                 label={t(
//                                   "forms.creditAnalyst.fields.trainingCommitment"
//                                 )}
//                                 options={[t("common.yes"), t("common.no")]}
//                                 name="trainingCommitment"
//                                 register={register}
//                                 required
//                                 control={control}
//                                 clearErrors={clearErrors}
//                                 hasTriedNext={hasTriedNext}
//                               />
//                             </>
//                           )}
//                         </div>
//                       </div>

//                       {/* NAVIGATION */}
//                       <div className="flex flex-col gap-4">
//                         {step > 1 && (
//                           <button
//                             type="button"
//                             onClick={prevStep}
//                             className="w-full py-3 border border-white/40 rounded-full hover:bg-white/10 font-medium"
//                           >
//                             {t("common.back")}
//                           </button>
//                         )}
//                         {step < 11 ? (
//                           <button
//                             type="button"
//                             onClick={nextStep}
//                             className="w-full py-4 bg-[#F8B03B] text-black font-bold uppercase rounded-full text-lg"
//                           >
//                             {t("common.next")}
//                           </button>
//                         ) : (
//                           <button
//                             type="submit"
//                             disabled={!isStep11Complete}
//                             className={`w-full py-4 rounded-full font-bold uppercase text-lg ${
//                               isStep11Complete
//                                 ? "bg-[#F8B03B] text-black hover:bg-[#f9c65b]"
//                                 : "bg-gray-700 text-gray-400 opacity-70 cursor-not-allowed"
//                             }`}
//                           >
//                             {t("forms.creditAnalyst.submitButton")}
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>

//       <ThanksModal
//         isOpen={showThankYou}
//         onClose={handleClose}
//         text1={t("forms.creditAnalyst.thanks.text1")}
//         text2={t("forms.creditAnalyst.thanks.text2")}
//       />
//     </>
//   );
// }

// /* REUSABLE COMPONENTS - FIXED */
// function Input({
//   label,
//   name,
//   register,
//   required,
//   errors,
//   type = "text",
//   clearErrors,
//   hasTriedNext,
//   ...props
// }) {
//   const { t } = useTranslation();
//   return (
//     <div>
//       <label className="block text-[14px] font-bold uppercase tracking-wider mb-2 opacity-90">
//         {label}
//       </label>
//       <input
//         type={type}
//         {...register(name, {
//           required: required && t("common.required"),
//           onChange: () => clearErrors(name),
//         })}
//         className="w-full bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50"
//         {...props}
//       />
//       {hasTriedNext && errors[name] && (
//         <p className="text-red-500 text-xs mt-1">
//           {errors[name]?.message || t("common.required")}
//         </p>
//       )}
//     </div>
//   );
// }

// function RadioCheckbox({
//   label,
//   options,
//   name,
//   register,
//   required,
//   control,
//   clearErrors,
//   hasTriedNext,
// }) {
//   const value = useWatch({ control, name });
//   const error = control._formState.errors[name];
//   const { t } = useTranslation();

//   return (
//     <div className="mt-8">
//       <p className="text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">
//         {label}
//       </p>
//       <div className="flex gap-8">
//         {options.map((option) => (
//           <label
//             key={option}
//             className="flex items-center gap-3 cursor-pointer"
//           >
//             <input
//               type="radio"
//               value={option}
//               {...register(name, {
//                 required: required && t("common.required"),
//               })}
//               className="sr-only"
//             />
//             <div className="w-6 h-6 rounded-md border-2 border-white flex items-center justify-center">
//               {value === option && (
//                 <svg
//                   className="h-4 w-4 text-[#F8B03B]"
//                   viewBox="0 0 18 18"
//                   fill="none"
//                 >
//                   <path
//                     d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z"
//                     fill="#F8B03B"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-white uppercase text-sm font-medium">
//               {option}
//             </span>
//           </label>
//         ))}
//       </div>
//       {hasTriedNext && error && (
//         <p className="text-red-500 text-xs mt-2">{t("common.required")}</p>
//       )}
//     </div>
//   );
// }

// function FileUpload({
//   label,
//   required = false,
//   fileName,
//   onChange,
//   inputRef,
//   accept,
// }) {
//   const { t } = useTranslation();
//   const id = `file-${Math.random().toString(36)}`;

//   return (
//     <div className="mt-6 border-b-2 border-white/40 pb-5">
//       <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">
//         {label} {required && <span className="text-red-400">*</span>}
//       </label>
//       <div className="flex items-center gap-4">
//         <input
//           type="file"
//           id={id}
//           className="hidden"
//           ref={inputRef}
//           onChange={onChange}
//           accept={accept}
//         />
//         <label
//           htmlFor={id}
//           className="px-5 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 cursor-pointer transition"
//         >
//           {t("common.upload")}
//         </label>
//         <span className="text-white/70 text-sm">
//           {fileName || t("common.noFileChosen")}
//         </span>
//       </div>
//     </div>
//   );
// }

import { creditAnalystConfig } from "./creditAnalystConfig";
import FormBuilder from "../FormBuilder"; // a generalized form component

export default function creditAnalystModal({ isOpen, onClose }) {
  return (
    <FormBuilder
      isOpen={isOpen}
      onClose={onClose}
      config={creditAnalystConfig} // pass the config here
    />
  );
}
