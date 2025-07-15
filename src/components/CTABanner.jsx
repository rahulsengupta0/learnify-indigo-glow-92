import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';
import DemoModal from './DemoModal';

const CTABanner = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-lms-primary via-lms-primary/90 to-lms-secondary z-0"></div>

        {/* Enhanced decorative elements */}
        <DecorativeShapes variant="primary" intensity="high" />

        <motion.div
          className="section-container relative z-10 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 text-center lg:text-left text-white">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Ready to Transform Your <br className="hidden lg:block" />
                <span className="text-white/90 relative">
                  Educational Institution?
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full"></span>
                </span>
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl mb-8 opacity-90 max-w-xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Join hundreds of institutions already using Athena LMS to deliver
                exceptional learning experiences. Start your free trial today.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Button
                  size="lg"
                  className="bg-white text-lms-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-lg group"
                >
                  <span>Start Free Trial</span>
                  <Rocket className="ml-2 group-hover:rotate-12 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lms-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-lg group"
                  onClick={() => setDemoOpen(true)}
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            <div className="lg:col-span-2 hidden lg:block">
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-6"></div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 relative">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Educational institution team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-lms-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">500+</span>
                      </div>
                      <div className="text-lms-dark">
                        <p className="font-bold">Institutions</p>
                        <p className="text-sm text-gray-600">Trust Athena</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <DemoModal
        open={demoOpen}
        onOpenChange={setDemoOpen}
      />
    </>
  );
};

export default CTABanner;