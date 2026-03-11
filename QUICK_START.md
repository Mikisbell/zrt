# Guía Rápida de Inicio - Landing Page ONG ZRT

## 🚀 Despliegue Rápido en Vercel (5 minutos)

### Paso 1: Preparar el Repositorio
```bash
# Inicializar Git (si no existe)
git init
git add .
git commit -m "Initial commit: Landing Page ONG ZRT"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/TU-USUARIO/landing-page-ong-zrt.git
git branch -M main
git push -u origin main
```

### Paso 2: Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Haz clic en "Add New Project"
3. Selecciona tu repositorio `landing-page-ong-zrt`
4. Vercel detectará Next.js automáticamente
5. Haz clic en "Deploy"

¡Listo! Tu sitio estará en línea en ~2 minutos.

### Paso 3: Configurar Variables de Entorno (Opcional)

En el dashboard de Vercel:
1. Ve a Settings → Environment Variables
2. Agrega estas variables:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
NEXT_PUBLIC_DONATION_URL=https://tu-sistema-de-pagos.com
```

3. Haz clic en "Redeploy" para aplicar los cambios

## 🧪 Verificación Local

### Ejecutar en Desarrollo
```bash
npm install
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)

### Ejecutar Tests
```bash
npm run test
```
Debe mostrar: **200 tests passing** ✅

### Build de Producción
```bash
npm run build
npm run start
```

## 📋 Checklist Post-Despliegue

- [ ] Sitio carga correctamente en móvil y desktop
- [ ] Formulario de contacto envía mensajes
- [ ] CTAs de donación funcionan
- [ ] Navegación funciona correctamente
- [ ] Analytics está rastreando (verificar en 24-48h)

## 🔗 Enlaces Útiles

- **Documentación Completa**: Ver `DEPLOYMENT.md`
- **Testing**: Ver `TESTING_CHECKLIST.md`
- **Estado del Proyecto**: Ver `PROJECT_STATUS.md`

## 🆘 Problemas Comunes

### Build falla en Vercel
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs en el dashboard de Vercel

### Formulario no envía
- Configura `NEXT_PUBLIC_FORMSPREE_ENDPOINT` en Vercel
- Crea una cuenta en [formspree.io](https://formspree.io)

### Analytics no funciona
- Configura `NEXT_PUBLIC_GA_MEASUREMENT_ID` en Vercel
- Espera 24-48 horas para ver datos en Google Analytics

## 📞 Soporte

Para más detalles, consulta la documentación completa en:
- `DEPLOYMENT.md` - Guía detallada de despliegue
- `TESTING_CHECKLIST.md` - Testing manual y automatizado
- `PROJECT_STATUS.md` - Estado completo del proyecto
