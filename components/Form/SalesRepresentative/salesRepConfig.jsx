export const salesRepConfig = {
  title: "forms.salesRepresentative.title",
  subtitle: "forms.salesRepresentative.subtitle",
  hashtag: "forms.salesRepresentative.hashtag",
  steps: [
    {
      title: "forms.salesRepresentative.steps.step1",
      grid: "grid-cols-1 md:grid-cols-2",
      fields: [
        {
          name: "fullName",
          label: "forms.salesRepresentative.fields.fullName",
          required: true,
        },
        {
          name: "location",
          label: "forms.salesRepresentative.fields.location",
          required: true,
        },
        {
          name: "whatsapp",
          type: "number",
          label: "forms.salesRepresentative.fields.whatsapp",
          required: true,
        },
        {
          name: "email",
          label: "forms.salesRepresentative.fields.email",
          required: true,
          type: "email",
        },
        {
          name: "dob",
          label: "forms.salesRepresentative.fields.dob",
          required: true,
          type: "date",
        },
        {
          name: "languages",
          label: "forms.salesRepresentative.fields.languages",
          required: true,
        },
        {
          name: "socialProfile",
          label: "forms.salesRepresentative.fields.socialProfile",
          required: true,
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step2",
      fields: [
        {
          name: "education",
          label: "forms.salesRepresentative.fields.education",
          required: true,
        },
        {
          name: "salesExperience",
          label: "forms.salesRepresentative.fields.salesExperience",
          required: true,
        },
        {
          name: "renewableExperience",
          label: "forms.salesRepresentative.fields.renewableExperience",
          required: true,
        },
        {
          name: "bestSalesStory",
          label: "forms.salesRepresentative.fields.bestSalesStory",
          required: true,
        },
        {
          name: "currentWorkStatus",
          label: "forms.salesRepresentative.fields.currentWorkStatus",
          required: true,
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step3",
      fields: [
        {
          name: "buildTrust",
          label: "forms.salesRepresentative.fields.buildTrust",
          required: true,
        },
        {
          name: "commStyle",
          type: "tags",
          placeholder:"common.tagPlaceholder",
          label: "forms.salesRepresentative.fields.commStyle",
          required: true,
        },
        {
          name: "motivationRenewable",
          label: "forms.salesRepresentative.fields.motivationRenewable",
          required: true,
        },
        {
          name: "cameraComfort",
          type: "drop-down",
          label: "forms.salesRepresentative.fields.cameraComfort",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          required: true,
        },
        {
          name: "crmComfort",
          label: "forms.salesRepresentative.fields.crmComfort",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          type: "drop-down",
          required: true,
        },
        {
          name: "strongMarkets",
          label: "forms.salesRepresentative.fields.strongMarkets",
          required: true,
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step4",
      fields: [
        {
          name: "remoteWork",
          label: "forms.salesRepresentative.fields.remoteWork",
          required: true,
        },
        {
          name: "inPersonDays",
          label: "forms.salesRepresentative.fields.inPersonDays",
          required: true,
        },
        {
          name: "handleObjections",
          label: "forms.salesRepresentative.fields.handleObjections",
          required: true,
        },
        {
          name: "learnProducts",
          label: "forms.salesRepresentative.fields.learnProducts",
          required: true,
        },
        {
          name: "lifeChangingSale",
          label: "forms.salesRepresentative.fields.lifeChangingSale",
          required: true,
        },
        {
          name: "followUpStyle",
          label: "forms.salesRepresentative.fields.followUpStyle",
          required: true,
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step5",
      fields: [
        {
          name: "whyAncestro",
          label: "forms.salesRepresentative.fields.whyAncestro",
          required: true,
        },
        {
          name: "freedomMeaning",
          label: "forms.salesRepresentative.fields.freedomMeaning",
          required: true,
        },
        {
          name: "latamFuture",
          label: "forms.salesRepresentative.fields.latamFuture",
          required: true,
        },
        {
          name: "resonance",
          label: "forms.salesRepresentative.fields.resonance",
          required: true,
        },
        {
          name: "incomeGoals",
          label: "forms.salesRepresentative.fields.incomeGoals",
          required: true,
        },
        {
          name: "successVision",
          label: "forms.salesRepresentative.fields.successVision",
          required: true,
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step6",
      fields: [
        {
          name: "discipline",
          type: "drop-down",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.salesRepresentative.fields.discipline",
          required: true,
        },
        {
          name: "dailyHabits",
          label: "forms.salesRepresentative.fields.dailyHabits",
          required: true,
        },
        {
          name: "habitToImprove",
          label: "forms.salesRepresentative.fields.habitToImprove",
          required: true,
        },
        {
          name: "handleFailure",
          label: "forms.salesRepresentative.fields.handleFailure",
          required: true,
        },
        {
          name: "meditation",
          label: "forms.salesRepresentative.fields.meditation",
          required: true,
        },
        {
          name: "selfTalk",
          label: "forms.salesRepresentative.fields.selfTalk",
          required: true,
        },

      ],
    },
    {
      title: "forms.salesRepresentative.steps.step7",
      fields: [
        {
          name: "currentBlock",
          label: "forms.salesRepresentative.fields.currentBlock",
          required: true,
        },
        {
          name: "freedomMoment",
          label: "forms.salesRepresentative.fields.freedomMoment",
          required: true,
        },
        {
          name: "workThatEnergizes",
          label: "forms.salesRepresentative.fields.workThatEnergizes",
          required: true,
        },
        {
          name: "whyMissionDriven",
          label: "forms.salesRepresentative.fields.whyMissionDriven",
          required: true,
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step8",
      fields: [
        {
          name: "energyType",
          label: "forms.salesRepresentative.fields.energyType",
          required: true,
        },
        {
          name: "publicSpeaking",
          type: "drop-down",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: "forms.salesRepresentative.fields.publicSpeaking",
          required: true,
        },
        {
          name: "learningWillingness",
          label: "forms.salesRepresentative.fields.learningWillingness",
          required: true,
        },
        {
          name: "structurePreference",
          label: "forms.salesRepresentative.fields.structurePreference",
          required: true,
        },
        {
          name: "bestEnvironment",
          label: "forms.salesRepresentative.fields.bestEnvironment",
          required: true,
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step9",
      fields: [
        {
          name: "spiritualTeam",
          label: "forms.salesRepresentative.fields.spiritualTeam",
          required: true,
        },
        {
          name: "physicalWellbeing",
          label: "forms.salesRepresentative.fields.physicalWellbeing",
          required: true,
        },
        {
          name: "personalGrowth",
          label: "forms.salesRepresentative.fields.personalGrowth",
          required: true,
        },
        {
          name: "fitnessEncouragement",
          label: "forms.salesRepresentative.fields.fitnessEncouragement",
          required: true,
        },
        {
          name: "fitnessChallenge",
          label: "forms.salesRepresentative.fields.fitnessChallenge",
          required: true,
        },
        {
          type: "file",
          name: "photoOptional",
          label: "forms.salesRepresentative.fields.photoOptional",
        },
      ],
    },
    {
      title: "forms.salesRepresentative.steps.step10",
      fields: [
        {
          type: "file",
          name: "cvFile",
          label: "forms.salesRepresentative.fields.uploadCV",
          required: true,
        },
        {
          type: "file",
          name: "videoFile",
          label: "forms.salesRepresentative.fields.uploadVideo",
        },
        {
          type: "radio",
          name: "fullTimeAvailability",
          label: "forms.salesRepresentative.fields.fullTimeAvailability",
          options: ["common.yes", "common.no"],
          required: true,
        },
        {
          type: "radio",
          name: "trainingCommitment",
          label: "forms.salesRepresentative.fields.trainingCommitment",
          options: ["common.yes", "common.no"],
          required: true,
        },
      ],
    },
  ],
  thanks: {
    text1: "forms.salesRepresentative.thanks.text1",
    text2: "forms.salesRepresentative.thanks.text2",
  },
};
