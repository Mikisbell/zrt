# Guía de Despliegue - Landing Page ONG ZRT

## Requisitos Previos

- Node.js 20.x o superior
- Cuenta de GitHub
- Cuenta de Vercel (gratuita)
- Git instalado localmente

## Configuración Inicial

### 1. Crear Repositorio Git

```bash
# Inicializar repositorio Git (si no existe)
git init

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: Landing Page ONG ZRT"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/landing-page-ong-zrt.git
git branch -M main
git push -u origin main
```

### 2. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env.local` y configura las variables:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores reales:

```env
# Google Analytics (obtener de https://analytics.google.com)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU-ID-AQUI

# Formspree (obtener de https://formspree.io)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/tu-endpoint

# Configuración del sitio
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_SITE_NAME=ONG ZRT

# URL de donaciones (opcional)
NEXT_PUBLIC_DONATION_URL=https://tu-sistema-de-pagos.com
```

## Despliegue en Vercel

### Opción 1: Despliegue Automático desde GitHub

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Configura las variables de entorno en el dashboard de Vercel:
   - Ve a Settings → Environment Variables
   - Agrega cada variable de `.env.example`
6. Haz clic en "Deploy"

### Opción 2: Despliegue Manual con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Desplegar (primera vez)
vercel

# Desplegar a producción
vercel --prod
```

### Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los registros DNS según las instrucciones de Vercel

## Pipeline de CI/CD

El proyecto incluye GitHub Actions que se ejecutan automáticamente:

### Workflow de CI

Se ejecuta en cada push y pull request:

- ✅ Lint del código
- ✅ Ejecución de tests
- ✅ Build del proyecto
- ✅ Auditoría de Lighthouse (solo en PRs)

### Verificar Estado del CI

Puedes ver el estado de los workflows en:
```
https://github.com/tu-usuario/landing-page-ong-zrt/actions
```

## Auditorías de Rendimiento

### Lighthouse CI

El proyecto está configurado con Lighthouse CI para auditorías automáticas:

**Presupuestos de Rendimiento:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1

### Ejecutar Lighthouse Localmente

```bash
# Instalar Lighthouse CI
npm install -g @lhci/cli

# Build del proyecto
npm run build

# Ejecutar auditoría
lhci autorun
```

## Monitoreo Post-Despliegue

### 1. Verificar Funcionalidad

- [ ] La página carga correctamente
- [ ] Todas las secciones son visibles
- [ ] Los CTAs de donación funcionan
- [ ] El formulario de contacto envía mensajes
- [ ] La navegación funciona en móvil y desktop
- [ ] Las imágenes cargan correctamente

### 2. Verificar Analytics

- [ ] Google Analytics está rastreando visitas
- [ ] Los eventos de CTA se registran
- [ ] Los envíos de formulario se rastrean

### 3. Verificar Rendimiento

```bash
# Usar Lighthouse desde Chrome DevTools
# O ejecutar desde línea de comandos:
npx lighthouse https://tu-dominio.com --view
```

### 4. Verificar Accesibilidad

```bash
# Ejecutar auditoría de accesibilidad
npx lighthouse https://tu-dominio.com --only-categories=accessibility --view
```

## Actualizaciones y Mantenimiento

### Desplegar Cambios

```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción de los cambios"
git push origin main

# Vercel desplegará automáticamente
```

### Rollback a Versión Anterior

1. Ve al dashboard de Vercel
2. Selecciona "Deployments"
3. Encuentra el deployment anterior
4. Haz clic en "..." → "Promote to Production"

## Troubleshooting

### Build Falla en Vercel

1. Verifica que todas las dependencias estén en `package.json`
2. Revisa los logs de build en Vercel
3. Asegúrate de que las variables de entorno estén configuradas

### Imágenes No Cargan

1. Verifica que las imágenes estén en la carpeta `public/`
2. Revisa la configuración de `next.config.js`
3. Asegúrate de usar el componente `next/image`

### Formulario No Envía

1. Verifica que `NEXT_PUBLIC_FORMSPREE_ENDPOINT` esté configurado
2. Revisa la consola del navegador para errores
3. Verifica que Formspree esté activo en su dashboard

### Analytics No Funciona

1. Verifica que `NEXT_PUBLIC_GA_MEASUREMENT_ID` esté configurado
2. Usa Google Tag Assistant para verificar la instalación
3. Espera 24-48 horas para que aparezcan datos en GA4

## Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Vercel](https://vercel.com/docs)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Formspree Docs](https://help.formspree.io/)
- [Google Analytics 4](https://support.google.com/analytics)

## Contacto de Soporte

Para problemas técnicos, contacta al equipo de desarrollo o abre un issue en GitHub.
