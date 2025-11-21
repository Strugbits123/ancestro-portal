import { installerConfig } from "./installerConfig";
import FormBuilder from "../FormBuilder"; // a generalized form component
import { useTranslation } from "react-i18next";

export default function InstallerModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  return (
    <FormBuilder
      text1={t('forms.installer.text1')}
      text2={t('forms.installer.text2')}
      isOpen={isOpen}
      onClose={onClose}
      config={installerConfig}
      position="Installer"

    />
  );
}
