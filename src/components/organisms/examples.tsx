import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { ImpactSection } from './ImpactSection';
import { DonationSection } from './DonationSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

/**
 * Ejemplos de uso de componentes Organisms
 * 
 * Estos ejemplos muestran cómo usar cada componente organism
 * con diferentes configuraciones y props.
 */

// ============================================================================
// Header Examples
// ============================================================================

export const HeaderExample = () => (
  <Header
    transparent={true}
    navigationItems={[
      { id: 'hero', label: 'Inicio', href: '#hero', order: 1 },
      { id: 'about', label: 'Nosotros', href: '#about', order: 2 },
      { id: 'services', label: 'Servicios', href: '#services', order: 3 },
      { id: 'impact', label: 'Impacto', href: '#impact', order: 4 },
      { id: 'donate', label: 'Donar', href: '#donate', order: 5 },
      { id: 'contact', label: 'Contacto', href: '#contact', order: 6 },
    ]}
  />
);

// ============================================================================
// HeroSection Examples
// ============================================================================

export const HeroSectionExample = () => (
  <HeroSection
    headline="Salvemos Nuestro Planeta"
    subheadline="Juntos por un futuro más verde"
    backgroundImage="/images/hero-bg.jpg"
    ctaButtons={[
      { label: 'Donar Ahora', href: '#donate', variant: 'primary' },
      { label: 'Conocer Más', href: '#about', variant: 'secondary' },
    ]}
    organizationName="Organización No Gubernamental ZRT (ONG ZRT)"
    organizationId="20610820256"
    location="El Tambo, Huancayo, Junín, Perú"
  />
);

// ============================================================================
// AboutSection Examples
// ============================================================================

export const AboutSectionExample = () => (
  <AboutSection
    mission="Proteger y restaurar los ecosistemas mediante la reforestación, conservación ambiental y educación, contribuyendo a un futuro sostenible para las comunidades de Junín y el Perú."
    activities={[
      {
        id: 'reforestation',
        name: 'Servicios de Reforestación',
        description: 'Plantación y cuidado de árboles para restaurar ecosistemas',
        icon: 'tree',
      },
      {
        id: 'fundraising',
        name: 'Recaudación de Fondos',
        description: 'Gestión transparente de donaciones para proyectos ambientales',
        icon: 'heart',
      },
      {
        id: 'awareness',
        name: 'Sensibilización Ambiental',
        description: 'Educación y concientización sobre conservación del medio ambiente',
        icon: 'lightbulb',
      },
    ]}
    registrationValidity="Registro vigente hasta: 12 de Noviembre del 2034"
  />
);

// ============================================================================
// ServicesSection Examples
// ============================================================================

export const ServicesSectionExample = () => (
  <ServicesSection
    title="Nuestros Servicios"
    description="Ofrecemos una amplia gama de servicios de reforestación y conservación ambiental"
    services={[
      {
        id: 'tree-planting',
        title: 'Plantación de Árboles',
        description: 'Plantamos especies nativas adaptadas al ecosistema local.',
        icon: 'tree',
        details: 'Nuestro programa incluye selección de especies, preparación del terreno, plantación supervisada y seguimiento del crecimiento.',
      },
      {
        id: 'forest-conservation',
        title: 'Conservación de Bosques',
        description: 'Protegemos bosques existentes mediante vigilancia y programas de conservación.',
        icon: 'shield',
        details: 'Implementamos estrategias de conservación que incluyen monitoreo constante y prevención de incendios forestales.',
      },
      {
        id: 'ecosystem-restoration',
        title: 'Restauración de Ecosistemas',
        description: 'Recuperamos ecosistemas dañados mediante técnicas de restauración ecológica.',
        icon: 'refresh',
        details: 'Utilizamos metodologías científicas para restaurar la biodiversidad y funcionalidad de ecosistemas degradados.',
      },
    ]}
  />
);

// ============================================================================
// ImpactSection Examples
// ============================================================================

export const ImpactSectionExample = () => (
  <ImpactSection
    title="Nuestro Impacto Ambiental"
    statistics={[
      {
        value: '50,000+',
        label: 'Árboles Plantados',
        icon: 'tree',
        description: 'Desde el inicio de nuestras operaciones',
      },
      {
        value: '1,200',
        label: 'Hectáreas Restauradas',
        icon: 'map',
        description: 'En toda la región de Junín',
      },
      {
        value: '25',
        label: 'Especies Nativas',
        icon: 'leaf',
        description: 'Diferentes especies plantadas',
      },
      {
        value: '5,000+',
        label: 'Toneladas de CO₂',
        icon: 'cloud',
        description: 'Capturadas anualmente',
      },
    ]}
    environmentalFacts={[
      {
        title: 'La Deforestación en Perú',
        description: 'Perú pierde aproximadamente 150,000 hectáreas de bosque cada año.',
      },
      {
        title: 'Importancia de los Árboles',
        description: 'Un solo árbol puede absorber hasta 22 kg de CO₂ al año.',
      },
      {
        title: 'Biodiversidad en Peligro',
        description: 'Los bosques peruanos albergan más de 20,000 especies de plantas.',
      },
    ]}
    ctaLabel="Únete a Nuestra Causa"
    ctaHref="#donate"
  />
);

// ============================================================================
// DonationSection Examples
// ============================================================================

export const DonationSectionExample = () => (
  <DonationSection
    title="Apoya Nuestra Causa"
    description="Tu donación nos ayuda a plantar más árboles y restaurar ecosistemas"
    impactMessage="Con tu donación de S/ 100 podemos plantar 10 árboles nativos"
    suggestedAmounts={[50, 100, 200, 500]}
    trustIndicators={[
      { icon: 'shield', text: 'Transacciones Seguras' },
      { icon: 'eye', text: 'Transparencia Total' },
      { icon: 'checkCircle', text: 'Certificado de Donación' },
    ]}
    donationUrl="https://donate.ongzrt.org"
  />
);

// ============================================================================
// ContactSection Examples
// ============================================================================

export const ContactSectionExample = () => {
  const handleSubmit = async (data: any) => {
    console.log('Form submitted:', data);
    // Aquí iría la lógica de envío real
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <ContactSection
      title="Contáctanos"
      description="Estamos aquí para responder tus preguntas y escuchar tus ideas"
      alternativeContacts={[
        {
          type: 'email',
          value: 'contacto@ongzrt.org',
          icon: 'mail',
          label: 'Email',
        },
        {
          type: 'phone',
          value: '+51 999 999 999',
          icon: 'phone',
          label: 'Teléfono',
        },
        {
          type: 'address',
          value: 'El Tambo, Huancayo, Junín, Perú',
          icon: 'mapPin',
          label: 'Dirección',
        },
      ]}
      onSubmit={handleSubmit}
    />
  );
};

// ============================================================================
// Footer Examples
// ============================================================================

export const FooterExample = () => (
  <Footer
    organizationInfo={{
      name: 'ONG ZRT',
      legalName: 'Organización No Gubernamental ZRT',
      id: '20610820256',
      location: 'El Tambo, Huancayo, Junín, Perú',
      registrationValidity: 'Registro vigente hasta: 12 de Noviembre del 2034',
    }}
    socialLinks={[
      { platform: 'facebook', url: 'https://facebook.com/ongzrt' },
      { platform: 'twitter', url: 'https://twitter.com/ongzrt' },
      { platform: 'instagram', url: 'https://instagram.com/ongzrt' },
      { platform: 'whatsapp', url: 'https://wa.me/51999999999' },
    ]}
    navigationLinks={[
      { label: 'Inicio', href: '#hero' },
      { label: 'Nosotros', href: '#about' },
      { label: 'Servicios', href: '#services' },
      { label: 'Impacto', href: '#impact' },
      { label: 'Donar', href: '#donate' },
      { label: 'Contacto', href: '#contact' },
    ]}
    showSocialShare={true}
  />
);

// ============================================================================
// Complete Landing Page Example
// ============================================================================

export const CompleteLandingPageExample = () => {
  const handleContactSubmit = async (data: any) => {
    console.log('Contact form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen">
      <Header transparent={true} />
      
      <HeroSection
        headline="Salvemos Nuestro Planeta"
        subheadline="Juntos por un futuro más verde"
        backgroundImage="/images/hero-bg.jpg"
        ctaButtons={[
          { label: 'Donar Ahora', href: '#donate', variant: 'primary' },
          { label: 'Conocer Más', href: '#about', variant: 'secondary' },
        ]}
      />
      
      <AboutSection
        mission="Proteger y restaurar los ecosistemas mediante la reforestación, conservación ambiental y educación."
      />
      
      <ServicesSection
        services={[
          {
            id: 'tree-planting',
            title: 'Plantación de Árboles',
            description: 'Plantamos especies nativas adaptadas al ecosistema local.',
            icon: 'tree',
            details: 'Programa completo de plantación y seguimiento.',
          },
        ]}
      />
      
      <ImpactSection
        statistics={[
          { value: '50,000+', label: 'Árboles Plantados', icon: 'tree' },
          { value: '1,200', label: 'Hectáreas Restauradas', icon: 'map' },
        ]}
      />
      
      <DonationSection
        suggestedAmounts={[50, 100, 200, 500]}
        donationUrl="https://donate.ongzrt.org"
      />
      
      <ContactSection onSubmit={handleContactSubmit} />
      
      <Footer showSocialShare={true} />
    </div>
  );
};
