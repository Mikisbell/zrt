import { render, screen } from '@testing-library/react';
import { Text } from './Text';
import { describe, it, expect } from 'vitest';

describe('Text Component', () => {
  it('should render with body variant by default', () => {
    render(<Text>Sample text</Text>);
    const text = screen.getByText(/sample text/i);
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('P');
  });

  it('should render h1 variant with correct tag', () => {
    render(<Text variant="h1">Heading 1</Text>);
    const heading = screen.getByText(/heading 1/i);
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveClass('text-4xl');
  });

  it('should render h2 variant with correct tag', () => {
    render(<Text variant="h2">Heading 2</Text>);
    const heading = screen.getByText(/heading 2/i);
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass('text-3xl');
  });

  it('should render h3 variant with correct tag', () => {
    render(<Text variant="h3">Heading 3</Text>);
    const heading = screen.getByText(/heading 3/i);
    expect(heading.tagName).toBe('H3');
    expect(heading).toHaveClass('text-2xl');
  });

  it('should support custom element with as prop', () => {
    render(<Text variant="h1" as="span">Custom element</Text>);
    const element = screen.getByText(/custom element/i);
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveClass('text-4xl');
  });

  it('should have responsive typography classes', () => {
    render(<Text variant="h1">Responsive heading</Text>);
    const heading = screen.getByText(/responsive heading/i);
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'lg:text-6xl');
  });

  it('should accept custom className', () => {
    render(<Text className="custom-class">Text</Text>);
    const text = screen.getByText(/text/i);
    expect(text).toHaveClass('custom-class');
  });

  it('should render small variant', () => {
    render(<Text variant="small">Small text</Text>);
    const text = screen.getByText(/small text/i);
    expect(text).toHaveClass('text-sm');
  });

  it('should render caption variant', () => {
    render(<Text variant="caption">Caption text</Text>);
    const text = screen.getByText(/caption text/i);
    expect(text).toHaveClass('text-xs');
  });
});
