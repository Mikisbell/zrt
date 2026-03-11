import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField } from './FormField';

describe('FormField', () => {
  it('should render with label', () => {
    render(<FormField label="Name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('should display required indicator when required prop is true', () => {
    render(<FormField label="Email" required />);
    const requiredIndicator = screen.getByLabelText('required');
    expect(requiredIndicator).toBeInTheDocument();
    expect(requiredIndicator).toHaveTextContent('*');
  });

  it('should display error message when error prop is provided', () => {
    render(<FormField label="Email" error="Email is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });

  it('should display helper text when provided and no error', () => {
    render(<FormField label="Password" helperText="Must be at least 8 characters" />);
    expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
  });

  it('should not display helper text when error is present', () => {
    render(
      <FormField 
        label="Password" 
        helperText="Must be at least 8 characters"
        error="Password is too short"
      />
    );
    expect(screen.queryByText('Must be at least 8 characters')).not.toBeInTheDocument();
    expect(screen.getByText('Password is too short')).toBeInTheDocument();
  });

  it('should render textarea when textarea prop is true', () => {
    render(<FormField label="Message" textarea />);
    const textarea = screen.getByLabelText('Message');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('should render input when textarea prop is false', () => {
    render(<FormField label="Name" />);
    const input = screen.getByLabelText('Name');
    expect(input.tagName).toBe('INPUT');
  });

  it('should have minimum height of 44px for accessibility', () => {
    render(<FormField label="Name" />);
    const input = screen.getByLabelText('Name');
    expect(input.className).toContain('min-h-[44px]');
  });

  it('should apply error styles when error is present', () => {
    render(<FormField label="Email" error="Invalid email" />);
    const input = screen.getByLabelText('Email');
    expect(input.className).toContain('border-red-500');
  });

  it('should apply normal styles when no error', () => {
    render(<FormField label="Email" />);
    const input = screen.getByLabelText('Email');
    expect(input.className).toContain('border-gray-300');
  });

  it('should set aria-invalid to true when error is present', () => {
    render(<FormField label="Email" error="Invalid email" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('should set aria-required when required prop is true', () => {
    render(<FormField label="Email" required />);
    const input = screen.getByLabelText(/Email/);
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('should link error message with aria-describedby', () => {
    render(<FormField label="Email" error="Invalid email" id="email-field" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-describedby', 'email-field-error');
  });

  it('should link helper text with aria-describedby when no error', () => {
    render(<FormField label="Email" helperText="Enter your email" id="email-field" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-describedby', 'email-field-helper');
  });

  it('should apply minimum height to textarea', () => {
    render(<FormField label="Message" textarea />);
    const textarea = screen.getByLabelText('Message');
    expect(textarea.className).toContain('min-h-[120px]');
  });

  it('should allow textarea to be resizable vertically', () => {
    render(<FormField label="Message" textarea />);
    const textarea = screen.getByLabelText('Message');
    expect(textarea.className).toContain('resize-y');
  });
});
