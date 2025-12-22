import React from 'react';
import ImageComponent from './ImageComponent';
import ihpaz from '../assets/ihpaz.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ButtonLarge from './ButtonLarge';
import { FaCloudDownloadAlt } from "react-icons/fa";
import TextSubTitle from './atoms/TextSubTitle';
import TextTitle from './atoms/TextTitle';
import { motion } from "framer-motion";

const ProfileComponents: React.FC = () => {
   

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the section is in view
            className="flex flex-col gap-8" 
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-28  px-6 md:px-28 pb-16 min-h-[600px]' >
                <div className=' col-md flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold text-white '>I am Muhamad Ihpaz Ramadhan</h1>
                    <TextTitle text='I am a Fullstack Developer' />
                    {/* <h1 className=' text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400'>I am a Fullstack Developer</h1> */}
                    <p className=' text-2xl font-bold text-white'>I am a skilled Full-Stack Web Developer with expertise in PHP, JavaScript, and Java, specializing in building dynamic and scalable web applications. With a strong foundation in both frontend and backend development.</p>
                    <div className='grid grid-cols-2 md:flex gap-4 mt-4'>
                        <TextSubTitle text='Get in touch !' />
                        <ButtonLarge text='Download CV' type='download' to='CV_IHPAZ_2025_A.pdf' >
                            <FaCloudDownloadAlt />
                        </ButtonLarge>
                        <a href='https://www.linkedin.com/in/muhamad-i-59423189/' target='_blank' rel="noreferrer" className='bg-white text-black p-2 rounded-full flex items-center justify-center'>
                            <FaLinkedin size={28} />
                        </a>
                        <a href='https://www.github.com/ihpaz/' target='_blank' rel="noreferrer" className='bg-white text-black p-2 rounded-full flex items-center justify-center'>
                            <FaGithub size={28} />      
                        </a>
                        <a href='https://wa.me/6281990092475' target='_blank' rel="noreferrer" className='bg-white text-black p-2 rounded-full flex items-center justify-center'>
                            <FaWhatsapp size={28} />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ImageComponent src={ihpaz} alt='profile' width='w-96' height='h-96' border={true} classDynamics='rounded-3xl  rotate-6 hover:rotate-0 hover:border-3 active:rotate-0 focus:rotate-0' />
                </div>
           
            </div>
        </motion.div>
       
    );
};

export default ProfileComponents;