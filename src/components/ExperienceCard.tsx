
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  period: string;
  companies: string[];
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

const ExperienceCard = ({ 
  title, 
  period, 
  companies, 
  location, 
  description, 
  responsibilities, 
  achievements 
}: ExperienceCardProps) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4 md:mb-6">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">{title}</h3>
          <div className="space-y-1">
            {companies.map((company, i) => (
              <div key={i} className="text-base md:text-lg text-slate-300 font-medium">{company}</div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 text-sm md:text-base lg:text-right lg:flex-shrink-0">
          <div className="flex items-center text-slate-400 lg:justify-end">
            <Calendar className="w-4 h-4 mr-2" />
            {period}
          </div>
          <div className="flex items-center text-slate-400 lg:justify-end">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        </div>
      </div>

      <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{description}</p>

      <div className="grid gap-4 md:gap-6 mb-4 md:mb-6">
        <div>
          <h4 className="text-base md:text-lg font-semibold text-purple-400 mb-3">Key Responsibilities</h4>
          <ul className="space-y-2">
            {responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start text-slate-300 text-xs md:text-sm">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base md:text-lg font-semibold text-green-400 mb-3">Key Achievements</h4>
          <ul className="space-y-2">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start text-slate-300 text-xs md:text-sm">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
