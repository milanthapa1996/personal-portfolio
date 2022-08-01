import React from "react";
import { MdLocationOn, MdMail } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import { CgDribbble } from 'react-icons/cg';
import { RiYoutubeFill } from 'react-icons/ri';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
} from 'react-icons/fa';

const LinkCard = () => {
  const socialLinks = [
    {
      name: "Website",
      link: "https://milanthapa1996.com.np",
      icon: <MdLocationOn className="text-sm" />,
    },
    {
      name: "Github",
      link: "https://www.milanthapa1996.com",
      icon: <AiFillGithub className="text-sm" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.milanthapa1996.com",
      icon: <GrLinkedinOption className="text-sm" />,
    },
    {
      name: "Facebook",
      link: "https://www.milanthapa1996.com",
      icon: <FaFacebook className="text-sm" />,
    },
    {
      name: "Instagram",
      link: "https://www.milanthapa1996.com",
      icon: <AiFillInstagram className="text-sm" />,
    },
    {
      name: "Twitter",
      link: "https://www.milanthapa1996.com",
      icon: <SiTwitter className="text-sm" />,
    },
    {
      name: "Youtube",
      link: "https://www.milanthapa1996.com",
      icon: <RiYoutubeFill className="text-sm" />,
    },
    {
      name: "Gmail",
      link: "mailto:tmilan0604@gmail.com",
      icon: <MdMail className="text-sm" />,
    },
  ];
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl min-h-[100px]">
      <ul className="p-5 flex flex-col space-y-8 text-slate-500 dark:text-gray-100">
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="flex justify-between"
          >
            <div className="flex justify-center items-center space-x-2">
              <span>{link.icon}</span>
              <span className="text-sm font-normal">{link.name}</span>
            </div>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-sm font-normal truncate ml-8"
            >
              {link.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkCard;
