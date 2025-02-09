import React, { useState,useMemo } from "react";
import Resumes,{categories} from "../data/Resumes";
import CardResumeComponent from "./CardResumeComponent";
import { motion, AnimatePresence } from "framer-motion";

const ResumesComponents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResumes = useMemo(() => {
    return selectedCategory === "All"
      ? Resumes
      : Resumes.filter((resume) => resume.skills.includes(selectedCategory));
  }, [selectedCategory, Resumes]);

  return (
   
    <div className=" text-white py-16 text-center px-6 md:px-28 w-full" id="projects">
      <h2 className="text-5xl font-bold color-main">
        My Recent Projects
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Explore my projects categorized by programming language, showcasing
        diverse expertise in web and software development.
      </p>

      <div className=" justify-center mt-6 space-x-4 grid grid-cols-2 md:grid-cols-8 gap-2 md:w-[950px] mx-auto">
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

      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.05 }} 
            className="flex flex-col gap-8" 
        >
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-18">
            <AnimatePresence>
                {filteredResumes.length > 0 ? (
                filteredResumes.map((resume,index) => (
                    <motion.div
                        key={resume.id} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -20 }} 
                        transition={{ duration: 0.5 }} 
                    >
                        <CardResumeComponent data={resume} key={index}/>
                    </motion.div>
                ))
                ) : (
                    <p className="text-gray-400 col-span-full">
                        No project found for "{selectedCategory}".
                    </p>
                )}
            </AnimatePresence>
        </div>
     </motion.div>
    </div>
   
  );
};

export default ResumesComponents;
