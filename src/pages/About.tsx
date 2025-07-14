import React from 'react';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import TopInstructorsSection from '@/components/TopInstructorsSection';
import { motion } from 'framer-motion';
import { Book, Target, Heart, Award, Users, Clock, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleHumanAgentRequest = () => {
    // This could trigger opening a contact form, scheduling a demo, or other lead generation actions
    console.log('Human agent requested - this could trigger lead generation flow');
    // You could also scroll to a contact section if it exists
  };

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a mission to democratize education through technology."
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Reached students in 50+ countries and expanded our course catalog."
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description: "Collaborated with leading tech companies to offer career-focused programs."
    },
    {
      year: "2025",
      title: "The Future",
      description: "Continuing to innovate with AI-powered learning and personalized education."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Elena Martinez",
      role: "Founder & CEO",
      image: "/img/team-elena.jpg",
      bio: "Former Stanford professor with a passion for educational technology."
    },
    {
      name: "Michael Chen",
      role: "Chief Learning Officer",
      image: "/img/team-michael.jpg",
      bio: "EdTech innovator with 15+ years experience in curriculum design."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Student Success",
      image: "/img/team-sarah.jpg",
      bio: "Dedicated to creating supportive learning environments for all students."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white pt-16">
      <LMSNavbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Hero Background with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-lms-dark/90 to-lms-dark/70 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          
          <div className="section-container relative z-20 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
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
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button 
                  size="lg" 
                  className="bg-lms-primary hover:bg-lms-primary/90 text-white rounded-full px-8"
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Purpose</h2>
              <p className="subtext max-w-3xl mx-auto">Guided by our commitment to education, we're transforming how people learn and grow.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-lms-light inline-flex p-4 rounded-xl mb-6">
                  <Target className="h-12 w-12 text-lms-primary" />
                </div>
                <h3 className="text-2xl font-bold text-lms-dark mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize education by providing accessible, high-quality learning 
                  experiences that empower individuals to achieve their personal and professional goals. 
                  We believe that education should be a right, not a privilege, available to anyone 
                  with the desire to learn.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-lms-light inline-flex p-4 rounded-xl mb-6">
                  <Book className="h-12 w-12 text-lms-primary" />
                </div>
                <h3 className="text-2xl font-bold text-lms-dark mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create a world where anyone, regardless of their background or circumstances, 
                  can access the education they need to build the life they want. We envision a 
                  future where learning is personalized, engaging, and transformative, bridging gaps and 
                  opening doors of opportunity worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-lg mb-4">Our Story</h2>
                <p className="subtext max-w-3xl mx-auto">From a simple idea to a global learning platform</p>
              </motion.div>
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
                  preventing talented individuals from accessing quality education. They envisioned a platform
                  that would combine cutting-edge technology with effective teaching methodologies.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  What started as a small collection of online courses has grown into a comprehensive learning
                  ecosystem with thousands of courses, interactive workshops, and a thriving community of learners
                  and educators. Through partnerships with industry leaders and educational institutions,
                  we've expanded our offerings while maintaining our commitment to quality and accessibility.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, Athena serves learners in over 150 countries, but our mission remains the same:
                  to transform lives through learning. Whether you're looking to advance your career, pursue a
                  passion, or simply learn something new, we're here to support your journey.
                </p>
              </motion.div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline */}
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
                            <h3 className="text-xl font-bold text-lms-dark">{item.year} - {item.title}</h3>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        
                        {/* Connecting line */}
                        {index < timeline.length - 1 && (
                          <div className="absolute left-[-38px] top-8 h-[calc(100%-2rem)] w-0.5 bg-lms-primary/30"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Instructors Section */}
        <TopInstructorsSection />

        {/* Our Values */}
        <section className="py-20 bg-lms-light">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Core Values</h2>
              <p className="subtext max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: <Heart className="h-10 w-10 text-lms-primary" />, title: "Inclusivity", description: "Creating learning environments where everyone feels welcome and valued." },
                { icon: <Trophy className="h-10 w-10 text-lms-primary" />, title: "Excellence", description: "Committing to the highest standards in education and user experience." },
                { icon: <Sparkles className="h-10 w-10 text-lms-primary" />, title: "Innovation", description: "Constantly evolving our methods to enhance how people learn." },
                { icon: <Users className="h-10 w-10 text-lms-primary" />, title: "Community", description: "Fostering connections between learners and educators worldwide." }
              ].map((value, index) => (
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
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Team</h2>
              <p className="subtext max-w-3xl mx-auto">Meet the passionate educators and innovators behind Athena</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <Users className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-lms-dark">{member.name}</h3>
                    <p className="text-lms-primary font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-lms-primary to-sky-500 text-white">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Learning Journey?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Join thousands of students already transforming their lives through our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-lms-primary hover:bg-white/90 px-8">
                  Browse Courses
                </Button>
                <Link to="/">
                  <Button size="lg" variant="outline" className="border-white bg-white text-lms-primary hover:bg-white/90 hover:text-lms-primary px-8">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot onRequestHumanAgent={handleHumanAgentRequest} />
    </div>
  );
};

export default About;
