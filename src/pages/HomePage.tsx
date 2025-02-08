import React,{useEffect}from 'react';
import ProfileComponents from '../components/ProfileComponents';
import ResumesComponents from '../components/ResumesComponents';
import EducationComponents from '../components/EducationComponents';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
    const location = useLocation();

    //agar dari halaman lain bisa langsung ke section
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }
    }, [location]);
    return (
      
          <div className='w-full h-full flex flex-col gap-28 items-center my-52 ' id="profile">  
            <ProfileComponents />
            <ResumesComponents />
            <EducationComponents/>
          </div>
           
      
    );
    
};

export default HomePage;