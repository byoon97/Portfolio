import React from "react";
import Image from "next/image";
import "../css/under-line.css";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left max-w-5xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 md:top-24 uppercase tracking-[20px] text-[#87C332] text-2xl">
        About Me
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center">
        {" "}
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
          className="mb-10 md:mb-0 flex-shrink-0 w-56 object-cover rounded-lg md:w-64 md:h-95 xl:w-[333.3px] xl:h-[425px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <p className="text-[12px] md:text-[14px]">
            Located in Queens, New York, I am a Bi-Lingual (Korean/English)
            Software Developer with a main focus on the Front End. I enjoy
            creating web-apps using the latest technology and cleanest design
            patterns. I specialize in using frameworks such as React, languages
            such as TypeScript, and libraries such as GraphQL/Apollo, Tailwind
            CSS and Styled-Components. I define myself as a motivated individual
            with a high learning capacity and continuously am learning on how to
            be a better person each and every day. I am looking for a Junior/Mid
            level role and am open to remote work.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
