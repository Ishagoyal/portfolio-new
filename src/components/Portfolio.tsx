import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
};

export default Portfolio;
