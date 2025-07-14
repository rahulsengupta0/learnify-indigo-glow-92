import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type EducationFormValues = z.infer<typeof formSchema>;

interface EducationCounsellorFormProps {
  onClose: () => void;
}

const EducationCounsellorForm = ({ onClose }: EducationCounsellorFormProps) => {
  const form = useForm<EducationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  function onSubmit(data: EducationFormValues) {
    console.log('Education Counsellor contact form data:', data);
    toast.success("Message sent! Our education counsellor will get back to you soon.");
    form.reset();
    onClose();
  }

  return (
    <ScrollArea className="h-[70vh] w-full pr-4">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-lms-dark mb-3">Contact Education Counsellor</h3>
          <p className="text-gray-600">
            To contact us, enter your name, email address, and message, then press Send.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lms-dark font-medium">Phone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your phone number" 
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
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lms-dark font-medium">Subject</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Subject of your inquiry" 
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
                      placeholder="Tell us about your educational needs..." 
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
              <span>Send</span>
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};

export default EducationCounsellorForm;
