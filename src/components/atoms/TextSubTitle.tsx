import React from 'react';

type TextSubTitleProps ={
    text: string;
}

const TextSubTitle: React.FC<TextSubTitleProps> = ({ text }) => {
    return <h1 className="text-2xl  text-white">{text}</h1>;
};

export default TextSubTitle;