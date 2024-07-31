import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "../../constants";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="h-auto w-auto hidden sm:flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
          />
          <div className="font-bold ml-[10px] hidden md:block text-gray-300">
            Lakshya Singh
          </div>
        </Link>

        <div className="sm:w-[400px] w-fit h-full flex flex-row items-center justify-between md:mr-10">
          <div className="flex items-center justify-between w-fit h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] ml-[20px] sm:ml-[30px] sm:px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap mx-5"
              >
                {link.title}
              </Link>
            ))}

            {/* source code */}
            {/* <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Resume
            </Link> */}
          </div>
        </div>

        <div className="hidden sm:flex flex-row gap-5 w-0 sm:w-fit">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="sm:h-6 h-0 sm:w-6 w-0 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
