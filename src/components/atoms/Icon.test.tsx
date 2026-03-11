import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { describe, it, expect } from 'vitest';

describe('Icon Component', () => {
  it('should render icon with default size', () => {
    render(<Icon name="tree" aria-label="Tree icon" />);
    const icon = screen.getByRole('img', { name: /tree icon/i });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });

  it('should render icon with custom size', () => {
    render(<Icon name="heart" size={32} aria-label="Heart icon" />);
    const icon = screen.getByRole('img', { name: /heart icon/i });
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
  });

  it('should have aria-label for accessibility', () => {
    render(<Icon name="leaf" aria-label="Leaf icon" />);
    const icon = screen.getByRole('img', { name: /leaf icon/i });
    expect(icon).toHaveAttribute('aria-label', 'Leaf icon');
  });

  it('should use icon name as default aria-label', () => {
    render(<Icon name="water" />);
    const icon = screen.getByRole('img', { name: /water/i });
    expect(icon).toHaveAttribute('aria-label', 'water');
  });

  it('should accept custom className', () => {
    render(<Icon name="sun" className="custom-class" aria-label="Sun icon" />);
    const icon = screen.getByRole('img', { name: /sun icon/i });
    expect(icon).toHaveClass('custom-class');
  });

  it('should render different icon types', () => {
    const { rerender } = render(<Icon name="menu" aria-label="Menu icon" />);
    expect(screen.getByRole('img', { name: /menu icon/i })).toBeInTheDocument();

    rerender(<Icon name="close" aria-label="Close icon" />);
    expect(screen.getByRole('img', { name: /close icon/i })).toBeInTheDocument();

    rerender(<Icon name="email" aria-label="Email icon" />);
    expect(screen.getByRole('img', { name: /email icon/i })).toBeInTheDocument();
  });

  it('should return null for non-existent icon', () => {
    const { container } = render(<Icon name="nonexistent" aria-label="Non-existent" />);
    expect(container.firstChild).toBeNull();
  });
});
