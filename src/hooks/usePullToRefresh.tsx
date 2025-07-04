
import { useState, useEffect, useCallback } from 'react';

interface UsePullToRefreshOptions {
  onRefresh: () => Promise<void> | void;
  threshold?: number;
  resistance?: number;
}

export const usePullToRefresh = ({ 
  onRefresh, 
  threshold = 80, 
  resistance = 2.2 
}: UsePullToRefreshOptions) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [startY, setStartY] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    // Enhanced check for top of page
    const isAtTop = window.pageYOffset <= 5 && document.documentElement.scrollTop <= 5;
    
    if (isAtTop && !isRefreshing) {
      setStartY(e.touches[0].clientY);
      setStartTime(Date.now());
    }
  }, [isRefreshing]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const isAtTop = window.pageYOffset <= 5 && document.documentElement.scrollTop <= 5;
    
    if (!isAtTop || isRefreshing || startY === 0) return;

    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, (currentY - startY) / resistance);
    
    if (distance > 0) {
      setPullDistance(distance);
      // Prevent default scrolling when pulling down
      e.preventDefault();
      
      // Add haptic feedback on threshold reach (if supported)
      if (distance > threshold && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  }, [startY, resistance, isRefreshing, threshold]);

  const handleTouchEnd = useCallback(async () => {
    if (pullDistance > threshold && !isRefreshing) {
      setIsRefreshing(true);
      
      // Add haptic feedback for refresh start
      if ('vibrate' in navigator) {
        navigator.vibrate([20, 10, 20]);
      }
      
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        // Smooth transition back
        setTimeout(() => {
          setIsRefreshing(false);
          setPullDistance(0);
          setStartY(0);
        }, 600);
      }
    } else {
      // Smooth return animation
      setPullDistance(0);
      setStartY(0);
    }
  }, [pullDistance, threshold, isRefreshing, onRefresh]);

  useEffect(() => {
    // Enhanced mobile detection
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isMobile) return;

    const options = { passive: false };
    
    document.addEventListener('touchstart', handleTouchStart, options);
    document.addEventListener('touchmove', handleTouchMove, options);
    document.addEventListener('touchend', handleTouchEnd, options);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    isRefreshing,
    pullDistance,
    isPulling: pullDistance > 0
  };
};
