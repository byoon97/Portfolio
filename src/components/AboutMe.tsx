import React from "react";
import { motion } from "framer-motion";
import "../css/corner-border.css";

const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left max-w-5xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="pl-[20px] absolute top-24 md:top-42 uppercase tracking-[20px] text-[#87C332] text-2xl">
        About Me
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center mt-20 z-20">
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          src="/portraits/gg.jpg"
          className="mb-6 md:mb-0 flex-shrink-0 w-56 object-cover rounded-lg md:w-64 sm:h-[55%] md:h-full xl:w-[333.3px] xl:h-[425px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <p className="text-[12px] md:text-[14px] text-gray-200 text-left">
            Located in Queens, New York, I am a Bi-Lingual (Korean/English)
            Software Developer with a main focus on the Front End. I specialize
            in using frameworks such as React, languages such as TypeScript, and
            libraries such as GraphQL/Apollo, Tailwind CSS and Styled-Components
            to create responsive websites. I define myself as a motivated
            individual with a high learning capacity with the ability to create
            a lasting impression upon others.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
