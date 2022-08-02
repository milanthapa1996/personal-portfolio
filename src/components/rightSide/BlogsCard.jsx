import React from "react";
import { HiOutlineFolderOpen } from "react-icons/hi";
import {
  AiOutlineBranches,
  AiOutlineRocket,
  AiOutlineStar,
} from "react-icons/ai";

import { BsFillCircleFill, BsCodeSlash, BsBroadcast } from "react-icons/bs";

const BlogsCard = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "JavaScript",
      color: "yellow",
    },
    {
      name: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "#",
      startCount: 4,
      forkCount: 12,
      langauage: "Python",
      color: "blue",
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-2xl p-5">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-center text-slate-600 dark:text-gray-100 font-semibold text-2xl">
            Recent Posts
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a href="#" className="underline text-gray-500 dark:text-gray-200 hover:text-blue-500">
            see all
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {projects.map((project, index) => (
          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden" key={index}>
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://picsum.photos/seed/picsum/200/200"
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-gray-100 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black dark:text-gray-300 hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p className="mt-2 text-slate-500 dark:text-gray-400">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsCard;
