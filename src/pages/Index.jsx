import React from 'react';
import LMSNavbar from '@/components/LMSNavbar';
import HeroSection from '@/components/HeroSection';
import AboutAthena from '@/components/AboutAthena';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturesGrid from '@/components/FeaturesGrid';
import DiscoverAthenaSection from '@/components/DiscoverAthenaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RealResultsSection from '@/components/RealResultsSection';
import FAQSection from '@/components/FAQSection';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const handleHumanAgentRequest = () => {
    // This could trigger opening a contact form, scheduling a demo, or other lead generation actions
    console.log('Human agent requested - this could trigger lead generation flow');
    
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden pt-16">
      <LMSNavbar />
      <main className="w-full">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl mx-auto w-full">
          <HeroSection />
          <AboutAthena />
          <WhyChooseUs />
          <FeaturesGrid />
          <DiscoverAthenaSection />
          <TestimonialsSection />
          <RealResultsSection />
          <FAQSection />
          <ContactUs />
        </div>
      </main>
      <Footer />
      <Chatbot onRequestHumanAgent={handleHumanAgentRequest} />
    </div>
  );
};

export default Index;
