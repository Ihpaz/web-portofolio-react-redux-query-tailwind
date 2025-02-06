import React from 'react';
import reactLogo from '../assets/react.svg';
import ImageComponent from './ImageComponent';
import TextSubTitle from './atoms/TextSubTitle';
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import TextMenu from './atoms/TextMenu';
import WeatherComponent from './WeatherComponent';

const NavbarComponent: React.FC = () => {
    const nama = useSelector((state: RootState) => state.nama.value);

    return (
        <div className='w-full border-b-[0.2px] border-gray-500 flex justify-between text-white p-6 fixed z-50 bg-gradient-to-r from-black via-[#0b0a13] to-[#1a1330]'>
            <div className='flex gap-2 items-center'>
                <ImageComponent src={reactLogo} alt="image" width='w-8' height='h-6'  />
                <TextSubTitle text={`Hello ${nama}`} />
            </div>
            <div className='flex gap-7 justify-between'>
                <TextMenu text='Profile' link='#profile' isActive={true}/>
                <TextMenu text='Working Experience' link='#work' />
                <TextMenu text='Contact' link='#contact' />
            </div>
            <div className='flex gap-7 justify-around'>
                <WeatherComponent />
            </div>
        </div>
    )
}

export default NavbarComponent