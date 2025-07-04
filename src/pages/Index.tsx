import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { SplashCursor } from "@/components/ui/splash-cursor";
import { SplineSceneBasic } from "@/components/ui/demo";
import { SplineScene } from "@/components/ui/splite";
import { CollaborationSection } from "@/components/CollaborationSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import TechAnimation from "@/components/TechAnimation";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { PullToRefresh } from '@/components/PullToRefresh';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useScrollToTop();

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind lg = 1024px
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      <div
        className="fixed top-0 left-0 w-full h-full inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom right, #0f172a, #1e293b, #334155)",
          /* Fix for mobile scrolling - use scroll instead of fixed */
          backgroundAttachment: "scroll",
        }}
      />       
      {/* Background Animations - Both on desktop, TechAnimation only on mobile */}
      <TechAnimation />
      {isDesktop && <SplashCursor />}
      
      <div className="min-h-screen text-white overflow-hidden relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section - Fixed mobile viewport height issues */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-32 pt-32 md:pt-40 overflow-hidden"
          style={{
            /* Support for mobile browsers */
            minHeight: "100svh",
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at 60% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(15, 23, 42, 0) 30%)",
            }}
          />
        
          {/* Human / Robot 3D Spline - Hidden on mobile for better performance */}
          <div className="hidden md:block absolute left-0 top-0 w-1/2 h-full z-10">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        
          {/* Centered Text */}
          <div className="relative z-20 w-full max-w-3xl text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h3 className="mb-6 text-5xl md:text-7xl font-playfair font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-orange-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
                David Bakhtan
              </h3>
            </motion.div>
        
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="mb-6 text-xl md:text-2xl font-grotesk font-medium text-slate-200"
            >
              Full-Stack Developer & Automation Expert
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
              className="mb-10 text-lg font-grotesk text-slate-400 max-w-xl mx-auto"
            >
              I help founders transform ideas into smart solutions that combine technology and innovation.
            </motion.p>
        
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
            >
              <Button
                className="relative w-full sm:w-auto overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-blue-500/50 bg-transparent text-slate-200 hover:bg-blue-500/10 hover:text-white hover:border-blue-400 px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link to="/experience">View Experience</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Collaboration Section */}
        <CollaborationSection />

        {/* Featured Work Preview */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Curated <span className="animated-gradient-text font-playfair ">Work</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                   <div
                      className="w-28 h-28 bg-gradient-to-r from-blue-400 to-purple-400"
                      style={{
                        WebkitMaskImage: 'url(469c07a6-1c73-459f-a252-b0818dd04a2f.png)',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        maskImage: 'url(469c07a6-1c73-459f-a252-b0818dd04a2f.png)',
                        maskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        maskPosition: 'center',
                      }}
                    />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Maro Lens Website</h3>
                <p className="text-slate-400 mb-4">is a modern, responsive web project built with React and Tailwind CSS, featuring smooth animations, elegant color harmony, and a clean visual layout to showcase creative photography work. It includes a functional backend integration that enables direct email communication via contact forms. The project emphasizes seamless UX, image-focused presentation, and a refined interface tailored for a creative brand identity.</p>
                <div className="mt-auto flex gap-2">
                  <Button size="sm"
                    className="border border-slate-500 text-white rounded-xl px-6 py-3 transition-all duration-500 bg-transparent
                    hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                    onClick={() => window.open('https://marolens.com', '_blank')}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </Button>
                </div>
              </div>

              <div className="flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                   <div
                      className="w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400"
                      style={{
                        WebkitMaskImage: 'url(29322301-ea7b-4a36-bf7a-a97ef373ff3b.png)',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        maskImage: 'url(29322301-ea7b-4a36-bf7a-a97ef373ff3b.png)',
                        maskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        maskPosition: 'center',
                      }}
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hope For Human platform</h3>
                <p className="text-slate-400 mb-4">is a purpose-driven, fully responsive web platform designed to represent a humanitarian organization focused on community impact. Built with React and Tailwind CSS, the site combines clean design with intuitive navigation and storytelling visuals. It highlights donation options, volunteer engagement, and project showcases. With animated elements, accessible layouts, and multilingual readiness, the website reflects the organization's mission of hope, unity, and global outreach.</p>
                <div className="mt-auto flex gap-2">
                  <Button size="sm"
                    className="border border-slate-500 text-white rounded-xl px-6 py-3 transition-all duration-500 bg-transparent
                    hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                    onClick={() => window.open('https://hope4human.ca', '_blank')}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Launch Site
                  </Button>
                </div>
              </div>


              <div className="flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <div
                      className="w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400"
                      style={{
                        WebkitMaskImage: 'url(unnamed.gif)',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        maskImage: 'url(unnamed.gif)',
                        maskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        maskPosition: 'center',
                      }}
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Belight Community Mobile App</h3>
                <p className="text-slate-400 mb-4">is a dedicated platform that brings Arabic Christian content to users' fingertips — from worship music and inspirational sermons to TV shows and faith-based movies. The app is designed to help users stay connected with their faith, explore new content, follow their favorite creators, and share uplifting moments with friends and family.
                  I developed the app using Jetpack Compose for a fully declarative UI and implemented a clean architecture supported by a Shared Module. It integrates seamlessly with a backend service and a real-time database, ensuring high performance, scalability, and a smooth user experience. This project highlights my skills in Kotlin, modular architecture, API integration, and modern Android development best practices.
                </p>
                <div className="mt-auto flex gap-2">
                  <Button size="sm"
                      className="border border-slate-500 text-white rounded-xl px-6 py-3 transition-all duration-500 bg-transparent
                      hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=tv.belight.mobile.android&hl=en', '_blank')}>
                     <ExternalLink className="w-4 h-4 mr-2" />
                    View App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </PullToRefresh>
  );
};

export default Index;
