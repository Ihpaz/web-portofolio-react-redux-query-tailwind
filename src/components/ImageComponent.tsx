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

    let publicSrc = src;
    if (!src.startsWith('/')) publicSrc = `${import.meta.env.BASE_URL}${src}`;
    return (
        <img
            src={publicSrc}
            alt={alt}
            className={` ${width} ${height} ${rounded ? 'rounded-full' : ''} object-fill ${rounded ? 'rounded-full' : ''} 
            ${ border ? 'border-2  border-indigo-900 hover:border-indigo-400':''} ${classDynamics}`}
        />
    );
};

export default ImageComponent;
