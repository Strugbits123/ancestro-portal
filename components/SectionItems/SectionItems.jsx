"use client";
import React, { useState } from "react";
import image1 from "../../public/images/sectionItem1.png";
import image2 from "../../public/images/sectionItem2.png";
import image3 from "../../public/images/sectionItem3.png";
import image4 from "../../public/images/sectionItem4.png";
import image5 from "../../public/images/sectionItem5.png";
import image6 from "../../public/images/sectionItem6.png";
import Button from "../common/Button/Button";
import SalesRepresentativeForm from "../Form/SalesRepresentative/SalesRepresentativeForm";
import InstallerForm from "../Form/Installer/InstallerForm";
import ProjectManagerForm from "../Form/ProjectManager/ProjectManagerForm";
import CreditAnalystForm from "../Form/CreditAnalyst/CreditAnalystForm";
import FinancialAnalystForm from "../Form/FinancialAnalyst/FinancialAnalystForm";
import MarketingCoordinatorForm from "../Form/MarketingCoordinator/MarketingCoordinatorForm";
import { useTranslation } from "react-i18next";

const roleKeys = [
  "salesRepresentative",
  "installers",
  "projectManagers",
  "creditAnalysts",
  "financialAnalysts",
  "marketingCoordinator",
];

const images = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  image6.src,
];

// Map role keys to their respective form components
const formComponents = {
  salesRepresentative: SalesRepresentativeForm,
  installers: InstallerForm,
  projectManagers: ProjectManagerForm,
  creditAnalysts: CreditAnalystForm,
  financialAnalysts: FinancialAnalystForm,
  marketingCoordinator: MarketingCoordinatorForm,
};

function SectionItems() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null); // Track which role's form to show

  const openModal = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRole(null);
  };

  // Get the correct form component
  const ActiveForm = selectedRole ? formComponents[selectedRole] : null;

  return (
    <section id="job-application-section" className="w-full bg-black">
      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-20 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-y-12 lg:gap-y-40">
          {roleKeys.map((key, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={key}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20 xl:gap-28`}
              >
                {/* Image */}
                <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[568px] flex-shrink-0">
                  <div className="relative w-full aspect-[568/534] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={images[index]}
                      alt={t(`rolesSection.${key}.heading`)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left max-w-[686px]">
                  <h2 className="font-helvetica font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight text-white mb-6 lg:mb-8">
                    {t(`rolesSection.${key}.heading`)}
                  </h2>

                  <div className="space-y-5 lg:space-y-6">
                    {[1, 2, 3, 4, 5, 6].map((n) => {
                      const text = t(`rolesSection.${key}.p${n}`);
                      if (!text || text.includes("rolesSection.")) return null;
                      return (
                        <p
                          key={n}
                          className="font-helvetica font-normal text-base sm:text-lg lg:text-[18px] leading-[1.55] lg:leading-[24px] text-white/90"
                        >
                          {text}
                        </p>
                      );
                    })}
                  </div>

                  <Button
                    text={t("rolesSection.applyButton")}
                    onClick={() => openModal(key)} // Pass the role key
                    classes="mt-[20px]"
                    textClasses="font-haas font-bold !text-[#F8B03B] text-[15px] mt-[10px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conditionally render the correct form based on selectedRole */}
      {ActiveForm && <ActiveForm isOpen={modalOpen} onClose={closeModal} />}
    </section>
  );
}

export default SectionItems;
