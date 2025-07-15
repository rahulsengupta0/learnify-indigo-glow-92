import React from 'react';
import { motion } from 'framer-motion';
import { School, Users, GraduationCap, BarChart3, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';

const FlexibleSolutions = () => {
  const solutions = [
    {
      icon: <School className="h-10 w-10 text-lms-primary" />,
      title: "For Schools & Colleges",
      description: "Manage classrooms, assignments & track progress",
      features: [
        "Student enrollment management",
        "Assignment creation & grading",
        "Parent-teacher communication",
        "Academic progress tracking"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "For Enterprises",
      description: "Train teams with analytics & certification tools",
      features: [
        "Employee onboarding programs",
        "Skills assessment & tracking",
        "Compliance training modules",
        "Performance analytics dashboard"
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-green-600" />,
      title: "For Coaches & Trainers",
      description: "Deliver live or self-paced content easily",
      features: [
        "Interactive live sessions",
        "Self-paced course creation",
        "Student progress monitoring",
        "Certification management"
      ],
      color: "bg-green-50 border-green-200"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="solutions" className="py-16 bg-gray-50 relative overflow-hidden">
      <DecorativeShapes variant="secondary" intensity="subtle" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">
            Flexible Solutions for <span className="text-lms-primary">Institutions & Enterprises</span>
          </h2>
          <p className="subtext">
            Whether you're a school, university, or enterprise — Athena adapts to your needs
            with scalable, custom solutions designed for your unique learning environment.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-2xl border-2 ${solution.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-lms-dark mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{solution.description}</p>

              <ul className="space-y-3">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-lms-primary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional features showcase */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-lms-dark mb-4">
                Enterprise-Grade Features for Every Organization
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                From small training programs to large institutional deployments,
                Athena scales with your organization's growth and evolving needs.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-lms-primary" />
                  <span className="text-sm font-medium">Advanced Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-lms-primary" />
                  <span className="text-sm font-medium">Live Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-lms-primary" />
                  <span className="text-sm font-medium">Enterprise Security</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-lms-primary hover:bg-lms-primary/90 text-white px-8 py-6 text-lg"
              >
                Schedule a Custom Demo
              </Button>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration in educational setting"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lms-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlexibleSolutions;