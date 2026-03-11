import React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ href, children, active = false, className, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Si es un link de ancla (#section), hacer smooth scroll
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          
          // Actualizar URL sin recargar la página
          window.history.pushState(null, '', href);
        }
      }
      
      // Llamar al onClick personalizado si existe
      onClick?.(e);
    };

    const baseStyles = 'min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-4 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md';
    
    const stateStyles = active
      ? 'text-green-600 bg-green-50'
      : 'hover:bg-gray-50/10';

    return (
      <a
        ref={ref}
        href={href}
        className={cn(baseStyles, stateStyles, className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavigationLink.displayName = 'NavigationLink';
