
const CareerHighlights = () => {
  return (
    <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
      <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Career Highlights
      </h3>
      
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
          <div className="text-slate-400">Years in Tech</div>
        </div>
        
        <div>
          <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
          <div className="text-slate-400">Companies Managed</div>
        </div>
        
        <div>
          <div className="text-3xl font-bold text-green-400 mb-2">30+</div>
          <div className="text-slate-400">Projects Delivered</div>
        </div>
        
        <div>
          <div className="text-3xl font-bold text-yellow-400 mb-2">80%</div>
          <div className="text-slate-400">Process Automation</div>
        </div>
      </div>
    </div>
  );
};

export default CareerHighlights;
