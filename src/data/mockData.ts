export interface Proyecto {
  id: string;
  titulo: string;
  descCorta: string;
  descLarga: string;
  categorias: string[];
  imagenes: { url: string; esPrincipal: boolean }[];
  links: { repo?: string; demo?: string };
  metricas: { vistas: number; meInteresa: number; comentarios: number };
  equipo: { nombre: string; integrantes: string[] };
  estado: "borrador" | "publicado";
  avance: number;
  ultimaActualizacion: string;
  fechaCreacion: string;
}

export interface Comentario {
  id: string;
  proyectoId: string;
  autor: string;
  texto: string;
  fecha: string;
}

export interface Seminario {
  id: string;
  proyectoId: string;
  fechaHora: string;
  sala: string;
}

export const categorias = [
  "Industrias y Desarrollo",
  "Educación y Prevención",
  "Salud y Bienestar / Health Tech"
];

export const mockProyectos: Proyecto[] = [
  // Salud y Bienestar / Salud y Bienestar / Health Tech
  {
    id: "1",
    titulo: "NeuroSight",
    descCorta: "Plataforma de diagnóstico neurológico asistido por IA para detección temprana de enfermedades cerebrales.",
    descLarga: "NeuroSight utiliza inteligencia artificial avanzada para analizar imágenes cerebrales y detectar patrones que pueden indicar enfermedades neurológicas en etapas tempranas. La plataforma ayuda a profesionales médicos a tomar decisiones más informadas y rápidas.",
    categorias: ["Salud y Bienestar / Health Tech", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/NEUROSIGHT.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 342, meInteresa: 78, comentarios: 15 },
    equipo: { nombre: "NeuralTech", integrantes: ["Equipo NeuroSight"] },
    estado: "publicado",
    avance: 88,
    ultimaActualizacion: "2025-01-15",
    fechaCreacion: "2024-09-01"
  },
  {
    id: "2",
    titulo: "MoodTab",
    descCorta: "Aplicación de seguimiento del estado de ánimo con análisis predictivo para bienestar mental.",
    descLarga: "MoodTab es una herramienta digital que permite a los usuarios registrar y analizar su estado de ánimo diario. Utiliza algoritmos de machine learning para identificar patrones y proporcionar recomendaciones personalizadas de bienestar.",
    categorias: ["Salud y Bienestar / Health Tech", "Mobile App"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/MOODTAB.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 289, meInteresa: 65, comentarios: 12 },
    equipo: { nombre: "MoodTech Solutions", integrantes: ["Equipo MoodTab"] },
    estado: "publicado",
    avance: 92,
    ultimaActualizacion: "2025-01-18",
    fechaCreacion: "2024-09-05"
  },
  {
    id: "3",
    titulo: "RememberMe",
    descCorta: "Sistema de asistencia cognitiva para personas con deterioro de memoria y Alzheimer.",
    descLarga: "RememberMe es una aplicación que ayuda a personas con problemas de memoria mediante recordatorios inteligentes, reconocimiento facial de personas cercanas, y ejercicios cognitivos personalizados para mantener la mente activa.",
    categorias: ["Salud y Bienestar / Health Tech", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/REMEMBERME.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 412, meInteresa: 98, comentarios: 23 },
    equipo: { nombre: "Memory Care Team", integrantes: ["Equipo RememberMe"] },
    estado: "publicado",
    avance: 85,
    ultimaActualizacion: "2025-01-20",
    fechaCreacion: "2024-09-10"
  },
  {
    id: "4",
    titulo: "KardIA",
    descCorta: "Monitoreo cardíaco inteligente con IA para detección de arritmias y problemas cardiovasculares.",
    descLarga: "KardIA es un sistema de monitoreo cardíaco continuo que utiliza sensores portátiles e inteligencia artificial para detectar arritmias, fibrilación auricular y otros problemas cardiovasculares en tiempo real, alertando al usuario y médicos cuando es necesario.",
    categorias: ["Salud y Bienestar / Health Tech", "IoT"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/KARDIA.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 378, meInteresa: 89, comentarios: 18 },
    equipo: { nombre: "Cardiac AI Lab", integrantes: ["Equipo KardIA"] },
    estado: "publicado",
    avance: 90,
    ultimaActualizacion: "2025-01-22",
    fechaCreacion: "2024-09-12"
  },
  {
    id: "5",
    titulo: "ÜSAFE",
    descCorta: "Plataforma de seguridad personal con botón de pánico y localización en tiempo real.",
    descLarga: "ÜSAFE es una aplicación móvil de seguridad personal que permite a los usuarios activar alertas de emergencia, compartir su ubicación en tiempo real con contactos de confianza, y acceder rápidamente a servicios de emergencia.",
    categorias: ["Salud y Bienestar / Health Tech", "Mobile App"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/USAFE.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 456, meInteresa: 112, comentarios: 28 },
    equipo: { nombre: "SafeTech Innovators", integrantes: ["Equipo ÜSAFE"] },
    estado: "publicado",
    avance: 87,
    ultimaActualizacion: "2025-01-19",
    fechaCreacion: "2024-09-08"
  },
  {
    id: "6",
    titulo: "ShiftGuard",
    descCorta: "Sistema de gestión y monitoreo de turnos médicos con alertas de fatiga.",
    descLarga: "ShiftGuard optimiza la programación de turnos del personal médico, monitoreando carga de trabajo y fatiga para prevenir errores médicos. Incluye alertas inteligentes y sugerencias de rotación óptima.",
    categorias: ["Salud y Bienestar / Health Tech", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/SHIFTGUARDFC.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 267, meInteresa: 54, comentarios: 9 },
    equipo: { nombre: "MedicalShift Solutions", integrantes: ["Equipo ShiftGuard"] },
    estado: "publicado",
    avance: 83,
    ultimaActualizacion: "2025-01-17",
    fechaCreacion: "2024-09-15"
  },
  {
    id: "7",
    titulo: "DonApp",
    descCorta: "Plataforma de donación de sangre que conecta donantes con bancos de sangre y pacientes.",
    descLarga: "DonApp facilita el proceso de donación de sangre conectando donantes voluntarios con hospitales y bancos de sangre. Incluye recordatorios de elegibilidad, búsqueda de centros cercanos y seguimiento del impacto de las donaciones.",
    categorias: ["Salud y Bienestar / Health Tech", "Mobile App"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/DONAPP.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 398, meInteresa: 95, comentarios: 21 },
    equipo: { nombre: "LifeSavers Tech", integrantes: ["Equipo DonApp"] },
    estado: "publicado",
    avance: 91,
    ultimaActualizacion: "2025-01-21",
    fechaCreacion: "2024-09-18"
  },
  {
    id: "8",
    titulo: "Liviapp",
    descCorta: "Asistente virtual para pacientes con enfermedades crónicas y seguimiento de tratamientos.",
    descLarga: "Liviapp es un asistente de salud digital que ayuda a pacientes con enfermedades crónicas a gestionar medicamentos, citas médicas y síntomas. Proporciona recordatorios personalizados y permite compartir información con médicos tratantes.",
    categorias: ["Salud y Bienestar / Health Tech", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/LIVIAPP.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 324, meInteresa: 72, comentarios: 14 },
    equipo: { nombre: "ChronicCare Digital", integrantes: ["Equipo Liviapp"] },
    estado: "publicado",
    avance: 86,
    ultimaActualizacion: "2025-01-16",
    fechaCreacion: "2024-09-20"
  },
  {
    id: "9",
    titulo: "Kompias",
    descCorta: "Red social de apoyo emocional y acompañamiento para personas con ansiedad y depresión.",
    descLarga: "Kompias es una comunidad digital segura donde personas que enfrentan desafíos de salud mental pueden conectarse, compartir experiencias y recibir apoyo. Incluye moderación profesional y recursos de autoayuda.",
    categorias: ["Salud y Bienestar / Health Tech", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/KOMPIAS.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 445, meInteresa: 108, comentarios: 32 },
    equipo: { nombre: "Mental Health Connect", integrantes: ["Equipo Kompias"] },
    estado: "publicado",
    avance: 89,
    ultimaActualizacion: "2025-01-23",
    fechaCreacion: "2024-09-22"
  },
  {
    id: "10",
    titulo: "Vocare",
    descCorta: "Plataforma de telemedicina con diagnóstico asistido por IA y consultas virtuales.",
    descLarga: "Vocare revoluciona la atención médica remota combinando videoconsultas con herramientas de diagnóstico asistido por IA. Los médicos pueden realizar evaluaciones preliminares y los pacientes reciben atención de calidad desde casa.",
    categorias: ["Salud y Bienestar / Health Tech", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/VOCAREFC.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 512, meInteresa: 134, comentarios: 41 },
    equipo: { nombre: "TeleMed Innovators", integrantes: ["Equipo Vocare"] },
    estado: "publicado",
    avance: 94,
    ultimaActualizacion: "2025-01-24",
    fechaCreacion: "2024-09-25"
  },
  {
    id: "11",
    titulo: "Nura",
    descCorta: "Sistema de nutrición personalizada con IA basado en análisis genético y hábitos alimenticios.",
    descLarga: "Nura utiliza inteligencia artificial para crear planes nutricionales personalizados basados en el perfil genético, objetivos de salud y preferencias alimenticias de cada usuario. Incluye recetas personalizadas y seguimiento de progreso.",
    categorias: ["Salud y Bienestar / Health Tech", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/NURA.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 367, meInteresa: 81, comentarios: 17 },
    equipo: { nombre: "NutriAI Solutions", integrantes: ["Equipo Nura"] },
    estado: "publicado",
    avance: 88,
    ultimaActualizacion: "2025-01-18",
    fechaCreacion: "2024-09-28"
  },
  {
    id: "12",
    titulo: "CEApp",
    descCorta: "Aplicación de ejercicios terapéuticos guiados para rehabilitación física con realidad aumentada.",
    descLarga: "CEApp es una herramienta de rehabilitación que utiliza realidad aumentada para guiar a pacientes a través de ejercicios terapéuticos. Rastrea el progreso, corrige posturas y se adapta al ritmo de cada usuario.",
    categorias: ["Salud y Bienestar / Health Tech", "Mobile App"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/CEAPP.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 298, meInteresa: 67, comentarios: 13 },
    equipo: { nombre: "RehabTech AR", integrantes: ["Equipo CEApp"] },
    estado: "publicado",
    avance: 85,
    ultimaActualizacion: "2025-01-19",
    fechaCreacion: "2024-09-30"
  },

  // Industrias y Desarrollo
  {
    id: "13",
    titulo: "MatchaFunding",
    descCorta: "Plataforma de crowdfunding inteligente que conecta startups con inversionistas mediante IA.",
    descLarga: "MatchaFunding utiliza algoritmos de machine learning para emparejar startups con inversionistas compatibles basándose en industria, etapa de desarrollo, y objetivos. Simplifica el proceso de búsqueda de financiamiento.",
    categorias: ["Industrias y Desarrollo", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/MATCHAF.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 423, meInteresa: 102, comentarios: 26 },
    equipo: { nombre: "FinTech Innovators", integrantes: ["Equipo MatchaFunding"] },
    estado: "publicado",
    avance: 91,
    ultimaActualizacion: "2025-01-20",
    fechaCreacion: "2024-10-01"
  },
  {
    id: "14",
    titulo: "InFacto",
    descCorta: "Sistema de gestión de facturas electrónicas con automatización de procesos contables.",
    descLarga: "InFacto automatiza el proceso de facturación electrónica para empresas, integrándose con sistemas contables existentes. Incluye generación automática, validación SII y reportes financieros en tiempo real.",
    categorias: ["Industrias y Desarrollo", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/INFACTO.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 356, meInteresa: 78, comentarios: 15 },
    equipo: { nombre: "AccountTech Solutions", integrantes: ["Equipo InFacto"] },
    estado: "publicado",
    avance: 87,
    ultimaActualizacion: "2025-01-17",
    fechaCreacion: "2024-10-03"
  },
  {
    id: "15",
    titulo: "VaultCore",
    descCorta: "Sistema de almacenamiento seguro en la nube con encriptación de grado militar.",
    descLarga: "VaultCore proporciona almacenamiento en la nube ultra seguro con encriptación end-to-end, autenticación multi-factor y cumplimiento de normativas internacionales de protección de datos.",
    categorias: ["Industrias y Desarrollo", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/VAULTCORE.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 489, meInteresa: 115, comentarios: 31 },
    equipo: { nombre: "SecureCloud Systems", integrantes: ["Equipo VaultCore"] },
    estado: "publicado",
    avance: 93,
    ultimaActualizacion: "2025-01-22",
    fechaCreacion: "2024-10-05"
  },
  {
    id: "16",
    titulo: "Aqualytic",
    descCorta: "Plataforma IoT de monitoreo de calidad del agua para industrias y acuicultura.",
    descLarga: "Aqualytic utiliza sensores IoT avanzados para monitorear en tiempo real la calidad del agua en plantas industriales y proyectos de acuicultura. Proporciona alertas automáticas y análisis predictivo de parámetros críticos.",
    categorias: ["Industrias y Desarrollo", "IoT"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/ACUALYTICFC.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 412, meInteresa: 96, comentarios: 22 },
    equipo: { nombre: "WaterTech Solutions", integrantes: ["Equipo Aqualytic"] },
    estado: "publicado",
    avance: 89,
    ultimaActualizacion: "2025-01-19",
    fechaCreacion: "2024-10-08"
  },
  {
    id: "17",
    titulo: "BlastDynamics",
    descCorta: "Simulador de explosiones para minería con análisis de impacto y optimización de voladuras.",
    descLarga: "BlastDynamics es un software de simulación avanzada que permite a ingenieros de minas planificar y optimizar voladuras. Utiliza modelos físicos precisos para predecir el impacto y maximizar la eficiencia.",
    categorias: ["Industrias y Desarrollo", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/BLASTDYNAMICS.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 378, meInteresa: 84, comentarios: 18 },
    equipo: { nombre: "Mining Tech Innovations", integrantes: ["Equipo BlastDynamics"] },
    estado: "publicado",
    avance: 86,
    ultimaActualizacion: "2025-01-21",
    fechaCreacion: "2024-10-10"
  },
  {
    id: "18",
    titulo: "InspectAR",
    descCorta: "Sistema de inspección industrial con realidad aumentada para mantenimiento predictivo.",
    descLarga: "InspectAR combina realidad aumentada con IA para facilitar inspecciones industriales. Los técnicos reciben instrucciones visuales en tiempo real y el sistema detecta anomalías automáticamente.",
    categorias: ["Industrias y Desarrollo", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/INSPECTAR.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 445, meInteresa: 107, comentarios: 29 },
    equipo: { nombre: "AR Industrial Tech", integrantes: ["Equipo InspectAR"] },
    estado: "publicado",
    avance: 92,
    ultimaActualizacion: "2025-01-23",
    fechaCreacion: "2024-10-12"
  },
  {
    id: "19",
    titulo: "CubicAI",
    descCorta: "Optimizador de almacenamiento y logística con IA para centros de distribución.",
    descLarga: "CubicAI utiliza inteligencia artificial para optimizar el uso del espacio en bodegas y centros de distribución. Mejora la eficiencia de picking, reduce tiempos de búsqueda y maximiza la capacidad de almacenamiento.",
    categorias: ["Industrias y Desarrollo", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/CUBICAI.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 392, meInteresa: 89, comentarios: 20 },
    equipo: { nombre: "Logistics AI Lab", integrantes: ["Equipo CubicAI"] },
    estado: "publicado",
    avance: 88,
    ultimaActualizacion: "2025-01-18",
    fechaCreacion: "2024-10-15"
  },
  {
    id: "20",
    titulo: "Rooka",
    descCorta: "Plataforma de gestión de flotas vehiculares con telemetría y mantenimiento predictivo.",
    descLarga: "Rooka ofrece una solución completa para gestión de flotas, incluyendo rastreo GPS en tiempo real, análisis de conducción, programación de mantenimiento y optimización de rutas para reducir costos operacionales.",
    categorias: ["Industrias y Desarrollo", "IoT"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/ROOKA.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 467, meInteresa: 112, comentarios: 27 },
    equipo: { nombre: "Fleet Management Systems", integrantes: ["Equipo Rooka"] },
    estado: "publicado",
    avance: 90,
    ultimaActualizacion: "2025-01-20",
    fechaCreacion: "2024-10-18"
  },
  {
    id: "21",
    titulo: "ValiDocu",
    descCorta: "Sistema de validación y autenticación de documentos digitales con blockchain.",
    descLarga: "ValiDocu utiliza tecnología blockchain para garantizar la autenticidad e integridad de documentos digitales. Permite a organizaciones emitir, validar y verificar documentos de forma segura e inmutable.",
    categorias: ["Industrias y Desarrollo", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/VALIDOCUFC.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 398, meInteresa: 93, comentarios: 21 },
    equipo: { nombre: "BlockChain Documents", integrantes: ["Equipo ValiDocu"] },
    estado: "publicado",
    avance: 87,
    ultimaActualizacion: "2025-01-19",
    fechaCreacion: "2024-10-20"
  },
  {
    id: "22",
    titulo: "AppCopio",
    descCorta: "Aplicación móvil para gestión de inventarios y control de stock en tiempo real.",
    descLarga: "AppCopio digitaliza la gestión de inventarios permitiendo escaneo de códigos, actualizaciones en tiempo real, alertas de stock bajo y generación automática de órdenes de reposición.",
    categorias: ["Industrias y Desarrollo", "Mobile App"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/APPCOPIO.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 334, meInteresa: 76, comentarios: 14 },
    equipo: { nombre: "Inventory Tech Solutions", integrantes: ["Equipo AppCopio"] },
    estado: "publicado",
    avance: 85,
    ultimaActualizacion: "2025-01-17",
    fechaCreacion: "2024-10-22"
  },
  {
    id: "23",
    titulo: "BioPlanner",
    descCorta: "Herramienta de planificación y optimización para proyectos de bioconstrucción sostenible.",
    descLarga: "BioPlanner ayuda a arquitectos e ingenieros a planificar proyectos de construcción sostenible, calculando impacto ambiental, optimizando uso de materiales ecológicos y certificando cumplimiento de estándares verdes.",
    categorias: ["Industrias y Desarrollo", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/BIOPLANNER.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 289, meInteresa: 64, comentarios: 11 },
    equipo: { nombre: "Sustainable Build Tech", integrantes: ["Equipo BioPlanner"] },
    estado: "publicado",
    avance: 83,
    ultimaActualizacion: "2025-01-16",
    fechaCreacion: "2024-10-25"
  },
  {
    id: "24",
    titulo: "Sequens",
    descCorta: "Plataforma de análisis genómico y bioinformática para investigación médica.",
    descLarga: "Sequens proporciona herramientas avanzadas de bioinformática para análisis de secuencias genéticas, facilitando la investigación médica en genómica, identificación de mutaciones y desarrollo de terapias personalizadas.",
    categorias: ["Industrias y Desarrollo", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/SEQUENS.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 456, meInteresa: 109, comentarios: 34 },
    equipo: { nombre: "Genomic Research Lab", integrantes: ["Equipo Sequens"] },
    estado: "publicado",
    avance: 91,
    ultimaActualizacion: "2025-01-24",
    fechaCreacion: "2024-10-28"
  },

  // Educación y Prevención
  {
    id: "25",
    titulo: "RVivum",
    descCorta: "Plataforma de realidad virtual para educación inmersiva en ciencias y medicina.",
    descLarga: "RVivum crea experiencias educativas en realidad virtual que permiten a estudiantes explorar conceptos científicos y médicos de forma inmersiva. Incluye simulaciones de anatomía, química y física.",
    categorias: ["Educación y Prevención", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/RVIVUMFC.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 512, meInteresa: 128, comentarios: 38 },
    equipo: { nombre: "VR Education Labs", integrantes: ["Equipo RVivum"] },
    estado: "publicado",
    avance: 94,
    ultimaActualizacion: "2025-01-23",
    fechaCreacion: "2024-11-01"
  },
  {
    id: "26",
    titulo: "NLP Studio",
    descCorta: "Herramienta de procesamiento de lenguaje natural para análisis de textos educativos.",
    descLarga: "NLP Studio utiliza técnicas de procesamiento de lenguaje natural para analizar y mejorar contenidos educativos. Evalúa legibilidad, detecta sesgos y sugiere mejoras para materiales didácticos.",
    categorias: ["Educación y Prevención", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/NLPSTUDIO.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 367, meInteresa: 82, comentarios: 19 },
    equipo: { nombre: "EdTech NLP Group", integrantes: ["Equipo NLP Studio"] },
    estado: "publicado",
    avance: 88,
    ultimaActualizacion: "2025-01-21",
    fechaCreacion: "2024-11-03"
  },
  {
    id: "27",
    titulo: "Tutorializer",
    descCorta: "Plataforma de creación automática de tutoriales interactivos con IA.",
    descLarga: "Tutorializer utiliza inteligencia artificial para convertir documentación técnica y videos en tutoriales interactivos paso a paso. Facilita la creación de contenido educativo de calidad de forma automatizada.",
    categorias: ["Educación y Prevención", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/TUTORIALIZER.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 423, meInteresa: 98, comentarios: 24 },
    equipo: { nombre: "AI Tutorial Creators", integrantes: ["Equipo Tutorializer"] },
    estado: "publicado",
    avance: 90,
    ultimaActualizacion: "2025-01-22",
    fechaCreacion: "2024-11-05"
  },
  {
    id: "28",
    titulo: "MeshStep",
    descCorta: "Aplicación de aprendizaje de programación mediante proyectos prácticos gamificados.",
    descLarga: "MeshStep enseña programación a través de proyectos prácticos y gamificación. Los estudiantes avanzan por niveles resolviendo desafíos reales, recibiendo feedback instantáneo y construyendo un portafolio.",
    categorias: ["Educación y Prevención", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/MESHSTEP.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 489, meInteresa: 117, comentarios: 31 },
    equipo: { nombre: "CodeLearn Innovators", integrantes: ["Equipo MeshStep"] },
    estado: "publicado",
    avance: 92,
    ultimaActualizacion: "2025-01-20",
    fechaCreacion: "2024-11-08"
  },
  {
    id: "29",
    titulo: "ZeroPressure",
    descCorta: "App de meditación y manejo del estrés para estudiantes con técnicas basadas en evidencia.",
    descLarga: "ZeroPressure ayuda a estudiantes a manejar el estrés académico mediante técnicas de meditación, respiración y mindfulness respaldadas por investigación científica. Incluye seguimiento de progreso emocional.",
    categorias: ["Educación y Prevención", "Mobile App"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/ZEROPRESSURE.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 445, meInteresa: 106, comentarios: 28 },
    equipo: { nombre: "Student Wellness Tech", integrantes: ["Equipo ZeroPressure"] },
    estado: "publicado",
    avance: 89,
    ultimaActualizacion: "2025-01-19",
    fechaCreacion: "2024-11-10"
  },
  {
    id: "30",
    titulo: "ComuVigiA",
    descCorta: "Sistema de vigilancia comunitaria con IA para prevención de delitos y seguridad vecinal.",
    descLarga: "ComuVigiA es una plataforma colaborativa que permite a vecinos reportar incidentes, compartir alertas de seguridad y coordinar con autoridades. Utiliza IA para detectar patrones y prevenir delitos.",
    categorias: ["Educación y Prevención", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/COMUVIGIA.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 501, meInteresa: 123, comentarios: 36 },
    equipo: { nombre: "Community Safety Tech", integrantes: ["Equipo ComuVigiA"] },
    estado: "publicado",
    avance: 91,
    ultimaActualizacion: "2025-01-24",
    fechaCreacion: "2024-11-12"
  },
  {
    id: "31",
    titulo: "TeacHear",
    descCorta: "Plataforma de educación inclusiva con reconocimiento de voz para personas con discapacidad auditiva.",
    descLarga: "TeacHear transforma contenido educativo en tiempo real mediante reconocimiento de voz y traducción a lenguaje de señas, facilitando la inclusión de estudiantes con discapacidad auditiva en el aula.",
    categorias: ["Educación y Prevención", "AI & Machine Learning"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/TEACHEAR.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 478, meInteresa: 114, comentarios: 33 },
    equipo: { nombre: "Inclusive Education Tech", integrantes: ["Equipo TeacHear"] },
    estado: "publicado",
    avance: 93,
    ultimaActualizacion: "2025-01-22",
    fechaCreacion: "2024-11-15"
  },
  {
    id: "32",
    titulo: "PyroPrev",
    descCorta: "Sistema de detección temprana y prevención de incendios forestales con sensores IoT.",
    descLarga: "PyroPrev utiliza sensores IoT distribuidos en zonas forestales para detectar condiciones de riesgo de incendio. Proporciona alertas tempranas y análisis predictivo basado en clima y vegetación.",
    categorias: ["Educación y Prevención", "IoT"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/PYROPREV.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 534, meInteresa: 131, comentarios: 42 },
    equipo: { nombre: "Forest Safety Systems", integrantes: ["Equipo PyroPrev"] },
    estado: "publicado",
    avance: 95,
    ultimaActualizacion: "2025-01-25",
    fechaCreacion: "2024-11-18"
  },
  {
    id: "33",
    titulo: "AcomodApp",
    descCorta: "App de búsqueda de alojamiento estudiantil con sistema de reseñas verificadas.",
    descLarga: "AcomodApp facilita a estudiantes encontrar alojamiento seguro y adecuado cerca de sus instituciones educativas. Incluye verificación de propiedades, sistema de reseñas confiables y gestión de contratos.",
    categorias: ["Educación y Prevención", "Mobile App"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/ACOMODAPP.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 412, meInteresa: 95, comentarios: 25 },
    equipo: { nombre: "Student Housing Solutions", integrantes: ["Equipo AcomodApp"] },
    estado: "publicado",
    avance: 87,
    ultimaActualizacion: "2025-01-21",
    fechaCreacion: "2024-11-20"
  },
  {
    id: "34",
    titulo: "PiLands",
    descCorta: "Juego educativo de programación visual para niños basado en resolución de puzzles.",
    descLarga: "PiLands enseña conceptos de programación a niños mediante puzzles visuales y una narrativa atractiva. Los jugadores aprenden lógica, secuencias y algoritmos mientras avanzan en una aventura interactiva.",
    categorias: ["Educación y Prevención", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/PILANDS.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 389, meInteresa: 88, comentarios: 21 },
    equipo: { nombre: "Kids Code Academy", integrantes: ["Equipo PiLands"] },
    estado: "publicado",
    avance: 86,
    ultimaActualizacion: "2025-01-20",
    fechaCreacion: "2024-11-22"
  },
  {
    id: "35",
    titulo: "Kimel",
    descCorta: "Plataforma de intercambio de conocimientos entre estudiantes con sistema de mentoría peer-to-peer.",
    descLarga: "Kimel conecta estudiantes para compartir conocimientos y aprender juntos. Facilita sesiones de estudio colaborativas, mentoría entre pares y creación de grupos de estudio basados en intereses comunes.",
    categorias: ["Educación y Prevención", "Web Development"],
    imagenes: [
      { url: "https://www.feriadesoftware.cl/wp-content/uploads/2025/09/KIMEL.png", esPrincipal: true }
    ],
    links: {},
    metricas: { vistas: 456, meInteresa: 108, comentarios: 29 },
    equipo: { nombre: "Peer Learning Network", integrantes: ["Equipo Kimel"] },
    estado: "publicado",
    avance: 90,
    ultimaActualizacion: "2025-01-23",
    fechaCreacion: "2024-11-25"
  }
];

export const mockComentarios: Comentario[] = [
  {
    id: "1",
    proyectoId: "1",
    autor: "Prof. Antonio Méndez",
    texto: "Excelente integración de IoT con análisis de datos. Me gustaría ver más detalles sobre la precisión de los sensores.",
    fecha: "2024-01-21T10:30:00Z"
  },
  {
    id: "2",
    proyectoId: "1",
    autor: "Visitante",
    texto: "¿Planean expandir a otras ciudades? El proyecto tiene mucho potencial.",
    fecha: "2024-01-22T14:15:00Z"
  },
  {
    id: "3",
    proyectoId: "2",
    autor: "Dra. Patricia Vásquez",
    texto: "La aplicación de IA en salud mental es muy prometedora. ¿Han validado los algoritmos con profesionales del área?",
    fecha: "2024-01-20T16:45:00Z"
  }
];

export const mockSeminarios: Seminario[] = [
  {
    id: "1",
    proyectoId: "1",
    fechaHora: "2024-01-25T09:00:00Z",
    sala: "Auditorio A"
  },
  {
    id: "2",
    proyectoId: "2",
    fechaHora: "2024-01-25T10:30:00Z",
    sala: "Sala 101"
  },
  {
    id: "3",
    proyectoId: "4",
    fechaHora: "2024-01-25T14:00:00Z",
    sala: "Lab Innovación"
  }
];