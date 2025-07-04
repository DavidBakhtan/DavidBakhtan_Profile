
import { Bubble } from './types';

// Check collision between two bubbles
export const checkCollision = (bubble1: Bubble, bubble2: Bubble, distance: number = 25): boolean => {
  const dx = bubble1.currentX - bubble2.currentX;
  const dy = bubble1.currentY - bubble2.currentY;
  const actualDistance = Math.sqrt(dx * dx + dy * dy);
  const minDistance = (bubble1.size + bubble2.size) / 2 + distance;
  
  return actualDistance < minDistance;
};

// Handle collision response
export const handleCollision = (bubble1: Bubble, bubble2: Bubble): { bubble1: Bubble, bubble2: Bubble } => {
  const dx = bubble1.currentX - bubble2.currentX;
  const dy = bubble1.currentY - bubble2.currentY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  if (distance === 0) return { bubble1, bubble2 };
  
  // Normalize collision vector
  const nx = dx / distance;
  const ny = dy / distance;
  
  // Relative velocity
  const dvx = bubble1.velocityX - bubble2.velocityX;
  const dvy = bubble1.velocityY - bubble2.velocityY;
  
  // Relative velocity in collision normal direction
  const dvn = dvx * nx + dvy * ny;
  
  // Only resolve if velocities are separating
  if (dvn > 0) return { bubble1, bubble2 };
  
  // Lighter collision response for more natural bubble behavior
  const impulse = 1.5 * dvn / 2;
  
  return {
    bubble1: {
      ...bubble1,
      velocityX: bubble1.velocityX - impulse * nx * 0.6,
      velocityY: bubble1.velocityY - impulse * ny * 0.6,
    },
    bubble2: {
      ...bubble2,
      velocityX: bubble2.velocityX + impulse * nx * 0.6,
      velocityY: bubble2.velocityY + impulse * ny * 0.6,
    }
  };
};

// Check collision with title - more accurate detection
export const checkTitleCollision = (bubble: Bubble, titleBounds: { x: number; y: number; width: number; height: number }): boolean => {
  const bubbleRadius = bubble.size / 2;
  
  // More generous collision detection for the spiky title
  const expandedBounds = {
    x: titleBounds.x - 40,
    y: titleBounds.y - 35,
    width: titleBounds.width + 80,
    height: titleBounds.height + 70
  };
  
  // Check if any part of the bubble overlaps with the expanded title area
  const bubbleLeft = bubble.currentX - bubbleRadius;
  const bubbleRight = bubble.currentX + bubbleRadius;
  const bubbleTop = bubble.currentY - bubbleRadius;
  const bubbleBottom = bubble.currentY + bubbleRadius;
  
  const titleLeft = expandedBounds.x;
  const titleRight = expandedBounds.x + expandedBounds.width;
  const titleTop = expandedBounds.y;
  const titleBottom = expandedBounds.y + expandedBounds.height;
  
  return !(bubbleRight < titleLeft || 
           bubbleLeft > titleRight || 
           bubbleBottom < titleTop || 
           bubbleTop > titleBottom);
};

// Update bubble physics with more natural bubble movement
export const updateBubblePosition = (bubble: Bubble, containerWidth: number, containerHeight: number): Bubble => {
  const safeMargin = bubble.size / 2;
  
  // Add slight upward buoyancy for natural bubble behavior
  const buoyancy = -0.006;
  let newVelocityX = bubble.velocityX;
  let newVelocityY = bubble.velocityY + buoyancy;
  
  // Add slight horizontal drift for more natural movement
  const drift = Math.sin(Date.now() * 0.001 + bubble.id) * 0.007;
  newVelocityX += drift;
  
  // Update position
  const newX = bubble.currentX + newVelocityX;
  const newY = bubble.currentY + newVelocityY;
  
  let finalX = newX;
  let finalY = newY;
  
  // Boundary collision detection and response
  if (newX <= safeMargin || newX >= containerWidth - safeMargin) {
    newVelocityX *= -0.8; // More bouncy collision
    finalX = Math.max(safeMargin, Math.min(containerWidth - safeMargin, newX));
  }
  
  if (newY <= safeMargin || newY >= containerHeight - safeMargin) {
    newVelocityY *= -0.7; // More bouncy collision
    finalY = Math.max(safeMargin, Math.min(containerHeight - safeMargin, newY));
  }
  
  // Less damping for more active movement
  newVelocityX *= 0.998;
  newVelocityY *= 0.998;
  
  return {
    ...bubble,
    currentX: finalX,
    currentY: finalY,
    velocityX: newVelocityX,
    velocityY: newVelocityY,
  };
};
