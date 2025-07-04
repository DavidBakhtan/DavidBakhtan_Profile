
import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@/components/ui/dialog';

const postImages = [
  'p1.png',
  'p2.png',
  'p3.png',
  'p4.png',
  'p5.png',
  'p6.png',
  'p7.png',
  'p8.png'
];

const SocialMediaPosts = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {postImages.map((src, i) => (
          <div
            key={i}
            className="aspect-square bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center border-2 border-dashed cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Post ${i + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogPortal>
            <DialogOverlay />
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-slate-900 border-slate-700 p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute left-4 top-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <img
                  src={selectedImage}
                  alt="Selected post"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>
          </DialogPortal>
        </Dialog>
      )}
    </div>
  );
};

export default SocialMediaPosts;
