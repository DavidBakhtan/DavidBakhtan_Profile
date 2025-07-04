
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { PullToRefresh } from '@/components/PullToRefresh';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SocialMediaSection from '../components/SocialMediaSection';
import ServicesSection from '../components/ServicesSection';

const Contact = () => {
  useScrollToTop();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRefresh = async () => {
    // Show loading state
    setIsVisible(false);
    
    // Simulate loading delay and then actually refresh the page
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Reload the entire page for a true refresh
    window.location.reload();
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <Navigation />

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              
              <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
                Ready to automate your business processes or build your next digital solution? Let's collaborate!
              </p>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <ContactInfo />
                  <SocialMediaSection />
                  <ServicesSection />
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>

              {/* Optional Map Section */}
              <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-center text-slate-300 max-w-2xl mx-auto">
                  Whether you need automation solutions, custom applications, or IT administration services, 
                  I'm here to help transform your ideas into reality. Let's discuss your next project!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PullToRefresh>
  );
};

export default Contact;
