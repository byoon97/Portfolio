import React, { useRef, useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../css/corner-border.css";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { motion } from "framer-motion";
import Background from "./Background";

const Hero: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(
    null
  );
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      const effect = NET({
        THREE: THREE,
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 190.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: "#6A6E70",
        backgroundColor: "#222628",
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const [text] = useTypewriter({
    words: ["< I'm a Software Developer", "< Lets Connect! />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      ref={myRef}
    >
      <motion.div
        className="relative w-[90%] py-6 pl-6 pr-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Top-right corner */}
        <motion.div
          initial={{ width: 0, height: 0, top: "50%", right: "50%" }}
          animate={{
            width: "35px",
            height: "35px",
            top: 0,
            right: 0,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute border-t-[1px] border-r-[1px] border-[#87C233]"
        />

        {/* Bottom-left corner */}
        <motion.div
          initial={{ width: 0, height: 0, bottom: "50%", left: "50%" }}
          animate={{
            width: "35px",
            height: "35px",
            bottom: 0,
            left: 0,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute border-b-[1px] border-l-[1px] border-[#87C233]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          className="relative"
        >
          <h1 className="text-lg text-[#87C233] uppercase text-left tracking-[5px] font-thin">
            Brandon Yoon
          </h1>

          <div className="text-xl font-semibold text-left pt-2">
            <span className="text-white">{text}</span>
            <Cursor cursorColor="#87C233" />
          </div>
        </motion.div>
      </motion.div>
      {/* <Background /> */}
    </div>
  );
};

export default Hero;
