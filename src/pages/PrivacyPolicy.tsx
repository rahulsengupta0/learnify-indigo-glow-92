
import React from 'react';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Database, Users, Globe, Calendar, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LMSNavbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-lms-primary mr-3" />
            <h1 className="text-4xl font-bold text-lms-primary">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center mt-4 text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="font-medium">Effective Date: September 26, 2024</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Eye className="h-6 w-6 mr-2" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Athena ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile applications, and engage with our services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By using our services, you consent to the collection and use of information in accordance with this policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Database className="h-6 w-6 mr-2" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Personal Information</h4>
                  <p className="text-gray-700 mb-2">We collect personal information that you voluntarily provide, including:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Full name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Billing and payment details</li>
                    <li>Account credentials and preferences</li>
                    <li>Profile information and educational background</li>
                    <li>Course progress and completion data</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Payment Information</h4>
                  <p className="text-gray-700">
                    Payment data is securely processed through third-party payment processors (Stripe, PayPal). We do not store complete credit card information on our servers.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Usage and Technical Data</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>IP addresses and geographic location</li>
                    <li>Browser type, version, and device information</li>
                    <li>Pages visited and time spent on our platform</li>
                    <li>Search queries and interaction patterns</li>
                    <li>Cookies and tracking technologies</li>
                    <li>Performance and error logs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Communications</h4>
                  <p className="text-gray-700">
                    We collect and store messages you send us through contact forms, chat support, email correspondence, and customer service interactions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Service Delivery</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Providing access to courses and content</li>
                      <li>Managing memberships and subscriptions</li>
                      <li>Processing payments and transactions</li>
                      <li>Tracking learning progress</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Communication</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Sending course updates and announcements</li>
                      <li>Providing customer support</li>
                      <li>Marketing communications (with consent)</li>
                      <li>Important policy or service changes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Platform Improvement</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Analyzing usage patterns and trends</li>
                      <li>Enhancing user experience</li>
                      <li>Developing new features</li>
                      <li>Performance optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Legal Compliance</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Meeting regulatory requirements</li>
                      <li>Preventing fraud and abuse</li>
                      <li>Enforcing our terms of service</li>
                      <li>Protecting user safety</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Users className="h-6 w-6 mr-2" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Service Providers</h4>
                  <p className="text-gray-700 text-sm mb-2">We share data with trusted third-party providers who assist in:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    <li>Payment processing (Stripe, PayPal)</li>
                    <li>Email delivery services</li>
                    <li>Cloud hosting and storage</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Customer support tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Legal Requirements</h4>
                  <p className="text-gray-700 text-sm">
                    We may disclose information when required by law, court order, or to protect our rights, property, or safety of our users.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Business Partners</h4>
                  <p className="text-gray-700 text-sm">
                    If you enroll in courses provided in collaboration with third parties, relevant information may be shared with those partners.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>We never sell your personal information to third parties for marketing purposes.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Globe className="h-6 w-6 mr-2" />
                  Cookies and Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Types of Cookies</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Essential Cookies</p>
                      <p className="text-gray-600">Required for basic site functionality</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Analytics Cookies</p>
                      <p className="text-gray-600">Help us understand site usage</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Preference Cookies</p>
                      <p className="text-gray-600">Remember your settings and choices</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Marketing Cookies</p>
                      <p className="text-gray-600">Deliver relevant advertisements</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Your Cookie Choices</h4>
                  <p className="text-gray-700 text-sm">
                    You can modify your browser settings to disable cookies, but some features may not function properly. You can also opt out of analytics tracking through your account settings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lms-primary">
                  <Lock className="h-6 w-6 mr-2" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Encrypted data storage</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                    <li>Third-party security assessments</li>
                    <li>Data backup and recovery systems</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> No method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Data Access Rights</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Request a copy of your personal data</li>
                      <li>Update or correct inaccurate information</li>
                      <li>Delete your account and associated data</li>
                      <li>Export your data in portable format</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Communication Preferences</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Opt out of marketing communications</li>
                      <li>Manage email notification settings</li>
                      <li>Control cookie preferences</li>
                      <li>Limit data processing activities</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-4">
                  To exercise these rights, contact us at counselor@creditoracademy.com with your request and proof of identity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Additional Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">No Refund Policy</h4>
                  <p className="text-gray-700 text-sm">
                    All purchases made on Athena are final. We do not offer refunds under any circumstances. Please review our Return and Refund Policy for complete details.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Third-Party Links</h4>
                  <p className="text-gray-700 text-sm">
                    Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing any information.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Children's Privacy</h4>
                  <p className="text-gray-700 text-sm">
                    Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">International Data Transfers</h4>
                  <p className="text-gray-700 text-sm">
                    Your information may be transferred and processed in countries outside your residence. We ensure appropriate safeguards are in place for such transfers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The latest version will always be available on our website with the effective date clearly indicated.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We will notify you of significant changes through email or prominent notices on our platform. Your continued use of our services after policy updates constitutes acceptance of the revised terms.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lms-primary">Contact Information</CardTitle>
                <CardDescription>Reach out with privacy-related questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-gray-800 mb-2">Athena</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-lms-primary" />
                      <div>
                        <p className="text-sm font-medium">Privacy Officer</p>
                        <a href="mailto:counselor@creditoracademy.com" className="text-lms-primary hover:underline text-sm">
                          counselor@creditoracademy.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-lms-primary" />
                      <div>
                        <p className="text-sm font-medium">Phone Support</p>
                        <a href="tel:425-400-9246" className="text-lms-primary hover:underline text-sm">
                          (425) 400-9246
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-600">
                    We typically respond to privacy inquiries within 72 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary text-lg">Related Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="/terms-of-service" className="block text-lms-primary hover:underline text-sm">Terms of Service</a>
                  <a href="/return-refund-policy" className="block text-lms-primary hover:underline text-sm">Return & Refund Policy</a>
                  <a href="/about" className="block text-lms-primary hover:underline text-sm">About Athena</a>
                  <a href="/services" className="block text-lms-primary hover:underline text-sm">Our Services</a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary text-lg">Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">SSL Encrypted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Secure Storage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Database className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Regular Backups</span>
                  </div>
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

export default PrivacyPolicy;
