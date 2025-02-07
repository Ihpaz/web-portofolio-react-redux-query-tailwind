import React from 'react';

type TextTitleProps ={
    text: string;
}

const TextTitle: React.FC<TextTitleProps> = ({ text }) => {
    return <h1 className="text-5xl font-bold color-main">{text}</h1>;
};

export default TextTitle;