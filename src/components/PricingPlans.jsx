import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import CheckoutModal from '@/components/CheckoutModal';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: "Perfect for small institutions and academies",
      features: [
        "Up to 500 active learners",
        "50 courses",
        "Basic analytics",
        "Email support",
        "Course creation tools",
        "Student portal",
        "Mobile access"
      ],
      isPopular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      monthlyPrice: 799,
      yearlyPrice: 7990,
      description: "Ideal for growing institutions and enterprises",
      features: [
        "Up to 2,500 active learners",
        "Unlimited courses",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom branding",
        "API access",
        "Live session tools",
        "Assessment builder",
        "SSO integration"
      ],
      isPopular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      description: "For large institutions with advanced needs",
      features: [
        "Unlimited learners",
        "Unlimited courses",
        "Advanced analytics suite",
        "Dedicated account manager",
        "White-label solution",
        "Custom integrations",
        "Advanced security",
        "Multi-tenant architecture",
        "24/7 phone support",
        "Training & onboarding"
      ],
      isPopular: false,
      buttonText: "Contact Sales"
    }
  ];

  const handlePlanSelect = (plan, index) => {
    const planWithBilling = {
      ...plan,
      selectedPrice: isYearly ? plan.yearlyPrice : plan.monthlyPrice,
      billingPeriod: isYearly ? 'yearly' : 'monthly'
    };
    setSelectedPlan(planWithBilling);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-14 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="heading-lg mb-4">Choose Your LMS Plan</h2>
          <p className="subtext">
            Scalable pricing for institutions of all sizes. Start with a free trial
            and upgrade as your learning community grows.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <span className={`mr-3 transition-colors ${isYearly ? 'text-gray-500' : 'text-lms-dark font-semibold'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-lms-primary focus:ring-offset-2 ${
                isYearly ? 'bg-lms-primary' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Toggle pricing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 flex items-center transition-colors ${isYearly ? 'text-lms-dark font-semibold' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-[1400px] mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-lms-primary hover:shadow-lms-primary/10 hover:transform hover:md:-translate-y-4 ${
                plan.isPopular
                  ? 'border-lms-primary shadow-lg shadow-lms-primary/10 transform md:-translate-y-4'
                  : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-lms-primary text-white text-xs font-semibold px-3 py-1 rounded-bl">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pt-6 pb-2">
                <h3 className="text-2xl font-bold text-lms-dark">{plan.name}</h3>
                <p className="text-gray-600 mt-2 h-12">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-3">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-lms-dark">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                  {isYearly && (
                    <div className="text-sm text-green-600 mt-1">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-6">
                <Button
                  size="lg"
                  onClick={() => handlePlanSelect(plan, index)}
                  className={`w-full py-5 transition-all hover:scale-105 ${
                    plan.isPopular
                      ? 'bg-lms-primary hover:bg-lms-primary/90'
                      : 'bg-white border border-lms-primary text-lms-primary hover:bg-lms-light'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PricingPlans;