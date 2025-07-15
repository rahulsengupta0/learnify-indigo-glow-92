import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DiscoverAthenaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-lms-dark leading-tight">
              Discover How <span className="text-lms-primary">Athena</span> Empowers Your Institution
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Athena offers scalable, intelligent learning solutions tailored to schools, colleges, and corporate teams.
              With personalized experiences, real-time progress tracking, and intuitive tools, you'll see real impact from day one.
            </p>

            <Button
              size="lg"
              className="bg-lms-primary hover:bg-lms-primary/90 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Main image container with subtle shadow */}
              <div className="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
                  alt="Athena LMS - Empowering Institutions"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lms-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lms-light/30 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAthenaSection;