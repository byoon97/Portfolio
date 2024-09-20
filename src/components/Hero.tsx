import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: ["< I am a Software Engineer />", "< Lets Connect! />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-end relative">
      {/* Content Container */}
      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl text-black font-semibold">I am Brandon</h1>
        <div className="text-4xl text-black font-semibold text-center pt-2">
          <span className="">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </div>
        <div className="flex flex-row items-center space-x-4 pb-4 pt-6">
          <a
            href="https://www.linkedin.com/in/byoon888/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon url="https://www.linkedin.com/in/byoon888/" as="div" />
          </a>
          <a
            href="https://github.com/byoon97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon url="https://github.com/byoon97" as="div" />
          </a>
          <a
            href="https://medium.com/@byoon5397"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon url="https://medium.com/@byoon5397" as="div" />
          </a>
        </div>
      </div>

      {/* Line Container */}
      <div className="top-0 bottom-0 flex justify-center w-[1px] bg-gray-400 h-[40%]">
        <div className="relative w-[1px] bg-gray-400 h-full">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
