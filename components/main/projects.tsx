import { ProjectCard } from "../sub/project-card";
import { PROJECTS } from "../../constants";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "framer-motion";
import { slideInFromRight } from "../../lib/motion";
import Link from "next/link";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-40"
    >
      <div className="flex items-center w-screen pl-32 pr-20 justify-between">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-0">
          Featured Projects:
        </h1>
        <Link href="/projects">
          <div className="items-center justify-items-end">
            <motion.div
              variants={slideInFromRight(0.5)}
              className="Welcome-box1 py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]] justify-center items-center w-20 h-8"
            >
              <h1 className="Welcome-text text-[13px]">View all</h1>
            </motion.div>
          </div>
        </Link>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          // <ProjectCard
          //   key={project.title}
          //   src={project.image}
          //   title={project.title}
          //   description={project.description}
          //   link={project.link}
          // />
          <CardContainer key={project.title} className="inter-var">
            <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[25rem] h-auto sm:h-[40rem] rounded-xl p-8 border">
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};
