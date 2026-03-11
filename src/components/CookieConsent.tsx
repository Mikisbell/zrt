'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import { setTrackingConsent } from '@/lib/analytics';

/**
 * Cookie Consent Banner
 * Solicita consentimiento del usuario para tracking de analytics
 * Validates: Requirements 13.6 (Respeto a preferencias de privacidad)
 */
export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const consent = localStorage.getItem('analytics_consent');
    if (consent === null) {
      // Si no hay preferencia guardada, mostrar banner
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setTrackingConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setTrackingConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 id="cookie-consent-title" className="font-semibold mb-2">
              Uso de Cookies
            </h3>
            <p id="cookie-consent-description" className="text-sm text-gray-300">
              Utilizamos cookies y herramientas de análisis para mejorar tu experiencia y entender cómo interactúas con nuestro sitio. 
              Puedes aceptar o rechazar el uso de estas herramientas.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              variant="secondary"
              onClick={handleDecline}
              className="min-w-[100px]"
            >
              Rechazar
            </Button>
            <Button
              variant="primary"
              onClick={handleAccept}
              className="min-w-[100px]"
            >
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
