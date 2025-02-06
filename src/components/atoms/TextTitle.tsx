import React from 'react';

type TextTitleProps ={
    text: string;
}

const TextTitle: React.FC<TextTitleProps> = ({ text }) => {
    return <h1 className="text-5xl font-bold text-white shadow-2xs">{text}</h1>;
};

export default TextTitle;