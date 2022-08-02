import React from "react";
import { BiBookReader } from "react-icons/bi";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const EducationCard = () => {
  const { loading, error, profileData } = useContext(UserContext);
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
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl min-h-[100px] p-5">
      <h1 className="text-slate-700 dark:text-gray-100 font-semibold text-2xl">
        Education
      </h1>

      <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-5">
        {schoolList.map((school, index) => (
          <li className="mb-10 ml-6" key={index}>
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <BiBookReader className="text-blue-600 dark:text-gray-100" />
            </span>
            <h3 className="flex items-center mb-1 text-xs text-gray-400 dark:text-white">
              {school.timeSpanFrom} -{" "}
              {school.timeSpanTo ? school.timeSpanTo : "Present"}
              {school.currentTag && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  Current
                </span>
              )}
            </h3>
            <p className="block mb-2 text-sm  font-semibold leading-none text-gray-700 dark:text-gray-500">
              {school.post}
            </p>
            <p className="mb-2 text-sm font-normal text-gray-400 dark:text-gray-400">
              {school.name}
            </p>
            <p className="mb-4 text-xs font-semibold text-gray-400 dark:text-gray-400">
              {school.location}
            </p>{" "}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EducationCard;
