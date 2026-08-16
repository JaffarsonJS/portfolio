export type ExperienceRole = {
  id: string;
  company: string;
  role: string;
  period: string;
  start: string;
  end: string;
  current?: boolean;
  partTime?: boolean;
  location?: string;
  project?: string;
  summary: string;
  technologies: string[];
  highlights: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "greenbotz",
    company: "Greenbotz Platform Pvt Ltd",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    start: "Nov 2024",
    end: "Present",
    current: true,
    project: "BiomeX — Multi-Tenant Smart Building Management SaaS Platform",
    summary:
      "Full-stack engineering on an enterprise multi-tenant SaaS platform spanning Rails microservices, React clients, IoT event pipelines, and production delivery.",
    technologies: [
      "Ruby on Rails",
      "React",
      "JWT",
      "RBAC",
      "MQTT",
      "WebSockets",
      "Elasticsearch",
      "Sidekiq",
      "Redis",
      "Docker Swarm",
      "GitLab CI/CD",
      "AWS S3",
      "Graylog",
      "Stripe",
    ],
    highlights: [
      "Engineered and maintained 8+ microservices for building, visitor, parking, and resident management across multiple corporate clients.",
      "Designed a centralized API Gateway with JWT authentication and RBAC, securing access across 8+ backend services.",
      "Implemented tenant data isolation with the Apartment gem across 6+ client organizations on shared infrastructure.",
      "Built real-time IoT pipelines with MQTT (Mosquitto) and WebSockets for live device and access-control events.",
      "Integrated Elasticsearch and Searchkick for faceted search across resident, visitor, and asset records.",
      "Offloaded notifications, reports, and scheduled jobs to Sidekiq with Redis to improve API response times.",
      "Containerized services with Docker, orchestrated them with Docker Swarm, and automated staging/production releases with GitLab CI/CD.",
      "Implemented AWS S3 media workflows, Graylog monitoring, and Stripe subscription billing for tenant-facing modules.",
      "Collaborated with QA and DevOps across the lifecycle, with occasional contributions to auxiliary Node.js and Go services.",
    ],
  },
  {
    id: "investilio",
    company: "Investilio AI",
    role: "Front End Developer",
    period: "Dec 2025 – Feb 2026",
    start: "Dec 2025",
    end: "Feb 2026",
    partTime: true,
    summary:
      "Part-time frontend work on interactive financial dashboards in an early-stage startup environment.",
    technologies: ["React", "REST APIs", "Cursor", "Claude", "ChatGPT"],
    highlights: [
      "Built interactive React dashboards for financial data, including dynamic charts and tables for portfolio and market metrics.",
      "Integrated REST APIs to power real-time visualization of live financial data.",
      "Optimized rendering performance of chart-heavy dashboard views on data-dense screens.",
      "Implemented responsive layouts for a consistent desktop and mobile dashboard experience.",
      "Fixed UI bugs in visualization components with the founding engineering team.",
      "Used AI-assisted development tools (Cursor, Claude, ChatGPT) to speed up prototyping and debugging.",
    ],
  },
  {
    id: "neosme",
    company: "NeoSME",
    role: "Front End Developer",
    period: "Apr 2024 – Nov 2024",
    start: "Apr 2024",
    end: "Nov 2024",
    summary:
      "Frontend engineering focused on reusable React systems, API-backed UI, and cross-browser product quality.",
    technologies: ["React", "REST APIs", "Git"],
    highlights: [
      "Developed responsive, reusable React components consumed across multiple product modules.",
      "Integrated frontend applications with REST APIs for authentication, data fetching, and state-driven UI updates.",
      "Implemented client-side authentication flows and protected routing.",
      "Resolved cross-browser rendering issues across Chrome, Firefox, and Edge.",
      "Refactored component state management to reduce unnecessary re-renders on data-heavy screens.",
      "Built and maintained a shared component library, reducing duplicate UI code across feature teams.",
      "Partnered with backend engineers and designers in Agile sprints, including code reviews and sprint planning.",
    ],
  },
];
