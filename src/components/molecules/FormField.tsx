import React from 'react';
import { Input, InputProps } from '@/components/atoms/Input';
import { cn } from '@/lib/utils';

export interface FormFieldProps extends Omit<InputProps, 'error'> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  textarea?: boolean;
}

export const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, error, helperText, required, textarea = false, className, id, ...props }, ref) => {
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseInputStyles = 'min-h-[44px] w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
    
    const stateStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-green-500 focus:ring-green-500';

    const textareaStyles = textarea ? 'min-h-[120px] resize-y' : '';

    return (
      <div className="w-full">
        <label
          htmlFor={fieldId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
        </label>
        
        {textarea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={fieldId}
            className={cn(baseInputStyles, stateStyles, textareaStyles, className)}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined
            }
            aria-required={required}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={fieldId}
            className={cn(baseInputStyles, stateStyles, className)}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined
            }
            aria-required={required}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        
        {!error && helperText && (
          <p
            id={`${fieldId}-helper`}
            className="mt-2 text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
        
        {error && (
          <p
            id={`${fieldId}-error`}
            className="mt-2 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
