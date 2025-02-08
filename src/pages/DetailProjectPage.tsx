import React from "react";
import { useParams } from "react-router-dom";
import Resumes from "../data/Resumes";
import { ResumesType } from "../data/Resumes";
import ImageComponent from "../components/ImageComponent";

const DetailProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const project: ResumesType | null = id ? Resumes.find((resume) => resume.id === parseInt(id)) || null : null;
    
    return (
        <div className='w-full h-full flex flex-col items-center my-52'>  
            <div className="grid grid-cols-1 gap-8  px-6 md:px-28 w-full">
                <h3 className=" text-4xl font-bold p-2 color-main">
                    {project?.title}
                </h3>
                <ImageComponent src={project?.image || ""} alt="resume" width='w-full' height='h-[600px]' classDynamics="rounded-md" />
                <div className=" bg-[#1A1229] p-4 rounnded-md">
                    <p className="h-48 md:h-36 text-white">{project?.description}</p>
                    <div className="text-gray-300 w-full md:w-[900px]  grid grid-cols-2 md:flex gap-2 p-2 items-center ">
                        {
                        project?.skills.map((skill, index) => (
                                <span key={index} className="mb-2 px-2 text-sm font-bold bg-white text-black rounded-4xl max-w-26  text-center">{skill}</span>
                            ))
                        
                        }
                    </div>
                </div>
                
             
            </div>
        </div>
    );
}

export default DetailProjectPage;