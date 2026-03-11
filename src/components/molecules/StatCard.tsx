import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  description?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Icon name={icon} size={32} className="text-green-600" aria-hidden="true" />
          </div>
        </div>
      )}
      
      <div className="mb-2">
        <p className="text-4xl font-bold text-green-600" aria-label={`${value} ${label}`}>
          {value}
        </p>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {label}
      </h3>
      
      {description && (
        <p className="text-sm text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

StatCard.displayName = 'StatCard';
