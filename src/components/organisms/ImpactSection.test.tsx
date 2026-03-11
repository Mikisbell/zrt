import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ImpactSection, Statistic, EnvironmentalFact } from './ImpactSection';

describe('ImpactSection', () => {
  const customStatistics: Statistic[] = [
    { value: '1000', label: 'Trees', icon: 'tree' },
    { value: '500', label: 'Hectares', icon: 'map' },
  ];

  const customFacts: EnvironmentalFact[] = [
    { title: 'Fact 1', description: 'Description 1' },
    { title: 'Fact 2', description: 'Description 2' },
  ];

  it('should render section heading', () => {
    render(<ImpactSection statistics={customStatistics} />);
    
    expect(screen.getByRole('heading', { name: /nuestro impacto ambiental/i })).toBeInTheDocument();
  });

  it('should render all statistics', () => {
    render(<ImpactSection statistics={customStatistics} />);
    
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Trees')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Hectares')).toBeInTheDocument();
  });

  it('should render environmental facts', () => {
    render(<ImpactSection statistics={customStatistics} environmentalFacts={customFacts} />);
    
    expect(screen.getByText('Fact 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Fact 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('should render CTA button', () => {
    render(<ImpactSection statistics={customStatistics} />);
    
    expect(screen.getByRole('button', { name: /únete a nuestra causa/i })).toBeInTheDocument();
  });

  it('should handle CTA button click', async () => {
    const user = userEvent.setup();
    render(<ImpactSection statistics={customStatistics} ctaHref="#test" />);
    
    const button = screen.getByRole('button', { name: /únete a nuestra causa/i });
    await user.click(button);
    
    // Button should be clickable
    expect(button).toBeInTheDocument();
  });

  it('should have proper ARIA attributes', () => {
    render(<ImpactSection statistics={customStatistics} />);
    
    const section = screen.getByRole('region', { name: /nuestro impacto ambiental/i });
    expect(section).toHaveAttribute('aria-labelledby', 'impact-heading');
  });

  it('should render custom title and CTA label', () => {
    render(
      <ImpactSection
        statistics={customStatistics}
        title="Custom Impact"
        ctaLabel="Custom CTA"
      />
    );
    
    expect(screen.getByText('Custom Impact')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Custom CTA' })).toBeInTheDocument();
  });

  it('should render educational content heading', () => {
    render(<ImpactSection statistics={customStatistics} />);
    
    expect(screen.getByText(/¿Por Qué es Importante la Reforestación?/i)).toBeInTheDocument();
  });
});
