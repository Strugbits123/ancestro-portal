// components/common/Dropdown.jsx
'use client'
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Dropdown({
    label,
    name,
    register,
    required,
    errors,
    options = [],
    clearErrors,
    hasTriedNext,
    setValue,
    getValues,
}) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    
    // Get current value directly from form (no state)
    const selectedLabel = getValues?.(name) || "";

    const handleSelect = (option) => {
        console.log("Selected option:", option);
        setIsOpen(false);
        setValue(name, option, { shouldValidate: true });
        clearErrors?.(name);
    };

    return (
        <div className="relative">
            <label className="block text-[14px] font-bold uppercase tracking-wider mb-2 opacity-90">
                {label} {required && <span className="text-red-400">*</span>}
            </label>

            {/* Dropdown Trigger */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full cursor-pointer bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 flex justify-between items-center py-2"
            >
                <span className={"text-[14px] font-bold uppercase tracking-wider opacity-90"}>
                    {selectedLabel || ""}
                </span>
                <svg
                    width="13"
                    height="5"
                    viewBox="0 0 13 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                    <path d="M6.49474 5L-7.20421e-05 -1.13565e-06L12.9903 0L6.49474 5Z" fill="#D9D9D9" />
                </svg>
            </button>

            {/* Hidden input for React Hook Form */}
            <input 
                type="hidden" 
                value={selectedLabel || ""} 
                {...register(name, { required: required && t("common.required") })} 
            />

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Backdrop blur */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Options */}
                    <div className="absolute left-0 right-0 mt-2 z-50 backdrop-blur-xl border border-white bg-black/90 rounded-lg shadow-lg overflow-hidden">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => handleSelect(option)}
                                className="w-full font-helvetica font-light text-left cursor-pointer px-4 py-3 hover:bg-white/20 transition-colors"
                            >
                                <span
                                    className="font-helvetica text-[14px] font-normal"
                                    style={{
                                        textTransform: "capitalize",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {option}
                                </span>
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Error Message */}
            {hasTriedNext && errors[name] && (
                <p className="text-red-500 text-xs mt-1">
                    {errors[name]?.message || t("common.required")}
                </p>
            )}
        </div>
    );
}

export default Dropdown;