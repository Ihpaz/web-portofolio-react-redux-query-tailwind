import React from "react";
import ImageComponent from "./ImageComponent";
type Resumes = {
    id: number;
    title: string;
    description: string;
    skills: string[];   
    image: string | '/images/resume.png';
    link?: string;
}

type CardResumeProps = {
    data:Resumes;
}
const CardResumeComponent: React.FC<CardResumeProps> = (resume) => {

    return (
      <div className="group relative flex flex-col items-center gap-1 w-full md:w-[600px] border-0 bg-[#1A1229] rounded-md cursor-pointer hover:border-2 hover:border-indigo-900" key={resume.data.id}>
         <p className=" hidden group-hover:block w-fit z-50 absolute bg-[#1A1229] rounded-md">
            {resume.data.description}
        </p>
        <ImageComponent src={resume.data?.image} alt="resume" width='w-[600px]' height='h-80' classDynamics="" />
        <h3 className=" text-2xl font-semibold p-2 color-main">
            {resume.data.title}
        </h3>
        <div className="text-gray-300 w-full md:w-[550px] grid grid-cols-3 md:grid-cols-4  gap-2 p-2 items-center ">
            {
                resume.data.skills.map((skill, index) => (
                    <span key={index} className="mb-2 px-2 text-sm font-bold bg-white text-black rounded-4xl w-26 md:w-28">{skill}</span>
                ))
            
            }
        </div>
       

      </div>
    )
}

export default CardResumeComponent;