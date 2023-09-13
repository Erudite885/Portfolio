import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-primary h-[480px] px-2 py-2 flex flex-col justify-between items-center rounded-2xl sm:w-[320px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            onClick={() => window.open(web_link, "_blank")}
            src={image}
            alt="project_image"
            className="w-full h-full cursor-pointer object-cover rounded-2xl"
          />

          <div className="absolute top-0 right-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-5 items-center">
            <h3
              onClick={() => window.open(web_link, "_blank")}
              className="text-white cursor-pointer font-bold text-[24px] "
            >
              {name}{" "}
            </h3>
          </div>
          <p className="mt-2 text-secondary text-[14px] ">{description} </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`${tag.color} text-[14px] `}
            >
              {tag.name}{" "}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="bg-slate-600 rounded-2xl sm:px-14 px-6 sm:py-16 py-10 min-h-[300px]">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My Work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            className="mt-3 text-white-100 text-[17px] max-w-3xl leading-[30px] "
            variants={fadeIn("", "", 0.1, 1)}
          >
            The following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-14 flex items-center justify-center flex-wrap gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
