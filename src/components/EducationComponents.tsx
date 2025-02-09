import React from "react";
import { educations,course } from "../data/Educations";
import Card from "./atoms/Card";
import { SiGooglescholar } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";
import { motion } from "framer-motion";

const EducationComponents: React.FC = () => {
  

  return (
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the section is in view
        className="flex flex-col gap-8" 
    >
        <div className=" bg-[#0D0817] w-full py-24 grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-24 min-h-[800px]" id="educations">
            <div className="grid grid-cols-1 gap-4 px-2 md:px-24">
                <div className="flex gap-2 justify-center">
                    <SiGooglescholar color="purple" size={45} />
                    <h2 className="text-4xl font-bold color-main">
                        My Education
                    </h2>
                </div>
                {educations.map((education, index) => (
                    <Card data={education} key={index} />
                ))}
            </div>
            <div className="grid grid-cols-1 gap-4 px-2 md:px-24">
                <div className="flex gap-2 justify-center">
                    <MdOutlineMenuBook color="purple" size={45} />
                    <h2 className="text-4xl font-bold color-main">
                        My Course
                    </h2>
                </div>
                {course.map((cours, index) => (
                    <Card data={cours} key={index} />
                ))}
            </div>
        </div>
    </motion.div>
  );
};

export default EducationComponents;
