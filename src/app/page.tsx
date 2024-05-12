"use client";

import { Hero } from "../../components/main/hero";
import { Navbar } from "../../components//main/navbar";
import { TracingBeam } from "../../components/ui/tracing-beam";
import { Skills } from "../../components/main/skills";
import { Projects } from "../../components/main/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
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
      </div>
    </TracingBeam>
  );
}
