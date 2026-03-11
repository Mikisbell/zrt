# Componentes Atómicos

Esta carpeta contiene los componentes básicos reutilizables de la landing page de ONG ZRT. Todos los componentes están diseñados siguiendo los principios de accesibilidad WCAG 2.1 AA y diseño responsivo.

## Componentes Disponibles

### Button

Componente de botón con dos variantes: primary y secondary.

**Características:**
- Touch targets mínimos de 44x44px (Requirement 7.5)
- Soporte para estados disabled
- Estilos de focus para accesibilidad (Requirement 10.2)
- Variantes primary y secondary

**Uso:**
```tsx
import { Button } from '@/components/atoms';

<Button variant="primary" onClick={handleClick}>
  Donar Ahora
</Button>

<Button variant="secondary">
  Más Información
</Button>
```

### Input

Componente de campo de entrada con validación visual.

**Características:**
- Touch targets mínimos de 44px de altura (Requirement 7.5)
- Validación visual con mensajes de error
- ARIA labels y atributos de accesibilidad (Requirement 10.4)
- Soporte para labels asociados
- Estados de error con aria-invalid y aria-describedby

**Uso:**
```tsx
import { Input } from '@/components/atoms';

<Input 
  label="Nombre"
  placeholder="Ingresa tu nombre"
  error="Este campo es requerido"
/>
```

### Text

Componente de texto con jerarquía tipográfica responsiva.

**Características:**
- Jerarquía tipográfica completa (h1-h6, body, small, caption)
- Diseño responsivo con breakpoints (Requirement 7)
- Soporte para elementos HTML personalizados con prop `as`
- Mantiene la jerarquía de headings para accesibilidad (Requirement 10.6)

**Uso:**
```tsx
import { Text } from '@/components/atoms';

<Text variant="h1">Título Principal</Text>
<Text variant="h2">Subtítulo</Text>
<Text variant="body">Contenido del párrafo</Text>
<Text variant="small">Texto pequeño</Text>
```

### Icon

Componente de iconos SVG con soporte para accesibilidad.

**Características:**
- Iconos SVG optimizados
- ARIA labels para accesibilidad (Requirement 10.1)
- Tamaño personalizable
- Conjunto de iconos predefinidos para la landing page

**Iconos disponibles:**
- tree, heart, leaf, water, sun
- menu, close, chevronDown
- email, phone, location

**Uso:**
```tsx
import { Icon } from '@/components/atoms';

<Icon name="tree" size={24} aria-label="Icono de árbol" />
<Icon name="heart" size={32} className="text-green-600" />
```

### Image

Componente de imagen optimizado con next/image.

**Características:**
- Optimización automática de imágenes con Next.js
- Alt text obligatorio para accesibilidad (Requirement 10.1)
- Soporte para lazy loading
- Soporte para priority loading (above-the-fold)
- Preservación de aspect ratio (Requirement 7.6)

**Uso:**
```tsx
import { Image } from '@/components/atoms';

<Image 
  src="/hero-image.jpg"
  alt="Reforestación en Junín, Perú"
  width={1920}
  height={1080}
  priority
/>

<Image 
  src="/service-image.jpg"
  alt="Plantación de árboles"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Accesibilidad

Todos los componentes cumplen con los siguientes requisitos de accesibilidad:

- **Touch targets mínimos**: 44x44px para elementos interactivos (Requirement 7.5)
- **ARIA labels**: Todos los elementos tienen labels descriptivos (Requirement 10.4, 10.5)
- **Keyboard accessibility**: Todos los elementos interactivos son accesibles por teclado (Requirement 10.2)
- **Focus styles**: Indicadores visuales claros para el estado de focus
- **Alt text**: Todas las imágenes tienen texto alternativo (Requirement 10.1)
- **Color contrast**: Ratio mínimo de 4.5:1 (Requirement 10.3)

## Diseño Responsivo

Los componentes se adaptan a diferentes tamaños de pantalla:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Los componentes Text utilizan clases responsivas de Tailwind (sm:, md:, lg:) para ajustar el tamaño de fuente según el dispositivo.

## Testing

Todos los componentes tienen tests unitarios que verifican:

- Renderizado correcto
- Variantes y estados
- Accesibilidad (ARIA attributes, keyboard navigation)
- Touch targets mínimos
- Estilos responsivos

Para ejecutar los tests:

```bash
npm test
```

## Validación de Requisitos

Estos componentes atómicos validan los siguientes requisitos:

- **Requirement 7**: Diseño Responsivo
  - 7.5: Touch targets mínimos de 44x44px
  - 7.6: Preservación de aspect ratio en imágenes

- **Requirement 10**: Accesibilidad
  - 10.1: Alt text para imágenes
  - 10.2: Elementos interactivos accesibles por teclado
  - 10.3: Ratio de contraste de color
  - 10.4: ARIA labels para inputs
  - 10.5: Labels descriptivos para botones
  - 10.6: Jerarquía de headings
