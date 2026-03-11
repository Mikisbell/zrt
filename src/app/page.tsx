import { Header } from '@/components/organisms/Header';
import { HeroSection } from '@/components/organisms/HeroSection';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ServicesSection } from '@/components/organisms/ServicesSection';
import { ImpactSection } from '@/components/organisms/ImpactSection';
import { DonationSection } from '@/components/organisms/DonationSection';
import { ContactSection } from '@/components/organisms/ContactSection';
import { Footer } from '@/components/organisms/Footer';
import {
  heroContent,
  aboutContent,
  servicesContent,
  impactStats,
  environmentalFacts,
  donationContent,
  contactContent,
  organizationInfo,
  socialLinks,
  navigationItems,
} from '@/lib/content';

export default function Home() {
  return (
    <>
      <Header navigationItems={navigationItems} transparent />
      
      <main className="overflow-x-hidden">
        <HeroSection {...heroContent} />
        
        <AboutSection
          mission={aboutContent.mission}
          activities={aboutContent.activities}
        />
        
        <ServicesSection services={servicesContent} />
        
        <ImpactSection
          statistics={impactStats}
          environmentalFacts={environmentalFacts}
        />
        
        <DonationSection
          title={donationContent.title}
          description={donationContent.description}
          impactMessage={donationContent.impactMessage}
          suggestedAmounts={donationContent.suggestedAmounts}
          trustIndicators={donationContent.trustIndicators}
          donationUrl={donationContent.paymentUrl}
        />
        
        <ContactSection
          title={contactContent.title}
          description={contactContent.description}
          alternativeContacts={contactContent.alternativeContacts}
        />
      </main>
      
      <Footer
        organizationInfo={organizationInfo}
        socialLinks={socialLinks}
        navigationLinks={navigationItems}
        showSocialShare
      />
    </>
  );
}
