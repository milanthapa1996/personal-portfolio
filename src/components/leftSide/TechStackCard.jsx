import React from "react";

const TechStackCard = () => {
  const techStackList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "MongoDB",
    "Mongoose",
    "Passport",
    "Jest",
    "Enzyme",
    "React Testing Library",
    "JWT",
  ];
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl min-h-[100px] p-5">
      <h1 className="text-slate-700 dark:text-gray-100 font-semibold text-2xl">Tech Stack</h1>
      <div className="p-3 flow-root">
        <div className="-m-1 flex flex-wrap justify-center">
          {techStackList.map((skill, index) => (
            <div
              key={index}
              className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-purple-700  dark:bg-slate-700 rounded-full text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
