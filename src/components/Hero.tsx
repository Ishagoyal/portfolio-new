import { Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Senior Frontend Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Building exceptional digital experiences with modern web
            technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-600 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
