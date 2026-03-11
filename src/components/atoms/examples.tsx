/**
 * Ejemplos de uso de los componentes atómicos
 * Este archivo muestra cómo utilizar cada componente atómico
 */

import { Button, Input, Text, Icon, Image } from './index';

export function ButtonExamples() {
  return (
    <div className="space-y-4">
      <Button variant="primary" onClick={() => console.log('Primary clicked')}>
        Donar Ahora
      </Button>
      
      <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
        Más Información
      </Button>
      
      <Button variant="primary" disabled>
        Botón Deshabilitado
      </Button>
    </div>
  );
}

export function InputExamples() {
  return (
    <div className="space-y-4 max-w-md">
      <Input 
        label="Nombre completo"
        placeholder="Ingresa tu nombre"
      />
      
      <Input 
        label="Correo electrónico"
        type="email"
        placeholder="correo@ejemplo.com"
      />
      
      <Input 
        label="Mensaje"
        placeholder="Escribe tu mensaje"
        error="Este campo es requerido"
      />
    </div>
  );
}

export function TextExamples() {
  return (
    <div className="space-y-4">
      <Text variant="h1">Organización No Gubernamental ZRT</Text>
      <Text variant="h2">Reforestación y Conservación Ambiental</Text>
      <Text variant="h3">Nuestros Servicios</Text>
      <Text variant="body">
        Somos una organización dedicada a la reforestación, conservación ambiental 
        y sensibilización pública en Perú.
      </Text>
      <Text variant="small">
        Registro vigente hasta: 12 de Noviembre del 2034
      </Text>
      <Text variant="caption">RUC: 20610820256</Text>
    </div>
  );
}

export function IconExamples() {
  return (
    <div className="flex gap-4 items-center">
      <Icon name="tree" size={32} aria-label="Árbol" className="text-green-600" />
      <Icon name="heart" size={32} aria-label="Corazón" className="text-red-500" />
      <Icon name="leaf" size={32} aria-label="Hoja" className="text-green-500" />
      <Icon name="water" size={32} aria-label="Agua" className="text-blue-500" />
      <Icon name="sun" size={32} aria-label="Sol" className="text-yellow-500" />
      <Icon name="email" size={24} aria-label="Email" className="text-gray-600" />
      <Icon name="phone" size={24} aria-label="Teléfono" className="text-gray-600" />
      <Icon name="location" size={24} aria-label="Ubicación" className="text-gray-600" />
    </div>
  );
}

export function ImageExamples() {
  return (
    <div className="space-y-4">
      {/* Imagen hero con prioridad de carga */}
      <Image 
        src="/hero-reforestation.jpg"
        alt="Reforestación en Junín, Perú"
        width={1920}
        height={1080}
        priority
        className="rounded-lg"
      />
      
      {/* Imagen responsiva con lazy loading */}
      <Image 
        src="/service-planting.jpg"
        alt="Plantación de árboles nativos"
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="rounded-lg"
      />
    </div>
  );
}

export function CombinedExample() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      {/* Hero Section Example */}
      <section className="text-center space-y-6">
        <Icon name="tree" size={64} aria-label="Árbol" className="text-green-600 mx-auto" />
        <Text variant="h1" className="text-green-800">
          Organización No Gubernamental ZRT
        </Text>
        <Text variant="body" className="text-gray-700">
          Dedicados a la reforestación y conservación ambiental en El Tambo, Huancayo, Junín, Perú
        </Text>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Donar Ahora</Button>
          <Button variant="secondary">Conocer Más</Button>
        </div>
      </section>

      {/* Contact Form Example */}
      <section className="space-y-4">
        <Text variant="h2" className="text-green-800">Contáctanos</Text>
        <Input 
          label="Nombre"
          placeholder="Tu nombre completo"
        />
        <Input 
          label="Email"
          type="email"
          placeholder="tu@email.com"
        />
        <Button variant="primary" className="w-full">
          Enviar Mensaje
        </Button>
      </section>

      {/* Info Section Example */}
      <section className="space-y-4">
        <Text variant="h3" className="text-green-800">Información de Contacto</Text>
        <div className="flex items-center gap-2">
          <Icon name="location" size={20} aria-label="Ubicación" className="text-green-600" />
          <Text variant="body">El Tambo, Huancayo, Junín, Perú</Text>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="email" size={20} aria-label="Email" className="text-green-600" />
          <Text variant="body">contacto@ongzrt.org</Text>
        </div>
        <Text variant="small" className="text-gray-600">
          RUC: 20610820256 | Registro vigente hasta: 12 de Noviembre del 2034
        </Text>
      </section>
    </div>
  );
}
