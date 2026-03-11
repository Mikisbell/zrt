/**
 * Internationalization (i18n) utilities
 * Validates: Requirements 11 (Contenido Multilingüe)
 */

export type Language = 'es' | 'en';

export interface LanguageConfig {
  enabled: boolean;
  defaultLanguage: Language;
  supportedLanguages: Language[];
  persistPreference: boolean;
}

export const languageConfig: LanguageConfig = {
  enabled: true,
  defaultLanguage: 'es',
  supportedLanguages: ['es', 'en'],
  persistPreference: true,
};

// Obtener idioma actual
export const getCurrentLanguage = (): Language => {
  if (typeof window === 'undefined') return languageConfig.defaultLanguage;
  
  if (languageConfig.persistPreference) {
    const stored = localStorage.getItem('preferred_language') as Language;
    if (stored && languageConfig.supportedLanguages.includes(stored)) {
      return stored;
    }
  }
  
  return languageConfig.defaultLanguage;
};

// Establecer idioma
export const setLanguage = (language: Language) => {
  if (typeof window === 'undefined') return;
  
  if (!languageConfig.supportedLanguages.includes(language)) {
    console.warn(`Language ${language} is not supported`);
    return;
  }
  
  if (languageConfig.persistPreference) {
    localStorage.setItem('preferred_language', language);
  }
  
  // Disparar evento personalizado para que los componentes se actualicen
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
};

// Traducciones
export interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

export const translations: Translations = {
  // Header
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Nosotros', en: 'About Us' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.impact': { es: 'Impacto', en: 'Impact' },
  'nav.donate': { es: 'Donar', en: 'Donate' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  
  // Hero Section
  'hero.headline': { 
    es: 'Juntos por un Futuro Verde', 
    en: 'Together for a Green Future' 
  },
  'hero.subheadline': { 
    es: 'Reforestamos, conservamos y educamos para proteger nuestro planeta', 
    en: 'We reforest, conserve and educate to protect our planet' 
  },
  'hero.cta.donate': { es: 'Donar Ahora', en: 'Donate Now' },
  'hero.cta.learn': { es: 'Conocer Más', en: 'Learn More' },
  'hero.org.name': { 
    es: 'Organización No Gubernamental ZRT (ONG ZRT)', 
    en: 'Non-Governmental Organization ZRT (NGO ZRT)' 
  },
  'hero.org.location': { 
    es: 'El Tambo, Huancayo, Junín, Perú', 
    en: 'El Tambo, Huancayo, Junín, Peru' 
  },
  
  // About Section
  'about.title': { es: 'Sobre Nosotros', en: 'About Us' },
  'about.mission': { 
    es: 'Nuestra misión es proteger y restaurar los ecosistemas forestales del Perú a través de la reforestación activa, la conservación ambiental y la educación pública.', 
    en: 'Our mission is to protect and restore Peru\'s forest ecosystems through active reforestation, environmental conservation and public education.' 
  },
  
  // Services Section
  'services.title': { es: 'Nuestros Servicios', en: 'Our Services' },
  'services.reforestation.title': { es: 'Reforestación', en: 'Reforestation' },
  'services.reforestation.description': { 
    es: 'Plantamos árboles nativos para restaurar ecosistemas degradados', 
    en: 'We plant native trees to restore degraded ecosystems' 
  },
  'services.conservation.title': { es: 'Conservación', en: 'Conservation' },
  'services.conservation.description': { 
    es: 'Protegemos áreas forestales existentes y su biodiversidad', 
    en: 'We protect existing forest areas and their biodiversity' 
  },
  'services.education.title': { es: 'Educación Ambiental', en: 'Environmental Education' },
  'services.education.description': { 
    es: 'Sensibilizamos a la comunidad sobre la importancia de los bosques', 
    en: 'We raise community awareness about the importance of forests' 
  },
  
  // Impact Section
  'impact.title': { es: 'Nuestro Impacto', en: 'Our Impact' },
  'impact.trees.label': { es: 'Árboles Plantados', en: 'Trees Planted' },
  'impact.hectares.label': { es: 'Hectáreas Reforestadas', en: 'Hectares Reforested' },
  'impact.volunteers.label': { es: 'Voluntarios', en: 'Volunteers' },
  
  // Donation Section
  'donate.title': { es: 'Apoya Nuestra Causa', en: 'Support Our Cause' },
  'donate.description': { 
    es: 'Tu donación nos ayuda a plantar más árboles y proteger nuestro medio ambiente', 
    en: 'Your donation helps us plant more trees and protect our environment' 
  },
  'donate.cta': { es: 'Donar Ahora', en: 'Donate Now' },
  
  // Contact Section
  'contact.title': { es: 'Contáctanos', en: 'Contact Us' },
  'contact.description': { 
    es: 'Estamos aquí para responder tus preguntas', 
    en: 'We are here to answer your questions' 
  },
  'contact.form.name': { es: 'Nombre', en: 'Name' },
  'contact.form.email': { es: 'Correo Electrónico', en: 'Email' },
  'contact.form.subject': { es: 'Asunto', en: 'Subject' },
  'contact.form.message': { es: 'Mensaje', en: 'Message' },
  'contact.form.submit': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.form.success': { 
    es: '¡Mensaje enviado con éxito! Te responderemos pronto.', 
    en: 'Message sent successfully! We will respond soon.' 
  },
  
  // Footer
  'footer.follow': { es: 'Síguenos', en: 'Follow Us' },
  'footer.share': { es: 'Comparte', en: 'Share' },
  'footer.share.description': { 
    es: 'Ayúdanos a difundir nuestra misión', 
    en: 'Help us spread our mission' 
  },
  'footer.navigation': { es: 'Navegación', en: 'Navigation' },
  'footer.privacy': { es: 'Política de Privacidad', en: 'Privacy Policy' },
  'footer.terms': { es: 'Términos de Uso', en: 'Terms of Use' },
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.registration': { 
    es: 'Registro vigente hasta: 12 de Noviembre del 2034', 
    en: 'Registration valid until: November 12, 2034' 
  },
  
  // Cookie Consent
  'cookie.title': { es: 'Uso de Cookies', en: 'Cookie Usage' },
  'cookie.description': { 
    es: 'Utilizamos cookies y herramientas de análisis para mejorar tu experiencia y entender cómo interactúas con nuestro sitio. Puedes aceptar o rechazar el uso de estas herramientas.', 
    en: 'We use cookies and analytics tools to improve your experience and understand how you interact with our site. You can accept or decline the use of these tools.' 
  },
  'cookie.accept': { es: 'Aceptar', en: 'Accept' },
  'cookie.decline': { es: 'Rechazar', en: 'Decline' },
};

// Función para obtener traducción
export const t = (key: string, language?: Language): string => {
  const lang = language || getCurrentLanguage();
  const translation = translations[key];
  
  if (!translation) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  
  return translation[lang] || translation[languageConfig.defaultLanguage] || key;
};

// Importar React para el hook
import React from 'react';

// Hook personalizado para usar traducciones (para usar en componentes)
export const useTranslation = () => {
  const [language, setLanguageState] = React.useState<Language>(
    typeof window !== 'undefined' ? getCurrentLanguage() : languageConfig.defaultLanguage
  );
  
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguageState(event.detail.language);
    };
    
    window.addEventListener('languagechange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange as EventListener);
    };
  }, []);
  
  return {
    t: (key: string) => t(key, language),
    language,
    setLanguage,
  };
};
