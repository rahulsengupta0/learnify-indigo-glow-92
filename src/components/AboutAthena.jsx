import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';

const AboutAthena = () => {
  const imageRef = useRef(null); // Removed the <HTMLDivElement> type annotation
  const isInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <section id="about-athena" className="bg-gradient-to-b from-white to-gray-50 py-12 relative overflow-hidden">
      <DecorativeShapes variant="secondary" intensity="subtle" />

      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4"
          >
            <h2 className="heading-lg">
              Driven by Purpose. <span className="text-lms-primary">Powered by Learning.</span>
            </h2>
            <p className="subtext">
              At Athena, we believe education should be accessible, practical, and transformative.
              Our mission is to empower learners with real-world skills that lead to real success.
            </p>
            <Link to="/about">
              <Button
                size="lg"
                className="btn-primary mt-4 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className={`relative w-full max-w-md ${isInView ? 'animate-fade-in' : ''}`}>
              {/* Modern illustration showing collaboration */}
              <div className="absolute inset-0 bg-lms-primary/10 rounded-2xl transform -rotate-3"></div>
              <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  alt="Team collaborating on learning platform"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-lms-primary/30 to-transparent opacity-60"></div>

                {/* Content card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm">
                  <p className="font-medium text-lms-dark">Our collaborative approach</p>
                  <p className="text-sm text-gray-600">Building the future of education together</p>
                </div>
              </div>

              {/* Animated circles */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-lms-primary/20 rounded-full animate-[float_6s_ease-in-out_infinite_0.5s] z-0"></div>
              <div className="absolute bottom-10 -left-5 w-10 h-10 bg-lms-primary/30 rounded-full animate-[float_7s_ease-in-out_infinite]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAthena;