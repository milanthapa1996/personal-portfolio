import React from "react";
import { BiBuildings } from "react-icons/bi";

const ExperienceCard = () => {
  const companyList = [
    {
      name: "Real Time Solutions Pvt. Ltd.",
      currentTag: true,
      post: "Associate Software Engineer",
      location: "Jhamsikhel-08, Lalitpur",
      timeSpanFrom: "15 Aug 2020",
      timeSpanTo: "",
    },
    {
      name: "Reduct Nepal Pvt. Ltd.",
      currentTag: false,
      post: "Software Engineer Internee",
      location: "Jhamsikhel-08, Lalitpur",
      timeSpanFrom: "15 Aug 2020",
      timeSpanTo: "15 Nov 2020",
    },
  ];
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl min-h-[100px] p-5">
      <h1 className="text-slate-700 dark:text-gray-100 font-semibold text-2xl">Experience</h1>

      <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-5">
        {companyList.map((company) => (
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <BiBuildings className="text-blue-600 dark:text-gray-100" />
            </span>
            <h3 class="flex items-center mb-1 text-xs text-gray-400 dark:text-white">
              {company.name}
              {company.currentTag && (
                <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  Current
                </span>
              )}
            </h3>
            <time class="block mb-2 text-sm  font-semibold leading-none text-gray-700 dark:text-gray-500">
              {company.post}
            </time>
            <p class="mb-2 text-xs font-semibold text-gray-400 dark:text-gray-400">
              {company.location}
            </p>
            <p class="mb-4 text-xs font-semibold text-gray-400 dark:text-gray-400">
              ( {company.timeSpanFrom} -{" "}
              {company.timeSpanTo ? company.timeSpanTo : "current"} )
            </p>{" "}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceCard;
