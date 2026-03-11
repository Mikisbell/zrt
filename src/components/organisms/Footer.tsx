'use client';

import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { SocialShareButton } from '@/components/molecules/SocialShareButton';
import { cn } from '@/lib/utils';

export interface OrganizationInfo {
  name: string;
  legalName?: string;
  id: string;
  location: string;
  registrationValidity: string;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'whatsapp';
  url: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface FooterProps {
  organizationInfo?: OrganizationInfo;
  socialLinks?: SocialLink[];
  navigationLinks?: NavigationLink[];
  showSocialShare?: boolean;
  className?: string;
}

const defaultOrganizationInfo: OrganizationInfo = {
  name: 'ONG ZRT',
  legalName: 'Organización No Gubernamental ZRT',
  id: '20610820256',
  location: 'El Tambo, Huancayo, Junín, Perú',
  registrationValidity: 'Registro vigente hasta: 12 de Noviembre del 2034',
};

const defaultSocialLinks: SocialLink[] = [
  { platform: 'facebook', url: 'https://facebook.com/ongzrt' },
  { platform: 'twitter', url: 'https://twitter.com/ongzrt' },
  { platform: 'instagram', url: 'https://instagram.com/ongzrt' },
  { platform: 'whatsapp', url: 'https://wa.me/51999999999' },
];

const defaultNavigationLinks: NavigationLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Impacto', href: '#impact' },
  { label: 'Donar', href: '#donate' },
  { label: 'Contacto', href: '#contact' },
];

export const Footer: React.FC<FooterProps> = ({
  organizationInfo = defaultOrganizationInfo,
  socialLinks = defaultSocialLinks,
  navigationLinks = defaultNavigationLinks,
  showSocialShare = true,
  className,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNavigationClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer
      className={cn('bg-gray-900 text-white py-12', className)}
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Información de la organización */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="tree" size={32} className="text-green-500" aria-hidden="true" />
              <h3 className="text-2xl font-bold">{organizationInfo.name}</h3>
            </div>
            <p className="text-gray-400 mb-2">
              {organizationInfo.legalName}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              RUC: {organizationInfo.id}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              {organizationInfo.location}
            </p>
            <p className="text-xs text-gray-500 italic mt-3">
              {organizationInfo.registrationValidity}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <nav aria-label="Navegación del footer">
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigationClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left min-h-[44px] min-w-[44px] py-2"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[44px] min-h-[44px] w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`Visitar nuestro perfil de ${link.platform}`}
                >
                  <Icon
                    name={link.platform}
                    size={20}
                    className="text-white"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Compartir */}
          {showSocialShare && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Comparte</h4>
              <p className="text-gray-400 text-sm mb-4">
                Ayúdanos a difundir nuestra misión
              </p>
              <div className="flex flex-wrap gap-3">
                <SocialShareButton
                  platform="facebook"
                  url={typeof window !== 'undefined' ? window.location.href : ''}
                  title="ONG ZRT - Reforestación y Conservación Ambiental"
                />
                <SocialShareButton
                  platform="twitter"
                  url={typeof window !== 'undefined' ? window.location.href : ''}
                  title="ONG ZRT - Reforestación y Conservación Ambiental"
                />
                <SocialShareButton
                  platform="whatsapp"
                  url={typeof window !== 'undefined' ? window.location.href : ''}
                  title="ONG ZRT - Reforestación y Conservación Ambiental"
                />
              </div>
            </div>
          )}
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {organizationInfo.name}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => handleNavigationClick('#privacy')}
                className="text-gray-400 hover:text-white transition-colors duration-200 min-h-[44px] py-2"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => handleNavigationClick('#terms')}
                className="text-gray-400 hover:text-white transition-colors duration-200 min-h-[44px] py-2"
              >
                Términos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
