import React, { useState } from 'react';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  details,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <Icon name={icon} size={24} className="text-green-600" aria-hidden="true" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-3">
            {description}
          </p>
          
          {details && (
            <>
              <button
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                className="min-h-[44px] min-w-[44px] inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-3 py-2 transition-colors"
                aria-expanded={isExpanded}
                aria-controls={`details-${title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {isExpanded ? 'Ver menos' : 'Ver más detalles'}
                <Icon
                  name="chevron-down"
                  size={20}
                  className={cn(
                    'transition-transform duration-300',
                    isExpanded && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </button>
              
              <div
                id={`details-${title.replace(/\s+/g, '-').toLowerCase()}`}
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                )}
                aria-hidden={!isExpanded}
              >
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-700">
                    {details}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';
