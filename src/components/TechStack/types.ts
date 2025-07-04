
export interface Bubble {
  id: number;
  tech: string;
  startX: number;
  currentX: number;
  currentY: number;
  velocityX: number;
  velocityY: number;
  duration: number;
  delay: number;
  color: string;
  size: number;
  waveAmplitude: number;
  waveFrequency: number;
  isPopping: boolean;
  containerWidth: number;
  containerHeight: number;
}
