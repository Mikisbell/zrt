'use client';

import React from 'react';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { cn } from '@/lib/utils';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface ServicesSectionProps {
  title?: string;
  description?: string;
  services: Service[];
  className?: string;
}

const defaultServices: Service[] = [
  {
    id: 'tree-planting',
    title: 'Plantación de Árboles',
    description: 'Plantamos especies nativas adaptadas al ecosistema local para restaurar áreas degradadas.',
    icon: 'tree',
    details: 'Nuestro programa de plantación incluye la selección cuidadosa de especies nativas, preparación del terreno, plantación supervisada y seguimiento del crecimiento. Trabajamos con comunidades locales para asegurar el éxito a largo plazo de cada árbol plantado.',
  },
  {
    id: 'forest-conservation',
    title: 'Conservación de Bosques',
    description: 'Protegemos bosques existentes mediante vigilancia y programas de conservación.',
    icon: 'shield',
    details: 'Implementamos estrategias de conservación que incluyen monitoreo constante, prevención de incendios forestales, control de plagas y enfermedades, y educación a las comunidades sobre la importancia de preservar los bosques nativos.',
  },
  {
    id: 'ecosystem-restoration',
    title: 'Restauración de Ecosistemas',
    description: 'Recuperamos ecosistemas dañados mediante técnicas de restauración ecológica.',
    icon: 'refresh',
    details: 'Utilizamos metodologías científicas para restaurar la biodiversidad y funcionalidad de ecosistemas degradados. Esto incluye la reintroducción de especies nativas, mejora de la calidad del suelo, y restauración de corredores biológicos.',
  },
  {
    id: 'environmental-education',
    title: 'Educación Ambiental',
    description: 'Capacitamos a comunidades sobre prácticas sostenibles y conservación.',
    icon: 'book',
    details: 'Ofrecemos talleres, charlas y programas educativos para todas las edades. Enseñamos sobre la importancia de los árboles, técnicas de reforestación, y cómo cada persona puede contribuir a la conservación del medio ambiente.',
  },
  {
    id: 'carbon-offset',
    title: 'Compensación de Carbono',
    description: 'Ayudamos a empresas y personas a compensar su huella de carbono mediante reforestación.',
    icon: 'cloud',
    details: 'Calculamos la huella de carbono y diseñamos proyectos de reforestación personalizados para compensarla. Proporcionamos certificados verificables y reportes de impacto para demostrar la contribución ambiental.',
  },
  {
    id: 'community-engagement',
    title: 'Participación Comunitaria',
    description: 'Involucramos a las comunidades locales en nuestros proyectos de reforestación.',
    icon: 'users',
    details: 'Creamos oportunidades para que las comunidades participen activamente en la reforestación. Organizamos jornadas de plantación, capacitamos líderes comunitarios, y generamos empleos locales relacionados con la conservación.',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = 'Nuestros Servicios',
  description = 'Ofrecemos una amplia gama de servicios de reforestación y conservación ambiental',
  services = defaultServices,
  className,
}) => {
  return (
    <section
      id="services"
      className={cn('py-20 bg-white', className)}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6" aria-hidden="true" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ServicesSection.displayName = 'ServicesSection';
