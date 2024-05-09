"use client";

import { Hero } from "../../components/hero";
import { Navbar } from "../../components/navbar";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function Home() {
  return (
    <div>
      <div className="relative w-8/12 sm:w-0.5 flex items-center justify-center p-10 mx-2 sm:mx-8">
        <Navbar className="top-2" />
      </div>
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <TracingBeam className="">
      <div className="relative antialiased">
        <Hero />
        
        {/* <div className="h-screen bg-blue-600"></div> */}
      </div>
    </TracingBeam>
  );
}
