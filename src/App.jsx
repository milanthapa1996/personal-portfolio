import React, { useState, useEffect } from "react";
import ChangeTheme from "./components/leftSide/ChangeTheme";
import Profile from "./components/leftSide/Profile";
import LinkCard from "./components/leftSide/LinkCard";
import TechStackCard from "./components/leftSide/TechStackCard";
import ExperienceCard from "./components/leftSide/ExperienceCard";
import EducationCard from "./components/leftSide/EducationCard";
import ProjectCard from "./components/rightSide/ProjectCard";
import BlogsCard from "./components/rightSide/BlogsCard";
import ScrollUp from "./components/ScrollUp";
import { UserContextProvider } from "./context/UserContext";

function App() {

  return (
    <UserContextProvider>
      <div className="bg-gray-200 dark:bg-slate-900">
        <ScrollUp />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 p-5 scroll-smooth ">
          <div className="grid gap-y-5 grid-cols-1">
            <ChangeTheme />
            <Profile />
            <LinkCard />
            <TechStackCard />
            <ExperienceCard />
            <EducationCard />
          </div>
          <div className="grid gap-y-5 grid-cols-1 col-span-2 mt-4 mb-4 lg:mt-0 max-h-screen">
            <ProjectCard />
            <BlogsCard />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
