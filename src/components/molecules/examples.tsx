/**
 * Ejemplos de uso de componentes moleculares
 * Este archivo muestra cómo usar cada componente molecular en diferentes contextos
 */

import React, { useState } from 'react';
import {
  NavigationLink,
  FormField,
  ServiceCard,
  StatCard,
  SocialShareButton,
  type SocialPlatform,
} from './index';

// Ejemplo 1: Navegación con smooth scroll
export const NavigationExample = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { id: 'hero', label: 'Inicio', href: '#hero' },
    { id: 'services', label: 'Servicios', href: '#services' },
    { id: 'impact', label: 'Impacto', href: '#impact' },
    { id: 'contact', label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="flex gap-4">
      {navigationItems.map((item) => (
        <NavigationLink
          key={item.id}
          href={item.href}
          active={activeSection === item.id}
          onClick={() => setActiveSection(item.id)}
        >
          {item.label}
        </NavigationLink>
      ))}
    </nav>
  );
};

// Ejemplo 2: Formulario de contacto con validación
export const ContactFormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación simple
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) newErrors.email = 'El email es requerido';
    if (!formData.message) newErrors.message = 'El mensaje es requerido';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Formulario válido:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <FormField
        label="Nombre"
        name="name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
        helperText="Ingresa tu nombre completo"
      />

      <FormField
        label="Correo Electrónico"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />

      <FormField
        label="Asunto"
        name="subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        helperText="Opcional"
      />

      <FormField
        label="Mensaje"
        name="message"
        textarea
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        error={errors.message}
        helperText="Cuéntanos cómo podemos ayudarte"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Enviar Mensaje
      </button>
    </form>
  );
};

// Ejemplo 3: Grid de servicios
export const ServicesGridExample = () => {
  const services = [
    {
      title: 'Reforestación',
      description: 'Plantamos árboles nativos en zonas deforestadas del Perú',
      icon: 'tree',
      details:
        'Trabajamos con comunidades locales para identificar las mejores especies nativas y garantizar el cuidado a largo plazo de los árboles plantados. Nuestro programa incluye seguimiento y mantenimiento durante los primeros 3 años.',
    },
    {
      title: 'Conservación de Suelos',
      description: 'Protegemos y restauramos suelos degradados',
      icon: 'leaf',
      details:
        'Implementamos técnicas de conservación de suelos para prevenir la erosión y mejorar la fertilidad. Incluye terrazas, barreras vivas y cobertura vegetal.',
    },
    {
      title: 'Educación Ambiental',
      description: 'Sensibilizamos sobre la importancia de los bosques',
      icon: 'sun',
      details:
        'Realizamos talleres y charlas en escuelas y comunidades para crear conciencia sobre la importancia de la conservación ambiental y el cuidado de los recursos naturales.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};

// Ejemplo 4: Estadísticas de impacto
export const ImpactStatsExample = () => {
  const stats = [
    {
      value: '10,000+',
      label: 'Árboles Plantados',
      icon: 'tree',
      description: 'En los últimos 5 años',
    },
    {
      value: '50 Ha',
      label: 'Área Reforestada',
      icon: 'leaf',
      description: 'Equivalente a 70 campos de fútbol',
    },
    {
      value: '15',
      label: 'Comunidades Beneficiadas',
      icon: 'heart',
      description: 'En Junín y Huancavelica',
    },
    {
      value: '2,500 Ton',
      label: 'CO₂ Capturado',
      icon: 'water',
      description: 'Contribución a la lucha contra el cambio climático',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

// Ejemplo 5: Botones de compartir en redes sociales
export const SocialShareExample = () => {
  const platforms: SocialPlatform[] = ['facebook', 'twitter', 'whatsapp', 'linkedin'];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Comparte nuestra misión</h3>
      
      {/* Versión horizontal */}
      <div className="flex gap-3">
        {platforms.map((platform) => (
          <SocialShareButton
            key={platform}
            platform={platform}
            title="ONG ZRT - Reforestación y Conservación Ambiental en Perú"
            description="Únete a nuestra misión de reforestar y conservar el medio ambiente"
          />
        ))}
      </div>

      {/* Versión vertical con texto */}
      <div className="flex flex-col gap-3 max-w-xs">
        {platforms.map((platform) => (
          <SocialShareButton
            key={platform}
            platform={platform}
            title="ONG ZRT - Reforestación y Conservación Ambiental en Perú"
            className="w-full justify-start"
          />
        ))}
      </div>
    </div>
  );
};

// Ejemplo 6: Combinación de componentes en una sección completa
export const CompleteSectionExample = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Navegación */}
      <NavigationExample />

      {/* Estadísticas */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro Impacto</h2>
        <ImpactStatsExample />
      </div>

      {/* Servicios */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <ServicesGridExample />
      </div>

      {/* Compartir en redes sociales */}
      <div className="mt-16 text-center">
        <SocialShareExample />
      </div>

      {/* Formulario de contacto */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <div className="flex justify-center">
          <ContactFormExample />
        </div>
      </div>
    </section>
  );
};

// Exportar todos los ejemplos
export default {
  NavigationExample,
  ContactFormExample,
  ServicesGridExample,
  ImpactStatsExample,
  SocialShareExample,
  CompleteSectionExample,
};
