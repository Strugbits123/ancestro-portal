// components/common/SmartLocationInput.jsx
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Country, State, City } from "country-state-city";

// ──────────────────────────────────────────────────────────────
// 1. Global lazy index (shared across all instances)
// ──────────────────────────────────────────────────────────────
let globalCityIndexPromise = null;

const buildCityIndex = () => {
    if (globalCityIndexPromise) return globalCityIndexPromise;

    globalCityIndexPromise = new Promise(resolve => {
        // Use setTimeout(0) to run off the main thread immediately
        setTimeout(() => {
            console.log("Building city index in background…");
            const index = [];

            const allCities = City.getAllCities();
            for (const city of allCities) {
                const country = Country.getCountryByCode(city.countryCode);
                const state = State.getStateByCodeAndCountry(city.stateCode, city.countryCode);

                const display = [city.name, state?.name, country?.name]
                    .filter(Boolean)
                    .join(", ");

                const searchTerms = [
                    city.name,
                    state?.name,
                    country?.name,
                    display,
                ]
                    .filter(Boolean)
                    .map(s => s.toLowerCase());

                index.push({ display, search: searchTerms });
            }

            resolve(index);
            console.log("City index ready →", index.length, "entries");
        }, 0);
    });

    return globalCityIndexPromise;
};

// ──────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────
function SmartLocationInput({
    label,
    name,
    register,
    setValue,
    getValues,
    clearErrors,
    required,
    errors,
    hasTriedNext,
    placeholder = "",
    ...restProps
}) {
    const { t } = useTranslation();

    const initialValue = getValues?.(name) || "";
    const [inputValue, setInputValueState] = useState(initialValue);
    const [isOpen, setIsOpen] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [indexReady, setIndexReady] = useState(false);     // new
    const [isSelected, setIsSelected] = useState(!!initialValue);
    const wrapperRef = useRef(null);

    // Start building index as soon as component mounts
    useEffect(() => {
        buildCityIndex().then(() => setIndexReady(true));
    }, []);

    // Sync with RHF
    useEffect(() => {
        setValue(name, inputValue, { shouldValidate: true, shouldDirty: true });
        if (inputValue) clearErrors?.(name);
    }, [inputValue, name, setValue, clearErrors]);

    useEffect(() => {
        register(name, { required: required ? t("common.required") : false });
    }, [register, name, required, t]);

    // Search (only when index is ready)
    useEffect(() => {
        if (isSelected || !indexReady) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(() => {
            const query = inputValue.trim();
            if (query.length < 2) {
                setSuggestions([]);
                setLoading(false);
                return;
            }

            setLoading(true);

            globalCityIndexPromise.then(cityIndex => {
                const lower = query.toLowerCase();
                const matches = cityIndex
                    .filter(item => item.search.some(term => term.includes(lower)))
                    .slice(0, 12)
                    .map(item => item.display);

                setSuggestions(matches);
                setLoading(false);
            });
        }, 200);

        return () => clearTimeout(timer);
    }, [inputValue, isSelected, indexReady]);

    // Click outside
    useEffect(() => {
        const handleClickOutside = e => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectLocation = locationString => {
        setInputValueState(locationString);
        setIsSelected(true);
        setIsOpen(false);
    };

    const clearInput = e => {
        e.stopPropagation();
        setInputValueState("");
        setIsSelected(false);
        setIsOpen(false);
    };

    return (
        <div className="space-y-2" ref={wrapperRef}>
            <label className="block text-[14px] font-bold uppercase tracking-wider mb-2 opacity-90">
                {t(label)} {required && <span className="text-red-400">*</span>}
            </label>

            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => !isSelected && setInputValueState(e.target.value)}
                    onFocus={() => !isSelected && setIsOpen(true)}
                    placeholder={t(placeholder)}
                    readOnly={isSelected}
                    className={`w-full bg-transparent border-b-2 px-1 outline-none transition-all 
            ${isSelected
                            ? "border-[#F8B03B] text-[#F8B03B] cursor-default"
                            : "border-white/40 focus:border-[#F8B03B] text-white placeholder-white/50"
                        }`}
                    {...restProps}
                />

                {/* Clear button */}
                {isSelected && (
                    <button
                        type="button"
                        onClick={clearInput}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl leading-none"
                    >
                        ×
                    </button>
                )}

                {/* First-time loading state */}
                {!indexReady && isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-white/20 rounded-lg shadow-2xl z-50">
                        <div className="flex items-center gap-3 px-4 py-3 text-white/70">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            <span className="text-sm">Loading locations… (first time only)</span>
                        </div>
                    </div>
                )}

                {/* Regular search loading */}
                {loading && indexReady && isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-white/20 rounded-lg shadow-2xl z-50">
                        <div className="flex items-center gap-3 px-4 py-3 text-white/70">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            <span className="text-sm">Searching…</span>
                        </div>
                    </div>
                )}

                {/* Suggestions */}
                {indexReady && !isSelected && isOpen && !loading && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 border border-white bg-black/90 rounded-lg shadow-2xl max-h-64 overflow-y-auto z-50">
                        {suggestions.map((loc, i) => (
                            <div
                                key={i}
                                onClick={() => selectLocation(loc)}
                                className="px-4 py-3 hover:bg-white/10 cursor-pointer transition text-white text-sm"
                            >
                                {loc}
                            </div>
                        ))}
                    </div>
                )}

                {/* No results */}
                {indexReady && !isSelected && isOpen && !loading && inputValue.length >= 2 && suggestions.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-white/20 rounded-lg shadow-2xl z-50">
                        <div className="px-4 py-3 text-white/50 text-sm">No locations found</div>
                    </div>
                )}
            </div>

            {hasTriedNext && errors[name] && (
                <p className="text-red-500 text-xs mt-1">
                    {errors[name]?.message || t("common.required")}
                </p>
            )}
        </div>
    );
}

export default SmartLocationInput;