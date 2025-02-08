import React from 'react';
import { motion } from "framer-motion";

type TextTitleProps ={
    text: string;
    classDynamics?:string;
}

const TextTitle: React.FC<TextTitleProps> = ({ text,classDynamics }) => {
    return <h1 className={`text-5xl md:text-6xl font-bold color-main  md:text-left ${classDynamics}`}>
         {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }} // Delays each letter
        >
          {char}
        </motion.span>
      ))}
    </h1>;
};

export default TextTitle;