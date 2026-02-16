// Portfolio Data - All section data in one place

export interface HeroData {
  name: string;
  title: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      target: string;
    };
    secondary: {
      text: string;
      target: string;
    };
  };
}

export interface AboutData {
  paragraphs: string[];
  facts: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface ContactData {
  description: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: ExperienceItem[];
  skills: Skill[];
  projects: Project[];
  contact: ContactData;
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Niby Parameswaran",
    title: "Senior Fullstack Engineer",
    description:
      "Fullstack Engineer with 9 years of experience designing and delivering scalable web and mobile products using React, Next.js, React Native, Node.js, and TypeScript.",
    buttons: {
      primary: {
        text: "View My Work",
        target: "projects",
      },
      secondary: {
        text: "Get In Touch",
        target: "contact",
      },
    },
  },
  about: {
    paragraphs: [
      "Fullstack Engineer with 9 years of experience designing and delivering scalable web and mobile products using React, Next.js, React Native, Node.js, and TypeScript. Proven expertise in system design, cloud deployment (AWS/GCP/Azure), CI/CD, and team leadership.",
      "Passionate about building user-centric solutions and mentoring developers to drive product quality and efficiency. I've successfully led teams and delivered enterprise-grade applications for various clients across different industries.",
      "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community to help build better software solutions.",
    ],
    facts: [
      "9+ years of experience",
      "Led teams of 9+ developers",
      "70% build time reduction",
      "30% performance improvements",
    ],
  },
  experience: [
    {
      title: "Analyst – Fullstack Development",
      company: "DBiz AI Solutions Pvt. Ltd.",
      period: "Mar 2022 – Present",
      description:
        "Leading design and implementation of React.js, Node.js, and Next.js applications for enterprise clients. Architecting scalable backend APIs and delivering React Native mobile applications with CI/CD pipelines.",
      achievements: [
        "Improved data throughput by 30% through scalable backend APIs",
        "Reduced build deployment time by 70% through CI/CD automation",
        "Mentored a 9-member frontend team ensuring clean architecture",
        "Delivered React Native apps with AppCenter CI/CD pipelines",
      ],
      icon: "💼",
    },
    {
      title: "Freelance Fullstack Developer",
      company: "MSGR Technologies",
      period: "May 2020 – Mar 2022",
      description:
        "Delivered multiple fullstack web applications using React, Node.js, and Express. Improved frontend performance and SEO scores across client websites while ensuring responsive and accessible experiences.",
      achievements: [
        "Delivered multiple fullstack web applications",
        "Improved frontend performance and SEO scores",
        "Ensured responsive and accessible web experiences",
        "Collaborated cross-functionally with teams",
      ],
      icon: "🚀",
    },
    {
      title: "Software Engineer",
      company: "ISPG Technologies",
      period: "Jul 2019 – Apr 2020",
      description:
        "Contributed to modernization of custom e-commerce platform using Node.js and Vue.js. Integrated APIs for coupons, vouchers, and payments while improving system reliability.",
      achievements: [
        "Modernized e-commerce platform with Node.js and Vue.js",
        "Improved system uptime by 70% through testing",
        "Integrated payment and voucher APIs",
        "Refactored codebase for better maintainability",
      ],
      icon: "🎯",
    },
    {
      title: "PHP Developer",
      company: "Techsoft Web Solutions",
      period: "May 2016 – May 2019",
      description:
        "Built and maintained multiple client-facing web applications using PHP and JavaScript. Integrated APIs for bookings, payments, and digital marketing tools while collaborating with SEO teams.",
      achievements: [
        "Built multiple client-facing web applications",
        "Integrated booking and payment APIs",
        "Collaborated with SEO teams for visibility",
        "Maintained and improved legacy systems",
      ],
      icon: "🔧",
    },
  ],
  skills: [
    // Frontend
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "React Native", level: 90 },
    { name: "TypeScript", level: 93 },
    { name: "Redux", level: 88 },
    { name: "TailwindCSS", level: 90 },
    { name: "Material UI", level: 85 },
    // Backend
    { name: "Node.js", level: 92 },
    { name: "NestJS", level: 88 },
    { name: "Express.js", level: 90 },
    { name: "GraphQL", level: 85 },
    { name: "REST APIs", level: 93 },
    { name: "Firebase", level: 87 },
    // DevOps & Cloud
    { name: "AWS", level: 88 },
    { name: "GCP", level: 85 },
    { name: "Azure", level: 80 },
    { name: "Docker", level: 85 },
    { name: "CI/CD", level: 90 },
    { name: "GitHub Actions", level: 88 },
    // Others - Tools & Testing
    { name: "Jest", level: 85 },
    { name: "Mocha", level: 80 },
    { name: "Git", level: 92 },
    { name: "Postman", level: 88 },
    { name: "JIRA", level: 85 },
    { name: "Figma", level: 80 },
    { name: "SEO", level: 85 },
    { name: "Payment Gateway", level: 90 },
    // AI Tools
    { name: "ChatGPT", level: 90 },
    { name: "Claude", level: 85 },
    { name: "GitHub Copilot", level: 88 },
    { name: "OpenAI API", level: 85 },
    { name: "LangChain", level: 80 },
    { name: "AI Prompting", level: 92 },
  ],
  projects: [
    {
      title: "FleetPartners – Vehicle Leasing Platform",
      description:
        "Built modular Vue.js frontends and Node.js microservices. Designed GraphQL APIs and automated backend tasks with GCP Cloud Schedulers. Implemented centralized logging using GCP tools for reliability.",
      tech: ["Vue.js", "Node.js", "GraphQL", "GCP", "Microservices"],
    },
    {
      title: "Steera – Healthcare Platform",
      description:
        "Developed React + React Native applications for patient management and analytics. Implemented Firebase notifications, deep linking, and AppCenter CI/CD deployments.",
      tech: ["React", "React Native", "Firebase", "AppCenter", "CI/CD"],
    },
    {
      title: "Enterprise E-Commerce Platform",
      description:
        "Modernized custom e-commerce platform with Node.js and Vue.js. Integrated payment gateways, voucher systems, and improved system uptime by 70%.",
      tech: ["Node.js", "Vue.js", "REST APIs", "Payment Gateway"],
    },
    {
      title: "Mobile App with CI/CD",
      description:
        "Delivered React Native mobile applications with Microsoft AppCenter CI/CD pipelines, enabling faster release cycles and automated deployments.",
      tech: ["React Native", "AppCenter", "CI/CD", "Firebase"],
    },
    {
      title: "Scalable API Architecture",
      description:
        "Architected scalable backend APIs using Node.js, AWS Lambda, and GraphQL, improving data throughput by 30% for enterprise clients.",
      tech: ["Node.js", "AWS Lambda", "GraphQL", "Microservices"],
    },
    {
      title: "Fullstack Web Applications",
      description:
        "Delivered multiple fullstack web applications using React, Node.js, and Express with improved performance and SEO optimization.",
      tech: ["React", "Node.js", "Express.js", "SEO"],
    },
  ],
  contact: {
    description:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect and build something amazing together.",
    socialLinks: [
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/yourprofile",
      },
      { name: "GitHub", icon: "github", url: "https://github.com/yourprofile" },
      {
        name: "Email",
        icon: "mail",
        url: "mailto:niby@example.com",
      },
      {
        name: "Phone",
        icon: "phone",
        url: "tel:+9199999999999",
      },
    ],
  },
};
