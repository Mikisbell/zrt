# Design Document: Landing Page ONG ZRT

## Overview

La landing page de la ONG ZRT es una aplicación web estática de una sola página (SPA) diseñada para comunicar la misión de reforestación y conservación ambiental de la organización, facilitar donaciones y aumentar la conciencia pública sobre temas ambientales en Perú.

### Objetivos del Diseño

- Proporcionar una experiencia de usuario fluida y accesible en todos los dispositivos
- Maximizar las conversiones de donaciones mediante CTAs estratégicos
- Comunicar credibilidad y transparencia organizacional
- Optimizar el rendimiento para conexiones de banda ancha limitada
- Facilitar el descubrimiento y compartición en redes sociales

### Principios de Diseño

1. **Mobile-First**: Diseño prioritario para dispositivos móviles, escalando hacia desktop
2. **Performance-Oriented**: Carga rápida mediante optimización de assets y lazy loading
3. **Accessibility-First**: WCAG 2.1 AA compliance como estándar mínimo
4. **Content-Driven**: Jerarquía visual clara que prioriza el mensaje ambiental
5. **Conversion-Focused**: Múltiples puntos de conversión estratégicamente ubicados

## Architecture

### Arquitectura General

La aplicación seguirá una arquitectura de aplicación web estática con las siguientes características:

```
┌─────────────────────────────────────────────────────────────┐
│                        CDN / Hosting                         │
│                    (Vercel / Netlify)                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Static Site (HTML/CSS/JS)                │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────────┐ │
│  │  Hero Section  │  │   Services     │  │   Donations   │ │
│  └────────────────┘  └────────────────┘  └───────────────┘ │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────────┐ │
│  │    Contact     │  │   Navigation   │  │    Footer     │ │
│  └────────────────┘  └────────────────┘  └───────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
         ┌──────────┐  ┌──────────┐  ┌──────────┐
         │ Analytics│  │  Form    │  │ Payment  │
         │ Service  │  │ Backend  │  │ Gateway  │
         │ (GA4)    │  │(Formspree│  │(External)│
         └──────────┘  └──────────┘  └──────────┘
```

### Stack Tecnológico Recomendado

**Frontend Framework:**
- **Next.js 14+** (App Router) - Framework React con SSG/SSR, optimización automática de imágenes, y excelente rendimiento
- Alternativa: **Astro** - Para sitios ultra-rápidos con mínimo JavaScript

**Styling:**
- **Tailwind CSS** - Utility-first CSS framework para desarrollo rápido y diseño responsivo
- **CSS Modules** - Para componentes con estilos encapsulados cuando sea necesario

**Animaciones:**
- **Framer Motion** - Animaciones declarativas y transiciones suaves
- **Intersection Observer API** - Para animaciones on-scroll

**Formularios:**
- **React Hook Form** - Manejo eficiente de formularios con validación
- **Zod** - Validación de esquemas TypeScript-first

**Servicios Externos:**
- **Formspree / Netlify Forms** - Backend para formulario de contacto
- **Google Analytics 4** - Analítica web
- **Stripe / PayPal** - Procesamiento de pagos (integración futura)

**Hosting:**
- **Vercel** (recomendado) - Despliegue automático, CDN global, optimización de imágenes
- Alternativa: **Netlify** - Similar a Vercel con excelente soporte para formularios

**Optimización:**
- **next/image** - Optimización automática de imágenes
- **Sharp** - Procesamiento de imágenes en build time
- **Lighthouse CI** - Monitoreo continuo de rendimiento

### Patrones Arquitectónicos

1. **Component-Based Architecture**: Componentes React reutilizables y composables
2. **Static Site Generation (SSG)**: Pre-renderizado en build time para máximo rendimiento
3. **Progressive Enhancement**: Funcionalidad básica sin JavaScript, mejoras con JS habilitado
4. **Atomic Design**: Organización de componentes en átomos, moléculas, organismos, templates y páginas

## Components and Interfaces

### Estructura de Componentes

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Text.tsx
│   │   ├── Icon.tsx
│   │   └── Image.tsx
│   ├── molecules/
│   │   ├── NavigationLink.tsx
│   │   ├── SocialShareButton.tsx
│   │   ├── FormField.tsx
│   │   ├── StatCard.tsx
│   │   └── ServiceCard.tsx
│   ├── organisms/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── DonationSection.tsx
│   │   ├── EnvironmentalContent.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── templates/
│       └── LandingPageLayout.tsx
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   ├── analytics.ts
│   ├── validation.ts
│   └── utils.ts
└── types/
    └── index.ts
```

### Componentes Principales

#### 1. Header Component

```typescript
interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}

// Funcionalidad:
// - Navegación principal con links a secciones
// - Logo de la organización
// - Menú hamburguesa en móvil
// - Scroll suave a secciones
// - Sticky header con cambio de estilo al hacer scroll
```

#### 2. HeroSection Component

```typescript
interface HeroSectionProps {
  headline: string;
  subheadline: string;
  backgroundImage: string;
  ctaButtons: CTAButton[];
}

interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

// Funcionalidad:
// - Imagen de fondo optimizada con next/image
// - Overlay para legibilidad de texto
// - Múltiples CTAs (donación, más información)
// - Animación de entrada
// - Altura completa de viewport
```

#### 3. ServicesSection Component

```typescript
interface ServicesSectionProps {
  services: Service[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

// Funcionalidad:
// - Grid responsivo de tarjetas de servicio
// - Expansión de detalles al hacer clic
// - Iconos representativos
// - Animaciones on-scroll
```

#### 4. DonationSection Component

```typescript
interface DonationSectionProps {
  suggestedAmounts: number[];
  impactDescription: string;
  trustIndicators: TrustIndicator[];
}

interface TrustIndicator {
  icon: string;
  text: string;
}

// Funcionalidad:
// - Montos sugeridos de donación
// - Descripción del impacto de las donaciones
// - Indicadores de confianza (seguridad, transparencia)
// - CTAs prominentes
// - Redirección a sistema de pago externo
```

#### 5. EnvironmentalContent Component

```typescript
interface EnvironmentalContentProps {
  statistics: Statistic[];
  facts: Fact[];
  visualContent: VisualContent[];
}

interface Statistic {
  value: string;
  label: string;
  icon?: string;
}

interface Fact {
  title: string;
  description: string;
}

interface VisualContent {
  type: 'image' | 'infographic';
  src: string;
  alt: string;
}

// Funcionalidad:
// - Estadísticas impactantes sobre deforestación
// - Datos sobre conservación de árboles
// - Infografías educativas
// - Contenido visual optimizado
```

#### 6. ContactForm Component

```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  alternativeContacts: AlternativeContact[];
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface AlternativeContact {
  type: 'phone' | 'email' | 'address';
  value: string;
  icon: string;
}

// Funcionalidad:
// - Validación en tiempo real
// - Mensajes de error específicos por campo
// - Confirmación de envío exitoso
// - Información de contacto alternativa
// - Protección anti-spam (honeypot)
```

#### 7. Footer Component

```typescript
interface FooterProps {
  organizationInfo: OrganizationInfo;
  socialLinks: SocialLink[];
  navigationLinks: NavigationLink[];
}

interface OrganizationInfo {
  name: string;
  id: string;
  location: string;
  registrationValidity: string;
}

interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'whatsapp';
  url: string;
}

// Funcionalidad:
// - Información legal de la organización
// - Links a redes sociales
// - Navegación secundaria
// - Copyright y políticas
```

### Interfaces de Datos

#### Navigation

```typescript
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  order: number;
}

const navigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Inicio', href: '#hero', order: 1 },
  { id: 'about', label: 'Nosotros', href: '#about', order: 2 },
  { id: 'services', label: 'Servicios', href: '#services', order: 3 },
  { id: 'impact', label: 'Impacto', href: '#impact', order: 4 },
  { id: 'donate', label: 'Donar', href: '#donate', order: 5 },
  { id: 'contact', label: 'Contacto', href: '#contact', order: 6 },
];
```

#### Analytics Events

```typescript
interface AnalyticsEvent {
  category: 'CTA' | 'Form' | 'Navigation' | 'Social';
  action: string;
  label?: string;
  value?: number;
}

// Ejemplos de eventos:
// - { category: 'CTA', action: 'click', label: 'donate_hero' }
// - { category: 'Form', action: 'submit', label: 'contact_form' }
// - { category: 'Navigation', action: 'click', label: 'services_link' }
```

## Data Models

### Organization Data

```typescript
interface Organization {
  name: string;
  legalName: string;
  id: string; // RUC
  location: {
    district: string;
    city: string;
    region: string;
    country: string;
  };
  registration: {
    status: 'active' | 'inactive';
    validUntil: Date;
  };
  mission: string;
  activities: Activity[];
  contact: ContactInfo;
}

interface Activity {
  id: string;
  name: string;
  description: string;
  category: 'reforestation' | 'fundraising' | 'awareness';
}

interface ContactInfo {
  email: string;
  phone?: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    whatsapp?: string;
  };
}
```

### Content Data

```typescript
interface PageContent {
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  impact: ImpactContent;
  donations: DonationsContent;
  contact: ContactContent;
}

interface HeroContent {
  headline: string;
  subheadline: string;
  backgroundImage: ImageAsset;
  ctaButtons: CTAButton[];
}

interface AboutContent {
  title: string;
  description: string;
  organizationInfo: Organization;
}

interface ServicesContent {
  title: string;
  description: string;
  services: Service[];
}

interface ImpactContent {
  title: string;
  statistics: Statistic[];
  environmentalFacts: Fact[];
  visualAssets: ImageAsset[];
}

interface DonationsContent {
  title: string;
  description: string;
  impactMessage: string;
  suggestedAmounts: number[];
  trustIndicators: TrustIndicator[];
  paymentUrl: string;
}

interface ContactContent {
  title: string;
  description: string;
  formFields: FormField[];
  alternativeContacts: AlternativeContact[];
}
```

### Form Data Models

```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: Date;
  honeypot?: string; // Anti-spam field
}

interface FormValidationRules {
  name: {
    required: true;
    minLength: 2;
    maxLength: 100;
    pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  };
  email: {
    required: true;
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  };
  subject: {
    required: true;
    minLength: 5;
    maxLength: 200;
  };
  message: {
    required: true;
    minLength: 10;
    maxLength: 1000;
  };
}

interface FormSubmissionResponse {
  success: boolean;
  message: string;
  errors?: FieldError[];
}

interface FieldError {
  field: keyof ContactFormData;
  message: string;
}
```

### Asset Management

```typescript
interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string; // Para placeholder blur
  priority?: boolean; // Para imágenes above-the-fold
}

interface OptimizationConfig {
  formats: ['webp', 'avif', 'jpeg'];
  sizes: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  quality: number; // 75-85 recomendado
  loading: 'lazy' | 'eager';
}
```

### Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: {
    min: 0,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
    max: Infinity,
  },
} as const;

type DeviceType = keyof typeof breakpoints;
```

### Language Support (Optional)

```typescript
interface LanguageConfig {
  enabled: boolean;
  defaultLanguage: 'es' | 'en';
  supportedLanguages: ('es' | 'en')[];
  persistPreference: boolean;
}

interface TranslationKey {
  es: string;
  en: string;
}

interface Translations {
  [key: string]: TranslationKey;
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Service Details Expansion

*For any* service card with expandable details, when a visitor clicks on the service description, the additional details should become visible.

**Validates: Requirements 3.5**

### Property 2: Donation CTA Navigation

*For any* donation CTA button on the page, when a visitor clicks it, the page should navigate to or trigger the donation process.

**Validates: Requirements 4.5**

### Property 3: Valid Form Submission Confirmation

*For any* valid contact form data (meeting all validation rules), when submitted, the page should display a success confirmation message.

**Validates: Requirements 6.6**

### Property 4: Invalid Form Field Error Display

*For any* contact form field with invalid data, when the form is submitted, the page should display a specific error message for that field.

**Validates: Requirements 6.7**

### Property 5: Responsive Layout Adaptation

*For any* viewport width, the page layout should adapt to the appropriate breakpoint configuration (mobile < 768px, tablet 768-1024px, desktop > 1024px).

**Validates: Requirements 7.1, 7.2, 7.3**

### Property 6: No Horizontal Scroll

*For any* viewport width, all page content should be visible without requiring horizontal scrolling.

**Validates: Requirements 7.4**

### Property 7: Touch Target Minimum Size

*For all* CTA button elements, the touch target size should be at least 44x44 pixels to ensure tappability on touch devices.

**Validates: Requirements 7.5**

### Property 8: Image Aspect Ratio Preservation

*For all* images on the page, when scaled to different viewport sizes, the aspect ratio should be preserved without distortion.

**Validates: Requirements 7.6**

### Property 9: Navigation Link Smooth Scroll

*For any* navigation link, when clicked, the page should smoothly scroll to the corresponding section.

**Validates: Requirements 8.2**

### Property 10: Sticky Header Visibility

*For any* scroll position on the page, the navigation header should remain visible (sticky behavior).

**Validates: Requirements 8.3**

### Property 11: Image Alt Text Presence

*For all* image elements on the page, an alt attribute with descriptive text should be present.

**Validates: Requirements 10.1**

### Property 12: Interactive Element Keyboard Accessibility

*For all* interactive elements (buttons, links, form inputs), keyboard navigation and activation should be functional.

**Validates: Requirements 10.2**

### Property 13: Text Color Contrast Compliance

*For all* text elements on the page, the color contrast ratio against their background should be at least 4.5:1.

**Validates: Requirements 10.3**

### Property 14: Form Input ARIA Labels

*For all* form input elements, appropriate ARIA labels or label associations should be present.

**Validates: Requirements 10.4**

### Property 15: CTA Button Descriptive Labels

*For all* CTA button elements, a non-empty descriptive label should be present.

**Validates: Requirements 10.5**

### Property 16: Heading Hierarchy Integrity

*For the entire* page document structure, heading levels should follow proper hierarchy (h1 → h2 → h3) without skipping levels.

**Validates: Requirements 10.6**

### Property 17: Language Content Switching

*For any* supported language selection (when multilingual feature is enabled), all page content should display in the selected language.

**Validates: Requirements 11.4**

### Property 18: Language Preference Persistence

*For any* language selection (when multilingual feature is enabled), the preference should persist across page reloads.

**Validates: Requirements 11.5**

### Property 19: Social Share Button Platform Opening

*For any* social media sharing button, when clicked, the corresponding social platform should open with pre-populated content about the page.

**Validates: Requirements 12.3**

### Property 20: Privacy-Respecting Analytics

*For any* visitor with privacy preferences set to decline tracking, analytics events should not be sent to the analytics platform.

**Validates: Requirements 13.6**

## Error Handling

### Form Validation Errors

**Client-Side Validation:**
- Real-time validation as user types (debounced)
- Field-specific error messages displayed below each input
- Visual indicators (red border, error icon) for invalid fields
- Form submission disabled until all fields are valid

**Error Messages:**
```typescript
const errorMessages = {
  name: {
    required: 'El nombre es requerido',
    minLength: 'El nombre debe tener al menos 2 caracteres',
    maxLength: 'El nombre no puede exceder 100 caracteres',
    pattern: 'El nombre solo puede contener letras y espacios',
  },
  email: {
    required: 'El correo electrónico es requerido',
    pattern: 'Por favor ingrese un correo electrónico válido',
  },
  subject: {
    required: 'El asunto es requerido',
    minLength: 'El asunto debe tener al menos 5 caracteres',
    maxLength: 'El asunto no puede exceder 200 caracteres',
  },
  message: {
    required: 'El mensaje es requerido',
    minLength: 'El mensaje debe tener al menos 10 caracteres',
    maxLength: 'El mensaje no puede exceder 1000 caracteres',
  },
};
```

**Server-Side Validation:**
- Backend validation as fallback for client-side validation
- Sanitization of input data to prevent XSS attacks
- Rate limiting to prevent spam submissions
- Honeypot field to catch bots

### Network Errors

**Form Submission Failures:**
```typescript
interface ErrorHandlingStrategy {
  networkError: {
    message: 'Error de conexión. Por favor verifica tu internet e intenta nuevamente.';
    retry: true;
    maxRetries: 3;
  };
  serverError: {
    message: 'Error del servidor. Por favor intenta más tarde.';
    retry: false;
    fallback: 'Puedes contactarnos directamente en: contacto@ongzrt.org';
  };
  timeout: {
    message: 'La solicitud tardó demasiado. Por favor intenta nuevamente.';
    retry: true;
    timeoutDuration: 10000; // 10 seconds
  };
}
```

**Graceful Degradation:**
- Display user-friendly error messages
- Preserve form data on error (don't clear inputs)
- Provide alternative contact methods when form fails
- Log errors for monitoring and debugging

### Image Loading Errors

**Fallback Strategy:**
```typescript
interface ImageErrorHandling {
  onError: () => {
    // Display placeholder image
    // Log error for monitoring
    // Retry loading once after delay
  };
  placeholder: {
    type: 'blur' | 'color';
    blurDataURL: string;
    backgroundColor: '#e5e7eb';
  };
}
```

### Analytics Failures

**Non-Blocking Errors:**
- Analytics failures should not affect page functionality
- Wrap analytics calls in try-catch blocks
- Fail silently with console warnings in development
- Implement analytics queue for offline scenarios

### Accessibility Fallbacks

**Progressive Enhancement:**
- Ensure core functionality works without JavaScript
- Provide text alternatives for all visual content
- Keyboard navigation as primary interaction method
- Screen reader announcements for dynamic content changes

## Testing Strategy

### Dual Testing Approach

This project will implement both unit testing and property-based testing to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Property tests**: Verify universal properties across all inputs

Both approaches are complementary and necessary. Unit tests catch concrete bugs and validate specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Unit Testing

**Framework:** Vitest + React Testing Library

**Focus Areas:**
- Specific component rendering examples
- User interaction flows (click, type, submit)
- Edge cases (empty states, maximum lengths, special characters)
- Error conditions (network failures, validation errors)
- Integration between components

**Example Unit Tests:**
```typescript
describe('ContactForm', () => {
  it('should display all required fields', () => {
    // Test that name, email, subject, message fields are present
  });

  it('should show error when submitting empty form', () => {
    // Test specific error case
  });

  it('should display success message after valid submission', () => {
    // Test specific success case
  });

  it('should preserve form data on network error', () => {
    // Test specific error handling
  });
});

describe('HeroSection', () => {
  it('should display organization name and mission', () => {
    // Test specific content rendering
  });

  it('should render donation and services CTAs', () => {
    // Test specific CTA presence
  });
});
```

### Property-Based Testing

**Framework:** fast-check (JavaScript/TypeScript property-based testing library)

**Configuration:**
- Minimum 100 iterations per property test
- Each test tagged with reference to design document property
- Tag format: `Feature: landing-page-ong-zrt, Property {number}: {property_text}`

**Property Test Examples:**

```typescript
import fc from 'fast-check';

describe('Property Tests', () => {
  it('Property 7: Touch Target Minimum Size - All CTA buttons should have minimum 44x44px touch targets', () => {
    // Feature: landing-page-ong-zrt, Property 7: Touch Target Minimum Size
    
    fc.assert(
      fc.property(
        fc.constantFrom(...getAllCTAButtons()),
        (button) => {
          const rect = button.getBoundingClientRect();
          return rect.width >= 44 && rect.height >= 44;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 11: Image Alt Text Presence - All images should have alt text', () => {
    // Feature: landing-page-ong-zrt, Property 11: Image Alt Text Presence
    
    fc.assert(
      fc.property(
        fc.constantFrom(...getAllImages()),
        (image) => {
          const alt = image.getAttribute('alt');
          return alt !== null && alt.trim().length > 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 5: Responsive Layout Adaptation - Layout should adapt to viewport width', () => {
    // Feature: landing-page-ong-zrt, Property 5: Responsive Layout Adaptation
    
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        (viewportWidth) => {
          setViewportWidth(viewportWidth);
          const layout = getComputedLayout();
          
          if (viewportWidth < 768) {
            return layout === 'mobile';
          } else if (viewportWidth < 1024) {
            return layout === 'tablet';
          } else {
            return layout === 'desktop';
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 4: Invalid Form Field Error Display - Invalid fields should show errors', () => {
    // Feature: landing-page-ong-zrt, Property 4: Invalid Form Field Error Display
    
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string(),
          email: fc.string(),
          subject: fc.string(),
          message: fc.string(),
        }),
        (formData) => {
          const errors = validateForm(formData);
          const invalidFields = Object.keys(errors);
          
          // For each invalid field, error message should be displayed
          return invalidFields.every(field => {
            const errorElement = getErrorElement(field);
            return errorElement && errorElement.textContent.length > 0;
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Visual Regression Testing

**Tool:** Playwright + Percy/Chromatic

**Coverage:**
- Hero section rendering
- Responsive layouts at different breakpoints
- Form states (empty, filled, error, success)
- Navigation menu (desktop and mobile)
- Footer content

### Accessibility Testing

**Tools:**
- axe-core (automated accessibility testing)
- Lighthouse CI (continuous accessibility audits)
- Manual testing with screen readers (NVDA, JAWS, VoiceOver)

**Automated Tests:**
```typescript
import { axe } from 'jest-axe';

describe('Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<LandingPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Performance Testing

**Tools:**
- Lighthouse CI (performance budgets)
- WebPageTest (real-world performance metrics)
- Bundle analyzer (JavaScript bundle size monitoring)

**Performance Budgets:**
```typescript
const performanceBudgets = {
  firstContentfulPaint: 1500, // ms
  largestContentfulPaint: 2500, // ms
  timeToInteractive: 3500, // ms
  totalBlockingTime: 300, // ms
  cumulativeLayoutShift: 0.1,
  totalBundleSize: 200, // KB
  imageSize: 500, // KB
};
```

### End-to-End Testing

**Framework:** Playwright

**Critical User Flows:**
1. Landing on hero → Scrolling through sections → Clicking donation CTA
2. Landing on hero → Navigating via menu → Filling contact form → Submitting
3. Landing on mobile → Opening hamburger menu → Navigating to section
4. Landing on page → Clicking social share button → Verifying share dialog

### Test Coverage Goals

- Unit test coverage: 80% minimum
- Property test coverage: All 20 correctness properties implemented
- Accessibility: Zero critical violations
- Performance: All budgets met on 3G connection
- Visual regression: Zero unintended changes

### Continuous Integration

**CI Pipeline:**
1. Lint and type checking
2. Unit tests + property tests
3. Accessibility tests
4. Visual regression tests
5. Performance audits
6. Build verification

**Quality Gates:**
- All tests must pass
- No accessibility violations
- Performance budgets met
- No visual regressions (or approved)

