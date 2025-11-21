import { salesRepConfig } from "./salesRepConfig";
import FormBuilder from "../FormBuilder";
import { useTranslation } from "react-i18next";

export default function SalesRepModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  return (
    <FormBuilder
    text1='forms.salesRepresentative.text1'
    text2='forms.salesRepresentative.text2'
      isOpen={isOpen}
      onClose={onClose}
      config={salesRepConfig}
      position="Sales Representative"
    />
  );
}
