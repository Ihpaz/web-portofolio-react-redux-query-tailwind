import React,{useEffect}from 'react';
import ProfileComponents from '../components/ProfileComponents';
import ResumesComponents from '../components/ResumesComponents';
import EducationComponents from '../components/EducationComponents';
import { useLocation } from 'react-router-dom';
import useScrollSpy from '../hooks/useScrollSpy';
import SkillsComponents from '../components/SkillsComponent';

const HomePage: React.FC = () => {
    const location = useLocation();
    const sectionIds = ["profile","skills", "projects", "educations"];

    useScrollSpy(sectionIds); 
    // agar dari halaman lain bisa langsung ke section
    useEffect(() => {
        if (location.hash) {
        
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: "instant" });
            }
       
        }
    }, [location]);
    
    return (
      
          <div className='w-full h-full flex flex-col gap-0 items-center mt-48 '>  
            <ProfileComponents />
            <SkillsComponents />
            <ResumesComponents />
            <EducationComponents/>
          </div>
           
      
    );
    
};

export default HomePage;