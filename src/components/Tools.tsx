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
      className=""
    >
      <div className="h-screen flex flex-col items-center justify-center relative mx-auto  text-center">
        <h3 className="pl-[20px] absolute top-24 md:top-42 uppercase tracking-[20px] text-[#87C332] text-2xl text-center">
          Tools
        </h3>

        {/* <h4 className=" text-[12.5px] mb-20">
          Tools, Frameworks, and Libraries I am comfortable using on a daily
          basis
        </h4> */}
        <motion.div
          className="grid grid-cols-4 gap-4 mb-22"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, 
              },
            },
          }}
        >
          {Icons.map((icon, index) => (
            <motion.div
              key={icon.name}
              className="flex flex-col items-center justify-end space-y-2 h-full"
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }} 
            >
              <Image src={icon.img} width={40} height={40} alt={icon.name} />
              <h5 className="text-[13px] text-gray-500">{icon.name}</h5>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tools;
