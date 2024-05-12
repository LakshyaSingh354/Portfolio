"use client";

import { Hero } from "../../../components/hero";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../lib/motion";
import { StickyScroll } from "../../../components/ui/sticky-scroll";
import { CONTENT } from "../../../components/sub/project-all";

export default function Project() {
  return (
    <div className="h-screen w-screen mt-40">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-0">
          My Projects:
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
      >
        <StickyScroll content={CONTENT} />
      </motion.div>
    </div>
    // <div className="h-screen w-screen mt-20">
    //   <motion.div
    //     variants={slideInFromTop}
    //     initial="hidden"
    //     animate="visible"
    //     className="flex flex-col items-center justify-center"
    //   >
    //     <h1 className="text-[60px] mt-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-0">
    //       My Projects:
    //     </h1>
    //   </motion.div>
  );
}
