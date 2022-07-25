import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";

const Footer = () => {

  return (
    <div className="bg-white rounded-lg shadow-2xl min-h-[100px] p-5 flex justify-center items-center space-x-3">
      <h1 className="text-center text-slate-600 font-semibold text-2xl">
       Thank you
      </h1>
      <BiDonateHeart className="text-2xl text-red-600"/>
    </div>
  );
};

export default Footer;
