'use client';

import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface Activity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface AboutSectionProps {
  mission: string;
  activities: Activity[];
  registrationValidity?: string;
  className?: string;
}

const defaultActivities: Activity[] = [
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
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  mission,
  activities = defaultActivities,
  registrationValidity = 'Registro vigente hasta: 12 de Noviembre del 2034',
  className,
}) => {
  return (
    <section
      id="about"
      className={cn('py-20 bg-gray-50', className)}
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6" aria-hidden="true" />
        </div>

        {/* Misión */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Nuestra Misión
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {mission}
          </p>
          <p className="text-sm text-gray-600 mt-4 italic">
            {registrationValidity}
          </p>
        </div>

        {/* Actividades principales */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Nuestras Actividades Principales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={activity.icon}
                      size={32}
                      className="text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {activity.name}
                </h4>
                
                <p className="text-gray-600">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.displayName = 'AboutSection';
