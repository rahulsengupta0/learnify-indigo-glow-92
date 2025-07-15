import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Rocket, BarChart } from 'lucide-react';
import dashboardImage from './photos/dashboard.png';
import courseImage from './photos/course.png';
import progressImage from './photos/progress.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: <PlusCircle className="h-8 w-8 text-white" />,
      title: "Add, create, or choose content",
      description: "Upload your own content, create with AI, or pick from 1000+ ready-made courses—it's all in your hands.",
      image: courseImage,
      bgColor: "bg-blue-600"
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Deliver training",
      description: "Assign courses and engage learners with training that's interactive, accessible, and fits their pace—wherever they are.",
      image: dashboardImage,
      bgColor: "bg-purple-600"
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Track progress",
      description: "See how learners progress, measure training ROI, and improve training to drive better learning.",
      image: progressImage,
      bgColor: "bg-green-600"
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute top-4 right-4 p-3 rounded-full ${feature.bgColor} shadow-md`}>
                  {feature.icon}
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;