import React from "react";
import { BiBookReader } from "react-icons/bi";

const EducationCard = () => {
  const schoolList = [
    {
      name: "IGNOU",
      currentTag: true,
      post: "MBA",
      location: "India",
      timeSpanFrom: "2022",
      timeSpanTo: "",
    },
    {
      name: "Nepal Law Campus",
      currentTag: true,
      post: "LLB",
      location: "Kathmandu, Nepal",
      timeSpanFrom: "2022",
      timeSpanTo: "",
    },
    {
      name: "Kathmandu University",
      currentTag: false,
      post: "B.E Computer Engineer",
      location: "Kavre, Nepal",
      timeSpanFrom: "2016",
      timeSpanTo: "2020",
    },
    {
      name: "Moonlight Higher Secondary School",
      currentTag: false,
      post: "+2 Science",
      location: "Lalitpur, Nepal",
      timeSpanFrom: "2015",
      timeSpanTo: "2013",
    },
    {
      name: "Arjun English Boarding High School",
      currentTag: false,
      post: "SLC",
      location: "Gulmi, Nepal",
      timeSpanFrom: "",
      timeSpanTo: "2013",
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-2xl min-h-[100px] p-5">
      <h1 className="text-slate-700 font-semibold text-2xl">Education</h1>

      <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-5">
        {schoolList.map((school) => (
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <BiBookReader className="text-blue-600" />
            </span>
            <h3 class="flex items-center mb-1 text-xs text-gray-400 dark:text-white">
              {school.timeSpanFrom} -{" "}
              {school.timeSpanTo ? school.timeSpanTo : "Present"}
              {school.currentTag && (
                <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  Current
                </span>
              )}
            </h3>
            <p class="block mb-2 text-sm  font-semibold leading-none text-gray-700 dark:text-gray-500">
              {school.post}
            </p>
            <p class="mb-2 text-sm font-normal text-gray-400 dark:text-gray-400">
              {school.name}
            </p>
            <p class="mb-4 text-xs font-semibold text-gray-400 dark:text-gray-400">
              {school.location}
            </p>{" "}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EducationCard;
