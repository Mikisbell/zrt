import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatCard } from './StatCard';

describe('StatCard', () => {
  const defaultProps = {
    value: '10,000+',
    label: 'Árboles Plantados',
  };

  it('should render value and label', () => {
    render(<StatCard {...defaultProps} />);
    expect(screen.getByText('10,000+')).toBeInTheDocument();
    expect(screen.getByText('Árboles Plantados')).toBeInTheDocument();
  });

  it('should render icon when provided', () => {
    render(<StatCard {...defaultProps} icon="tree" />);
    const icon = screen.getByLabelText('tree');
    expect(icon).toBeInTheDocument();
  });

  it('should not render icon container when icon is not provided', () => {
    const { container } = render(<StatCard {...defaultProps} />);
    const iconContainer = container.querySelector('.bg-green-100.rounded-full');
    expect(iconContainer).not.toBeInTheDocument();
  });

  it('should render description when provided', () => {
    render(
      <StatCard 
        {...defaultProps} 
        description="En los últimos 5 años"
      />
    );
    expect(screen.getByText('En los últimos 5 años')).toBeInTheDocument();
  });

  it('should not render description when not provided', () => {
    const { container } = render(<StatCard {...defaultProps} />);
    const description = container.querySelector('.text-sm.text-gray-600');
    expect(description).not.toBeInTheDocument();
  });

  it('should have proper aria-label for value', () => {
    render(<StatCard {...defaultProps} />);
    const valueElement = screen.getByLabelText('10,000+ Árboles Plantados');
    expect(valueElement).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <StatCard {...defaultProps} className="custom-class" />
    );
    const card = container.firstChild;
    expect(card).toHaveClass('custom-class');
  });

  it('should have shadow and hover effects', () => {
    const { container } = render(<StatCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('shadow-md');
    expect(card.className).toContain('hover:shadow-lg');
  });

  it('should center align content', () => {
    const { container } = render(<StatCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('text-center');
  });

  it('should display value in large green text', () => {
    render(<StatCard {...defaultProps} />);
    const valueElement = screen.getByText('10,000+');
    expect(valueElement.className).toContain('text-4xl');
    expect(valueElement.className).toContain('font-bold');
    expect(valueElement.className).toContain('text-green-600');
  });

  it('should display label in semibold text', () => {
    render(<StatCard {...defaultProps} />);
    const labelElement = screen.getByText('Árboles Plantados');
    expect(labelElement.className).toContain('text-lg');
    expect(labelElement.className).toContain('font-semibold');
  });

  it('should display description in small gray text', () => {
    render(
      <StatCard 
        {...defaultProps} 
        description="En los últimos 5 años"
      />
    );
    const descriptionElement = screen.getByText('En los últimos 5 años');
    expect(descriptionElement.className).toContain('text-sm');
    expect(descriptionElement.className).toContain('text-gray-600');
  });
});
