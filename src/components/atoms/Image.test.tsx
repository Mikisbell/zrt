import { render, screen } from '@testing-library/react';
import { Image } from './Image';
import { describe, it, expect } from 'vitest';

describe('Image Component', () => {
  it('should render image with required alt text', () => {
    render(<Image src="/test.jpg" alt="Test image" width={100} height={100} />);
    const image = screen.getByAltText(/test image/i);
    expect(image).toBeInTheDocument();
  });

  it('should have alt attribute for accessibility', () => {
    render(<Image src="/test.jpg" alt="Accessible image" width={100} height={100} />);
    const image = screen.getByAltText(/accessible image/i);
    expect(image).toHaveAttribute('alt', 'Accessible image');
  });

  it('should apply object-cover class by default', () => {
    render(<Image src="/test.jpg" alt="Test" width={100} height={100} />);
    const image = screen.getByAltText(/test/i);
    expect(image).toHaveClass('object-cover');
  });

  it('should accept custom className', () => {
    render(<Image src="/test.jpg" alt="Test" width={100} height={100} className="custom-class" />);
    const image = screen.getByAltText(/test/i);
    expect(image).toHaveClass('custom-class', 'object-cover');
  });

  it('should support priority loading for above-the-fold images', () => {
    render(<Image src="/hero.jpg" alt="Hero" width={1920} height={1080} priority />);
    const image = screen.getByAltText(/hero/i);
    expect(image).toBeInTheDocument();
  });

  it('should support responsive sizes', () => {
    render(
      <Image 
        src="/responsive.jpg" 
        alt="Responsive" 
        width={800} 
        height={600}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    );
    const image = screen.getByAltText(/responsive/i);
    expect(image).toBeInTheDocument();
  });
});
