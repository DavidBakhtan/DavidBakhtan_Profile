
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { PullToRefresh } from '@/components/PullToRefresh';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import VideoShowcase from '../components/Portfolio/VideoShowcase';
import SocialMediaPosts from '../components/Portfolio/SocialMediaPosts';
import WebsitesSection from '../components/Portfolio/WebsitesSection';

const Portfolio = () => {
  useScrollToTop();
  
  const [isVisible, setIsVisible] = useState(false);

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
        <Navigation />

        <div className="pt-32 pb-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto px-4">
                A showcase of my work across automation, development, and creative design
              </p>

              <Tabs defaultValue="websites" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 md:mb-12 bg-slate-800/50 border border-slate-700/50 h-auto">
                  <TabsTrigger 
                    value="videos" 
                    className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 text-xs md:text-sm py-2 md:py-3 px-1 md:px-3"
                  >
                    <span className="block md:inline">🎥</span>
                    <span className="block md:inline md:ml-1">Video</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="posts" 
                    className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 text-xs md:text-sm py-2 md:py-3 px-1 md:px-3"
                  >
                    <span className="block md:inline">🖼️</span>
                    <span className="block md:inline md:ml-1">Posts</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="websites" 
                    className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-xs md:text-sm py-2 md:py-3 px-1 md:px-3"
                  >
                    <span className="block md:inline">🌐</span>
                    <span className="block md:inline md:ml-1">Apps</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="videos" className="space-y-8">
                  <VideoShowcase />
                </TabsContent>

                <TabsContent value="posts" className="space-y-8">
                  <SocialMediaPosts />
                </TabsContent>

                <TabsContent value="websites" className="space-y-8">
                  <WebsitesSection />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PullToRefresh>
  );
};

export default Portfolio;
