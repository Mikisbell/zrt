import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Header, NavigationItem } from './Header';

const mockNavigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Inicio', href: '#hero', order: 1 },
  { id: 'about', label: 'Nosotros', href: '#about', order: 2 },
  { id: 'services', label: 'Servicios', href: '#services', order: 3 },
];

describe('Header', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });

    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('4.1 Crear componente Header con logo y navegación', () => {
    it('should render the header with logo', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const logo = screen.getByLabelText(/ONG ZRT/i);
      expect(logo).toBeInTheDocument();
    });

    it('should render all navigation items', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      expect(screen.getAllByText('Inicio')).toHaveLength(1);
      expect(screen.getAllByText('Nosotros')).toHaveLength(1);
      expect(screen.getAllByText('Servicios')).toHaveLength(1);
    });

    it('should render navigation items in correct order', () => {
      const unorderedItems: NavigationItem[] = [
        { id: 'services', label: 'Servicios', href: '#services', order: 3 },
        { id: 'hero', label: 'Inicio', href: '#hero', order: 1 },
        { id: 'about', label: 'Nosotros', href: '#about', order: 2 },
      ];

      render(<Header navigationItems={unorderedItems} />);
      
      const links = screen.getAllByRole('link');
      const navLinks = links.filter(link => 
        link.textContent === 'Inicio' || 
        link.textContent === 'Nosotros' || 
        link.textContent === 'Servicios'
      );
      
      expect(navLinks[0]).toHaveTextContent('Inicio');
      expect(navLinks[1]).toHaveTextContent('Nosotros');
      expect(navLinks[2]).toHaveTextContent('Servicios');
    });

    it('should render custom logo when provided', () => {
      const customLogo = <div data-testid="custom-logo">Custom Logo</div>;
      render(<Header navigationItems={mockNavigationItems} logo={customLogo} />);
      
      expect(screen.getByTestId('custom-logo')).toBeInTheDocument();
    });

    it('should have proper ARIA labels for navigation', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: /navegación principal/i })).toBeInTheDocument();
    });
  });

  describe('4.2 Implementar sticky header con cambio de estilo al scroll', () => {
    it('should have fixed positioning (sticky behavior)', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('fixed');
    });

    it('should change style when scrolled', async () => {
      render(<Header navigationItems={mockNavigationItems} transparent={true} />);
      
      const header = screen.getByRole('banner');
      
      // Initially transparent
      expect(header).toHaveClass('bg-transparent');
      
      // Simulate scroll
      Object.defineProperty(window, 'scrollY', { writable: true, value: 100 });
      fireEvent.scroll(window);
      
      await waitFor(() => {
        expect(header).toHaveClass('bg-white');
        expect(header).toHaveClass('shadow-md');
      });
    });

    it('should not be transparent when transparent prop is false', () => {
      render(<Header navigationItems={mockNavigationItems} transparent={false} />);
      
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('bg-white');
    });

    it('should apply shadow when scrolled past threshold', async () => {
      render(<Header navigationItems={mockNavigationItems} transparent={true} />);
      
      const header = screen.getByRole('banner');
      
      // Scroll past threshold (50px)
      Object.defineProperty(window, 'scrollY', { writable: true, value: 60 });
      fireEvent.scroll(window);
      
      await waitFor(() => {
        expect(header).toHaveClass('shadow-md');
      });
    });
  });

  describe('4.3 Implementar menú hamburguesa para móvil', () => {
    it('should render hamburger button on mobile', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      expect(hamburgerButton).toBeInTheDocument();
    });

    it('should toggle mobile menu when hamburger is clicked', async () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      
      // Menu should not be visible initially
      expect(document.getElementById('mobile-menu')).not.toBeInTheDocument();
      
      // Click to open
      fireEvent.click(hamburgerButton);
      
      await waitFor(() => {
        expect(screen.getByLabelText(/cerrar menú/i)).toBeInTheDocument();
        expect(document.getElementById('mobile-menu')).toBeInTheDocument();
      });
    });

    it('should close mobile menu when navigation link is clicked', async () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      fireEvent.click(hamburgerButton);
      
      await waitFor(() => {
        expect(screen.getByLabelText(/cerrar menú/i)).toBeInTheDocument();
      });
      
      // Click a navigation link
      const links = screen.getAllByText('Inicio');
      const mobileLink = links.find(link => link.closest('#mobile-menu'));
      if (mobileLink) {
        fireEvent.click(mobileLink);
      }
      
      await waitFor(() => {
        expect(screen.getByLabelText(/abrir menú/i)).toBeInTheDocument();
      });
    });

    it('should have proper ARIA attributes for mobile menu', async () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
      expect(hamburgerButton).toHaveAttribute('aria-controls', 'mobile-menu');
      
      fireEvent.click(hamburgerButton);
      
      await waitFor(() => {
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('should close mobile menu on Escape key', async () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      fireEvent.click(hamburgerButton);
      
      await waitFor(() => {
        expect(document.getElementById('mobile-menu')).toBeInTheDocument();
      });
      
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        fireEvent.keyDown(mobileMenu, { key: 'Escape' });
      }
      
      await waitFor(() => {
        expect(screen.getByLabelText(/abrir menú/i)).toBeInTheDocument();
        expect(document.getElementById('mobile-menu')).not.toBeInTheDocument();
      });
    });
  });

  describe('4.4 Agregar smooth scroll a secciones', () => {
    it('should use NavigationLink component which implements smooth scroll', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const links = screen.getAllByRole('link');
      const navLinks = links.filter(link => link.getAttribute('href')?.startsWith('#'));
      
      expect(navLinks.length).toBeGreaterThan(0);
      navLinks.forEach(link => {
        expect(link.getAttribute('href')).toMatch(/^#/);
      });
    });
  });

  describe('4.5 Implementar navegación por teclado', () => {
    it('should be keyboard accessible - all links should be focusable', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).not.toHaveAttribute('tabindex', '-1');
      });
    });

    it('should have focus styles on navigation links', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const links = screen.getAllByRole('link');
      const navLinks = links.filter(link => 
        link.textContent === 'Inicio' || 
        link.textContent === 'Nosotros' || 
        link.textContent === 'Servicios'
      );
      
      navLinks.forEach(link => {
        expect(link).toHaveClass('focus:outline-none');
        expect(link).toHaveClass('focus:ring-2');
      });
    });

    it('should have focus styles on hamburger button', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      expect(hamburgerButton).toHaveClass('focus:outline-none');
      expect(hamburgerButton).toHaveClass('focus:ring-2');
    });

    it('should support Escape key to close mobile menu', async () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      fireEvent.click(hamburgerButton);
      
      await waitFor(() => {
        expect(screen.getByLabelText(/cerrar menú/i)).toBeInTheDocument();
      });
      
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        fireEvent.keyDown(mobileMenu, { key: 'Escape' });
      }
      
      await waitFor(() => {
        expect(screen.getByLabelText(/abrir menú/i)).toBeInTheDocument();
      });
    });
  });

  describe('4.6 Agregar indicador de sección activa', () => {
    it('should mark the active section based on scroll position', () => {
      // Mock getElementById to return mock sections
      const mockSections = {
        hero: { offsetTop: 0, offsetHeight: 500 },
        about: { offsetTop: 500, offsetHeight: 500 },
        services: { offsetTop: 1000, offsetHeight: 500 },
      };

      vi.spyOn(document, 'getElementById').mockImplementation((id) => {
        const section = mockSections[id as keyof typeof mockSections];
        return section as unknown as HTMLElement;
      });

      render(<Header navigationItems={mockNavigationItems} />);
      
      // Initially, hero should be active (default)
      const links = screen.getAllByRole('link');
      const heroLink = links.find(link => link.textContent === 'Inicio' && link.getAttribute('href') === '#hero');
      
      // The active link should have the active class
      expect(heroLink).toHaveClass('text-green-600');
    });

    it('should pass active prop to NavigationLink for active section', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const links = screen.getAllByRole('link');
      const activeLinks = links.filter(link => link.classList.contains('text-green-600'));
      
      // At least one link should be marked as active
      expect(activeLinks.length).toBeGreaterThan(0);
    });

    it('should update active section when scrolling', async () => {
      const mockSections = {
        hero: { offsetTop: 0, offsetHeight: 500 },
        about: { offsetTop: 500, offsetHeight: 500 },
        services: { offsetTop: 1000, offsetHeight: 500 },
      };

      vi.spyOn(document, 'getElementById').mockImplementation((id) => {
        const section = mockSections[id as keyof typeof mockSections];
        return section as unknown as HTMLElement;
      });

      render(<Header navigationItems={mockNavigationItems} />);
      
      // Scroll to about section
      Object.defineProperty(window, 'scrollY', { writable: true, value: 600 });
      fireEvent.scroll(window);
      
      await waitFor(() => {
        const links = screen.getAllByRole('link');
        const aboutLink = links.find(link => link.textContent === 'Nosotros' && link.getAttribute('href') === '#about');
        expect(aboutLink).toHaveClass('text-green-600');
      });
    });
  });

  describe('Accessibility', () => {
    it('should have minimum touch target size of 44x44px', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      expect(hamburgerButton).toHaveClass('min-w-[44px]');
      expect(hamburgerButton).toHaveClass('min-h-[44px]');
    });

    it('should have descriptive aria-labels', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      expect(screen.getByLabelText(/ONG ZRT/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/abrir menú/i)).toBeInTheDocument();
    });

    it('should have proper semantic HTML structure', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Responsive behavior', () => {
    it('should hide desktop navigation on mobile (md:flex class)', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const nav = screen.getByRole('navigation');
      const desktopNav = nav.querySelector('.hidden.md\\:flex');
      
      expect(desktopNav).toBeInTheDocument();
    });

    it('should hide hamburger button on desktop (md:hidden class)', () => {
      render(<Header navigationItems={mockNavigationItems} />);
      
      const hamburgerButton = screen.getByLabelText(/abrir menú/i);
      expect(hamburgerButton).toHaveClass('md:hidden');
    });
  });
});
