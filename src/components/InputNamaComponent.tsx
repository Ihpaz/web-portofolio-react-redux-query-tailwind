import React from 'react';
import Input from './atoms/Input';
import TextSubTitle from './atoms/TextSubTitle';
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import ButtonMedium from './ButtonMedium';
import { IoRocket } from "react-icons/io5";


const InputNamaComponent: React.FC = () => {
    const nama = useSelector((state: RootState) => state.nama.value);

    return (
        <div className='flex flex-col items-center gap-4'>
            <Input />
            {nama ? <TextSubTitle text={`Hello ${nama}`} /> : null} 
            <ButtonMedium text='GO...' to='home' isDisabled={nama ? false : true} >
                <IoRocket />
            </ButtonMedium>
        </div>
    );
}

export default InputNamaComponent;