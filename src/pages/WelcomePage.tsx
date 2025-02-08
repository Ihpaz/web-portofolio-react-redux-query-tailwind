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
import InputNamaComponent from '../components/InputNamaComponent';


const WelcomePage: React.FC = () => {
    const [init, setInit] = useState(false);
  

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
            value: "#0D0817",
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



    if(init){
        return (
            <div >
                 <div className=' relative w-full h-full flex flex-col items-center pt-40 gap-3 z-50 px-5'>
                    
                    <TextTitle text="Welcome to My Portofolio Web" classDynamics='text-center' />

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-[700px] my-5 items-center'>
                      <div className='flex flex-col items-center md:items-end pr-4 '>
                        <ImageComponent src={ihpaz} alt="image" width='w-36' height='h-36' rounded={true} border={true}/>
                      </div>
                      <div className='col-span-2 flex flex-col items-center md:items-start'>
                        <TextSubTitle text="Hello There 😎" />
                        <TextSubTitle text="My name Is Ihpaz" />
                        <TextSubTitle text="Let me know your name first !" />
                      </div>  
                    </div>
                    <InputNamaComponent />
                    
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