import React, { useState } from 'react';

// 1. Define the Interface for Props
interface ImageViewerProps {
  images: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
  // 2. State with explicit types
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number): void => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = (): void => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (): void => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Close modal when clicking the background
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="p-4">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Project View ${index}`}
            className="cursor-pointer rounded-lg hover:ring-2 hover:ring-blue-500 transition-all duration-300 h-40 w-full object-cover"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleOverlayClick}
        >
          {/* Close Button */}
          <button 
            className="absolute top-5 right-5 text-white text-4xl hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* Navigation Controls */}
          <button 
            className="absolute left-5 text-white text-5xl p-2 hover:bg-white/10 rounded-full transition"
            onClick={prevImage}
          >
            &#10094;
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img 
              src={images[currentIndex]} 
              alt="Full Display" 
              className="max-w-full max-h-full rounded shadow-2xl object-contain"
            />
            <div className="text-white mt-6 bg-black/50 px-4 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <button 
            className="absolute right-5 text-white text-5xl p-2 hover:bg-white/10 rounded-full transition"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;