"use-client";

import { Nunito, Orbitron } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaKaggle,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200"],
});
const orbitron = Orbitron({
  subsets: ["latin"],
});
export function Hero() {
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row justify-around p-8">
          <div className={`sm:w-5/6`}>
            <div className={`text-3xl font-bold pt-12 ${orbitron.className}`}>
              I&apos;m Lakshya Singh,
            </div>
            <div className={`text-3xl font-bold pt-1 ${orbitron.className}`}>
              a passionate AI practitionar.
            </div>
            <div
              className={`${nunito.className}, pt-3 text-lg opacity-80 sm:w-4/5`}
            >
              I&apos;m a CS undergraduate driven by an unwavering passion for
              artificial intelligence. I&apos;m particularly fascinated by its
              potential to solve complex problems and make groundbreaking
              discoveries when applied to astronomy. I possess working knowledge
              in image processing, natural language processing, and an
              understanding of reinforcement learning principles. My ongoing
              projects and self-study keep my skills sharp. An avid reader with
              a curious mind, I&apos;m committed to becoming a skilled AI
              practitioner who can contribute to the advancement of both the
              field and our understanding of the cosmos.
            </div>
          </div>
          <div className="mt-44">
            <Link href={"mailto:lakshyasingh354@gmail.com"}>
              <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`${nunito.className} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl`}
                >
                  Get in touch &rarr;
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-2/3 sm:w-1/2 border-gray-400  ml-4 sm:ml-10" />
      </div>
      <div className={`ml-4 sm:ml-10 ${nunito.className} py-2 text-lg flex`}>
        <div className="">Let&apos;s connect! &mdash;</div>
        <div className="flex">
          <div className="mt-1 ml-2">
            <a
              href="https://github.com/LakshyaSingh354"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <FaGithub size={20} />
            </a>
          </div>
          <div className="mt-1 ml-2">
            <a
              href="https://twitter.com/Lakshya0503"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <FaXTwitter size={20} />
            </a>
          </div>
          <div className="mt-1 ml-2">
            <a
              href="https://www.kaggle.com/lakshyasingh354"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <FaKaggle size={20} />
            </a>
          </div>
          <div className="mt-1 ml-2">
            <a
              href="https://www.linkedin.com/in/lakshya-singh-354l"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <FaLinkedinIn size={23} />
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export function Skills(){
  return(
    <div>
      
    </div>
  )
}
