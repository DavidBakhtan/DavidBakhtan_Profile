
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:davidbakhtan@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+14374281995';
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-700/30 p-3 rounded-lg transition-colors" onClick={handleEmailClick}>
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="text-slate-300 font-medium">Email</div>
            <div className="text-slate-400">info@davidbakhtan.dev</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-700/30 p-3 rounded-lg transition-colors" onClick={handlePhoneClick}>
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <div className="text-slate-300 font-medium">Phone</div>
            <div className="text-slate-400">+1 (437) 428-1995</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-700/30 p-3 rounded-lg transition-colors">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <div className="text-slate-300 font-medium">Location</div>
            <div className="text-slate-400">Remote / Available Worldwide</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
