export const creditAnalystConfig = {
  title: "forms.creditAnalyst.title",
  subtitle: "forms.creditAnalyst.subtitle",
  hashtag: "forms.creditAnalyst.hashtag",

  steps: [
    {
      title: "forms.creditAnalyst.steps.step1",
      grid: "grid-cols-2",
      fields: [
        {
          name: "fullName",
          label: "forms.creditAnalyst.fields.fullName",
          required: true,
        },
        {
          name: "location",
          label: "forms.creditAnalyst.fields.location",
          required: true,
        },
        {
          name: "whatsapp",
          label: "forms.creditAnalyst.fields.whatsapp",
          required: true,
        },
        {
          name: "email",
          label: "forms.creditAnalyst.fields.email",
          type: "email",
          required: true,
        },
        {
          name: "dob",
          label: "forms.creditAnalyst.fields.dob",
          type: "date",
          required: true,
        },
        {
          name: "languages",
          label: "forms.creditAnalyst.fields.languages",
          required: true,
        },
        {
          name: "linkedin",
          label: "forms.creditAnalyst.fields.linkedin",
          required: false,
        }, // assuming not required
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step2",
      grid: "grid-cols-1 ", // flexible layout
      fields: [
        {
          name: "education",
          label: "forms.creditAnalyst.fields.education",
          required: true,
        },
        {
          type: "file",
          name: "certificationsFile",
          label: "forms.creditAnalyst.fields.certifications",
          required: false,
        },
        {
          name: "creditYears",
          label: "forms.creditAnalyst.fields.creditYears",
          required: true,
        },
        {
          name: "industriesAnalyzed",
          label: "forms.creditAnalyst.fields.industriesAnalyzed",
          required: true,
        },
        {
          name: "greenLendingExperience",
          label: "forms.creditAnalyst.fields.greenLendingExperience",
          required: true,
        },
        {
          type: "file",
          name: "cvFile",
          label: "forms.creditAnalyst.fields.uploadCV",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step3",
      fields: [
        {
          name: "creditProcess",
          label: "forms.creditAnalyst.fields.creditProcess",
          required: true,
        },
        {
          name: "keyMetrics",
          label: "forms.creditAnalyst.fields.keyMetrics",
          required: true,
        },
        {
          name: "riskVsOpportunity",
          label: "forms.creditAnalyst.fields.riskVsOpportunity",
          required: true,
        },
        {
          name: "softwareUsed",
          label: "forms.creditAnalyst.fields.softwareUsed",
          required: true,
        },
        {
          name: "fraudDetection",
          label: "forms.creditAnalyst.fields.fraudDetection",
          required: true,
        },
        {
          name: "judgmentUnderPressure",
          label: "forms.creditAnalyst.fields.judgmentUnderPressure",
          required: true,
        },
        {
          name: "documentationProcess",
          label: "forms.creditAnalyst.fields.documentationProcess",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step4",
      fields: [
        {
          name: "profitabilityTracking",
          label: "forms.creditAnalyst.fields.profitabilityTracking",
          required: true,
        },
        {
          name: "lessonsLearned",
          label: "forms.creditAnalyst.fields.lessonsLearned",
          required: true,
        },
        {
          name: "processImprovement",
          label: "forms.creditAnalyst.fields.processImprovement",
          required: true,
        },
        {
          name: "multiProjectCoordination",
          label: "forms.creditAnalyst.fields.multiProjectCoordination",
          required: true,
        },
        {
          name: "healthIndicators",
          label: "forms.creditAnalyst.fields.healthIndicators",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step5",
      fields: [
        {
          name: "financialIntegrity",
          label: "forms.creditAnalyst.fields.financialIntegrity",
          required: true,
        },
        {
          name: "fairnessVsProtection",
          label: "forms.creditAnalyst.fields.fairnessVsProtection",
          required: true,
        },
        {
          name: "pressureStory",
          label: "forms.creditAnalyst.fields.pressureStory",
          required: true,
        },
        {
          name: "latamChallenge",
          label: "forms.creditAnalyst.fields.latamChallenge",
          required: true,
        },
        {
          name: "preventedLoss",
          label: "forms.creditAnalyst.fields.preventedLoss",
          required: true,
        },
        {
          name: "personalValues",
          label: "forms.creditAnalyst.fields.personalValues",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step6",
      sectionTitle: "forms.creditAnalyst.sections.visionPurpose", // optional: display above fields
      fields: [
        {
          name: "whyAncestro",
          label: "forms.creditAnalyst.fields.whyAncestro",
          required: true,
        },
        {
          name: "ancestralGrid",
          label: "forms.creditAnalyst.fields.ancestralGrid",
          required: true,
        },
        {
          name: "economicTransformation",
          label: "forms.creditAnalyst.fields.economicTransformation",
          required: true,
        },
        {
          name: "financeTechSpirit",
          label: "forms.creditAnalyst.fields.financeTechSpirit",
          required: true,
        },
        {
          name: "missionContribution",
          label: "forms.creditAnalyst.fields.missionContribution",
          required: true,
        },
        {
          name: "careerGoals",
          label: "forms.creditAnalyst.fields.careerGoals",
          required: true,
        },
        {
          name: "startDate",
          label: "forms.creditAnalyst.fields.startDate",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step7",
      sectionTitle: "forms.creditAnalyst.sections.lifestyleMindset",
      fields: [
        {
          name: "selfDiscipline",
          label: "forms.creditAnalyst.fields.selfDiscipline",
          required: true,
        },
        {
          name: "dailyHabits",
          label: "forms.creditAnalyst.fields.dailyHabits",
          required: true,
        },
        {
          name: "habitToImprove",
          label: "forms.creditAnalyst.fields.habitToImprove",
          required: true,
        },
        {
          name: "stressHandling",
          label: "forms.creditAnalyst.fields.stressHandling",
          required: true,
        },
        {
          name: "mindfulness",
          label: "forms.creditAnalyst.fields.mindfulness",
          required: true,
        },
        {
          name: "selfTalk",
          label: "forms.creditAnalyst.fields.selfTalk",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step8",
      sectionTitle: "forms.creditAnalyst.sections.motivationPurpose",
      fields: [
        {
          name: "currentLimitation",
          label: "forms.creditAnalyst.fields.currentLimitation",
          required: true,
        },
        {
          name: "financialFreedomFrustration",
          label: "forms.creditAnalyst.fields.financialFreedomFrustration",
          required: true,
        },
        {
          name: "fulfillingWork",
          label: "forms.creditAnalyst.fields.fulfillingWork",
          required: true,
        },
        {
          name: "whyConsciousFinance",
          label: "forms.creditAnalyst.fields.whyConsciousFinance",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step9",
      sectionTitle: "forms.creditAnalyst.sections.personalityComm",
      fields: [
        {
          name: "energyType",
          label: "forms.creditAnalyst.fields.energyType",
          required: true,
        },
        {
          name: "presentationComfort",
          label: "forms.creditAnalyst.fields.presentationComfort",
          required: true,
        },
        {
          name: "criticismResponse",
          label: "forms.creditAnalyst.fields.criticismResponse",
          required: true,
        },
        {
          name: "structureVsAutonomy",
          label: "forms.creditAnalyst.fields.structureVsAutonomy",
          required: true,
        },
        {
          name: "bestEnvironment",
          label: "forms.creditAnalyst.fields.bestEnvironment",
          required: true,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step10",
      sectionTitle: "forms.creditAnalyst.sections.growthCulture",
      fields: [
        {
          name: "spiritualTeamValue",
          label: "forms.creditAnalyst.fields.spiritualTeamValue",
          required: true,
        },
        {
          name: "physicalWellbeing",
          label: "forms.creditAnalyst.fields.physicalWellbeing",
          required: true,
        },
        {
          name: "personalGrowth",
          label: "forms.creditAnalyst.fields.personalGrowth",
          required: true,
        },
        {
          name: "fitnessSupport",
          label: "forms.creditAnalyst.fields.fitnessSupport",
          required: true,
        },
        {
          name: "fitnessChallenge",
          label: "forms.creditAnalyst.fields.fitnessChallenge",
          required: true,
        },
        {
          type: "file",
          name: "personalPhotoFile",
          label: "forms.creditAnalyst.fields.personalPhoto",
          required: false,
        },
      ],
    },
    {
      title: "forms.creditAnalyst.steps.step11",
      fields: [
        {
          type: "file",
          name: "finalCvFile",
          label: "forms.creditAnalyst.fields.finalUploadCV",
          required: true,
        },
        {
          type: "file",
          name: "videoFile",
          label: "forms.creditAnalyst.fields.uploadVideo",
          required: false,
          accept: "video/*",
        },
        {
          type: "radio",
          name: "fullTimeAvailability",
          label: "forms.creditAnalyst.fields.fullTimeAvailability",
          options: ["common.yes", "common.no"],
          required: true,
        },
        {
          type: "radio",
          name: "trainingCommitment",
          label: "forms.creditAnalyst.fields.trainingCommitment",
          options: ["common.yes", "common.no"],
          required: true,
        },
      ],
    },
  ],

  thanks: {
    text1: "forms.creditAnalyst.thanks.text1",
    text2: "forms.creditAnalyst.thanks.text2",
  },
};
