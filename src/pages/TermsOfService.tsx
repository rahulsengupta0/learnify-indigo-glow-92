
import React from 'react';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, UserCheck, CreditCard, Shield, AlertTriangle, Scale, Calendar, Mail, Phone, Book } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LMSNavbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ScrollText className="h-12 w-12 text-lms-primary mr-3" />
            <h1 className="text-4xl font-bold text-lms-primary">Terms and Conditions</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our platform and services
          </p>
          <div className="flex items-center justify-center mt-4 text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="font-medium">Effective Date: September 26, 2024</span>
          </div>
        </div>

        {/* Important Notice Banner */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Agreement to Terms</h3>
                <p className="text-blue-700">
                  By accessing or using Athena's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Book className="h-6 w-6 mr-2" />
                  Introduction and Acceptance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Athena! These Terms and Conditions ("Terms," "Agreement") govern your use of our website, mobile applications, and educational services (collectively, the "Service") operated by Athena ("we," "us," or "our").
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By creating an account, making a purchase, or otherwise accessing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and Return and Refund Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <UserCheck className="h-6 w-6 mr-2" />
                  User Eligibility and Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Age Requirements</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>You must be at least 18 years old to create an account and use our services independently</li>
                    <li>Users aged 13-17 may use our services only with explicit consent and supervision of a parent or legal guardian</li>
                    <li>Users under 13 are not permitted to use our services</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Account Registration</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>You must provide accurate, current, and complete information during registration</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You must notify us immediately of any unauthorized access to your account</li>
                    <li>One person may not maintain multiple accounts without our written permission</li>
                    <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Account Security</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      You are solely responsible for all activities that occur under your account. Use strong passwords and enable two-factor authentication when available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <CreditCard className="h-6 w-6 mr-2" />
                  Membership and Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Service Plans</h4>
                  <p className="text-gray-700 mb-2">Our educational services are available through various membership plans and individual course purchases:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Monthly and annual subscription plans</li>
                    <li>Individual course purchases</li>
                    <li>Corporate and enterprise solutions</li>
                    <li>Special promotional packages</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Payment Processing</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Payments are processed securely through trusted third-party providers (Stripe, PayPal)</li>
                    <li>All prices are listed in USD unless otherwise specified</li>
                    <li>Subscription fees are billed in advance on a recurring basis</li>
                    <li>You authorize us to charge your payment method for all applicable fees</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">No Refund Policy</h4>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-red-800 font-medium mb-2">Important: All Sales Are Final</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm">
                      <li>Membership fees and course purchases are non-refundable under any circumstances</li>
                      <li>No refunds for partial months or unused portions of subscriptions</li>
                      <li>Cancellations take effect at the end of the current billing period</li>
                      <li>We reserve the right to change pricing, but existing subscriptions will be honored until renewal</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Subscription Management</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>You may cancel your subscription at any time through your account settings</li>
                    <li>Cancellations will take effect at the end of your current billing cycle</li>
                    <li>Access to subscription content will continue until the end of the paid period</li>
                    <li>We may suspend or terminate accounts for non-payment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Prohibited Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">The following activities are strictly prohibited:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Account Misuse</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Sharing login credentials with others</li>
                      <li>Creating multiple accounts to circumvent restrictions</li>
                      <li>Using automated tools to access our services</li>
                      <li>Attempting to hack or compromise our systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Content Violations</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Copying, distributing, or reselling our content</li>
                      <li>Recording or downloading course materials</li>
                      <li>Reverse engineering our platform</li>
                      <li>Creating derivative works without permission</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Illegal Activities</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Using our services for any unlawful purpose</li>
                      <li>Violating any applicable laws or regulations</li>
                      <li>Engaging in fraudulent transactions</li>
                      <li>Money laundering or terrorist financing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Platform Abuse</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Disrupting the normal operation of our services</li>
                      <li>Transmitting malware or harmful code</li>
                      <li>Excessive bandwidth usage or server load</li>
                      <li>Harassment of other users or staff</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Violation Consequences:</strong> Users who engage in prohibited activities may face account suspension, termination, and potential legal action.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Shield className="h-6 w-6 mr-2" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Our Content and Materials</h4>
                  <p className="text-gray-700 mb-2">
                    All content on our platform is owned by Athena or our licensors and is protected by intellectual property laws:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Course videos, audio, and written materials</li>
                    <li>Platform software, design, and user interface</li>
                    <li>Logos, trademarks, and brand elements</li>
                    <li>Proprietary algorithms and methodologies</li>
                    <li>User data analytics and insights</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">License to Use</h4>
                  <p className="text-gray-700 mb-2">
                    We grant you a limited, non-exclusive, non-transferable license to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Access and view course content for personal educational use</li>
                    <li>Take notes and create personal study materials</li>
                    <li>Participate in discussion forums and community features</li>
                    <li>Download materials explicitly marked as downloadable</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Restrictions</h4>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-red-800 font-medium mb-2">Unauthorized use is strictly prohibited:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm">
                      <li>Commercial use, reproduction, or distribution of our content</li>
                      <li>Creating competing educational materials using our content</li>
                      <li>Removing copyright notices or attribution</li>
                      <li>Using our content to train AI models or machine learning systems</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">User-Generated Content</h4>
                  <p className="text-gray-700 text-sm">
                    By submitting content to our platform (reviews, forum posts, etc.), you grant us a worldwide, royalty-free license to use, modify, and display such content in connection with our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Service Availability and Modifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Service Reliability</h4>
                  <p className="text-gray-700 mb-2">
                    While we strive to maintain 99.9% uptime, we cannot guarantee uninterrupted service due to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Scheduled maintenance and updates</li>
                    <li>Technical issues beyond our control</li>
                    <li>Third-party service disruptions</li>
                    <li>Force majeure events</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Platform Changes</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>We reserve the right to modify, update, or discontinue any part of our services</li>
                    <li>Course content may be updated to reflect current best practices</li>
                    <li>New features may be added or existing features may be removed</li>
                    <li>Pricing and subscription options may change with appropriate notice</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Content Updates</h4>
                  <p className="text-gray-700 text-sm">
                    Course materials are periodically updated to ensure accuracy and relevance. You will have access to updated content as part of your active subscription.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Scale className="h-6 w-6 mr-2" />
                  Limitation of Liability and Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Service Disclaimers</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Our services are provided "as is" without warranties of any kind. We disclaim:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Warranties of merchantability or fitness for a particular purpose</li>
                      <li>Guarantees of specific learning outcomes or career advancement</li>
                      <li>Responsibility for decisions made based on our content</li>
                      <li>Liability for third-party content or external links</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Limitation of Damages</h4>
                  <p className="text-gray-700 mb-2">
                    Athena shall not be liable for any direct, indirect, incidental, consequential, or punitive damages, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    <li>Lost profits, revenue, or business opportunities</li>
                    <li>Data loss or corruption</li>
                    <li>Educational or career setbacks</li>
                    <li>Third-party claims or damages</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Maximum Liability</h4>
                  <p className="text-gray-700 text-sm">
                    In no event shall our total liability exceed the amount you paid for the specific service that gave rise to the claim during the 12 months preceding the incident.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Educational Content Disclaimer</h4>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      Our courses provide general educational information and should not be considered professional, financial, legal, or medical advice. Always consult qualified professionals for specific guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Account Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Termination by Us</h4>
                  <p className="text-gray-700 mb-2">We may suspend or terminate your account immediately for:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Violation of these Terms of Service</li>
                    <li>Non-payment of fees or fraudulent payment activity</li>
                    <li>Abuse of our platform or harassment of other users</li>
                    <li>Illegal activities or policy violations</li>
                    <li>Suspected security breaches or unauthorized access</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Termination by You</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>You may cancel your subscription at any time through account settings</li>
                    <li>Access continues until the end of your current billing period</li>
                    <li>No refunds will be provided for early cancellation</li>
                    <li>You may request account deletion by contacting support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Post-Termination</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      Upon termination, your access to our services will cease immediately. We may retain certain information as required by law or for legitimate business purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Governing Law and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Applicable Law</h4>
                  <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Washington, United States, without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Dispute Resolution Process</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-700 text-sm">1. Informal Resolution</p>
                      <p className="text-gray-600 text-sm">Contact us first to attempt resolution through our customer support team.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 text-sm">2. Mediation</p>
                      <p className="text-gray-600 text-sm">If informal resolution fails, disputes may be referred to mediation.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 text-sm">3. Binding Arbitration</p>
                      <p className="text-gray-600 text-sm">Unresolved disputes shall be settled through binding arbitration in Seattle, Washington.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Class Action Waiver</h4>
                  <p className="text-gray-700 text-sm">
                    You agree that any disputes will be resolved individually and not as part of a class action, collective action, or representative proceeding.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Miscellaneous Provisions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Severability</h4>
                  <p className="text-gray-700 text-sm">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Entire Agreement</h4>
                  <p className="text-gray-700 text-sm">
                    These Terms, along with our Privacy Policy and Return and Refund Policy, constitute the entire agreement between you and Athena.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Assignment</h4>
                  <p className="text-gray-700 text-sm">
                    You may not assign your rights under these Terms without our written consent. We may assign our rights and obligations without restriction.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Changes to Terms</h4>
                  <p className="text-gray-700 text-sm">
                    We reserve the right to update these Terms at any time. Significant changes will be communicated through email or platform notifications. Your continued use constitutes acceptance of updated terms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lms-primary">Legal Support</CardTitle>
                <CardDescription>Contact us for legal or compliance questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-lms-primary" />
                  <div>
                    <p className="font-medium text-gray-800">Legal Department</p>
                    <a href="mailto:counselor@creditoracademy.com" className="text-lms-primary hover:underline text-sm">
                      counselor@creditoracademy.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-lms-primary" />
                  <div>
                    <p className="font-medium text-gray-800">Phone Support</p>
                    <a href="tel:425-400-9246" className="text-lms-primary hover:underline text-sm">
                      (425) 400-9246
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Legal Hours:</strong><br />
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary text-lg">Key Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                    <p className="font-medium text-red-800 text-sm">No Refunds</p>
                    <p className="text-red-700 text-xs">All purchases are final</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                    <p className="font-medium text-blue-800 text-sm">Account Security</p>
                    <p className="text-blue-700 text-xs">Keep credentials confidential</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                    <p className="font-medium text-green-800 text-sm">Fair Use</p>
                    <p className="text-green-700 text-xs">Personal educational use only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary text-lg">Related Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="/privacy-policy" className="block text-lms-primary hover:underline text-sm">Privacy Policy</a>
                  <a href="/return-refund-policy" className="block text-lms-primary hover:underline text-sm">Return & Refund Policy</a>
                  <a href="/about" className="block text-lms-primary hover:underline text-sm">About Athena</a>
                  <a href="/services" className="block text-lms-primary hover:underline text-sm">Our Services</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
