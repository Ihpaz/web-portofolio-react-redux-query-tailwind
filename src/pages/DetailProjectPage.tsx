import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Resumes from "../data/Resumes";
import { ResumesType } from "../data/Resumes";
import ImageComponent from "../components/ImageComponent";
import ImageSlider from "../components/ImageSlider";

const DetailProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const project: ResumesType | null = id ? Resumes.find((resume) => resume.id === parseInt(id)) || null : null;

    const images = project?.images && project.images.length > 0 ? project.images : (project?.image ? [project.image] : []);

    return (
        <div className='w-full h-full flex flex-col items-center my-52'>
            <div className="grid grid-cols-1 gap-8  px-6 md:px-28 w-full">
                <div className="w-full flex justify-start">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-main text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back
                    </button>
                </div>
                <h3 className=" text-4xl font-bold p-2 color-main">
                    {project?.title}
                </h3>
                {images.length > 0 ? (
                    <ImageSlider images={images} alt="resume" />
                ) : (
                    <ImageComponent src={project?.image || ""} alt="resume" width='w-full' height='h-[800px]' classDynamics="rounded-md" />
                )}
                <div className=" bg-[#1A1229] p-4 rounnded-md">
                    <p className="h-48 md:h-36 text-white">{project?.description}</p>
                    <div className="text-gray-300 w-full md:w-[900px]  grid grid-cols-2 md:flex gap-2 p-2 items-center ">
                        {
                            project?.skills.map((skill, index) => (
                                <span key={index} className="mb-2 px-2 text-sm font-bold border-2  border-gray-800 text-gray-300 rounded-4xl max-w-26  text-center">{skill}</span>
                            ))

                        }
                    </div>
                </div>


            </div>
        </div>
    );
}

export default DetailProjectPage;