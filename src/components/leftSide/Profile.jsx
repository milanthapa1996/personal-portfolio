import React from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Loader from "../Loader";

const Profile = () => {
  const { loading, error, profileData } = useContext(UserContext);
  const profileTags = [
    "Software Engineer",
    "Open Source Enthusiast",
    "PHP",
    "Laravel",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl min-h-[100px] p-5 flex justify-center items-center flex-col">
          <img
            src={profileData.avatar_url}
            alt="profile"
            className="h-28 w-28 rounded-full border-double border-4 border-sky-500 hover:scale-125 duration-300 cursor-pointer"
          />
          <h1 className="text-center text-slate-700 dark:text-gray-100 text-2xl font-semibold mt-6">
            {profileData.name}
          </h1>
          <h2 className="text-center mt-3 font-medium text-gray-500">
            {profileData.bio}
          </h2>
        </div>
      )}
    </>
  );
};

export default Profile;
