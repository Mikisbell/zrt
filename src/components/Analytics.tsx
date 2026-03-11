'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, trackPageView, hasTrackingConsent } from '@/lib/analytics';

/**
 * Analytics Component Inner
 * Integra Google Analytics 4 y trackea page views automáticamente
 */
function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Inicializar Google Analytics si hay consentimiento
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (measurementId && hasTrackingConsent()) {
      initGA(measurementId);
    }
  }, []);

  useEffect(() => {
    // Trackear page view cuando cambia la ruta
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * Analytics Component
 * Validates: Requirements 13 (Analítica y Seguimiento)
 */
export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
