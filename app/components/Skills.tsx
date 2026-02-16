"use client";

import { portfolioData } from "../data/portfolio-data";

export default function Skills() {
  const { skills } = portfolioData;

  // Categorize skills
  const frontendSkills = skills.filter((skill) =>
    [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux",
      "TailwindCSS",
      "Material UI",
    ].includes(skill.name)
  );

  const backendSkills = skills.filter((skill) =>
    [
      "Node.js",
      "NestJS",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Firebase",
    ].includes(skill.name)
  );

  const cicdSkills = skills.filter((skill) =>
    ["CI/CD", "GitHub Actions", "Docker"].includes(skill.name)
  );

  const cloudDevOpsSkills = skills.filter((skill) =>
    ["AWS", "GCP", "Azure"].includes(skill.name)
  );

  const aiToolsSkills = skills.filter((skill) =>
    ["ChatGPT", "Claude", "GitHub Copilot", "OpenAI API", "LangChain", "AI Prompting"].includes(skill.name)
  );

  const otherSkills = skills.filter(
    (skill) =>
      !frontendSkills.includes(skill) &&
      !backendSkills.includes(skill) &&
      !cicdSkills.includes(skill) &&
      !cloudDevOpsSkills.includes(skill) &&
      !aiToolsSkills.includes(skill)
  );

  const skillCategories = [
    {
      title: "Frontend",
      skills: frontendSkills,
      icon: "💻",
      color: "blue",
    },
    {
      title: "Backend",
      skills: backendSkills,
      icon: "⚙️",
      color: "purple",
    },
    {
      title: "CI/CD",
      skills: cicdSkills,
      icon: "🚀",
      color: "orange",
    },
    {
      title: "Cloud & DevOps",
      skills: cloudDevOpsSkills,
      icon: "☁️",
      color: "green",
    },
    {
      title: "AI Tools",
      skills: aiToolsSkills,
      icon: "🤖",
      color: "indigo",
    },
    {
      title: "Others",
      skills: otherSkills,
      icon: "🛠️",
      color: "teal",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-950/20",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-700 dark:text-blue-300",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
        hover: "hover:bg-blue-200 dark:hover:bg-blue-800",
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-950/20",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-700 dark:text-purple-300",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
        hover: "hover:bg-purple-200 dark:hover:bg-purple-800",
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-950/20",
        border: "border-orange-200 dark:border-orange-800",
        text: "text-orange-700 dark:text-orange-300",
        badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
        hover: "hover:bg-orange-200 dark:hover:bg-orange-800",
      },
      green: {
        bg: "bg-green-50 dark:bg-green-950/20",
        border: "border-green-200 dark:border-green-800",
        text: "text-green-700 dark:text-green-300",
        badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
        hover: "hover:bg-green-200 dark:hover:bg-green-800",
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-950/20",
        border: "border-teal-200 dark:border-teal-800",
        text: "text-teal-700 dark:text-teal-300",
        badge: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
        hover: "hover:bg-teal-200 dark:hover:bg-teal-800",
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-950/20",
        border: "border-indigo-200 dark:border-indigo-800",
        text: "text-indigo-700 dark:text-indigo-300",
        badge: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
        hover: "hover:bg-indigo-200 dark:hover:bg-indigo-800",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Technologies I work with to build scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIdx) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={categoryIdx}
                className={`rounded-xl p-6 ${colors.bg} border ${colors.border} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.badge} ${colors.hover} transition-all duration-200 text-sm font-medium`}
                    >
                      {skill.name}
                      <span className="text-xs opacity-70">
                        {skill.level}%
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {skills.length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Technologies
            </div>
          </div>
          <div className="text-center p-5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              9+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Years Experience
            </div>
          </div>
          <div className="text-center p-5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              50+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Projects
            </div>
          </div>
          <div className="text-center p-5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {skillCategories.length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Categories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
