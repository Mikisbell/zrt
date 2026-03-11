import React from 'react';
import { cn } from '@/lib/utils';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption';

export interface TextProps {
  variant?: TextVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug',
  h4: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-snug',
  h5: 'text-lg md:text-xl lg:text-2xl font-medium leading-normal',
  h6: 'text-base md:text-lg lg:text-xl font-medium leading-normal',
  body: 'text-base leading-relaxed',
  small: 'text-sm leading-relaxed',
  caption: 'text-xs leading-normal',
};

const defaultElements: Record<TextVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'p',
  caption: 'span',
};

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as,
  className,
  children,
}) => {
  const Component = as || defaultElements[variant];

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
};

Text.displayName = 'Text';
