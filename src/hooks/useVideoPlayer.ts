
import { useState } from 'react';
import { VideoItem } from '../components/Portfolio/types';

export const useVideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const handleVideoClick = async (video: VideoItem) => {
    setSelectedVideo(video);
    setVideoError(null);
    setIsVideoLoading(true);
    
    // Create a fullscreen video element
    const videoElement = document.createElement('video');
    videoElement.src = video.src;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      z-index: 9999;
      object-fit: contain;
    `;

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    // Handle close functionality
    const closeVideo = async () => {
      // Exit fullscreen first if active
      if (document.fullscreenElement) {
        try {
          await document.exitFullscreen();
        } catch (error) {
          console.log('Error exiting fullscreen:', error);
        }
      }
      
      // Remove elements immediately
      if (document.body.contains(videoElement)) {
        document.body.removeChild(videoElement);
      }
      if (document.body.contains(closeButton)) {
        document.body.removeChild(closeButton);
      }
      
      setSelectedVideo(null);
      setIsVideoLoading(false);
    };

    // Add event listeners
    closeButton.addEventListener('click', closeVideo);
    
    // Close on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideo();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);

    // Handle video events
    videoElement.addEventListener('loadeddata', () => setIsVideoLoading(false));
    videoElement.addEventListener('error', () => {
      setVideoError('Unable to load video. The file might be missing or corrupted.');
      setIsVideoLoading(false);
      closeVideo();
    });

    // Add to DOM
    document.body.appendChild(videoElement);
    document.body.appendChild(closeButton);

    // Request fullscreen
    try {
      await videoElement.requestFullscreen();
    } catch (error) {
      console.log('Fullscreen not supported, showing in fixed position');
    }
  };

  const closeVideoError = () => setVideoError(null);

  return {
    selectedVideo,
    videoError,
    isVideoLoading,
    handleVideoClick,
    closeVideoError
  };
};
