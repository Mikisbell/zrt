import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string; // Hacer alt obligatorio para accesibilidad
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  alt,
  className,
  ...props
}) => {
  return (
    <NextImage
      alt={alt}
      className={cn('object-cover', className)}
      {...props}
    />
  );
};

Image.displayName = 'Image';
