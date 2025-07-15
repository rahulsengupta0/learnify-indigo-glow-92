import React from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  Star, 
  PlayCircle, 
  CheckCircle,
  Send,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  interest: z.string().min(5, { message: "Please tell us about your interest." }),
  session: z.string().optional(),
});

const MasterClass = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      session: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  function onSubmit(data) {
    console.log(data);
    toast.success("Thank you for your interest! We'll contact you soon with more details.");
    form.reset();
  }

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const upcomingSessions = [
    {
      title: "Marketing Career Accelerator",
      date: "June 15, 2024",
      time: "2:00 PM - 4:00 PM EST",
      instructor: "Sarah Johnson",
      spots: "8 spots left"
    },
    {
      title: "Engineering Placement Strategy",
      date: "June 22, 2024", 
      time: "1:00 PM - 3:00 PM EST",
      instructor: "Michael Chen",
      spots: "12 spots left"
    },
    {
      title: "MBA Success Blueprint",
      date: "June 29, 2024",
      time: "3:00 PM - 5:00 PM EST", 
      instructor: "Dr. Emily Rodriguez",
      spots: "5 spots left"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Software Engineer at Google",
      content: "The Engineering Placement masterclass was a game-changer. I learned interview strategies that helped me land my dream job!",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Marketing Manager at Meta",
      content: "Sarah's marketing masterclass provided actionable insights that immediately improved my career trajectory. Highly recommended!",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "MBA Student at Wharton",
      content: "The MBA Success Blueprint gave me clarity on my application strategy. The personalized advice was invaluable.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert-Led Sessions",
      description: "Learn from industry leaders with real-world experience"
    },
    {
      icon: <PlayCircle className="h-6 w-6" />,
      title: "Interactive Learning",
      description: "Hands-on workshops and live Q&A sessions"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification",
      description: "Receive completion certificates for your portfolio"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Multiple time slots to fit your busy schedule"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LMSNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lms-primary to-lms-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Athena <span className="text-white/90">Masterclasses</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl"
            >
              Transform your career with expert-led sessions designed to accelerate your professional growth
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button 
                size="lg"
                className="bg-white text-lms-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                Join Next Session
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-lms-dark mb-4">
                  What Our Masterclasses Offer
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Immersive learning experiences designed by industry experts to give you practical skills and actionable insights
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-lms-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-lms-primary">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-lms-dark">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Sessions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-lms-dark mb-4">
                  Upcoming Sessions
                </h2>
                <p className="text-lg text-gray-600">
                  Reserve your spot in our next masterclass sessions
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {upcomingSessions.map((session, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lms-dark">{session.title}</CardTitle>
                        <Badge variant="secondary" className="w-fit">
                          {session.spots}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>Instructor: {session.instructor}</span>
                          </div>
                        </div>
                        <Button className="w-full mt-6 bg-lms-primary hover:bg-lms-primary/90">
                          Reserve Spot
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-lms-dark mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-gray-600">
                  Hear from professionals who transformed their careers through our masterclasses
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                        <div>
                          <p className="font-semibold text-lms-dark">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-lms-dark mb-4">
                  Express Your Interest
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Ready to take your career to the next level? Get in touch with us and we'll help you find the perfect masterclass for your goals.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8 md:p-10"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lms-dark font-medium">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                className="rounded-lg border-gray-300 focus:ring-lms-primary focus:border-lms-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lms-dark font-medium">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                type="email" 
                                className="rounded-lg border-gray-300 focus:ring-lms-primary focus:border-lms-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lms-dark font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                type="tel" 
                                className="rounded-lg border-gray-300 focus:ring-lms-primary focus:border-lms-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="session"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lms-dark font-medium">Interested Session</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., Marketing Career Accelerator" 
                                className="rounded-lg border-gray-300 focus:ring-lms-primary focus:border-lms-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lms-dark font-medium">Tell us about your interest *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="What are your career goals? What specific areas would you like to focus on?" 
                              className="rounded-lg min-h-[120px] border-gray-300 focus:ring-lms-primary focus:border-lms-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full py-6 text-lg font-medium bg-lms-primary hover:bg-lms-primary/90 transform hover:scale-[1.02] transition-all duration-300 group"
                      disabled={isSubmitting}
                    >
                      <span>Submit Interest</span>
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MasterClass;