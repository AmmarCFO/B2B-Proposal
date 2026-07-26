import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem;
  isAr: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, isAr, onClose }) => {
  const title = isAr ? video.ar : video.en;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#1d1d1f] rounded-3xl overflow-hidden border border-[#C89565]/30 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#2d2d2f]">
          <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
            <span>{isAr ? 'جولة فيديو' : 'Video Tour'}:</span>
            <span className="text-[#C89565]">{title}</span>
          </h3>

          <div className="flex items-center gap-2">
            <a
              href={video.url.replace('/preview', '/view')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition text-xs flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">{isAr ? 'فتح في علامة تبويب جديدة' : 'Open in new tab'}</span>
            </a>

            <button
              onClick={onClose}
              className="text-white/70 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative w-full h-0 pb-[56.25%] bg-black">
          <iframe
            src={video.url}
            title={title}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
