import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/byoon888/"
          fgColor="currentColor"
          bgColor="transparent"
          className="hover:text-[#87C332] text-gray-500"
        />

        <SocialIcon
          url="https://github.com/byoon97"
          fgColor="currentColor"
          bgColor="transparent"
          className="hover:text-[#87C332] text-gray-500"
        />
        <SocialIcon
          url="https://medium.com/@byoon5397"
          fgColor="currentColor"
          bgColor="transparent"
          className="hover:text-[#87C332] text-gray-500"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-400 cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor="currentColor"
          bgColor="transparent"
          className="hover:text-[#87C332] text-gray-500"
        />

        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
