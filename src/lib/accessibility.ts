/**
 * Accessibility Utilities
 * Validates: Requirements 10 (Accesibilidad)
 */

// Check color contrast ratio
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    // Calculate relative luminance
    const [rs, gs, bs] = [r, g, b].map((c) => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
};

// Check if contrast meets WCAG AA standards
export const meetsWCAGAA = (color1: string, color2: string, isLargeText = false): boolean => {
  const ratio = getContrastRatio(color1, color2);
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
};

// Check if contrast meets WCAG AAA standards
export const meetsWCAGAAA = (color1: string, color2: string, isLargeText = false): boolean => {
  const ratio = getContrastRatio(color1, color2);
  return isLargeText ? ratio >= 4.5 : ratio >= 7;
};

// Trap focus within a modal or dialog
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Announce to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  if (typeof window === 'undefined') return;

  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Check if element is keyboard accessible
export const isKeyboardAccessible = (element: HTMLElement): boolean => {
  const tabIndex = element.getAttribute('tabindex');
  const isInteractive = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName);
  
  return isInteractive || (tabIndex !== null && parseInt(tabIndex) >= 0);
};

// Ensure minimum touch target size (44x44px for WCAG)
export const hasMinimumTouchTarget = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return rect.width >= 44 && rect.height >= 44;
};

// Check heading hierarchy
export const checkHeadingHierarchy = (): { valid: boolean; errors: string[] } => {
  if (typeof window === 'undefined') return { valid: true, errors: [] };

  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const errors: string[] = [];
  let previousLevel = 0;

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));

    if (index === 0 && level !== 1) {
      errors.push('First heading should be h1');
    }

    if (level - previousLevel > 1) {
      errors.push(`Heading level skipped from h${previousLevel} to h${level}`);
    }

    previousLevel = level;
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Check for alt text on images
export const checkImageAltText = (): { valid: boolean; errors: string[] } => {
  if (typeof window === 'undefined') return { valid: true, errors: [] };

  const images = Array.from(document.querySelectorAll('img'));
  const errors: string[] = [];

  images.forEach((img, index) => {
    const alt = img.getAttribute('alt');
    if (alt === null || alt.trim() === '') {
      errors.push(`Image ${index + 1} missing alt text: ${img.src}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Check for ARIA labels on form inputs
export const checkFormLabels = (): { valid: boolean; errors: string[] } => {
  if (typeof window === 'undefined') return { valid: true, errors: [] };

  const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
  const errors: string[] = [];

  inputs.forEach((input, index) => {
    const id = input.getAttribute('id');
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    const hasLabel = id && document.querySelector(`label[for="${id}"]`);

    if (!hasLabel && !ariaLabel && !ariaLabelledBy) {
      errors.push(`Form input ${index + 1} missing label or ARIA label`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Run all accessibility checks
export const runAccessibilityAudit = () => {
  const headingCheck = checkHeadingHierarchy();
  const imageCheck = checkImageAltText();
  const formCheck = checkFormLabels();

  const allErrors = [
    ...headingCheck.errors,
    ...imageCheck.errors,
    ...formCheck.errors,
  ];

  return {
    valid: allErrors.length === 0,
    errors: allErrors,
    details: {
      headings: headingCheck,
      images: imageCheck,
      forms: formCheck,
    },
  };
};

// Screen reader only class (add to globals.css)
export const srOnlyStyles = `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
