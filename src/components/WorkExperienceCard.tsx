import { WorkExperience } from "../types";
import { MoveUpRight } from "lucide-react";

const WorkExperienceCard = ({
  workExperience,
}: {
  workExperience: WorkExperience;
}) => (
  <div className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
      {workExperience.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {workExperience.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {workExperience.tech.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {workExperience.role}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {workExperience.duration}
      </p>
    </div>

    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <MoveUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    </div>
  </div>
);

export default WorkExperienceCard;
