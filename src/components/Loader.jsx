import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="h-6 w-6 bg-white rounded-full ring-2 border-2 animate-ping ring-blue-400"></span>
    </div>
  );
};

export default Loader;
