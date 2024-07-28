import { title } from "process";
import { PROJECTS_ALL } from "../../constants";
import Image from "next/image";

export const CONTENT = PROJECTS_ALL.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    content: <div>
                <Image src={project.image} alt={project.title} layout="fill" /> 
             </div>,
}));

