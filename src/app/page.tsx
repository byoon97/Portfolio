"use client";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll bg-[#222628] scrollbar scrollbar-track-[#222628]/20 scrollbar-thumb-[#87C233]/80">
      <div className="snap-start ">
        <Hero />
      </div>
      <div className="snap-start ">
        <AboutMe />
      </div>
      <div className="snap-start ">
        <Tools />
      </div>
      <div className="snap-start ">
        <Experience />
      </div>
    </div>
  );
}
