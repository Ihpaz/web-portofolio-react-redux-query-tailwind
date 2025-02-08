import React from "react";
type education = {
    id: number;
    name: string;
    time: string;
    description: string;
 };

type CardProps = {
    data:education;
}
const Card: React.FC<CardProps> = (data) => {

    return (
      <div className="group relative flex flex-col items-center gap-1 w-full md:w-[600px] border-0 bg-[#1A1229] rounded-md cursor-pointer hover:border-2 hover:border-indigo-900" key={data.data.id}>
        <h3 className=" text-2xl font-semibold p-2 color-main">
            {data.data.time}
        </h3>
        <h1 className=" text-4xl font-semibold p-2 text-white">
            {data.data.name}
        </h1>
        <p className=" text-sm font-semibold p-2 text-white">
            {data.data.description} 
        </p>
      </div>
    )
}

export default Card;