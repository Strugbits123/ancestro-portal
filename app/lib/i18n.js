import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
// English translations
const enTranslations = {
  nav: {
    energy: "Ancestro Energy",
    capital: "Ancestro Capital",
    charge: "Ancestro Charge",
    applicants: "Ancestro Applicants",
  },
  heroSection: {
    banner: "Join the Movement — #LOSANCESTROS",
    title: "We are not hiring employees — we are awakening leaders.",
    paragraph1:
      "Across Latin America, Ancestro Energy is building the first private renewable energy grid: a system owned by the people, powered by the sun, and guided by spirit. We combine modern technology with ancestral wisdom — because progress and nature were never meant to be separate.",
    paragraph2:
      "Here, we believe in health, discipline, freedom, and prosperity through purpose. Every person who joins us becomes part of something much larger than a company — a continental movement for energy independence, abundance, and truth.",
    applyButton: "Apply Now",
  },
  missionSection: {
    badge: "Our Mission",
    card1Title: "The Ancestral Grid",
    card1Paragraph1:
      "To create a decentralized web of solar, battery, and EV infrastructure that reconnects Latin America to its natural power. This is more than electricity — it’s sovereignty.",
    card1Paragraph2:
      "We are reviving the primal human right to generate your own energy, to live freely, and to provide for your community with your own hands and mind.",

    card2Title: "Why Join Ancestro",
    card2Bullet1:
      "Prosperity With Purpose: Earn high commissions and real equity potential.",
    card2Bullet2:
      "Global Network: Operate across 18 nations under one spiritual and financial mission.",
    card2Bullet3:
      "Health & Freedom: Partial remote culture, sunlight work, and clean-living energy.",
    card2Bullet4:
      "Education & Growth: World-class sales, finance, and leadership training.",
    card2Bullet5:
      "Philanthropy: Every project funds community solar and indigenous empowerment.",
  },
  rolesSection: {
    applyButton: "Apply Now",

    salesRepresentative: {
      heading: "Sales Representatives",
      p1: "The voice of the Ancestro revolution.",
      p2: "As a Sales Representative, you are the bridge between the people and their power. You help families and companies unlock clean energy — solar, battery, and EV systems with zero upfront cost — bringing freedom where dependency once existed.",
      p3: "Your work directly transforms communities, reducing costs and emissions while generating abundance for yourself and your clients. You’ll master negotiation, storytelling, and renewable finance — backed by the continent’s most advanced project management system.",
      p4: "We provide mentorship, training, and all the tools to scale your success remotely while still staying connected through weekly meetings and live events.",
      p5: "Those who thrive here are disciplined, magnetic communicators with heart. You’re not just selling — you’re awakening people to a new way of life.",
    },

    installers: {
      heading: "Installers",
      p1: "The builders of independence.",
      p2: "Installers are the backbone of Ancestro — the hands turning vision into reality. Every bolt tightened, every wire connected, is a step toward freedom for a family or business.",
      p3: "You’ll gain access to consistent, high-paying projects through our dealer portal. Our project managers handle permits, credit, and materials, so you can focus on what you do best: building.",
      p4: "We train all teams on our quality, safety, and speed standards — elevating you into a regional elite of renewable builders. Your work will stand as a legacy across rooftops and charging stations throughout the continent.",
      p5: "When you install with Ancestro, you’re not a contractor. You’re a warrior of light building the new grid.",
    },

    projectManagers: {
      heading: "Project Managers",
      p1: "The conductors of creation.",
      p2: "Ancestro Project Managers are the orchestrators ensuring that every project flows from sale to installation with perfection. You will lead communication between clients, installers, and finance teams — guiding each project like a symphony of precision and trust.",
      p3: "Our PMs are trained in leadership, logistics, and client experience. We give you the tools and autonomy to coordinate construction across multiple regions, manage schedules, and keep customers informed at every step.",
      p4: "This is not corporate management — this is operational mastery driven by purpose. You’ll see your work come alive on rooftops, in charging hubs, and in the smiles of clients who now live energy-free.",
      p5: "Your leadership keeps the movement’s heart beating.",
    },

    creditAnalysts: {
      heading: "Credit Analysts",
      p1: "The protectors of financial balance.",
      p2: "Credit Analysts at Ancestro ensure that every customer financed truly qualifies for energy freedom. You’ll review applications in your assigned country, analyzing documentation and payment capacity while maintaining fairness and ethics.",
      p3: "This role blends logic and intuition — using numbers and human understanding to extend access responsibly. Your precision safeguards our investors, clients, and installers alike.",
      p4: "You’ll receive full training in our proprietary credit evaluation system and ongoing mentorship from our finance division. With every approval, you help another home or business join the grid — while protecting the long-term stability of the ecosystem.",
      p5: "You are the gatekeeper of trust, balancing growth with wisdom.",
    },

    financialAnalysts: {
      heading: "Financial Analysts",
      p1: "The architects of prosperity.",
      p2: "Financial Analysts turn energy into equity. You’ll study each project, from cash flow and CAPEX to taxes and investor returns, ensuring Ancestro remains one of the most profitable and transparent platforms in LATAM.",
      p3: "We’ll equip you with financial modeling tools, training in international green finance, and direct collaboration with global partners. You’ll analyze not just numbers, but impact — translating sustainability into stable returns.",
      p4: "This role requires focus, strategy, and vision. Every report you deliver helps secure institutional investment, expanding our reach to more homes, more communities, more light.",
      p5: "You are the architect behind the flow of abundance.",
    },

    marketingCoordinator: {
      heading: "Marketing Coordinator",
      p1: "Bridging the Vision and the Village.",
      p2: "Marketing Coordinators are the messengers of Ancestro — carrying the story of light into every community we serve. You’ll be the pulse between national strategy and local impact, transforming approved campaigns into real leads, real events, and real conversations.",
      p3: "Each cluster depends on your creativity and precision. You’ll run local ad campaigns, plan community activations, and make sure that every family or business who needs energy freedom knows our name.",
      p4: "You’ll spend part of your week in the field — meeting people, partnering with local venues, seeing the difference your work makes. The rest, you’ll collaborate remotely with national leadership to ensure your cluster stays aligned and growing.",
      p5: "This is not a desk job. It’s an invitation to shape the voice of a movement — to build awareness that changes how people live, save, and power their homes. You’ll be paid a base salary, plus bonuses tied to the growth of your region’s sales.",
      p6: "When you coordinate for Ancestro, you’re not pushing ads. You’re amplifying independence. You’re helping entire cities rise. You’re the voice of the new energy.",
    },
  },
  cultureSection: {
    topBanner: "Our Culture — #LOSANCESTROS",
    topTitle: "We are a tribe of doers, creators, and protectors.",
    topP1:
      "We value wellness, self-discipline, and divine power. We lift, we breathe, we build, and we give back.",
    topP2:
      "Our people live by example — strong bodies, sharp minds, and clear hearts. We see our work as ceremony: every sale, every installation, every line of code is an offering to the planet.",
    topP3:
      "This is not a job. It’s a calling. If you are ready to align your career with your highest potential and help rewrite the story of Latin America, the Ancestro tribe is calling you home.",

    bottomBanner: "Join the Movement — #LOSANCESTROS",
    bottomTitle:
      "Be part of the tribe powering a cleaner, freer Latin America.",
    bottomParagraph:
      "We value wellness, self-discipline, and divine power. We lift, we breathe, we build, and we give back.",
    applyButton: "Apply Now",
    bottomFooter: "Your Ancestro Journey Begins Here",
  },
  footer: {
    address:
      "Address: 123 Green Avenue, Ancestro Business Park, Suite 405, New York, NY 10001, United States",
    contact: "Contact us: +1 (555) 123-4567  |  +44 20 7946 0958",
  },

  // Form----------------------------------------

  // English translations
  common: {
    yes: "YES",
    no: "NO",
    back: "Back",
    next: "Next",
    upload: "Upload",
    noFileChosen: "No file chosen",
    required: "This field is required",
    typeHere: "Type here...",
    submit: "Submit Application",
  },
  forms: {
    salesRepresentative: {
      title: "ANCESTRO ENERGY – SALES REPRESENTATIVE APPLICATION",
      subtitle: "Join the movement powering a cleaner, freer Latin America.",
      hashtag: "#LosAncestros",
      submitButton: "Submit Application",

      steps: {
        step1: "Personal Information",
        step2: "Background & Education",
        step3: "Skills & Communication",
        step4: "Role Expectations & Execution",
        step5: "Vision & Purpose",
        step6: "Personal Alignment & Self-Awareness",
        step7: "Motivation & Purpose",
        step8: "Personality & Communication",
        step9: "Growth & Culture Fit",
        step10: "Final Steps",
      },

      sections: {
        lifestyleMindset: "Lifestyle & Mindset",
        motivationPurpose: "Motivation & Purpose",
        personalityComm: "Personality & Communication",
        growthCulture: "Growth & Culture Fit",
      },

      fields: {
        fullName: "Full Name",
        location: "Country and City",
        whatsapp: "WhatsApp Number",
        email: "Email Address",
        dob: "Date of Birth",
        languages: "Languages Spoken",
        socialProfile: "LinkedIn or Instagram Profile",

        education: "What is your educational background?",
        salesExperience:
          "Do you have prior experience in sales? If yes, describe the industries and products you’ve worked with.",
        renewableExperience:
          "Have you ever sold renewable energy or financial services before?",
        bestSalesStory:
          "Describe your most successful sales experience and what made it successful.",
        currentWorkStatus:
          "Are you currently self-employed, working in sales, or transitioning from another field?",

        buildTrust:
          "How do you build trust with clients during your first interaction?",
        commStyle: "Describe your communication style in three words.",
        motivationRenewable:
          "What motivates you most about selling renewable energy solutions?",
        cameraComfort:
          "How comfortable are you speaking on camera or conducting video calls? (1–10)",
        crmComfort:
          "Rate your comfort level using CRM systems and digital tools. (1–10)",
        strongMarkets:
          "What languages or markets are you most confident selling in?",

        remoteWork:
          "Are you comfortable working remotely with a results-based structure?",
        inPersonDays:
          "Are you able to attend two in-person collaboration days per week?",
        handleObjections:
          "How do you handle objections or rejection in a sales conversation?",
        learnProducts:
          "What’s your process for learning and mastering new products quickly?",
        lifeChangingSale:
          "Describe a time you helped someone make a decision that truly improved their life.",
        followUpStyle: "What’s your approach to follow-ups and closing deals?",

        whyAncestro: "Why do you want to represent Ancestro Energy?",
        freedomMeaning:
          "What does “freedom through energy” mean to you personally?",
        latamFuture:
          "How do you think renewable energy will transform Latin America in the next 5 years?",
        resonance:
          "Ancestro combines spirituality, business, and philanthropy — which of these resonates most with you and why?",
        incomeGoals:
          "What are your personal income and lifestyle goals for the next 12 months?",
        successVision:
          "What will success look like for you one year from now as part of this movement?",

        discipline:
          "On a scale of 1–10, how would you rate your self-discipline?",
        dailyHabits: "What daily habits keep you focused or grounded?",
        habitToImprove: "What’s one habit you’d like to improve this year?",
        handleFailure: "How do you handle rejection or failure?",
        meditation:
          "Do you meditate or have a mindfulness practice? If so, how often?",
        selfTalk:
          "How would you describe your self-talk when you face challenges?",

        currentBlock:
          "What is currently holding you back from your highest potential?",
        freedomMoment:
          "Describe a moment when you felt frustrated by limits or systems in society...",
        workThatEnergizes: "What kind of work makes you feel most alive?",
        whyMissionDriven:
          "Why do you want to be part of a mission-driven, health-conscious company like Ancestro?",

        energyType:
          "How would you describe your natural energy: introvert, extrovert, or ambivert?",
        publicSpeaking:
          "How comfortable are you speaking to a group or presenting on stage? (1–10)",
        learningWillingness:
          "How comfortable are you learning new material weekly or receiving coaching?",
        structurePreference:
          "Do you prefer structured guidance or freedom to self-direct?",
        bestEnvironment:
          "What type of environment helps you perform at your best?",

        spiritualTeam:
          "Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?",
        physicalWellbeing:
          "How do you maintain your physical wellbeing and energy levels?",
        personalGrowth:
          "What areas of personal growth are you actively working on right now?",
        fitnessEncouragement:
          "If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?",
        fitnessChallenge:
          "If you were selected for this role only after demonstrating a commitment to improve your physical fitness...",

        photoOptional:
          "Upload a recent photo that represents who you are (optional)",
        uploadCV: "Upload your CV or resume.",
        uploadVideo:
          "Upload a 1-minute video introducing yourself and why you want to join Ancestro. (Optional)",
        fullTimeAvailability: "CONFIRM FULL-TIME AVAILABILITY.",
        trainingCommitment:
          "Confirm willingness to participate in initial training and evaluation phase.",
      },

      thanks: {
        text1:
          "This is more than a sales role — it’s an initiation into leadership.",
        text2:
          "Every conversation you have spreads the light of clean energy, freedom, and abundance across Latin America.",
      },
    },
    creditAnalyst: {
      title: "ANCESTRO ENERGY – CREDIT ANALYST APPLICATION",
      subtitle:
        "Finance the future of clean, independent energy across Latin America.",
      hashtag: "#LosAncestros",
      submitButton: "Submit Application",
      steps: {
        step1: "Personal Information",
        step2: "Education & Background",
        step3: "Analytical Experience",
        step4: "Strategy & Systems",
        step5: "Decision-Making & Integrity",
        step6: "Vision & Purpose",
        step7: "Personal Alignment & Self-Awareness",
        step8: "Motivation & Purpose",
        step9: "Personality & Communication",
        step10: "Growth & Culture Fit",
        step11: "Final Steps",
      },
      sections: {
        lifestyleMindset: "Lifestyle & Mindset",
        motivationPurpose: "Motivation & Purpose",
        personalityComm: "Personality & Communication",
        growthCulture: "Growth & Culture Fit",
      },
      fields: {
        fullName: "Full Name",
        location: "Country / City",
        whatsapp: "WhatsApp Number",
        email: "Email Address",
        dob: "Date of Birth",
        languages: "Languages Spoken",
        linkedin: "LinkedIn Profile (optional)",
        education:
          "What is your educational background (Finance, Economics, Business Administration, or related)?",
        certifications:
          "Do you hold any financial or credit analysis certifications? (upload if applicable)",
        creditYears:
          "How many years of experience do you have in credit evaluation or risk analysis?",
        industriesAnalyzed:
          "What industries or client types have you analyzed (residential, commercial, industrial, SME, etc.)?",
        greenLendingExperience:
          "Have you ever worked in renewable-energy financing or green lending?",
        uploadCV: "Upload your résumé or CV.",
        creditProcess: "Describe your process for evaluating creditworthiness.",
        keyMetrics:
          "What are the key metrics or indicators you rely on when assessing a client?",
        riskVsOpportunity:
          "How do you balance opportunity versus risk when evaluating borderline cases?",
        softwareUsed:
          "What systems or software do you use for financial and credit analysis?",
        fraudDetection:
          "Have you ever identified fraud or inconsistencies in an application? How did you respond?",
        judgmentUnderPressure:
          "Describe a credit decision that required sound judgment under pressure.",
        documentationProcess:
          "How do you document and justify your approvals or rejections?",
        profitabilityTracking:
          "How do you track project profitability and resource efficiency?",
        lessonsLearned:
          "How do you document lessons learned or continuous-improvement actions?",
        processImprovement:
          "Have you ever implemented a new process that saved time or cost? Describe it.",
        multiProjectCoordination:
          "How do you coordinate across multiple active projects simultaneously?",
        healthIndicators:
          "What indicators do you monitor daily or weekly to measure project health?",
        financialIntegrity:
          "What does “financial integrity” mean to you personally?",
        fairnessVsProtection:
          "How do you ensure fairness while protecting company assets and investor funds?",
        pressureStory:
          "Have you ever been pressured to approve an applicant that didn’t meet standards? What did you do?",
        latamChallenge:
          "What do you believe is the biggest challenge in consumer or small business lending in Latin America?",
        preventedLoss:
          "Describe a time when your analysis prevented potential loss or improved a system.",
        personalValues:
          "What personal values guide your decision-making process?",
        whyAncestro: "Why do you want to join Ancestro Energy?",
        ancestralGrid: "What does “building the Ancestral Grid” mean to you?",
        economicTransformation:
          "How do you see renewable-energy financing reshaping Latin America’s economy?",
        financeTechSpirit:
          "Ancestro combines finance, technology, and spirituality — which of these resonates most with you and why?",
        missionContribution:
          "How do you see your work as a Credit Analyst contributing to the overall mission of Ancestro?",
        careerGoals: "What are your career goals for the next 3–5 years?",
        startDate:
          "If accepted, how soon could you begin training and integration?",
        selfDiscipline:
          "On a scale of 1–10, how would you rate your self-discipline?",
        dailyHabits: "What daily habits keep you focused or grounded?",
        habitToImprove: "What’s one habit you’d like to improve this year?",
        stressHandling: "How do you handle stress or competing deadlines?",
        mindfulness:
          "Do you meditate or have a mindfulness practice? How often?",
        selfTalk:
          "How would you describe your self-talk when things become difficult?",
        currentLimitation:
          "What is currently holding you back from your highest potential?",
        financialFreedomFrustration:
          "Describe a time when you felt frustrated by the control of financial systems and wanted to create more freedom or fairness through your work.",
        fulfillingWork:
          "What kind of work gives you a sense of fulfillment and pride?",
        whyConsciousFinance:
          "Why do you want to be part of a mission-driven, conscious finance team like Ancestro?",
        energyType:
          "Would you describe yourself as more introverted, extroverted, or balanced?",
        presentationComfort:
          "How comfortable are you presenting financial findings to leadership or investors? (1–10)",
        criticismResponse:
          "How do you handle constructive criticism or coaching?",
        structureVsAutonomy:
          "Do you prefer structure or autonomy when analyzing cases?",
        bestEnvironment:
          "What type of environment helps you focus and perform your best?",
        spiritualTeamValue:
          "Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?",
        physicalWellbeing:
          "How do you maintain physical wellbeing and mental clarity during long analytical days?",
        personalGrowth:
          "What areas of personal growth are you actively developing right now?",
        fitnessSupport:
          "If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?",
        fitnessChallenge:
          "If you were selected for this role only after demonstrating a commitment to improve your physical fitness or overall wellbeing, would you be open to that challenge and to receiving support from our team to achieve it?",
        personalPhoto:
          "Upload a recent photo that represents who you are (optional).",
        finalUploadCV: "Upload résumé (if not already provided).",
        uploadVideo:
          "Upload a 1-minute video explaining why you’re passionate about ethical finance and renewable energy (Optional)",
        fullTimeAvailability: "Confirm full-time availability",
        trainingCommitment:
          "Confirm willingness to participate in Ancestro onboarding and training",
      },
      thanks: {
        text1: "Thank you for applying to become an Ancestro Credit Analyst.",
        text2:
          "We will review your application and contact you within 48 hours.",
      },
    },
    financialAnalyst: {
      title: "ANCESTRO ENERGY – FINANCIAL ANALYST APPLICATION",
      subtitle:
        "Turn energy into prosperity. Illuminate the future of finance.",
      hashtag: "#LosAncestros",

      submitButton: "SUBMIT APPLICATION",

      steps: {
        step1: "Personal Information",
        step2: "Education & Professional Background",
        step3: "Analytical & Modeling Experience",
        step4: "Investment Communication & Reporting",
        step5: "Vision & Alignment with Ancestro",
        step6: "Lifestyle & Mindset",
        step7: "Motivation & Purpose",
        step8: "Personality & Communication Style",
        step9: "Growth & Cultural Fit",
        step10: "Final Confirmation",
      },

      sections: {
        visionPurpose: "Vision & Purpose",
        lifestyleMindset: "Lifestyle & Mindset",
        motivationPurpose: "Motivation & Purpose",
        personalityComm: "Personality & Communication",
        growthCulture: "Growth & Culture Fit",
      },

      fields: {
        fullName: "Full Name",
        location: "Country / City",
        whatsapp: "WhatsApp Number",
        email: "Email Address",
        dob: "Date of Birth",
        languages: "Languages Spoken",
        linkedin: "LinkedIn Profile (optional)",

        education:
          "What is your educational background (Finance, Economics, Accounting, Engineering, or related)?",
        certifications:
          "Do you hold any professional certifications (CFA, CPA, FRM, etc.)? (Upload if yes)",
        yearsExperience:
          "How many years of experience do you have in financial analysis or modeling?",
        renewableExperience:
          "Have you ever analyzed renewable-energy or infrastructure projects before?",
        uploadCV: "Upload your résumé or CV",

        softwareTools:
          "What financial software and tools do you use regularly (Excel, Power BI, Python, Bloomberg, etc.)?",
        modelInfluence:
          "Describe a financial model you built that influenced a major business or investment decision",
        cashFlowApproach:
          "How do you approach building cash-flow models for capital-intensive projects?",
        profitabilityKPIs:
          "How do you evaluate project profitability — what KPIs or metrics do you prioritize?",
        sensitivityAnalysis:
          "Have you ever performed sensitivity analysis or stress testing on investment models?",
        intlVariables:
          "Describe how you handle exchange rate, inflation, and tax variables in international projects",
        forecastingExperience:
          "What is your experience with forecasting and scenario planning?",
        dataIntegrity:
          "How do you ensure accuracy and integrity in your data sources and assumptions?",

        investorReports:
          "Have you prepared reports or presentations for institutional investors or senior management?",
        communicationStyle:
          "How do you communicate complex financial data in a simple, visual, and strategic way?",
        documentationType:
          "What kind of financial documentation do you usually prepare (dashboards, memos, investor decks, etc.)?",
        hiddenOpportunity:
          "Describe a time when your analysis uncovered a hidden opportunity or prevented a financial risk",
        profitVsImpact:
          "How do you balance profitability goals with social and environmental impact metrics?",
        projectFinancing:
          "Have you ever participated in project financing, due diligence, or capital raising?",

        whyAncestro: "Why do you want to work with Ancestro Energy?",
        latamTransformation:
          "How do you see renewable-energy investment transforming Latin America?",
        gridExcitement:
          "What excites you most about building a private renewable grid for an entire continent?",
        financeTechSpirit:
          "Ancestro unites finance, technology, and spirituality — which of these dimensions resonates most with you and why?",
        roleInMission:
          "How would you describe the role of a Financial Analyst within a mission-based organization?",
        longTermGoals:
          "What are your long-term professional and personal goals?",
        startAvailability:
          "If accepted, how soon could you begin integration and onboarding?",

        selfDiscipline:
          "On a scale of 1–10, how would you rate your self-discipline?",
        dailyHabits: "What daily habits keep you focused or grounded?",
        habitImproving: "What’s one personal habit you’re actively improving?",
        mentalFatigue:
          "How do you handle long analytical projects and mental fatigue?",
        mindfulnessPractice:
          "Do you meditate, train, or have a mindfulness practice? How often?",
        selfTalkUnderPressure:
          "How would you describe your self-talk when faced with uncertainty or pressure?",

        currentBlock:
          "What’s currently holding you back from your highest potential?",
        traditionalFinanceFrustration:
          "Describe a time when you were frustrated by the structure of traditional finance and wanted to create more freedom or fairness",
        satisfyingWork:
          "What kind of work brings you deep satisfaction and pride?",
        whyConsciousFinance:
          "Why do you want to be part of a conscious financial movement like Ancestro?",

        energyType:
          "How would you describe your natural energy: introvert, extrovert, or ambivert?",
        presentationComfort:
          "How comfortable are you presenting data and recommendations to leadership or investors? (1–10)",
        learningOpenness:
          "How open are you to coaching and continual learning?",
        independenceVsTeam:
          "Do you prefer independence or collaboration when analyzing projects?",
        idealEnvironment:
          "What type of environment helps you stay creative and focused?",

        spiritualTeamValue:
          "Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?",
        energyMaintenance:
          "How do you maintain your physical and mental energy while working in analytical roles?",
        personalGrowth:
          "What areas of personal growth are you developing right now?",
        fitnessSupport:
          "If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?",
        fitnessChallenge:
          "If selected, would you be open to demonstrating commitment to physical fitness and receiving team support to achieve it?",
        personalPhoto:
          "Upload a recent photo that represents who you are (optional)",

        finalUploadCV: "Upload résumé (if not already provided)",
        uploadVideo:
          "Upload a 1-minute video introducing yourself and your passion for renewable financial transformation (optional)",

        fullTimeAvailability: "Are you available full-time for this role?",
        trainingCommitment:
          "Are you willing to participate in Ancestro’s onboarding and training program?",
      },

      thanks: {
        text1:
          "Thank you for applying to become an Ancestro Financial Analyst.",
        text2:
          "We will review your application and contact you within 48 hours.",
      },
    },
    installer: {
      title: "ANCESTRO ENERGY – INSTALLER APPLICATION",
      subtitle:
        "Join the builders powering Latin America’s renewable revolution.",
      hashtag: "#LosAncestros",
      submitButton: "Submit Application",

      steps: {
        step1: "Company & Contact Information",
        step2: "Experience & Capability",
        step3: "Certifications & References",
        step4: "Workflow & Operations",
        step5: "Philosophy & Team Culture",
        step6: "Future Vision",
        step7: "Lifestyle & Mindset",
        step8: "Motivation & Purpose",
        step9: "Personality & Communication",
        step10: "Growth & Culture Fit",
        step11: "Final Steps",
      },

      sections: {
        lifestyleMindset: "Lifestyle & Mindset",
        motivationPurpose: "Motivation & Purpose",
        personalityComm: "Personality & Communication",
        growthCulture: "Growth & Culture Fit",
      },

      fields: {
        companyName: "Full Name or Company Name",
        location: "Country / City / Region of Operation",
        businessReg:
          "Business Registration (upload legal certificate if applicable)",
        website: "Company Website or Social Media (if available)",
        whatsapp: "WhatsApp Number",
        email: "Email Address",
        contactPerson: "Primary Contact Person",
        yearsInOperation: "Years in Operation",

        systemTypes:
          "What types of renewable systems have you installed? (Solar PV, battery storage, EV chargers, hybrid systems, etc.)",
        totalProjects: "How many total projects have you completed to date?",
        avgSystemSize:
          "What is your average system size (kW) for installations?",
        teamSize: "How many technicians or workers are on your team?",
        certifiedSupervisor:
          "Do you have a dedicated electrical engineer or certified supervisor on staff?",
        equipment:
          "What tools, vehicles, and safety equipment do you currently own?",
        brands:
          "What inverter, panel, and battery brands are you familiar with?",
        pastWork:
          "Have you previously worked under a larger EPC, or directly with clients?",
        serviceRegions:
          "Which regions or cities can you serve within your country?",
        regionalTravel:
          "Are you available to travel or expand regionally under Ancestro’s network?",

        certificationsFile:
          "Upload all relevant certifications (electrical, solar, battery, EV, or safety).",
        pastProjectsFile:
          "Upload photos of 3–5 past projects (roof, ground mount, or EV).",
        references:
          "Provide two professional references (clients or companies). Include name, phone, and email.",
        insuranceFile:
          "Do you have liability insurance, installation insurance, or worker protection coverage? (upload proof)",
        safetyTraining:
          "Are your installers trained in fall protection, electrical safety, and first aid?",

        workflow:
          "Describe your typical workflow from receiving project documents to completion.",
        softwareTools:
          "What software or tools do you use for scheduling, design, or reporting?",
        qualityVerification:
          "How do you verify that installations meet quality and safety standards?",
        clientCommunication:
          "What is your process for communicating updates to clients or project managers?",
        fieldChallenges:
          "What challenges do you face most often in the field, and how do you solve them?",
        installationTime:
          "What’s your average installation time for a 10 kW system? For a 100 kW system?",
        maintenanceServices:
          "Do you offer ongoing maintenance or monitoring services?",
        teamProfessionalism:
          "How do you ensure your team stays professional and presentable on-site?",

        energyFreedom: "What does “building energy freedom” mean to you?",
        leadershipStyle:
          "Describe your leadership style when managing your team.",
        teamMorale:
          "How do you keep morale and focus high during long or difficult installations?",
        motivation: "What motivates you to continue working in this field?",
        goodVsGreat:
          "What do you believe separates a good installer from a great one?",
        philanthropy:
          "Ancestro’s projects combine technology and philanthropy. How do you feel about installing systems that also serve low-income or indigenous communities?",
        brandRepresentation:
          "Are you comfortable representing Ancestro’s brand standards and values on every site?",

        whyAncestro: "Why do you want to work with Ancestro Energy?",
        latamNetwork:
          "What excites you most about joining a LATAM-wide renewable network?",
        futureVision:
          "Where do you see your business or career 3 years from now?",
        monthlyCapacity:
          "How many projects per month could your team realistically complete?",
        partnershipType:
          "What type of partnership would you prefer: subcontractor, exclusive installer, or regional EPC partner?",
        ancestroAcademy:
          "Are you interested in future training or certification under the Ancestro Academy program?",

        selfDiscipline:
          "On a scale of 1–10, how would you rate your self-discipline?",
        dailyHabits: "What daily habits keep you focused or grounded?",
        habitToImprove: "What’s one habit you’d like to improve this year?",
        stressHandling: "How do you handle stress or setbacks on-site?",
        mindfulness:
          "Do you meditate, exercise, or have a mindfulness practice? How often?",
        selfTalk:
          "How would you describe your self-talk when things get difficult?",

        craftImprovement: "What drives you to keep improving your craft?",
        frustrationMoment1:
          "Describe a moment when you felt frustrated by the limits of the system and wanted to create more freedom for yourself or your community.",
        frustrationMoment2:
          "Describe a moment when you felt frustrated by the limits of the system and wanted to create more freedom for yourself or your community.",
        missionAlignment:
          "Why do you want to be part of a mission-driven, health-conscious company like Ancestro?",

        energyType:
          "How would you describe your natural energy: introvert, extrovert, or ambivert?",
        leadershipComfort:
          "How comfortable are you training others or leading a team? (1–10)",
        learningOpenness:
          "How open are you to learning new methods or technologies each month?",
        communicationPref:
          "How do you prefer to communicate with your project managers — voice notes, calls, or written reports?",
        bestEnvironment:
          "What type of environment helps you perform at your best?",

        teamValues:
          "Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?",
        physicalWellbeing:
          "How do you maintain your physical wellbeing and energy levels while working long days outdoors?",
        personalGrowth:
          "What areas of personal growth are you actively working on right now?",
        fitnessSupport:
          "If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?",
        fitnessChallenge:
          "If you were selected for this role only after demonstrating a commitment to improve your physical fitness or overall wellbeing, would you be open to that challenge and to receiving support from our team to achieve it?",
        personalPhoto:
          "Upload a recent photo that represents who you are (optional).",

        companyDocsFile:
          "Upload your company profile, ID, or registration documents.",
        cvFile: "Upload your CV or résumé (for individuals).",
        videoFile:
          "Upload a 1-minute video introducing yourself or your team and why you want to join Ancestro. (Optional)",
        availabilityConfirmation:
          "Confirm availability for onboarding and field evaluation.",
      },

      thanks: {
        text1:
          "Thank you for applying to become an Ancestro Installer Partner.",
        text2:
          "We will review your submission and contact you within 48 hours.",
      },
    },
    projectManager: {
      title: "ANCESTRO ENERGY – PROJECT MANAGER APPLICATION",
      subtitle: "Lead the coordination that powers a continent.",
      hashtag: "#LosAncestros",
      submitButton: "Submit Application",

      steps: {
        step1: "Personal Information",
        step2: "Experience & Qualifications",
        step3: "Leadership & Execution",
        step4: "Strategy & Systems",
        step5: "Vision & Purpose",
        step6: "Lifestyle & Mindset",
        step7: "Motivation & Purpose",
        step8: "Personality & Communication",
        step9: "Growth & Culture Fit",
        step10: "Final Steps",
      },

      sections: {
        lifestyleMindset: "Lifestyle & Mindset",
        motivationPurpose: "Motivation & Purpose",
        personalityComm: "Personality & Communication",
        growthCulture: "Growth & Culture Fit",
      },

      fields: {
        fullName: "Full Name",
        location: "Country / City",
        whatsapp: "WhatsApp Number",
        email: "Email Address",
        dob: "Date of Birth",
        languages: "Languages Spoken",
        linkedin: "LinkedIn Profile (optional)",

        pmYears:
          "How many years of experience do you have in project management?",
        industries:
          "What industries have you managed projects in (solar, construction, telecom, infrastructure, etc.)?",
        largeProject:
          "Describe one large-scale project you led from start to finish. What was the outcome?",
        teamSizeManaged:
          "What was the largest team or number of subcontractors you have overseen?",
        toolsUsed:
          "Which tools or software do you use for scheduling, communication, and reporting (Asana, Trello, ClickUp, etc.)?",
        renewableExperience:
          "Have you worked with renewable-energy or technical installation teams before?",
        education:
          "What is your educational background or certification (engineering, PMP, etc.)?",
        certificatesFile:
          "Upload any relevant certificates, diplomas, or letters of reference.",

        teamAlignment:
          "How do you ensure your team stays aligned, accountable, and on schedule?",
        conflictResolution:
          "What’s your process for resolving conflicts or delays between departments?",
        clientCommunication:
          "How do you manage client communication during stressful situations?",
        leadershipStyle: "Describe your leadership style in three words.",
        balanceSpeedSafety:
          "How do you balance speed, safety, and quality on complex projects?",
        motivationBeyondDeadlines:
          "What motivates you to see a project succeed beyond meeting deadlines?",
        turnaroundStory:
          "Give an example of a time you turned a failing project into a success.",

        profitabilityTracking:
          "How do you track project profitability and resource efficiency?",
        lessonsLearned:
          "How do you document lessons learned or continuous-improvement actions?",
        processImprovement:
          "Have you ever implemented a new process that saved time or cost? Describe it.",
        multiProjectCoordination:
          "How do you coordinate across multiple active projects simultaneously?",
        projectHealthIndicators:
          "What indicators do you monitor daily or weekly to measure project health?",

        whyAncestro: "Why do you want to join Ancestro Energy?",
        ancestralGridMeaning:
          "What does “building the Ancestral Grid” mean to you?",
        countryTransformation:
          "How do you see renewable-energy development transforming your country?",
        resonanceTriangle:
          "Ancestro connects finance, construction, and spirituality — which part of that triangle resonates most with you and why?",
        threeYearGoals:
          "What are your professional and personal goals for the next 3 years?",
        successDefinition:
          "How do you define success as a Project Manager within a movement like Ancestro?",

        selfDiscipline:
          "On a scale of 1–10, how would you rate your self-discipline?",
        dailyHabits: "What daily habits keep you focused or grounded?",
        habitToImprove: "What’s one habit you’d like to improve this year?",
        handlePressure: "How do you handle pressure, setbacks, or uncertainty?",
        mindfulness: "Do you meditate or practice mindfulness? How often?",
        internalDialogue:
          "How would you describe your internal dialogue when challenges appear?",

        currentLimitation: "What currently limits your highest potential?",
        freedomFrustration:
          "Describe a time when you were frustrated by the systems of society and wanted to create more freedom — for yourself or others.",
        workThatEnergizes: "What type of work makes you feel most alive?",
        whyHealthPurposeOrg:
          "Why do you want to belong to a health- and purpose-driven organization like Ancestro?",

        energyType: "Are you more of an introvert, extrovert, or ambivert?",
        publicSpeaking:
          "How comfortable are you speaking to groups or presenting on stage? (1–10)",
        learningOpenness: "How open are you to weekly learning and coaching?",
        structureVsAutonomy:
          "Do you prefer structure or autonomy when leading?",
        bestEnvironment: "What environment brings out your best performance?",

        spiritualTeam:
          "Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?",
        physicalWellbeing:
          "How do you maintain your physical wellbeing and energy levels during demanding projects?",
        personalGrowth:
          "What areas of personal growth are you actively developing right now?",
        fitnessSupport:
          "If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?",
        fitnessChallenge:
          "If you were selected for this role only after demonstrating commitment to improve your physical fitness or overall wellbeing, would you accept that challenge and guidance?",
        personalPhoto:
          "Upload a recent photo that represents who you are (optional).",

        cvFile: "Upload CV or résumé",
        videoFile:
          "Upload a 1-minute video introducing yourself and describing how you lead teams. (Optional)",
        fullTimeAvailability: "CONFIRM FULL-TIME AVAILABILITY.",
        trainingCommitment:
          "Confirm willingness to participate in onboarding and training.",
      },

      thanks: {
        text1: "Thank you for applying to lead projects at Ancestro Energy.",
        text2:
          "We will review your application and contact you within 48 hours.",
      },
    },
    marketingCoordinator: {
      title: "ANCESTRO ENERGY – MARKETING COORDINATOR APPLICATION",
      subtitle:
        "Join the movement shaping how Latin America sees, feels, and adopts renewable energy.",
      hashtag: "#LosAncestros",
      submitButton: "Submit Application",

      steps: {
        step1: "Personal Information",
        step2: "Education & Background",
        step3: "Skills & Execution",
        step4: "Role Expectations & Collaboration",
        step5: "Vision & Purpose",
        step6: "Lifestyle & Mindset",
        step7: "Motivation & Purpose",
        step8: "Personality & Communication",
        step9: "Growth & Culture Fit",
        step10: "Final Steps",
      },

      sections: {
        lifestyleMindset: "Lifestyle & Mindset",
        motivationPurpose: "Motivation & Purpose",
        personalityComm: "Personality & Communication",
        growthCulture: "Growth & Culture Fit",
      },

      fields: {
        fullName: "Full Name",
        location: "Country / City",
        whatsapp: "WhatsApp Number",
        email: "Email Address",
        dob: "Date of Birth",
        languages: "Languages Spoken",
        linkedin: "LinkedIn Profile (optional)",

        education:
          "What is your educational background (marketing, communications, business, or related)?",
        yearsExperience:
          "How many years of experience do you have in marketing, events, or campaign coordination?",
        digitalCampaigns:
          "Have you ever managed digital ad campaigns (Facebook, Instagram, Google, etc.)?",
        successfulCampaign:
          "Describe a successful marketing campaign you’ve executed — what made it work?",
        eventsExperience:
          "Have you ever managed events, community activations, or partnerships? If yes, describe.",

        marketingTools:
          "Which marketing tools and platforms have you used (Meta Ads Manager, Canva, CRM, Mailchimp, etc.)?",
        localAdaptation:
          "Describe your creative process when adapting national or brand materials to fit local audiences.",
        campaignMetrics:
          "How do you track and measure the success of your marketing campaigns?",
        salesCoordination:
          "Rate your ability to work with sales teams and share leads effectively. (1–10)",
        eventComfort:
          "How comfortable are you planning and executing in-person events? (1–10)",
        multiProjectOrg:
          "How do you stay organized when managing multiple campaigns or projects at once?",
        excitingProjects:
          "What kind of marketing projects excite you most — digital, events, community engagement, or partnerships?",

        hybridWork:
          "Are you comfortable working hybrid (minimum 2x per week in-office) with a results-driven team?",
        budgetManagement:
          "Are you confident managing a marketing budget and reporting ROI?",
        underperformingCampaign:
          "How would you handle a situation where an ad campaign underperforms?",
        salesCoordinationProcess:
          "Describe how you would coordinate with a sales team to ensure leads are followed up and converted.",
        brandAwarenessStrategy:
          "What steps would you take to build brand awareness in a new city or region?",
        salesMotivation:
          "What motivates you most about helping a sales team grow through better marketing and communication?",

        whyAncestro:
          "Why do you want to coordinate marketing for Ancestro Energy?",
        bridgingVisionVillage:
          "What does “Bridging the Vision and the Village” mean to you personally?",
        marketingForRenewables:
          "How do you believe marketing can accelerate Latin America’s renewable transition?",
        spiritualityBusinessPhilanthropy:
          "Ancestro combines spirituality, business, and philanthropy — which resonates most with you, and why?",
        incomeGoals:
          "What are your professional growth and income goals for the next 12 months?",
        successInOneYear:
          "What would success look like for you one year from now in this movement?",

        selfDiscipline:
          "On a scale of 1–10, how would you rate your self-discipline?",
        dailyHabits: "What daily habits keep you focused or grounded?",
        habitToImprove: "What’s one habit you’d like to improve this year?",
        creativeBurnout: "How do you handle creative burnout or deadlines?",
        mindfulness:
          "Do you meditate or have a mindfulness practice? If so, how often?",
        stressSelfTalk:
          "How would you describe your self-talk when managing stress or pressure?",

        currentLimitation:
          "What’s currently holding you back from your highest potential?",
        freedomFrustration:
          "Describe a time when you felt frustrated by limits or systems in society and wanted to create more freedom — for yourself or others.",
        workThatEnergizes: "What kind of work makes you feel most alive?",
        whyHealthPurposeOrg:
          "Why do you want to be part of a mission-driven, health-conscious company like Ancestro?",

        energyType:
          "How would you describe your natural energy: introvert, extrovert, or ambivert?",
        presentationComfort:
          "How comfortable are you presenting ideas or reports to a group? (1–10)",
        learningOpenness:
          "How comfortable are you learning new digital tools or receiving coaching?",
        structureVsFreedom:
          "Do you prefer structured campaigns or creative freedom?",
        bestEnvironment:
          "What type of environment helps you perform at your best?",

        spiritualTeamValue:
          "Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?",
        physicalWellbeing:
          "How do you maintain your physical wellbeing and energy levels?",
        personalGrowth:
          "What areas of personal growth are you actively working on right now?",
        fitnessSupport:
          "If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?",
        fitnessChallenge:
          "If you were selected for this role only after demonstrating a commitment to improve your physical fitness or overall wellbeing, would you be open to that challenge and to receiving support from our team to achieve it?",
        personalPhoto:
          "Upload a recent photo that represents who you are (optional).",

        cvFile: "Upload résumé",
        videoFile:
          "Upload a 1-minute video introducing yourself and your passion for conscious marketing in renewables (Optional)",
        fullTimeAvailability: "CONFIRM FULL-TIME AVAILABILITY.",
        trainingCommitment:
          "Confirm willingness to participate in Ancestro onboarding and training.",
      },

      thanks: {
        text1:
          "Thank you for applying to become an Ancestro Marketing Coordinator.",
        text2:
          "We will review your application and contact you within 48 hours.",
      },
    },
  },
};

// Spanish translations
const esTranslations = {
  nav: {
    energy: "Ancestro Energía",
    capital: "Ancestro Capital",
    charge: "Ancestro Charge",
    applicants: "Postulantes Ancestro",
  },
  heroSection: {
    banner: "Únete al Movimiento — #LOSANCESTROS",
    title: "No estamos contratando empleados — estamos despertando líderes.",
    paragraph1:
      "En toda América Latina, Ancestro Energy está construyendo la primera red privada de energía renovable: un sistema propiedad del pueblo, impulsado por el sol y guiado por el espíritu. Combinamos tecnología moderna con sabiduría ancestral — porque el progreso y la naturaleza nunca debieron separarse.",
    paragraph2:
      "Aquí creemos en la salud, la disciplina, la libertad y la prosperidad a través del propósito. Cada persona que se une a nosotros forma parte de algo mucho más grande que una empresa — un movimiento continental por la independencia energética, la abundancia y la verdad.",
    applyButton: "Aplica Ahora",
  },
  missionSection: {
    badge: "Nuestra Misión",
    card1Title: "La Red Ancestral",
    card1Paragraph1:
      "Crear una red descentralizada de infraestructura solar, baterías y vehículos eléctricos que reconecte a América Latina con su poder natural. Esto es más que electricidad — es soberanía.",
    card1Paragraph2:
      "Estamos reviviendo el derecho humano primigenio de generar tu propia energía, vivir en libertad y proveer para tu comunidad con tus propias manos y mente.",

    card2Title: "¿Por Qué Unirte a Ancestro?",
    card2Bullet1:
      "Prosperidad con Propósito: Gana comisiones altas y potencial real de equity.",
    card2Bullet2:
      "Red Global: Opera en 18 países bajo una misma misión espiritual y financiera.",
    card2Bullet3:
      "Salud y Libertad: Cultura parcialmente remota, trabajo bajo el sol y energía de vida limpia.",
    card2Bullet4:
      "Educación y Crecimiento: Formación de clase mundial en ventas, finanzas y liderazgo.",
    card2Bullet5:
      "Filantropía: Cada proyecto financia energía solar comunitaria y empoderamiento indígena.",
  },
  rolesSection: {
    applyButton: "Aplica Ahora",

    salesRepresentative: {
      heading: "Representantes de Ventas",
      p1: "La voz de la revolución Ancestro.",
      p2: "Como Representante de Ventas, eres el puente entre las personas y su poder. Ayudas a familias y empresas a desbloquear energía limpia — sistemas solares, baterías y vehículos eléctricos sin costo inicial — trayendo libertad donde antes existía dependencia.",
      p3: "Tu trabajo transforma directamente comunidades, reduciendo costos y emisiones mientras generas abundancia para ti y tus clientes. Dominarás la negociación, el storytelling y las finanzas renovables — respaldado por el sistema de gestión de proyectos más avanzado del continente.",
      p4: "Te proporcionamos mentoría, entrenamiento y todas las herramientas para escalar tu éxito de forma remota mientras sigues conectado a través de reuniones semanales y eventos en vivo.",
      p5: "Quienes prosperan aquí son personas disciplinadas, comunicadores magnéticos con corazón. No solo vendes — despiertas a las personas a una nueva forma de vida.",
    },

    installers: {
      heading: "Instaladores",
      p1: "Los constructores de la independencia.",
      p2: "Los instaladores son la columna vertebral de Ancestro — las manos que convierten la visión en realidad. Cada tornillo apretado, cada cable conectado, es un paso hacia la libertad para una familia o empresa.",
      p3: "Tendrás acceso constante a proyectos bien remunerados a través de nuestro portal de distribuidores. Nuestros gerentes de proyecto manejan permisos, crédito y materiales, para que puedas enfocarte en lo que mejor haces: construir.",
      p4: "Capacitamos a todos los equipos en estándares de calidad, seguridad y velocidad — elevándote a una élite regional de constructores renovables. Tu trabajo quedará como legado en techos y estaciones de carga por todo el continente.",
      p5: "Cuando instalas con Ancestro, no eres un contratista. Eres un guerrero de la luz construyendo la nueva red.",
    },

    projectManagers: {
      heading: "Gerentes de Proyecto",
      p1: "Los directores de la creación.",
      p2: "Los Gerentes de Proyecto de Ancestro son los orquestadores que aseguran que cada proyecto fluya desde la venta hasta la instalación con perfección. Liderarás la comunicación entre clientes, instaladores y equipos financieros — guiando cada proyecto como una sinfonía de precisión y confianza.",
      p3: "Nuestros GPs reciben formación en liderazgo, logística y experiencia del cliente. Te damos las herramientas y autonomía para coordinar construcciones en múltiples regiones, gestionar cronogramas y mantener informados a los clientes en cada paso.",
      p4: "Esto no es gestión corporativa — es maestría operativa impulsada por propósito. Verás tu trabajo cobrar vida en techos, centros de carga y en las sonrisas de clientes que ahora viven libres de energía.",
      p5: "Tu liderazgo mantiene latiendo el corazón del movimiento.",
    },

    creditAnalysts: {
      heading: "Analistas de Crédito",
      p1: "Los protectores del equilibrio financiero.",
      p2: "Los Analistas de Crédito en Ancestro aseguran que cada cliente financiado realmente califique para la libertad energética. Revisarás solicitudes en tu país asignado, analizando documentación y capacidad de pago manteniendo equidad y ética.",
      p3: "Este rol combina lógica e intuición — usando números y comprensión humana para extender el acceso de manera responsable. Tu precisión protege a nuestros inversionistas, clientes e instaladores por igual.",
      p4: "Recibirás formación completa en nuestro sistema propietario de evaluación crediticia y mentoría continua de la división financiera. Con cada aprobación, ayudas a otro hogar o empresa a unirse a la red — mientras proteges la estabilidad a largo plazo del ecosistema.",
      p5: "Eres el guardián de la confianza, equilibrando crecimiento con sabiduría.",
    },

    financialAnalysts: {
      heading: "Analistas Financieros",
      p1: "Los arquitectos de la prosperidad.",
      p2: "Los Analistas Financieros convierten energía en capital. Estudiarás cada proyecto, desde flujo de caja y CAPEX hasta impuestos y retornos para inversionistas, asegurando que Ancestro siga siendo una de las plataformas más rentables y transparentes de LATAM.",
      p3: "Te equiparemos con herramientas de modelado financiero, formación en finanzas verdes internacionales y colaboración directa con socios globales. Analizarás no solo números, sino impacto — traduciendo sostenibilidad en retornos estables.",
      p4: "Este rol requiere enfoque, estrategia y visión. Cada informe que entregas ayuda a asegurar inversión institucional, expandiendo nuestro alcance a más hogares, más comunidades, más luz.",
      p5: "Eres el arquitecto detrás del flujo de abundancia.",
    },

    marketingCoordinator: {
      heading: "Coordinador de Marketing",
      p1: "Conectando la Visión con la Comunidad.",
      p2: "Los Coordinadores de Marketing son los mensajeros de Ancestro — llevando la historia de la luz a cada comunidad que servimos. Serás el pulso entre la estrategia nacional y el impacto local, transformando campañas aprobadas en leads reales, eventos reales y conversaciones reales.",
      p3: "Cada clúster depende de tu creatividad y precisión. Ejecutarás campañas publicitarias locales, planificarás activaciones comunitarias y te asegurarás de que toda familia o empresa que necesite libertad energética conozca nuestro nombre.",
      p4: "Pasarás parte de tu semana en el terreno — conociendo gente, aliándote con locales, viendo la diferencia que hace tu trabajo. El resto, colaborarás remotamente con el liderazgo nacional para mantener tu clúster alineado y creciendo.",
      p5: "Esto no es un trabajo de escritorio. Es una invitación a moldear la voz de un movimiento — a construir conciencia que cambie cómo la gente vive, ahorra y energiza sus hogares. Recibirás salario base más bonos ligados al crecimiento de ventas de tu región.",
      p6: "Cuando coordinas para Ancestro, no empujas anuncios. Amplificas la independencia. Ayudas a ciudades enteras a elevarse. Eres la voz de la nueva energía.",
    },
  },
  cultureSection: {
    topBanner: "Nuestra Cultura — #LOSANCESTROS",
    topTitle: "Somos una tribu tribu de hacedores, creadores y protectores.",
    topP1:
      "Valoramos el bienestar, la autodisciplina y el poder divino. Levantamos pesas, respiramos, construimos y devolvemos.",
    topP2:
      "Nuestra gente vive con el ejemplo — cuerpos fuertes, mentes agudas y corazones claros. Vemos nuestro trabajo como ceremonia: cada venta, cada instalación, cada línea de código es una ofrenda al planeta.",
    topP3:
      "Esto no es un empleo. Es un llamado. Si estás listo para alinear tu carrera con tu máximo potencial y ayudar a reescribir la historia de América Latina, la tribu Ancestro te está llamando a casa.",

    bottomBanner: "Únete al Movimiento — #LOSANCESTROS",
    bottomTitle:
      "Forma parte de la tribu que impulsa una América Latina más limpia y libre.",
    bottomParagraph:
      "Valoramos el bienestar, la autodisciplina y el poder divino. Levantamos pesas, respiramos, construimos y devolvemos.",
    applyButton: "Aplica Ahora",
    bottomFooter: "Tu Viaje con Ancestro Comienza Aquí",
  },
  footer: {
    address:
      "Dirección: 123 Green Avenue, Ancestro Business Park, Suite 405, New York, NY 10001, Estados Unidos",
    contact: "Contáctanos: +1 (555) 123-4567  |  +44 20 7946 0958",
  },

  // -----Form----------------------
  common: {
    yes: "SÍ",
    no: "NO",
    back: "Anterior",
    next: "Siguiente",
    upload: "Subir",
    noFileChosen: "Ningún archivo seleccionado",
    required: "Este campo es obligatorio",
    typeHere: "Escribe aquí...",
    submit: "Enviar solicitud",
  },
  forms: {
    salesRepresentative: {
      title: "ANCESTRO ENERGY – POSTULACIÓN REPRESENTANTE DE VENTAS",
      subtitle:
        "Únete al movimiento que lleva energía limpia y libertad a toda América Latina.",
      hashtag: "#LosAncestros",
      submitButton: "Enviar Postulación",

      steps: {
        step1: "Información Personal",
        step2: "Formación y Experiencia",
        step3: "Habilidades y Comunicación",
        step4: "Expectativas del Rol y Ejecución",
        step5: "Visión y Propósito",
        step6: "Alineación Personal y Autoconocimiento",
        step7: "Motivación y Propósito",
        step8: "Personalidad y Comunicación",
        step9: "Crecimiento y Ajuste Cultural",
        step10: "Pasos Finales",
      },

      sections: {
        lifestyleMindset: "Estilo de Vida y Mentalidad",
        motivationPurpose: "Motivación y Propósito",
        personalityComm: "Personalidad y Comunicación",
        growthCulture: "Crecimiento y Ajuste Cultural",
      },

      fields: {
        fullName: "Nombre Completo",
        location: "País y Ciudad",
        whatsapp: "Número de WhatsApp",
        email: "Correo Electrónico",
        dob: "Fecha de Nacimiento",
        languages: "Idiomas que Hablas",
        socialProfile: "Perfil de LinkedIn o Instagram",

        education: "¿Cuál es tu formación académica?",
        salesExperience:
          "¿Tienes experiencia previa en ventas? Si sí, describe los sectores y productos con los que has trabajado.",
        renewableExperience:
          "¿Alguna vez has vendido energía renovable o servicios financieros?",
        bestSalesStory:
          "Describe tu experiencia de venta más exitosa y qué la hizo exitosa.",
        currentWorkStatus:
          "¿Estás trabajando por cuenta propia, en ventas actualmente o en transición desde otro campo?",

        buildTrust:
          "¿Cómo generas confianza con los clientes en la primera interacción?",
        commStyle: "Describe tu estilo de comunicación en tres palabras.",
        motivationRenewable:
          "¿Qué te motiva más de vender soluciones de energía renovable?",
        cameraComfort:
          "¿Qué tan cómodo te sientes hablando frente a cámara o en videollamadas? (1–10)",
        crmComfort:
          "Califica tu nivel de comodidad usando sistemas CRM y herramientas digitales. (1–10)",
        strongMarkets:
          "¿En qué idiomas o mercados te sientes más fuerte vendiendo?",

        remoteWork:
          "¿Estás cómodo trabajando de forma remota con estructura basada en resultados?",
        inPersonDays:
          "¿Puedes asistir a dos días de colaboración presencial por semana?",
        handleObjections:
          "¿Cómo manejas las objeciones o el rechazo en una conversación de ventas?",
        learnProducts:
          "¿Cuál es tu proceso para aprender y dominar rápidamente nuevos productos?",
        lifeChangingSale:
          "Describe un momento en que ayudaste a alguien a tomar una decisión que realmente mejoró su vida.",
        followUpStyle:
          "¿Cuál es tu enfoque para seguimientos y cierre de ventas?",

        whyAncestro: "¿Por qué quieres representar a Ancestro Energy?",
        freedomMeaning:
          "¿Qué significa para ti personalmente “libertad a través de la energía”?",
        latamFuture:
          "¿Cómo crees que la energía renovable transformará América Latina en los próximos 5 años?",
        resonance:
          "Ancestro combina espiritualidad, negocio y filantropía — ¿cuál de estos te resuena más y por qué?",
        incomeGoals:
          "¿Cuáles son tus metas personales de ingresos y estilo de vida para los próximos 12 meses?",
        successVision:
          "¿Cómo visualizas el éxito dentro de un año formando parte de este movimiento?",

        discipline:
          "En una escala del 1 al 10, ¿cómo calificarías tu autodisciplina?",
        dailyHabits: "¿Qué hábitos diarios te mantienen enfocado o en paz?",
        habitToImprove: "¿Qué hábito te gustaría mejorar este año?",
        handleFailure: "¿Cómo manejas el rechazo o el fracaso?",
        meditation:
          "¿Meditas o tienes práctica de mindfulness? ¿Con qué frecuencia?",
        selfTalk: "¿Cómo es tu diálogo interno cuando enfrentas desafíos?",

        currentBlock:
          "¿Qué te está frenando actualmente de alcanzar tu máximo potencial?",
        freedomMoment:
          "Describe un momento en que te sentiste frustrado por límites o sistemas de la sociedad...",
        workThatEnergizes: "¿Qué tipo de trabajo te hace sentir más vivo?",
        whyMissionDriven:
          "¿Por qué quieres formar parte de una empresa con propósito, consciente de la salud como Ancestro?",

        energyType:
          "¿Cómo describirías tu energía natural: introvertido, extrovertido o ambivertido?",
        publicSpeaking:
          "¿Qué tan cómodo te sientes hablando en público o presentando en escenario? (1–10)",
        learningWillingness:
          "¿Qué tan dispuesto estás a aprender material nuevo semanalmente y recibir coaching?",
        structurePreference:
          "¿Prefieres guía estructurada o libertad para autodirigirte?",
        bestEnvironment: "¿Qué tipo de entorno te permite rendir al máximo?",

        spiritualTeam:
          "¿Te sentirías empoderado trabajando en un equipo que valora espiritualidad, salud y mejora continua?",
        physicalWellbeing:
          "¿Cómo mantienes tu bienestar y niveles de energía física?",
        personalGrowth:
          "¿En qué áreas de crecimiento personal estás trabajando activamente ahora?",
        fitnessEncouragement:
          "Si la empresa promoviera metas de fitness y bienestar como parte del desarrollo profesional, ¿cómo te sentirías?",
        fitnessChallenge:
          "Si fueras seleccionado solo después de demostrar compromiso con mejorar tu condición física...",

        photoOptional:
          "Sube una foto reciente que represente quién eres (opcional)",
        uploadCV: "Sube tu CV o hoja de vida.",
        uploadVideo:
          "Sube un video de 1 minuto presentándote y explicando por qué quieres unirte a Ancestro. (Opcional)",
        fullTimeAvailability: "CONFIRMAR DISPONIBILIDAD FULL-TIME.",
        trainingCommitment:
          "Confirmar disposición a participar en la fase inicial de formación y evaluación.",
      },

      thanks: {
        text1:
          "Esto es más que un puesto de ventas — es una iniciación al liderazgo.",
        text2:
          "Cada conversación que tengas esparce la luz de energía limpia, libertad y abundancia por toda América Latina.",
      },
    },
    creditAnalyst: {
      title: "ANCESTRO ENERGY – POSTULACIÓN ANALISTA DE CRÉDITO",
      subtitle:
        "Financia el futuro de la energía limpia e independiente en América Latina.",
      hashtag: "#LosAncestros",
      submitButton: "Enviar Postulación",
      steps: {
        step1: "Información Personal",
        step2: "Educación y Antecedentes",
        step3: "Experiencia Analítica",
        step4: "Estrategia y Sistemas",
        step5: "Toma de Decisiones e Integridad",
        step6: "Visión y Propósito",
        step7: "Alineación Personal y Autoconocimiento",
        step8: "Motivación y Propósito",
        step9: "Personalidad y Comunicación",
        step10: "Crecimiento y Ajuste Cultural",
        step11: "Pasos Finales",
      },
      sections: {
        lifestyleMindset: "Estilo de Vida y Mentalidad",
        motivationPurpose: "Motivación y Propósito",
        personalityComm: "Personalidad y Comunicación",
        growthCulture: "Crecimiento y Ajuste Cultural",
      },
      fields: {
        fullName: "Nombre Completo",
        location: "País / Ciudad",
        whatsapp: "Número de WhatsApp",
        email: "Correo Electrónico",
        dob: "Fecha de Nacimiento",
        languages: "Idiomas que Hablas",
        linkedin: "Perfil de LinkedIn (opcional)",
        education:
          "¿Cuál es tu formación académica (Finanzas, Economía, Administración de Empresas o relacionada)?",
        certifications:
          "¿Posees certificaciones financieras o de análisis de crédito? (sube si aplica)",
        creditYears:
          "¿Cuántos años de experiencia tienes en evaluación de crédito o análisis de riesgo?",
        industriesAnalyzed:
          "¿Qué industrias o tipos de clientes has analizado (residencial, comercial, industrial, PYMES, etc.)?",
        greenLendingExperience:
          "¿Has trabajado alguna vez en financiamiento de energías renovables o préstamos verdes?",
        uploadCV: "Sube tu currículum o CV.",
        creditProcess:
          "Describe tu proceso para evaluar la solvencia crediticia.",
        keyMetrics:
          "¿Cuáles son las métricas o indicadores clave en los que te basas al evaluar un cliente?",
        riskVsOpportunity:
          "¿Cómo equilibras oportunidad versus riesgo en casos límite?",
        softwareUsed:
          "¿Qué sistemas o software utilizas para análisis financiero y crediticio?",
        fraudDetection:
          "¿Alguna vez identificaste fraude o inconsistencias en una solicitud? ¿Cómo respondiste?",
        judgmentUnderPressure:
          "Describe una decisión crediticia que requirió buen juicio bajo presión.",
        documentationProcess:
          "¿Cómo documentas y justificas tus aprobaciones o rechazos?",
        profitabilityTracking:
          "¿Cómo haces seguimiento a la rentabilidad de proyectos y eficiencia de recursos?",
        lessonsLearned:
          "¿Cómo documentas lecciones aprendidas o acciones de mejora continua?",
        processImprovement:
          "¿Alguna vez implementaste un proceso nuevo que ahorró tiempo o costos? Descríbelo.",
        multiProjectCoordination:
          "¿Cómo coordinas múltiples proyectos activos al mismo tiempo?",
        healthIndicators:
          "¿Qué indicadores monitoreas diariamente o semanalmente para medir la salud del proyecto?",
        financialIntegrity:
          "¿Qué significa para ti personalmente “integridad financiera”?",
        fairnessVsProtection:
          "¿Cómo aseguras equidad mientras proteges los activos de la empresa y fondos de inversionistas?",
        pressureStory:
          "¿Alguna vez te presionaron para aprobar un solicitante que no cumplía estándares? ¿Qué hiciste?",
        latamChallenge:
          "¿Cuál crees que es el mayor desafío en préstamos a consumidores o pequeñas empresas en América Latina?",
        preventedLoss:
          "Describe un momento en que tu análisis previno una pérdida o mejoró un sistema.",
        personalValues:
          "¿Qué valores personales guían tu proceso de toma de decisiones?",
        whyAncestro: "¿Por qué quieres unirte a Ancestro Energy?",
        ancestralGrid: "¿Qué significa para ti “construir la Red Ancestral”?",
        economicTransformation:
          "¿Cómo ves que el financiamiento de energías renovables transforme la economía de América Latina?",
        financeTechSpirit:
          "Ancestro combina finanzas, tecnología y espiritualidad — ¿cuál de estos resuena más contigo y por qué?",
        missionContribution:
          "¿Cómo ves que tu trabajo como Analista de Crédito contribuya a la misión general de Ancestro?",
        careerGoals:
          "¿Cuáles son tus metas profesionales para los próximos 3–5 años?",
        startDate:
          "Si fueras aceptado, ¿cuánto tiempo necesitarías para comenzar la capacitación e integración?",
        selfDiscipline:
          "En una escala del 1 al 10, ¿cómo calificarías tu autodisciplina?",
        dailyHabits:
          "¿Qué hábitos diarios te mantienen enfocado o conectado a tierra?",
        habitToImprove: "¿Qué hábito te gustaría mejorar este año?",
        stressHandling: "¿Cómo manejas el estrés o plazos competidos?",
        mindfulness:
          "¿Meditas o tienes una práctica de mindfulness? ¿Con qué frecuencia?",
        selfTalk:
          "¿Cómo describirías tu diálogo interno cuando las cosas se ponen difíciles?",
        currentLimitation:
          "¿Qué te está frenando actualmente de alcanzar tu máximo potencial?",
        financialFreedomFrustration:
          "Describe un momento en que te sentiste frustrado por el control de los sistemas financieros y quisiste crear más libertad o justicia a través de tu trabajo.",
        fulfillingWork:
          "¿Qué tipo de trabajo te da una sensación de realización y orgullo?",
        whyConsciousFinance:
          "¿Por qué quieres ser parte de un equipo de finanzas conscientes y con misión como Ancestro?",
        energyType:
          "¿Te describirías más como introvertido, extrovertido o equilibrado?",
        presentationComfort:
          "¿Qué tan cómodo te sientes presentando hallazgos financieros a liderazgo o inversionistas? (1–10)",
        criticismResponse:
          "¿Cómo manejas la crítica constructiva o el coaching?",
        structureVsAutonomy:
          "¿Prefieres estructura o autonomía al analizar casos?",
        bestEnvironment:
          "¿Qué tipo de entorno te ayuda a enfocarte y rendir al máximo?",
        spiritualTeamValue:
          "¿Te resultaría empoderador trabajar en un equipo que valora la espiritualidad, la salud y la mejora continua?",
        physicalWellbeing:
          "¿Cómo mantienes el bienestar físico y claridad mental durante días largos de análisis?",
        personalGrowth:
          "¿En qué áreas de crecimiento personal estás trabajando activamente ahora?",
        fitnessSupport:
          "Si la empresa promoviera metas de fitness y bienestar como parte del desarrollo profesional, ¿cómo te sentirías?",
        fitnessChallenge:
          "Si fueras seleccionado para este rol solo después de demostrar compromiso con mejorar tu condición física o bienestar general, ¿estarías abierto a ese desafío y a recibir apoyo del equipo?",
        personalPhoto: "Sube una foto reciente que te represente (opcional).",
        finalUploadCV: "Sube tu currículum (si no lo proporcionaste antes).",
        uploadVideo:
          "Sube un video de 1 minuto explicando por qué te apasionan las finanzas éticas y la energía renovable (Opcional)",
        fullTimeAvailability: "Confirmar disponibilidad full-time",
        trainingCommitment:
          "Confirmar disposición a participar en la capacitación e integración de Ancestro",
      },
      thanks: {
        text1: "Gracias por postularte como Analista de Crédito en Ancestro.",
        text2:
          "Revisaremos tu aplicación y te contactaremos en las próximas 48 horas.",
      },
    },
    financialAnalyst: {
      title: "ANCESTRO ENERGY – SOLICITUD DE ANALISTA FINANCIERO",
      subtitle:
        "Convierte energía en prosperidad. Ilumina el futuro de las finanzas.",
      hashtag: "#LosAncestros",
      submitButton: "ENVIAR SOLICITUD",

      steps: {
        step1: "Información Personal",
        step2: "Educación y Antecedentes Profesionales",
        step3: "Experiencia Analítica y Modelado",
        step4: "Comunicación e Informes de Inversión",
        step5: "Visión y Alineación con Ancestro",
        step6: "Estilo de Vida y Mentalidad",
        step7: "Motivación y Propósito",
        step8: "Personalidad y Comunicación",
        step9: "Crecimiento y Ajuste Cultural",
        step10: "Confirmación Final",
      },

      sections: {
        visionPurpose: "Visión y Propósito",
        lifestyleMindset: "Estilo de Vida y Mentalidad",
        motivationPurpose: "Motivación y Propósito",
        personalityComm: "Personalidad y Comunicación",
        growthCulture: "Crecimiento y Ajuste Cultural",
      },

      fields: {
        fullName: "Nombre Completo",
        location: "País / Ciudad",
        whatsapp: "Número de WhatsApp",
        email: "Correo Electrónico",
        dob: "Fecha de Nacimiento",
        languages: "Idiomas que Hablas",
        linkedin: "Perfil de LinkedIn (opcional)",

        education:
          "¿Cuál es tu formación académica (Finanzas, Economía, Contabilidad, Ingeniería o relacionada)?",
        certifications:
          "¿Posees certificaciones profesionales (CF, CPA, FRM, etc.)? (Sube si tienes)",
        yearsExperience:
          "¿Cuántos años de experiencia tienes en análisis o modelado financiero?",
        renewableExperience:
          "¿Has analizado alguna vez proyectos de energía renovable o infraestructura?",
        uploadCV: "Sube tu currículum o CV",

        softwareTools:
          "¿Qué herramientas y software financiero utilizas habitualmente (Excel, Power BI, Python, Bloomberg, etc.)?",
        modelInfluence:
          "Describe un modelo financiero que construiste y que influyó en una decisión importante de negocio o inversión",
        cashFlowApproach:
          "¿Cómo abordas la construcción de modelos de flujo de caja para proyectos intensivos en capital?",
        profitabilityKPIs:
          "¿Cómo evalúas la rentabilidad de un proyecto? ¿Qué KPIs o métricas priorizas?",
        sensitivityAnalysis:
          "¿Has realizado análisis de sensibilidad o stress testing en modelos de inversión?",
        intlVariables:
          "Describe cómo manejas variables de tipo de cambio, inflación e impuestos en proyectos internacionales",
        forecastingExperience:
          "¿Cuál es tu experiencia en forecasting y planificación de escenarios?",
        dataIntegrity:
          "¿Cómo garantizas la precisión e integridad de tus fuentes de datos y supuestos?",

        investorReports:
          "¿Has preparado informes o presentaciones para inversionistas institucionales o alta dirección?",
        communicationStyle:
          "¿Cómo comunicas datos financieros complejos de forma simple, visual y estratégica?",
        documentationType:
          "¿Qué tipo de documentación financiera sueles preparar (dashboards, memos, decks para inversores, etc.)?",
        hiddenOpportunity:
          "Describe una vez que tu análisis descubrió una oportunidad oculta o previno un riesgo financiero",
        profitVsImpact:
          "¿Cómo equilibras objetivos de rentabilidad con métricas de impacto social y ambiental?",
        projectFinancing:
          "¿Has participado en financiamiento de proyectos, due diligence o levantamiento de capital?",

        whyAncestro: "¿Por qué quieres trabajar con Ancestro Energy?",
        latamTransformation:
          "¿Cómo ves que la inversión en energías renovables está transformando Latinoamérica?",
        gridExcitement:
          "¿Qué es lo que más te emociona de construir una red privada renovable para todo un continente?",
        financeTechSpirit:
          "Ancestro une finanzas, tecnología y espiritualidad — ¿cuál de estas dimensiones resuena más contigo y por qué?",
        roleInMission:
          "¿Cómo describirías el rol de un Analista Financiero dentro de una organización con misión?",
        longTermGoals:
          "¿Cuáles son tus metas profesionales y personales a largo plazo?",
        startAvailability:
          "Si eres seleccionado/a, ¿cuándo podrías comenzar la integración y onboarding?",

        selfDiscipline:
          "En una escala del 1 al 10,children ¿cómo calificarías tu autodisciplina?",
        dailyHabits:
          "¿Qué hábitos diarios te mantienen enfocado/a y conectado/a contigo mismo/a?",
        habitImproving:
          "¿Qué hábito personal estás trabajando activamente para mejorar?",
        mentalFatigue:
          "¿Cómo manejas proyectos analíticos largos y la fatiga mental?",
        mindfulnessPractice:
          "¿Meditas, entrenas o tienes alguna práctica de mindfulness? ¿Con qué frecuencia?",
        selfTalkUnderPressure:
          "¿Cómo es tu diálogo interno cuando enfrentas incertidumbre o presión?",

        currentBlock:
          "¿Qué te está frenando actualmente de alcanzar tu máximo potencial?",
        traditionalFinanceFrustration:
          "Describe una vez que te sentiste frustrado/a por la estructura de las finanzas tradicionales y quisiste crear más libertad o equidad",
        satisfyingWork:
          "¿Qué tipo de trabajo te genera una profunda satisfacción y orgullo?",
        whyConsciousFinance:
          "¿Por qué quieres ser parte de un movimiento financiero consciente como Ancestro?",

        energyType:
          "¿Cómo describirías tu energía natural: introvertido, extrovertido o ambivertido?",
        presentationComfort:
          "¿Qué tan cómodo/a te sientes presentando datos y recomendaciones a liderazgo o inversionistas? (1–10)",
        learningOpenness:
          "¿Qué tan abierto/a estás al coaching y al aprendizaje continuo?",
        independenceVsTeam:
          "¿Prefieres trabajar de forma independiente o en colaboración al analizar proyectos?",
        idealEnvironment:
          "¿Qué tipo de entorno te ayuda a mantenerte creativo/a y enfocado/a?",

        spiritualTeamValue:
          "¿Te resultaría empoderador trabajar en un equipo que valora la espiritualidad, la salud y el crecimiento personal continuo?",
        energyMaintenance:
          "¿Cómo mantienes tu energía física y mental trabajando en roles analíticos?",
        personalGrowth:
          "¿En qué áreas de crecimiento personal estás trabajando actualmente?",
        fitnessSupport:
          "Si la empresa impulsara metas de fitness y bienestar como parte del desarrollo profesional, ¿cómo te sentirías?",
        fitnessChallenge:
          "Si fueras seleccionado/a solo tras demostrar compromiso con mejorar tu condición física, ¿estarías abierto/a al desafío y al apoyo del equipo?",
        personalPhoto: "Sube una foto reciente que te represente (opcional)",

        finalUploadCV: "Sube tu currículum (si no lo hiciste antes)",
        uploadVideo:
          "Sube un video de 1 minuto presentándote y tu pasión por la transformación financiera renovable (opcional)",

        fullTimeAvailability:
          "¿Estás disponible para trabajar tiempo completo en este rol?",
        trainingCommitment:
          "¿Estás dispuesto/a a participar en el programa de onboarding y entrenamiento de Ancestro?",
      },

      thanks: {
        text1: "Gracias por postularte como Analista Financiero de Ancestro.",
        text2:
          "Revisaremos tu solicitud y te contactaremos en menos de 48 horas.",
      },
    },
    installer: {
      title: "ANCESTRO ENERGY – SOLICITUD DE INSTALADOR",
      subtitle:
        "Únete a los constructores que impulsan la revolución renovable de América Latina.",
      hashtag: "#LosAncestros",
      submitButton: "Enviar Solicitud",

      steps: {
        step1: "Información de la Empresa y Contacto",
        step2: "Experiencia y Capacidad",
        step3: "Certificaciones y Referencias",
        step4: "Flujo de Trabajo y Operaciones",
        step5: "Filosofía y Cultura del Equipo",
        step6: "Visión de Futuro",
        step7: "Estilo de Vida y Mentalidad",
        step8: "Motivación y Propósito",
        step9: "Personalidad y Comunicación",
        step10: "Crecimiento y Ajuste Cultural",
        step11: "Pasos Finales",
      },

      sections: {
        lifestyleMindset: "Estilo de Vida y Mentalidad",
        motivationPurpose: "Motivación y Propósito",
        personalityComm: "Personalidad y Comunicación",
        growthCulture: "Crecimiento y Ajuste Cultural",
      },

      fields: {
        companyName: "Nombre Completo o Razón Social de la Empresa",
        location: "País / Ciudad / Región de Operación",
        businessReg: "Registro Mercantil (subir certificado legal si aplica)",
        website: "Sitio Web o Redes Sociales de la Empresa (si tienes)",
        whatsapp: "Número de WhatsApp",
        email: "Correo Electrónico",
        contactPerson: "Persona de Contacto Principal",
        yearsInOperation: "Años en Operación",

        systemTypes:
          "¿Qué tipos de sistemas renovables has instalado? (Paneles solares, baterías, cargadores EV, sistemas híbridos, etc.)",
        totalProjects:
          "¿Cuántos proyectos has completado en total hasta la fecha?",
        avgSystemSize: "¿Cuál es el tamaño promedio de tus instalaciones (kW)?",
        teamSize: "¿Cuántos técnicos o trabajadores forman parte de tu equipo?",
        certifiedSupervisor:
          "¿Tienes un ingeniero eléctrico dedicado o supervisor certificado en plantilla?",
        equipment:
          "¿Qué herramientas, vehículos y equipos de seguridad posees actualmente?",
        brands:
          "¿Con qué marcas de inversores, paneles y baterías estás familiarizado?",
        pastWork:
          "¿Has trabajado anteriormente bajo un EPC grande o directamente con clientes?",
        serviceRegions:
          "¿Qué regiones o ciudades puedes atender dentro de tu país?",
        regionalTravel:
          "¿Estás disponible para viajar o expandirte regionalmente bajo la red de Ancestro?",

        certificationsFile:
          "Sube todas tus certificaciones relevantes (eléctricas, solares, baterías, EV o seguridad).",
        pastProjectsFile:
          "Sube fotos de 3–5 proyectos anteriores (tejado, suelo o EV).",
        references:
          "Proporciona dos referencias profesionales (clientes o empresas). Incluye nombre, teléfono y correo.",
        insuranceFile:
          "¿Tienes seguro de responsabilidad civil, de instalación o protección laboral? (subir comprobante)",
        safetyTraining:
          "¿Tus instaladores están capacitados en protección contra caídas, seguridad eléctrica y primeros auxilios?",

        workflow:
          "Describe tu flujo de trabajo típico desde recibir los documentos hasta la entrega del proyecto.",
        softwareTools:
          "¿Qué software o herramientas usas para programación, diseño o reportes?",
        qualityVerification:
          "¿Cómo verificas que las instalaciones cumplan estándares de calidad y seguridad?",
        clientCommunication:
          "¿Cuál es tu proceso para comunicar avances a clientes o gerentes de proyecto?",
        fieldChallenges:
          "¿Cuáles son los desafíos más comunes en campo y cómo los resuelves?",
        installationTime:
          "¿Cuál es tu tiempo promedio de instalación para un sistema de 10 kW? ¿Y para uno de 100 kW?",
        maintenanceServices:
          "¿Ofreces servicios de mantenimiento o monitoreo continuo?",
        teamProfessionalism:
          "¿Cómo aseguras que tu equipo se mantenga profesional y presentable en sitio?",

        energyFreedom:
          "¿Qué significa para ti “construir libertad energética”?",
        leadershipStyle:
          "Describe tu estilo de liderazgo al dirigir tu equipo.",
        teamMorale:
          "¿Cómo mantienes la moral y el enfoque alto durante instalaciones largas o difíciles?",
        motivation: "¿Qué te motiva a seguir trabajando en este sector?",
        goodVsGreat:
          "¿Qué crees que separa a un buen instalador de uno excelente?",
        philanthropy:
          "Los proyectos de Ancestro combinan tecnología y filantropía. ¿Cómo te sientes instalando sistemas que también sirven a comunidades de bajos ingresos o indígenas?",
        brandRepresentation:
          "¿Estás cómodo representando los estándares y valores de marca de Ancestro en cada obra?",

        whyAncestro: "¿Por qué quieres trabajar con Ancestro Energy?",
        latamNetwork:
          "¿Qué te emociona más de unirte a una red renovable en toda LATAM?",
        futureVision: "¿Dónde ves tu empresa o carrera en 3 años?",
        monthlyCapacity:
          "¿Cuántos proyectos podría completar tu equipo mensualmente de forma realista?",
        partnershipType:
          "¿Qué tipo de alianza prefieres: subcontratista, instalador exclusivo o socio EPC regional?",
        ancestroAcademy:
          "¿Estás interesado en futuras capacitaciones o certificaciones bajo el programa Ancestro Academy?",

        selfDiscipline:
          "En una escala del 1–10, ¿cómo calificarías tu autodisciplina?",
        dailyHabits: "¿Qué hábitos diarios te mantienen enfocado o enraizado?",
        habitToImprove: "¿Qué hábito te gustaría mejorar este año?",
        stressHandling: "¿Cómo manejas el estrés o contratiempos en obra?",
        mindfulness:
          "¿Meditas, haces ejercicio o tienes alguna práctica de mindfulness? ¿Con qué frecuencia?",
        selfTalk:
          "¿Cómo describirías tu diálogo interno cuando las cosas se ponen difíciles?",

        craftImprovement: "¿Qué te impulsa a seguir mejorando tu oficio?",
        frustrationMoment1:
          "Describe un momento en que te sentiste frustrado por los límites del sistema y quisiste crear más libertad para ti o tu comunidad.",
        frustrationMoment2:
          "Describe otro momento en que te sentiste frustrado por los límites del sistema y quisiste crear más libertad para ti o tu comunidad.",
        missionAlignment:
          "¿Por qué quieres formar parte de una empresa con propósito y consciente de la salud como Ancestro?",

        energyType:
          "¿Cómo describirías tu energía natural: introvertido, extrovertido o ambivertido?",
        leadershipComfort:
          "¿Qué tan cómodo estás capacitando a otros o liderando un equipo? (1–10)",
        learningOpenness:
          "¿Qué tan abierto estás a aprender nuevos métodos o tecnologías cada mes?",
        communicationPref:
          "¿Cómo prefieres comunicarte con tus gerentes de proyecto: notas de voz, llamadas o reportes escritos?",
        bestEnvironment: "¿Qué tipo de entorno te ayuda a rendir al máximo?",

        teamValues:
          "¿Te sentirías empoderado trabajando en un equipo que valora la espiritualidad, la salud y la mejora continua?",
        physicalWellbeing:
          "¿Cómo mantienes tu bienestar físico y niveles de energía trabajando largas jornadas al aire libre?",
        personalGrowth:
          "¿En qué áreas de crecimiento personal estás trabajando activamente ahora?",
        fitnessSupport:
          "Si la empresa promoviera metas de fitness y bienestar como parte del desarrollo profesional, ¿cómo te sentirías?",
        fitnessChallenge:
          "Si fueras seleccionado solo después de demostrar compromiso con mejorar tu condición física o bienestar general, ¿estarías abierto a ese desafío y a recibir apoyo del equipo?",
        personalPhoto: "Sube una foto reciente que te represente (opcional).",

        companyDocsFile:
          "Sube perfil de empresa, cédula o documentos de registro.",
        cvFile: "Sube tu CV o hoja de vida (para personas naturales).",
        videoFile:
          "Sube un video de 1 minuto presentándote (o a tu equipo) y explicando por qué quieres unirte a Ancestro. (Opcional)",
        availabilityConfirmation:
          "Confirmo disponibilidad para onboarding y evaluación en campo.",
      },

      thanks: {
        text1: "Gracias por postularte como Socio Instalador de Ancestro.",
        text2:
          "Revisaremos tu solicitud y te contactaremos en menos de 48 horas.",
      },
    },
    projectManager: {
      title: "ANCESTRO ENERGY – SOLICITUD DE PROJECT MANAGER",
      subtitle: "Lidera la coordinación que energiza un continente.",
      hashtag: "#LosAncestros",
      submitButton: "Enviar Solicitud",

      steps: {
        step1: "Información Personal",
        step2: "Experiencia y Calificaciones",
        step3: "Liderazgo y Ejecución",
        step4: "Estrategia y Sistemas",
        step5: "Visión y Propósito",
        step6: "Estilo de Vida y Mentalidad",
        step7: "Motivación y Propósito",
        step8: "Personalidad y Comunicación",
        step9: "Crecimiento y Ajuste Cultural",
        step10: "Pasos Finales",
      },

      sections: {
        lifestyleMindset: "Estilo de Vida y Mentalidad",
        motivationPurpose: "Motivación y Propósito",
        personalityComm: "Personalidad y Comunicación",
        growthCulture: "Crecimiento y Ajuste Cultural",
      },

      fields: {
        fullName: "Nombre Completo",
        location: "País / Ciudad",
        whatsapp: "Número de WhatsApp",
        email: "Correo Electrónico",
        dob: "Fecha de Nacimiento",
        languages: "Idiomas que Hablas",
        linkedin: "Perfil de LinkedIn (opcional)",

        pmYears: "¿Cuántos años de experiencia tienes en gestión de proyectos?",
        industries:
          "¿En qué industrias has gestionado proyectos (solar, construcción, telecom, infraestructura, etc.)?",
        largeProject:
          "Describe un proyecto a gran escala que lideraste de principio a fin. ¿Cuál fue el resultado?",
        teamSizeManaged:
          "¿Cuál fue el equipo más grande o número de subcontratistas que has supervisado?",
        toolsUsed:
          "¿Qué herramientas o software usas para programación, comunicación e informes (Asana, Trello, ClickUp, etc.)?",
        renewableExperience:
          "¿Has trabajado antes con equipos de energía renovable o instalación técnica?",
        education:
          "¿Cuál es tu formación académica o certificación (ingeniería, PMP, etc.)?",
        certificatesFile:
          "Sube certificados, diplomas o cartas de referencia relevantes.",

        teamAlignment:
          "¿Cómo aseguras que tu equipo permanezca alineado, responsable y en cronograma?",
        conflictResolution:
          "¿Cuál es tu proceso para resolver conflictos o retrasos entre departamentos?",
        clientCommunication:
          "¿Cómo manejas la comunicación con clientes en situaciones de estrés?",
        leadershipStyle: "Describe tu estilo de liderazgo en tres palabras.",
        balanceSpeedSafety:
          "¿Cómo equilibras velocidad, seguridad y calidad en proyectos complejos?",
        motivationBeyondDeadlines:
          "¿Qué te motiva a que un proyecto tenga éxito más allá de cumplir plazos?",
        turnaroundStory:
          "Da un ejemplo de cuando convertiste un proyecto fallido en un éxito.",

        profitabilityTracking:
          "¿Cómo haces seguimiento a la rentabilidad del proyecto y eficiencia de recursos?",
        lessonsLearned:
          "¿Cómo documentas lecciones aprendidas o acciones de mejora continua?",
        processImprovement:
          "¿Alguna vez implementaste un proceso nuevo que ahorró tiempo o costos? Descríbelo.",
        multiProjectCoordination:
          "¿Cómo coordinas múltiples proyectos activos al mismo tiempo?",
        projectHealthIndicators:
          "¿Qué indicadores monitoreas diariamente o semanalmente para medir la salud del proyecto?",

        whyAncestro: "¿Por qué quieres unirte a Ancestro Energy?",
        ancestralGridMeaning:
          "¿Qué significa para ti “construir la Red Ancestral”?",
        countryTransformation:
          "¿Cómo ves que el desarrollo de energías renovables transforme tu país?",
        resonanceTriangle:
          "Ancestro conecta finanzas, construcción y espiritualidad — ¿qué parte de ese triángulo te resuena más y por qué?",
        threeYearGoals:
          "¿Cuáles son tus metas profesionales y personales para los próximos 3 años?",
        successDefinition:
          "¿Cómo defines el éxito como Project Manager dentro de un movimiento como Ancestro?",

        selfDiscipline:
          "En una escala del 1 al 10, ¿cómo calificarías tu autodisciplina?",
        dailyHabits:
          "¿Qué hábitos diarios te mantienen enfocado o conectado a tierra?",
        habitToImprove: "¿Qué hábito te gustaría mejorar este año?",
        handlePressure:
          "¿Cómo manejas la presión, contratiempos o incertidumbre?",
        mindfulness: "¿Meditas o practicas mindfulness? ¿Con qué frecuencia?",
        internalDialogue:
          "¿Cómo describirías tu diálogo interno cuando aparecen desafíos?",

        currentLimitation:
          "¿Qué te está limitando actualmente de alcanzar tu máximo potencial?",
        freedomFrustration:
          "Describe un momento en que te sentiste frustrado por los sistemas de la sociedad y quisiste crear más libertad — para ti o para otros.",
        workThatEnergizes: "¿Qué tipo de trabajo te hace sentir más vivo?",
        whyHealthPurposeOrg:
          "¿Por qué quieres pertenecer a una organización con propósito y consciente de la salud como Ancestro?",

        energyType: "¿Eres más introvertido, extrovertido o ambivertido?",
        publicSpeaking:
          "¿Qué tan cómodo te sientes hablando en público o presentando en escenario? (1–10)",
        learningOpenness:
          "¿Qué tan abierto estás al aprendizaje semanal y al coaching?",
        structureVsAutonomy: "¿Prefieres estructura o autonomía al liderar?",
        bestEnvironment: "¿Qué entorno saca lo mejor de tu rendimiento?",

        spiritualTeam:
          "¿Te sentirías empoderado trabajando en un equipo que valora espiritualidad, salud y mejora continua?",
        physicalWellbeing:
          "¿Cómo mantienes tu bienestar físico y niveles de energía en proyectos demandantes?",
        personalGrowth:
          "¿En qué áreas de crecimiento personal estás trabajando activamente ahora?",
        fitnessSupport:
          "Si la empresa promoviera metas de fitness y bienestar como parte del desarrollo profesional, ¿cómo te sentirías?",
        fitnessChallenge:
          "Si fueras seleccionado solo después de demostrar compromiso con mejorar tu condición física o bienestar general, ¿aceptarías ese desafío y el apoyo del equipo?",
        personalPhoto: "Sube una foto reciente que te represente (opcional).",

        cvFile: "Sube tu CV o hoja de vida",
        videoFile:
          "Sube un video de 1 minuto presentándote y explicando cómo lideras equipos. (Opcional)",
        fullTimeAvailability: "CONFIRMAR DISPONIBILIDAD FULL-TIME.",
        trainingCommitment:
          "Confirmar disposición a participar en onboarding y entrenamiento.",
      },

      thanks: {
        text1:
          "Gracias por postularte como Project Manager en Ancestro Energy.",
        text2:
          "Revisaremos tu solicitud y te contactaremos en menos de 48 horas.",
      },
    },
    marketingCoordinator: {
      title: "ANCESTRO ENERGY – SOLICITUD DE COORDINADOR(A) DE MARKETING",
      subtitle:
        "Únete al movimiento que define cómo Latinoamérica ve, siente y adopta la energía renovable.",
      hashtag: "#LosAncestros",
      submitButton: "Enviar Solicitud",

      steps: {
        step1: "Información Personal",
        step2: "Educación y Antecedentes",
        step3: "Habilidades y Ejecución",
        step4: "Expectativas del Rol y Colaboración",
        step5: "Visión y Propósito",
        step6: "Estilo de Vida y Mentalidad",
        step7: "Motivación y Propósito",
        step8: "Personalidad y Comunicación",
        step9: "Crecimiento y Ajuste Cultural",
        step10: "Pasos Finales",
      },

      sections: {
        lifestyleMindset: "Estilo de Vida y Mentalidad",
        motivationPurpose: "Motivación y Propósito",
        personalityComm: "Personalidad y Comunicación",
        growthCulture: "Crecimiento y Ajuste Cultural",
      },

      fields: {
        fullName: "Nombre Completo",
        location: "País / Ciudad",
        whatsapp: "Número de WhatsApp",
        email: "Correo Electrónico",
        dob: "Fecha de Nacimiento",
        languages: "Idiomas que Hablas",
        linkedin: "Perfil de LinkedIn (opcional)",

        education:
          "¿Cuál es tu formación académica (marketing, comunicación, negocios o relacionada)?",
        yearsExperience:
          "¿Cuántos años de experiencia tienes en marketing, eventos o coordinación de campañas?",
        digitalCampaigns:
          "¿Has gestionado campañas publicitarias digitales (Facebook, Instagram, Google, etc.)?",
        successfulCampaign:
          "Describe una campaña de marketing exitosa que hayas ejecutado — ¿qué la hizo funcionar?",
        eventsExperience:
          "¿Has gestionado eventos, activaciones comunitarias o alianzas? Si sí, describe.",

        marketingTools:
          "¿Qué herramientas y plataformas de marketing has usado (Meta Ads Manager, Canva, CRM, Mailchimp, etc.)?",
        localAdaptation:
          "Describe tu proceso creativo al adaptar materiales nacionales o de marca a audiencias locales.",
        campaignMetrics:
          "¿Cómo mides y evalúas el éxito de tus campañas de marketing?",
        salesCoordination:
          "Califica tu capacidad para trabajar con equipos de ventas y compartir leads efectivamente. (1–10)",
        eventComfort:
          "¿Qué tan cómodo estás planificando y ejecutando eventos presenciales? (1–10)",
        multiProjectOrg:
          "¿Cómo te organizas cuando manejas múltiples campañas o proyectos a la vez?",
        excitingProjects:
          "¿Qué tipo de proyectos de marketing te emocionan más — digital, eventos, engagement comunitario o alianzas?",

        hybridWork:
          "¿Estás cómodo trabajando en formato híbrido (mínimo 2 veces por semana en oficina) con un equipo orientado a resultados?",
        budgetManagement:
          "¿Te sientes seguro gestionando un presupuesto de marketing y reportando ROI?",
        underperformingCampaign:
          "¿Cómo manejarías una campaña publicitaria que está teniendo bajo rendimiento?",
        salesCoordinationProcess:
          "Describe cómo coordinarías con un equipo de ventas para asegurar que los leads se sigan y conviertan.",
        brandAwarenessStrategy:
          "¿Qué pasos tomarías para construir reconocimiento de marca en una nueva ciudad o región?",
        salesMotivation:
          "¿Qué te motiva más de ayudar a un equipo de ventas a crecer mediante mejor marketing y comunicación?",

        whyAncestro:
          "¿Por qué quieres coordinar marketing para Ancestro Energy?",
        bridgingVisionVillage:
          "¿Qué significa para ti personalmente “Conectar la Visión con la Aldea”?",
        marketingForRenewables:
          "¿Cómo crees que el marketing puede acelerar la transición renovable en Latinoamérica?",
        spiritualityBusinessPhilanthropy:
          "Ancestro combina espiritualidad, negocio y filantropía — ¿qué parte te resuena más y por qué?",
        incomeGoals:
          "¿Cuáles son tus metas de crecimiento profesional e ingresos en los próximos 12 meses?",
        successInOneYear:
          "¿Cómo se vería el éxito para ti en un año dentro de este movimiento?",

        selfDiscipline:
          "En una escala del 1 al 10, ¿cómo calificarías tu autodisciplina?",
        dailyHabits:
          "¿Qué hábitos diarios te mantienen enfocado o conectado a tierra?",
        habitToImprove: "¿Qué hábito te gustaría mejorar este año?",
        creativeBurnout:
          "¿Cómo manejas el burnout creativo o los plazos ajustados?",
        mindfulness:
          "¿Meditas o tienes una práctica de mindfulness? ¿Con qué frecuencia?",
        stressSelfTalk:
          "¿Cómo describirías tu diálogo interno cuando manejas estrés o presión?",

        currentLimitation:
          "¿Qué te está limitando actualmente de alcanzar tu máximo potencial?",
        freedomFrustration:
          "Describe un momento en que te sentiste frustrado por límites o sistemas de la sociedad y quisiste crear más libertad — para ti o para otros.",
        workThatEnergizes: "¿Qué tipo de trabajo te hace sentir más vivo?",
        whyHealthPurposeOrg:
          "¿Por qué quieres pertenecer a una empresa con propósito y consciente de la salud como Ancestro?",

        energyType:
          "¿Cómo describirías tu energía natural: introvertido, extrovertido o ambivertido?",
        presentationComfort:
          "¿Qué tan cómodo estás presentando ideas o reportes a un grupo? (1–10)",
        learningOpenness:
          "¿Qué tan cómodo estás aprendiendo nuevas herramientas digitales o recibiendo coaching?",
        structureVsFreedom:
          "¿Prefieres campañas estructuradas o libertad creativa?",
        bestEnvironment: "¿Qué tipo de entorno te ayuda a rendir al máximo?",

        spiritualTeamValue:
          "¿Te sentirías empoderado trabajando en un equipo que valora espiritualidad, salud y mejora continua?",
        physicalWellbeing:
          "¿Cómo mantienes tu bienestar físico y niveles de energía?",
        personalGrowth:
          "¿En qué áreas de crecimiento personal estás trabajando activamente ahora?",
        fitnessSupport:
          "Si la empresa promoviera metas de fitness y bienestar como parte del desarrollo profesional, ¿cómo te sentirías?",
        fitnessChallenge:
          "Si fueras seleccionado solo después de demostrar compromiso con mejorar tu condición física o bienestar general, ¿aceptarías ese desafío y el apoyo del equipo?",
        personalPhoto: "Sube una foto reciente que te represente (opcional).",

        cvFile: "Sube tu CV o hoja de vida",
        videoFile:
          "Sube un video de 1 minuto presentándote y tu pasión por el marketing consciente en renovables (Opcional)",
        fullTimeAvailability: "CONFIRMAR DISPONIBILIDAD FULL-TIME.",
        trainingCommitment:
          "Confirmar disposición a participar en onboarding y entrenamiento de Ancestro.",
      },

      thanks: {
        text1:
          "Gracias por postularte como Coordinador(a) de Marketing en Ancestro Energy.",
        text2:
          "Revisaremos tu solicitud y te contactaremos en menos de 48 horas.",
      },
    },
  },
};
// i18n initialization
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
