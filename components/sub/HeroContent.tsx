"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-20 mt-40 w-full z-[20]"
    >
      {/* Left Side Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Welcome To My Space 
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Onkar Ghadigaonkar
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Software Developer{" "}
            </span>
            (Python-Django-Flask-AWS)
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Software Developer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/19H8tJaxC7cFCQ6jXySEziQfaSgKmFSNb/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          View My CV
        </motion.a>
      </div>

      {/* Right Side with Profile Photo Overlapping the Icons */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full relative flex justify-center items-center"
      >
        {/* Background Icons */}
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="absolute opacity-50"
        />
        {/* Profile Photo */}
        <Image
          src="/image.jpg"
          alt="Profile Photo"
          height={300}
          width={300}
          className="rounded-full border-4 border-white shadow-lg z-10"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
