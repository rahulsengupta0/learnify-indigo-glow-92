import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Athena transformed our corporate training delivery. The intuitive course creation tools and comprehensive analytics helped us increase employee engagement by 40% within the first quarter.",
      author: "Priya Patel",
      role: "L&D Manager at TechCorp",
      avatar: "PP",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      course: "Enterprise Learning Management"
    },
    {
      text: "After evaluating multiple LMS platforms, Athena stands out with its seamless integration capabilities and user-friendly interface. Our training completion rates improved significantly since implementation.",
      author: "Michael Chen",
      role: "Training Director at GlobalTech",
      avatar: "MC",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      course: "Platform Implementation"
    },
    {
      text: "The scalability of Athena allowed us to efficiently onboard 500+ new employees across multiple departments. The automated workflows and progress tracking features have been game-changing for our HR processes.",
      author: "Sarah Johnson",
      role: "VP of Human Resources at MedCorp",
      avatar: "SJ",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      course: "Employee Onboarding & Development"
    },
    {
      text: "We've deployed Athena across three business units, and the consistent learning experience has been remarkable. The detailed reporting capabilities provide insights that drive our strategic training decisions.",
      author: "David Rodriguez",
      role: "Chief Learning Officer at Finance Plus",
      avatar: "DR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      course: "Multi-Department Training Programs"
    },
    {
      text: "The collaborative features in Athena have revolutionized how our teams learn together. The ability to create custom learning paths and track competency development has elevated our entire training strategy.",
      author: "Emma Wilson",
      role: "Senior Training Manager at InnovateCorp",
      avatar: "EW",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      course: "Team Learning & Development"
    }
  ];

  // Framer Motion variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-14 overflow-hidden">
      {/* Background styling with decorative shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-lms-light to-white z-0 opacity-80"></div>
      <DecorativeShapes variant="accent" intensity="medium" position="center" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Quote className="w-24 h-24 text-lms-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Quote className="w-24 h-24 text-lms-primary rotate-180" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-10 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
            <Users className="h-8 w-8 text-lms-primary mr-2" />
            <h2 className="heading-lg">What Our Clients Say</h2>
          </motion.div>

          <motion.p className="subtext mb-4" variants={itemVariants}>
            Don't just take our word for it. Here's what organizations think about their experience with Athena.
          </motion.p>

          <motion.div className="flex items-center justify-center gap-2 text-lms-primary" variants={itemVariants}>
            <Users className="h-5 w-5" />
            <p className="font-bold">Trusted by 500+ organizations worldwide</p>
          </motion.div>
        </motion.div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="h-full px-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={containerVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border border-gray-100 shadow-md rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-lms-primary/10 to-lms-secondary/10 p-1">
                        <div className="flex items-center gap-1 justify-end px-4 py-2">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="relative mb-6">
                          <div className="absolute -top-8 left-0">
                            <Quote className="w-6 h-6 text-lms-primary opacity-50" />
                          </div>
                          <p className="text-gray-700 pt-4 italic">
                            {testimonial.text}
                          </p>
                        </div>

                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 border-2 border-lms-primary">
                            <AvatarImage src={testimonial.image} alt={testimonial.author} />
                            <AvatarFallback className="bg-lms-primary text-white">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <p className="font-semibold text-lms-dark">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                            <p className="text-xs text-lms-primary mt-1">
                              Use Case: {testimonial.course}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 lg:left-1" />
          <CarouselNext className="right-0 lg:right-1" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;