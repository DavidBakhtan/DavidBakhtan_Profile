
import { useState, useEffect } from 'react';
import { PullToRefresh } from '@/components/PullToRefresh';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  useScrollToTop();

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

  const aiSkills = [
    'AI Tools', 'ChatGPT', 'Zapier', 'Make.com', 'Google Apps Script',
    'JSON Handling', 'API Integrations', 'Auto Workflows', 'Data Parsing', 'Web Scraping'
  ];

  const designSkills = [
    'Figma', 'Adobe XD', 'Canva', 'UI Wireframes', 'Branding Kits',
    'Responsive Layouts', 'Meta Ads Manager', 'Hashtag Strategy', 'Scheduling Tools', 'Trend Analysis'
  ];

  const devSkills = [
    'Android Studio', 'Java', 'Kotlin', 'Firebase', 'Push Notifications',
    'HTML / CSS / JS', 'React.js', 'Tailwind CSS', 'REST APIs', 'Git & GitHub', 'Swift'
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <Navigation />

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h1>
              
              <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
                A comprehensive toolkit spanning AI automation, creative design, and full-stack development
              </p>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* AI & Automation */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">🧠</div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      AI & Automation
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {aiSkills.map((skill, index) => (
                      <div 
                        key={skill}
                        className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-slate-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design & Social Media */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">🎨</div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Design & Social Media
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {designSkills.map((skill, index) => (
                      <div 
                        key={skill}
                        className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-slate-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile & Web Development */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">📱</div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      Mobile & Web Development
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {devSkills.map((skill, index) => (
                      <div 
                        key={skill}
                        className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-slate-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expertise Level Indicators */}
              <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Experience Level
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-2xl font-bold text-blue-400">8+</div>
                    <div className="text-slate-400">Years Experience</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <div className="text-2xl font-bold text-purple-400">30+</div>
                    <div className="text-slate-400">Projects Completed</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏢</div>
                    <div className="text-2xl font-bold text-green-400">3</div>
                    <div className="text-slate-400">Companies Managed</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-2xl font-bold text-yellow-400">100%</div>
                    <div className="text-slate-400">Automation Focus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PullToRefresh>
  );
};

export default Skills;
