export const profile = {
  name: "Jaffarson JS",
  firstName: "Jaffarson",
  lastName: "JS",
  title: "Software Engineer",
  subtitle: "Full Stack Developer",
  specialty: "Ruby on Rails & React.js",
  location: "Salem, Tamil Nadu, India",
  phone: "+91 6369755044",
  phoneHref: "tel:+916369755044",
  email: "jaffarsonjs@gmail.com",
  linkedin: "https://linkedin.com/in/jaffarson-j-s-b7788938b",
  linkedinHandle: "linkedin.com/in/jaffarson-j-s-b7788938b",
  resumePath: "/resume/Jaffarson_JS_Resume.pdf",
  yearsExperienceLabel: "2+",
  headline:
    "I build scalable multi-tenant SaaS platforms, secure APIs, and real-time digital systems.",
  summary:
    "Full Stack Software Engineer with 2+ years of experience designing, building, and scaling enterprise-grade multi-tenant SaaS platforms using Ruby on Rails and React.js.",
  about: [
    "I am a software engineer who designs and ships full-stack product systems — from tenant isolation and API gateways to the interfaces operators actually use.",
    "Most of my recent work sits inside BiomeX, a multi-tenant smart building platform: microservices in Ruby on Rails, React dashboards, JWT/RBAC security, MQTT and WebSocket event streams, and Docker Swarm releases on AWS.",
    "I care about the hard parts that make SaaS hold up — data isolation, search at volume, background jobs, observability, and interfaces that stay fast under real operational load.",
  ],
  interests: [
    "Multi-tenant SaaS architecture",
    "Secure API design",
    "Real-time IoT and event systems",
    "Search and background processing",
    "Performance and database tuning",
  ],
  education: [
    {
      title: "Bachelor of Engineering — Computer Science and Engineering",
      detail: null,
    },
    {
      title: "MERN Stack Development Certification",
      detail: "12-month program",
    },
  ],
} as const;

export const socialLinks = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.linkedin,
    external: true,
  },
  {
    id: "phone",
    label: "Call",
    href: profile.phoneHref,
    external: false,
  },
] as const;
