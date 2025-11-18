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
