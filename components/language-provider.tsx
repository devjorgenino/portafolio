"use client";

import * as React from "react";

type Locale = "en" | "es";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    hello_im: "Hello I'm",
    frontend: "Frontend Developer",
    contact_me: "Contact me",
    download_cv: "Download CV",
    about_title: "About me",
    about_sub: "Get to know me",
    services_title: "Services",
    services_sub: "What I offer",
    portfolio_title: "Portfolio",
    portfolio_sub: "Recent work 💼",
    talk: "Let's talk",
    toggle_language: "Toggle language",
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    footer_text: "© {year} Jorge Niño | Frontend Developer",
    name_label: "Name",
    email_label: "Email",
    message_label: "Message",
    placeholder_name: "Your name",
    placeholder_email: "Your email",
    placeholder_message: "Write your message...",
    send_button: "Send",
    sending: "Sending...",
    send_success: "Form sent successfully ✌🏽",
    send_error: "There was an error sending the form",
    about_paragraph:
      "I'm a passionate developer who finds inspiration in clean code and challenging algorithms. When I'm not coding, I enjoy the outdoors and sports to keep a healthy mind-body balance. I'm also an avid reader and I share programming content on social media to connect with other software enthusiasts.",
    image_profile_alt: "Profile image",
  },
  es: {
    hello_im: "Hola soy",
    frontend: "Desarrollador Frontend",
    contact_me: "Contacta conmigo",
    download_cv: "Descargar CV",
    about_title: "Sobre mi",
    about_sub: "Conóceme",
    services_title: "Servicios",
    services_sub: "Que ofrezco",
    portfolio_title: "Portafolio",
    portfolio_sub: "Trabajos recientes 💼",
    talk: "Hablamos",
    toggle_language: "Cambiar idioma",
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_skills: "Habilidades",
    nav_services: "Servicios",
    nav_portfolio: "Portafolio",
    nav_contact: "Contacto",
    footer_text: "© {year} Jorge Niño | Desarrollador Frontend",
    name_label: "Nombre",
    email_label: "Correo",
    message_label: "Mensaje",
    placeholder_name: "Tu nombre",
    placeholder_email: "Tu correo",
    placeholder_message: "Escribe tu mensaje...",
    send_button: "Enviar",
    sending: "Enviando...",
    send_success: "Formulario enviado con éxito ✌🏽",
    send_error: "Hubo un error al enviar el formulario",
    about_paragraph:
      "Soy un desarrollador apasionado que encuentra inspiración en el código limpio y los algoritmos desafiantes. Cuando no estoy programando, disfruto del aire libre y el deporte para mantener un equilibrio mente-cuerpo. También soy un ávido lector y comparto contenido sobre programación en redes sociales para conectar con otros entusiastas del software.",
    image_profile_alt: "Imagen de perfil",
  },
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>(() => {
    try {
      const stored = localStorage.getItem("locale");
      if (stored === "en" || stored === "es") return stored;
    } catch (e) {}
    return "es";
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch (e) {}
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    setLocale: (l: Locale) => setLocale(l),
    t: (key: string) => {
      return translations[locale][key] ?? key;
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export type { Locale };
