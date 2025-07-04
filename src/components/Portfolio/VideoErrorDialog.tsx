
import { AlertCircle } from 'lucide-react';

interface VideoErrorDialogProps {
  errorMessage: string;
  onClose: () => void;
}

const VideoErrorDialog = ({ errorMessage, onClose }: VideoErrorDialogProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-slate-800 p-8 rounded-lg text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-red-400 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2 text-white">Video Not Available</h3>
        <p className="text-slate-300 mb-4">{errorMessage}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoErrorDialog;
