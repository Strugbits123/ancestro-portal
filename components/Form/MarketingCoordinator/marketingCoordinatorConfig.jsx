// config/forms/marketingCoordinatorConfig.js
export const marketingCoordinatorConfig = {
  title: "forms.marketingCoordinator.title",
  subtitle: "forms.marketingCoordinator.subtitle",
  hashtag: "forms.marketingCoordinator.hashtag",
  submitButton: "forms.marketingCoordinator.submitButton",

  steps: [
    {
      title: "forms.marketingCoordinator.steps.step1",
      grid: "grid-cols-1 md:grid-cols-2",
      fields: [
        {
          name: "fullName",
          label: "forms.marketingCoordinator.fields.fullName",
          required: true,
        },
        {
          name: "location",
          type: "location",
          label: "forms.marketingCoordinator.fields.location",
          required: true,
        },
        {
          name: "whatsapp",
          label: "forms.marketingCoordinator.fields.whatsapp",
          type: "number",
          required: true,
        },
        {
          name: "email",
          label: "forms.marketingCoordinator.fields.email",
          type: "email",
          required: true,
        },
        {
          name: "dob",
          label: "forms.marketingCoordinator.fields.dob",
          type: "date",
          required: true,
        },
        {
          name: "languages",
          label: "forms.marketingCoordinator.fields.languages",
          required: true,
        },
        {
          name: "linkedin",
          label: "forms.marketingCoordinator.fields.linkedin",
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step2",
      fields: [
        {
          name: "education",
          label: "forms.marketingCoordinator.fields.education",
          required: true,
        },
        {
          name: "yearsExperience",
          type: "number",
          label: "forms.marketingCoordinator.fields.yearsExperience",
          required: true,
        },
        {
          name: "digitalCampaigns",
          label: "forms.marketingCoordinator.fields.digitalCampaigns",
          required: true,
        },
        {
          name: "successfulCampaign",
          label: "forms.marketingCoordinator.fields.successfulCampaign",
          required: true,
        },
        {
          name: "eventsExperience",
          label: "forms.marketingCoordinator.fields.eventsExperience",
          required: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step3",
      fields: [
        {
          name: "marketingTools",
          label: "forms.marketingCoordinator.fields.marketingTools",
          required: true,
        },
        {
          name: "localAdaptation",
          label: "forms.marketingCoordinator.fields.localAdaptation",
          required: true,
        },
        {
          name: "campaignMetrics",
          label: "forms.marketingCoordinator.fields.campaignMetrics",
          required: true,
        },
        {
          name: "salesCoordination",
          type: "rating",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.marketingCoordinator.fields.salesCoordination",
          required: true,
        },
        {
          name: "eventComfort",
          type: "rating",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.marketingCoordinator.fields.eventComfort",
          required: true,
        },
        {
          name: "multiProjectOrg",
          label: "forms.marketingCoordinator.fields.multiProjectOrg",
          required: true,
        },
        {
          name: "excitingProjects",
          label: "forms.marketingCoordinator.fields.excitingProjects",
          required: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step4",
      fields: [
        {
          name: "hybridWork",
          label: "forms.marketingCoordinator.fields.hybridWork",
          required: true,
        },
        {
          name: "budgetManagement",
          label: "forms.marketingCoordinator.fields.budgetManagement",
          required: true,
        },
        {
          name: "underperformingCampaign",
          label: "forms.marketingCoordinator.fields.underperformingCampaign",
          required: true,
        },
        {
          name: "salesCoordinationProcess",
          label: "forms.marketingCoordinator.fields.salesCoordinationProcess",
          required: true,
        },
        {
          name: "brandAwarenessStrategy",
          label: "forms.marketingCoordinator.fields.brandAwarenessStrategy",
          required: true,
        },
        {
          name: "salesMotivation",
          label: "forms.marketingCoordinator.fields.salesMotivation",
          required: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step5",
      fields: [
        {
          name: "whyAncestro",
          label: "forms.marketingCoordinator.fields.whyAncestro",
          required: true,
        },
        {
          name: "bridgingVisionVillage",
          label: "forms.marketingCoordinator.fields.bridgingVisionVillage",
          required: true,
        },
        {
          name: "marketingForRenewables",
          label: "forms.marketingCoordinator.fields.marketingForRenewables",
          required: true,
        },
        {
          name: "spiritualityBusinessPhilanthropy",
          label:
            "forms.marketingCoordinator.fields.spiritualityBusinessPhilanthropy",
          required: true,
        },
        {
          name: "incomeGoals",
          label: "forms.marketingCoordinator.fields.incomeGoals",
          required: true,
        },
        {
          name: "successInOneYear",
          label: "forms.marketingCoordinator.fields.successInOneYear",
          required: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step6",
      sectionTitle: "forms.marketingCoordinator.sections.lifestyleMindset",
      fields: [
        {
          name: "selfDiscipline",
          type: "rating",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.marketingCoordinator.fields.selfDiscipline",
          required: true,
        },
        {
          name: "dailyHabits",
          type: "drop-down",  
          options: ["common.focused","common.grounded"],
          label: "forms.marketingCoordinator.fields.dailyHabits",
          required: true,
        },
        {
          name: "habitToImprove",
          label: "forms.marketingCoordinator.fields.habitToImprove",
          required: true,
        },
        {
          name: "creativeBurnout",
          label: "forms.marketingCoordinator.fields.creativeBurnout",
          required: true,
        },
        {
          name: "mindfulness",
          label: "forms.marketingCoordinator.fields.mindfulness",
          required: true,
        },
        {
          name: "stressSelfTalk",
          label: "forms.marketingCoordinator.fields.stressSelfTalk",
          required: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step7",
      sectionTitle: "forms.marketingCoordinator.sections.motivationPurpose",
      fields: [
        {
          name: "currentLimitation",
          label: "forms.marketingCoordinator.fields.currentLimitation",
          required: true,
        },
        {
          name: "freedomFrustration",
          label: "forms.marketingCoordinator.fields.freedomFrustration",
          required: true,
        },
        {
          name: "workThatEnergizes",
          label: "forms.marketingCoordinator.fields.workThatEnergizes",
          required: true,
        },
        {
          name: "whyHealthPurposeOrg",
          label: "forms.marketingCoordinator.fields.whyHealthPurposeOrg",
          required: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step8",
      sectionTitle: "forms.marketingCoordinator.sections.personalityComm",
      fields: [
        {
          name: "energyType",
          label: "forms.marketingCoordinator.fields.energyType",
          required: true,
        },
        {
          name: "presentationComfort",
          type: "rating",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.marketingCoordinator.fields.presentationComfort",
          required: true,
        },
        {
          name: "learningOpenness",
          label: "forms.marketingCoordinator.fields.learningOpenness",
          required: true,
        },
        {
          name: "structureVsFreedom",
          label: "forms.marketingCoordinator.fields.structureVsFreedom",
          required: true,
        },
        {
          name: "bestEnvironment",
          label: "forms.marketingCoordinator.fields.bestEnvironment",
          required: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step9",
      sectionTitle: "forms.marketingCoordinator.sections.growthCulture",
      fields: [
        {
          name: "spiritualTeamValue",
          label: "forms.marketingCoordinator.fields.spiritualTeamValue",
          required: true,
        },
        {
          name: "physicalWellbeing",
          label: "forms.marketingCoordinator.fields.physicalWellbeing",
          required: true,
        },
        {
          name: "personalGrowth",
          label: "forms.marketingCoordinator.fields.personalGrowth",
          required: true,
        },
        {
          name: "fitnessSupport",
          label: "forms.marketingCoordinator.fields.fitnessSupport",
          required: true,
        },
        {
          name: "fitnessChallenge",
          label: "forms.marketingCoordinator.fields.fitnessChallenge",
          required: true,
        },
        {
          type: "file",
          name: "personalPhoto",
          label: "forms.marketingCoordinator.fields.personalPhoto",
          required: false,
          fullWidth: true,
        },
      ],
    },
    {
      title: "forms.marketingCoordinator.steps.step10",
      fields: [
        {
          type: "file",
          name: "cvFile",
          label: "forms.marketingCoordinator.fields.cvFile",
          required: true,
        },
        {
          type: "file",
          name: "videoFile",
          label: "forms.marketingCoordinator.fields.videoFile",
          accept: "video/*",
          required: false,
        },
        {
          type: "radio",
          name: "fullTimeAvailability",
          label: "forms.marketingCoordinator.fields.fullTimeAvailability",
          options: ["YES", "NO"],
          required: true,
        },
        {
          type: "radio",
          name: "trainingCommitment",
          label: "forms.marketingCoordinator.fields.trainingCommitment",
          options: ["YES", "NO"],
          required: true,
        },
      ],
    },
  ],

  thanks: {
    text1: "forms.marketingCoordinator.thanks.text1",
    text2: "forms.marketingCoordinator.thanks.text2",
  },
};
