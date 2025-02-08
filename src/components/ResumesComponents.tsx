import React, { useState } from "react";
import Resumes,{categories} from "../data/Resumes";
import CardResume from "./CardResumeComponent";
import CardResumeComponent from "./CardResumeComponent";

const ResumesComponents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResumes =
    selectedCategory === "All"
      ? Resumes
      : Resumes.filter((Resumes) => Resumes.skills.includes(selectedCategory));

  return (
    <div className="bg-[#0D0817] text-white py-16 text-center px-6 md:px-28 w-full">
      <h2 className="text-4xl font-bold color-main">
        My Recent Projects
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Explore my projects categorized by programming language, showcasing
        diverse expertise in web and software development.
      </p>

      <div className=" justify-center mt-6 space-x-4 grid grid-cols-2 md:grid-cols-7 gap-2 md:w-[800px] mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={` w-28 cursor-pointer px-2 py-2 rounded-full transition-all text-wrap mx-auto ${
              selectedCategory === category
                ? "bg-main text-white"
                : " bg-gray-900 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

  
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-24">
        {filteredResumes.length > 0 ? (
          filteredResumes.map((resume,index) => (

            <CardResumeComponent data={resume} key={index}/>
           
          ))
        ) : (
          <p className="text-gray-400 col-span-full">
            No resumes found for "{selectedCategory}".
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumesComponents;
