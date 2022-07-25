import React, { useState, useEffect } from "react";
import { BiDroplet } from "react-icons/bi";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  return (
    <div
      className={`${
        showScroll ? "block" : "hidden"
      } fixed bottom-0 right-0 mr-4 mb-4 z-50 cursor-pointer`}
    >
      <div
        className="bg-purple-500 rounded-full shadow-2xl w-10 h-10 flex justify-center items-center space-x-3"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <BiDroplet className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default ScrollUp;
