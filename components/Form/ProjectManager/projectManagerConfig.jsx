// config/forms/projectManagerConfig.js

export const projectManagerConfig = {
  title: "forms.projectManager.title",
  subtitle: "forms.projectManager.subtitle",
  hashtag: "forms.projectManager.hashtag",
  submitButton: "forms.projectManager.submitButton",

  steps: [
    {
      title: "forms.projectManager.steps.step1",
      grid: "grid-cols-1 md:grid-cols-2",
      fields: [
        {
          name: "fullName",
          label: "forms.projectManager.fields.fullName",
          required: true,
        },
        {
          name: "location",
          label: "forms.projectManager.fields.location",
          required: true,
        },
        {
          name: "whatsapp",
          type: "number",
          label: "forms.projectManager.fields.whatsapp",
          required: true,
        },
        {
          name: "email",
          label: "forms.projectManager.fields.email",
          type: "email",
          required: true,
        },
        {
          name: "dob",
          label: "forms.projectManager.fields.dob",
          type: "date",
          required: true,
        },
        {
          name: "languages",
          label: "forms.projectManager.fields.languages",
          required: true,
        },
        { name: "linkedin", label: "forms.projectManager.fields.linkedin" },
      ],
    },
    {
      title: "forms.projectManager.steps.step2",
      fields: [
        {
          name: "pmYears",
          type: "number",
          label: "forms.projectManager.fields.pmYears",
          required: true,
        },
        {
          name: "industries",
          label: "forms.projectManager.fields.industries",
          required: true,
        },
        {
          name: "largeProject",
          label: "forms.projectManager.fields.largeProject",
          required: true,
        },
        {
          name: "teamSizeManaged",
          label: "forms.projectManager.fields.teamSizeManaged",
          required: true,
        },
        {
          name: "toolsUsed",
          label: "forms.projectManager.fields.toolsUsed",
          required: true,
        },
        {
          name: "renewableExperience",
          label: "forms.projectManager.fields.renewableExperience",
          required: true,
        },
        {
          name: "education",
          label: "forms.projectManager.fields.education",
          required: true,
        },
        {
          type: "file",
          name: "certificatesFile",
          label: "forms.projectManager.fields.certificatesFile",
          required: true,
          fullWidth: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step3",
      fields: [
        {
          name: "teamAlignment",
          label: "forms.projectManager.fields.teamAlignment",
          required: true,
        },
        {
          name: "conflictResolution",
          label: "forms.projectManager.fields.conflictResolution",
          required: true,
        },
        {
          name: "clientCommunication",
          label: "forms.projectManager.fields.clientCommunication",
          required: true,
        },
        {
          name: "leadershipStyle",
          type: "tags",
          placeholder: "common.tagPlaceholder",
          label: "forms.projectManager.fields.leadershipStyle",
          required: true,
        },
        {
          name: "balanceSpeedSafety",
          label: "forms.projectManager.fields.balanceSpeedSafety",
          required: true,
        },
        {
          name: "motivationBeyondDeadlines",
          label: "forms.projectManager.fields.motivationBeyondDeadlines",
          required: true,
        },
        {
          name: "turnaroundStory",
          label: "forms.projectManager.fields.turnaroundStory",
          required: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step4",
      fields: [
        {
          name: "profitabilityTracking",
          label: "forms.projectManager.fields.profitabilityTracking",
          required: true,
        },
        {
          name: "lessonsLearned",
          label: "forms.projectManager.fields.lessonsLearned",
          required: true,
        },
        {
          name: "processImprovement",
          label: "forms.projectManager.fields.processImprovement",
          required: true,
        },
        {
          name: "multiProjectCoordination",
          label: "forms.projectManager.fields.multiProjectCoordination",
          required: true,
        },
        {
          name: "projectHealthIndicators",
          label: "forms.projectManager.fields.projectHealthIndicators",
          required: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step5",
      fields: [
        {
          name: "whyAncestro",
          label: "forms.projectManager.fields.whyAncestro",
          required: true,
        },
        {
          name: "ancestralGridMeaning",
          label: "forms.projectManager.fields.ancestralGridMeaning",
          required: true,
        },
        {
          name: "countryTransformation",
          label: "forms.projectManager.fields.countryTransformation",
          required: true,
        },
        {
          name: "resonanceTriangle",
          label: "forms.projectManager.fields.resonanceTriangle",
          required: true,
        },
        {
          name: "threeYearGoals",
          label: "forms.projectManager.fields.threeYearGoals",
          required: true,
        },
        {
          name: "successDefinition",
          label: "forms.projectManager.fields.successDefinition",
          required: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step6",
      sectionTitle: "forms.projectManager.sections.lifestyleMindset",
      fields: [
        {
          name: "selfDiscipline",
          type: "drop-down",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.projectManager.fields.selfDiscipline",
          required: true,
        },
        {
          name: "dailyHabits",
          label: "forms.projectManager.fields.dailyHabits",
          required: true,
        },
        {
          name: "habitToImprove",
          label: "forms.projectManager.fields.habitToImprove",
          required: true,
        },
        {
          name: "handlePressure",
          label: "forms.projectManager.fields.handlePressure",
          required: true,
        },
        {
          name: "mindfulness",
          label: "forms.projectManager.fields.mindfulness",
          required: true,
        },
        {
          name: "internalDialogue",
          label: "forms.projectManager.fields.internalDialogue",
          required: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step7",
      sectionTitle: "forms.projectManager.sections.motivationPurpose",
      fields: [
        {
          name: "currentLimitation",
          label: "forms.projectManager.fields.currentLimitation",
          required: true,
        },
        {
          name: "freedomFrustration",
          label: "forms.projectManager.fields.freedomFrustration",
          required: true,
        },
        {
          name: "workThatEnergizes",
          label: "forms.projectManager.fields.workThatEnergizes",
          required: true,
        },
        {
          name: "whyHealthPurposeOrg",
          label: "forms.projectManager.fields.whyHealthPurposeOrg",
          required: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step8",
      sectionTitle: "forms.projectManager.sections.personalityComm",
      fields: [
        {
          name: "energyType",
          label: "forms.projectManager.fields.energyType",
          required: true,
        },
        {
          name: "publicSpeaking",
          type: "drop-down",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.projectManager.fields.publicSpeaking",
          required: true,
        },
        {
          name: "learningOpenness",
          label: "forms.projectManager.fields.learningOpenness",
          required: true,
        },
        {
          name: "structureVsAutonomy",
          label: "forms.projectManager.fields.structureVsAutonomy",
          required: true,
        },
        {
          name: "bestEnvironment",
          label: "forms.projectManager.fields.bestEnvironment",
          required: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step9",
      sectionTitle: "forms.projectManager.sections.growthCulture",
      fields: [
        {
          name: "spiritualTeam",
          label: "forms.projectManager.fields.spiritualTeam",
          required: true,
        },
        {
          name: "physicalWellbeing",
          label: "forms.projectManager.fields.physicalWellbeing",
          required: true,
        },
        {
          name: "personalGrowth",
          label: "forms.projectManager.fields.personalGrowth",
          required: true,
        },
        {
          name: "fitnessSupport",
          label: "forms.projectManager.fields.fitnessSupport",
          required: true,
        },
        {
          name: "fitnessChallenge",
          label: "forms.projectManager.fields.fitnessChallenge",
          required: true,
        },
        {
          type: "file",
          name: "personalPhoto",
          label: "forms.projectManager.fields.personalPhoto",
          required: false,
          fullWidth: true,
        },
      ],
    },
    {
      title: "forms.projectManager.steps.step10",
      fields: [
        {
          type: "file",
          name: "cvFile",
          label: "forms.projectManager.fields.cvFile",
          required: true,
        },
        {
          type: "file",
          name: "videoFile",
          label: "forms.projectManager.fields.videoFile",
          accept: "video/*",
          required: false,
        },
        {
          type: "radio",
          name: "fullTimeAvailability",
          label: "forms.projectManager.fields.fullTimeAvailability",
          options: ["YES", "NO"],
          required: true,
        },
        {
          type: "radio",
          name: "trainingCommitment",
          label: "forms.projectManager.fields.trainingCommitment",
          options: ["YES", "NO"],
          required: true,
        },
      ],
    },
  ],

  thanks: {
    text1: "forms.projectManager.thanks.text1",
    text2: "forms.projectManager.thanks.text2",
  },
};
