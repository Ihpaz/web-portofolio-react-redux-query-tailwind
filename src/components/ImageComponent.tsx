import React from 'react';

type ImageProps = {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    rounded?: boolean; 
    border?:boolean;
    classDynamics?:string;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, width, height, rounded = false, border = false,classDynamics="" }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={` ${width} ${height} ${rounded ? 'rounded-full' : ''} object-fill ${rounded ? 'rounded-full' : ''} 
            ${ border ? 'border-2 border-white hover:border-indigo-900':''} ${classDynamics}`}
        />
    );
};

export default ImageComponent;
