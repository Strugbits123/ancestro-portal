import { useTranslation } from "react-i18next";
import { useWatch } from "react-hook-form";

function RadioCheckbox({
  label,
  options,
  name,
  register,
  required,
  control,
  clearErrors,
  hasTriedNext,
}) {
  const value = useWatch({ control, name });
  const { t } = useTranslation();

  return (
    <div className="mt-6">
      <p className="text-[14px] font-bold uppercase tracking-wider mb-4 opacity-90">
        {label} {required && <span className="text-red-400">*</span>}
      </p>
      <div className="flex gap-8">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            {/* Hidden radio input, still clickable because it's inside the label */}
            <input
              type="radio"
              value={option}
              {...register(name, {
                required: required && t("common.required"),
                onChange: () => clearErrors(name), // clears error when clicked
              })}
              className="sr-only" // accessible and hidden
            />

            {/* Custom styled radio box */}
            <div
              className={`w-6 h-6 rounded-md border-2 border-white flex items-center justify-center transition-colors duration-200
                `}
            >
              {value === option && (
                <svg
                  className="h-4 w-4 text-[#F8B03B]"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z"
                    fill="#F8B03B"
                  />
                </svg>
              )}
            </div>

            {/* Label text */}
            <span className="text-white uppercase text-sm font-medium">
              {option}
            </span>
          </label>
        ))}
      </div>

      {/* Optional error message */}
      {/* {hasTriedNext && !value && (
        <p className="text-red-500 text-xs mt-2">{t("common.required")}</p>
      )} */}
    </div>
  );
}

export default RadioCheckbox;
