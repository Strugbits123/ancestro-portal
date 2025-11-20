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
    applicants: "Ancestro Applicants"
  },
  heroSection: {
    banner: "Join the Movement — #LOSANCESTROS",
    title: "We are not hiring employees — we are awakening leaders.",
    paragraph1: "Across Latin America, Ancestro Energy is building the first private renewable energy grid: a system owned by the people, powered by the sun, and guided by spirit. We combine modern technology with ancestral wisdom — because progress and nature were never meant to be separate.",
    paragraph2: "Here, we believe in health, discipline, freedom, and prosperity through purpose. Every person who joins us becomes part of something much larger than a company — a continental movement for energy independence, abundance, and truth.",
    applyButton: "Apply Now"
  },
  missionSection: {
    badge: "Our Mission",
    card1Title: "The Ancestral Grid",
    card1Paragraph1: "To create a decentralized web of solar, battery, and EV infrastructure that reconnects Latin America to its natural power. This is more than electricity — it’s sovereignty.",
    card1Paragraph2: "We are reviving the primal human right to generate your own energy, to live freely, and to provide for your community with your own hands and mind.",

    card2Title: "Why Join Ancestro",
    card2Bullet1: "Prosperity With Purpose: Earn high commissions and real equity potential.",
    card2Bullet2: "Global Network: Operate across 18 nations under one spiritual and financial mission.",
    card2Bullet3: "Health & Freedom: Partial remote culture, sunlight work, and clean-living energy.",
    card2Bullet4: "Education & Growth: World-class sales, finance, and leadership training.",
    card2Bullet5: "Philanthropy: Every project funds community solar and indigenous empowerment."
  },
  rolesSection: {
    applyButton: "Apply Now",

    salesRepresentative: {
      heading: "Sales Representatives",
      p1: "The voice of the Ancestro revolution.",
      p2: "As a Sales Representative, you are the bridge between the people and their power. You help families and companies unlock clean energy — solar, battery, and EV systems with zero upfront cost — bringing freedom where dependency once existed.",
      p3: "Your work directly transforms communities, reducing costs and emissions while generating abundance for yourself and your clients. You’ll master negotiation, storytelling, and renewable finance — backed by the continent’s most advanced project management system.",
      p4: "We provide mentorship, training, and all the tools to scale your success remotely while still staying connected through weekly meetings and live events.",
      p5: "Those who thrive here are disciplined, magnetic communicators with heart. You’re not just selling — you’re awakening people to a new way of life."
    },

    installers: {
      heading: "Installers",
      p1: "The builders of independence.",
      p2: "Installers are the backbone of Ancestro — the hands turning vision into reality. Every bolt tightened, every wire connected, is a step toward freedom for a family or business.",
      p3: "You’ll gain access to consistent, high-paying projects through our dealer portal. Our project managers handle permits, credit, and materials, so you can focus on what you do best: building.",
      p4: "We train all teams on our quality, safety, and speed standards — elevating you into a regional elite of renewable builders. Your work will stand as a legacy across rooftops and charging stations throughout the continent.",
      p5: "When you install with Ancestro, you’re not a contractor. You’re a warrior of light building the new grid."
    },

    projectManagers: {
      heading: "Project Managers",
      p1: "The conductors of creation.",
      p2: "Ancestro Project Managers are the orchestrators ensuring that every project flows from sale to installation with perfection. You will lead communication between clients, installers, and finance teams — guiding each project like a symphony of precision and trust.",
      p3: "Our PMs are trained in leadership, logistics, and client experience. We give you the tools and autonomy to coordinate construction across multiple regions, manage schedules, and keep customers informed at every step.",
      p4: "This is not corporate management — this is operational mastery driven by purpose. You’ll see your work come alive on rooftops, in charging hubs, and in the smiles of clients who now live energy-free.",
      p5: "Your leadership keeps the movement’s heart beating."
    },

    creditAnalysts: {
      heading: "Credit Analysts",
      p1: "The protectors of financial balance.",
      p2: "Credit Analysts at Ancestro ensure that every customer financed truly qualifies for energy freedom. You’ll review applications in your assigned country, analyzing documentation and payment capacity while maintaining fairness and ethics.",
      p3: "This role blends logic and intuition — using numbers and human understanding to extend access responsibly. Your precision safeguards our investors, clients, and installers alike.",
      p4: "You’ll receive full training in our proprietary credit evaluation system and ongoing mentorship from our finance division. With every approval, you help another home or business join the grid — while protecting the long-term stability of the ecosystem.",
      p5: "You are the gatekeeper of trust, balancing growth with wisdom."
    },

    financialAnalysts: {
      heading: "Financial Analysts",
      p1: "The architects of prosperity.",
      p2: "Financial Analysts turn energy into equity. You’ll study each project, from cash flow and CAPEX to taxes and investor returns, ensuring Ancestro remains one of the most profitable and transparent platforms in LATAM.",
      p3: "We’ll equip you with financial modeling tools, training in international green finance, and direct collaboration with global partners. You’ll analyze not just numbers, but impact — translating sustainability into stable returns.",
      p4: "This role requires focus, strategy, and vision. Every report you deliver helps secure institutional investment, expanding our reach to more homes, more communities, more light.",
      p5: "You are the architect behind the flow of abundance."
    },

    marketingCoordinator: {
      heading: "Marketing Coordinator",
      p1: "Bridging the Vision and the Village.",
      p2: "Marketing Coordinators are the messengers of Ancestro — carrying the story of light into every community we serve. You’ll be the pulse between national strategy and local impact, transforming approved campaigns into real leads, real events, and real conversations.",
      p3: "Each cluster depends on your creativity and precision. You’ll run local ad campaigns, plan community activations, and make sure that every family or business who needs energy freedom knows our name.",
      p4: "You’ll spend part of your week in the field — meeting people, partnering with local venues, seeing the difference your work makes. The rest, you’ll collaborate remotely with national leadership to ensure your cluster stays aligned and growing.",
      p5: "This is not a desk job. It’s an invitation to shape the voice of a movement — to build awareness that changes how people live, save, and power their homes. You’ll be paid a base salary, plus bonuses tied to the growth of your region’s sales.",
      p6: "When you coordinate for Ancestro, you’re not pushing ads. You’re amplifying independence. You’re helping entire cities rise. You’re the voice of the new energy."
    }
  },
  cultureSection: {
    topBanner: "Our Culture — #LOSANCESTROS",
    topTitle: "We are a tribe of doers, creators, and protectors.",
    topP1: "We value wellness, self-discipline, and divine power. We lift, we breathe, we build, and we give back.",
    topP2: "Our people live by example — strong bodies, sharp minds, and clear hearts. We see our work as ceremony: every sale, every installation, every line of code is an offering to the planet.",
    topP3: "This is not a job. It’s a calling. If you are ready to align your career with your highest potential and help rewrite the story of Latin America, the Ancestro tribe is calling you home.",

    bottomBanner: "Join the Movement — #LOSANCESTROS",
    bottomTitle: "Be part of the tribe powering a cleaner, freer Latin America.",
    bottomParagraph: "We value wellness, self-discipline, and divine power. We lift, we breathe, we build, and we give back.",
    applyButton: "Apply Now",
    bottomFooter: "Your Ancestro Journey Begins Here"
  },
  footer: {
    address: "Address: 123 Green Avenue, Ancestro Business Park, Suite 405, New York, NY 10001, United States",
    contact: "Contact us: +1 (555) 123-4567  |  +44 20 7946 0958"
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
    typeHere: "Type here..."
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
        step10: "Final Steps"
      },

      sections: {
        lifestyleMindset: "Lifestyle & Mindset",
        motivationPurpose: "Motivation & Purpose",
        personalityComm: "Personality & Communication",
        growthCulture: "Growth & Culture Fit"
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
        salesExperience: "Do you have prior experience in sales? If yes, describe the industries and products you’ve worked with.",
        renewableExperience: "Have you ever sold renewable energy or financial services before?",
        bestSalesStory: "Describe your most successful sales experience and what made it successful.",
        currentWorkStatus: "Are you currently self-employed, working in sales, or transitioning from another field?",

        buildTrust: "How do you build trust with clients during your first interaction?",
        commStyle: "Describe your communication style in three words.",
        motivationRenewable: "What motivates you most about selling renewable energy solutions?",
        cameraComfort: "How comfortable are you speaking on camera or conducting video calls? (1–10)",
        crmComfort: "Rate your comfort level using CRM systems and digital tools. (1–10)",
        strongMarkets: "What languages or markets are you most confident selling in?",

        remoteWork: "Are you comfortable working remotely with a results-based structure?",
        inPersonDays: "Are you able to attend two in-person collaboration days per week?",
        handleObjections: "How do you handle objections or rejection in a sales conversation?",
        learnProducts: "What’s your process for learning and mastering new products quickly?",
        lifeChangingSale: "Describe a time you helped someone make a decision that truly improved their life.",
        followUpStyle: "What’s your approach to follow-ups and closing deals?",

        whyAncestro: "Why do you want to represent Ancestro Energy?",
        freedomMeaning: "What does “freedom through energy” mean to you personally?",
        latamFuture: "How do you think renewable energy will transform Latin America in the next 5 years?",
        resonance: "Ancestro combines spirituality, business, and philanthropy — which of these resonates most with you and why?",
        incomeGoals: "What are your personal income and lifestyle goals for the next 12 months?",
        successVision: "What will success look like for you one year from now as part of this movement?",

        discipline: "On a scale of 1–10, how would you rate your self-discipline?",
        dailyHabits: "What daily habits keep you focused or grounded?",
        habitToImprove: "What’s one habit you’d like to improve this year?",
        handleFailure: "How do you handle rejection or failure?",
        meditation: "Do you meditate or have a mindfulness practice? If so, how often?",
        selfTalk: "How would you describe your self-talk when you face challenges?",

        currentBlock: "What is currently holding you back from your highest potential?",
        freedomMoment: "Describe a moment when you felt frustrated by limits or systems in society...",
        workThatEnergizes: "What kind of work makes you feel most alive?",
        whyMissionDriven: "Why do you want to be part of a mission-driven, health-conscious company like Ancestro?",

        energyType: "How would you describe your natural energy: introvert, extrovert, or ambivert?",
        publicSpeaking: "How comfortable are you speaking to a group or presenting on stage? (1–10)",
        learningWillingness: "How comfortable are you learning new material weekly or receiving coaching?",
        structurePreference: "Do you prefer structured guidance or freedom to self-direct?",
        bestEnvironment: "What type of environment helps you perform at your best?",

        spiritualTeam: "Would you find it empowering to work within a team that values spirituality, health, and continual self-improvement?",
        physicalWellbeing: "How do you maintain your physical wellbeing and energy levels?",
        personalGrowth: "What areas of personal growth are you actively working on right now?",
        fitnessEncouragement: "If the company encouraged fitness and wellbeing goals as part of professional development, how would that feel to you?",
        fitnessChallenge: "If you were selected for this role only after demonstrating a commitment to improve your physical fitness...",

        photoOptional: "Upload a recent photo that represents who you are (optional)",
        uploadCV: "Upload your CV or resume.",
        uploadVideo: "Upload a 1-minute video introducing yourself and why you want to join Ancestro. (Optional)",
        fullTimeAvailability: "CONFIRM FULL-TIME AVAILABILITY.",
        trainingCommitment: "Confirm willingness to participate in initial training and evaluation phase."
      },

      thanks: {
        text1: "This is more than a sales role — it’s an initiation into leadership.",
        text2: "Every conversation you have spreads the light of clean energy, freedom, and abundance across Latin America."
      }
    }
  }


};

// Spanish translations
const esTranslations = {
  nav: {
    energy: "Ancestro Energía",
    capital: "Ancestro Capital",
    charge: "Ancestro Charge",
    applicants: "Postulantes Ancestro"
  },
  heroSection: {
    banner: "Únete al Movimiento — #LOSANCESTROS",
    title: "No estamos contratando empleados — estamos despertando líderes.",
    paragraph1: "En toda América Latina, Ancestro Energy está construyendo la primera red privada de energía renovable: un sistema propiedad del pueblo, impulsado por el sol y guiado por el espíritu. Combinamos tecnología moderna con sabiduría ancestral — porque el progreso y la naturaleza nunca debieron separarse.",
    paragraph2: "Aquí creemos en la salud, la disciplina, la libertad y la prosperidad a través del propósito. Cada persona que se une a nosotros forma parte de algo mucho más grande que una empresa — un movimiento continental por la independencia energética, la abundancia y la verdad.",
    applyButton: "Aplica Ahora"
  },
  missionSection: {
    badge: "Nuestra Misión",
    card1Title: "La Red Ancestral",
    card1Paragraph1: "Crear una red descentralizada de infraestructura solar, baterías y vehículos eléctricos que reconecte a América Latina con su poder natural. Esto es más que electricidad — es soberanía.",
    card1Paragraph2: "Estamos reviviendo el derecho humano primigenio de generar tu propia energía, vivir en libertad y proveer para tu comunidad con tus propias manos y mente.",

    card2Title: "¿Por Qué Unirte a Ancestro?",
    card2Bullet1: "Prosperidad con Propósito: Gana comisiones altas y potencial real de equity.",
    card2Bullet2: "Red Global: Opera en 18 países bajo una misma misión espiritual y financiera.",
    card2Bullet3: "Salud y Libertad: Cultura parcialmente remota, trabajo bajo el sol y energía de vida limpia.",
    card2Bullet4: "Educación y Crecimiento: Formación de clase mundial en ventas, finanzas y liderazgo.",
    card2Bullet5: "Filantropía: Cada proyecto financia energía solar comunitaria y empoderamiento indígena."
  },
  rolesSection: {
    applyButton: "Aplica Ahora",

    salesRepresentative: {
      heading: "Representantes de Ventas",
      p1: "La voz de la revolución Ancestro.",
      p2: "Como Representante de Ventas, eres el puente entre las personas y su poder. Ayudas a familias y empresas a desbloquear energía limpia — sistemas solares, baterías y vehículos eléctricos sin costo inicial — trayendo libertad donde antes existía dependencia.",
      p3: "Tu trabajo transforma directamente comunidades, reduciendo costos y emisiones mientras generas abundancia para ti y tus clientes. Dominarás la negociación, el storytelling y las finanzas renovables — respaldado por el sistema de gestión de proyectos más avanzado del continente.",
      p4: "Te proporcionamos mentoría, entrenamiento y todas las herramientas para escalar tu éxito de forma remota mientras sigues conectado a través de reuniones semanales y eventos en vivo.",
      p5: "Quienes prosperan aquí son personas disciplinadas, comunicadores magnéticos con corazón. No solo vendes — despiertas a las personas a una nueva forma de vida."
    },

    installers: {
      heading: "Instaladores",
      p1: "Los constructores de la independencia.",
      p2: "Los instaladores son la columna vertebral de Ancestro — las manos que convierten la visión en realidad. Cada tornillo apretado, cada cable conectado, es un paso hacia la libertad para una familia o empresa.",
      p3: "Tendrás acceso constante a proyectos bien remunerados a través de nuestro portal de distribuidores. Nuestros gerentes de proyecto manejan permisos, crédito y materiales, para que puedas enfocarte en lo que mejor haces: construir.",
      p4: "Capacitamos a todos los equipos en estándares de calidad, seguridad y velocidad — elevándote a una élite regional de constructores renovables. Tu trabajo quedará como legado en techos y estaciones de carga por todo el continente.",
      p5: "Cuando instalas con Ancestro, no eres un contratista. Eres un guerrero de la luz construyendo la nueva red."
    },

    projectManagers: {
      heading: "Gerentes de Proyecto",
      p1: "Los directores de la creación.",
      p2: "Los Gerentes de Proyecto de Ancestro son los orquestadores que aseguran que cada proyecto fluya desde la venta hasta la instalación con perfección. Liderarás la comunicación entre clientes, instaladores y equipos financieros — guiando cada proyecto como una sinfonía de precisión y confianza.",
      p3: "Nuestros GPs reciben formación en liderazgo, logística y experiencia del cliente. Te damos las herramientas y autonomía para coordinar construcciones en múltiples regiones, gestionar cronogramas y mantener informados a los clientes en cada paso.",
      p4: "Esto no es gestión corporativa — es maestría operativa impulsada por propósito. Verás tu trabajo cobrar vida en techos, centros de carga y en las sonrisas de clientes que ahora viven libres de energía.",
      p5: "Tu liderazgo mantiene latiendo el corazón del movimiento."
    },

    creditAnalysts: {
      heading: "Analistas de Crédito",
      p1: "Los protectores del equilibrio financiero.",
      p2: "Los Analistas de Crédito en Ancestro aseguran que cada cliente financiado realmente califique para la libertad energética. Revisarás solicitudes en tu país asignado, analizando documentación y capacidad de pago manteniendo equidad y ética.",
      p3: "Este rol combina lógica e intuición — usando números y comprensión humana para extender el acceso de manera responsable. Tu precisión protege a nuestros inversionistas, clientes e instaladores por igual.",
      p4: "Recibirás formación completa en nuestro sistema propietario de evaluación crediticia y mentoría continua de la división financiera. Con cada aprobación, ayudas a otro hogar o empresa a unirse a la red — mientras proteges la estabilidad a largo plazo del ecosistema.",
      p5: "Eres el guardián de la confianza, equilibrando crecimiento con sabiduría."
    },

    financialAnalysts: {
      heading: "Analistas Financieros",
      p1: "Los arquitectos de la prosperidad.",
      p2: "Los Analistas Financieros convierten energía en capital. Estudiarás cada proyecto, desde flujo de caja y CAPEX hasta impuestos y retornos para inversionistas, asegurando que Ancestro siga siendo una de las plataformas más rentables y transparentes de LATAM.",
      p3: "Te equiparemos con herramientas de modelado financiero, formación en finanzas verdes internacionales y colaboración directa con socios globales. Analizarás no solo números, sino impacto — traduciendo sostenibilidad en retornos estables.",
      p4: "Este rol requiere enfoque, estrategia y visión. Cada informe que entregas ayuda a asegurar inversión institucional, expandiendo nuestro alcance a más hogares, más comunidades, más luz.",
      p5: "Eres el arquitecto detrás del flujo de abundancia."
    },

    marketingCoordinator: {
      heading: "Coordinador de Marketing",
      p1: "Conectando la Visión con la Comunidad.",
      p2: "Los Coordinadores de Marketing son los mensajeros de Ancestro — llevando la historia de la luz a cada comunidad que servimos. Serás el pulso entre la estrategia nacional y el impacto local, transformando campañas aprobadas en leads reales, eventos reales y conversaciones reales.",
      p3: "Cada clúster depende de tu creatividad y precisión. Ejecutarás campañas publicitarias locales, planificarás activaciones comunitarias y te asegurarás de que toda familia o empresa que necesite libertad energética conozca nuestro nombre.",
      p4: "Pasarás parte de tu semana en el terreno — conociendo gente, aliándote con locales, viendo la diferencia que hace tu trabajo. El resto, colaborarás remotamente con el liderazgo nacional para mantener tu clúster alineado y creciendo.",
      p5: "Esto no es un trabajo de escritorio. Es una invitación a moldear la voz de un movimiento — a construir conciencia que cambie cómo la gente vive, ahorra y energiza sus hogares. Recibirás salario base más bonos ligados al crecimiento de ventas de tu región.",
      p6: "Cuando coordinas para Ancestro, no empujas anuncios. Amplificas la independencia. Ayudas a ciudades enteras a elevarse. Eres la voz de la nueva energía."
    }
  },
  cultureSection: {
    topBanner: "Nuestra Cultura — #LOSANCESTROS",
    topTitle: "Somos una tribu tribu de hacedores, creadores y protectores.",
    topP1: "Valoramos el bienestar, la autodisciplina y el poder divino. Levantamos pesas, respiramos, construimos y devolvemos.",
    topP2: "Nuestra gente vive con el ejemplo — cuerpos fuertes, mentes agudas y corazones claros. Vemos nuestro trabajo como ceremonia: cada venta, cada instalación, cada línea de código es una ofrenda al planeta.",
    topP3: "Esto no es un empleo. Es un llamado. Si estás listo para alinear tu carrera con tu máximo potencial y ayudar a reescribir la historia de América Latina, la tribu Ancestro te está llamando a casa.",

    bottomBanner: "Únete al Movimiento — #LOSANCESTROS",
    bottomTitle: "Forma parte de la tribu que impulsa una América Latina más limpia y libre.",
    bottomParagraph: "Valoramos el bienestar, la autodisciplina y el poder divino. Levantamos pesas, respiramos, construimos y devolvemos.",
    applyButton: "Aplica Ahora",
    bottomFooter: "Tu Viaje con Ancestro Comienza Aquí"
  },
  footer: {
    address: "Dirección: 123 Green Avenue, Ancestro Business Park, Suite 405, New York, NY 10001, Estados Unidos",
    contact: "Contáctanos: +1 (555) 123-4567  |  +44 20 7946 0958"
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
    typeHere: "Escribe aquí..."
  },
  forms: {
    salesRepresentative: {
      title: "ANCESTRO ENERGY – POSTULACIÓN REPRESENTANTE DE VENTAS",
      subtitle: "Únete al movimiento que lleva energía limpia y libertad a toda América Latina.",
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
        step10: "Pasos Finales"
      },

      sections: {
        lifestyleMindset: "Estilo de Vida y Mentalidad",
        motivationPurpose: "Motivación y Propósito",
        personalityComm: "Personalidad y Comunicación",
        growthCulture: "Crecimiento y Ajuste Cultural"
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
        salesExperience: "¿Tienes experiencia previa en ventas? Si sí, describe los sectores y productos con los que has trabajado.",
        renewableExperience: "¿Alguna vez has vendido energía renovable o servicios financieros?",
        bestSalesStory: "Describe tu experiencia de venta más exitosa y qué la hizo exitosa.",
        currentWorkStatus: "¿Estás trabajando por cuenta propia, en ventas actualmente o en transición desde otro campo?",

        buildTrust: "¿Cómo generas confianza con los clientes en la primera interacción?",
        commStyle: "Describe tu estilo de comunicación en tres palabras.",
        motivationRenewable: "¿Qué te motiva más de vender soluciones de energía renovable?",
        cameraComfort: "¿Qué tan cómodo te sientes hablando frente a cámara o en videollamadas? (1–10)",
        crmComfort: "Califica tu nivel de comodidad usando sistemas CRM y herramientas digitales. (1–10)",
        strongMarkets: "¿En qué idiomas o mercados te sientes más fuerte vendiendo?",

        remoteWork: "¿Estás cómodo trabajando de forma remota con estructura basada en resultados?",
        inPersonDays: "¿Puedes asistir a dos días de colaboración presencial por semana?",
        handleObjections: "¿Cómo manejas las objeciones o el rechazo en una conversación de ventas?",
        learnProducts: "¿Cuál es tu proceso para aprender y dominar rápidamente nuevos productos?",
        lifeChangingSale: "Describe un momento en que ayudaste a alguien a tomar una decisión que realmente mejoró su vida.",
        followUpStyle: "¿Cuál es tu enfoque para seguimientos y cierre de ventas?",

        whyAncestro: "¿Por qué quieres representar a Ancestro Energy?",
        freedomMeaning: "¿Qué significa para ti personalmente “libertad a través de la energía”?",
        latamFuture: "¿Cómo crees que la energía renovable transformará América Latina en los próximos 5 años?",
        resonance: "Ancestro combina espiritualidad, negocio y filantropía — ¿cuál de estos te resuena más y por qué?",
        incomeGoals: "¿Cuáles son tus metas personales de ingresos y estilo de vida para los próximos 12 meses?",
        successVision: "¿Cómo visualizas el éxito dentro de un año formando parte de este movimiento?",

        discipline: "En una escala del 1 al 10, ¿cómo calificarías tu autodisciplina?",
        dailyHabits: "¿Qué hábitos diarios te mantienen enfocado o en paz?",
        habitToImprove: "¿Qué hábito te gustaría mejorar este año?",
        handleFailure: "¿Cómo manejas el rechazo o el fracaso?",
        meditation: "¿Meditas o tienes práctica de mindfulness? ¿Con qué frecuencia?",
        selfTalk: "¿Cómo es tu diálogo interno cuando enfrentas desafíos?",

        currentBlock: "¿Qué te está frenando actualmente de alcanzar tu máximo potencial?",
        freedomMoment: "Describe un momento en que te sentiste frustrado por límites o sistemas de la sociedad...",
        workThatEnergizes: "¿Qué tipo de trabajo te hace sentir más vivo?",
        whyMissionDriven: "¿Por qué quieres formar parte de una empresa con propósito, consciente de la salud como Ancestro?",

        energyType: "¿Cómo describirías tu energía natural: introvertido, extrovertido o ambivertido?",
        publicSpeaking: "¿Qué tan cómodo te sientes hablando en público o presentando en escenario? (1–10)",
        learningWillingness: "¿Qué tan dispuesto estás a aprender material nuevo semanalmente y recibir coaching?",
        structurePreference: "¿Prefieres guía estructurada o libertad para autodirigirte?",
        bestEnvironment: "¿Qué tipo de entorno te permite rendir al máximo?",

        spiritualTeam: "¿Te sentirías empoderado trabajando en un equipo que valora espiritualidad, salud y mejora continua?",
        physicalWellbeing: "¿Cómo mantienes tu bienestar y niveles de energía física?",
        personalGrowth: "¿En qué áreas de crecimiento personal estás trabajando activamente ahora?",
        fitnessEncouragement: "Si la empresa promoviera metas de fitness y bienestar como parte del desarrollo profesional, ¿cómo te sentirías?",
        fitnessChallenge: "Si fueras seleccionado solo después de demostrar compromiso con mejorar tu condición física...",

        photoOptional: "Sube una foto reciente que represente quién eres (opcional)",
        uploadCV: "Sube tu CV o hoja de vida.",
        uploadVideo: "Sube un video de 1 minuto presentándote y explicando por qué quieres unirte a Ancestro. (Opcional)",
        fullTimeAvailability: "CONFIRMAR DISPONIBILIDAD FULL-TIME.",
        trainingCommitment: "Confirmar disposición a participar en la fase inicial de formación y evaluación."
      },

      thanks: {
        text1: "Esto es más que un puesto de ventas — es una iniciación al liderazgo.",
        text2: "Cada conversación que tengas esparce la luz de energía limpia, libertad y abundancia por toda América Latina."
      }
    }
  }


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
