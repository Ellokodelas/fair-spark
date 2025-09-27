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
  "Web Development",
  "Mobile App",
  "AI & Machine Learning",
  "Game Development",
  "IoT",
  "Blockchain",
  "Data Science",
  "Cybersecurity"
];

export const mockProyectos: Proyecto[] = [
  {
    id: "1",
    titulo: "EcoTracker - Monitor Ambiental",
    descCorta: "Sistema IoT para monitoreo en tiempo real de calidad del aire y agua urbana con dashboards interactivos.",
    descLarga: "EcoTracker es una plataforma integral que combina sensores IoT, análisis de datos en tiempo real y dashboards interactivos para monitorear la calidad ambiental urbana. El sistema permite a ciudades y organizaciones tomar decisiones informadas sobre políticas ambientales.",
    categorias: ["IoT", "Data Science"],
    imagenes: [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", esPrincipal: true },
      { url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800", esPrincipal: false }
    ],
    links: { repo: "https://github.com/team/ecotracker", demo: "https://ecotracker-demo.com" },
    metricas: { vistas: 245, meInteresa: 34, comentarios: 12 },
    equipo: { nombre: "GreenTech Innovators", integrantes: ["Ana García", "Carlos López", "María Rodríguez"] },
    estado: "publicado",
    avance: 85,
    ultimaActualizacion: "2024-01-20",
    fechaCreacion: "2024-01-10"
  },
  {
    id: "2",
    titulo: "MindfulAI - Asistente Bienestar",
    descCorta: "Chatbot con IA para apoyo en salud mental y bienestar, con técnicas de mindfulness personalizadas.",
    descLarga: "MindfulAI utiliza inteligencia artificial avanzada para proporcionar apoyo personalizado en salud mental y bienestar. La aplicación aprende de las interacciones del usuario para ofrecer técnicas de mindfulness, ejercicios de respiración y recomendaciones adaptadas a cada persona.",
    categorias: ["AI & Machine Learning", "Mobile App"],
    imagenes: [
      { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800", esPrincipal: true },
      { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800", esPrincipal: false }
    ],
    links: { repo: "https://github.com/team/mindful-ai" },
    metricas: { vistas: 189, meInteresa: 56, comentarios: 8 },
    equipo: { nombre: "Wellness Tech", integrantes: ["Diego Silva", "Laura Martín"] },
    estado: "publicado",
    avance: 92,
    ultimaActualizacion: "2024-01-22",
    fechaCreacion: "2024-01-05"
  },
  {
    id: "3",
    titulo: "CryptoSecure Wallet",
    descCorta: "Wallet multi-criptomoneda con autenticación biométrica y smart contracts integrados.",
    descLarga: "Una wallet de criptomonedas de última generación que combina seguridad biométrica avanzada con la funcionalidad de smart contracts. Soporta múltiples blockchains y ofrece una experiencia de usuario intuitiva para usuarios tanto novatos como expertos.",
    categorias: ["Blockchain", "Cybersecurity"],
    imagenes: [
      { url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800", esPrincipal: true }
    ],
    links: { demo: "https://cryptosecure-demo.com" },
    metricas: { vistas: 156, meInteresa: 28, comentarios: 5 },
    equipo: { nombre: "BlockChain Squad", integrantes: ["Pedro González", "Sofia Chen", "Miguel Torres"] },
    estado: "publicado",
    avance: 78,
    ultimaActualizacion: "2024-01-18",
    fechaCreacion: "2024-01-12"
  },
  {
    id: "4",
    titulo: "GameCraft Studio",
    descCorta: "Plataforma no-code para crear juegos 2D con editor visual drag & drop y física integrada.",
    descLarga: "GameCraft Studio democratiza el desarrollo de juegos mediante una plataforma visual intuitiva. Los usuarios pueden crear juegos 2D completos sin programar, utilizando un editor drag & drop con sistema de física realista, animaciones y publicación directa.",
    categorias: ["Game Development", "Web Development"],
    imagenes: [
      { url: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800", esPrincipal: true },
      { url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800", esPrincipal: false }
    ],
    links: { repo: "https://github.com/team/gamecraft", demo: "https://gamecraft-studio.com" },
    metricas: { vistas: 298, meInteresa: 67, comentarios: 15 },
    equipo: { nombre: "Pixel Pioneers", integrantes: ["Alex Kim", "Isabella Russo"] },
    estado: "publicado",
    avance: 88,
    ultimaActualizacion: "2024-01-21",
    fechaCreacion: "2024-01-08"
  },
  {
    id: "5",
    titulo: "SmartHome Hub",
    descCorta: "Central domótica que unifica dispositivos IoT con control por voz y automatizaciones inteligentes.",
    descLarga: "SmartHome Hub es una solución integral para hogares inteligentes que centraliza el control de todos los dispositivos IoT. Incluye reconocimiento de voz natural, automatizaciones basadas en ML y una interfaz móvil elegante para gestión remota.",
    categorias: ["IoT", "AI & Machine Learning"],
    imagenes: [
      { url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800", esPrincipal: true }
    ],
    links: { repo: "https://github.com/team/smarthome-hub" },
    metricas: { vistas: 167, meInteresa: 41, comentarios: 9 },
    equipo: { nombre: "HomeAI Solutions", integrantes: ["Roberto Vega", "Carmen Flores", "Daniel Park"] },
    estado: "borrador",
    avance: 65,
    ultimaActualizacion: "2024-01-19",
    fechaCreacion: "2024-01-15"
  },
  {
    id: "6",
    titulo: "DataViz Pro Analytics",
    descCorta: "Herramienta de visualización avanzada para grandes volúmenes de datos con IA predictiva integrada.",
    descLarga: "Una potente plataforma de análisis que transforma datos complejos en visualizaciones interactivas comprensibles. Integra algoritmos de machine learning para predicciones automáticas y generación de insights en tiempo real.",
    categorias: ["Data Science", "AI & Machine Learning"],
    imagenes: [
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", esPrincipal: true },
      { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", esPrincipal: false }
    ],
    links: { demo: "https://dataviz-pro.com" },
    metricas: { vistas: 134, meInteresa: 22, comentarios: 6 },
    equipo: { nombre: "Data Wizards", integrantes: ["Elena Kowalski", "Hassan Ahmed"] },
    estado: "publicado",
    avance: 95,
    ultimaActualizacion: "2024-01-23",
    fechaCreacion: "2024-01-03"
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