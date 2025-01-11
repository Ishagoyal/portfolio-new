import { WorkExperience } from "../types";
import WorkExperienceCard from "./WorkExperienceCard";

const workExperiences: WorkExperience[] = [
  {
    title: "JediSwap",
    description:
      "Developed JediSwap Missions interface that enables users to claim NFTs on Starknet. Worked on allowing the users to connect their wallet with the application, read the balance, and enable transactions.",
    tech: ["React", "TypeScript", "starknet-react", "Redux"],
    role: " Frontend Developer",
    link: "https://www.jediswap.xyz/",
    duration: "July 2023 - Present",
  },
  {
    title: "Playment (Telus International AI Data Solutions)",
    description:
      "Creating and enhancing the world's data to enable better AI via human intelligence.",
    tech: ["React", "Konva.js", "Redux", "TypeScript", "AntD", "Storybook", "Three.js"],
    role: "Senior Frontend Engineer",
    link: "https://jarvis.playment.io/",
    duration: "Dec 2019 - Feb 2023",
  },
  {
    title: "ClearGlass Analytics",
    description:
      "A digital platform for asset owners to see all their investment costs in one place.",
    tech: ["Vue", "Cypress", "VueX", ],
    role: "Frontend Developer",
    link: "https://portal.clearglass.com/auth/login",
    duration: "March 2019- Nov 2019",
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
