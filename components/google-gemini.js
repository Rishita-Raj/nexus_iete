//paste on google-gemini.js

"use client";
import { cn } from "../lib/utils"; // Ensure this utility function is defined correctly
import { motion, useMotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("sticky top-40", className)}>
      <p className="text-lg md:text-9xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `NEXUS- 3.0`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        Welcome  the world of web development.
      </p>
      <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute">
        <button className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs w-fit mx-auto">
          <a href="https://ietebits.com/">IETE STUDENTS' FORUM</a>
        </button>
      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        {Array.isArray(pathLengths) &&
          pathLengths.map((pathLength, index) => (
            <motion.path
              key={index}
              d={`M0 ${index * 50 + 400} C300,${index * 50} 600,${
                index * 50 + 800
              } 1440,${index * 50 + 400}`}
              stroke={
                ["#FFB7C5", "#FFDDB7", "#B1C5FF", "#4FABFF", "#076EFF"][index]
              }
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              style={{ pathLength }}
              transition={transition}
            />
          ))}
      </svg>
    </div>
  );
};