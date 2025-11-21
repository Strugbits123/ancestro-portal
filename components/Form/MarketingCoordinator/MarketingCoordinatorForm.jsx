import { marketingCoordinatorConfig } from "./marketingCoordinatorConfig";
import FormBuilder from "../FormBuilder"; // a generalized form component

export default function MarketingCoordinatorModal({ isOpen, onClose }) {
  return (
    <FormBuilder
    text1={"You are the voice that connects technology to humanity."}
    text2={"Every post, campaign, and event you coordinate carries the light of Ancestro into homes and hearts."}
      isOpen={isOpen}
      onClose={onClose}
      config={marketingCoordinatorConfig} // pass the config here
      position="Marketing Coordinator"
    />
  );
}
