import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NavigationLink } from './NavigationLink';

describe('NavigationLink', () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
    // Mock window.history.pushState
    window.history.pushState = vi.fn();
  });

  it('should render with children text', () => {
    render(<NavigationLink href="#test">Test Link</NavigationLink>);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('should have minimum touch target size of 44x44px', () => {
    render(<NavigationLink href="#test">Link</NavigationLink>);
    const link = screen.getByText('Link');
    const styles = window.getComputedStyle(link);
    
    // Check min-height and min-width are set
    expect(link.className).toContain('min-h-[44px]');
    expect(link.className).toContain('min-w-[44px]');
  });

  it('should apply active styles when active prop is true', () => {
    render(<NavigationLink href="#test" active>Active Link</NavigationLink>);
    const link = screen.getByText('Active Link');
    expect(link.className).toContain('text-green-600');
    expect(link.className).toContain('bg-green-50');
  });

  it('should apply inactive styles when active prop is false', () => {
    render(<NavigationLink href="#test" active={false}>Inactive Link</NavigationLink>);
    const link = screen.getByText('Inactive Link');
    expect(link.className).toContain('text-gray-700');
  });

  it('should perform smooth scroll when clicking anchor link', () => {
    // Create a mock element with id
    const mockElement = document.createElement('div');
    mockElement.id = 'section';
    document.body.appendChild(mockElement);

    render(<NavigationLink href="#section">Go to Section</NavigationLink>);
    const link = screen.getByText('Go to Section');
    
    fireEvent.click(link);
    
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
    
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '#section');
    
    document.body.removeChild(mockElement);
  });

  it('should not perform smooth scroll for non-anchor links', () => {
    render(<NavigationLink href="/external">External Link</NavigationLink>);
    const link = screen.getByText('External Link');
    
    // Should not prevent default for non-anchor links
    const clickEvent = fireEvent.click(link);
    expect(clickEvent).toBe(true);
  });

  it('should call custom onClick handler', () => {
    const handleClick = vi.fn();
    const mockElement = document.createElement('div');
    mockElement.id = 'test';
    document.body.appendChild(mockElement);

    render(
      <NavigationLink href="#test" onClick={handleClick}>
        Click Me
      </NavigationLink>
    );
    
    const link = screen.getByText('Click Me');
    fireEvent.click(link);
    
    expect(handleClick).toHaveBeenCalled();
    
    document.body.removeChild(mockElement);
  });

  it('should be keyboard accessible with focus styles', () => {
    render(<NavigationLink href="#test">Keyboard Link</NavigationLink>);
    const link = screen.getByText('Keyboard Link');
    
    expect(link.className).toContain('focus:outline-none');
    expect(link.className).toContain('focus:ring-2');
    expect(link.className).toContain('focus:ring-green-500');
  });

  it('should handle missing target element gracefully', () => {
    render(<NavigationLink href="#nonexistent">Missing Target</NavigationLink>);
    const link = screen.getByText('Missing Target');
    
    // Should not throw error when target doesn't exist
    expect(() => fireEvent.click(link)).not.toThrow();
  });
});
