import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import React, { useRef, useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutMe />
    </div>
  );
}
