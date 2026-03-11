// Organization types
export interface Organization {
  name: string;
  legalName: string;
  id: string;
  location: {
    district: string;
    city: string;
    region: string;
    country: string;
  };
  registration: {
    status: 'active' | 'inactive';
    validUntil: Date;
  };
  mission: string;
  contact: ContactInfo;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Component types
export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}
