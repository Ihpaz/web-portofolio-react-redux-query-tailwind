import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import ImageComponent from './ImageComponent';
import weather from '../assets/weather.gif';

const defaultLocation = {
    lat: -6.2088,
    lon: 106.8456,
    name: 'Jakarta',
};

const WeatherComponent: React.FC = () => {
    const apiKey = `${import.meta.env.VITE_API_KEY}`; //hanya untuk contoh, api ini free, di real project pakai env
    const [location, setLocation] = useState(defaultLocation);
    const [isDetectingLocation, setIsDetectingLocation] = useState(true);

    useEffect(() => {
        if (!navigator.geolocation) {
            setIsDetectingLocation(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    name: 'Your Location',
                });
                setIsDetectingLocation(false);
            },
            () => {
                setIsDetectingLocation(false);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000 * 60 * 10,
                timeout: 10000,
            },
        );
    }, []);
    
    const {isPending, error, data } = useQuery({
        queryKey: ["weather", location.lat, location.lon],
        enabled: !isDetectingLocation,
        queryFn: () => 
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch weather');
                }

                return res.json();
            }),
        
      });

    if (isDetectingLocation || isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='flex gap-2'>
             <h1 className="text-2xl font-bold text-white shadow-2xs">{data.name || location.name} {Math.floor(data.main.temp)}
             </h1>
             <p className=' text-2xl'>°C</p>
             <ImageComponent src={weather} alt="gif" width='w-8' height='h-8' rounded={true} />
        </div>
       
    );
};

export default WeatherComponent;
