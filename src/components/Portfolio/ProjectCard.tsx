
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  children?: React.ReactNode;
  img?: string;
  colorTheme?: 'blue' | 'red' | 'green' | 'purple' | 'yellow' | 'teal';
  width?: 'full' | 'half' | 'third' | 'quarter';
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  liveUrl, 
  codeUrl, 
  featured = false,
  children,
  img,
  colorTheme = 'blue',
  width = 'full',
}: ProjectCardProps) => {
  // Color theme classes
  const getColorClasses = (theme: string) => {
    switch (theme) {
      case 'green':
        return {
          gradient: 'from-green-400 to-blue-400',
          tagVariants: [
            'bg-green-500/20 text-green-400 border border-green-400/20',
            'bg-green-600/20 text-green-300 border border-green-300/20',
            'bg-emerald-500/20 text-emerald-400 border border-emerald-400/20',
            'bg-teal-500/20 text-teal-400 border border-teal-400/20',
            'bg-green-400/20 text-green-500 border border-green-500/20'
          ],
          border: 'border-green-500/30',
          hoverBorder: 'hover:border-green-500/70',
          button: 'from-green-500 to-blue-600 hover:from-green-600 hover:to-green-700',
          bgGradient: 'from-green-500/20 to-green-300/20'
        };
      case 'purple':
        return {
          gradient: 'from-purple-400 to-pink-300',
          tagVariants: [
            'bg-purple-500/20 text-purple-400 border border-purple-400/20',
            'bg-violet-500/20 text-violet-400 border border-violet-400/20',
            'bg-indigo-500/20 text-indigo-400 border border-indigo-400/20',
            'bg-pink-500/20 text-pink-400 border border-pink-400/20',
            'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-400/20'
          ],
          border: 'border-purple-500/30',
          hoverBorder: 'hover:border-purple-500/70',
          button: 'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-purple-700',
          bgGradient: 'from-purple-500/20 to-purple-300/20'
        };
      case 'yellow':
        return {
          gradient: 'from-yellow-400 to-rose-400',
          tagVariants: [
            'bg-yellow-500/20 text-yellow-400 border border-yellow-400/20',
            'bg-amber-500/20 text-amber-400 border border-amber-400/20',
            'bg-orange-500/20 text-orange-400 border border-orange-400/20',
            'bg-red-500/20 text-red-400 border border-red-400/20',
            'bg-rose-500/20 text-rose-400 border border-rose-400/20'
          ],
          border: 'border-yellow-500/30',
          hoverBorder: 'hover:border-yellow-500/70',
          button: 'from-yellow-500 to-rose-600 hover:from-yellow-600 hover:to-yellow-700',
          bgGradient: 'from-yellow-500/20 to-yellow-300/20'
        };
      case 'red':
        return {
          gradient: 'from-red-400 to-pink-300',
          tagVariants: [
            'bg-red-500/20 text-red-400 border border-red-400/20',
            'bg-rose-500/20 text-rose-400 border border-rose-400/20',
            'bg-pink-500/20 text-pink-400 border border-pink-400/20',
            'bg-orange-500/20 text-orange-400 border border-orange-400/20',
            'bg-red-600/20 text-red-300 border border-red-300/20'
          ],
          border: 'border-red-500/30',
          hoverBorder: 'hover:border-red-500/70',
          button: 'from-red-500 to-pink-600 hover:from-red-600 hover:to-red-700',
          bgGradient: 'from-red-500/20 to-red-300/20'
        };
      case 'teal':
        return {
          gradient: 'from-teal-400 to-cyan-300',
          tagVariants: [
            'bg-teal-500/20 text-teal-400 border border-teal-400/20',
            'bg-cyan-500/20 text-cyan-400 border border-cyan-400/20',
            'bg-emerald-500/20 text-emerald-400 border border-emerald-400/20',
            'bg-green-500/20 text-green-400 border border-green-400/20',
            'bg-blue-500/20 text-blue-400 border border-blue-400/20'
          ],
          border: 'border-teal-500/30',
          hoverBorder: 'hover:border-teal-500/70',
          button: 'from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-teal-700',
          bgGradient: 'from-teal-500/20 to-teal-300/20'
        };
      default: // blue
        return {
          gradient: 'from-blue-400 to-cyan-300',
          tagVariants: [
            'bg-blue-500/20 text-blue-400 border border-blue-400/20',
            'bg-sky-500/20 text-sky-400 border border-sky-400/20',
            'bg-cyan-500/20 text-cyan-400 border border-cyan-400/20',
            'bg-indigo-500/20 text-indigo-400 border border-indigo-400/20',
            'bg-blue-600/20 text-blue-300 border border-blue-300/20'
          ],
          border: 'border-blue-500/30',
          hoverBorder: 'hover:border-blue-500/70',
          button: 'from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-blue-700',
          bgGradient: 'from-blue-500/20 to-blue-300/20'
        };
    }
  };

  const colors = getColorClasses(colorTheme);

  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border ${colors.border} ${colors.hoverBorder} transition-all duration-300 flex flex-col h-full`}>
      {featured && width === 'full' ? (
        <div className="grid md:grid-cols-2 gap-8 items-center flex-1">
          <div className="flex flex-col h-full">
            <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent text-center md:text-left`}>
              {title}
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed flex-1 text-center md:text-left">
              {description}
            </p>
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colors.tagVariants[index % colors.tagVariants.length]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center justify-center md:justify-start">
              {liveUrl && (
                <Button 
                  className={`bg-gradient-to-r ${colors.button} text-white rounded-xl px-6 py-3 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto`}
                  onClick={() => window.open(liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              )}
              {codeUrl && (
                <Button 
                  className="border border-slate-500 text-white rounded-xl px-6 py-3 transition-all duration-500 bg-transparent
                    hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto"
                  onClick={() => window.open(codeUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className={`bg-gradient-to-br ${colors.bgGradient} rounded-xl p-4 border ${colors.border} w-full max-w-md`}>
              {img ? (
                <img
                  src={img}
                  alt={`${title} preview`}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              ) : (
                <div className="h-40 bg-slate-600/40 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400">Preview Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : featured && width === 'half' ? (
        <div className="flex flex-col h-full">
          {/* Image at top for half width */}
          <div className="relative mb-6 flex justify-center">
            <div className={`bg-gradient-to-br ${colors.bgGradient} rounded-xl p-4 border ${colors.border} w-full`}>
              {img ? (
                <img
                  src={img}
                  alt={`${title} preview`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              ) : (
                <div className="h-48 bg-slate-600/40 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400">Preview Coming Soon</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col flex-1">
            <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent text-center md:text-left`}>
              {title}
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed flex-1 text-center md:text-left">
              {description}
            </p>
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colors.tagVariants[index % colors.tagVariants.length]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center justify-center md:justify-start">
              {liveUrl && (
                <Button 
                  className={`bg-gradient-to-r ${colors.button} text-white rounded-xl px-6 py-3 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto`}
                  onClick={() => window.open(liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              )}
              {codeUrl && (
                <Button 
                  className="border border-slate-500 text-white rounded-xl px-6 py-3 transition-all duration-500 bg-transparent
                    hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 w-full sm:w-auto"
                  onClick={() => window.open(codeUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          {children}
          <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{title}</h3>
          <p className="text-slate-400 mb-4 flex-1 text-center md:text-left">{description}</p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto items-center justify-center md:justify-start">
            {liveUrl && (
              <Button 
                size="sm"
                variant="outline"
                className="border-slate-500 text-white hover:bg-slate-700 w-full sm:w-auto"
                onClick={() => window.open(liveUrl, '_blank')}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                View App
              </Button>
            )}
            {codeUrl && (
              <Button 
                size="sm"
                className="border border-slate-500 text-white rounded-xl px-6 py-3 transition-all duration-500 bg-transparent
                    hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 w-full sm:w-auto"
                onClick={() => window.open(codeUrl, '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                View Code
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
