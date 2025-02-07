import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {downloadFile} from '../helper/FileHelper';

type ButtonProps = {
  text: string;
  to: string;
  type: 'button' | 'download';
  children?: ReactNode; // Accepts icons or any React elements as children
};

const ButtonLarge: React.FC<ButtonProps> = ({ text, to,type, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // downloadFile(to)
    type === 'download' ? downloadFile(to) : navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 border-2 border-white bg-indigo-900 text-white py-2 px-4 hover:bg-[#1a0e3a] transition-colors duration-300 cursor-pointer rounded-4xl"
    >
      {text}

      {children} 
      
    </button>
  );
};

export default ButtonLarge;
