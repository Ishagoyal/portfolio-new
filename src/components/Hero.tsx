import { Github, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openGitHub = () => {
    window.open(
      "https://github.com/your-github-profile",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Senior Frontend Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Building exceptional digital experiences with modern web technologies
        </p>
        <div className="flex justify-center space-x-4">
          {/* Contact Me Button */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </button>

          {/* GitHub Button */}
          <button
            onClick={openGitHub}
            className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
