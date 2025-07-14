
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is Athena LMS and how does it work?",
      answer: "Athena LMS is a comprehensive Learning Management System designed to deliver, track, and manage educational content and training programs. Our platform provides institutions and organizations with tools to create engaging learning experiences, monitor student progress, and facilitate effective online education through an intuitive, user-friendly interface."
    },
    {
      question: "Who can use the Athena LMS platform?",
      answer: "Athena LMS is designed for educational institutions, corporate training departments, online educators, and organizations of all sizes. Whether you're a university, K-12 school, training company, or enterprise looking to upskill employees, our platform scales to meet your specific learning management needs."
    },
    {
      question: "What key features does Athena LMS offer?",
      answer: "Our platform includes comprehensive course management, interactive content creation tools, real-time progress tracking, assessment and grading systems, communication tools, mobile compatibility, detailed analytics and reporting, user management, and seamless integration capabilities with existing systems and third-party applications."
    },
    {
      question: "How secure is the Athena LMS platform?",
      answer: "Security is our top priority. Athena LMS employs enterprise-grade security measures including data encryption, secure user authentication, regular security audits, GDPR compliance, role-based access controls, and secure cloud hosting. We ensure your institutional data and student information remain protected at all times."
    },
    {
      question: "What support and training do you provide for Athena LMS?",
      answer: "We offer comprehensive support including 24/7 technical assistance, dedicated customer success managers, extensive documentation, video tutorials, live training sessions, and onboarding support. Our team ensures smooth implementation and provides ongoing assistance to maximize your platform utilization and success."
    }
  ];

  return (
    <section className="py-16 bg-lms-primary overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        >
          <div className="w-full md:w-1/3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                // Add slight floating animation
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
              animate={{ y: [0, -10, 0] }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              {/* Replace icon with rich illustration */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80" 
                alt="Learning Support and FAQ" 
                className="w-auto h-56 object-contain rounded-lg"
                style={{ filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))" }}
              />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-white/90">
              Get answers to common questions about our Athena LMS platform and how it can transform your educational initiatives.
            </p>
          </div>
          
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-2"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                    <AccordionTrigger className="text-left py-5 px-4 text-lg font-medium hover:text-lms-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-5 pt-0 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
