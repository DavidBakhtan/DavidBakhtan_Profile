import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-md border-t border-slate-700/50 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="w-12 h-12 mb-4">
              <div
                className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400"
                style={{
                  WebkitMaskImage: 'url(Untitled-5.png)',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(Untitled-5.png)',
                  maskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  maskPosition: 'center',
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-sky-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              David Bakhtan
            </h3>
            <p className="text-slate-400 text-sm">
              Full-Stack Developer & Automation Expert helping founders transform ideas into smart solutions. 
              I specialize in launching new businesses from the ground up — setting up everything from websites and social media presence to branding, logo design, and digital strategy.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link to="/skills" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Skills
              </Link>
              <Link to="/portfolio" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Portfolio
              </Link>
              <Link to="/experience" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Experience
              </Link>
              <Link to="/contact" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>Automation Solutions</p>
              <p>UI/UX Design</p>
              <p>Backend Development</p>
              <p>Database Design</p>
              <p>Digital Marketing</p>
              <p>Social Media Management</p>
            </div>
          </div>

          {/* Contact & Social Media */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-4">
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/david-bakhtan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/davidbakhtan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/14374281995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@davidbakhtan.dev"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-slate-400 text-sm">
                <p>📧 info@davidbakhtan.dev</p>
                <p>📱 +1 (437) 428-1995</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 David Bakhtan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
