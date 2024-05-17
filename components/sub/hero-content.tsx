"use client";

import { SparklesIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-8 mt-44 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            About Me
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col mt-2 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Teach Machines
            </span>{" "}
            to Think (Almost)
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          I&apos;m a CS undergraduate driven by an unwavering passion for
          artificial intelligence. I&apos;m particularly fascinated by its
          potential to solve complex problems and make groundbreaking
          discoveries when applied to astronomy. I possess working knowledge in
          image processing, natural language processing, and an understanding of
          reinforcement learning principles. My ongoing projects and self-study
          keep my skills sharp. An avid reader with a curious mind, I&apos;m
          committed to becoming a skilled AI practitioner who can contribute to
          the advancement of both the field and our understanding of the cosmos.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href={"mailto:lakshya.singh354@gmail.com"}>
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl`}
              >
                Get in touch &rarr;
              </span>
            </button>
          </Link>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden sm:flex justify-center items-center"
      >
        <Image
          src="/hero-img.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
