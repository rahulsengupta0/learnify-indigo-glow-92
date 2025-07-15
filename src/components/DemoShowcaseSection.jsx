import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Users,
  BarChart3,
  FileEdit,
  Award,
  Calendar,
  Play,
  ArrowRight
} from 'lucide-react';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';
import { Button } from '@/components/ui/button';
import SuperDemoModal from '@/components/SuperDemoModal';
import DemoModal from '@/components/DemoModal';

const demoCards = [
  {
    icon: <Monitor size={28} />,
    title: "Instructor Dashboard",
    description: "Manage courses, track student progress, and create engaging content all from one intuitive dashboard.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoKey: "instructor-dashboard"
  },
  {
    icon: <Users size={28} />,
    title: "Learner Experience",
    description: "See how students navigate courses, complete assignments, and engage with interactive learning materials.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoKey: "learner-experience"
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Admin & Analytics",
    description: "Get deep insights into learning outcomes, engagement metrics, and institutional performance data.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoKey: "admin-analytics"
  },
  {
    icon: <FileEdit size={28} />,
    title: "Assignment Builder",
    description: "Create interactive assignments, quizzes, and assessments with our powerful drag-and-drop builder.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoKey: "assignment-builder"
  },
  {
    icon: <Award size={28} />,
    title: "Certification Tracking",
    description: "Automate certificate generation and track learner achievements throughout their educational journey.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoKey: "certification-tracking"
  },
  {
    icon: <Calendar size={28} />,
    title: "Course Scheduling / Live Sessions",
    description: "Schedule live classes, manage virtual classrooms, and facilitate real-time student interaction.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoKey: "course-scheduling"
  }
];

const DemoShowcaseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleWatchDemo = (demoKey) => {
    setSelectedDemo(demoKey);
    setIsDemoModalOpen(true);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-lms-light/30 to-white">
      <DecorativeShapes variant="primary" intensity="medium" />

      <div className="section-container relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-4xl font-bold">
            What Makes <span className="text-lms-primary">Athena</span> Different? See It Yourself.
          </h2>
          <p className="subtext text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how our LMS simplifies training, engagement, and tracking — all in one place.
          </p>
        </motion.div>

        {/* Demo Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        >
          {demoCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-80 bg-white border border-gray-100/50">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 blur-sm group-hover:blur-none"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-lms-primary/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  {/* Top Section - Icon */}
                  <div className="flex justify-between items-start">
                    <motion.div
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {React.cloneElement(card.icon, {
                        className: "text-lms-primary"
                      })}
                    </motion.div>

                    {/* Floating decorative element */}
                    <motion.div
                      className="w-3 h-3 bg-white/60 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </div>

                  {/* Bottom Section - Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-lms-light transition-colors duration-300">
                        {card.title}
                      </h3>

                      <p className="text-white/90 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                        {card.description}
                      </p>
                    </div>

                    {/* Watch Demo Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleWatchDemo(card.demoKey)}
                        className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-lms-primary hover:border-white transition-all duration-300 group-hover:bg-lms-primary group-hover:border-lms-primary group-hover:text-white"
                      >
                        <Play size={16} className="mr-2" />
                        Watch Demo
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-lms-primary hover:bg-lms-primary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold group transition-all duration-300 hover:shadow-xl hover:shadow-lms-primary/25"
            onClick={() => setIsScheduleModalOpen(true)}
          >
            Schedule a Demo
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>

      {/* Super Demo Modal */}
      <SuperDemoModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
        demoKey={selectedDemo}
      />

      {/* Schedule Demo Modal */}
      <DemoModal
        open={isScheduleModalOpen}
        onOpenChange={setIsScheduleModalOpen}
      />
    </section>
  );
};

export default DemoShowcaseSection;