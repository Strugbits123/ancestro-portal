import { useTranslation } from "react-i18next";
import { useId, useState } from "react";

function FileUpload({ label, required = false, onChange, inputRef, accept, error, fieldName }) {
  const { t } = useTranslation();
  const id = useId();
  const [fileName, setFileName] = useState("");
  const handleChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    try {
      // Get signed URL
      const res = await fetch("/api/file-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          field: fieldName, // <-- dynamic now
        }),
      });

      const data = await res.json();
      const uploadURL = data.uploadURL;  // must match backend key
      const fileKey = data.fileKey;
      const objectURL = data.objectURL;

      if (!uploadURL) throw new Error("No signed URL returned");

      // Upload file to S3
      await fetch(uploadURL, {
        method: "PUT",              // ✅ must be PUT
        body: file,
        headers: { "Content-Type": file.type },
      });

      file.objectURL = data.objectURL;
      // Update react-hook-form
      onChange?.({ target: { files: [file], value: fileKey } });
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };


  return (
    <>
      <div className="border-b-2 border-white/40 pb-5">
        <label className="block text-[14px] font-bold uppercase tracking-wider mb-3 opacity-90">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            id={id}
            className="hidden"
            ref={inputRef}
            onChange={handleChange}
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
      {error && (
        // <p className="text-red-400 text-sm mt-1">{error.message || t("common.required")}</p>
        <p className="text-red-500 text-xs mt-1">
          {error.message || t("common.required")}
        </p>
      )}
    </>
  );
}

export default FileUpload;
