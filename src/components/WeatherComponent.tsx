import React from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const WeatherComponent: React.FC = () => {
    const apiKey = "dd0b3155040d13e208c07cd2e7a2b985";
    const lat= 51.5074;
    const lon= 0.1278;
    
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
        <h1 className="text-5xl font-bold text-white shadow-2xs">{data.main.temp}</h1>
    );
};

export default WeatherComponent;