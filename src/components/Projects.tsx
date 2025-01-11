import { Project } from "../types";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Cards Game",
    description:
      "The project is a React frontend application that displays a list of documents in the form of cards. These cards can be reordered, and each card can display an overlay image when clicked.",
    tech: ["React", "TypeScript", "Mock Service Worker", "Tailwind"],
    role: "Senior Frontend Developer",
    link: "https://zania-task-iota.vercel.app/",
  },
  {
    title: "Custom Date Range Picker",
    description:
      "A date range picker component in React and TypeScript that allows users to select weekdays (Monday through Friday) and prevents them from selecting weekends (Saturday and Sunday).",
    tech: ["React", "TypeScript", "Tailwind"],
    role: "Senior Frontend Engineer",
    link: "https://date-range-picker-tau.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description:
      "a weather dashboard using SvelteKit, TypeScript, and Tailwind CSS. The dashboard should allow users to view current weather conditions and a five-day forecast for a selected location.",
    tech: ["SvelteKit", "TypeScript", "Tailwind"],
    role: "Senior Frontend Engineer",
    link: "https://isha-weather-dashboard.netlify.app/",
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
