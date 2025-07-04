
import { useState } from "react"
import { motion } from 'motion/react';
import { CollaborationCard } from './CollaborationCard';
import { TechStackDisplay } from './TechStackDisplay';
import { TimeZoneCard } from './TimeZoneCard';
import { CTACard } from './CTACard';
import { WhatImBuildingSection } from './WhatImBuildingSection';
import { AnimatedGradientCard } from '@/components/ui/AnimatedGradientCard';
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { StarBorder } from './star-border';

export const CollaborationSection = () => {
  const [focusLocation, setFocusLocation] = useState<[number, number] | null>(null)
  return (
    <section className="py-2 sm:py-4 lg:py-20 px-2 sm:px-4 lg:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="
          flex flex-col space-y-1 
          lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 lg:space-y-0 
          auto-rows-fr
        ">
          
          {/* Collaboration Card */}
          <div className="lg:col-span-2 lg:row-span-1 h-full">
            <AnimatedGradientCard className="
              min-h-[120px] sm:min-h-[180px] lg:min-h-[350px] 
              transition-all duration-300 bg-slate-800/80 backdrop-blur-sm dark:bg-zinc-900 rounded-2xl
            ">
              <CollaborationCard />
            </AnimatedGradientCard>
           </div>

          {/* Tech Stack */}
          <div className="lg:col-span-1 lg:row-span-2 h-full">
            <AnimatedGradientCard className="
              min-h-[120px] sm:min-h-[180px] lg:min-h-[735px] 
              transition-all duration-300 bg-slate-800/80 backdrop-blur-sm dark:bg-zinc-900 rounded-2xl
            ">
              <TechStackDisplay />
            </AnimatedGradientCard>
          </div>

          {/* Time Zone */}
          <div className="lg:col-span-1 lg:row-span-2 h-full">
            <AnimatedGradientCard className="
              min-h-[120px] sm:min-h-[180px] lg:min-h-[735px] 
              transition-all duration-300 bg-slate-800/80 backdrop-blur-sm dark:bg-zinc-900 rounded-2xl overflow-hidden relative
            ">
              
              {/* Top-Centered Text */}
              <div className="absolute top-2 sm:top-4 lg:top-8 w-full z-10 text-center px-2 sm:px-4">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-blue-300/80 bg-clip-text text-sm sm:text-lg lg:text-2xl xl:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  I'm very flexible with time zone communications
                </span>
                  <div className="flex flex-wrap gap-1 sm:gap-2 items-center justify-center mt-1 sm:mt-2 lg:mt-4">
                    <button
                      onClick={() => setFocusLocation([30.0444, 31.2357])} // مصر
                      className="flex items-center gap-1 px-2 sm:px-3 lg:px-5 py-1 sm:py-2 rounded-2xl bg-slate-800 text-white hover:bg-slate-700 transition duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm"
                    >
                      🇪🇬 <span>Egypt</span>
                    </button>
                  
                    <button
                      onClick={() => setFocusLocation([43.651070, -79.347015])}
                      className="flex items-center gap-1 px-2 sm:px-3 lg:px-5 py-1 sm:py-2 rounded-2xl bg-slate-800 text-white hover:bg-slate-700 transition duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm"
                    >
                      🇨🇦 <span>Canada</span>
                    </button>
                  
                    <button
                      onClick={() => setFocusLocation([40.7128, -74.006])}
                      className="flex items-center gap-1 px-2 sm:px-3 lg:px-5 py-1 sm:py-2 rounded-2xl bg-slate-800 text-white hover:bg-slate-700 transition duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm"
                    >
                      🇺🇸 <span>USA</span>
                    </button>
                  </div>

              </div>
          
              {/* Globe (Background) */}
              <Globe className="relative z-0 top-8 sm:top-16 lg:top-28" focusLocation={focusLocation}/>
          
              {/* Optional Radial Overlay */}
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </AnimatedGradientCard>
          </div>

          {/* CTA */}
          <div className="lg:col-span-1 lg:row-span-1 h-full">
            <AnimatedGradientCard className="
              min-h-[120px] sm:min-h-[180px] lg:min-h-[350px] 
              transition-all duration-300 bg-slate-800/80 backdrop-blur-sm dark:bg-zinc-900 rounded-3xl
            ">
              <CTACard />
            </AnimatedGradientCard>
          </div>

          {/* What I'm Building */}
          <div className="lg:col-span-2 lg:row-span-1 h-full">
            <AnimatedGradientCard className="
              min-h-[120px] sm:min-h-[180px] lg:min-h-[350px] 
              transition-all duration-300 bg-slate-800/80 backdrop-blur-sm dark:bg-zinc-900 rounded-2xl
            ">
              <WhatImBuildingSection />
            </AnimatedGradientCard>
          </div>

        </div>
      </div>
    </section>
  );
};
