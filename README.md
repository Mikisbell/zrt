# Landing Page ONG ZRT

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com)
[![Tests](https://img.shields.io/badge/tests-200%20passing-brightgreen)](https://github.com)
[![Deployment](https://img.shields.io/badge/deployment-ready-blue)](https://vercel.com)

Landing page para la Organización No Gubernamental ZRT, dedicada a la reforestación, conservación ambiental y sensibilización pública en Perú.

## 🚀 Estado del Proyecto

**✅ LISTO PARA DESPLIEGUE**

- ✅ 200 tests unitarios pasando
- ✅ Build de producción exitoso
- ✅ CI/CD configurado
- ✅ Documentación completa
- ✅ Optimizado para rendimiento y accesibilidad

## 📚 Documentación

- **[QUICK_START.md](QUICK_START.md)** - Guía rápida de despliegue (5 minutos)
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Guía completa de despliegue y configuración
- **[TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)** - Checklist de testing manual y automatizado
- **[PROJECT_STATUS.md](PROJECT_STATUS.md)** - Estado completo del proyecto

## Stack Tecnológico

- **Framework**: Next.js 14+ (App Router) con Static Export
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Testing**: Vitest + React Testing Library (200 tests)
- **CI/CD**: GitHub Actions + Vercel
- **Linting**: ESLint + Prettier

## ✨ Características

### Diseño y UX
- 📱 Diseño responsivo (móvil, tablet, desktop)
- 🎨 Sistema de diseño Atomic Design
- ✨ Animaciones suaves con Framer Motion
- 🎭 Tema personalizado con colores de la organización

### Funcionalidad
- 📝 Formulario de contacto con validación en tiempo real
- 💰 Sección de donaciones con montos sugeridos
- 🌳 Información detallada sobre servicios de reforestación
- 📊 Estadísticas de impacto ambiental
- 🌐 Soporte multilingüe (español/inglés)
- 🔗 Integración con redes sociales

### Rendimiento
- ⚡ First Load JS: 109 KB (optimizado)
- 🖼️ Imágenes optimizadas (WebP/AVIF)
- 🚀 Static export para carga ultra-rápida
- 📦 Code splitting automático

### Accesibilidad
- ♿ WCAG 2.1 AA compliant
- ⌨️ Navegación completa por teclado
- 🔊 Compatible con screen readers
- 🎯 Touch targets apropiados (≥44x44px)

### SEO y Analytics
- 🔍 Meta tags optimizados
- 📈 Google Analytics 4 integrado
- 🔗 Open Graph para redes sociales
- 🗺️ Sitemap automático

## 📁 Estructura del Proyecto

```
landing-page-ong-zrt/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globales
│   ├── components/             # Componentes React (Atomic Design)
│   │   ├── atoms/              # Componentes básicos
│   │   ├── molecules/          # Combinaciones de átomos
│   │   └── organisms/          # Secciones complejas
│   └── lib/                    # Utilidades y helpers
├── public/                     # Assets estáticos
├── out/                        # Build de producción
├── .env.example                # Template de variables de entorno
├── vercel.json                 # Configuración de Vercel
├── lighthouserc.json           # Configuración de Lighthouse CI
├── DEPLOYMENT.md               # Guía de despliegue
├── TESTING_CHECKLIST.md        # Checklist de testing
└── PROJECT_STATUS.md           # Estado del proyecto
```

## 🚀 Inicio Rápido

### Desarrollo Local
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

### Despliegue en Vercel
```bash
# Opción 1: Desde GitHub (Recomendado)
# 1. Push a GitHub
# 2. Conectar repositorio en vercel.com
# 3. Deploy automático

# Opción 2: Vercel CLI
npm install -g vercel
vercel --prod
```

Ver **[QUICK_START.md](QUICK_START.md)** para guía detallada.

## 📋 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build            # Build de producción
npm run start            # Servidor de producción

# Testing
npm run test             # Ejecutar tests (200 tests)
npm run test:watch       # Tests en modo watch

# Calidad de Código
npm run lint             # Ejecutar ESLint
npm run format           # Formatear con Prettier
```

## ⚙️ Configuración

### Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Formspree (Formulario de contacto)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx

# Configuración del sitio
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_DONATION_URL=https://tu-sistema-de-pagos.com
```

### Servicios Externos Requeridos

1. **Google Analytics 4**: Para tracking de visitantes
   - Crear cuenta en [analytics.google.com](https://analytics.google.com)
   - Obtener Measurement ID

2. **Formspree**: Para formulario de contacto
   - Crear cuenta en [formspree.io](https://formspree.io)
   - Crear nuevo form y obtener endpoint

3. **Sistema de Donaciones**: Gateway de pagos (opcional)
   - Configurar Stripe, PayPal u otro sistema
   - Obtener URL de donación

## 🧪 Testing

El proyecto incluye 200 tests unitarios que cubren todos los componentes críticos:

```bash
# Ejecutar todos los tests
npm run test

# Tests en modo watch
npm run test:watch
```

### Cobertura de Tests
- ✅ Componentes atómicos (Button, Input, Text, Icon, Image)
- ✅ Componentes moleculares (NavigationLink, FormField, ServiceCard, etc.)
- ✅ Componentes organism (Header, Hero, Services, Contact, Footer, etc.)
- ✅ Validación de formularios
- ✅ Accesibilidad (ARIA, keyboard navigation)

Ver **[TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)** para testing manual.

## 🚢 Despliegue

### Vercel (Recomendado)

1. **Desde GitHub**:
   - Push tu código a GitHub
   - Conecta el repositorio en [vercel.com](https://vercel.com)
   - Configura variables de entorno
   - Deploy automático

2. **Con Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Otros Hostings

El proyecto genera un build estático en `/out` que puede ser desplegado en:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Cualquier hosting de archivos estáticos

Ver **[DEPLOYMENT.md](DEPLOYMENT.md)** para guía completa.

## 📊 Métricas de Rendimiento

- **First Load JS**: 109 KB
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: > 90 en todas las categorías

## 🤝 Contribución

Este proyecto sigue el patrón Atomic Design y las mejores prácticas de Next.js:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de la Organización No Gubernamental ZRT.

## Información de la Organización

- **Nombre**: Organización No Gubernamental ZRT (ONG ZRT)
- **RUC**: 20610820256
- **Ubicación**: El Tambo, Huancayo, Junín, Perú
- **Registro**: Vigente hasta 12 de Noviembre del 2034
