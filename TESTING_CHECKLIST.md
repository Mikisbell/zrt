# Testing Checklist - Landing Page ONG ZRT

## ✅ Automated Tests Status

### Unit Tests
- ✅ **200 tests passing** (Vitest + React Testing Library)
- ✅ Atomic components (Button, Input, Text, Icon, Image)
- ✅ Molecular components (NavigationLink, FormField, ServiceCard, StatCard, SocialShareButton)
- ✅ Organism components (Header, Hero, Services, Impact, Donation, Contact, Footer)
- ✅ Form validation and error handling
- ✅ Accessibility attributes (ARIA labels, keyboard navigation)

### Build Verification
- ✅ Production build successful
- ✅ Static export generated (109 KB First Load JS)
- ✅ No TypeScript errors
- ✅ No ESLint errors

## 📋 Manual Testing Checklist

### Task 22.1: Testing en Diferentes Dispositivos

#### Mobile (< 768px)
- [ ] Hero section se muestra correctamente
- [ ] Menú hamburguesa funciona
- [ ] Todas las secciones son legibles sin zoom
- [ ] No hay scroll horizontal
- [ ] Botones tienen tamaño táctil mínimo (44x44px)
- [ ] Imágenes cargan y escalan correctamente
- [ ] Formulario de contacto es usable
- [ ] CTAs de donación son visibles y accesibles

#### Tablet (768px - 1024px)
- [ ] Layout se adapta correctamente
- [ ] Navegación es accesible
- [ ] Grid de servicios se muestra apropiadamente
- [ ] Estadísticas de impacto son legibles
- [ ] Footer se organiza correctamente

#### Desktop (> 1024px)
- [ ] Hero section ocupa viewport completo
- [ ] Navegación sticky funciona
- [ ] Todas las secciones tienen espaciado apropiado
- [ ] Grid de servicios muestra múltiples columnas
- [ ] Footer muestra toda la información organizada

### Task 22.2: Testing en Diferentes Navegadores

#### Chrome/Edge (Chromium)
- [ ] Página carga correctamente
- [ ] Animaciones funcionan suavemente
- [ ] Formulario envía datos
- [ ] Smooth scroll funciona
- [ ] Imágenes optimizadas cargan

#### Firefox
- [ ] Página carga correctamente
- [ ] Estilos se renderizan correctamente
- [ ] Formulario funciona
- [ ] Navegación funciona

#### Safari (macOS/iOS)
- [ ] Página carga correctamente
- [ ] Imágenes WebP/AVIF tienen fallback
- [ ] Touch gestures funcionan en iOS
- [ ] Formulario funciona en iOS

### Task 22.3: Auditoría de Lighthouse

Ejecutar: `npx lighthouse https://tu-dominio.com --view`

#### Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Total Blocking Time < 300ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Speed Index < 3.0s
- [ ] Score: > 90

#### Accessibility
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] ARIA attributes presentes
- [ ] Alt text en todas las imágenes
- [ ] Heading hierarchy correcta
- [ ] Form labels asociados
- [ ] Keyboard navigation funcional
- [ ] Score: > 90

#### Best Practices
- [ ] HTTPS habilitado
- [ ] No errores en consola
- [ ] Imágenes con aspect ratio correcto
- [ ] No librerías vulnerables
- [ ] Score: > 90

#### SEO
- [ ] Meta description presente
- [ ] Title tag optimizado
- [ ] Viewport meta tag presente
- [ ] Links tienen texto descriptivo
- [ ] Imágenes tienen alt text
- [ ] Score: > 90

### Task 22.4: Verificar Presupuestos de Rendimiento

#### Bundle Size
- [ ] Total bundle size < 200 KB
- [ ] First Load JS: 109 KB ✅ (actual)
- [ ] Images optimized (WebP/AVIF)

#### Loading Times (3G Connection)
- [ ] FCP < 1.5s
- [ ] LCP < 2.5s
- [ ] TTI < 3.5s

### Task 22.5: Testing de Accesibilidad Completo

#### Keyboard Navigation
- [ ] Tab navega por todos los elementos interactivos
- [ ] Enter activa botones y links
- [ ] Escape cierra menú móvil
- [ ] Focus visible en todos los elementos
- [ ] Skip to content link funciona

#### Screen Reader Testing (NVDA/JAWS/VoiceOver)
- [ ] Heading hierarchy es lógica
- [ ] Form labels son leídos correctamente
- [ ] Botones tienen labels descriptivos
- [ ] Imágenes tienen alt text significativo
- [ ] Landmarks (nav, main, footer) identificados
- [ ] Estado de elementos interactivos anunciado

#### Color Contrast
- [ ] Texto normal: ≥ 4.5:1
- [ ] Texto grande: ≥ 3:1
- [ ] Elementos interactivos: ≥ 3:1
- [ ] Verificado con herramienta de contraste

### Task 22.6: Verificar Formulario de Contacto

#### Validación
- [ ] Campos requeridos muestran error si vacíos
- [ ] Email inválido muestra error específico
- [ ] Mensaje muy corto muestra error
- [ ] Errores se muestran en tiempo real

#### Envío
- [ ] Formulario envía con datos válidos
- [ ] Mensaje de confirmación se muestra
- [ ] Datos se reciben en backend (Formspree)
- [ ] Formulario se resetea después de envío exitoso
- [ ] Errores de red se manejan apropiadamente

#### Accesibilidad
- [ ] Labels asociados a inputs
- [ ] Errores anunciados a screen readers
- [ ] Focus management correcto
- [ ] Honeypot field oculto

### Task 22.7: Verificar Tracking de Analytics

#### Google Analytics 4
- [ ] GA4 está instalado correctamente
- [ ] Page views se registran
- [ ] Eventos de CTA se rastrean
- [ ] Clicks en donación se rastrean
- [ ] Envíos de formulario se rastrean
- [ ] Respeta preferencias de privacidad

#### Verificación
```javascript
// En consola del navegador:
window.dataLayer // Debe existir
gtag // Debe ser una función
```

### Task 22.8: Optimizaciones Finales

#### Imágenes
- [ ] Todas las imágenes optimizadas
- [ ] Formatos modernos (WebP/AVIF) con fallback
- [ ] Lazy loading para imágenes below-the-fold
- [ ] Placeholder blur para mejor UX
- [ ] Dimensiones apropiadas para cada breakpoint

#### CSS
- [ ] CSS crítico inline
- [ ] CSS no crítico diferido
- [ ] Tailwind CSS purgado (solo clases usadas)
- [ ] No CSS no utilizado

#### JavaScript
- [ ] JavaScript no crítico diferido
- [ ] Code splitting implementado
- [ ] No JavaScript no utilizado
- [ ] Framer Motion optimizado

#### Caching
- [ ] Headers de cache configurados
- [ ] Assets estáticos cacheados (1 año)
- [ ] HTML con cache apropiado

## 🔍 Verificaciones Específicas por Requirement

### Requirement 1: Presentación de la Organización
- [ ] Nombre completo visible: "Organización No Gubernamental ZRT (ONG ZRT)"
- [ ] ID visible: "20610820256"
- [ ] Ubicación visible: "El Tambo, Huancayo, Junín, Perú"
- [ ] Registro vigente visible: "12 de Noviembre del 2034"
- [ ] Misión visible en Hero Section
- [ ] Tres actividades principales visibles

### Requirement 2: Sección Hero Principal
- [ ] Hero visible sin scroll
- [ ] Headline compelling sobre conservación
- [ ] Imagen de fondo relacionada a reforestación
- [ ] CTA de donación presente
- [ ] CTA de servicios presente

### Requirement 3: Servicios de Reforestación
- [ ] Sección dedicada a servicios
- [ ] Información sobre plantación de árboles
- [ ] Información sobre conservación ambiental
- [ ] Iconos/imágenes representativos
- [ ] Detalles expandibles al hacer clic

### Requirement 4: Sistema de Donaciones
- [ ] Sección de donaciones prominente
- [ ] Múltiples CTAs de donación
- [ ] Información sobre uso de donaciones
- [ ] Montos sugeridos visibles
- [ ] Navegación a sistema de pago funciona
- [ ] Indicadores de confianza presentes

### Requirement 5: Contenido de Sensibilización Ambiental
- [ ] Sección con contenido ambiental
- [ ] Estadísticas sobre deforestación/impacto
- [ ] Información sobre conservación de árboles
- [ ] Contenido visual (imágenes/infografías)
- [ ] CTAs para conciencia ambiental

### Requirement 6: Formulario de Contacto
- [ ] Formulario visible
- [ ] Campo de nombre
- [ ] Campo de email
- [ ] Campo de mensaje
- [ ] Campo de asunto
- [ ] Confirmación en envío exitoso
- [ ] Errores específicos por campo
- [ ] Métodos de contacto alternativos

### Requirement 7: Diseño Responsivo
- [ ] Layout móvil (< 768px)
- [ ] Layout tablet (768-1024px)
- [ ] Layout desktop (> 1024px)
- [ ] Sin scroll horizontal
- [ ] Touch targets ≥ 44x44px
- [ ] Imágenes sin distorsión

### Requirement 8: Navegación y Estructura
- [ ] Menú de navegación con links
- [ ] Smooth scroll a secciones
- [ ] Header sticky
- [ ] Orden lógico de secciones
- [ ] Footer con info organizacional
- [ ] Menú hamburguesa en móvil

### Requirement 9: Rendimiento y Carga
- [ ] Contenido inicial < 3s
- [ ] Imágenes optimizadas
- [ ] CSS crítico inline
- [ ] JavaScript diferido
- [ ] Loading indicator presente

### Requirement 10: Accesibilidad
- [ ] Alt text en imágenes
- [ ] Keyboard accessibility
- [ ] Contraste ≥ 4.5:1
- [ ] ARIA labels en inputs
- [ ] Labels descriptivos en CTAs
- [ ] Jerarquía de headings correcta

### Requirement 12: Integración con Redes Sociales
- [ ] Botones de compartir
- [ ] Soporte Facebook, Twitter, WhatsApp
- [ ] Contenido pre-poblado al compartir
- [ ] Links a perfiles sociales
- [ ] Open Graph meta tags

### Requirement 13: Analítica y Seguimiento
- [ ] Integración con analytics
- [ ] Tracking de page views
- [ ] Tracking de clicks en CTAs
- [ ] Tracking de envíos de formulario
- [ ] Tracking de clicks en donación
- [ ] Respeto a preferencias de privacidad

## 📊 Resultados de Testing

### Test Summary
- **Unit Tests**: 200/200 passing ✅
- **Build**: Successful ✅
- **Bundle Size**: 109 KB (< 200 KB target) ✅

### Pending Manual Verification
- [ ] Manual testing en dispositivos reales
- [ ] Testing en navegadores múltiples
- [ ] Lighthouse audit en producción
- [ ] Verificación de formulario en producción
- [ ] Verificación de analytics en producción

## 🚀 Pre-Deployment Checklist

- [ ] Todos los tests automatizados pasan
- [ ] Build de producción exitoso
- [ ] Variables de entorno configuradas
- [ ] Dominio configurado (si aplica)
- [ ] Analytics configurado
- [ ] Formspree configurado
- [ ] README actualizado
- [ ] DEPLOYMENT.md revisado

## 📝 Notas

- Los warnings de "Icon mapPin not found" en tests son esperados y no afectan funcionalidad
- El proyecto usa static export para máximo rendimiento
- Lighthouse CI está configurado para auditorías automáticas en CI/CD
- Todos los presupuestos de rendimiento están configurados en `lighthouserc.json`
