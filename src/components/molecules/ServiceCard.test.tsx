import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ServiceCard } from './ServiceCard';

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Reforestación',
    description: 'Plantamos árboles nativos',
    icon: 'tree',
  };

  it('should render title and description', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText('Reforestación')).toBeInTheDocument();
    expect(screen.getByText('Plantamos árboles nativos')).toBeInTheDocument();
  });

  it('should render icon', () => {
    render(<ServiceCard {...defaultProps} />);
    const icon = screen.getByLabelText('tree');
    expect(icon).toBeInTheDocument();
  });

  it('should not show expand button when no details provided', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.queryByText('Ver más detalles')).not.toBeInTheDocument();
  });

  it('should show expand button when details are provided', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    expect(screen.getByText('Ver más detalles')).toBeInTheDocument();
  });

  it('should expand details when clicking expand button', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    fireEvent.click(expandButton);
    
    expect(screen.getByText('Información adicional sobre el servicio')).toBeVisible();
    expect(screen.getByText('Ver menos')).toBeInTheDocument();
  });

  it('should collapse details when clicking collapse button', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    fireEvent.click(expandButton);
    
    const collapseButton = screen.getByText('Ver menos');
    fireEvent.click(collapseButton);
    
    expect(screen.getByText('Ver más detalles')).toBeInTheDocument();
  });

  it('should toggle expansion with Enter key', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    fireEvent.keyDown(expandButton, { key: 'Enter' });
    
    expect(screen.getByText('Ver menos')).toBeInTheDocument();
  });

  it('should toggle expansion with Space key', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    fireEvent.keyDown(expandButton, { key: ' ' });
    
    expect(screen.getByText('Ver menos')).toBeInTheDocument();
  });

  it('should have proper aria-expanded attribute', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    expect(expandButton).toHaveAttribute('aria-expanded', 'false');
    
    fireEvent.click(expandButton);
    expect(expandButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('should have proper aria-controls attribute', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    expect(expandButton).toHaveAttribute('aria-controls', 'details-reforestación');
  });

  it('should have minimum touch target size for expand button', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    expect(expandButton.className).toContain('min-h-[44px]');
    expect(expandButton.className).toContain('min-w-[44px]');
  });

  it('should be keyboard accessible with focus styles', () => {
    render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    expect(expandButton.className).toContain('focus:outline-none');
    expect(expandButton.className).toContain('focus:ring-2');
  });

  it('should rotate chevron icon when expanded', () => {
    const { container } = render(
      <ServiceCard 
        {...defaultProps} 
        details="Información adicional sobre el servicio"
      />
    );
    
    const expandButton = screen.getByText('Ver más detalles');
    fireEvent.click(expandButton);
    
    // After expansion, check that the icon wrapper has the rotate class
    const iconWrapper = container.querySelector('.rotate-180');
    expect(iconWrapper).toBeInTheDocument();
  });
});
