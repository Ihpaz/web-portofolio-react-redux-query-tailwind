import React from 'react';
import NavbarComponent from '../components/NavbarComponent';

const HomePage: React.FC = () => {
 

      return (
        <div className='relative w-full h-full flex flex-col gap-3 bg-gradient-to-r from-black via-[#0b0a13] to-[#1a1330]'>
          <NavbarComponent />   
          <div className='w-full h-[800px] flex flex-col items-center px-5'>
                
          </div>
        </div>
        
          
      );
    
   
};

export default HomePage;