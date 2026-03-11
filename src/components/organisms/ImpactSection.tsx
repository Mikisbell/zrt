'use client';

import React from 'react';
import { StatCard } from '@/components/molecules/StatCard';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';

export interface Statistic {
  value: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface EnvironmentalFact {
  title: string;
  description: string;
}

export interface ImpactSectionProps {
  title?: string;
  statistics: Statistic[];
  environmentalFacts?: EnvironmentalFact[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const defaultStatistics: Statistic[] = [
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
];

const defaultFacts: EnvironmentalFact[] = [
  {
    title: 'La Deforestación en Perú',
    description: 'Perú pierde aproximadamente 150,000 hectáreas de bosque cada año, afectando la biodiversidad y contribuyendo al cambio climático.',
  },
  {
    title: 'Importancia de los Árboles',
    description: 'Un solo árbol puede absorber hasta 22 kg de CO₂ al año y producir oxígeno suficiente para 2 personas durante todo el año.',
  },
  {
    title: 'Biodiversidad en Peligro',
    description: 'Los bosques peruanos albergan más de 20,000 especies de plantas, muchas de ellas endémicas y en riesgo por la deforestación.',
  },
];

export const ImpactSection: React.FC<ImpactSectionProps> = ({
  title = 'Nuestro Impacto Ambiental',
  statistics = defaultStatistics,
  environmentalFacts = defaultFacts,
  ctaLabel = 'Únete a Nuestra Causa',
  ctaHref = '#donate',
  className,
}) => {
  const handleCTAClick = () => {
    if (ctaHref.startsWith('#')) {
      const element = document.querySelector(ctaHref);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = ctaHref;
    }
  };

  return (
    <section
      id="impact"
      className={cn('py-20 bg-gradient-to-b from-green-50 to-white', className)}
      aria-labelledby="impact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            id="impact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6" aria-hidden="true" />
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          {statistics.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              description={stat.description}
            />
          ))}
        </div>

        {/* Contenido educativo */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            ¿Por Qué es Importante la Reforestación?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environmentalFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {fact.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            onClick={handleCTAClick}
            className="text-lg px-8 py-4"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};

ImpactSection.displayName = 'ImpactSection';
