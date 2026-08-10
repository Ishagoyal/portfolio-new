import { Project } from "../types";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  {
    title: "CookBridge",
    tagline: "Taking ‘Aaj kya banaye?’ off your mental load.",
    problem:
      "Households with cooks still spend energy deciding meals, checking ingredients, coordinating, and remembering what was eaten recently.",
    solution:
      "A WhatsApp-first household food assistant that remembers preferences, considers recent meals and available ingredients, then turns decisions into cook-ready messages. I’m exploring how it can infer inventory changes from everyday conversations instead of creating another tracking chore.",
    themes: [
      "Conversational UX",
      "AI Agents",
      "Household Memory",
      "User Research",
      "Product Iteration",
    ],
    status: "Currently building",
    featured: true,
  },
  {
    title: "AI Fashion Stylist",
    tagline: "Your wardrobe, turned into outfits through conversation.",
    problem:
      "People often own plenty of clothes but still struggle with the everyday question: what should I wear?",
    solution:
      "A WhatsApp-based AI stylist where people send photos of clothes they already own. It understands their wardrobe and suggests outfit combinations using those items.",
    themes: [
      "Multimodal AI",
      "Conversational UX",
      "Recommendation Systems",
      "Rapid Prototyping",
    ],
    status: "Prototype",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Things I’m Building
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
