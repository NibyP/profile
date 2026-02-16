const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"];
const tools = ["Git", "GitHub", "VS Code", "Figma", "Docker", "Postman"];
const aiTools = ["ChatGPT", "GitHub Copilot", "Claude", "Perplexity", "Midjourney"];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Acme Digital",
    period: "2022 - Present",
    description:
      "Built high-performing web applications with React and Next.js, improving page speed and user engagement.",
  },
  {
    title: "Web Developer",
    company: "Bright Studio",
    period: "2020 - 2022",
    description:
      "Developed responsive client websites, collaborated with designers, and maintained reusable component libraries.",
  },
];

const projects = [
  {
    name: "E-Commerce Dashboard",
    details: "A data-rich admin dashboard with analytics, product management, and role-based access.",
  },
  {
    name: "Personal Finance Tracker",
    details: "A budgeting app with expense categorization, monthly insights, and interactive charts.",
  },
  {
    name: "Portfolio Website",
    details: "A fast, SEO-friendly personal site showcasing projects, blogs, and contact information.",
  },
];

function Pill({ text }: { text: string }) {
  return <span className="pill">{text}</span>;
}

export default function Home() {
  return (
    <main className="container">
      <section className="hero card">
        <p className="tag">Available for freelance & full-time roles</p>
        <h1>Your Name</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          I craft modern, accessible web experiences and build reliable products from idea to launch.
        </p>
      </section>

      <section className="card">
        <h3>Skills</h3>
        <div className="pill-grid">{skills.map((skill) => <Pill key={skill} text={skill} />)}</div>
      </section>

      <section className="card">
        <h3>Experience</h3>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.title + experience.company} className="timeline-item">
              <header>
                <h4>{experience.title}</h4>
                <p>{experience.company}</p>
                <span>{experience.period}</span>
              </header>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h4>{project.name}</h4>
              <p>{project.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>Tools</h3>
        <div className="pill-grid">{tools.map((tool) => <Pill key={tool} text={tool} />)}</div>
      </section>

      <section className="card">
        <h3>AI Tools</h3>
        <div className="pill-grid">{aiTools.map((tool) => <Pill key={tool} text={tool} />)}</div>
      </section>
    </main>
  );
}
