"use client";
import React, { useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ThanksModal from "./ThanksModal";

import Input from "./Input";
import FileUpload from "./FileUpload";
import RadioCheckbox from "./RadioCheckbox";

export default function FormBuilder({ config, isOpen = false, onClose }) {
  const [step, setStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [hasTriedNext, setHasTriedNext] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    control,
    clearErrors,
    setValue,
    reset,
  } = useForm({ mode: "onChange" });

  const fileRefs = useRef({});

  const currentStepConfig = config.steps[step - 1];
  const isLastStep = step === config.steps.length;

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setShowThankYou(false);
      setHasTriedNext(false);
      reset();
      Object.values(fileRefs.current).forEach((ref) => {
        if (ref?.current) ref.current.value = "";
      });
    }
  }, [isOpen, reset]);

  const validateStep = async () => {
    const fields = currentStepConfig.fields
      .filter((f) => f.required)
      .map((f) => f.name);
    return fields.length === 0 || (await trigger(fields));
  };

  const nextStep = async () => {
    setHasTriedNext(true);
    const isValid = await validateStep();
    if (isValid) setStep((prev) => Math.min(prev + 1, config.steps.length));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Final step custom validation (Installer-specific logic)
  const watchedValues = watch();
  const isSubmitEnabled =
    isLastStep && config.finalStepValidation
      ? config.finalStepValidation(watchedValues)
      : Object.keys(errors).length === 0 &&
        currentStepConfig.fields.every(
          (f) => !f.required || watchedValues[f.name]
        );

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setShowThankYou(true);
  };

  const handleClose = () => {
    onClose?.();
    setStep(1);
    setShowThankYou(false);
    setHasTriedNext(false);
    reset();
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
                    width: "823px",
                    maxWidth: "95vw",
                    background: "#FFFFFF1A",
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0px 4px 4px 0px #000000CC",
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col p-5 sm:p-12 text-white">
                      {/* Header */}
                      <header className="text-center mb-10">
                        <h1 className="text-[27px] font-bold uppercase tracking-wider mb-3">
                          {t(config.title)}
                        </h1>
                        <p className="text-lg opacity-90">
                          {t(config.subtitle)}
                        </p>
                        {config.hashtag && (
                          <p className="text-sm mt-2 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
                            {config.hashtag}
                          </p>
                        )}
                      </header>

                      {/* Form Content */}
                      <div className="mb-10 border border-[#FFFFFF1A] p-[20px] rounded-[20px]">
                        <h2 className="text-xl font-bold uppercase text-[#F8B03B] text-center mb-10 tracking-wider">
                          {t(currentStepConfig.title)}
                        </h2>

                        {/* Section Title (e.g. Lifestyle & Mindset) */}
                        {currentStepConfig.sectionTitle && (
                          <p className="text-sm -mt-8 mb-6 sm:text-[18px] px-2.5 py-[5px] mx-auto rounded-[10px] w-max border border-[#FFFFFF1A] uppercase">
                            {t(currentStepConfig.sectionTitle)}
                          </p>
                        )}

                        <div
                          className={`grid gap-x-12 gap-y-6 ${
                            currentStepConfig.grid || "grid-cols-1"
                          }`}
                        >
                          {currentStepConfig.fields.map((field) => {
                            const isFullWidth =
                              field.fullWidth ||
                              field.type === "file" ||
                              field.type === "radio";

                            return (
                              <div
                                key={field.name}
                                className={isFullWidth ? "col-span-full" : ""}
                              >
                                {field.type === "file" && (
                                  <FileUpload
                                    label={t(field.label)}
                                    required={field.required}
                                    inputRef={
                                      (fileRefs.current[field.name] =
                                        fileRefs.current[field.name] ||
                                        React.createRef())
                                    }
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        setValue(field.name, file, {
                                          shouldValidate: true,
                                        });
                                      }
                                      clearErrors(field.name);
                                    }}
                                    hasTriedNext={
                                      hasTriedNext && field.required
                                    }
                                    accept={field.accept}
                                  />
                                )}

                                {field.type === "radio" && (
                                  <RadioCheckbox
                                    label={t(field.label)}
                                    options={field.options.map((opt) => t(opt))}
                                    name={field.name}
                                    register={register}
                                    required={field.required}
                                    control={control}
                                    clearErrors={clearErrors}
                                    hasTriedNext={hasTriedNext}
                                  />
                                )}

                                {!field.type ||
                                field.type === "text" ||
                                field.type === "date" ||
                                field.type === "email" ||
                                field.type === "number" ? (
                                  <Input
                                    label={t(field.label)}
                                    name={field.name}
                                    type={field.type || "text"}
                                    register={register}
                                    required={field.required}
                                    errors={errors}
                                    clearErrors={clearErrors}
                                    hasTriedNext={hasTriedNext}
                                    placeholder={
                                      field.placeholder
                                        ? t(field.placeholder)
                                        : undefined
                                    }
                                  />
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex flex-col gap-4">
                        {step > 1 && (
                          <button
                            type="button"
                            onClick={prevStep}
                            className="w-full py-3 border border-white/40 rounded-full hover:bg-white/10 transition font-medium"
                          >
                            {t("common.back")}
                          </button>
                        )}

                        {step < config.steps.length ? (
                          <button
                            type="button"
                            onClick={nextStep}
                            className="w-full py-4 bg-[#F8B03B] uppercase text-black font-bold rounded-full text-lg hover:bg-[#f9c65b] transition"
                          >
                            {t("common.next")}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={!isSubmitEnabled}
                            className={`w-full py-4 rounded-full font-bold uppercase text-lg transition ${
                              isSubmitEnabled
                                ? "bg-[#F8B03B] text-black hover:bg-[#f9c65b] cursor-pointer"
                                : "bg-gray-600 text-gray-400 cursor-not-allowed"
                            }`}
                          >
                            {t(config.submitButton || "common.submit")}
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
      <ThanksModal
        isOpen={showThankYou}
        onClose={handleClose}
        config={config.thanks}
      />
    </>
  );
}
