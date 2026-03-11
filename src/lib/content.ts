/**
 * Content and Assets for Landing Page
 * Validates: Requirements 1-6 (All content requirements)
 */

import { 
  HeroSectionProps,
} from '@/components/organisms/HeroSection';
import { Service } from '@/types';

// Hero Section Content
export const heroContent: Omit<HeroSectionProps, 'className'> = {
  headline: 'Juntos por un Futuro Verde',
  subheadline: 'Reforestamos, conservamos y educamos para proteger nuestro planeta',
  backgroundImage: '/images/hero-background.svg',
  ctaButtons: [
    {
      label: 'Donar Ahora',
      href: '#donate',
      variant: 'primary',
    },
    {
      label: 'Conocer Más',
      href: '#about',
      variant: 'secondary',
    },
  ],
  organizationName: 'Organización No Gubernamental ZRT (ONG ZRT)',
  organizationId: '20610820256',
  location: 'El Tambo, Huancayo, Junín, Perú',
};

// About Section Content
export const aboutContent = {
  title: 'Sobre Nosotros',
  mission: 'Nuestra misión es proteger y restaurar los ecosistemas forestales del Perú a través de la reforestación activa, la conservación ambiental y la educación pública. Trabajamos con comunidades locales para crear un impacto duradero en la preservación de nuestro medio ambiente.',
  activities: [
    {
      id: 'reforestation',
      name: 'Servicios de Reforestación',
      description: 'Plantamos árboles nativos y restauramos ecosistemas degradados en todo el Perú.',
      icon: 'tree',
    },
    {
      id: 'fundraising',
      name: 'Recaudación de Fondos',
      description: 'Gestionamos donaciones transparentes para financiar nuestros proyectos ambientales.',
      icon: 'heart',
    },
    {
      id: 'awareness',
      name: 'Sensibilización Ambiental',
      description: 'Educamos a la comunidad sobre la importancia de la conservación forestal.',
      icon: 'megaphone',
    },
  ],
};

// Services Content
export const servicesContent: Service[] = [
  {
    id: 'tree-planting',
    title: 'Plantación de Árboles',
    description: 'Plantamos especies nativas adaptadas al ecosistema local para maximizar la supervivencia y el impacto ecológico.',
    icon: 'tree',
    details: 'Trabajamos con comunidades locales para identificar las mejores áreas para reforestación. Utilizamos técnicas científicas para asegurar una tasa de supervivencia superior al 85%. Cada árbol plantado es monitoreado durante sus primeros 3 años de crecimiento.',
  },
  {
    id: 'forest-conservation',
    title: 'Conservación de Bosques',
    description: 'Protegemos áreas forestales existentes mediante vigilancia comunitaria y programas de conservación.',
    icon: 'shield',
    details: 'Establecemos acuerdos con comunidades locales para la protección de bosques nativos. Implementamos sistemas de monitoreo para prevenir la deforestación ilegal. Promovemos alternativas económicas sostenibles para reducir la presión sobre los bosques.',
  },
  {
    id: 'environmental-education',
    title: 'Educación Ambiental',
    description: 'Desarrollamos programas educativos para escuelas y comunidades sobre la importancia de los bosques.',
    icon: 'book',
    details: 'Ofrecemos talleres gratuitos en escuelas rurales y urbanas. Creamos material educativo sobre biodiversidad y cambio climático. Organizamos eventos de voluntariado para conectar a las personas con la naturaleza.',
  },
  {
    id: 'biodiversity-monitoring',
    title: 'Monitoreo de Biodiversidad',
    description: 'Realizamos estudios científicos para evaluar el impacto de nuestras acciones en la biodiversidad local.',
    icon: 'search',
    details: 'Colaboramos con universidades para realizar investigaciones científicas. Utilizamos tecnología de punta para el monitoreo de especies. Publicamos informes anuales sobre el estado de la biodiversidad en nuestras áreas de trabajo.',
  },
];

// Impact Statistics
export const impactStats = [
  {
    value: '50,000+',
    label: 'Árboles Plantados',
    icon: 'tree',
  },
  {
    value: '250',
    label: 'Hectáreas Reforestadas',
    icon: 'map',
  },
  {
    value: '1,200+',
    label: 'Voluntarios',
    icon: 'users',
  },
  {
    value: '15',
    label: 'Comunidades Beneficiadas',
    icon: 'home',
  },
];

// Environmental Facts
export const environmentalFacts = [
  {
    title: 'Deforestación en Perú',
    description: 'Perú pierde aproximadamente 150,000 hectáreas de bosque cada año debido a la agricultura, minería y tala ilegal.',
  },
  {
    title: 'Importancia de los Bosques',
    description: 'Los bosques absorben CO2, regulan el clima, protegen la biodiversidad y son el hogar de comunidades indígenas.',
  },
  {
    title: 'Impacto de la Reforestación',
    description: 'Un solo árbol puede absorber hasta 22 kg de CO2 al año y producir oxígeno para 2 personas.',
  },
];

// Donation Content
export const donationContent = {
  title: 'Apoya Nuestra Causa',
  description: 'Tu donación nos ayuda a plantar más árboles, proteger bosques existentes y educar a las comunidades sobre la importancia de la conservación ambiental.',
  impactMessage: 'Con tu apoyo, podemos hacer la diferencia. Cada donación cuenta.',
  suggestedAmounts: [25, 50, 100, 250],
  trustIndicators: [
    {
      icon: 'shield',
      text: 'Donaciones 100% Seguras',
    },
    {
      icon: 'check',
      text: 'Transparencia Total',
    },
    {
      icon: 'heart',
      text: 'Impacto Medible',
    },
  ],
  paymentUrl: 'https://donate.ongzrt.org', // URL placeholder
};

// Contact Content
export const contactContent = {
  title: 'Contáctanos',
  description: 'Estamos aquí para responder tus preguntas y escuchar tus ideas sobre cómo podemos trabajar juntos por un futuro más verde.',
  alternativeContacts: [
    {
      type: 'email' as const,
      value: 'contacto@ongzrt.org',
      icon: 'mail',
    },
    {
      type: 'phone' as const,
      value: '+51 999 999 999',
      icon: 'phone',
    },
    {
      type: 'address' as const,
      value: 'El Tambo, Huancayo, Junín, Perú',
      icon: 'map-pin',
    },
  ],
};

// Organization Info
export const organizationInfo = {
  name: 'ONG ZRT',
  legalName: 'Organización No Gubernamental ZRT',
  id: '20610820256',
  location: 'El Tambo, Huancayo, Junín, Perú',
  registrationValidity: 'Registro vigente hasta: 12 de Noviembre del 2034',
};

// Social Links
export const socialLinks = [
  { platform: 'facebook' as const, url: 'https://facebook.com/ongzrt' },
  { platform: 'twitter' as const, url: 'https://twitter.com/ongzrt' },
  { platform: 'instagram' as const, url: 'https://instagram.com/ongzrt' },
  { platform: 'whatsapp' as const, url: 'https://wa.me/51999999999' },
];

// Navigation Items
export const navigationItems = [
  { id: 'hero', label: 'Inicio', href: '#hero', order: 1 },
  { id: 'about', label: 'Nosotros', href: '#about', order: 2 },
  { id: 'services', label: 'Servicios', href: '#services', order: 3 },
  { id: 'impact', label: 'Impacto', href: '#impact', order: 4 },
  { id: 'donate', label: 'Donar', href: '#donate', order: 5 },
  { id: 'contact', label: 'Contacto', href: '#contact', order: 6 },
];
