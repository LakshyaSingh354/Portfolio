import { CONTENT } from "../../../../components/sub/project-all";
import { PROJECTS_ALL } from "../../../../constants";

// app/projects/[projectId]/page.tsx
export default async function ProjectPage({ params }: { params: any }) {
  const projectId = params.projectId;

  // Find the project data based on the projectId
  const projectData = PROJECTS_ALL.find((project) => project.id === projectId);

  if (!projectData) {
    return <p className="mt-40">Project not found</p>;
  }

  return (
    <div className="mt-40">
      <h1>{projectData.title}</h1>
      {/* ... Render project details here */}
    </div>
  );
}
