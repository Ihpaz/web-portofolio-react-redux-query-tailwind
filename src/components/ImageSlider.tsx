import React, { useState } from 'react';
import ImageComponent from './ImageComponent';

type ImageSliderProps = {
    images: string[];
    alt: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt }) => {
    // Ensure max 5 images
    const displayImages = images.slice(0, 5);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? displayImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === displayImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (!displayImages || displayImages.length === 0) {
        return null;
    }

    if (displayImages.length === 1) {
        return <ImageComponent src={displayImages[0]} alt={alt} width='w-full' height='h-[300px] md:h-[600px] lg:h-[800px]' classDynamics="rounded-md object-contain bg-black" />;
    }

    return (
        <div className="w-full h-full relative group">
            <div className="w-full h-[300px] md:h-[600px] lg:h-[800px] rounded-md bg-black flex items-center justify-center overflow-hidden relative">
                <ImageComponent
                    src={displayImages[currentIndex]}
                    alt={`${alt} ${currentIndex + 1}`}
                    width='w-full'
                    height='h-full'
                    classDynamics="object-contain rounded-md duration-500"
                />
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all" onClick={goToPrevious}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all" onClick={goToNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            {/* Dots */}
            <div className="flex justify-center py-2 absolute bottom-2 w-full gap-2">
                {displayImages.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'text-white scale-125' : 'text-gray-500'}`}
                    >
                        <div className={`w-2 h-2 rounded-full ${currentIndex === slideIndex ? 'bg-white' : 'bg-gray-500'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
