import ContactForm from "./ContactForm";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import WorkExperiences from "./WorkExperiences";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Projects />
      <WorkExperiences />
      <ContactForm />
      <Resume />
    </div>
  );
};

export default Portfolio;
