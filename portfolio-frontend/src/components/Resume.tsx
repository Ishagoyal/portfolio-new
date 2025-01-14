const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">
          My Resume
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Take a look at my professional experience, education, and skills by
          downloading my resume.
        </p>

        <div className="flex justify-center space-x-8">
          <a
            href="public/Isha Resume.pdf" // Replace with actual file path
            target="_blank"
            download
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Download Resume
          </a>

          <a
            href="public/Isha Resume.pdf" // Replace with actual file path
            target="_blank"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
