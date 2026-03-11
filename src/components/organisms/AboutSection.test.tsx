import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection, Activity } from './AboutSection';

describe('AboutSection', () => {
  const defaultProps = {
    mission: 'Proteger y restaurar los ecosistemas mediante la reforestación y la educación ambiental.',
  };

  it('should render section heading', () => {
    render(<AboutSection {...defaultProps} />);
    
    expect(screen.getByRole('heading', { name: /sobre nosotros/i })).toBeInTheDocument();
  });

  it('should render mission statement', () => {
    render(<AboutSection {...defaultProps} />);
    
    expect(screen.getByText(/Proteger y restaurar los ecosistemas/i)).toBeInTheDocument();
  });

  it('should render registration validity', () => {
    render(<AboutSection {...defaultProps} />);
    
    expect(screen.getByText(/Registro vigente hasta: 12 de Noviembre del 2034/i)).toBeInTheDocument();
  });

  it('should render all three default activities', () => {
    render(<AboutSection {...defaultProps} />);
    
    expect(screen.getByText('Servicios de Reforestación')).toBeInTheDocument();
    expect(screen.getByText('Recaudación de Fondos')).toBeInTheDocument();
    expect(screen.getByText('Sensibilización Ambiental')).toBeInTheDocument();
  });

  it('should render custom activities', () => {
    const customActivities: Activity[] = [
      {
        id: 'custom1',
        name: 'Custom Activity 1',
        description: 'Description 1',
        icon: 'tree',
      },
      {
        id: 'custom2',
        name: 'Custom Activity 2',
        description: 'Description 2',
        icon: 'heart',
      },
    ];

    render(<AboutSection {...defaultProps} activities={customActivities} />);
    
    expect(screen.getByText('Custom Activity 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Activity 2')).toBeInTheDocument();
  });

  it('should have proper ARIA attributes', () => {
    render(<AboutSection {...defaultProps} />);
    
    const section = screen.getByRole('region', { name: /sobre nosotros/i });
    expect(section).toHaveAttribute('aria-labelledby', 'about-heading');
  });

  it('should render activity descriptions', () => {
    render(<AboutSection {...defaultProps} />);
    
    expect(screen.getByText(/Plantación y cuidado de árboles/i)).toBeInTheDocument();
    expect(screen.getByText(/Gestión transparente de donaciones/i)).toBeInTheDocument();
    expect(screen.getByText(/Educación y concientización/i)).toBeInTheDocument();
  });
});
