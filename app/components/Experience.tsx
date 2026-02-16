import { portfolioData } from "../data/portfolio-data";

export default function Experience() {
  const { experience } = portfolioData;
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Experience
        </h2>
        <div className="relative pl-8 md:pl-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400"></div>

          {/* Timeline items */}
          {experience.map((exp, idx) => (
            <div key={idx} className="relative mb-12 md:mb-16">
              {/* Timeline dot */}
              <div className="absolute -left-8 md:-left-12 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 border-4 border-white dark:border-slate-900 shadow-lg flex items-center justify-center z-10">
                <span className="text-base md:text-lg">{exp.icon}</span>
              </div>

              {/* Content card */}
              <div className="w-full">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white break-words">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold break-words">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed break-words">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Key Achievements:
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, aIdx) => (
                        <li
                          key={aIdx}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start break-words"
                        >
                          <svg
                            className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="break-words">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

