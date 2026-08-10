import { Project } from "../types";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  const cardClasses = `relative rounded-xl border p-6 sm:p-8 transition-all duration-300 ${
    project.featured
      ? "md:col-span-2 bg-indigo-50 border-indigo-200 shadow-lg dark:bg-indigo-950/40 dark:border-indigo-700"
      : "bg-gray-50 border-gray-100 hover:shadow-xl dark:bg-gray-700 dark:border-gray-600"
  }`;

  return (
    <article className={cardClasses}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        {project.status && (
          <span className="px-3 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full dark:text-indigo-200 dark:bg-indigo-900">
            {project.status}
          </span>
        )}
      </div>
      <p className="text-lg font-medium text-indigo-700 dark:text-indigo-300 mb-6">
        {project.tagline}
      </p>
      <div className="space-y-5 text-gray-600 dark:text-gray-300">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-1">
            Problem
          </h4>
          <p className="leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-1">
            What I {project.featured ? "am building" : "built"}
          </h4>
          <p className="leading-relaxed">{project.solution}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {project.themes.map((theme) => (
          <span
            key={theme}
            className="px-3 py-1 text-sm bg-white/80 dark:bg-gray-800 text-indigo-800 dark:text-indigo-200 rounded-full"
          >
            {theme}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-7 font-medium text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-white"
        >
          View product <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </article>
  );
};

export default ProjectCard;
