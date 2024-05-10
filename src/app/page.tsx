"use client";

// import { Hero, Skills } from "../../components/hero";
import { Hero } from "../../components/main/hero";
import { Navbar } from "../../components//main/navbar";
import { TracingBeam } from "../../components/ui/tracing-beam";
import { Skills } from "../../components/main/skills";
import { Projects } from "../../components/main/projects";

export default function Home() {
  return (
    <div>
      {/* <div className="relative bg-lack sm:w-8/12 w-1/3 flex items-center justify-center p-10 mx-2 sm:mx-8"> */}
        <Navbar />
      {/* </div> */}
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <TracingBeam className="">
      <div className="relative antialiased">
        <Hero />
        <Skills />
        <Projects />
        {/* <div className="h-screen bg-blue-600"></div> */}
      </div>
    </TracingBeam>
  );
}
