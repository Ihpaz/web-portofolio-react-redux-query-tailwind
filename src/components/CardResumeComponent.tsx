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
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-4 pb-5 pt-2 items-center">
                {
                    resume.data.skills.map((skill, index) => (
                        <span key={index} className="inline-flex min-h-9 items-center justify-center rounded-full border border-purple-300/25 bg-white/[0.08] px-3 py-1.5 text-center text-xs font-semibold text-purple-100 shadow-sm shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/70 hover:bg-main hover:text-white hover:shadow-lg hover:shadow-purple-500/20">{skill}</span>
                    ))

                }
            </div>


        </div>
    )
}

export default CardResumeComponent;
