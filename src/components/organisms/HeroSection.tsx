'use client';

import React from 'react';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

export interface HeroSectionProps {
  headline: string;
  subheadline: string;
  backgroundImage?: string;
  ctaButtons: CTAButton[];
  organizationName?: string;
  organizationId?: string;
  location?: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  backgroundImage = '/images/hero-bg.jpg',
  ctaButtons,
  organizationName = 'Organización No Gubernamental ZRT (ONG ZRT)',
  organizationId = '20610820256',
  location = 'El Tambo, Huancayo, Junín, Perú',
  className,
}) => {
  const handleCTAClick = (button: CTAButton) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href.startsWith('#')) {
      const element = document.querySelector(button.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = button.href;
    }
  };

  return (
    <section
      id="hero"
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
      aria-labelledby="hero-headline"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Imagen de fondo de reforestación"
      />
      
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      
      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        {/* Información de la organización */}
        <div className="mb-8 space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            {organizationName}
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            RUC: {organizationId}
          </p>
          <p className="text-base md:text-lg opacity-80">
            {location}
          </p>
        </div>
        
        {/* Headline principal */}
        <h2
          id="hero-headline"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in"
        >
          {headline}
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto opacity-90 animate-fade-in-delay">
          {subheadline}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          {ctaButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              onClick={() => handleCTAClick(button)}
              className="w-full sm:w-auto text-lg px-8 py-4"
              aria-label={button.label}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';
