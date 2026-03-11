'use client';

import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface TrustIndicator {
  icon: string;
  text: string;
}

export interface DonationSectionProps {
  title?: string;
  description?: string;
  impactMessage?: string;
  suggestedAmounts?: number[];
  trustIndicators?: TrustIndicator[];
  donationUrl?: string;
  className?: string;
}

const defaultTrustIndicators: TrustIndicator[] = [
  { icon: 'shield', text: 'Transacciones Seguras' },
  { icon: 'eye', text: 'Transparencia Total' },
  { icon: 'checkCircle', text: 'Certificado de Donación' },
];

export const DonationSection: React.FC<DonationSectionProps> = ({
  title = 'Apoya Nuestra Causa',
  description = 'Tu donación nos ayuda a plantar más árboles y restaurar ecosistemas',
  impactMessage = 'Con tu donación de S/ 100 podemos plantar 10 árboles nativos',
  suggestedAmounts = [50, 100, 200, 500],
  trustIndicators = defaultTrustIndicators,
  donationUrl = '#',
  className,
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (amount && amount > 0) {
      // Navegar a la URL de donación con el monto
      const url = donationUrl.includes('?')
        ? `${donationUrl}&amount=${amount}`
        : `${donationUrl}?amount=${amount}`;
      
      window.location.href = url;
    } else {
      // Si no hay monto seleccionado, ir a la página de donación
      window.location.href = donationUrl;
    }
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <section
      id="donate"
      className={cn('py-20 bg-green-600 text-white', className)}
      aria-labelledby="donate-heading"
    >
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2
            id="donate-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {title}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6" aria-hidden="true" />
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            {description}
          </p>
        </div>

        {/* Contenedor principal */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 text-gray-900">
          {/* Mensaje de impacto */}
          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8">
            <p className="text-lg font-medium text-green-900">
              {impactMessage}
            </p>
          </div>

          {/* Montos sugeridos */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Selecciona un monto
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suggestedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={cn(
                    'min-h-[60px] px-6 py-4 rounded-lg border-2 font-semibold text-lg transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
                    selectedAmount === amount
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-900 border-gray-300 hover:border-green-600'
                  )}
                  aria-pressed={selectedAmount === amount}
                >
                  S/ {amount}
                </button>
              ))}
            </div>
          </div>

          {/* Monto personalizado */}
          <div className="mb-8">
            <label htmlFor="custom-amount" className="block text-lg font-semibold mb-2">
              O ingresa un monto personalizado
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                S/
              </span>
              <input
                id="custom-amount"
                type="number"
                min="1"
                step="1"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="0"
                className="w-full min-h-[60px] pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Monto personalizado de donación"
              />
            </div>
          </div>

          {/* Botón de donación */}
          <Button
            variant="primary"
            onClick={handleDonate}
            className="w-full text-xl py-6 mb-8"
            aria-label="Proceder a donar"
          >
            Donar Ahora
          </Button>

          {/* Indicadores de confianza */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={indicator.icon}
                    size={20}
                    className="text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {indicator.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-90 mb-4">
            ¿Prefieres otras formas de contribuir?
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-green-600 hover:bg-green-50"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};

DonationSection.displayName = 'DonationSection';
