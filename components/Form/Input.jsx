// components/common/Input.jsx
import { useTranslation } from "react-i18next";

function Input({
  label,
  name,
  register,
  required,
  errors,
  type = "text",
  clearErrors,
  hasTriedNext,
  ...restProps
}) {
  const { t } = useTranslation();

  return (
    <div>
      <label className="block text-[14px] font-bold uppercase tracking-wider mb-2 opacity-90">
        {t(label)} {required && <span className="text-red-400">*</span>}
      </label>

      <input
        type={type}
        style={{
          MozAppearance: "textfield",
        }}
        {...restProps}
        // {...register(name, {
        //   required: required && t("common.required"),
        //   onChange: () => clearErrors?.(name),
        // })}
        {...register(name, {
          required: required && t("common.required"),
          pattern: type === "email" && {
            value: /^\S+@\S+\.\S+$/,
            message: t("common.invalidEmail"),
          },
          onChange: () => clearErrors?.(name),
        })}

        className="w-full bg-transparent border-b-2 border-white/40 focus:border-[#F8B03B] outline-none text-white placeholder-white/50 "
      />

      {hasTriedNext && errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]?.message || t("common.required")}
        </p>
      )}
    </div>
  );
}

export default Input;
