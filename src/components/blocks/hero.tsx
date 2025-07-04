
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Globe3D = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-10 pt-32 font-light text-white antialiased md:pb-16 md:pt-20 min-h-screen flex items-center"
    >
      {/* Background gradients */}
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(15, 23, 42, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(15, 23, 42, 0) 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-purple-400/30 px-3 py-1 text-xs text-purple-400">
            NEXT GENERATION OF CRYPTO TRADING
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Trade Smarter with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered</span> Crypto Insights
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Lunexa combines artificial intelligence with cutting-edge trading strategies to help you maximize your crypto investments with precision and ease.
          </p>

          <div className="mb-10 sm:mb-0 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] sm:w-auto"
            >
              <Link to="/portfolio">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="flex w-full items-center justify-center gap-2 text-slate-300 hover:bg-transparent hover:text-white transition-colors sm:w-auto px-8 py-4"
            >
              <a href="#how-it-works">
                Learn how it works
                <ChevronDown className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Globe/Earth with purple/pink gradient */}
          <div className="w-full flex h-64 md:h-96 relative overflow-hidden mb-8">
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 md:w-[500px] md:h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, #ec4899 0%, #8b5cf6 40%, #3b82f6 80%, #1e293b 100%)",
                filter: "blur(1px)",
                opacity: 0.9
              }}
            />
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 md:w-[500px] md:h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)",
                transform: "scale(1.1)"
              }}
            />
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)]">
            <div className="h-64 md:h-80 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-lg border border-slate-700/50 flex items-center justify-center backdrop-blur-sm">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-sm">L</span>
                </div>
                <span className="text-lg font-medium">LUNEXA</span>
                <div className="ml-8 flex items-center gap-4">
                  <span className="text-sm">Dashboard</span>
                  <div className="w-64 h-8 bg-slate-700/50 rounded border border-slate-600/50 flex items-center px-3">
                    <span className="text-xs text-slate-400">Search...</span>
                  </div>
                  <button className="px-4 py-1 bg-purple-500/20 text-purple-400 text-sm rounded border border-purple-500/30">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Globe3D;
