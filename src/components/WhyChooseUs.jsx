import React from 'react';
import { Award, Settings, BarChart3, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Settings className="h-8 w-8 text-lms-primary" />,
      title: "Enterprise-Ready",
      description: "Scalable LMS solution with SSO, API integrations, and white-labeling options"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-lms-primary" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and reporting for institutional decision-making"
    },
    {
      icon: <Users className="h-8 w-8 text-lms-primary" />,
      title: "Multi-Tenant Support",
      description: "Manage multiple organizations, departments, and user groups seamlessly"
    },
    {
      icon: <Award className="h-8 w-8 text-lms-primary" />,
      title: "Compliance Ready",
      description: "SCORM, xAPI, and accessibility standards with audit trails and reporting"
    }
  ];

  return (
    <section id="why-choose-us" className="bg-white py-8 overflow-hidden relative">
      {/* Add decorative shapes */}
      <DecorativeShapes variant="secondary" intensity="subtle" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="heading-lg">Why Choose <span className="text-lms-primary">Athena LMS</span>?</h2>
            <p className="subtext mb-4">
              Built for institutions that demand excellence. Our platform combines powerful features
              with enterprise-grade security and scalability to support your educational mission.
            </p>

            {/* Responsive feature grid - single row with scroll on small screens */}
            <div className="flex flex-nowrap md:grid md:grid-cols-2 gap-3 overflow-x-auto pb-4 md:pb-0 md:overflow-visible snap-x snap-mandatory">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-full snap-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-lms-primary/30"
                >
                  <div className="mb-3">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-lms-dark mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* LMS dashboard image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80"
                alt="LMS dashboard analytics interface"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* LMS analytics card overlay with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-6 right-6 bg-white/95 p-4 rounded-lg shadow-md w-48 border border-gray-100 md:w-52 lg:w-48 xl:w-56"
            >
              <h4 className="text-sm font-semibold mb-2">Platform Analytics</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Active Learners</span>
                <span className="text-xs font-bold">12,847</span>
              </div>
              <Progress value={85} className="h-2" />
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-lms-primary">↗ 15% this month</div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;