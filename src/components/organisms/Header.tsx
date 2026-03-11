'use client';

import React, { useState, useEffect } from 'react';
import { NavigationLink } from '@/components/molecules/NavigationLink';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  order: number;
}

export interface HeaderProps {
  navigationItems?: NavigationItem[];
  logo?: React.ReactNode;
  transparent?: boolean;
  className?: string;
}

const defaultNavigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Inicio', href: '#hero', order: 1 },
  { id: 'about', label: 'Nosotros', href: '#about', order: 2 },
  { id: 'services', label: 'Servicios', href: '#services', order: 3 },
  { id: 'impact', label: 'Impacto', href: '#impact', order: 4 },
  { id: 'donate', label: 'Donar', href: '#donate', order: 5 },
  { id: 'contact', label: 'Contacto', href: '#contact', order: 6 },
];

export const Header: React.FC<HeaderProps> = ({
  navigationItems = defaultNavigationItems,
  logo,
  transparent = false,
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar sección activa basada en scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset para el header

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [navigationItems]);

  // Cerrar menú móvil al hacer clic en un link
  const handleNavigationClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Manejar navegación por teclado en el menú móvil
  const handleMobileMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  };

  // Estilos del header basados en estado de scroll
  const headerStyles = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled || !transparent
      ? 'bg-white shadow-md'
      : 'bg-transparent',
    className
  );

  const logoStyles = cn(
    'text-2xl font-bold transition-colors duration-300',
    isScrolled || !transparent ? 'text-green-600' : 'text-white'
  );

  return (
    <header className={headerStyles} role="banner">
      <nav
        className="container mx-auto px-4 py-4"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={logoStyles}>
            {logo || (
              <a
                href="#hero"
                className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md"
                aria-label="ONG ZRT - Ir al inicio"
              >
                <Icon name="tree" size={32} aria-hidden="true" />
                <span>ONG ZRT</span>
              </a>
            )}
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navigationItems
              .sort((a, b) => a.order - b.order)
              .map((item) => (
                <NavigationLink
                  key={item.id}
                  href={item.href}
                  active={activeSection === item.id}
                  className={cn(
                    'transition-colors duration-300',
                    isScrolled || !transparent
                      ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      : 'text-white hover:text-green-100 hover:bg-white/10',
                    activeSection === item.id && (isScrolled || !transparent) && 'text-green-600 bg-green-50',
                    activeSection === item.id && !isScrolled && transparent && 'text-white bg-white/20'
                  )}
                >
                  {item.label}
                </NavigationLink>
              ))}
          </div>

          {/* Botón Hamburguesa Móvil */}
          <button
            type="button"
            className={cn(
              'md:hidden min-w-[44px] min-h-[44px] p-2 rounded-md transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
              isScrolled || !transparent
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon
              name={isMobileMenuOpen ? 'close' : 'menu'}
              size={24}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
            onKeyDown={handleMobileMenuKeyDown}
          >
            <div className="flex flex-col gap-2 px-4">
              {navigationItems
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <NavigationLink
                    key={item.id}
                    href={item.href}
                    active={activeSection === item.id}
                    onClick={handleNavigationClick}
                    className="w-full text-left"
                  >
                    {item.label}
                  </NavigationLink>
                ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
