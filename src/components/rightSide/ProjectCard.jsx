import React from "react";
import { HiOutlineFolderOpen } from "react-icons/hi";
import {
  AiOutlineBranches,
  AiOutlineRocket,
  AiOutlineStar,
} from "react-icons/ai";

import { BsFillCircleFill, BsCodeSlash, BsBroadcast } from "react-icons/bs";

const ProjectCard = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "JavaScript",
      color: "yellow",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "Python",
      color: "blue",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "Java",
      color: "red",
    },
    {
      name: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C++",
      color: "green",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
    {
      name: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "C#",
      color: "gray",
    },
  ];

  return (
    <div className="bg-gray-100 rounded-lg shadow-2xl p-5">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-center text-slate-600 font-semibold text-2xl">
            My Projects
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a href="#" className="underline text-gray-500 hover:text-blue-500">
            see all
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div class="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-2xl  shadow-red-300 space-y-3 hover:bg-sky-500 hover:ring-sky-500 cursor-pointer">
            <div class="flex items-center space-x-3">
              <HiOutlineFolderOpen className="text-lg text-slate-700 group-hover:text-white" />
              <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
                {project.name}
              </h3>
            </div>
            <p class="text-slate-500 group-hover:text-white text-sm flex justify-center">
              <span>
                <AiOutlineRocket className="text-xs -rotate-45 mr-1" />
              </span>{" "}
              {project.description}
            </p>
            <div className="flex flex-row justify-between">
              <div class="text-slate-500 group-hover:text-white text-sm flex space-x-2">
                <span className="flex justify-center items-center">
                  <AiOutlineStar className="text-sm mr-1" />
                  {project.startCount}
                </span>
                <span className="flex justify-center items-center">
                  <AiOutlineBranches className="text-sm mr-1" />
                  {project.forkCount}
                </span>
              </div>
              <div class="text-slate-500 group-hover:text-white text-sm flex space-x-2">
                <span className="flex justify-center items-center">
                  <BsFillCircleFill
                    className={`text-xs mr-1 text-yellow-300`}
                  />
                  {project.langauage}
                </span>
              </div>
            </div>
            <div class="bg-slate-400 group-hover:bg-slate-50 h-[1px]"></div>
            <div className="flex flex-row justify-center space-x-8">
              <button class="bg-blue-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-full group-hover:text-white flex justify-center items-center">
                <BsCodeSlash className="text-lg mr-2" />
                Code
              </button>
              <button class="bg-blue-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-full group-hover:text-white flex justify-center items-center">
                <BsBroadcast className="text-lg mr-2" />
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
