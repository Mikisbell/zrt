import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HeroSection, CTAButton } from './HeroSection';

describe('HeroSection', () => {
  const defaultProps = {
    headline: 'Salvemos Nuestro Planeta',
    subheadline: 'Juntos por un futuro más verde',
    ctaButtons: [
      { label: 'Donar Ahora', href: '#donate', variant: 'primary' as const },
      { label: 'Conocer Más', href: '#about', variant: 'secondary' as const },
    ],
  };

  it('should render organization information', () => {
    render(<HeroSection {...defaultProps} />);
    
    expect(screen.getByText(/Organización No Gubernamental ZRT/i)).toBeInTheDocument();
    expect(screen.getByText(/20610820256/i)).toBeInTheDocument();
    expect(screen.getByText(/El Tambo, Huancayo, Junín, Perú/i)).toBeInTheDocument();
  });

  it('should render headline and subheadline', () => {
    render(<HeroSection {...defaultProps} />);
    
    expect(screen.getByText('Salvemos Nuestro Planeta')).toBeInTheDocument();
    expect(screen.getByText('Juntos por un futuro más verde')).toBeInTheDocument();
  });

  it('should render all CTA buttons', () => {
    render(<HeroSection {...defaultProps} />);
    
    expect(screen.getByRole('button', { name: 'Donar Ahora' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Conocer Más' })).toBeInTheDocument();
  });

  it('should call onClick handler when CTA button is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const ctaButtons: CTAButton[] = [
      { label: 'Test Button', href: '#test', variant: 'primary', onClick: handleClick },
    ];

    render(<HeroSection {...defaultProps} ctaButtons={ctaButtons} />);
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have proper ARIA attributes', () => {
    render(<HeroSection {...defaultProps} />);
    
    const section = screen.getByRole('region', { name: /salvemos nuestro planeta/i });
    expect(section).toHaveAttribute('aria-labelledby', 'hero-headline');
    
    const headline = screen.getByText('Salvemos Nuestro Planeta');
    expect(headline).toHaveAttribute('id', 'hero-headline');
  });

  it('should render with custom organization information', () => {
    render(
      <HeroSection
        {...defaultProps}
        organizationName="Custom Org"
        organizationId="12345678901"
        location="Lima, Perú"
      />
    );
    
    expect(screen.getByText('Custom Org')).toBeInTheDocument();
    expect(screen.getByText(/12345678901/i)).toBeInTheDocument();
    expect(screen.getByText('Lima, Perú')).toBeInTheDocument();
  });

  it('should have minimum touch target size for CTA buttons', () => {
    render(<HeroSection {...defaultProps} />);
    
    const buttons = screen.getAllByRole('button');
    // Verificar que los botones tienen las clases de tamaño mínimo
    buttons.forEach(button => {
      expect(button.className).toContain('min-w-[44px]');
      expect(button.className).toContain('min-h-[44px]');
    });
  });
});
