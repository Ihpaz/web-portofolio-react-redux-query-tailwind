import React, { useState,useEffect,useMemo } from 'react';
import TextTitle from '../components/atoms/TextTitle';
import TextSubTitle from '../components/atoms/TextSubTitle';
import ImageComponent from '../components/ImageComponent';
import ihpaz from '../assets/ihpaz.png'; 
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
  } from "@tsparticles/engine";
import ButtonMedium from '../components/ButtonMedium';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { setNama } from '../state/nama/namaSlice';

const WelcomePage: React.FC = () => {
    const [init, setInit] = useState(false);
    const nama = useSelector((state: RootState) => state.nama.value);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
        
        await loadSlim(engine);
        //await loadBasic(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
      () => ({
        background: {
          color: {
            value: "#2a1454",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
              default: OutMode.out,
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }),
      [],
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNama(event.target.value));
    };

    if(init){
        return (
            <div >
                 <div className=' relative w-full h-full flex flex-col items-center pt-40 gap-3 z-50 px-5'>
                    
                    <TextTitle text="Welcome to My Portfolio" />
                    
                    <ImageComponent src={ihpaz} alt="image" width='w-40' height='h-40' rounded={true} border={true}/>
                    
                    <TextSubTitle text="Hello There 😎, my name Is Ihpaz, let me know your name!" />
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            value={nama} 
                            onChange={handleInputChange} 
                            className=" max-w-md p-2 border-b-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                        />
                    {nama ? <div className='flex flex-col gap-3'> <TextSubTitle text={`Hello ${nama}`} />  <ButtonMedium text='GO' to='home' /> </div>:''} 
                </div>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </div>
           
        );
    }
   
};

export default WelcomePage;