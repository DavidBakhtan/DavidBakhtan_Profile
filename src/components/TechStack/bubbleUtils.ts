
import { Bubble } from './types';
import { technologies, bubbleColors } from './constants';

// Calculate responsive bubble size based on screen width
export const getResponsiveBubbleSize = (containerWidth: number) => {
  if (containerWidth < 640) return 100; // Mobile - larger
  if (containerWidth < 1024) return 120; // Tablet - larger
  return 140; // Desktop - larger
};

// Generate individual bubble with much slower movement
export const createRandomBubble = (containerWidth: number, containerHeight: number): Bubble => {
  const randomTech = technologies[Math.floor(Math.random() * technologies.length)];
  const randomColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
  const bubbleSize = getResponsiveBubbleSize(containerWidth);
  
  const safeMargin = bubbleSize / 2;
  const minX = safeMargin;
  const maxX = containerWidth - safeMargin;
  const safeWidth = maxX - minX;
  
  return {
    id: Math.random() * 10000,
    tech: randomTech,
    startX: minX + (Math.random() * safeWidth),
    currentX: minX + (Math.random() * safeWidth),
    currentY: containerHeight + bubbleSize,
    // Much slower velocities for very gentle bubble movement
    velocityX: (Math.random() - 0.5) * 0.05,
    velocityY: -0.003 - Math.random() * 0.01,
    duration: Math.random() * 100 + 120,
    delay: Math.random() * 8,
    color: randomColor,
    size: bubbleSize,
    waveAmplitude: Math.min(Math.random() * 20 + 55, safeWidth / 8),
    waveFrequency: Math.random() * 0.4 + 0.3,
    isPopping: false,
    containerWidth: containerWidth,
    containerHeight: containerHeight,
  };
};
