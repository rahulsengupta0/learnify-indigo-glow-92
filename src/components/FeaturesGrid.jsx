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

const FeaturesGrid = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-lms-primary" />,
      title: "Course Creation Tools",
      description: "Build interactive courses with multimedia content, assessments, and SCORM support",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-lms-primary" />,
      title: "Advanced Analytics",
      description: "Track learner progress, engagement metrics, and performance analytics in real-time",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <Users className="h-6 w-6 text-lms-primary" />,
      title: "User Management",
      description: "Manage instructors, learners, and administrators with role-based permissions",
      color: "bg-green-50 border-green-100"
    },
    {
      icon: <Video className="h-6 w-6 text-lms-primary" />,
      title: "Live Sessions",
      description: "Conduct virtual classrooms with video conferencing and interactive whiteboards",
      color: "bg-orange-50 border-orange-100"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-lms-primary" />,
      title: "Live Chats",
      description: "Enable real-time discussions and support between learners, instructors, and teams to enhance collaboration and engagement",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: <Award className="h-6 w-6 text-lms-primary" />,
      title: "Certification System",
      description: "Issue digital certificates and badges with blockchain verification support",
      color: "bg-emerald-50 border-emerald-100"
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
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother motion
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                scale: 1.02,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              className={`${feature.color} border border-solid rounded-xl p-6 transition-all duration-300 hover:shadow-xl group cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0"
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {feature.icon}
                </motion.div>
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