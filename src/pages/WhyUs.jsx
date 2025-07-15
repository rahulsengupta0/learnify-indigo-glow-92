import React from 'react';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import DemoShowcaseSection from '@/components/DemoShowcaseSection';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden pt-16">
      <LMSNavbar />
      <main className="w-full">
        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="heading-xl mb-6">
                Why Choose <span className="text-lms-primary">Athena</span>?
              </h1>
              <p className="subtext text-xl text-gray-600 leading-relaxed">
                Discover how Athena sets itself apart in the learning management landscape.
                Our platform combines cutting-edge technology with intuitive design to deliver
                exceptional educational experiences that drive real results for institutions and learners alike.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Demo Showcase Section - moved from homepage */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl mx-auto w-full">
          <DemoShowcaseSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs;