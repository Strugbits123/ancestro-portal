import { useTranslation } from "react-i18next";

function FileUpload({
  label,
  required = false,
  fileName,
  onChange,
  inputRef,
  accept,
}) {
  const { t } = useTranslation();
  const id = `file-${Math.random().toString(36)}`;

  return (
    <div className="mt-6 border-b-2 border-white/40 pb-5">
      <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="flex items-center gap-4">
        <input
          type="file"
          id={id}
          className="hidden"
          ref={inputRef}
          onChange={onChange}
          accept={accept}
        />
        <label
          htmlFor={id}
          className="px-5 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 cursor-pointer transition"
        >
          {t("common.upload")}
        </label>
        <span className="text-white/70 text-sm">
          {fileName || t("common.noFileChosen")}
        </span>
      </div>
    </div>
  );
}

export default FileUpload;
