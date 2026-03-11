# Molecular Components

Componentes compuestos que combinan átomos para crear funcionalidades más complejas.

## Componentes Disponibles

### NavigationLink

Enlace de navegación con smooth scroll para anclas internas.

**Props:**
- `href` (string, required): URL o ancla de destino
- `children` (ReactNode, required): Contenido del enlace
- `active` (boolean): Si el enlace está activo
- `onClick` (function): Manejador de click personalizado

**Características:**
- Smooth scroll automático para enlaces de ancla (#section)
- Tamaño mínimo de 44x44px para accesibilidad táctil
- Estilos de estado activo/inactivo
- Navegación por teclado con focus visible
- Actualiza la URL sin recargar la página

**Ejemplo:**
```tsx
<NavigationLink href="#services" active={currentSection === 'services'}>
  Servicios
</NavigationLink>
```

### FormField

Campo de formulario con validación, mensajes de error y texto de ayuda.

**Props:**
- `label` (string, required): Etiqueta del campo
- `error` (string): Mensaje de error a mostrar
- `helperText` (string): Texto de ayuda
- `required` (boolean): Si el campo es requerido
- `textarea` (boolean): Renderizar como textarea en lugar de input
- Todos los props de Input/Textarea HTML

**Características:**
- Validación visual con estilos de error
- Mensajes de error específicos
- Texto de ayuda opcional
- Indicador de campo requerido (*)
- Soporte para textarea con altura mínima
- ARIA labels y descripciones apropiadas
- Tamaño mínimo de 44px para accesibilidad

**Ejemplo:**
```tsx
<FormField
  label="Correo Electrónico"
  type="email"
  required
  error={errors.email}
  helperText="Ingresa tu correo electrónico"
/>

<FormField
  label="Mensaje"
  textarea
  required
  error={errors.message}
/>
```

### ServiceCard

Tarjeta de servicio con expansión de detalles.

**Props:**
- `title` (string, required): Título del servicio
- `description` (string, required): Descripción breve
- `icon` (string, required): Nombre del icono a mostrar
- `details` (string): Detalles adicionales expandibles
- `className` (string): Clases CSS adicionales

**Características:**
- Expansión/colapso de detalles al hacer clic
- Animación suave de transición
- Icono representativo con fondo de color
- Navegación por teclado (Enter/Space)
- ARIA attributes para accesibilidad
- Indicador visual de expansión (chevron rotativo)

**Ejemplo:**
```tsx
<ServiceCard
  title="Reforestación"
  description="Plantamos árboles nativos en zonas deforestadas"
  icon="tree"
  details="Trabajamos con comunidades locales para identificar las mejores especies nativas y garantizar el cuidado a largo plazo de los árboles plantados."
/>
```

### StatCard

Tarjeta para mostrar estadísticas ambientales.

**Props:**
- `value` (string, required): Valor de la estadística
- `label` (string, required): Etiqueta descriptiva
- `icon` (string): Nombre del icono opcional
- `description` (string): Descripción adicional
- `className` (string): Clases CSS adicionales

**Características:**
- Diseño centrado y visualmente destacado
- Valor en texto grande y verde
- Icono opcional con fondo circular
- Descripción adicional opcional
- Efectos de hover con sombra
- ARIA label para lectores de pantalla

**Ejemplo:**
```tsx
<StatCard
  value="10,000+"
  label="Árboles Plantados"
  icon="tree"
  description="En los últimos 5 años"
/>
```

### SocialShareButton

Botón para compartir en redes sociales.

**Props:**
- `platform` (SocialPlatform, required): 'facebook' | 'twitter' | 'whatsapp' | 'linkedin'
- `url` (string): URL a compartir (por defecto: URL actual)
- `title` (string): Título a compartir
- `description` (string): Descripción adicional
- `className` (string): Clases CSS adicionales

**Características:**
- Soporte para múltiples plataformas sociales
- Iconos SVG integrados para cada plataforma
- Colores de marca de cada plataforma
- Abre ventana de compartir en nueva ventana
- URL y título pre-poblados
- Codificación correcta de parámetros URL
- Tamaño mínimo de 44x44px
- ARIA labels descriptivos

**Ejemplo:**
```tsx
<SocialShareButton
  platform="facebook"
  url="https://ongzrt.org"
  title="ONG ZRT - Reforestación y Conservación"
/>

<SocialShareButton
  platform="whatsapp"
  title="Ayúdanos a reforestar el Perú"
/>
```

## Patrones de Uso

### Navegación

```tsx
const navigationItems = [
  { id: 'hero', label: 'Inicio', href: '#hero' },
  { id: 'services', label: 'Servicios', href: '#services' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];

{navigationItems.map(item => (
  <NavigationLink
    key={item.id}
    href={item.href}
    active={currentSection === item.id}
  >
    {item.label}
  </NavigationLink>
))}
```

### Formulario de Contacto

```tsx
<form onSubmit={handleSubmit}>
  <FormField
    label="Nombre"
    name="name"
    required
    error={errors.name}
  />
  
  <FormField
    label="Email"
    name="email"
    type="email"
    required
    error={errors.email}
  />
  
  <FormField
    label="Mensaje"
    name="message"
    textarea
    required
    error={errors.message}
  />
  
  <Button type="submit">Enviar</Button>
</form>
```

### Sección de Servicios

```tsx
const services = [
  {
    title: 'Reforestación',
    description: 'Plantamos árboles nativos',
    icon: 'tree',
    details: 'Detalles completos del servicio...',
  },
  // más servicios...
];

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map(service => (
    <ServiceCard key={service.title} {...service} />
  ))}
</div>
```

### Estadísticas de Impacto

```tsx
const stats = [
  { value: '10,000+', label: 'Árboles Plantados', icon: 'tree' },
  { value: '50 Ha', label: 'Área Reforestada', icon: 'leaf' },
  { value: '15', label: 'Comunidades Beneficiadas', icon: 'heart' },
];

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {stats.map(stat => (
    <StatCard key={stat.label} {...stat} />
  ))}
</div>
```

### Compartir en Redes Sociales

```tsx
const socialPlatforms: SocialPlatform[] = ['facebook', 'twitter', 'whatsapp', 'linkedin'];

<div className="flex gap-4">
  {socialPlatforms.map(platform => (
    <SocialShareButton
      key={platform}
      platform={platform}
      title="ONG ZRT - Reforestación y Conservación Ambiental"
    />
  ))}
</div>
```

## Accesibilidad

Todos los componentes moleculares siguen las mejores prácticas de accesibilidad:

- **Tamaños mínimos de toque**: 44x44px para todos los elementos interactivos
- **ARIA attributes**: Labels, roles y estados apropiados
- **Navegación por teclado**: Todos los componentes son completamente navegables por teclado
- **Focus visible**: Indicadores de focus claros y visibles
- **Mensajes de error**: Asociados correctamente con campos de formulario
- **Lectores de pantalla**: Contenido semántico y descriptivo

## Testing

Cada componente incluye tests unitarios completos que verifican:

- Renderizado correcto de props
- Interacciones de usuario (click, teclado)
- Estados (activo, error, expandido)
- Accesibilidad (ARIA, tamaños mínimos)
- Casos edge (valores faltantes, errores)

Ejecutar tests:
```bash
npm test -- src/components/molecules
```
