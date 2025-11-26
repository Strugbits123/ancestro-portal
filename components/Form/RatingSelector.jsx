'use client'
 import { useState, useEffect } from "react"; import { useTranslation } from "react-i18next";
function RatingSelector({
    label,
    name,
    register,
    required,
    errors,
    clearErrors,
    hasTriedNext,
    setValue,
    getValues, // <--- add this
}) {
    const { t } = useTranslation();
    const defaultValue = getValues(name) || 3; // keep previous value or fallback to 3
    const [selected, setSelected] = useState(defaultValue);

    const ratings = Array.from({ length: 10 }, (_, i) => i + 1);

    useEffect(() => {
        setValue(name, selected, { shouldValidate: true });
    }, [name, selected, setValue]);

    const handleSelect = (value) => {
        setSelected(value);
        setValue(name, value, { shouldValidate: true });
        clearErrors?.(name);
    };

    return (
        <div className="relative">
            <label className="block text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">
                {t(label)} {required && <span className="text-red-400">*</span>}
            </label>

            <input
                type="hidden"
                {...register(name, {
                    required: required && t("common.required"),
                })}
                value={selected}
            />

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {ratings.map((num) => (
                    <button
                        key={num}
                        type="button"
                        onClick={() => handleSelect(num)}
                        className={`
                            relative w-10 h-10 cursor-pointer rounded-xl backdrop-blur-xl
                            transition-all duration-300 transform hover:scale-110
                            flex items-center justify-center text-center
                            ${selected === num
                                ? "bg-[#F8B03B] text-black shadow-2xl shadow-[#F8B03B]/50 scale-110"
                                : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                            }
                        `}
                    >
                        <span className={`text-lg font-bold tracking-wider ${selected === num ? "drop-shadow-lg" : ""}`}>
                            {num}
                        </span>

                        {selected === num && (
                            <div className="absolute inset-0 rounded-xl bg-[#F8B03B] opacity-30 blur-xl -z-10" />
                        )}
                    </button>
                ))}
            </div>

            {hasTriedNext && errors[name] && (
                <p className="text-red-500 text-xs mt-3">
                    {errors[name]?.message || t("common.required")}
                </p>
            )}
        </div>
    );
}

export default RatingSelector;
