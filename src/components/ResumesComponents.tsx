import React, { useMemo, useState } from "react";
import Resumes, { categories } from "../data/Resumes";
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

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 md:w-[950px] mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full min-h-11 cursor-pointer rounded-full border px-3 py-2 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/80 hover:shadow-purple-500/20 ${
              selectedCategory === category
                ? "bg-main border-purple-300/70 text-white"
                : "border-white/10 bg-white/[0.06] text-gray-300 hover:bg-white/[0.12] hover:text-white"
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
