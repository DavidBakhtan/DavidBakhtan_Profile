
import ExperienceCard from './ExperienceCard';
import { useTimelineProgress } from '@/hooks/useTimelineProgress';

interface Experience {
  title: string;
  period: string;
  companies: string[];
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  const { progress, timelineRef } = useTimelineProgress();

  // Unified positioning constants for all elements
  const timelineLeftPosition = 'left-4 md:left-8'; // Base position for all elements

  return (
    <div ref={timelineRef} className="relative">
      <div className="relative">
        {/* Timeline Line Container */}
        <div className={`absolute ${timelineLeftPosition} top-0 bottom-0 w-0.5 bg-slate-600`}>
          {/* Progress Line */}
          <div 
            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-400 transition-all duration-300 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>

        {/* Profile Image - perfectly aligned with progress line end */}
        <div 
          className="absolute z-10 transition-all duration-300 ease-out w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden -ml-5 md:-ml-6"
          style={{ 
            left: '1rem', // Mobile: left-4 = 1rem
            top: `calc(${progress}% - 20px)` // Progress minus half image height (mobile: 40px/2)
          }}
        >
          <img 
            src="/profile_image.JPG" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Timeline Content */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot - aligned with timeline line */}
              <div className={`absolute ${timelineLeftPosition} w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-3 md:border-4 border-slate-900 z-5 -translate-x-2 md:-translate-x-2.5`} />
              
              {/* Experience Card */}
              <div className="ml-12 md:ml-20">
                <ExperienceCard
                  title={exp.title}
                  period={exp.period}
                  companies={exp.companies}
                  location={exp.location}
                  description={exp.description}
                  responsibilities={exp.responsibilities}
                  achievements={exp.achievements}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
