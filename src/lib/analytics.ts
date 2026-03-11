/**
 * Google Analytics 4 Integration
 * Validates: Requirements 13 (Analítica y Seguimiento)
 */

export interface AnalyticsEvent {
  category: 'CTA' | 'Form' | 'Navigation' | 'Social';
  action: string;
  label?: string;
  value?: number;
}

// Verificar si el usuario ha dado consentimiento para tracking
export const hasTrackingConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Verificar localStorage para preferencias de privacidad
  const consent = localStorage.getItem('analytics_consent');
  return consent === 'true';
};

// Inicializar Google Analytics
export const initGA = (measurementId: string) => {
  if (typeof window === 'undefined') return;
  
  // Solo inicializar si hay consentimiento
  if (!hasTrackingConsent()) {
    console.log('Analytics: User has not consented to tracking');
    return;
  }

  // Cargar script de Google Analytics
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Inicializar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true, // Anonimizar IPs para privacidad
  });

  // Hacer gtag disponible globalmente
  (window as Window & { gtag?: typeof gtag }).gtag = gtag;
};

// Trackear page view
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !hasTrackingConsent()) return;
  
  try {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag('event', 'page_view', {
        page_path: url,
      });
    }
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

// Trackear evento personalizado
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window === 'undefined' || !hasTrackingConsent()) return;
  
  try {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

// Trackear click en CTA
export const trackCTAClick = (label: string) => {
  trackEvent({
    category: 'CTA',
    action: 'click',
    label,
  });
};

// Trackear envío de formulario
export const trackFormSubmission = (formName: string) => {
  trackEvent({
    category: 'Form',
    action: 'submit',
    label: formName,
  });
};

// Trackear click en navegación
export const trackNavigationClick = (label: string) => {
  trackEvent({
    category: 'Navigation',
    action: 'click',
    label,
  });
};

// Trackear compartir en redes sociales
export const trackSocialShare = (platform: string) => {
  trackEvent({
    category: 'Social',
    action: 'share',
    label: platform,
  });
};

// Establecer consentimiento de tracking
export const setTrackingConsent = (consent: boolean) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('analytics_consent', consent.toString());
  
  if (consent) {
    // Si el usuario da consentimiento, inicializar analytics
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (measurementId) {
      initGA(measurementId);
    }
  }
};

// Declaración de tipos para window.dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
