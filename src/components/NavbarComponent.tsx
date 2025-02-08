import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import TextSubTitle from './atoms/TextSubTitle';
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import TextMenu from './atoms/TextMenu';
import WeatherComponent from './WeatherComponent';
import { FiMenu, FiX } from 'react-icons/fi';
import avatar from '../assets/avatar.jpg';
const NavbarComponent: React.FC = () => {
    const nama = useSelector((state: RootState) => state.nama.value);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full border-b-[0.2px] border-gray-500 text-white p-6 fixed z-50 bg-gradient-to-r from-black via-[#0b0a13] to-[#1a1330]'>
            <div className='flex justify-between items-center'>

                <div className='flex gap-2 items-center'>
                    < a href='/' className='flex gap-2 items-center text-2xl font-bold'>
                        <ImageComponent src={avatar} alt="image" width='w-8' height='h-8' rounded={true} />
                        <TextSubTitle text={`Hello ${nama}`} />
                    </a>
                </div>

                <div className='hidden md:flex gap-7'>
                    <TextMenu text='Profile' link='#profile' isActive={true} />
                    <TextMenu text='Projects' link='#projects' />
                    <TextMenu text='Educations' link='#educations' />
                </div>

              
                <div className='hidden md:flex gap-7'>
                    <WeatherComponent />
                </div>

               
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

         
            {isOpen && (
                <div className='flex flex-col gap-4 mt-6 md:hidden  border-gray-500'>
                    <TextMenu text='Profile' link='#profile' isActive={true} />
                    <TextMenu text='Working Experience' link='#work' />
                    <TextMenu text='Contact' link='#contact' />
                    <div className='mt-5'>
                        <WeatherComponent />
                    </div>
                   
                </div>
            )}
        </nav>
    );
};

export default NavbarComponent;
