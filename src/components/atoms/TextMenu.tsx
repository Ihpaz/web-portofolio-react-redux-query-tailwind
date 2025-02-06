import React from 'react';

type TextMenuProps = {
    text: string;
    link: string; 
    isActive?: boolean;
};

const TextMenu: React.FC<TextMenuProps> = ({ text, link , isActive }) => {
    return (
        <li className=' list-none'>
            <a href={link} className={`text-2xl 
                ${isActive ? ' pb-5 text-indigo-700 border-b-3 border-indigo-700 hover:text-indigo-500 transition duration-300'
                :'text-white hover:text-gray-500 transition duration-300'} 
            `}>
                {text}
            </a>
        </li>
    );
};

export default TextMenu;
