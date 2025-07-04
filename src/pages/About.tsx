
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { PullToRefresh } from '@/components/PullToRefresh';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
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

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <Navigation />

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent animated-gradient-text">
              About Me
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-pulse">
                    <div className="relative h-96 bg-slate-900 rounded-2xl overflow-hidden">
                      {!imageError ? (
                        <img
                          src="/profile_image.JPG"
                          alt="David Bakhtan"
                          className="w-full h-full object-cover"
                          onError={() => setImageError(true)}
                          onLoad={() => console.log('About page profile image loaded successfully')}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-white text-6xl font-bold">DB</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed">
                   Hi I am <span className="animated-gradient-text">David</span>, I'm a <span className="animated-gradient-text">Full-Stack Developer and Automation Expert</span> with over <span className="animated-gradient-text">8</span> years of experience building scalable mobile and web applications. My journey started with Android development, and over the years, I've expanded into creating responsive websites, integrating complex backend systems, and automating workflows using platforms like Make.com.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                   In just the past three months, I've designed, built, and launched three complete websites—from frontend UI/UX to backend logic and integrations. I work with a wide range of technologies including Java, Kotlin, JavaScript, React, Python, HTML, CSS, and MySQL.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Beyond coding, I specialize in connecting domains, hosting, DNS, and setting up Google Workspace environments from scratch—making sure everything runs smoothly and securely.
                  </p>
                   <p className="text-lg text-slate-300 leading-relaxed">
                    I'm proud to have completed my Web Development training with VeroSkills (where I now also work as a part-time tutor), and I'm currently pursuing further studies at Trios College to deepen my academic background. I love learning, experimenting, and solving real-world problems—whether independently or within a team.
                  </p>
                   <p className="text-lg text-slate-300 leading-relaxed">
                    If you're looking for someone who brings both technical depth and creative thinking, I'd love to connect.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  What I Do
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <div className="text-4xl mb-4">🔧</div>
                    <h3 className="text-lg font-semibold mb-2">Business Tech Setup</h3>
                    <p className="text-slate-400 text-sm">Google Workspace setup, domain & email configuration, and secure hosting integration.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-lg font-semibold mb-2">Automation</h3>
                    <p className="text-slate-400 text-sm">AI tools, Make.com, and workflow optimization</p>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="text-lg font-semibold mb-2">Development</h3>
                    <p className="text-slate-400 text-sm">Mobile apps, websites, and custom solutions</p>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-lg font-semibold mb-2">Design & Marketing</h3>
                    <p className="text-slate-400 text-sm">Social media campaigns and branded content</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <blockquote className="text-2xl md:text-3xl font-light text-slate-300 italic mb-4">
                  "I merge technology with creativity to craft solutions that are not only functional but visually engaging."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PullToRefresh>
  );
};

export default About;
