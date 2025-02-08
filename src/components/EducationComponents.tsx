import React from "react";
import { educations,course } from "../data/Educations";
import Card from "./atoms/Card";
import { SiGooglescholar } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";

const EducationComponents: React.FC = () => {
  

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-24">
        <div className="grid grid-cols-1 gap-4 px-2 md:px-24">
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
  );
};

export default EducationComponents;
