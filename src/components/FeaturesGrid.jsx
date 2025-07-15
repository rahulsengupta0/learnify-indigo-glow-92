import React from 'react';
import {
  BookOpen,
  BarChart3,
  Users,
  MessageCircle,
  Award,
  Video
} from 'lucide-react';
import { motion } from 'framer-motion';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';
import certificate from './photos/certificate.jpg';
import coursecreation from './photos/coursecreation.jpg';
import livechat from './photos/livechat.jpg';
import livelesson from './photos/livelesson.jpg';
import statistics from './photos/statistics.jpg';
import usermanagement from './photos/usermanagement.jpg';

const FeaturesGrid = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-lms-primary" />,
      title: "Course Creation Tools",
      description: "Build interactive courses with multimedia content, assessments, and SCORM support",
      color: "bg-blue-50 border-blue-100",
      image: coursecreation,
      imageAlt: "Instructor creating an online course"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-lms-primary" />,
      title: "Advanced Analytics",
      description: "Track learner progress, engagement metrics, and performance analytics in real-time",
      color: "bg-purple-50 border-purple-100",
      image: statistics,
      imageAlt: "Learning analytics dashboard"
    },
    {
      icon: <Users className="h-6 w-6 text-lms-primary" />,
      title: "User Management",
      description: "Manage instructors, learners, and administrators with role-based permissions",
      color: "bg-green-50 border-green-100",
      image: usermanagement,
      imageAlt: "User management interface"
    },
    {
      icon: <Video className="h-6 w-6 text-lms-primary" />,
      title: "Live Sessions",
      description: "Conduct virtual classrooms with video conferencing and interactive whiteboards",
      color: "bg-orange-50 border-orange-100",
      image: livelesson,
      imageAlt: "Online live class session"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-lms-primary" />,
      title: "Live Chats",
      description: "Enable real-time discussions and support between learners and instructors",
      color: "bg-indigo-50 border-indigo-100",
      image: livechat,
      imageAlt: "Live chat interface"
    },
    {
      icon: <Award className="h-6 w-6 text-lms-primary" />,
      title: "Certification System",
      description: "Issue digital certificates and badges with blockchain verification support",
      color: "bg-emerald-50 border-emerald-100",
      image: certificate,
      imageAlt: "Digital certificate example"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="features" className="bg-lms-light py-14 relative overflow-hidden">
      <DecorativeShapes variant="accent" intensity="high" position="full" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="heading-lg mb-4">Complete LMS Platform Features</h2>
          <p className="subtext">
            Everything you need to deliver exceptional learning experiences, from course creation
            to learner analytics and certification management.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className={`p-6 ${feature.color} flex items-start gap-4`}>
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-lms-dark mb-2 group-hover:text-lms-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;