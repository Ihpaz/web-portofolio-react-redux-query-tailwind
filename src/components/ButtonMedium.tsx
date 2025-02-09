import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonProps ={
  text: string;
  to: string;
  isDisabled?: boolean;
  children?: ReactNode; 
}

const ButtonMedium: React.FC<ButtonProps> = ({ text, to,isDisabled = false,children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`flex items-center gap-2 border-2
         border-white bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-[#1a0e3a] 
    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ${ isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      {text}
      {children}
    </button>
  );
};

export default ButtonMedium;
