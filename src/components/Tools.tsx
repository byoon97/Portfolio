import React from "react";
import { Icons } from "../../public/icons/Icons";
import Image from "next/image";
import { motion } from "framer-motion";

const Tools: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-screen flex flex-col items-center justify-start space-y-4">
        <div className="relative w-[1px] bg-gray-400 self-center h-[40%]">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
          <h3 className="top-24 uppercase tracking-[15px] text-gray-500 text-2x text-center mb-2">
            Tools and Technologies
          </h3>

          <div className="grid grid-cols-4 gap-4 mb-4">
            {Icons.map((icon) => (
              <div
                key={icon.name}
                className="flex flex-col items-center justify-end space-y-1 w-full h-full"
              >
                <Image src={icon.img} width={40} height={40} alt={icon.name} />
                <h5 className="text-black">{icon.name}</h5>
              </div>
            ))}
          </div>
          <div className="top-0 bottom-0 flex justify-center w-[1px] bg-gray-400 h-[40%]">
            <div className="relative w-[1px] bg-gray-400 h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tools;
