import React, { useState, useEffect } from "react";
import axios from "axios";

import { BsFillCircleFill, BsCodeSlash, BsBroadcast } from "react-icons/bs";

const BlogsCard = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tmilan0604`
      );
      console.log(res.data.items);
      setBlogs(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-2xl p-5">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-center text-slate-600 dark:text-gray-100 font-semibold text-2xl">
            Recent Posts
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
      <div className="grid grid-cols-1 gap-4 mt-4">
        {blogs.map((blog, index) => (
          <div
            className="bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden"
            key={index}
          >
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={blog.thumbnail}
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-gray-100 font-semibold">
                  Author: {blog.author}
                </div>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-lg leading-tight font-medium text-black dark:text-gray-300 hover:underline"
                >
                  {blog.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsCard;
