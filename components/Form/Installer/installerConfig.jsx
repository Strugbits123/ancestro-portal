export const installerConfig = {
  title: "forms.installer.title",
  subtitle: "forms.installer.subtitle",
  hashtag: "forms.installer.hashtag",
  submitButton: "forms.installer.submitButton",

  steps: [
    {
      title: "forms.installer.steps.step1",
      grid: "grid-cols-1 md:grid-cols-2",
      fields: [
        {
          name: "fullName",
          label: "forms.installer.fields.companyName",
          required: true,
        },
        {
          name: "location",
          type: "location",
          label: "forms.installer.fields.location",
          required: true,
        },
        {
          type: "file",
          name: "businessReg",
          label: "forms.installer.fields.businessReg",
          fullWidth: true,
        },
        { name: "website", label: "forms.installer.fields.website" },
        {
          name: "whatsapp",
          type: "number",
          label: "forms.installer.fields.whatsapp",
          required: true,
        },
        {
          name: "email",
          label: "forms.installer.fields.email",
          type: "email",
          required: true,
        },
        {
          name: "contactPerson",
          type: "number",
          label: "forms.installer.fields.contactPerson",
          required: true,
        },
        {
          name: "yearsInOperation",
          label: "forms.installer.fields.yearsInOperation",
          type: "number",
          required: true,
          fullWidth: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step2",
      fields: [
        {
          name: "systemTypes",
          label: "forms.installer.fields.systemTypes",
          required: true,
        },
        {
          name: "totalProjects",
          label: "forms.installer.fields.totalProjects",
          type: "number",
          required: true,
        },
        {
          name: "avgSystemSize",
          label: "forms.installer.fields.avgSystemSize",
          type: "number",
          required: true,
        },
        {
          name: "teamSize",
          label: "forms.installer.fields.teamSize",
          type: "number",
          required: true,
        },
        {
          name: "certifiedSupervisor",
          type: "drop-down",
          label: "forms.installer.fields.certifiedSupervisor",
          options: ["common.yes", "common.no"],
          required: true,
        },
        {
          name: "equipment",
          label: "forms.installer.fields.equipment",
          required: true,
        },
        {
          name: "brands",
          label: "forms.installer.fields.brands",
          required: true,
        },
        {
          name: "pastWork",
          label: "forms.installer.fields.pastWork",
          required: true,
        },
        {
          name: "serviceRegions",
          label: "forms.installer.fields.serviceRegions",
          required: true,
        },
        {
          name: "regionalTravel",
          label: "forms.installer.fields.regionalTravel",
          options: ["common.yes", "common.no"],
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step3",
      fields: [
        {
          type: "file",
          name: "certificationsFile",
          label: "forms.installer.fields.certificationsFile",
          required: true,
        },
        {
          type: "file",
          name: "pastProjectsFile",
          label: "forms.installer.fields.pastProjectsFile",
          required: true,
        },
        {
          name: "references",
          label: "forms.installer.fields.references",
          required: true,
          placeholder: "1. Juan Pérez – +57 300... | 2. María Gómez – +51...",
        },
        {
          type: "file",
          name: "insuranceFile",
          label: "forms.installer.fields.insuranceFile",
          required: false,
        },
        {
          name: "safetyTraining",
          label: "forms.installer.fields.safetyTraining",
          type: "drop-down",
          options: ["common.yes", "common.no"],
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step4",
      fields: [
        {
          name: "workflow",
          label: "forms.installer.fields.workflow",
          required: true,
        },
        {
          name: "softwareTools",
          label: "forms.installer.fields.softwareTools",
          required: true,
        },
        {
          name: "qualityVerification",
          label: "forms.installer.fields.qualityVerification",
          required: true,
        },
        {
          name: "clientCommunication",
          label: "forms.installer.fields.clientCommunication",
          required: true,
        },
        {
          name: "fieldChallenges",
          label: "forms.installer.fields.fieldChallenges",
          required: true,
        },
        {
          name: "installationTime",
          label: "forms.installer.fields.installationTime",
          required: true,
        },
        {
          name: "maintenanceServices",
          type: "drop-down",
          options: ["common.yes", "common.no"],
          label: "forms.installer.fields.maintenanceServices",
          required: true,
        },
        {
          name: "teamProfessionalism",
          label: "forms.installer.fields.teamProfessionalism",
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step5",
      fields: [
        {
          name: "energyFreedom",
          label: "forms.installer.fields.energyFreedom",
          required: true,
        },
        {
          name: "leadershipStyle",
          label: "forms.installer.fields.leadershipStyle",
          required: true,
        },
        {
          name: "teamMorale",
          label: "forms.installer.fields.teamMorale",
          required: true,
        },
        {
          name: "motivation",
          label: "forms.installer.fields.motivation",
          required: true,
        },
        {
          name: "goodVsGreat",
          label: "forms.installer.fields.goodVsGreat",
          required: true,
        },
        {
          name: "philanthropy",
          label: "forms.installer.fields.philanthropy",
          required: true,
        },
        {
          name: "brandRepresentation",
          type: "drop-down",
          options: ["common.yes", "common.no"],
          label: "forms.installer.fields.brandRepresentation",
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step6",
      fields: [
        {
          name: "whyAncestro",
          label: "forms.installer.fields.whyAncestro",
          required: true,
        },
        {
          name: "latamNetwork",
          label: "forms.installer.fields.latamNetwork",
          required: true,
        },
        {
          name: "futureVision",
          label: "forms.installer.fields.futureVision",
          required: true,
        },
        {
          name: "monthlyCapacity",
          label: "forms.installer.fields.monthlyCapacity",
          required: true,
        },
        {
          name: "partnershipType",
          type: "drop-down",
          options: ["common.subContractor", "common.exclusiveInstaller", "common.regionalEpcPartner"],
          label: "forms.installer.fields.partnershipType",
          required: true,
        },
        {
          name: "ancestroAcademy",
          label: "forms.installer.fields.ancestroAcademy",
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step7",
      sectionTitle: "forms.installer.sections.lifestyleMindset",
      fields: [
        {
          name: "selfDiscipline",
          type: "rating",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.installer.fields.selfDiscipline",
          required: true,
        },
        {
          name: "dailyHabits",
          label: "forms.installer.fields.dailyHabits",
          required: true,
        },
        {
          name: "habitToImprove",
          label: "forms.installer.fields.habitToImprove",
          required: true,
        },
        {
          name: "stressHandling",
          label: "forms.installer.fields.stressHandling",
          required: true,
        },
        {
          name: "mindfulness",
          label: "forms.installer.fields.mindfulness",
          required: true,
        },
        {
          name: "selfTalk",
          label: "forms.installer.fields.selfTalk",
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step8",
      sectionTitle: "forms.installer.sections.motivationPurpose",
      fields: [
        {
          name: "craftImprovement",
          label: "forms.installer.fields.craftImprovement",
          required: true,
        },
        {
          name: "frustrationMoment",
          label: "forms.installer.fields.frustrationMoment1",
          required: true,
        },
        {
          name: "workMotivation",
          label: "forms.installer.fields.frustrationMoment2",
          required: true,
        },
        {
          name: "missionAlignment",
          label: "forms.installer.fields.missionAlignment",
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step9",
      sectionTitle: "forms.installer.sections.personalityComm",
      fields: [
        {
          name: "energyType",
          label: "forms.installer.fields.energyType",
          required: true,
        },
        {
          name: "leadershipComfort",
          type: "rating",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.installer.fields.leadershipComfort",
          required: true,
        },
        {
          name: "learningOpenness",
          label: "forms.installer.fields.learningOpenness",
          required: true,
        },
        {
          name: "communicationPref",
          type: "drop-down",
          options: ["common.voiceNotes", "common.calls", "common.writtenReports"],
          label: "forms.installer.fields.communicationPref",
          required: true,
        },
        {
          name: "bestEnvironment",
          label: "forms.installer.fields.bestEnvironment",
          required: true,
        },
      ],
    },
    {
      title: "forms.installer.steps.step10",
      sectionTitle: "forms.installer.sections.growthCulture",
      fields: [
        {
          name: "teamValues",
          label: "forms.installer.fields.teamValues",
          required: true,
        },
        {
          name: "physicalWellbeing",
          label: "forms.installer.fields.physicalWellbeing",
          required: true,
        },
        {
          name: "personalGrowth",
          label: "forms.installer.fields.personalGrowth",
          required: true,
        },
        {
          name: "fitnessSupport",
          label: "forms.installer.fields.fitnessSupport",
          required: true,
        },
        {
          name: "fitnessChallenge",
          label: "forms.installer.fields.fitnessChallenge",
          required: true,
        },
        {
          type: "file",
          name: "personalPhoto",
          label: "forms.installer.fields.personalPhoto",
          required: false,
        },
      ],
    },
    {
      title: "forms.installer.steps.step11",
      fields: [
        {
          type: "file",
          name: "companyDocsFile",
          label: "forms.installer.fields.companyDocsFile",
          required: true,
        },
        {
          type: "file",
          name: "cvFile",
          label: "forms.installer.fields.cvFile",
          required: true,
        },
        {
          type: "file",
          name: "videoFile",
          label: "forms.installer.fields.videoFile",
          accept: "video/*",
          required: false,
        },
        {
          name: "availabilityConfirmation",
          label: "forms.installer.fields.availabilityConfirmation",
          required: true,
        },
      ],
    },
  ],

  thanks: {
    text1: "forms.installer.thanks.text1",
    text2: "forms.installer.thanks.text2",
  },
};
