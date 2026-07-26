import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Video, ExternalLink, MapPin } from 'lucide-react';
import { Property } from '../types';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property | null;
  isAr: boolean;
}

export const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  property,
  isAr
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  if (!isOpen || !property) return null;

  const langKey = isAr ? 'ar' : 'en';
  const images = property.images || [];
  const videos = property.videos || [];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in print:hidden">
      <div className="bg-[#1d1d1f] text-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-[#C89565]/30 flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#B8865F]/20 border border-[#C89565]/30 text-[#C89565]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-white">
                {property.name[langKey]}
              </h3>
              <p className="text-xs text-amber-200/80 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3" />
                <span>{property.location[langKey]}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tabs */}
            <div className="flex bg-white/10 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
                  activeTab === 'photos'
                    ? 'bg-[#B8865F] text-white shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{isAr ? `الصور (${images.length})` : `Photos (${images.length})`}</span>
              </button>
              {videos.length > 0 && (
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
                    activeTab === 'videos'
                      ? 'bg-[#B8865F] text-white shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{isAr ? `الفيديو (${videos.length})` : `Videos (${videos.length})`}</span>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition"
              title={isAr ? 'إغلاق' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === 'photos' ? (
            <div className="space-y-4">
              {/* Featured Main Image Viewer */}
              <div className="relative aspect-video sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-white/10 group">
                <img
                  src={images[activeImageIndex]}
                  alt={`${property.name[langKey]} photo ${activeImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#B8865F] text-white border border-white/20 transition backdrop-blur-xs"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#B8865F] text-white border border-white/20 transition backdrop-blur-xs"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-white/10">
                  {activeImageIndex + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-video rounded-xl overflow-hidden border-2 transition relative ${
                      activeImageIndex === index
                        ? 'border-[#C89565] scale-105 shadow-md'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {videos.map((vid, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-white">{vid[langKey]}</span>
                    <a
                      href={vid.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:underline bg-white/10 px-3 py-1.5 rounded-lg"
                    >
                      <span>{isAr ? 'فتح في نافذة جديدة' : 'Open in New Tab'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10">
                    <iframe
                      src={vid.url}
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={vid[langKey]}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-black/60 border-t border-white/10 flex flex-wrap justify-between items-center gap-3 text-xs text-white/70">
          <div>
            <span className="font-semibold text-white">{isAr ? 'العرض المالي للوحدات:' : 'Property Annual Rates:'} </span>
            <span className="text-amber-300 font-bold">{property.totalPropertyAnnualPrice}</span>
          </div>
          <button
            onClick={onClose}
            className="bg-[#B8865F] hover:bg-[#a6754f] text-white font-bold px-5 py-2 rounded-xl transition"
          >
            {isAr ? 'العودة للعرض التقديمي' : 'Back to Proposal Deck'}
          </button>
        </div>

      </div>
    </div>
  );
};
