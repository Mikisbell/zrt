import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer, OrganizationInfo, SocialLink, NavigationLink } from './Footer';

describe('Footer', () => {
  it('should render organization name', () => {
    render(<Footer />);
    
    expect(screen.getByText('ONG ZRT')).toBeInTheDocument();
  });

  it('should render organization information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Organización No Gubernamental ZRT/i)).toBeInTheDocument();
    expect(screen.getByText(/20610820256/i)).toBeInTheDocument();
    expect(screen.getByText(/El Tambo, Huancayo, Junín, Perú/i)).toBeInTheDocument();
    expect(screen.getByText(/Registro vigente hasta: 12 de Noviembre del 2034/i)).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Footer />);
    
    expect(screen.getByRole('button', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nosotros/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /servicios/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /impacto/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /donar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contacto/i })).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(<Footer />);
    
    expect(screen.getByLabelText(/visitar nuestro perfil de facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/visitar nuestro perfil de twitter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/visitar nuestro perfil de instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/visitar nuestro perfil de whatsapp/i)).toBeInTheDocument();
  });

  it('should render social share buttons when enabled', () => {
    render(<Footer showSocialShare={true} />);
    
    expect(screen.getByText(/comparte/i)).toBeInTheDocument();
    expect(screen.getByText(/ayúdanos a difundir nuestra misión/i)).toBeInTheDocument();
  });

  it('should not render social share buttons when disabled', () => {
    render(<Footer showSocialShare={false} />);
    
    expect(screen.queryByText(/comparte/i)).not.toBeInTheDocument();
  });

  it('should render copyright with current year', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`, 'i'))).toBeInTheDocument();
  });

  it('should render policy links', () => {
    render(<Footer />);
    
    expect(screen.getByRole('button', { name: /política de privacidad/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /términos de uso/i })).toBeInTheDocument();
  });

  it('should render custom organization info', () => {
    const customInfo: OrganizationInfo = {
      name: 'Custom Org',
      legalName: 'Custom Legal Name',
      id: '12345678901',
      location: 'Lima, Perú',
      registrationValidity: 'Valid until 2030',
    };

    render(<Footer organizationInfo={customInfo} />);
    
    expect(screen.getByText('Custom Org')).toBeInTheDocument();
    expect(screen.getByText('Custom Legal Name')).toBeInTheDocument();
    expect(screen.getByText(/12345678901/i)).toBeInTheDocument();
  });

  it('should render custom navigation links', () => {
    const customLinks: NavigationLink[] = [
      { label: 'Custom Link 1', href: '#link1' },
      { label: 'Custom Link 2', href: '#link2' },
    ];

    render(<Footer navigationLinks={customLinks} />);
    
    expect(screen.getByRole('button', { name: 'Custom Link 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Custom Link 2' })).toBeInTheDocument();
  });

  it('should have proper ARIA attributes', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    
    const nav = screen.getByRole('navigation', { name: /navegación del footer/i });
    expect(nav).toBeInTheDocument();
  });

  it('should have minimum touch target size for interactive elements', () => {
    render(<Footer />);
    
    const buttons = screen.getAllByRole('button');
    // Verificar que los botones tienen las clases de tamaño mínimo
    buttons.forEach(button => {
      expect(button.className).toContain('min-h-[44px]');
    });
  });

  it('should handle navigation click', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    const button = screen.getByRole('button', { name: /inicio/i });
    await user.click(button);
    
    // Button should be clickable
    expect(button).toBeInTheDocument();
  });
});
