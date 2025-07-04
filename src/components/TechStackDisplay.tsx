
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Bubble } from './TechStack/types';
import { createRandomBubble } from './TechStack/bubbleUtils';
import { checkCollision, handleCollision, updateBubblePosition, checkTitleCollision } from './TechStack/physicsUtils';
import { TechBubble } from './TechStack/TechBubble';

export const TechStackDisplay = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef<number>();

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update container dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Physics simulation for bubble collisions
  useEffect(() => {
    if (bubbles.length === 0) return;

    const updateBubblePhysics = () => {
      setBubbles(prevBubbles => {
        let updatedBubbles = [...prevBubbles];
        
        // Update positions and handle boundary collisions
        for (let i = 0; i < updatedBubbles.length; i++) {
          if (!updatedBubbles[i].isPopping) {
            updatedBubbles[i] = updateBubblePosition(updatedBubbles[i], containerWidth, containerHeight);
          }
        }
        
        // Check bubble-to-bubble collisions
        for (let i = 0; i < updatedBubbles.length; i++) {
          for (let j = i + 1; j < updatedBubbles.length; j++) {
            if (!updatedBubbles[i].isPopping && !updatedBubbles[j].isPopping && 
                checkCollision(updatedBubbles[i], updatedBubbles[j])) {
              const result = handleCollision(updatedBubbles[i], updatedBubbles[j]);
              updatedBubbles[i] = result.bubble1;
              updatedBubbles[j] = result.bubble2;
            }
          }
        }

        // Check collisions with title
        if (titleRef.current && containerRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          
          const titleBounds = {
            x: titleRect.left - containerRect.left,
            y: titleRect.top - containerRect.top,
            width: titleRect.width,
            height: titleRect.height
          };

          for (let i = 0; i < updatedBubbles.length; i++) {
            if (!updatedBubbles[i].isPopping && checkTitleCollision(updatedBubbles[i], titleBounds)) {
              console.log('Bubble collision detected with title!', updatedBubbles[i].id);
              updatedBubbles[i] = { ...updatedBubbles[i], isPopping: true };
            }
          }
        }
        
        return updatedBubbles;
      });
      
      animationFrameRef.current = requestAnimationFrame(updateBubblePhysics);
    };

    animationFrameRef.current = requestAnimationFrame(updateBubblePhysics);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [bubbles.length, containerWidth, containerHeight]);

  useEffect(() => {
    if (containerWidth === 0 || containerHeight === 0) return;

    // Adjust bubble count based on screen size
    const initialBubbleCount = isMobile 
      ? Math.floor(Math.random() * 2) + 1  // Mobile: 1-2 bubbles
      : Math.floor(Math.random() * 3) + 2; // Desktop: 2-4 bubbles

    let i = 0;

    const addInitialBubble = () => {
      if (i >= initialBubbleCount) return;
      setBubbles(prev => [...prev, createRandomBubble(containerWidth, containerHeight)]);
      i++;
      setTimeout(addInitialBubble, 200);
    };

    addInitialBubble();

    // Add more bubbles periodically with mobile-specific limits
    const addRandomBubble = () => {
      setBubbles(prev => {
        const maxBubbles = isMobile ? 5 : 10; // Mobile: max 5, Desktop: max 10
        if (prev.length >= maxBubbles) return prev;
        return [...prev, createRandomBubble(containerWidth, containerHeight)];
      });

      // Longer delays on mobile to reduce performance impact
      const nextDelay = isMobile 
        ? Math.random() * 6000 + 2000  // Mobile: 2-8 seconds
        : Math.random() * 4000 + 200; // Desktop: 1.2-5.2 seconds
        
      setTimeout(addRandomBubble, nextDelay);
    };

    const initialTimeout = setTimeout(addRandomBubble, isMobile ? 2000 : 500);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, [containerWidth, containerHeight, isMobile]);

  const handleBubblePop = (bubbleId: number) => {
    setBubbles(prev => 
      prev.map(bubble => 
        bubble.id === bubbleId 
          ? { ...bubble, isPopping: true }
          : bubble
      )
    );
    
    setTimeout(() => {
      setBubbles(prev => prev.filter(bubble => bubble.id !== bubbleId));
    }, 40000);
  };

  const handleAnimationComplete = (bubble: Bubble) => {
    if (bubble.isPopping) {
      setBubbles(prev => prev.filter(b => b.id !== bubble.id));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Simple title without spikes */}
      <motion.div
        ref={titleRef}
        className="relative inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="z-20 text-center text-xl font-semibold text-white font-grotesk p-6 rounded-lg">
          Technologies I Work With
        </h3>
      </motion.div>
      
      {/* Bubble Container with proper bounds */}
      <div 
        ref={containerRef}
        className="flex-1 relative w-full overflow-hidden"
        style={{ minHeight: 'calc(100vh - 200px)' }}
      >
        {bubbles.map((bubble) => (
          <TechBubble
            key={bubble.id}
            bubble={bubble}
            onPop={handleBubblePop}
            onAnimationComplete={() => handleAnimationComplete(bubble)}
          />
        ))}
      </div>
    </motion.div>
  );
};
