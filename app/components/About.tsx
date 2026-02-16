import { portfolioData } from "../data/portfolio-data";

export default function About() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              {about.facts.map((fact, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-slate-700 dark:text-slate-300"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

