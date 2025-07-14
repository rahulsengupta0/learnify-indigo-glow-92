
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, CreditCard, User, Mail, Phone } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: any;
}

const CheckoutModal = ({ isOpen, onClose, selectedPlan }: CheckoutModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  });

  if (!selectedPlan) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Here you would integrate with your payment processor
      console.log('Processing payment for:', selectedPlan, formData);
      alert('Payment processing would happen here. Integration with Stripe/PayPal would be implemented.');
      onClose();
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md h-[90vh] max-h-[600px] flex flex-col p-0 gap-0">
        {/* Fixed Header */}
        <DialogHeader className="sticky top-0 z-10 bg-white border-b p-6 shrink-0">
          <DialogTitle className="text-lg">
            {step === 1 ? 'Complete Your Information' : 'Payment Details'}
          </DialogTitle>
          <DialogDescription className="text-sm">
            {step === 1 
              ? 'Please fill in your details to continue with your subscription.'
              : 'Choose your payment method and complete your purchase.'
            }
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Plan Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{selectedPlan.name} Plan</span>
              <span className="text-lg font-bold">${selectedPlan.selectedPrice}</span>
            </div>
            <div className="text-sm text-gray-600">
              Billed {selectedPlan.billingPeriod}
              {selectedPlan.billingPeriod === 'yearly' && (
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Payment Method</Label>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleInputChange('paymentMethod', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                      <CreditCard className="h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="cursor-pointer">
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-blue-800 mb-2">
                  <Check className="h-4 w-4" />
                  <span className="font-medium">What you'll get:</span>
                </div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Instant access to all {selectedPlan.name} features</li>
                  <li>• 7-day free trial period</li>
                  <li>• Cancel anytime</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="sticky bottom-0 z-10 bg-white border-t p-6 shrink-0">
          <div className="flex gap-3">
            {step === 2 && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
            )}
            <Button 
              onClick={handleContinue}
              className={`${step === 1 ? 'w-full' : 'flex-1'} bg-lms-primary hover:bg-lms-primary/90`}
              disabled={step === 1 && (!formData.fullName || !formData.email)}
            >
              {step === 1 ? 'Continue' : `Start ${selectedPlan.name} Plan`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
