import { motion } from 'motion/react';
import { Bubble } from './types';
interface TechBubbleProps {
  bubble: Bubble;
  onPop: (bubbleId: number) => void;
  onAnimationComplete: () => void;
}
export const TechBubble = ({
  bubble,
  onPop,
  onAnimationComplete
}: TechBubbleProps) => {
  const getSizeClasses = (size: number) => {
    if (size < 110) return {
      container: 'w-24 h-24',
      text: 'text-xs'
    };
    if (size < 130) return {
      container: 'w-28 h-28',
      text: 'text-sm'
    };
    return {
      container: 'w-32 h-32',
      text: 'text-base'
    };
  };
  const sizeClasses = getSizeClasses(bubble.size);
  return <motion.div key={bubble.id} className={`absolute ${sizeClasses.container} rounded-full bg-gradient-to-br ${bubble.color} shadow-lg border border-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer z-10`} style={{
    left: bubble.currentX - bubble.size / 2,
    top: bubble.currentY - bubble.size / 2
  }} initial={{
    opacity: 0,
    scale: 0.8
  }} animate={bubble.isPopping ? {
    scale: [1, 1.5, 2.5, 0],
    opacity: [1, 0.9, 0.7, 0],
    rotate: [0, 180, 360, 720]
  } : {
    opacity: 1,
    scale: 1,
    rotate: 0
  }} transition={bubble.isPopping ? {
    duration: 0.6,
    ease: "easeOut",
    times: [0, 0.3, 0.7, 1]
  } : {
    duration: 0.3,
    ease: "easeOut"
  }} whileHover={{
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  }} onAnimationComplete={onAnimationComplete} onClick={() => onPop(bubble.id)}>
      <span className={`text-white font-semibold text-center px-1 font-grotesk leading-tight ${sizeClasses.text} drop-shadow-lg`}>
        {bubble.tech}
      </span>
      
      {/* Bubble shine effect - enhanced for better visibility */}
      <div className="absolute top-2 left-2 w-4 h-4 bg-white/50 rounded-full blur-sm" />
      
      
      {/* Enhanced pop effect particles */}
      {bubble.isPopping && <>
          {Array.from({
        length: 12
      }).map((_, i) => <motion.div key={i} className="absolute w-3 h-3 bg-yellow-400 rounded-full" initial={{
        scale: 0,
        x: 0,
        y: 0
      }} animate={{
        scale: [0, 2, 0],
        x: [0, (Math.random() - 0.5) * 120],
        y: [0, (Math.random() - 0.5) * 120],
        opacity: [1, 0.8, 0]
      }} transition={{
        duration: 0.6,
        delay: i * 0.03
      }} />)}
          
          {/* Ring explosion effect */}
          <motion.div className="absolute inset-0 border-4 border-yellow-400 rounded-full" initial={{
        scale: 1,
        opacity: 1
      }} animate={{
        scale: 4,
        opacity: 0
      }} transition={{
        duration: 0.5
      }} />
          
          {/* Secondary ring */}
          <motion.div className="absolute inset-0 border-2 border-orange-400 rounded-full" initial={{
        scale: 1,
        opacity: 0.8
      }} animate={{
        scale: 6,
        opacity: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} />
        </>}
    </motion.div>;
};