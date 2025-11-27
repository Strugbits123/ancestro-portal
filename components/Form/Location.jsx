import { useState, useRef, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { useTranslation } from "react-i18next";

function SmartLocationInput({
    type = "location",
    countryFieldName,
    label,
    name,
    register,
    setValue,
    getValues,
    watch,
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
    const [isSelected, setIsSelected] = useState(!!initialValue);
    const wrapperRef = useRef(null);


    const selectedCountryDisplay = type === "city" && countryFieldName && watch
        ? watch(countryFieldName)
        : "";


    const selectedCountry = selectedCountryDisplay
        ? Country.getAllCountries().find(
            c => c.name === selectedCountryDisplay || c.isoCode === selectedCountryDisplay
        )
        : null;

    const selectedCountryCode = selectedCountry?.isoCode || "";

    const isCityField = type === "city";
    const isCountryField = type === "country";
    const isLocationField = type === "location";

    const isDisabled = isCityField && !selectedCountryCode;

   
    useEffect(() => {
        if (isCityField && inputValue && !selectedCountryCode) {
            setInputValueState("");
            setIsSelected(false);
        }
    }, [selectedCountryCode, isCityField]);

   
    useEffect(() => {
        if (setValue) {
            setValue(name, inputValue, {
                shouldValidate: hasTriedNext,
                shouldDirty: true,
                shouldTouch: true
            });
        }
        if (inputValue && clearErrors) {
            clearErrors(name);
        }
    }, [inputValue, name, setValue, clearErrors, hasTriedNext]);

    useEffect(() => {
        if (register) {
            register(name, {
                required: required ? "This field is required" : false
            });
        }
    }, [register, name, required]);

 
    useEffect(() => {
        if (isSelected || isDisabled) {
            setSuggestions([]);
            return;
        }

        const query = inputValue.trim();
        if (query.length < 2) {
            setSuggestions([]);
            return;
        }

        setLoading(true);
        const lowerQuery = query.toLowerCase();

        let results = [];

        if (isCountryField) {
            results = Country.getAllCountries()
                .filter(c => c.name.toLowerCase().includes(lowerQuery))
                .slice(0, 10)
                .map(c => c.name);
        }
        else if (isCityField && selectedCountryCode) {
            const cities = City.getCitiesOfCountry(selectedCountryCode) || [];
            results = cities
                .filter(city => city.name.toLowerCase().includes(lowerQuery))
                .slice(0, 12)
                .map(city => city.name);
        }
        else if (isLocationField) {
            const matched = City.getAllCities()
                .filter(city => {
                    const country = Country.getCountryByCode(city.countryCode);
                    const state = State.getStateByCodeAndCountry(city.stateCode, city.countryCode);
                    return (
                        city.name.toLowerCase().includes(lowerQuery) ||
                        state?.name?.toLowerCase().includes(lowerQuery) ||
                        country?.name?.toLowerCase().includes(lowerQuery)
                    );
                })
                .slice(0, 10);

            results = matched.map(city => {
                const country = Country.getCountryByCode(city.countryCode);
                const state = State.getStateByCodeAndCountry(city.stateCode, city.countryCode);
                return [city.name, state?.name, country?.name].filter(Boolean).join(", ");
            });
        }

        setSuggestions(results);
        setLoading(false);
    }, [inputValue, isSelected, isDisabled, selectedCountryCode, type, isCountryField, isCityField, isLocationField]);

    
    useEffect(() => {
        const handleClickOutside = e => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectOption = (value) => {
        setInputValueState(value);
        setIsSelected(true);
        setIsOpen(false);
    };

    const clearInput = (e) => {
        e.stopPropagation();
        setInputValueState("");
        setIsSelected(false);
        setIsOpen(false);
    };

    return (
        <div className="space-y-2" ref={wrapperRef}>
            <label className="block text-[14px] font-bold uppercase tracking-wider mb-2 opacity-90">
                {label} {required && <span className="text-red-400">*</span>}
            </label>

            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => {
                        const val = e.target.value;
                        if (!isSelected) {
                            setInputValueState(val);
                            if (val.trim().length > 0) setIsOpen(true);
                            else setIsOpen(false);
                        }
                    }}
                    onFocus={() => {
                        if (!isSelected && !isDisabled && inputValue.trim().length > 0) {
                            setIsOpen(true);
                        }
                    }}

                    placeholder={
                        isDisabled
                            ? t("common.selectCountry")
                            : placeholder || (isCountryField ? t("common.searchCountry") : isCityField ? t("common.searchCity") : "e.g. Karachi, Dubai")
                    }
                    readOnly={isSelected || isDisabled}
                    className={`w-full bg-transparent border-b-2 px-1 py-2 outline-none transition-all
            ${isSelected
                            ? "border-[#F8B03B] text-[#F8B03B] cursor-default"
                            : isDisabled
                                ? "border-white/20 text-white/40 cursor-not-allowed"
                                : "border-white/40 focus:border-[#F8B03B] text-white placeholder-white/50"
                        }`}
                    style={{ MozAppearance: "textfield" }}
                    {...restProps}
                />

                {isSelected && (
                    <button
                        type="button"
                        onClick={clearInput}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl leading-none"
                    >
                        ×
                    </button>
                )}

                {isOpen && !isSelected && !isDisabled && (
                    <div className="absolute top-full left-0 right-0 mt-2 border border-white bg-black/90 rounded-lg shadow-2xl max-h-64 overflow-y-auto z-50">
                        {loading ? (
                            <div className="px-4 py-3 text-white/50 text-sm">Searching...</div>
                        ) : suggestions.length === 0 ? (
                            <div className="px-4 py-3 text-white/50 text-sm">{t("common.noResultsFound")}</div>
                        ) : (
                            suggestions.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => selectOption(item)}
                                    className="px-4 py-3 hover:bg-white/10 cursor-pointer transition text-white text-sm"
                                >
                                    {item}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>

            {hasTriedNext && errors[name] && (
                <p className="text-red-500 text-xs mt-1">
                    {errors[name]?.message || "This field is required"}
                </p>
            )}


        </div>
    );
}

export default SmartLocationInput;