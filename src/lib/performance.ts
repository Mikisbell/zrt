/**
 * Performance Optimization Utilities
 * Validates: Requirements 9 (Rendimiento y Carga)
 */

// Performance budgets (in milliseconds)
export const performanceBudgets = {
  firstContentfulPaint: 1500,
  largestContentfulPaint: 2500,
  timeToInteractive: 3500,
  totalBlockingTime: 300,
  cumulativeLayoutShift: 0.1,
  totalBundleSize: 200 * 1024, // 200 KB
  imageSize: 500 * 1024, // 500 KB
};

// Image optimization configuration
export const imageOptimization = {
  formats: ['webp', 'avif', 'jpeg'] as const,
  sizes: {
    mobile: 640,
    tablet: 1024,
    desktop: 1920,
  },
  quality: 80,
  loading: 'lazy' as const,
};

// Lazy load images below the fold
export const lazyLoadImage = (imageElement: HTMLImageElement) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    });

    imageObserver.observe(imageElement);
  } else {
    // Fallback for browsers without IntersectionObserver
    const src = imageElement.dataset.src;
    if (src) {
      imageElement.src = src;
    }
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload hero background image
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = '/images/hero-bg.jpg';
  document.head.appendChild(link);
};

// Monitor Web Vitals
export const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    const { name, value, id } = metric;
    
    // Send to Google Analytics
    if (typeof window !== 'undefined') {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) {
        gtag('event', name, {
          event_category: 'Web Vitals',
          value: Math.round(name === 'CLS' ? value * 1000 : value),
          event_label: id,
          non_interaction: true,
        });
      }
    }
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Check if device is mobile
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Check if device is tablet
export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

// Check if device is desktop
export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 1024;
};

// Get device type
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

// Prefetch link on hover (for better perceived performance)
export const prefetchOnHover = (url: string) => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
};

// Loading indicator utilities
export const showLoadingIndicator = () => {
  if (typeof window === 'undefined') return;

  const indicator = document.createElement('div');
  indicator.id = 'loading-indicator';
  indicator.className = 'fixed top-0 left-0 right-0 h-1 bg-green-500 z-50 animate-pulse';
  document.body.appendChild(indicator);
};

export const hideLoadingIndicator = () => {
  if (typeof window === 'undefined') return;

  const indicator = document.getElementById('loading-indicator');
  if (indicator) {
    indicator.remove();
  }
};
