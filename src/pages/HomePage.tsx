import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileComponents from '../components/ProfileComponents';
import ResumesComponents from '../components/ResumesComponents';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const HomePage: React.FC = () => {
 

    return (
        <QueryClientProvider client={queryClient}>
        <div className='relative w-full min-h-full flex flex-col gap-3 bg-gradient-to-r from-black via-[#0b0a13] to-[#1a1330]'>
          <NavbarComponent />   
          <div className='w-full h-full flex flex-col gap-28 items-center mt-52'>  
            <ProfileComponents />
            <ResumesComponents />
          </div>
        </div>
        </QueryClientProvider>
      
    );
    
   
};

export default HomePage;