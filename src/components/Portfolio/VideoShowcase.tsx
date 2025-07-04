
import VideoCard from './VideoCard';
import VideoErrorDialog from './VideoErrorDialog';
import VideoLoadingSpinner from './VideoLoadingSpinner';
import { videos } from './videoData';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';

const VideoShowcase = () => {
  const { videoError, isVideoLoading, handleVideoClick, closeVideoError } = useVideoPlayer();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            index={index}
            onVideoClick={handleVideoClick}
          />
        ))}
      </div>

      {isVideoLoading && <VideoLoadingSpinner />}

      {videoError && (
        <VideoErrorDialog
          errorMessage={videoError}
          onClose={closeVideoError}
        />
      )}
    </>
  );
};

export default VideoShowcase;
