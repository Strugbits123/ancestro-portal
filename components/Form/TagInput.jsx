// components/common/TagInput.jsx
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

function TagInput({
  label,
  name,
  register,
  setValue,
  getValues,
  clearErrors,
  trigger,
  required,
  errors,
  hasTriedNext,
  maxTags = 3,
  placeholder = "Type a word and press Enter or Space...",
  ...restProps
}) {
  const { t } = useTranslation();
  const [tags, setTags] = useState(getValues?.(name) || []);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // CRITICAL: Register the field with validation (but don't trigger on mount)
  useEffect(() => {
    register(name, {
      required: required ? t("common.required") : false,
      validate: (value) =>
        !required || (Array.isArray(value) && value.length > 0) || t("common.required"),
    });
  }, [register, name, required, t]);

  // Sync internal tags state → form state
  // FIXED: Remove shouldValidate to prevent validation on mount
  useEffect(() => {
    setValue(name, tags, { shouldValidate: false, shouldDirty: true });
    if (tags.length > 0) clearErrors?.(name);
  }, [tags, name, setValue, clearErrors]);

  // Auto-focus input
  useEffect(() => {
    if (inputRef.current && tags.length < maxTags) {
      inputRef.current.focus();
    }
  }, [tags.length, maxTags]);

  const handleKeyDown = (e) => {
    if (["Enter", " "].includes(e.key) && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue.trim());
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const addTag = (value) => {
    const cleanTag = value.trim().toLowerCase().replace(/[^\w]/g, "");
    if (cleanTag && !tags.includes(cleanTag) && tags.length < maxTags) {
      setTags((prev) => [...prev, cleanTag]);
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-bold uppercase tracking-wider mb-2 opacity-90">
        {t(label)} {required && <span className="text-red-400">*</span>}
        {maxTags && (
          <span className="text-white/60 text-xs lowercase ml-2">
            ({tags.length}/{maxTags})
          </span>
        )}
      </label>

      <div className="flex flex-wrap items-center gap-2 min-h-[48px] bg-transparent border-b-2 border-white/40 focus-within:border-[#F8B03B] px-1 py-2 transition-colors">
        {/* Tags */}
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 bg-[#F8B03B]/20 text-[#F8B03B] px-3 py-1.5 rounded-full text-sm font-medium border border-[#F8B03B]/50"
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="ml-1 cursor-pointer rounded-full p-0.5 transition-colors"
              aria-label="Remove tag"
            >
              ×
            </button>
          </span>
        ))}

        {/* Visible Input */}
        {tags.length < maxTags && (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => inputValue.trim() && addTag(inputValue.trim())}
            placeholder={tags.length === 0 ? t(placeholder) : ""}
            className="flex-1 bg-transparent outline-none text-white placeholder-white/30 min-w-[120px]"
            style={{ MozAppearance: "textfield" }}
            autoFocus={tags.length === 0}
            {...restProps}
          />
        )}
      </div>

      {/* Error Message - Only show after user tries to go next */}
      {hasTriedNext && errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]?.message || t("common.required")}
        </p>
      )}

      
    </div>
  );
}

export default TagInput;