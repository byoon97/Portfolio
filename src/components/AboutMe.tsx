import React from "react";
import Image from "next/image";
import "../css/under-line.css";

const AboutMe: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <div className="relative w-[1px] bg-gray-400 self-center h-[35%]">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>{" "}
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2x text-center">
        About Me
      </h3>
      <div className="h-full mb-4 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center">
        <Image src="/gg.jpg" alt="me" className="" width={100} height={100} />
        <div className="mt-4 font-semibold text-center text-black flex items-center justify-center px-4 md:px-12 text-[14px] h-full">
          Located in Queens, New York, I am a Bi-Lingual (Korean/English)
          Software Developer with a main focus on the Front End. I enjoy
          creating web-apps using the latest technology and cleanest design
          patterns. I specialize in using frameworks such as React, languages
          such as TypeScript, and libraries such as GraphQL/Apollo, Tailwind CSS
          and Styled-Components. I define myself as a motivated individual with
          a high learning capacity and continuously am learning on how to be a
          better person each and every day. I am looking for a Junior/Mid level
          role and am open to remote work, or relocation.
        </div>
      </div>
      <div className="top-0 bottom-0 flex justify-center w-[1px] bg-gray-400 h-[40%]">
        <div className="relative w-[1px] bg-gray-400 h-full">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;