import React from "react";
import Image from "next/image";
import { projects } from "../../public/projects/projects";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2x;">
          Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
          {projects.map((proj) => (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={proj.img}
                alt={proj.name}
              />

              <div className="flex flex-col text-black text-center">
                {" "}
                <h4 className="font-semibold text-[30px]">{proj.name}</h4>
                <p className="text-[15px] ">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
