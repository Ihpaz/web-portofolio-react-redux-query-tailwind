import React from "react";
import ImageComponent from "./ImageComponent";
import { useNavigate } from "react-router-dom";
type Resumes = {
    id: number;
    title: string;
    description: string;
    skills: string[];
    image: string | '/images/resume.png';
    link?: string;
}

type CardResumeProps = {
    data: Resumes;
}
const CardResumeComponent: React.FC<CardResumeProps> = (resume) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/home/${id}`);
    }

    return (
        <div onClick={() => handleClick(resume.data.id)} className="group relative flex flex-col items-center gap-1 w-full border-0 bg-[#1A1229] rounded-md cursor-pointer hover:border-2 hover:border-indigo-900 min-h-[480px]" key={resume.data.id}>
            <p className=" hidden group-hover:block   absolute bg-[#1A1229] p-2 w-full">
                {resume.data.description}
            </p>
            <ImageComponent src={resume.data?.image} alt="resume" width='w-full' height='h-80' classDynamics="!object-cover rounded-t-md" />
            <h3 className=" text-2xl font-semibold p-4 text-white">
                {resume.data.title}
            </h3>
            <div className="text-gray-300 w-full  grid grid-cols-3 md:grid-cols-4  gap-2 p-2 items-center ">
                {
                    resume.data.skills.map((skill, index) => (
                        <span key={index} className="mb-2 px-2 py-1 text-sm font-bold border-2  border-gray-800 text-gray-300 rounded-4xl hover:bg-main">{skill}</span>
                    ))

                }
            </div>


        </div>
    )
}

export default CardResumeComponent;