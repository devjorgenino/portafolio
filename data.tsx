import {
  BellPlus,
  BookText,
  Briefcase,
  Brush,
  Code2,
  CodeSquare,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";
import { subtle } from "node:crypto";

type Locale = "en" | "es";

export function getItemsNavbar(locale: Locale) {
  return [
    {
      id: 1,
      title: locale === "es" ? "Inicio" : "Home",
      icon: <Home size={20} />,
      link: "#home",
    },
    {
      id: 2,
      title: locale === "es" ? "Sobre mi" : "About me",
      icon: <UserRound size={20} />,
      link: "#about-me",
    },
    {
      id: 3,
      title: locale === "es" ? "Experiencia" : "Experience",
      icon: <Briefcase size={20} />,
      link: "#experience",
    },
    {
      id: 4,
      title: locale === "es" ? "Servicios" : "Services",
      icon: <BookText size={20} />,
      link: "#services",
    },
    {
      id: 5,
      title: locale === "es" ? "Portafolio" : "Portfolio",
      icon: <CodeSquare size={20} />,
      link: "#portfolio",
    },
    {
      id: 6,
      title: locale === "es" ? "Contacto" : "Contact",
      icon: <Mail size={20} />,
      link: "#contact",
    },
  ];
}

export function getDataAboutMe(locale: Locale) {
  return [
    {
      id: 1,
      name: locale === "es" ? "Experiencia" : "Experience",
      icon: <Briefcase />,
      description:
        locale === "es" ? "+6 años de experiencia" : "+6 years experience",
    },
    {
      id: 2,
      name: locale === "es" ? "Clientes" : "Clients",
      icon: <UsersRound />,
      description:
        locale === "es" ? "+20 clientes satisfechos" : "+20 satisfied clients",
    },
    {
      id: 3,
      name: locale === "es" ? "Proyectos" : "Projects",
      icon: <Wrench />,
      description: locale === "es" ? "+20 completados" : "+20 completed",
    },
  ];
}

export function getDataSlider() {
  return [
    { id: 1, url: "/slider-1.jpg" },
    { id: 2, url: "/slider-2.jpg" },
    { id: 3, url: "/slider-3.jpg" },
    { id: 4, url: "/slider-4.jpg" },
  ];
}

export function getDataPortfolio(locale: Locale) {
  return [
    {
      id: 1,
      title: locale === "es" ? "ServicePad" : "ServicePad",
      image: "/image-1.jpg",
      urlGithub: "https://github.com/devjorgenino/sp-frontend",
      urlDemo: "https://stage.servicepad.com/",
    },
    {
      id: 2,
      title: locale === "es" ? "Citas Medicas" : "Citas Medicas",
      image: "/image-2.jpg",
      urlGithub: "#!",
      urlDemo: "#!",
    },
    {
      id: 3,
      title: locale === "es" ? "VitaliaGym" : "VitaliaGym",
      image: "/image-2.jpg",
      urlGithub: "#!",
      urlDemo: "#!",
    },
    {
      id: 4,
      title: locale === "es" ? "Rimac" : "Rimac",
      image: "/image-3.jpg",
      urlGithub: "https://github.com/devjorgenino/frontend-challenge-rimac",
      urlDemo: "https://frontend-challenge-rimac-jorgenino.netlify.app/",
    },
    {
      id: 5,
      title: locale === "es" ? "Mily" : "Mily",
      image: "/image-4.jpg",
      urlGithub: "https://github.com/devjorgenino/mily-app",
      urlDemo: "https://apkpure.com/mily/com.geekhack.appmily/download",
      urlDesign:
        "https://xd.adobe.com/view/7076a897-cb8f-4593-6023-cc083eb91650-0647/specs/",
    },
    {
      id: 6,
      title: locale === "es" ? "OpenCook Membresia" : "OpenCook Membresia",
      image: "/image-6.jpg",
      urlGithub: "https://github.com/devjorgenino/membresia-opencook",
      urlDemo: "#!",
    },
    {
      id: 7,
      title: locale === "es" ? "Pagos" : "Pagos",
      image: "/image-6.jpg",
      urlGithub: "https://github.com/devjorgenino/apppagos",
      urlDemo: "#!",
    },
  ];
}

export function getDataExperience(locale: Locale) {
  return [
    {
      id: 1,
      title:
        locale === "es" ? "Desarrollo Frontend 🪄" : "Frontend Development 🪄",
      experience: [
        {
          name: "HTML",
          subtitle: locale === "es" ? "Experimentado" : "Experienced",
          value: 90,
        },
        {
          name: "CSS",
          subtitle: locale === "es" ? "Intermedio" : "Intermediate",
          value: 75,
        },
        {
          name: "JavaScript",
          subtitle: locale === "es" ? "Experimentado" : "Experienced",
          value: 80,
        },
        {
          name: "Tailwind CSS",
          subtitle: locale === "es" ? "Experimentado" : "Experienced",
          value: 70,
        },
        {
          name: "React",
          subtitle: locale === "es" ? "Experimentado" : "Experienced",
          value: 90,
        },
        { name: "Bootstrap", subtitle: "Experimentado", value: 80 },
        {
          name: "Vue",
          subtitle: locale === "es" ? "Intermedio" : "Intermediate",
          value: 60,
        },
        {
          name: "TypeScript",
          subtitle: locale === "es" ? "Experimentado" : "Experienced",
          value: 70,
        },
      ],
    },
    {
      id: 2,
      title:
        locale === "es" ? "Desarrollo Backend  🥷" : "Backend Development 🥷",
      experience: [
        {
          name: "Node JS",
          subtitle: locale === "es" ? "Intermedio" : "Intermediate",
          value: 60,
        },
        {
          name: "Mongo DB",
          subtitle: locale === "es" ? "Intermedio" : "Intermediate",
          value: 55,
        },
        { name: "Python", subtitle: "Basic", value: 50 },
        {
          name: "MySQL",
          subtitle: locale === "es" ? "Intermedio" : "Intermediate",
          value: 50,
        },
        {
          name: "PostgreSQL",
          subtitle: locale === "es" ? "Intermedio" : "Intermediate",
          value: 70,
        },
        {
          name: "PHP",
          subtitle: locale === "es" ? "Intermedio" : "Intermediate",
          value: 50,
        },
        { name: "Django", subtitle: "Basic", value: 40 },
        { name: "Supabase", subtitle: "Basic", value: 60 },
      ],
    },
  ];
}

export function getDataWorkExperience(locale: Locale) {
  return [
    {
      id: 1,
      company: locale === "es" ? "ServicePad" : "ServicePad",
      logo: "/logo-servicepad.png",
      role: locale === "es" ? "Lider de Equipo" : "Team Lead",
      period:
        locale === "es" ? "Junio 2021 - Julio 2025" : "June 2021 - July 2025",
      description:
        locale === "es"
          ? "Trabajo en el desarrollo de interfaces, componentes y mejoras de rendimiento para productos web."
          : "Working on building interfaces, components and performance improvements for web products.",
      techs: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Redux",
        "Git",
        "CSS",
        "HTML",
        "JavaScript",
        "REST APIs",
        "Figma",
        "Jest",
        "Cypress",
        "Vercel",
        "Node.js",
        "CI/CD",
        "Python",
        "Flask",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Scrum",
        "Agile",
      ],
    },
    {
      id: 2,
      company: locale === "es" ? "ServicePad" : "ServicePad",
      logo: "/logo-servicepad.png",
      role:
        locale === "es"
          ? "Desarrollador Frontend Senior"
          : "Senior Frontend Developer",
      period:
        locale === "es"
          ? "Junio 2021 - Julio 2025"
          : "June 2021 - July 2025    ",
      description:
        locale === "es"
          ? "Trabajo en el desarrollo de interfaces, componentes y mejoras de rendimiento para productos web."
          : "Working on building interfaces, components and performance improvements for web products.",
      techs: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Next.js",
        "Redux",
        "Git",
        "CSS",
        "HTML",
        "JavaScript",
        "REST APIs",
        "Figma",
        "Jest",
        "Cypress",
        "Vercel",
        "Node.js",
        "CI/CD",
        "Scrum",
        "Agile",
        "Docker",
        "AWS",
      ],
    },
    {
      id: 3,
      company: locale === "es" ? "SeaiLab" : "SeaiLab",
      logo: "/logo-seailab.png",
      role:
        locale === "es"
          ? "Desarrollador React Junior"
          : "Junior React Developer",
      period: locale === "es" ? "May 2020 - Oct 2020" : "May 2020 - Oct 2020",
      description:
        locale === "es"
          ? "Soporte y desarrollo de funcionalidades frontend en aplicaciones corporativas."
          : "Support and development of frontend features in corporate applications.",
      techs: [
        "Bootstrap",
        "jQuery",
        "React",
        "Redux",
        "REST APIs",
        "Git",
        "CSS",
        "HTML",
        "JavaScript",
      ],
    },
    {
      id: 4,
      company: locale === "es" ? "geekHACK" : "geekHACK",
      logo: "/logo-geekhack.png",
      role:
        locale === "es"
          ? "Desarrollador Frontend Web"
          : "Frontend Web Developer",
      period:
        locale === "es" ? "Sep 2018 - Julio 2021" : "Sep 2018 - July 2021",
      description:
        locale === "es"
          ? "Implementación de sitios para clientes, integraciones con APIs y migraciones a stacks modernos."
          : "Implemented client websites, API integrations and migrations to modern stacks.",
      techs: [
        "HTML",
        "CSS",
        "jQuery",
        "JavaScript",
        "Angular",
        "React",
        "Ionic",
        "PHP",
        "MySQL",
        "Bootstrap",
        "PostgreSQL",
      ],
    },
  ];
}

export function getDataServices(locale: Locale) {
  return [
    {
      id: 1,
      title: locale === "es" ? "Desarrollo Web" : "Web Development",
      icon: <PanelsTopLeft />,
      features: [
        {
          name:
            locale === "es"
              ? "Desarrollo de sitios web personalizados"
              : "Custom website development",
        },
        {
          name:
            locale === "es"
              ? "Diseño y desarrollo responsive"
              : "Responsive design and development",
        },
        { name: locale === "es" ? "Optimización SEO" : "SEO optimization" },
        {
          name:
            locale === "es"
              ? "Desarrollo de aplicaciones web"
              : "Web application development",
        },
        {
          name: locale === "es" ? "Gestión de contenido" : "Content management",
        },
        { name: locale === "es" ? "Comercio electrónico" : "E-commerce" },
        {
          name:
            locale === "es"
              ? "Mantenimiento y soporte continuo"
              : "Ongoing maintenance and support",
        },
      ],
    },
    {
      id: 2,
      title: locale === "es" ? "Creación de contenido" : "Content Creation",
      subtitle: locale === "es" ? "PROXIMAMENTE" : "SOON",
      icon: <BellPlus />,
      features: [
        {
          name:
            locale === "es"
              ? "Redacción de contenido original y de calidad"
              : "Original, high-quality copywriting",
        },
        {
          name:
            locale === "es"
              ? "Creación de vídeos atractivos y dinámicos"
              : "Creation of engaging, dynamic videos",
        },
        {
          name:
            locale === "es"
              ? "Diseño gráfico para una imagen impactante"
              : "Graphic design for impactful branding",
        },
        {
          name:
            locale === "es"
              ? "Edición profesional de textos y materiales visuales"
              : "Professional editing of texts and visuals",
        },
        {
          name:
            locale === "es"
              ? "Estrategias de marketing de contenidos efectivas"
              : "Effective content marketing strategies",
        },
        {
          name:
            locale === "es"
              ? "Producción de podcasts informativos y entretenidos"
              : "Production of informative and entertaining podcasts",
        },
        {
          name:
            locale === "es"
              ? "Generación de infografías claras y visualmente atractivas"
              : "Generation of clear, visually appealing infographics",
        },
        {
          name:
            locale === "es"
              ? "Fotografía profesional para capturar momentos excepcionales"
              : "Professional photography to capture exceptional moments",
        },
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <Brush />,
      features: [
        {
          name:
            locale === "es"
              ? "Diseño intuitivo para una experiencia de usuario fluida"
              : "Intuitive design for a smooth user experience",
        },
        {
          name:
            locale === "es"
              ? "Prototipado interactivo para visualizar la interfaz"
              : "Interactive prototyping to visualize the interface",
        },
        {
          name:
            locale === "es"
              ? "Investigación de usuarios para comprender necesidades y expectativas"
              : "User research to understand needs and expectations",
        },
        {
          name:
            locale === "es"
              ? "Optimización de la usabilidad para mejorar la accesibilidad"
              : "Usability optimization to improve accessibility",
        },
        {
          name:
            locale === "es"
              ? "Pruebas de usabilidad para evaluar la experiencia"
              : "Usability testing to evaluate the experience",
        },
        {
          name:
            locale === "es"
              ? "Diseño responsive para adaptarse a diferentes dispositivos"
              : "Responsive design for multiple devices",
        },
      ],
    },
  ];
}

export function getDataContact(locale: Locale) {
  return [
    {
      id: 1,
      title: "Whatsapp",
      subtitle: "+58 412 3506984",
      link: "https://wa.link/o8gbh1",
      icon: <Phone />,
    },
    {
      id: 2,
      title: "Github",
      subtitle: "github.com/devjorgenino",
      link: "https://github.com/devjorgenino",
      icon: <Code2 />,
    },
    {
      id: 3,
      title: "Email",
      subtitle: "jorgenino.dev@gmail.com",
      link: "mailto:jorgenino.dev@gmail.com",
      icon: <Inbox />,
    },
  ];
}

export function getDataTestimonials(locale: Locale) {
  const en = [
    {
      id: 1,
      name: "George Snow",
      description:
        "Amazing platform! The testimonials here are genuine and helped me make informed decisions. Highly recommended!",
      imageUrl: "/profile-1.jpeg",
    },
    {
      id: 2,
      name: "John Perez",
      description:
        "I love the variety of testimonials available on this page. It's inspiring to see how others have overcome similar challenges.",
      imageUrl: "/profile-2.jpeg",
    },
    {
      id: 3,
      name: "Maria Garcia",
      description:
        "Excellent resource for authentic opinions about different products and services.",
      imageUrl: "/profile-3.jpeg",
    },
    {
      id: 4,
      name: "Laura Snow",
      description:
        "What a fantastic discovery! The testimonials here are honest and detailed.",
      imageUrl: "/profile-3.jpeg",
    },
    {
      id: 5,
      name: "Carlos Sanchez",
      description:
        "A gem on the web. Testimonials are easy to find and well organized.",
      imageUrl: "/profile-2.jpeg",
    },
    {
      id: 6,
      name: "Anthony Martinez",
      description:
        "Fantastic resource for those seeking validation before making important decisions.",
      imageUrl: "/profile-3.jpeg",
    },
  ];

  const es = [
    {
      id: 1,
      name: "George Snow",
      description:
        "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
      imageUrl: "/profile-1.jpeg",
    },
    {
      id: 2,
      name: "Juan Pérez",
      description:
        "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos.",
      imageUrl: "/profile-2.jpeg",
    },
    {
      id: 3,
      name: "María García",
      description:
        "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios.",
      imageUrl: "/profile-3.jpeg",
    },
    {
      id: 4,
      name: "Laura Snow",
      description:
        "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados.",
      imageUrl: "/profile-3.jpeg",
    },
    {
      id: 5,
      name: "Carlos Sánchez",
      description:
        "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados.",
      imageUrl: "/profile-2.jpeg",
    },
    {
      id: 6,
      name: "Antonio Martínez",
      description:
        "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes!",
      imageUrl: "/profile-3.jpeg",
    },
  ];

  return locale === "es" ? es : en;
}

export type { Locale };
