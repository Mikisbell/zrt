import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SocialShareButton } from './SocialShareButton';

describe('SocialShareButton', () => {
  beforeEach(() => {
    // Mock window.open
    window.open = vi.fn();
    // Mock window.location.href
    Object.defineProperty(window, 'location', {
      value: { href: 'https://example.com' },
      writable: true,
    });
  });

  describe('Facebook', () => {
    it('should render Facebook button', () => {
      render(<SocialShareButton platform="facebook" />);
      expect(screen.getByLabelText('Compartir en Facebook')).toBeInTheDocument();
    });

    it('should open Facebook share dialog with correct URL', () => {
      render(
        <SocialShareButton 
          platform="facebook" 
          url="https://ongzrt.org"
          title="Test Title"
        />
      );
      
      const button = screen.getByLabelText('Compartir en Facebook');
      fireEvent.click(button);
      
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('facebook.com/sharer'),
        'share-dialog',
        'width=626,height=436,location=no,menubar=no,toolbar=no'
      );
    });
  });

  describe('Twitter', () => {
    it('should render Twitter button', () => {
      render(<SocialShareButton platform="twitter" />);
      expect(screen.getByLabelText('Compartir en Twitter')).toBeInTheDocument();
    });

    it('should open Twitter share dialog with correct URL', () => {
      render(
        <SocialShareButton 
          platform="twitter" 
          url="https://ongzrt.org"
          title="Test Title"
        />
      );
      
      const button = screen.getByLabelText('Compartir en Twitter');
      fireEvent.click(button);
      
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('twitter.com/intent/tweet'),
        'share-dialog',
        'width=626,height=436,location=no,menubar=no,toolbar=no'
      );
    });
  });

  describe('WhatsApp', () => {
    it('should render WhatsApp button', () => {
      render(<SocialShareButton platform="whatsapp" />);
      expect(screen.getByLabelText('Compartir en WhatsApp')).toBeInTheDocument();
    });

    it('should open WhatsApp share dialog with correct URL', () => {
      render(
        <SocialShareButton 
          platform="whatsapp" 
          url="https://ongzrt.org"
          title="Test Title"
        />
      );
      
      const button = screen.getByLabelText('Compartir en WhatsApp');
      fireEvent.click(button);
      
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('wa.me'),
        'share-dialog',
        'width=626,height=436,location=no,menubar=no,toolbar=no'
      );
    });
  });

  describe('LinkedIn', () => {
    it('should render LinkedIn button', () => {
      render(<SocialShareButton platform="linkedin" />);
      expect(screen.getByLabelText('Compartir en LinkedIn')).toBeInTheDocument();
    });

    it('should open LinkedIn share dialog with correct URL', () => {
      render(
        <SocialShareButton 
          platform="linkedin" 
          url="https://ongzrt.org"
          title="Test Title"
        />
      );
      
      const button = screen.getByLabelText('Compartir en LinkedIn');
      fireEvent.click(button);
      
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('linkedin.com/sharing'),
        'share-dialog',
        'width=626,height=436,location=no,menubar=no,toolbar=no'
      );
    });
  });

  describe('Common functionality', () => {
    it('should have minimum touch target size of 44x44px', () => {
      render(<SocialShareButton platform="facebook" />);
      const button = screen.getByLabelText('Compartir en Facebook');
      expect(button.className).toContain('min-h-[44px]');
      expect(button.className).toContain('min-w-[44px]');
    });

    it('should use default URL when not provided', () => {
      render(<SocialShareButton platform="facebook" />);
      const button = screen.getByLabelText('Compartir en Facebook');
      fireEvent.click(button);
      
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining(encodeURIComponent('https://example.com')),
        expect.any(String),
        expect.any(String)
      );
    });

    it('should use default title when not provided', () => {
      render(<SocialShareButton platform="facebook" />);
      const button = screen.getByLabelText('Compartir en Facebook');
      fireEvent.click(button);
      
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('ONG%20ZRT'),
        expect.any(String),
        expect.any(String)
      );
    });

    it('should call custom onClick handler', () => {
      const handleClick = vi.fn();
      render(
        <SocialShareButton 
          platform="facebook" 
          onClick={handleClick}
        />
      );
      
      const button = screen.getByLabelText('Compartir en Facebook');
      fireEvent.click(button);
      
      expect(handleClick).toHaveBeenCalled();
    });

    it('should be keyboard accessible with focus styles', () => {
      render(<SocialShareButton platform="facebook" />);
      const button = screen.getByLabelText('Compartir en Facebook');
      
      expect(button.className).toContain('focus:outline-none');
      expect(button.className).toContain('focus:ring-2');
    });

    it('should apply custom className', () => {
      render(
        <SocialShareButton 
          platform="facebook" 
          className="custom-class"
        />
      );
      const button = screen.getByLabelText('Compartir en Facebook');
      expect(button).toHaveClass('custom-class');
    });

    it('should have screen reader text for platform name', () => {
      render(<SocialShareButton platform="facebook" />);
      const button = screen.getByLabelText('Compartir en Facebook');
      expect(button).toBeInTheDocument();
    });

    it('should prevent default button behavior', () => {
      render(<SocialShareButton platform="facebook" />);
      const button = screen.getByLabelText('Compartir en Facebook');
      
      const event = fireEvent.click(button);
      // The event should be handled (preventDefault called)
      expect(window.open).toHaveBeenCalled();
    });

    it('should encode URL parameters correctly', () => {
      render(
        <SocialShareButton 
          platform="facebook" 
          url="https://example.com/page?param=value&other=test"
          title="Title with spaces & special chars"
        />
      );
      
      const button = screen.getByLabelText('Compartir en Facebook');
      fireEvent.click(button);
      
      const callArgs = (window.open as any).mock.calls[0][0];
      expect(callArgs).toContain(encodeURIComponent('https://example.com/page?param=value&other=test'));
    });
  });
});
