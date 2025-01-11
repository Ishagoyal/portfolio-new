import { WorkExperience } from "../types";
import WorkExperienceCard from "./WorkExperienceCard";

const workExperiences: WorkExperience[] = [
  {
    title: "E-commerce Platform",
    description:
      "Built a full-featured e-commerce platform with React, Redux, and GraphQL",
    tech: ["React", "TypeScript", "GraphQL", "Redux"],
    role: "Lead Frontend Developer",
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
const WorkExperiences = () => {
  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workExperiences.map((workExperience, index) => (
              <WorkExperienceCard key={index} workExperience={workExperience} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperiences;
