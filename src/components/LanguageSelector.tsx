'use client';

import { useState, useEffect } from 'react';
import { Language, getCurrentLanguage, setLanguage, languageConfig } from '@/lib/i18n';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

/**
 * Language Selector Component
 * Permite al usuario cambiar el idioma de la interfaz
 * Validates: Requirements 11 (Contenido Multilingüe)
 */
export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<Language>(languageConfig.defaultLanguage);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentLang(getCurrentLanguage());
    
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail.language);
    };
    
    window.addEventListener('languagechange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange as EventListener);
    };
  }, []);

  if (!languageConfig.enabled) return null;

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setCurrentLang(lang);
    setIsOpen(false);
  };

  const languageNames: Record<Language, string> = {
    es: 'Español',
    en: 'English',
  };

  const languageFlags: Record<Language, string> = {
    es: '🇪🇸',
    en: '🇬🇧',
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-md',
          'min-w-[44px] min-h-[44px]',
          'bg-white/10 hover:bg-white/20',
          'text-white transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
        )}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg" aria-hidden="true">
          {languageFlags[currentLang]}
        </span>
        <span className="hidden sm:inline text-sm font-medium">
          {languageNames[currentLang]}
        </span>
        <Icon 
          name={isOpen ? 'chevron-up' : 'chevron-down'} 
          size={16} 
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown menu */}
          <div
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 overflow-hidden"
            role="menu"
            aria-orientation="vertical"
          >
            {languageConfig.supportedLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => handleLanguageChange(lang)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3',
                  'text-left text-gray-700 hover:bg-green-50',
                  'transition-colors duration-150',
                  'min-h-[44px]',
                  currentLang === lang && 'bg-green-100 font-semibold'
                )}
                role="menuitem"
                aria-current={currentLang === lang ? 'true' : undefined}
              >
                <span className="text-lg" aria-hidden="true">
                  {languageFlags[lang]}
                </span>
                <span>{languageNames[lang]}</span>
                {currentLang === lang && (
                  <Icon 
                    name="check" 
                    size={16} 
                    className="ml-auto text-green-600" 
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
