import React from "react";
import { projects } from "../../public/projects/projects";
import { motion } from "framer-motion";
import { GrLanguage } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-14 md:top-42 uppercase tracking-[20px] text-[#87C332] text-2xl">
          Projects
        </h3>
        <div className="md:mt-14 lg:mt-20 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-rgb(35,21,59)/20 scrollbar-thumb-[#87C233]/80 items-end">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={proj.img}
                alt={proj.name}
              />

              <div className="flex flex-row items-center space-x-4 justify-center">
                {" "}
                {proj?.libraries.map((lib) => (
                  <img
                    key={lib.name}
                    src={lib.img}
                    alt={lib.name}
                    className="h-7 w-7"
                    title={lib.name}
                  />
                ))}
              </div>

              <div className="flex flex-row justify-center items-center space-x-4">
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  <GrLanguage size={22} title="Website URL" color={"#87C332"} />
                </a>
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <FaGithub
                    size={22}
                    title="GitHub Repository"
                    color={"#87C332"}
                  />
                </a>
              </div>

              <div className="flex flex-col text-center space-y-2 max-w-[425px]">
                <h4 className="font-semibold text-[30px]">{proj.name}</h4>
                <p className="text-[15px] text-[#6B6E70] ">
                  {proj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
