import React, { useState } from "react";

const categories = ["All", "JavaScript", "Java", "PHP"];

const resumes = [
  { id: 1, title: "Frontend Developer", language: "JavaScript" },
  { id: 2, title: "Backend Engineer", language: "Python" },
  { id: 3, title: "Full Stack Developer", language: "JavaScript" },
  { id: 4, title: "Mobile Developer", language: "Java" },
  { id: 5, title: "System Developer", language: "C++" },
];

const ResumesComponents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResumes =
    selectedCategory === "All"
      ? resumes
      : resumes.filter((resume) => resume.language === selectedCategory);

  return (
    <div className="bg-[#0D0817] text-white py-16 text-center px-6 md:px-28 w-full">
      <h2 className="text-4xl font-bold color-main">
        My Recent Works
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Explore my projects categorized by programming language, showcasing
        diverse expertise in web and software development.
      </p>

      <div className="flex justify-center mt-6 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={` cursor-pointer px-6 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-main text-white"
                : "bg-black text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

  
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {filteredResumes.length > 0 ? (
          filteredResumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-[#1A1229] p-6 rounded-lg shadow-md border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-purple-400">
                {resume.title}
              </h3>
              <p className="text-gray-300 mt-2">{resume.language}</p>
            </div>
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
