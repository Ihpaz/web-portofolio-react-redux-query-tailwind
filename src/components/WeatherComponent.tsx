import React from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const WeatherComponent: React.FC = () => {
    const apiKey = "dd0b3155040d13e208c07cd2e7a2b985"; //hanya untuk contoh, api ini free, di real project pakai env
    const lat= -6.2088;
    const lon= 106.8456;
    
    const {isPending, error, data } = useQuery({
        queryKey: ["weather"],
        queryFn: () => 
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).then((res) =>
                res.json(),
            ),
        
      });

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='flex gap-2'>
             <h1 className="text-2xl font-bold text-white shadow-2xs">Jakarta {Math.floor(data.main.temp-273) }
             </h1>
             <p className=' text-2xl'>°C</p>
        </div>
       
    );
};

export default WeatherComponent;