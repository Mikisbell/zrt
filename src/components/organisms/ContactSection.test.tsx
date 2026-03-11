import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection, validateForm } from './ContactSection';

describe('ContactSection', () => {
  it('should render section heading', () => {
    render(<ContactSection />);
    
    expect(screen.getByRole('heading', { name: /contáctanos/i })).toBeInTheDocument();
  });

  it('should render all form fields', () => {
    render(<ContactSection />);
    
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/asunto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
  });

  it('should render submit button', () => {
    render(<ContactSection />);
    
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });

  it('should render alternative contact methods', () => {
    render(<ContactSection />);
    
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Teléfono/i)).toBeInTheDocument();
    expect(screen.getByText(/Dirección/i)).toBeInTheDocument();
  });

  it('should show validation errors on empty submit', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/el nombre es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/el correo electrónico es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/el asunto es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/el mensaje es requerido/i)).toBeInTheDocument();
    });
  });

  it('should show specific error for invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    await user.type(emailInput, 'invalid-email');
    
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/por favor ingrese un correo electrónico válido/i)).toBeInTheDocument();
    });
  });

  it('should call onSubmit with valid data', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ContactSection onSubmit={handleSubmit} />);
    
    await user.type(screen.getByLabelText(/nombre/i), 'Juan Pérez');
    await user.type(screen.getByLabelText(/correo electrónico/i), 'juan@example.com');
    await user.type(screen.getByLabelText(/asunto/i), 'Consulta sobre reforestación');
    await user.type(screen.getByLabelText(/mensaje/i), 'Me gustaría saber más sobre sus proyectos');
    
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'Juan Pérez',
        email: 'juan@example.com',
        subject: 'Consulta sobre reforestación',
        message: 'Me gustaría saber más sobre sus proyectos',
        honeypot: '',
      });
    });
  });

  it('should show success message after successful submission', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ContactSection onSubmit={handleSubmit} />);
    
    await user.type(screen.getByLabelText(/nombre/i), 'Juan Pérez');
    await user.type(screen.getByLabelText(/correo electrónico/i), 'juan@example.com');
    await user.type(screen.getByLabelText(/asunto/i), 'Consulta sobre reforestación');
    await user.type(screen.getByLabelText(/mensaje/i), 'Me gustaría saber más sobre sus proyectos');
    
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/mensaje enviado con éxito/i)).toBeInTheDocument();
    });
  });

  it('should have proper ARIA attributes', () => {
    render(<ContactSection />);
    
    const section = screen.getByRole('region', { name: /contáctanos/i });
    expect(section).toHaveAttribute('aria-labelledby', 'contact-heading');
    
    const nameInput = screen.getByLabelText(/nombre/i);
    expect(nameInput).toHaveAttribute('aria-required', 'true');
  });
});

describe('validateForm', () => {
  it('should return errors for empty fields', () => {
    const errors = validateForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.subject).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it('should validate name length', () => {
    const errors = validateForm({
      name: 'A',
      email: 'test@example.com',
      subject: 'Test subject',
      message: 'Test message here',
    });
    
    expect(errors.name).toContain('al menos 2 caracteres');
  });

  it('should validate email format', () => {
    const errors = validateForm({
      name: 'Juan Pérez',
      email: 'invalid-email',
      subject: 'Test subject',
      message: 'Test message here',
    });
    
    expect(errors.email).toContain('correo electrónico válido');
  });

  it('should return no errors for valid data', () => {
    const errors = validateForm({
      name: 'Juan Pérez',
      email: 'juan@example.com',
      subject: 'Consulta sobre reforestación',
      message: 'Me gustaría saber más sobre sus proyectos',
    });
    
    expect(Object.keys(errors)).toHaveLength(0);
  });
});
