import React from 'react';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import FeaturesGrid from '@/components/FeaturesGrid';
import AthenaPlatformFeatures from '@/components/AthenaPlatformFeatures';
import EnterpriseTeamsSection from '@/components/EnterpriseTeamsSection';
import FlexibleSolutions from '@/components/FlexibleSolutions';
import { motion } from 'framer-motion';

const Features = () => {
  const handleHumanAgentRequest = () => {
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-lms-primary/5 via-white to-lms-secondary/5 py-20">
          <div className="section-container">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-xl mb-6">
                Powerful Features for <span className="text-lms-primary">Modern Learning</span>
              </h1>
              <p className="subtext mb-8">
                Discover comprehensive learning management capabilities designed for institutions, 
                enterprises, and organizations of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl mx-auto w-full">
          <FeaturesGrid />
          <AthenaPlatformFeatures />
          <EnterpriseTeamsSection />
          <FlexibleSolutions />
        </div>
      </main>
      <Footer />
      <Chatbot onRequestHumanAgent={handleHumanAgentRequest} />
    </div>
  );
};

export default Features;
