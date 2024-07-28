// "use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  img_h: number;
  img_w: number;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  img_h,
  img_w,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const router = useRouter();

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop event propagation to prevent card click
    router.push("https://github.com/LakshyaSingh354/Manga-Colouring");
  };
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div style={{ width: img_w, height: img_h, position: "relative" }}>
        <Image src={src} alt={title} layout="fill" objectFit="fit" />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div
        className=" flex justify-end z-100 cursor-pointer"
        onClick={handleIconClick}
      >
        <FaGithub size={30} className="m-2" />
      </div>
    </div>
  );
};
