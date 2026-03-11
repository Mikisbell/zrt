import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ServicesSection, Service } from './ServicesSection';

describe('ServicesSection', () => {
  const customServices: Service[] = [
    {
      id: 'service1',
      title: 'Service 1',
      description: 'Description 1',
      icon: 'tree',
      details: 'Details 1',
    },
    {
      id: 'service2',
      title: 'Service 2',
      description: 'Description 2',
      icon: 'shield',
    },
  ];

  it('should render section heading', () => {
    render(<ServicesSection services={customServices} />);
    
    expect(screen.getByRole('heading', { name: /nuestros servicios/i })).toBeInTheDocument();
  });

  it('should render section description', () => {
    render(<ServicesSection services={customServices} />);
    
    expect(screen.getByText(/Ofrecemos una amplia gama de servicios/i)).toBeInTheDocument();
  });

  it('should render all services', () => {
    render(<ServicesSection services={customServices} />);
    
    expect(screen.getByText('Service 1')).toBeInTheDocument();
    expect(screen.getByText('Service 2')).toBeInTheDocument();
  });

  it('should render default services when none provided', () => {
    render(<ServicesSection services={[]} />);
    
    // Should render with empty array
    expect(screen.getByRole('heading', { name: /nuestros servicios/i })).toBeInTheDocument();
  });

  it('should expand service details when clicked', async () => {
    const user = userEvent.setup();
    render(<ServicesSection services={customServices} />);
    
    const expandButton = screen.getByRole('button', { name: /ver más detalles/i });
    await user.click(expandButton);
    
    expect(screen.getByText('Details 1')).toBeVisible();
  });

  it('should have proper ARIA attributes', () => {
    render(<ServicesSection services={customServices} />);
    
    const section = screen.getByRole('region', { name: /nuestros servicios/i });
    expect(section).toHaveAttribute('aria-labelledby', 'services-heading');
  });

  it('should render custom title and description', () => {
    render(
      <ServicesSection
        services={customServices}
        title="Custom Title"
        description="Custom Description"
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('should render services in a grid layout', () => {
    render(<ServicesSection services={customServices} />);
    
    const gridContainer = screen.getByRole('region', { name: /nuestros servicios/i }).querySelector('.grid');
    expect(gridContainer).toBeInTheDocument();
  });
});
