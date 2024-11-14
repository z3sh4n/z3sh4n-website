import ProjectCard from "../components/project-card";
import { projects } from "../components/projects";

export default function Page() {
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
        <div className='grid grid-cols-1 gap-4'>
          <ProjectCard projects={projects} ></ProjectCard>
        </div>
      </section>
    )
  }