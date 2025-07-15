import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, MessageCircle, Send, Users, HeadphonesIcon } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import BookingForm from "./BookingForm";
import EducationCounsellorForm from "./EducationCounsellorForm";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactUs = () => {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [isEducationDialogOpen, setIsEducationDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  function onSubmit(data) {
    // In a real app, you would send this data to your backend
    console.log(data);
    toast.success("Message sent! We'll get back to you soon.");
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-lms-dark mb-4">Have Questions? Let's Talk.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're curious about features, a trial, or partnership — we're here to help.
            </p>
          </motion.div>

          {/* Book a session section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-lms-dark mb-3">Book a session</h3>
              <p className="text-lg text-gray-600">
                Schedule a session to get guidance or tech support from our team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-lms-primary hover:bg-lms-primary/90 text-white px-8 py-6 text-lg font-medium rounded-lg transform hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <HeadphonesIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Contact Tech Team
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <BookingForm onClose={() => setIsBookingDialogOpen(false)} />
                </DialogContent>
              </Dialog>

              <Dialog open={isEducationDialogOpen} onOpenChange={setIsEducationDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-lms-primary text-lms-primary hover:bg-lms-primary hover:text-white px-8 py-6 text-lg font-medium rounded-lg transform hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Contact Education Counsellor
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <EducationCounsellorForm onClose={() => setIsEducationDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            variants={itemVariants}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lms-dark font-medium">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
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
                      <FormLabel className="text-lms-dark font-medium">Email</FormLabel>
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
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lms-dark font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you're looking for..."
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
                  <span>Send Message</span>
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>

            <motion.div
              className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-8"
              variants={itemVariants}
            >
              <a
                href="mailto:counselor@creditoracademy.com"
                className="flex items-center gap-2 text-gray-600 hover:text-lms-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>counselor@creditoracademy.com</span>
              </a>
              <a
                href="tel:425-400-9246"
                className="flex items-center gap-2 text-gray-600 hover:text-lms-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(425-400-9246)</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-lms-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Live Chat</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;