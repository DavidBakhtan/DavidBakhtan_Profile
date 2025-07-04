
import { Play } from 'lucide-react';
import { VideoItem } from './types';

interface VideoCardProps {
  video: VideoItem;
  index: number;
  onVideoClick: (video: VideoItem) => void;
}

const VideoCard = ({ video, index, onVideoClick }: VideoCardProps) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div
        className="relative h-36 md:h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 overflow-hidden cursor-pointer group"
        onClick={() => onVideoClick(video)}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full bg-slate-700 rounded-xl flex items-center justify-center';
              fallback.innerHTML = '<span class="text-slate-400">No Preview</span>';
              parent.appendChild(fallback);
            }
          }}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" />
          </div>
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{video.title}</h3>
      <p className="text-slate-400 text-sm">{video.description}</p>
    </div>
  );
};

export default VideoCard;
