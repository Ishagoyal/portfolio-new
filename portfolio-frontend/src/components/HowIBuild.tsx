const principles = [
  {
    title: "Start with the problem",
    copy: "I try to understand what people are already doing before deciding what software should exist.",
  },
  {
    title: "Remove friction",
    copy: "If the solution creates more work for the user, it probably isn’t solving the problem.",
  },
  {
    title: "Prototype quickly",
    copy: "I build enough to test the assumption rather than designing a perfect system upfront.",
  },
  {
    title: "Learn from behaviour",
    copy: "What users actually do matters more than what I expected them to do.",
  },
];

const HowIBuild = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        How I build
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((principle, index) => (
          <article key={principle.title} className="border-l-2 border-indigo-400 pl-5">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">0{index + 1}</span>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{principle.title}</h3>
            <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">{principle.copy}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HowIBuild;
