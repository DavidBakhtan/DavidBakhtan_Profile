
import { useState, useEffect, useRef } from 'react';

export const useTimelineProgress = () => {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current) return;

      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if we're at the very top of the page
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop === 0) {
        setProgress(0);
        return;
      }
      
      // Start animation when element enters 80% of viewport
      const triggerStart = windowHeight * 0.8;
      // End animation when element exits 20% of viewport
      const triggerEnd = -rect.height + windowHeight * 0.2;
      
      if (rect.top <= triggerStart && rect.top >= triggerEnd) {
        const totalDistance = triggerStart - triggerEnd;
        const currentDistance = triggerStart - rect.top;
        const progressValue = Math.min(100, Math.max(0, (currentDistance / totalDistance) * 100));
        setProgress(progressValue);
      } else if (rect.top < triggerEnd) {
        setProgress(100);
      } else {
        setProgress(0);
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { progress, timelineRef };
};
