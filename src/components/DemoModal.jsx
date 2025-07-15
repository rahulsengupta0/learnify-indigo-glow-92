import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, CheckCircle } from 'lucide-react';

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan', 
  'India', 'China', 'Brazil', 'Mexico', 'South Africa', 'Netherlands', 'Switzerland',
  'Sweden', 'Norway', 'Denmark', 'Finland', 'Belgium', 'Austria', 'Spain', 'Italy',
  'Other'
];

const hearAboutOptions = [
  'Google Search', 'Social Media', 'Referral from colleague', 'Industry publication',
  'Conference/Event', 'Partner recommendation', 'Advertisement', 'Other'
];

const trainingSizeOptions = [
  '1-50 people', '51-200 people', '201-1000 people', '1000+ people'
];

const DemoModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organizationName: '',
    telephoneNumber: '',
    country: '',
    email: '',
    hearAboutUs: '',
    trainingSize: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please complete this required field.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please complete this required field.';
    }

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = 'Please complete this required field.';
    }

    if (!formData.telephoneNumber.trim()) {
      newErrors.telephoneNumber = 'Please complete this required field.';
    } else if (!validatePhoneNumber(formData.telephoneNumber)) {
      newErrors.telephoneNumber = 'Please enter a valid phone number.';
    }

    if (!formData.country) {
      newErrors.country = 'Please complete this required field.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please complete this required field.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.hearAboutUs) {
      newErrors.hearAboutUs = 'Please complete this required field.';
    }

    if (!formData.trainingSize) {
      newErrors.trainingSize = 'Please complete this required field.';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and privacy policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Demo request submitted:', formData);
      setIsSubmitted(true);
      
      // Auto close after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          organizationName: '',
          telephoneNumber: '',
          country: '',
          email: '',
          hearAboutUs: '',
          trainingSize: '',
          agreeTerms: false
        });
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-lms-primary mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your demo request has been submitted successfully. Our team will contact you shortly.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] top-[15%] translate-y-0 sm:top-[50%] sm:translate-y-[-50%]">
        <DialogHeader className="pb-6 space-y-3 pt-8">
          <DialogTitle className="text-2xl font-bold text-lms-primary">Schedule Your Demo</DialogTitle>
          <DialogDescription>
            See Athena LMS in action. Our team will show you how our platform can transform your learning environment.
          </DialogDescription>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[calc(90vh-250px)] pr-2">
          <form onSubmit={handleSubmit} className="space-y-6 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-900 block">
                  First Name*
                </Label>
                <Input 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`h-10 ${errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div className="space-y-3">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-900 block">
                  Last Name*
                </Label>
                <Input 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`h-10 ${errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="organizationName" className="text-sm font-medium text-gray-900 block">
                Organization Name*
              </Label>
              <Input 
                id="organizationName" 
                placeholder="The name of your organization"
                value={formData.organizationName}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                className={`h-10 ${errors.organizationName ? 'border-red-500' : ''}`}
              />
              {errors.organizationName && <p className="text-red-500 text-sm mt-1">{errors.organizationName}</p>}
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="telephoneNumber" className="text-sm font-medium text-gray-900 block">
                Telephone Number*
              </Label>
              <Input 
                id="telephoneNumber" 
                placeholder="Please add your international code"
                value={formData.telephoneNumber}
                onChange={(e) => handleInputChange('telephoneNumber', e.target.value)}
                className={`h-10 ${errors.telephoneNumber ? 'border-red-500' : ''}`}
              />
              {errors.telephoneNumber && <p className="text-red-500 text-sm mt-1">{errors.telephoneNumber}</p>}
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="country" className="text-sm font-medium text-gray-900 block">
                Company HQ / Country*
              </Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                <SelectTrigger className={`h-10 ${errors.country ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium text-gray-900 block">
                Email*
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Organization or institution email only"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`h-10 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="hearAboutUs" className="text-sm font-medium text-gray-900 block">
                How did you hear about us?*
              </Label>
              <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange('hearAboutUs', value)}>
                <SelectTrigger className={`h-10 ${errors.hearAboutUs ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {hearAboutOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.hearAboutUs && <p className="text-red-500 text-sm mt-1">{errors.hearAboutUs}</p>}
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="trainingSize" className="text-sm font-medium text-gray-900 block">
                How many people are you trying to train/educate?*
              </Label>
              <Select value={formData.trainingSize} onValueChange={(value) => handleInputChange('trainingSize', value)}>
                <SelectTrigger className={`h-10 ${errors.trainingSize ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {trainingSizeOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.trainingSize && <p className="text-red-500 text-sm mt-1">{errors.trainingSize}</p>}
            </div>
            
            <div className="flex items-start space-x-2 pt-2">
              <Checkbox 
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                className="mt-1"
              />
              <div className="grid gap-1.5 leading-none">
                <Label 
                  htmlFor="agreeTerms" 
                  className="text-sm font-normal cursor-pointer"
                >
                  I agree to the Terms of use and have read the Privacy Policy*
                </Label>
                {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms}</p>}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4 pb-2">
              <Button type="submit" className="flex-1 bg-lms-primary hover:bg-lms-primary/90">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;