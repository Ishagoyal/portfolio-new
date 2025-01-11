import { Project } from "../types";
import { MoveUpRight } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.link} // Navigate to the project link
    target="_blank" // Open in a new tab
    rel="noopener noreferrer" // Security best practice
    className="group relative block bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
  >
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
      {project.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400">{project.role}</p>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <MoveUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    </div>
  </a>
);

export default ProjectCard;
