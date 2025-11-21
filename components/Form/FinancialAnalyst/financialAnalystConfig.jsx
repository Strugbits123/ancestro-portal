export const financialAnalystConfig = {
  title: "forms.financialAnalyst.title",
  subtitle: "forms.financialAnalyst.subtitle",
  hashtag: "forms.financialAnalyst.hashtag",

  steps: [
    {
      title: "forms.financialAnalyst.steps.step1",
      grid: "grid-cols-2",
      fields: [
        {
          name: "fullName",
          label: "forms.financialAnalyst.fields.fullName",
          required: true,
        },
        {
          name: "location",
          label: "forms.financialAnalyst.fields.location",
          required: true,
        },
        {
          name: "whatsapp",
          label: "forms.financialAnalyst.fields.whatsapp",
          required: true,
        },
        {
          name: "email",
          label: "forms.financialAnalyst.fields.email",
          type: "email",
          required: true,
        },
        {
          name: "dob",
          label: "forms.financialAnalyst.fields.dob",
          type: "date",
          required: true,
        },
        {
          name: "languages",
          label: "forms.financialAnalyst.fields.languages",
          required: true,
        },
        {
          name: "linkedin",
          label: "forms.financialAnalyst.fields.linkedin",
          required: false,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step2",
      grid: "grid-cols-1 ",
      fields: [
        {
          name: "education",
          label: "forms.financialAnalyst.fields.education",
          required: true,
        },
        {
          type: "file",
          name: "certificationsFile",
          label: "forms.financialAnalyst.fields.certifications",
          required: false,
        },
        {
          name: "yearsExperience",
          label: "forms.financialAnalyst.fields.yearsExperience",
          required: true,
        },
        {
          name: "renewableExperience",
          label: "forms.financialAnalyst.fields.renewableExperience",
          required: true,
        },
        {
          type: "file",
          name: "cvFile",
          label: "forms.financialAnalyst.fields.uploadCV",
          required: true,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step3",
      fields: [
        {
          name: "softwareTools",
          label: "forms.financialAnalyst.fields.softwareTools",
          required: true,
        },
        {
          name: "modelInfluence",
          label: "forms.financialAnalyst.fields.modelInfluence",
          required: true,
        },
        {
          name: "cashFlowApproach",
          label: "forms.financialAnalyst.fields.cashFlowApproach",
          required: true,
        },
        {
          name: "profitabilityKPIs",
          label: "forms.financialAnalyst.fields.profitabilityKPIs",
          required: true,
        },
        {
          name: "sensitivityAnalysis",
          label: "forms.financialAnalyst.fields.sensitivityAnalysis",
          required: true,
        },
        {
          name: "intlVariables",
          label: "forms.financialAnalyst.fields.intlVariables",
          required: true,
        },
        {
          name: "forecastingExperience",
          label: "forms.financialAnalyst.fields.forecastingExperience",
          required: true,
        },
        {
          name: "dataIntegrity",
          label: "forms.financialAnalyst.fields.dataIntegrity",
          required: true,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step4",
      fields: [
        {
          name: "investorReports",
          label: "forms.financialAnalyst.fields.investorReports",
          required: true,
        },
        {
          name: "communicationStyle",
          label: "forms.financialAnalyst.fields.communicationStyle",
          required: true,
        },
        {
          name: "documentationType",
          label: "forms.financialAnalyst.fields.documentationType",
          required: true,
        },
        {
          name: "hiddenOpportunity",
          label: "forms.financialAnalyst.fields.hiddenOpportunity",
          required: true,
        },
        {
          name: "profitVsImpact",
          label: "forms.financialAnalyst.fields.profitVsImpact",
          required: true,
        },
        {
          name: "projectFinancing",
          label: "forms.financialAnalyst.fields.projectFinancing",
          required: true,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step5",
      sectionTitle: "forms.financialAnalyst.sections.visionPurpose",
      fields: [
        {
          name: "whyAncestro",
          label: "forms.financialAnalyst.fields.whyAncestro",
          required: true,
        },
        {
          name: "latamTransformation",
          label: "forms.financialAnalyst.fields.latamTransformation",
          required: true,
        },
        {
          name: "gridExcitement",
          label: "forms.financialAnalyst.fields.gridExcitement",
          required: true,
        },
        {
          name: "financeTechSpirit",
          label: "forms.financialAnalyst.fields.financeTechSpirit",
          required: true,
        },
        {
          name: "roleInMission",
          label: "forms.financialAnalyst.fields.roleInMission",
          required: true,
        },
        {
          name: "longTermGoals",
          label: "forms.financialAnalyst.fields.longTermGoals",
          required: true,
        },
        {
          name: "startAvailability",
          label: "forms.financialAnalyst.fields.startAvailability",
          required: true,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step6",
      sectionTitle: "forms.financialAnalyst.sections.lifestyleMindset",
      fields: [
        {
          name: "selfDiscipline",
          label: "forms.financialAnalyst.fields.selfDiscipline",
          required: true,
        },
        {
          name: "dailyHabits",
          label: "forms.financialAnalyst.fields.dailyHabits",
          required: true,
        },
        {
          name: "habitImproving",
          label: "forms.financialAnalyst.fields.habitImproving",
          required: true,
        },
        {
          name: "mentalFatigue",
          label: "forms.financialAnalyst.fields.mentalFatigue",
          required: true,
        },
        {
          name: "mindfulnessPractice",
          label: "forms.financialAnalyst.fields.mindfulnessPractice",
          required: true,
        },
        {
          name: "selfTalkUnderPressure",
          label: "forms.financialAnalyst.fields.selfTalkUnderPressure",
          required: true,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step7",
      sectionTitle: "forms.financialAnalyst.sections.motivationPurpose",
      fields: [
        {
          name: "currentBlock",
          label: "forms.financialAnalyst.fields.currentBlock",
          required: true,
        },
        {
          name: "traditionalFinanceFrustration",
          label: "forms.financialAnalyst.fields.traditionalFinanceFrustration",
          required: true,
        },
        {
          name: "satisfyingWork",
          label: "forms.financialAnalyst.fields.satisfyingWork",
          required: true,
        },
        {
          name: "whyConsciousFinance",
          label: "forms.financialAnalyst.fields.whyConsciousFinance",
          required: true,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step8",
      sectionTitle: "forms.financialAnalyst.sections.personalityComm",
      fields: [
        {
          name: "energyType",
          label: "forms.financialAnalyst.fields.energyType",
          required: true,
        },
        {
          name: "presentationComfort",
          label: "forms.financialAnalyst.fields.presentationComfort",
          required: true,
        },
        {
          name: "learningOpenness",
          label: "forms.financialAnalyst.fields.learningOpenness",
          required: true,
        },
        {
          name: "independenceVsTeam",
          label: "forms.financialAnalyst.fields.independenceVsTeam",
          required: true,
        },
        {
          name: "idealEnvironment",
          label: "forms.financialAnalyst.fields.idealEnvironment",
          required: true,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step9",
      sectionTitle: "forms.financialAnalyst.sections.growthCulture",
      fields: [
        {
          name: "spiritualTeamValue",
          label: "forms.financialAnalyst.fields.spiritualTeamValue",
          required: true,
        },
        {
          name: "energyMaintenance",
          label: "forms.financialAnalyst.fields.energyMaintenance",
          required: true,
        },
        {
          name: "personalGrowth",
          label: "forms.financialAnalyst.fields.personalGrowth",
          required: true,
        },
        {
          name: "fitnessSupport",
          label: "forms.financialAnalyst.fields.fitnessSupport",
          required: true,
        },
        {
          name: "fitnessChallenge",
          label: "forms.financialAnalyst.fields.fitnessChallenge",
          required: true,
        },
        {
          type: "file",
          name: "personalPhotoFile",
          label: "forms.financialAnalyst.fields.personalPhoto",
          required: false,
        },
      ],
    },
    {
      title: "forms.financialAnalyst.steps.step10",
      fields: [
        {
          type: "file",
          name: "finalCvFile",
          label: "forms.financialAnalyst.fields.finalUploadCV",
          required: true,
        },
        {
          type: "file",
          name: "videoFile",
          label: "forms.financialAnalyst.fields.uploadVideo",
          required: false,
          accept: "video/*",
        },
        {
          type: "radio",
          name: "fullTimeAvailability",
          label: "forms.financialAnalyst.fields.fullTimeAvailability",
          options: ["common.yes", "common.no"],
          required: true,
        },
        {
          type: "radio",
          name: "trainingCommitment",
          label: "forms.financialAnalyst.fields.trainingCommitment",
          options: ["common.yes", "common.no"],
          required: true,
        },
      ],
    },
  ],

  thanks: {
    text1: "forms.financialAnalyst.thanks.text1",
    text2: "forms.financialAnalyst.thanks.text2",
  },
};
