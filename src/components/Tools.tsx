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
      className="h-screen flex flex-col items-center justify-center "
    >
      <div className="h-screen relative flex flex-col md:flex-row justify-evenly mx-auto items-center z-0 text-center">
        <div className="flex flex-col absolute top-24 space-y-4">
          <h3 className=" uppercase tracking-[13px] text-[#87C332] text-2xl">
            Tools and Technologies
          </h3>
          <h4 className="text-[14px] text-gray-500">
            Frameworks, Libraries, and Technologies I am comfortable working
            with on a daily basis
          </h4>
        </div>

        <motion.div
          className="grid grid-cols-4 gap-4 mb-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // Adjust this value for more or less delay
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
              transition={{ duration: 0.5, delay: index * 0.1 }} // Add index-based delay
            >
              <Image src={icon.img} width={40} height={40} alt={icon.name} />
              <h5 className="text-[13px]">{icon.name}</h5>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tools;
