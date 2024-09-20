"use client";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three"; // Importing THREE.js
import NET from "vanta/dist/vanta.net.min";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<number>(0);

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
        scale: 1.5,
        scaleMobile: 1.0,
        color: "#3D52A1",
        backgroundColor: "#CFD6FE",
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      const aboutMeElement = document.getElementById("about-me");

      if (heroElement && aboutMeElement) {
        const heroRect = heroElement.getBoundingClientRect();
        const aboutMeRect = aboutMeElement.getBoundingClientRect();

        if (heroRect.bottom <= window.innerHeight / 2) {
          setActiveSection(1);
        } else if (aboutMeRect.top <= window.innerHeight / 2) {
          setActiveSection(2);
        } else {
          setActiveSection(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex flex-col snap-y snap-mandatory overflow-scroll h-screen"
      ref={myRef}
    >
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start bg-[#CFD6FE]">
        <AboutMe />
      </div>
      <div className="snap-start bg-[#CFD6FE]">
        <Tools />
      </div>
      <div className="snap-start bg-[#CFD6FE]">
        <Experience />
      </div>
    </div>
  );
}
