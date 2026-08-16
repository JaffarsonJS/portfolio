export type SkillCategoryId =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "auth"
  | "realtime"
  | "tools"
  | "architecture"
  | "also";

export type Technology = {
  id: string;
  name: string;
  category: SkillCategoryId;
  simpleIcon?: string;
  experience: string;
};

export const skillCategories: { id: SkillCategoryId; label: string }[] = [
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "databases", label: "Databases & Search" },
  { id: "devops", label: "Cloud & Infrastructure" },
  { id: "auth", label: "Authentication & Security" },
  { id: "realtime", label: "Realtime & Messaging" },
  { id: "tools", label: "DevOps & Tools" },
  { id: "architecture", label: "Architecture & Practices" },
  { id: "also", label: "Also used" },
];

export const technologies: Technology[] = [
  {
    id: "ruby",
    name: "Ruby",
    category: "languages",
    simpleIcon: "siRuby",
    experience:
      "Primary backend language for Rails microservices on BiomeX, including tenant isolation, APIs, and background jobs.",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "languages",
    simpleIcon: "siJavascript",
    experience:
      "Used across React applications, dashboards, and client-side authentication flows at Greenbotz, NeoSME, and Investilio AI.",
  },
  {
    id: "sql",
    name: "SQL",
    category: "languages",
    experience:
      "Applied in PostgreSQL and MySQL work, including query and database tuning for multi-tenant SaaS workloads.",
  },
  {
    id: "html",
    name: "HTML5",
    category: "languages",
    simpleIcon: "siHtml5",
    experience: "Semantic markup for product UIs, dashboards, and reusable component libraries.",
  },
  {
    id: "css",
    name: "CSS3",
    category: "languages",
    simpleIcon: "siCss",
    experience: "Responsive layouts, cross-browser UI work, and component styling across product modules.",
  },
  {
    id: "rails",
    name: "Ruby on Rails",
    category: "backend",
    simpleIcon: "siRubyonrails",
    experience:
      "Core framework for BiomeX microservices covering visitor, parking, resident, IAM, alerts, scheduler, notifications, and admin modules.",
  },
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    simpleIcon: "siReact",
    experience:
      "Built modular tenant, admin, and resident dashboards, reusable component libraries, and financial visualization views.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    simpleIcon: "siNextdotjs",
    experience: "Part of the frontend toolkit used for modern React application work.",
  },
  {
    id: "redux",
    name: "Redux",
    category: "frontend",
    simpleIcon: "siRedux",
    experience: "State management for React product modules and data-driven screens.",
  },
  {
    id: "react-router",
    name: "React Router",
    category: "frontend",
    simpleIcon: "siReactrouter",
    experience: "Role-based routing for distinct tenant, admin, and resident dashboards in BiomeX.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    simpleIcon: "siTailwindcss",
    experience: "Utility-first styling for product interfaces and responsive layouts.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "frontend",
    simpleIcon: "siBootstrap",
    experience: "Used for rapid, consistent UI structure in frontend modules.",
  },
  {
    id: "haml",
    name: "HAML",
    category: "frontend",
    experience: "Server-rendered templating used in Rails-adjacent UI work.",
  },
  {
    id: "mui",
    name: "Material UI",
    category: "frontend",
    simpleIcon: "siMui",
    experience:
      "UI system for BiomeX screens including visitor management, parking, bookings, complaints, and e-forms.",
  },
  {
    id: "antd",
    name: "Ant Design",
    category: "frontend",
    simpleIcon: "siAntdesign",
    experience: "Used alongside Material UI for BiomeX operational interfaces and form-heavy views.",
  },
  {
    id: "formik",
    name: "Formik",
    category: "frontend",
    simpleIcon: "siFormik",
    experience: "Form state and submission flows for BiomeX operational screens.",
  },
  {
    id: "yup",
    name: "Yup",
    category: "frontend",
    experience: "Schema validation paired with Formik for reliable form handling.",
  },
  {
    id: "styled",
    name: "Styled Components",
    category: "frontend",
    simpleIcon: "siStyledcomponents",
    experience: "Component-scoped styling for React interfaces.",
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    simpleIcon: "siExpress",
    experience: "Node.js HTTP framework in the backend toolkit, including auxiliary service work.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "databases",
    simpleIcon: "siPostgresql",
    experience:
      "Relational store for multi-tenant application data, with attention to isolation and query performance.",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "databases",
    simpleIcon: "siMysql",
    experience: "Relational database experience alongside PostgreSQL in full-stack delivery.",
  },
  {
    id: "redis",
    name: "Redis",
    category: "databases",
    simpleIcon: "siRedis",
    experience:
      "Backs Sidekiq job processing for notifications, reports, and scheduled work, keeping API threads lighter during peak traffic.",
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "databases",
    simpleIcon: "siSupabase",
    experience: "Used as part of the data platform toolkit.",
  },
  {
    id: "elasticsearch",
    name: "Elasticsearch",
    category: "databases",
    simpleIcon: "siElasticsearch",
    experience:
      "Faceted search across resident, visitor, and asset records in BiomeX, reducing search latency on high-volume tenant datasets.",
  },
  {
    id: "searchkick",
    name: "Searchkick",
    category: "databases",
    experience: "Rails search layer over Elasticsearch for resident and asset records.",
  },
  {
    id: "rest",
    name: "REST APIs",
    category: "backend",
    experience:
      "Designed and consumed REST/JSON APIs for authentication, product data, and dashboard visualization across roles.",
  },
  {
    id: "json-api",
    name: "JSON APIs",
    category: "backend",
    experience: "JSON API contracts between Rails services, the API gateway, and React clients.",
  },
  {
    id: "sidekiq",
    name: "Sidekiq",
    category: "backend",
    simpleIcon: "siSidekiq",
    experience:
      "Background processing for notifications, report generation, and scheduled jobs, improving API response times.",
  },
  {
    id: "api-gateway",
    name: "API Gateway",
    category: "backend",
    experience:
      "Centralized gateway with JWT authentication and RBAC securing access across 8+ backend services.",
  },
  {
    id: "jwt",
    name: "JWT",
    category: "auth",
    simpleIcon: "siJsonwebtokens",
    experience: "Token-based auth for the API gateway, protected React routes, and secure session handling.",
  },
  {
    id: "oauth",
    name: "OAuth",
    category: "auth",
    experience: "OAuth-based authentication as part of the security toolkit.",
  },
  {
    id: "sso",
    name: "SSO",
    category: "auth",
    experience: "Single sign-on support in the authentication and access-control stack.",
  },
  {
    id: "rbac",
    name: "RBAC",
    category: "auth",
    experience:
      "Role-based access control across BiomeX services and role-driven frontend routing for tenant, admin, and resident users.",
  },
  {
    id: "aws",
    name: "AWS (S3)",
    category: "devops",
    experience: "Secure file handling, media workflows, and asset delivery for BiomeX, with Dockerized services deployed on AWS.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    simpleIcon: "siDocker",
    experience: "Containerized BiomeX services for consistent staging and production releases.",
  },
  {
    id: "swarm",
    name: "Docker Swarm",
    category: "devops",
    simpleIcon: "siDocker",
    experience: "Orchestrated container deployments for staging and production environments.",
  },
  {
    id: "linux",
    name: "Linux",
    category: "devops",
    simpleIcon: "siLinux",
    experience: "Server and container environments for Rails services and CI/CD delivery.",
  },
  {
    id: "mqtt",
    name: "MQTT / Mosquitto",
    category: "realtime",
    simpleIcon: "siMqtt",
    experience:
      "Real-time IoT pipelines for live device and access-control events, improving operational visibility.",
  },
  {
    id: "websockets",
    name: "WebSockets",
    category: "realtime",
    experience: "Live event streaming for facility operations and BiomeX alerting workflows.",
  },
  {
    id: "socketio",
    name: "Socket.IO",
    category: "realtime",
    simpleIcon: "siSocketdotio",
    experience: "Real-time frontend updates in the BiomeX React application.",
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "backend",
    simpleIcon: "siStripe",
    experience: "Subscription billing and payment workflows for tenant-facing modules, including billing UI.",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "devops",
    simpleIcon: "siFirebase",
    experience: "Integrated Firebase services into the BiomeX frontend alongside AWS asset delivery.",
  },
  {
    id: "graylog",
    name: "Graylog",
    category: "devops",
    simpleIcon: "siGraylog",
    experience: "Centralized logging and error monitoring to shorten detection and resolution time.",
  },
  {
    id: "apns",
    name: "APNs",
    category: "realtime",
    simpleIcon: "siApple",
    experience: "Apple Push Notifications as part of the notification infrastructure.",
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    simpleIcon: "siGit",
    experience: "Version control across Agile sprints, code review, and multi-service delivery.",
  },
  {
    id: "gitlab",
    name: "GitLab",
    category: "tools",
    simpleIcon: "siGitlab",
    experience: "Source control and CI/CD home for BiomeX staging and production pipelines.",
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI/CD",
    category: "tools",
    simpleIcon: "siGitlab",
    experience: "Automated staging and production releases, reducing manual deployment effort and errors.",
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "tools",
    experience: "Used as part of the delivery and collaboration toolchain.",
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    simpleIcon: "siPostman",
    experience: "API exploration, verification, and contract checks during backend and frontend integration.",
  },
  {
    id: "rubocop",
    name: "RuboCop",
    category: "tools",
    simpleIcon: "siRubocop",
    experience: "Ruby linting and style enforcement in Rails services.",
  },
  {
    id: "jira",
    name: "Jira",
    category: "tools",
    simpleIcon: "siJira",
    experience: "Sprint planning and delivery tracking in Agile teams.",
  },
  {
    id: "slack",
    name: "Slack",
    category: "tools",
    simpleIcon: "siSlack",
    experience: "Day-to-day collaboration with QA, DevOps, design, and product partners.",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    experience: "Primary editor, including AI-assisted workflows with Cursor, Claude, ChatGPT, and Gemini.",
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "tools",
    simpleIcon: "siCursor",
    experience: "AI-assisted development for delivery, code quality, documentation, and debugging.",
  },
  {
    id: "claude",
    name: "Claude",
    category: "tools",
    simpleIcon: "siClaude",
    experience: "Used alongside Cursor and ChatGPT to accelerate prototyping, debugging, and documentation.",
  },
  {
    id: "sentry",
    name: "Sentry",
    category: "devops",
    simpleIcon: "siSentry",
    experience: "Error monitoring for BiomeX backend observability alongside Graylog.",
  },
  {
    id: "dexie",
    name: "Dexie",
    category: "frontend",
    experience: "Offline-first data caching in the BiomeX React application.",
  },
  {
    id: "apartment",
    name: "Apartment gem",
    category: "architecture",
    experience:
      "Tenant data isolation across 6+ client organizations on shared infrastructure.",
  },
  {
    id: "mvc",
    name: "MVC",
    category: "architecture",
    experience: "Application structure used throughout Rails service design.",
  },
  {
    id: "oop",
    name: "OOP",
    category: "architecture",
    experience: "Object-oriented design across Ruby and JavaScript services.",
  },
  {
    id: "microservices",
    name: "Microservices",
    category: "architecture",
    experience:
      "Engineered and maintained 8+ microservices inside the BiomeX multi-tenant platform.",
  },
  {
    id: "multitenancy",
    name: "Multi-Tenancy",
    category: "architecture",
    experience: "Shared-infrastructure tenancy with data isolation for multiple corporate clients.",
  },
  {
    id: "perf",
    name: "Performance & DB Optimization",
    category: "architecture",
    experience:
      "API response improvements via Sidekiq offload, search tuning, and frontend render performance work.",
  },
  {
    id: "agile",
    name: "Agile / Scrum",
    category: "architecture",
    experience: "Sprint planning, stand-ups, and code review with QA, DevOps, and design partners.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "also",
    simpleIcon: "siNodedotjs",
    experience: "Occasional contributions to auxiliary services alongside the core Rails stack.",
  },
  {
    id: "go",
    name: "Go",
    category: "also",
    simpleIcon: "siGo",
    experience: "Occasional contributions to auxiliary services at Greenbotz.",
  },
];

export const featuredTechIds = [
  "rails",
  "react",
  "postgres",
  "redis",
  "elasticsearch",
  "docker",
  "aws",
  "mqtt",
  "jwt",
  "sidekiq",
  "stripe",
  "gitlab-ci",
] as const;

export const universeLayers = [
  {
    id: "cloud",
    label: "Cloud",
    techIds: ["aws", "linux"],
  },
  {
    id: "devops",
    label: "DevOps",
    techIds: ["docker", "swarm", "gitlab-ci"],
  },
  {
    id: "backend",
    label: "Backend",
    techIds: ["rails", "api-gateway", "sidekiq", "stripe"],
  },
  {
    id: "data",
    label: "Data",
    techIds: ["postgres", "redis", "elasticsearch"],
  },
  {
    id: "realtime",
    label: "Realtime",
    techIds: ["mqtt", "websockets"],
  },
  {
    id: "frontend",
    label: "Frontend",
    techIds: ["react", "redux", "mui"],
  },
] as const;
