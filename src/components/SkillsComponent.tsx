import React from "react";

import { motion } from "framer-motion";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import CardSkills from "./atoms/CardSkills";

const SkillsComponents: React.FC = () => {
  
    const techStack = [
        { id: 1, name: "PHP", icon: <SiPhp size={90} color="grey" /> },
        { id: 2, name: "Javascript", icon: <TbBrandJavascript size={90} color="grey" /> },
        { id: 3, name: "JAVA", icon: <FaJava size={90} color="grey" /> },
        { id: 4, name: "Flutter", icon: <FaFlutter size={90} color="grey" /> }
    ];
    
  return (
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the section is in view
      className="w-full"
    >
     
        <div className="bg-[#0D0817] w-full px-24  py-8 text-center flex flex-col justify-center gap-8 min-h-[900px]" id="skills">
            <h2 className="text-5xl font-bold color-main">
                My Skills
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
             My expertise spans multiple programming languages and frameworks, enabling me to build scalable,
             high-performance applications with any language required
           </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4   items-center cursor-pointer">

            {techStack.map((tech) => (
                <CardSkills key={tech.id} data={tech}>
                    {tech.icon}
                </CardSkills>
            ))}
                {/* <div className="flex flex-col gap-2 justify-center items-center  rounded-4xl h-48">
                    <SiPhp size={90} color="grey" />
                    <h2 className="text-3xl font-bold color-main">
                    PHP
                    </h2>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center  rounded-4xl h-48 ">
                    <TbBrandJavascript size={90} color="grey"/>
                    <h2 className="text-3xl font-bold color-main">
                        Javascript
                    </h2>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center  rounded-4xl h-48">
                    <FaJava size={90} color="grey"/>
                    <h2 className="text-3xl font-bold color-main">
                        JAVA
                    </h2>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center  rounded-4xl h-48">
                    <FaFlutter size={90} color="grey"/>
                    <h2 className="text-3xl font-bold color-main">
                        Flutter
                    </h2>
                </div> */}
            </div>
        </div>
    </motion.div>
  );
};

export default SkillsComponents;
