import React, { ReactNode } from "react";
type skill = {
    id: number;
    name: string;
 };

type CardProps = {
    data:skill;
    children?: ReactNode; 
}
const CardSkills: React.FC<CardProps> = ({data,children}) => {

    return (
      <div className="flex flex-col gap-2 justify-center items-center  rounded-4xl h-48 " key={data.id}>
        {children}
        <h2 className="text-2xl font-bold text-gray-500">
            { data.name}
        </h2>
     </div>
    )
}

export default CardSkills;