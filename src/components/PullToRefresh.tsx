
import { ReactNode } from 'react';
import { usePullToRefresh } from '@/hooks/usePullToRefresh';
import { ArrowDown, RefreshCcw } from 'lucide-react';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void> | void;
}

export const PullToRefresh = ({ children, onRefresh }: PullToRefreshProps) => {
  const { isRefreshing, pullDistance, isPulling } = usePullToRefresh({ onRefresh });

  return (
    <>
      {/* Enhanced Pull to refresh indicator with higher z-index */}
      <div 
        className="fixed top-0 left-0 right-0 z-[9999] flex justify-center"
        style={{
          transform: `translateY(${Math.min(pullDistance - 60, 0)}px)`,
          transition: isPulling ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="bg-gradient-to-r from-slate-800/95 via-slate-700/95 to-slate-800/95 backdrop-blur-md rounded-b-2xl px-6 py-3 border-x border-b border-slate-600/30 shadow-lg shadow-slate-900/20">
          {isRefreshing ? (
            <div className="flex items-center gap-3 text-white">
              <RefreshCcw className="w-5 h-5 animate-spin text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Refreshing...
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-slate-200">
              <div className="relative">
                <div 
                  className="w-5 h-5 border-2 border-slate-400/50 border-t-blue-400 rounded-full transition-transform duration-200"
                  style={{
                    transform: `rotate(${pullDistance * 3}deg)`,
                  }}
                />
                <ArrowDown 
                  className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 transition-opacity duration-200"
                  style={{ opacity: pullDistance > 60 ? 1 : 0.5 }}
                />
              </div>
              <span className="text-sm font-medium">
                {pullDistance > 80 ? (
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Release to refresh
                  </span>
                ) : (
                  <span className="text-slate-300">Pull down to refresh</span>
                )}
              </span>
              
              {/* Progress indicator */}
              <div className="ml-2 w-12 h-1 bg-slate-600/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-200"
                  style={{ width: `${Math.min((pullDistance / 80) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {children}
    </>
  );
};
