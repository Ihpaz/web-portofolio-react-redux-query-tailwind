import React,{useCallback} from 'react';
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { setNama } from '../../state/nama/namaSlice';

const Input: React.FC = () => {
    const nama = useSelector((state: RootState) => state.nama.value, shallowEqual);
    const dispatch = useDispatch<AppDispatch>();

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNama(event.target.value));
    }, [dispatch]);
    
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