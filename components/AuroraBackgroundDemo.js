"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h1 className="text-3xl md:text-9xl font-bold text-white text-center mt-10 mb-10">
          NEXUS-3.0
        </h1>
        <p className="font-extralight text-base md:text-4xl text-neutral-200 py-4 text-center">
          WELCOME TO THE WORLD OF WEB DEVELOPMENT
        </p>
         <button className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs w-fit mx-auto">
          <a href="https://ietebits.com/">IETE STUDENTS' FORUM</a>
        </button>
      </motion.div>
    </AuroraBackground>
  );
}