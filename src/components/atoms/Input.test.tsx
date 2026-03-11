import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { describe, it, expect } from 'vitest';

describe('Input Component', () => {
  it('should render input field', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText(/enter text/i);
    expect(input).toBeInTheDocument();
  });

  it('should render with label', () => {
    render(<Input label="Name" />);
    const label = screen.getByText(/name/i);
    const input = screen.getByLabelText(/name/i);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('should display error message when error prop is provided', () => {
    render(<Input error="This field is required" />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent('This field is required');
  });

  it('should have aria-invalid when error is present', () => {
    render(<Input error="Error message" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('should have aria-describedby linking to error message', () => {
    render(<Input error="Error message" id="test-input" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
  });

  it('should have minimum touch target height of 44px', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('min-h-[44px]');
  });

  it('should have focus styles for accessibility', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('focus:outline-none', 'focus:ring-2');
  });

  it('should apply error styles when error is present', () => {
    render(<Input error="Error" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-500');
  });

  it('should accept custom className', () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });
});
