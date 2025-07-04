
const ServicesSection = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
      <h3 className="text-xl font-bold mb-6 text-slate-200">How I Can Help</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-slate-300">Business Process Automation</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-slate-300">Custom Web Applications</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-slate-300">Mobile App Development</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span className="text-slate-300">Web Infrastructure & Hosting</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          <span className="text-slate-300">Social Media & Marketing Automation</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
