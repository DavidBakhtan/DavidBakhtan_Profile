
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const TermsOfService = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 space-y-8">
            <div>
              <p className="text-slate-300 mb-6">
                Last updated: January 4, 2025
              </p>
              
              <p className="text-slate-300 mb-6">
                These Terms of Service govern your use of services provided by David Bakhtan ("I", "me", or "my"). By engaging my services, you agree to these terms.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Services Offered</h2>
              <p className="text-slate-300 mb-4">I provide the following services:</p>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>Full-stack web and mobile application development</li>
                <li>Automation solutions and workflow optimization</li>
                <li>UI/UX design and user experience consulting</li>
                <li>Backend development and database design</li>
                <li>Digital marketing and social media management</li>
                <li>Business setup and digital strategy consulting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Project Terms</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">Project Scope</h3>
                  <p>All projects will have a clearly defined scope, timeline, and deliverables agreed upon before work begins.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">Payment Terms</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Payment terms will be specified in individual project agreements</li>
                    <li>Deposits may be required before work commences</li>
                    <li>Final payment is due upon project completion</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">Revisions</h3>
                  <p>Reasonable revisions are included in project scope. Additional revisions may incur extra charges.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Client Responsibilities</h2>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>Provide necessary materials, content, and access in a timely manner</li>
                <li>Respond to communications and feedback requests promptly</li>
                <li>Make payments according to agreed schedule</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibent text-blue-400 mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-slate-300">
                <p>Upon full payment:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Clients own the final delivered work and custom code created specifically for their project</li>
                  <li>I retain rights to general methodologies, techniques, and pre-existing tools</li>
                  <li>I may showcase completed work in my portfolio unless otherwise agreed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Confidentiality</h2>
              <p className="text-slate-300">
                I respect client confidentiality and will not disclose sensitive business information. A separate NDA can be signed if required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Limitations of Liability</h2>
              <p className="text-slate-300">
                My liability is limited to the amount paid for services. I am not responsible for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Project Cancellation</h2>
              <div className="space-y-2 text-slate-300">
                <p>Either party may terminate a project with written notice:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Client is responsible for payment for work completed up to cancellation date</li>
                  <li>Deposits are non-refundable after work has commenced</li>
                  <li>Completed work will be delivered upon final payment</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Support and Maintenance</h2>
              <p className="text-slate-300">
                Post-launch support terms will be specified in individual agreements. Ongoing maintenance and updates may require separate agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact Information</h2>
              <p className="text-slate-300">
                For questions about these Terms of Service:
              </p>
              <div className="mt-4 space-y-2 text-slate-300">
                <p>Email: davidbakhtan@gmail.com</p>
                <p>Phone: +1 (437) 428-1995</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Changes to Terms</h2>
              <p className="text-slate-300">
                I reserve the right to update these Terms of Service. Clients will be notified of significant changes.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
