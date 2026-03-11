'use client';

import React, { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface AlternativeContact {
  type: 'phone' | 'email' | 'address';
  value: string;
  icon: string;
  label: string;
}

export interface ContactSectionProps {
  title?: string;
  description?: string;
  alternativeContacts?: AlternativeContact[];
  onSubmit?: (data: ContactFormData) => Promise<void>;
  className?: string;
}

const defaultAlternativeContacts: AlternativeContact[] = [
  {
    type: 'email',
    value: 'contacto@ongzrt.org',
    icon: 'mail',
    label: 'Email',
  },
  {
    type: 'phone',
    value: '+51 999 999 999',
    icon: 'phone',
    label: 'Teléfono',
  },
  {
    type: 'address',
    value: 'El Tambo, Huancayo, Junín, Perú',
    icon: 'mapPin',
    label: 'Dirección',
  },
];

const validateForm = (data: ContactFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  // Validar nombre
  if (!data.name.trim()) {
    errors.name = 'El nombre es requerido';
  } else if (data.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  } else if (data.name.trim().length > 100) {
    errors.name = 'El nombre no puede exceder 100 caracteres';
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(data.name)) {
    errors.name = 'El nombre solo puede contener letras y espacios';
  }

  // Validar email
  if (!data.email.trim()) {
    errors.email = 'El correo electrónico es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Por favor ingrese un correo electrónico válido';
  }

  // Validar asunto
  if (!data.subject.trim()) {
    errors.subject = 'El asunto es requerido';
  } else if (data.subject.trim().length < 5) {
    errors.subject = 'El asunto debe tener al menos 5 caracteres';
  } else if (data.subject.trim().length > 200) {
    errors.subject = 'El asunto no puede exceder 200 caracteres';
  }

  // Validar mensaje
  if (!data.message.trim()) {
    errors.message = 'El mensaje es requerido';
  } else if (data.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  } else if (data.message.trim().length > 1000) {
    errors.message = 'El mensaje no puede exceder 1000 caracteres';
  }

  return errors;
};

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = 'Contáctanos',
  description = 'Estamos aquí para responder tus preguntas y escuchar tus ideas',
  alternativeContacts = defaultAlternativeContacts,
  onSubmit,
  className,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar honeypot (anti-spam)
    if (formData.honeypot) {
      return;
    }

    // Validar formulario
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      setSubmitError(
        'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={cn('py-20 bg-gray-50', className)}
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6" aria-hidden="true" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {submitSuccess ? (
              <div
                className="bg-green-50 border-l-4 border-green-600 p-6 rounded"
                role="alert"
              >
                <div className="flex items-start gap-3">
                  <Icon name="checkCircle" size={24} className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <p className="text-green-800">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="space-y-6">
                  <Input
                    label="Nombre"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    aria-required="true"
                  />

                  <Input
                    label="Correo Electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    aria-required="true"
                  />

                  <Input
                    label="Asunto"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    required
                    aria-required="true"
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-offset-1',
                        errors.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:border-green-500 focus:ring-green-500'
                      )}
                      required
                      aria-required="true"
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div
                      className="bg-red-50 border-l-4 border-red-600 p-4 rounded"
                      role="alert"
                    >
                      <p className="text-red-800">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Información de contacto alternativa */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Otras Formas de Contacto
            </h3>
            
            <div className="space-y-6">
              {alternativeContacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={contact.icon}
                      size={24}
                      className="text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {contact.label}
                    </h4>
                    <p className="text-gray-700">
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactSection.displayName = 'ContactSection';

export { validateForm };
