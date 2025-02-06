import React from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonProps ={
  text: string;
  to: string;
}

const ButtonMedium: React.FC<ButtonProps> = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="border-2 border-white bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-[#1a0e3a] transition-colors duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default ButtonMedium;
