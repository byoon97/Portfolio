"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three"; // Importing THREE.js
import NET from "vanta/dist/vanta.net.min";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

const Hero: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);
  const [text, count] = useTypewriter({
    words: ["< I am a Software Engineer />", "< Lets Connect! />"],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      const effect = NET({
        THREE: THREE,
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        color: "#3D52A1",
        backgroundColor: "#CFD6FE",
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const twitterShareUrl = `https://twitter.com/`;
  const redditShareUrl = `https://www.reddit.com`;
  const facebookShareUrl = `https://www.facebook.com`;

  return (
    <div
      className="flex flex-col h-screen items-center justify-center"
      ref={myRef}
    >
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
  );
};

export default Hero;
