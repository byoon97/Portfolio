import React, { useRef, useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
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
      className="h-screen flex flex-col items-center justify-center"
      ref={myRef}
    >
      <h1 className="text-5xl font-semibold text-[#87C233]">I am Brandon</h1>
      <div className="text-4xl font-semibold text-center pt-2">
        <span className="text-white">{text}</span>
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
  );
};

export default Hero;
