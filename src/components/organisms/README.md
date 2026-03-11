# Organisms

Componentes complejos que combinan múltiples moléculas y átomos para formar secciones completas de la interfaz.

## Componentes Disponibles

### Header
Encabezado de navegación con menú sticky y versión móvil.

**Props:**
- `navigationItems`: Array de items de navegación
- `logo`: Elemento React personalizado para el logo
- `transparent`: Si el header debe ser transparente inicialmente
- `className`: Clases CSS adicionales

**Características:**
- Navegación sticky que cambia de estilo al hacer scroll
- Menú hamburguesa para móvil
- Detección de sección activa
- Smooth scroll a secciones
- Navegación por teclado completa
- Touch targets mínimos de 44x44px

### HeroSection
Sección hero principal con imagen de fondo, headline y CTAs.

**Props:**
- `headline`: Título principal
- `subheadline`: Subtítulo
- `backgroundImage`: URL de la imagen de fondo
- `ctaButtons`: Array de botones CTA
- `organizationName`: Nombre de la organización
- `organizationId`: RUC de la organización
- `location`: Ubicación de la organización

**Características:**
- Imagen de fondo con overlay
- Altura completa de viewport
- Múltiples CTAs configurables
- Información organizacional
- Animaciones de entrada

### AboutSection
Sección sobre la organización con misión y actividades.

**Props:**
- `mission`: Declaración de misión
- `activities`: Array de actividades principales
- `registrationValidity`: Texto de validez del registro

**Características:**
- Muestra misión de la organización
- Grid de actividades principales con iconos
- Información legal
- Animaciones on-scroll

### ServicesSection
Sección de servicios con tarjetas expandibles.

**Props:**
- `title`: Título de la sección
- `description`: Descripción de la sección
- `services`: Array de servicios

**Características:**
- Grid responsivo de ServiceCards
- Detalles expandibles por servicio
- Iconos representativos
- Layout adaptable

### ImpactSection
Sección de impacto ambiental con estadísticas y contenido educativo.

**Props:**
- `title`: Título de la sección
- `statistics`: Array de estadísticas
- `environmentalFacts`: Array de datos ambientales
- `ctaLabel`: Texto del botón CTA
- `ctaHref`: URL del botón CTA

**Características:**
- Grid de estadísticas con StatCards
- Contenido educativo sobre medio ambiente
- CTA para acción
- Diseño visual impactante

### DonationSection
Sección de donaciones con montos sugeridos y CTAs.

**Props:**
- `title`: Título de la sección
- `description`: Descripción
- `impactMessage`: Mensaje sobre el impacto de las donaciones
- `suggestedAmounts`: Array de montos sugeridos
- `trustIndicators`: Array de indicadores de confianza
- `donationUrl`: URL del sistema de donación

**Características:**
- Selección de montos predefinidos
- Campo de monto personalizado
- Indicadores de confianza y seguridad
- Navegación a sistema de pago
- Diseño prominente

### ContactSection
Sección de contacto con formulario validado.

**Props:**
- `title`: Título de la sección
- `description`: Descripción
- `alternativeContacts`: Array de métodos de contacto alternativos
- `onSubmit`: Función callback para envío del formulario

**Características:**
- Formulario con validación completa
- Mensajes de error específicos por campo
- Confirmación de envío exitoso
- Honeypot anti-spam
- Métodos de contacto alternativos
- Preservación de datos en caso de error

### Footer
Footer con información organizacional y redes sociales.

**Props:**
- `organizationInfo`: Información de la organización
- `socialLinks`: Array de links a redes sociales
- `navigationLinks`: Array de links de navegación
- `showSocialShare`: Si mostrar botones de compartir

**Características:**
- Información legal completa
- Links a redes sociales
- Navegación secundaria
- Botones de compartir en redes sociales
- Copyright y políticas
- Layout responsivo en grid

## Guías de Uso

### Accesibilidad
- Todos los componentes incluyen ARIA labels apropiados
- Navegación por teclado completa
- Touch targets mínimos de 44x44px
- Contraste de color adecuado
- Mensajes de error accesibles

### Responsividad
- Diseño mobile-first
- Breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Todos los componentes se adaptan automáticamente
- Imágenes optimizadas para diferentes tamaños

### Testing
Cada componente incluye tests unitarios que verifican:
- Renderizado correcto
- Interacciones del usuario
- Accesibilidad
- Estados y variantes
- Validación de formularios
