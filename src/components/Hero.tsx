import React, { useRef, useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../css/corner-border.css";
import * as THREE from "three";

import NET from "vanta/dist/vanta.net.min";

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
    words: ["< I am a Software Engineer />", "< Lets Connect! />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col items-center justify-center "
      ref={myRef}
    >
      <div className="relative w-[90%] corner-border p-6">
        <h1 className="text-lg text-[#87C233] uppercase text-left tracking-[5px] font-thin">
          Brandon Yoon
        </h1>
        <div className=""></div>
        <div className="text-xl font-semibold text-left pt-2">
          <span className="text-white">{text}</span>
          <Cursor cursorColor="#87C233" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
