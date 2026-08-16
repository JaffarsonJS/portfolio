export type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
};

export type Project = {
  id: string;
  name: string;
  type: "saas" | "api" | "dashboard";
  layer: string;
  tagline: string;
  problem: string;
  contribution: string;
  description: string;
  stack: string[];
  highlights: string[];
  architecture?: ArchitectureNode[];
};

export const projects: Project[] = [
  {
    id: "biomex-backend",
    name: "BiomeX",
    type: "api",
    layer: "Backend",
    tagline: "Multi-tenant building management platform",
    problem:
      "Corporate facilities needed one SaaS platform to run visitor, parking, resident, and operations workloads for multiple tenants without mixing data or weakening access control.",
    contribution:
      "Architected core Rails microservices, the shared API gateway, tenant isolation, realtime IoT pipelines, search, jobs, billing, and observability.",
    description:
      "Backend foundation for a multi-tenant smart building SaaS: isolated tenant data, centralized auth, live device events, and production-grade delivery.",
    stack: [
      "Ruby on Rails",
      "API Gateway",
      "JWT",
      "RBAC",
      "Apartment",
      "MQTT",
      "WebSockets",
      "Elasticsearch",
      "Searchkick",
      "Sidekiq",
      "Redis",
      "Stripe",
      "Sentry",
      "Graylog",
      "Docker",
      "AWS",
    ],
    highlights: [
      "Microservices covering Visitor Management, Parking, Resident Management, IAM, Alerts, Scheduler, Notifications, and Admin.",
      "Tenant isolation with the Apartment gem and RBAC across services through a shared API Gateway.",
      "Realtime alerting and IoT communication with MQTT and WebSockets.",
      "Searchable resident and asset records with Elasticsearch and Searchkick.",
      "Background jobs, Stripe payments, and observability, containerized with Docker and deployed on AWS.",
    ],
    architecture: [
      {
        id: "gateway",
        label: "API Gateway",
        detail: "Central JWT authentication and RBAC across 8+ backend services.",
      },
      {
        id: "rails",
        label: "Rails Services",
        detail:
          "Visitor, Parking, Resident, IAM, Alerts, Scheduler, Notifications, and Admin modules.",
      },
      {
        id: "mqtt",
        label: "MQTT / WebSockets",
        detail: "Live device and access-control events for facility operations.",
      },
      {
        id: "jobs",
        label: "Sidekiq / Redis",
        detail: "Notifications, report generation, and scheduled jobs off the request thread.",
      },
      {
        id: "search",
        label: "Elasticsearch",
        detail: "Faceted search across resident, visitor, and asset records via Searchkick.",
      },
      {
        id: "postgres",
        label: "PostgreSQL",
        detail: "Relational application data with Apartment-based tenant isolation.",
      },
      {
        id: "cloud",
        label: "Docker / AWS",
        detail: "Containerized services orchestrated with Docker Swarm and deployed on AWS.",
      },
    ],
  },
  {
    id: "biomex-frontend",
    name: "BiomeX",
    type: "saas",
    layer: "Frontend",
    tagline: "Role-based operations dashboards",
    problem:
      "Tenant, admin, and resident users needed distinct, reliable interfaces for the same platform — including live updates, forms, billing, and offline-tolerant workflows.",
    contribution:
      "Built the modular React application: role-based routing, operational screens, realtime updates, offline caching, and billing UI.",
    description:
      "A modular React client for facility operations, with separate dashboards, realtime updates, and secure session handling.",
    stack: [
      "React",
      "React Router",
      "Material UI",
      "Ant Design",
      "Formik",
      "Yup",
      "Socket.IO",
      "MQTT",
      "Dexie",
      "JWT",
      "Stripe",
      "Firebase",
      "AWS",
    ],
    highlights: [
      "Role-based routing for tenant, admin, and resident dashboards.",
      "Screens for Visitor Management, Parking, Bookings, Complaints, and E-Forms.",
      "Realtime updates with Socket.IO and MQTT, plus Dexie for offline-first caching.",
      "Secure session handling with JWT and Stripe billing UI for tenant modules.",
    ],
  },
  {
    id: "investilio-dashboards",
    name: "Investilio AI",
    type: "dashboard",
    layer: "Frontend",
    tagline: "Financial data visualization",
    problem:
      "An early-stage product needed fast, accurate dashboard views of portfolio and market metrics without stalling on dense chart data.",
    contribution:
      "Built interactive React dashboards, wired REST APIs into live visualizations, and tuned rendering performance across viewports.",
    description:
      "Interactive financial dashboards with charts, tables, and responsive layouts for live portfolio and market metrics.",
    stack: ["React", "REST APIs"],
    highlights: [
      "Dynamic charts and tables for portfolio and market metrics.",
      "REST API integration for accurate live financial rendering.",
      "Rendering performance work on chart-heavy, data-dense views.",
      "Responsive layouts for desktop and mobile dashboard use.",
    ],
  },
];

export const principles = [
  {
    id: "isolation",
    title: "Isolate what must stay isolated",
    body: "Multi-tenant SaaS only works if tenant data, roles, and access paths are explicit. I treat isolation and RBAC as product requirements, not afterthoughts.",
  },
  {
    id: "boundaries",
    title: "Keep services behind clear contracts",
    body: "A gateway, JWT sessions, and JSON APIs let frontend and backend teams move independently without weakening security.",
  },
  {
    id: "offload",
    title: "Keep the request path thin",
    body: "Notifications, reports, and scheduled work belong on Sidekiq and Redis. Search belongs on Elasticsearch. The API should stay responsive under load.",
  },
  {
    id: "signal",
    title: "Make production observable",
    body: "Graylog, Sentry, and disciplined CI/CD exist so incidents are found and released with less guesswork.",
  },
  {
    id: "ui",
    title: "Ship interfaces operators can trust",
    body: "Reusable components, protected routes, and realtime views only matter if they stay fast, consistent, and usable on the devices people actually have.",
  },
];

export const metrics = [
  {
    id: "experience",
    value: "2+",
    label: "Years building product software",
    detail: "From the professional summary on the resume.",
  },
  {
    id: "services",
    value: "8+",
    label: "Microservices on BiomeX",
    detail: "Visitor, parking, resident, IAM, alerts, scheduler, notifications, admin, and related services.",
  },
  {
    id: "tenants",
    value: "6+",
    label: "Client organizations on shared infrastructure",
    detail: "Tenant isolation implemented with the Apartment gem.",
  },
  {
    id: "focus",
    value: "SaaS",
    label: "Multi-tenant platforms, APIs, realtime systems",
    detail: "Qualitative focus rather than an invented count.",
  },
];
