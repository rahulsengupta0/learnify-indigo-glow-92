import React from 'react';
import { Play, BookOpen, Award, User, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MasterclassSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Partner icons using Lucide React icons instead of placeholder images
  const partners = [
    { name: "Courses", icon: <BookOpen className="w-5 h-5 text-lms-primary" /> },
    { name: "Certifications", icon: <Award className="w-5 h-5 text-lms-primary" /> },
    { name: "Community", icon: <User className="w-5 h-5 text-lms-primary" /> },
    { name: "Learning", icon: <Play className="w-5 h-5 text-lms-primary" /> },
  ];

  // Masterclass topics
  const masterclassTopics = [
    { 
      title: "Marketing Career", 
      bgColor: "bg-yellow-100", 
      position: "top-4 left-4"
    },
    { 
      title: "Engineering Placements", 
      bgColor: "bg-blue-100", 
      position: "top-4 right-4"
    },
    { 
      title: "Unlocking MBA Success", 
      bgColor: "bg-purple-100", 
      position: "bottom-4 right-4"
    },
    { 
      title: "Data Science Fundamentals", 
      bgColor: "bg-green-100", 
      position: "bottom-4 left-4"
    },
  ];

  const masterclassCards = [
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200",
      alt: "Woman professional",
      bgColor: "bg-blue-400",
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200",
      alt: "Business professional",
      bgColor: "bg-yellow-400",
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200",
      alt: "Business woman",
      bgColor: "bg-purple-400",
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200",
      alt: "Students studying",
      bgColor: "bg-green-400",
    },
  ];

  return (
    <section id="masterclass" className="py-8 overflow-hidden bg-gray-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="heading-lg">
                Upskill with <span className="text-lms-primary">Athena</span> <br />
                <span className="text-lms-primary">Masterclasses</span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 text-sm mb-4" 
              variants={itemVariants}
            >
              Webinars by the best in the industry!
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link to="/masterclass">
                <Button 
                  className="bg-lms-primary hover:bg-lms-primary/90 text-white px-4 py-2 rounded-full"
                >
                  Explore Masterclass
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-gray-200"
              variants={itemVariants}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {partner.icon}
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image Cards with Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/1">
                  <div className="grid grid-cols-2 gap-3 p-1">
                    {masterclassCards.map((card, index) => (
                      <div 
                        key={index} 
                        className="relative rounded-xl overflow-hidden shadow-md h-40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className={`absolute inset-0 ${card.bgColor}`}></div>
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-cover relative z-10"
                        />
                        <div 
                          className={`absolute ${masterclassTopics[index].position} ${masterclassTopics[index].bgColor} px-2 py-1 rounded-md shadow-sm flex items-center gap-1 z-20`}
                        >
                          <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center">
                            <Play className="h-2 w-2 text-red-500 ml-0.5" />
                          </div>
                          <div className="text-xs font-medium">
                            <p>{masterclassTopics[index].title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/1">
                  <div className="grid grid-cols-2 gap-3 p-1">
                    {masterclassCards.slice(0, 2).reverse().concat(masterclassCards.slice(2, 4).reverse()).map((card, index) => (
                      <div 
                        key={`slide2-${index}`}
                        className="relative rounded-xl overflow-hidden shadow-md h-40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className={`absolute inset-0 ${card.bgColor}`}></div>
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-cover relative z-10"
                        />
                        <div 
                          className={`absolute ${masterclassTopics[index].position} ${masterclassTopics[index].bgColor} px-2 py-1 rounded-md shadow-sm flex items-center gap-1 z-20`}
                        >
                          <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center">
                            <Play className="h-2 w-2 text-red-500 ml-0.5" />
                          </div>
                          <div className="text-xs font-medium">
                            <p>{masterclassTopics[index].title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="hidden md:flex justify-center mt-4 gap-2">
                <CarouselPrevious className="static translate-y-0 h-8 w-8 mx-1" />
                <CarouselNext className="static translate-y-0 h-8 w-8 mx-1" />
              </div>
            </Carousel>

            <div className="block md:hidden mt-3 flex justify-center space-x-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-lms-primary text-lms-primary">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
