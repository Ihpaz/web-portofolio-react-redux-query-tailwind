import React from 'react';
import { Link } from 'react-router-dom';


type TextMenuProps = {
    text: string;
    link: string; 
    isActive?: boolean;
    isDiffPage?: boolean;
};

const TextMenu: React.FC<TextMenuProps> = ({ text, link , isActive ,isDiffPage = false}) => {
    

    return (
        <li className=' list-none'>
            {isDiffPage ? 
                <Link to={{pathname:'/home',hash:link}} className={`text-2xl 
                    ${isActive ? ' pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 md:border-b-3 border-indigo-700 hover:text-indigo-500 transition duration-300'
                    :'text-white hover:text-gray-500 transition duration-300'} 
                `}>
                    {text}
                </Link>
                 : 
                 <a href={link} className={`text-2xl 
                    ${isActive ? ' pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 md:border-b-3 border-indigo-700 hover:text-indigo-500 transition duration-300'
                    :'text-white hover:text-gray-500 transition duration-300'} 
                `}>
                    {text}
                </a>
            }
           
        </li>
    );
};

export default TextMenu;
