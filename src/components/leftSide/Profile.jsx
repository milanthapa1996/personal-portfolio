import React from "react";
import profilePic from "../../assets/project_img.jpg";

const Profile = () => {
  const profileTags = [
    "Software Engineer",
    "Open Source Enthusiast",
    "PHP",
    "Laravel",
    "JavaScript",
    "React",
    "Node.js",
  ];
  return (
    <div className="bg-white rounded-lg shadow-2xl min-h-[100px] p-5 flex justify-center items-center flex-col">
      <img
        src={profilePic}
        alt="git profile"
        className="h-28 w-28 rounded-full border-double border-4 border-sky-500 hover:scale-125 duration-300 cursor-pointer"
      />
      <h1 className="text-center text-slate-700 text-2xl font-semibold mt-6">
        Milan Thapa
      </h1>
      <h2 className="text-center mt-3">
        {profileTags.map((tag) => (
          <span className="inline-block text-md font-mono text-slate-500 mr-1">
            [{tag}]
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Profile;
