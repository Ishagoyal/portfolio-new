import { Github, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openGitHub = () => {
    window.open(
      "https://github.com/Ishagoyal",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/isha-goyal-34b419b7",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd text-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-blue-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-purple-600/30 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tighter mb-4">
          Hi, I’m <span className="text-blue-300">Isha Goyal</span>
        </h1>
        <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-gray-200">
          Crafting exceptional web experiences.
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          I build high-performance, user-focused websites and applications using
          modern technologies like React, TypeScript, and TailwindCSS. Let's
          create something amazing together!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Contact Me Button */}
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Contact Me</span>
          </button>

          {/* GitHub Button */}
          <button
            onClick={openGitHub}
            className="px-6 py-3 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </button>

          {/* LinkedIn Button */}
          <button
            onClick={openLinkedIn}
            className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
