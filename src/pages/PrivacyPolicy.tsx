
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const PrivacyPolicy = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 space-y-8">
            <div>
              <p className="text-slate-300 mb-6">
                Last updated: January 4, 2025
              </p>
              
              <p className="text-slate-300 mb-6">
                This Privacy Policy describes how David Bakhtan ("I", "me", or "my") collects, uses, and protects your information when you use my services or visit my website.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Information I Collect</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">Contact Information</h3>
                  <p>When you contact me through my website or email, I may collect:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Your name and email address</li>
                    <li>Phone number (if provided)</li>
                    <li>Message content and project details</li>
                    <li>Company information (if applicable)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">Website Usage</h3>
                  <p>I may automatically collect:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">How I Use Your Information</h2>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To communicate about projects and business opportunities</li>
                <li>To improve my website and services</li>
                <li>To send project updates and important communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Information Sharing</h2>
              <p className="text-slate-300">
                I do not sell, trade, or rent your personal information to third parties. I may share information only when:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-slate-300">
                <li>Required by law or legal process</li>
                <li>Necessary to protect my rights or safety</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Data Security</h2>
              <p className="text-slate-300">
                I implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Your Rights</h2>
              <p className="text-slate-300 mb-2">You have the right to:</p>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact Me</h2>
              <p className="text-slate-300">
                If you have questions about this Privacy Policy or your personal information, please contact me:
              </p>
              <div className="mt-4 space-y-2 text-slate-300">
                <p>Email: davidbakhtan@gmail.com</p>
                <p>Phone: +1 (437) 428-1995</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Changes to This Policy</h2>
              <p className="text-slate-300">
                I may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
