import React from "react";
import { HiOutlineFolderOpen } from "react-icons/hi";
import {
  AiOutlineBranches,
  AiOutlineRocket,
  AiOutlineStar,
} from "react-icons/ai";

import { BsFillCircleFill, BsCodeSlash, BsBroadcast } from "react-icons/bs";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const ProjectCard = () => {
  const { loading, repoData } = useContext(UserContext);

  return (
    <div className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-2xl p-5">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-center text-slate-600 dark:text-gray-100 font-semibold text-2xl">
            My Projects
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a
            href="#"
            className="underline text-gray-500 dark:text-gray-200 hover:text-blue-500"
          >
            see all
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {repoData.map((repo, index) => (
          <div
            className="group block rounded-lg p-6 bg-white dark:bg-slate-700 ring-1 ring-slate-900/5 shadow-2xl space-y-3 hover:bg-sky-500 hover:ring-sky-500 cursor-pointer"
            key={index}
          >
            <div className="flex items-center space-x-3">
              <HiOutlineFolderOpen className="text-lg text-slate-700 dark:text-gray-100 group-hover:text-white" />
              <h3 className="text-slate-900 dark:text-gray-100 group-hover:text-white text-sm font-semibold line-clamp-1">
                {repo.name}
              </h3>
            </div>
            <p className="text-slate-500 dark:text-gray-300 group-hover:text-white text-sm">
              <span className="inline-flex line-clamp-1">
                <AiOutlineRocket className="text-xs -rotate-45 mr-1" />
                {repo.description || "no description found"}
              </span>{" "}
            </p>
            <div className="flex flex-row justify-between">
              <div className="text-slate-500 dark:text-gray-200 group-hover:text-white text-sm flex space-x-2">
                <span className="flex justify-center items-center">
                  <AiOutlineStar className="text-sm mr-1" />
                  {repo.stargazers_count}
                </span>
                <span className="flex justify-center items-center">
                  <AiOutlineBranches className="text-sm mr-1" />
                  {repo.forks_count}
                </span>
              </div>
              <div className="text-slate-500 dark:text-gray-200 group-hover:text-white text-sm flex space-x-2">
                <span className="flex justify-center items-center">
                  <BsFillCircleFill
                    className={`text-xs mr-1`}
                    style={{color:"#0014a8"}}
                  />
                  {repo.language}
                </span>
              </div>
            </div>
            <div className="bg-slate-400 group-hover:bg-slate-50 h-[1px]"></div>
            <div className="flex flex-row justify-center space-x-8">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-full group-hover:text-white flex justify-center items-center"
              >
                <BsCodeSlash className="text-lg mr-2" />
                Code
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-full group-hover:text-white flex justify-center items-center"
              >
                <BsBroadcast className="text-lg mr-2" />
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
