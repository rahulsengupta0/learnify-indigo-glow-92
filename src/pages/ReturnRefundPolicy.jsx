import React from 'react';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield, CreditCard, Mail, Phone, Calendar } from 'lucide-react';

const ReturnRefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LMSNavbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CreditCard className="h-12 w-12 text-lms-primary mr-3" />
            <h1 className="text-4xl font-bold text-lms-primary">Return and Refund Policy</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding our no-refund policy and your purchase commitments
          </p>
          <div className="flex items-center justify-center mt-4 text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="font-medium">Effective Date: September 26, 2024</span>
          </div>
        </div>

        {/* Alert Banner */}
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                <p className="text-amber-700">
                  All purchases are final. Please review all course details, membership benefits, and service descriptions carefully before completing your purchase.
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
                  <Shield className="h-6 w-6 mr-2" />
                  No Refund Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  At Athena, all purchases of memberships, courses, and business services are <strong>final and non-refundable</strong>. We do not offer refunds under any circumstances, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Change of mind or personal circumstances</li>
                  <li>Failure to complete purchased courses</li>
                  <li>Technical difficulties on the user's end</li>
                  <li>Dissatisfaction with course content</li>
                  <li>Duplicate purchases</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Please ensure that you review all course details, membership benefits, and service descriptions carefully before making a purchase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Limited Exceptions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we maintain a strict no-refund policy, we are committed to ensuring you have access to your purchased content. In cases where technical issues on our end prevent access to purchased courses or services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Our support team will work diligently to resolve access issues</li>
                  <li>We may provide alternative access methods when possible</li>
                  <li>Account credits may be issued in extraordinary circumstances at our sole discretion</li>
                  <li>No monetary refunds will be provided</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Course and Membership Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Immediate Access</h4>
                    <p className="text-gray-700">Upon successful payment, you will gain immediate access to the purchased content through your account dashboard.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Your Responsibilities</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Ensure device and internet compatibility before purchase</li>
                      <li>Keep your login credentials secure and confidential</li>
                      <li>Use content in accordance with our Terms of Service</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Access Limitations</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Course and membership access is non-transferable</li>
                      <li>Sharing of login credentials is prohibited</li>
                      <li>Access may be revoked for policy violations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Payment Disputes and Chargebacks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Payment Issues</h4>
                    <p className="text-gray-700 mb-2">
                      If you encounter payment issues or have concerns about a transaction, please contact us immediately:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium">sales@creditoracademy.com</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Chargeback Policy</h4>
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <p className="text-red-800">
                        <strong>Warning:</strong> Initiating chargebacks or unauthorized payment disputes may result in:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-red-700">
                        <li>Immediate suspension of your account</li>
                        <li>Loss of access to all purchased content</li>
                        <li>Termination of membership benefits</li>
                        <li>Potential legal action for breach of contract</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary">Policy Modifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to update this Return and Refund Policy at any time without prior notice. Any modifications will be effective immediately upon posting on our website. Your continued use of our services after policy changes constitutes acceptance of the updated terms.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We recommend reviewing this policy periodically to stay informed of any changes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lms-primary">Need Help?</CardTitle>
                <CardDescription>Contact our support team for assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-lms-primary" />
                  <div>
                    <p className="font-medium text-gray-800">Email Support</p>
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
                    <strong>Business Hours:</strong><br />
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lms-primary text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="/terms-of-service" className="block text-lms-primary hover:underline">Terms of Service</a>
                  <a href="/privacy-policy" className="block text-lms-primary hover:underline">Privacy Policy</a>
                  <a href="/about" className="block text-lms-primary hover:underline">About Athena</a>
                  <a href="/services" className="block text-lms-primary hover:underline">Our Services</a>
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

export default ReturnRefundPolicy;