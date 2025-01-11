import { Project } from "../types";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Cards Game",
    description:
      "The project is a React frontend application that displays a list of documents in the form of cards. These cards can be reordered, and each card can display an overlay image when clicked.",
    tech: ["React", "TypeScript", "Mock Service Worker"],
    role: "Frontend Developer",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with complex data visualizations",
    tech: ["React", "D3.js", "WebSocket", "TypeScript"],
    role: "Senior Frontend Engineer",
  },
  {
    title: "Design System",
    description:
      "Created a comprehensive design system used across multiple products",
    tech: ["React", "Storybook", "Jest", "Tailwind"],
    role: "Frontend Architect",
  },
];

const Projects = () => {
  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
