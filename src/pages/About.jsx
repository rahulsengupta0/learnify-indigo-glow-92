import React from 'react';
import { motion } from 'framer-motion';
import { Book, Target, Heart, Award, Users, Clock, Trophy, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import TopInstructorsSection from '@/components/TopInstructorsSection';
import { Button } from '@/components/ui/button';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded with a mission to democratize education through technology.',
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Reached students in 50+ countries and expanded our course catalog.',
    },
    {
      year: '2022',
      title: 'Industry Partnerships',
      description: 'Collaborated with leading tech companies to offer career-focused programs.',
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Continuing to innovate with AI-powered learning and personalized education.',
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Elena Martinez',
      role: 'Founder & CEO',
      image: '/img/team-elena.jpg',
      bio: 'Former Stanford professor with a passion for educational technology.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Learning Officer',
      image: '/img/team-michael.jpg',
      bio: 'EdTech innovator with 15+ years experience in curriculum design.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Student Success',
      image: '/img/team-sarah.jpg',
      bio: 'Dedicated to creating supportive learning environments for all students.',
    },
  ];

  const coreValues = [
    {
      icon: React.createElement(Heart, { className: "h-10 w-10 text-lms-primary" }),
      title: 'Inclusivity',
      description: 'Creating learning environments where everyone feels welcome and valued.',
    },
    {
      icon: React.createElement(Trophy, { className: "h-10 w-10 text-lms-primary" }),
      title: 'Excellence',
      description: 'Committing to the highest standards in education and user experience.',
    },
    {
      icon: React.createElement(Sparkles, { className: "h-10 w-10 text-lms-primary" }),
      title: 'Innovation',
      description: 'Constantly evolving our methods to enhance how people learn.',
    },
    {
      icon: React.createElement(Users, { className: "h-10 w-10 text-lms-primary" }),
      title: 'Community',
      description: 'Fostering connections between learners and educators worldwide.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white pt-16">
      <LMSNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lms-dark/90 to-lms-dark/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="section-container relative z-20 py-20 md:py-32 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Sparkles className="h-10 w-10 text-lms-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-lms-primary">Athena</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-light text-white/90 mb-8"
          >
            Empowering Learners. Transforming Futures.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Button size="lg" className="bg-lms-primary hover:bg-lms-primary/90 text-white rounded-full px-8">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-white">
        <div className="section-container text-center mb-16">
          <h2 className="heading-lg mb-4">Our Purpose</h2>
          <p className="subtext max-w-3xl mx-auto">
            Guided by our commitment to education, we're transforming how people learn and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 section-container">
          {[
            {
              icon: <Target className="h-12 w-12 text-lms-primary" />,
              title: 'Our Mission',
              text: `To democratize education by providing accessible, high-quality learning experiences that empower individuals to achieve their personal and professional goals.`,
            },
            {
              icon: <Book className="h-12 w-12 text-lms-primary" />,
              title: 'Our Vision',
              text: `To create a world where anyone, regardless of their background or circumstances, can access the education they need to build the life they want.`,
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-lms-light inline-flex p-4 rounded-xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold text-lms-dark mb-4">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Story</h2>
            <p className="subtext max-w-3xl mx-auto">From a simple idea to a global learning platform</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2018, Athena began with a simple idea: education should be accessible to everyone,
                everywhere. Our founders, all former educators themselves, were frustrated by the barriers
                preventing talented individuals from accessing quality education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a small collection of online courses has grown into a comprehensive learning
                ecosystem with thousands of courses, workshops, and a thriving community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Athena serves learners in over 150 countries, staying true to our mission of transforming
                lives through learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="ml-6 space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center">
                      <div className="absolute left-[-42px] flex items-center justify-center w-8 h-8 bg-lms-primary rounded-full">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-lms-dark">
                          {item.year} - {item.title}
                        </h3>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute left-[-38px] top-8 h-[calc(100%-2rem)] w-0.5 bg-lms-primary/30" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Instructors Section */}
      <TopInstructorsSection />

      {/* Core Values Section */}
      <section className="py-20 bg-lms-light">
        <div className="section-container text-center mb-16">
          <h2 className="heading-lg mb-4">Our Core Values</h2>
          <p className="subtext max-w-3xl mx-auto">The principles that guide everything we do</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 section-container"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-lms-light rounded-lg mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-lms-dark mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Meet Our Leadership</h2>
            <p className="subtext max-w-3xl mx-auto">The passionate educators and innovators driving Athena forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lms-dark mb-1">{member.name}</h3>
                  <p className="text-lms-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lms-dark text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-lg mb-6">Ready to transform your learning experience?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of learners who are advancing their skills with Athena.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-lms-primary hover:bg-lms-primary/90 text-white rounded-full px-8">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;