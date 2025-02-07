import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { setNama } from '../../state/nama/namaSlice';

const Input: React.FC = () => {
    const nama = useSelector((state: RootState) => state.nama.value);
    const dispatch = useDispatch<AppDispatch>();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNama(event.target.value));
    };
    
    return (
        <input 
            type="text" 
            placeholder="Enter your name" 
            value={nama} 
            onChange={handleInputChange} 
            className=" max-w-md p-2 border-b-2 border-white bg-transparent
                text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
        />
    )
};

export default Input;