import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DonationSection } from './DonationSection';

describe('DonationSection', () => {
  beforeEach(() => {
    // Mock window.location.href
    delete (window as any).location;
    window.location = { href: '' } as any;
  });

  it('should render section heading', () => {
    render(<DonationSection />);
    
    expect(screen.getByRole('heading', { name: /apoya nuestra causa/i })).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<DonationSection />);
    
    expect(screen.getByText(/Tu donación nos ayuda a plantar más árboles/i)).toBeInTheDocument();
  });

  it('should render impact message', () => {
    render(<DonationSection />);
    
    expect(screen.getByText(/Con tu donación de S\/ 100 podemos plantar 10 árboles/i)).toBeInTheDocument();
  });

  it('should render all suggested amounts', () => {
    render(<DonationSection suggestedAmounts={[50, 100, 200, 500]} />);
    
    const buttons = screen.getAllByRole('button');
    const amountButtons = buttons.filter(btn => btn.textContent?.includes('S/'));
    
    expect(amountButtons).toHaveLength(4);
  });

  it('should select amount when clicked', async () => {
    const user = userEvent.setup();
    render(<DonationSection />);
    
    const button = screen.getByRole('button', { name: /S\/ 100/i });
    await user.click(button);
    
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('should render custom amount input', () => {
    render(<DonationSection />);
    
    expect(screen.getByLabelText(/monto personalizado/i)).toBeInTheDocument();
  });

  it('should update custom amount when typed', async () => {
    const user = userEvent.setup();
    render(<DonationSection />);
    
    const input = screen.getByLabelText(/monto personalizado/i);
    await user.type(input, '150');
    
    expect(input).toHaveValue(150);
  });

  it('should render donate button', () => {
    render(<DonationSection />);
    
    expect(screen.getByRole('button', { name: /proceder a donar/i })).toBeInTheDocument();
  });

  it('should render trust indicators', () => {
    render(<DonationSection />);
    
    expect(screen.getByText(/Transacciones Seguras/i)).toBeInTheDocument();
    expect(screen.getByText(/Transparencia Total/i)).toBeInTheDocument();
    expect(screen.getByText(/Certificado de Donación/i)).toBeInTheDocument();
  });

  it('should have proper ARIA attributes', () => {
    render(<DonationSection />);
    
    const section = screen.getByRole('region', { name: /apoya nuestra causa/i });
    expect(section).toHaveAttribute('aria-labelledby', 'donate-heading');
  });

  it('should render contact CTA button', () => {
    render(<DonationSection />);
    
    expect(screen.getByRole('button', { name: /contáctanos/i })).toBeInTheDocument();
  });

  it('should have minimum touch target size for amount buttons', () => {
    render(<DonationSection />);
    
    const buttons = screen.getAllByRole('button');
    const amountButtons = buttons.filter(btn => 
      btn.textContent?.includes('S/') && !btn.textContent?.includes('Donar')
    );
    
    // Verificar que los botones tienen las clases de tamaño mínimo
    amountButtons.forEach(button => {
      expect(button.className).toContain('min-h-[60px]');
    });
  });
});
