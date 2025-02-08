import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FooterComponent from '../components/FooterComponent';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const LayoutPage: React.FC = () => {
 

    return (
        <QueryClientProvider client={queryClient}>
          <div className='relative w-full min-h-full flex flex-col gap-3 bg-gradient-to-r from-black via-[#0b0a13] to-[#1a1330]'>
            <NavbarComponent />   
                <Outlet/>
            <FooterComponent />
          </div>
        </QueryClientProvider>
      
    );
    
   
};

export default LayoutPage;