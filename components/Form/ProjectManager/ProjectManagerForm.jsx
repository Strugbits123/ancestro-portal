import { projectManagerConfig } from "./projectManagerConfig";
import FormBuilder from "../FormBuilder"; // a generalized form component

export default function ProjectManagerModal({ isOpen, onClose }) {
  return (
    <FormBuilder
      text1={"You are the architect of prosperity — translating sunlight into wealth and purpose."}
      text2={"Every model you build helps investors, communities, and the planet thrive together."}
      isOpen={isOpen}
      onClose={onClose}
      config={projectManagerConfig} // pass the config here
      position="Project Manager"
    />
  );
}
