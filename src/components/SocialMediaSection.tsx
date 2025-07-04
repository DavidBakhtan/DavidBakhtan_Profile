
import { Linkedin, Github, Instagram, Phone, Mail, Facebook } from 'lucide-react';

const SocialMediaSection = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
      <h3 className="text-xl font-bold mb-6 text-slate-200">Connect With Me</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <a 
          href="https://www.facebook.com/yousef.elbar.5/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
        >
          <Facebook className="w-6 h-6 text-blue-400" />
          <span className="text-slate-300">Facebook</span>
        </a>
        
        {/* <a 
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-pink-500/20 transition-colors duration-300"
        >
          <Instagram className="w-6 h-6 text-pink-400" />
          <span className="text-slate-300">Instagram</span>
        </a> */}
        
        <a 
          href="https://wa.me/14374281995"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-green-500/20 transition-colors duration-300"
        >
          <Phone className="w-6 h-6 text-green-400" />
          <span className="text-slate-300">WhatsApp</span>
        </a>
        
        <a 
          href="mailto:info@davidbakhtan.dev"
          className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-purple-500/20 transition-colors duration-300"
        >
          <Mail className="w-6 h-6 text-purple-400" />
          <span className="text-slate-300">Email</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/david-bakhtan/" 
          className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6 text-blue-400" />
          <span className="text-slate-300">LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/DavidBakhtan" 
          className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-gray-500/20 transition-colors duration-300"
        >
          <Github className="w-6 h-6 text-gray-400" />
          <span className="text-slate-300">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
