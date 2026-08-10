import { Github, Linkedin, Mail } from "lucide-react";

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
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-150px] left-[-150px] w-72 h-72 bg-blue-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-72 h-72 bg-purple-600/30 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter max-w-4xl mx-auto mb-4">
          Hi, I’m <span className="text-blue-300">Isha</span>. I build products
          around problems I can’t stop thinking about.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto">
          I started as a frontend engineer, but became more interested in what we
          should build, why someone would use it, and how to make it feel
          effortless. Today I explore those questions by talking to users,
          prototyping ideas, and shipping products myself.
        </p>

        <div className="mt-8 flex justify-center items-center space-x-6">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-xl"
          >
            <Mail className="inline-block w-5 h-5 mr-2" />
            Contact Me
          </button>

          <button
            onClick={openGitHub}
            className="px-8 py-3 border-2 border-gray-300 hover:border-blue-500 text-white rounded-lg transition-all transform hover:scale-105"
          >
            <Github className="inline-block w-5 h-5 mr-2" />
            GitHub
          </button>

          <button
            onClick={openLinkedIn}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-xl"
          >
            <Linkedin className="inline-block w-5 h-5 mr-2" />
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
