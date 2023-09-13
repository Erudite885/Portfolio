import React from "react";
import { motion } from "framer-motion"; 

const Hero = () => {
  return (
    <section className={`relative w-full h-[40rem] xl:h-[50rem] 2xl:h-[57rem] mx-auto`}>
      <div
        className={`absolute gap-5 sm:gap-16 lg:gap-24 xl:gap-8 z-10 inset-0 top-[100px] lg:top-[140px] xl:top-[25px] max-w-7xl mx-auto flex flex-row items-start xl:items-center xl:justify-center `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-80 h-80 absolute rounded-full bg-gradient-to-tr from-blue-100 via-slate-600 to-blue-800 opacity-20 blur-3xl top-48 -left-[250px]" />
        </div>

        <div className=" xl:flex xl:flex-col">
          <div
            className={` py-1 rounded bg-gradient-to-r from-fuchsia-800 via-orange-600 to-rose-600`}
          />
          <h1
            className={`lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] bg-gradient-to-br from-slate-100 to-sky-200 font-extrabold mt-10 tracking-wider max-w-full xl:max-w-full text-transparent bg-clip-text`}
          >
            FRONTEND DEVELOPER
          </h1>
          <div className="mt-8 xl:flex xl:flex-col xl:items-center xl:justify-center xl:text-2xl">
            <p className={` mb-5 text-white-100`}>
              Building dynamic software and <br className="sm:hidden block" />{" "}
              prioritizing user experience, <br />
            </p>
            <p className=" mb-5">
              Creating infinite posibilities, <br className="sm:hidden block" />
            </p>
            <p className="italic ">
              If <span className=" text-orange-500 underline"> You</span> can
              think it, I can{" "}
              <span className=" bg-gradient-to-br from-slate-400 to-sky-300 text-transparent bg-clip-text font-semibold">
                build{" "}
              </span>
              it.
            </p>
          </div>
          <button className="text-white border border-slate-500 xl:mx-auto xl:px-20 mt-16 p-2 tracking-wide rounded-xl bg-gradient-to-r from-fuchsia-950 via-orange-950 to-rose-800 ">
            <a className=" xl:text-2xl" href="#work">
              View More
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
