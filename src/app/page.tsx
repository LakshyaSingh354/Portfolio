"use client";
import { ThemeProvider } from "styled-components";
import { Hero } from "../../components/hero";
import { Navbar } from "../../components/navbar";
import { TracingBeam } from "../../components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <div className="sticky bg-cover bg-center bg-no-repeat h-screen w-full">
      <div className="opacity-80">
        <Image
          src="https://images.unsplash.com/photo-1598046147932-c78b6d9c0905?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <div className="relative w-8/12 sm:w-0.5 flex items-center justify-center p-10 mx-2 sm:mx-8">
          <Navbar className="top-2" />
        </div>
        <MainContent />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    // <div>
      <TracingBeam className="">
        <div className="relative antialiased">
            <Hero />
            {/* <div className="h-screen bg-blue-600"></div> */}
        </div>
      </TracingBeam>
  );
    {/* </div> */}
}
