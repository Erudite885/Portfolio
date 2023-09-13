import React from "react";
import { Instagram, Linkedin, Twitter, github } from "../assets";

const footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h3 className="text-xl mb-4">Social Links</h3>
      <div className=" flex gap-5 items-center justify-center">
        <a href="https://www.linkedin.com/in/bianca-uche" class="linkedin">
          <img src={Linkedin} alt="" className="w-6 h-6 " />
        </a>
        <a href="https://github.com/Erudite885" class="github">
          <img src={github} alt="" className="w-6 h-6 " />
        </a>
        <a href="https://instagram.com" class="instagram">
          <img src={Instagram} alt="" className="w-6 h-6 " />
        </a>
        <a href="https://twitter.com" class="twitter">
          <img src={Twitter} alt="" className="w-6 h-6 " />
        </a>
      </div>
    </div>
  );
};

export default footer;
