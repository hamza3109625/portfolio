/**
 * Central content for the portfolio.
 * Edit everything here — copy, projects, skills, links — and the whole site updates.
 */

export const site = {
  name: "Your Name",
  role: "Designer & Developer",
  location: "Based in New York",
  email: "hello@yourname.com",
  // Short intro shown in the hero.
  hero: {
    greeting: "Hello, I'm Your Name",
    headline: "I design and build thoughtful digital products.",
    subline:
      "An independent designer and developer focused on interfaces that feel effortless. I care about the details most people never notice.",
  },
  // Longer bio shown in the about section.
  about: [
    "I'm a multidisciplinary designer and developer with a decade of experience turning ideas into products people love to use. My work sits at the intersection of design and engineering.",
    "I believe the best products come from understanding both the pixels and the code — so I stay hands-on with both, from early sketches to shipped software.",
  ],
  // Small stat blocks in the about section.
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "40+", label: "Projects shipped" },
    { value: "15", label: "Happy clients" },
  ],
} as const

export type ProjectMeta = { label: string; value: string }

export type Project = {
  slug: string
  title: string
  description: string
  year: string
  image: string
  tags: string[]
  // Detail-page content below.
  tagline: string
  meta: ProjectMeta[]
  overview: string[]
  highlights: string[]
  gallery: string[]
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    slug: "northwind-analytics",
    title: "Northwind Analytics",
    description: "A data platform that turns complex metrics into clear, actionable dashboards.",
    year: "2025",
    image: "/project-1.png",
    tags: ["Product Design", "Next.js", "Data Viz"],
    tagline: "Turning complex metrics into decisions teams can act on.",
    meta: [
      { label: "Role", value: "Lead Designer & Developer" },
      { label: "Timeline", value: "2025 · 4 months" },
      { label: "Client", value: "Northwind Inc." },
    ],
    overview: [
      "Northwind's teams were drowning in spreadsheets and disconnected reports. We set out to build a single analytics platform that surfaces the right numbers at the right moment.",
      "I owned the product design end to end and built the front end in Next.js, collaborating closely with the data team to shape an API that made real-time dashboards feel instant.",
    ],
    highlights: [
      "Reduced time-to-insight from hours to seconds",
      "Design system powering 30+ chart types",
      "Adopted by every internal team within a quarter",
    ],
    gallery: ["/project-1.png", "/project-3.png"],
    link: { label: "Visit site", href: "https://example.com" },
  },
  {
    slug: "loop-finance",
    title: "Loop Finance",
    description: "A mobile-first banking experience designed for speed and everyday clarity.",
    year: "2024",
    image: "/project-2.png",
    tags: ["Mobile", "UX", "React Native"],
    tagline: "Everyday banking that gets out of your way.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "2024 · 6 months" },
      { label: "Client", value: "Loop" },
    ],
    overview: [
      "Loop wanted a banking app that felt as fast as a messaging app. We stripped away the clutter and rebuilt core flows around speed and clarity.",
      "I led UX and prototyping, testing each flow with real users and iterating until common tasks took a single tap.",
    ],
    highlights: [
      "Cut onboarding from 12 steps to 4",
      "4.8-star average across app stores",
      "Accessible, high-contrast interface by default",
    ],
    gallery: ["/project-2.png", "/project-4.png"],
    link: { label: "Visit site", href: "https://example.com" },
  },
  {
    slug: "atlas-design-system",
    title: "Atlas Design System",
    description: "A scalable design system and component library adopted across five teams.",
    year: "2024",
    image: "/project-3.png",
    tags: ["Design System", "Tokens", "Docs"],
    tagline: "One source of truth for design and engineering.",
    meta: [
      { label: "Role", value: "Design Systems Lead" },
      { label: "Timeline", value: "2024 · Ongoing" },
      { label: "Client", value: "Atlas" },
    ],
    overview: [
      "Five product teams were shipping five slightly different buttons. Atlas unified them behind a single, well-documented design system built on design tokens.",
      "I defined the token architecture, built the component library, and wrote the documentation that made adoption painless.",
    ],
    highlights: [
      "Themeable tokens across light and dark",
      "Component library adopted by five teams",
      "Living documentation with usage examples",
    ],
    gallery: ["/project-3.png", "/project-1.png"],
    link: { label: "View docs", href: "https://example.com" },
  },
  {
    slug: "meridian-store",
    title: "Meridian Store",
    description: "A headless commerce storefront with a focus on conversion and craft.",
    year: "2023",
    image: "/project-4.png",
    tags: ["E-commerce", "Shopify", "Frontend"],
    tagline: "A storefront where craft and conversion meet.",
    meta: [
      { label: "Role", value: "Frontend Developer" },
      { label: "Timeline", value: "2023 · 3 months" },
      { label: "Client", value: "Meridian" },
    ],
    overview: [
      "Meridian needed a storefront that matched the quality of their products. We built a headless commerce experience with fast pages and considered detail throughout.",
      "I built the front end against a headless Shopify backend, focusing on performance and a checkout flow tuned for conversion.",
    ],
    highlights: [
      "Sub-second page loads on every route",
      "18% lift in checkout conversion",
      "Fully responsive, craft-focused UI",
    ],
    gallery: ["/project-4.png", "/project-2.png"],
    link: { label: "Visit store", href: "https://example.com" },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Design",
    items: ["Product Design", "Design Systems", "Prototyping", "Figma", "User Research"],
  },
  {
    title: "Engineering",
    items: ["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Workflow",
    items: ["Accessibility", "Performance", "Git", "Design Ops", "Testing"],
  },
]

export type Service = {
  title: string
  description: string
  deliverables: string[]
}

export const services: Service[] = [
  {
    title: "Product Design",
    description:
      "End-to-end design from research and flows to polished, production-ready interfaces.",
    deliverables: ["User research", "Wireframes & flows", "High-fidelity UI", "Prototyping"],
  },
  {
    title: "Design Systems",
    description:
      "Scalable component libraries and tokens that keep design and engineering in sync.",
    deliverables: ["Token architecture", "Component library", "Documentation", "Governance"],
  },
  {
    title: "Frontend Development",
    description:
      "Accessible, high-performance front ends built with React, Next.js, and TypeScript.",
    deliverables: ["Next.js apps", "Design-to-code", "Performance", "Accessibility"],
  },
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    role: "Independent Designer & Developer",
    company: "Freelance",
    period: "2021 — Present",
    description:
      "Partnering with startups and studios to design and build digital products from the ground up.",
  },
  {
    role: "Senior Product Designer",
    company: "Northwind Inc.",
    period: "2018 — 2021",
    description:
      "Led design for the analytics platform and established the team's first design system.",
  },
  {
    role: "Product Designer",
    company: "Loop",
    period: "2015 — 2018",
    description:
      "Shaped the mobile banking experience and ran the research practice across two teams.",
  },
  {
    role: "UI Engineer",
    company: "Meridian",
    period: "2013 — 2015",
    description:
      "Built and maintained storefront front ends with a focus on craft and conversion.",
  },
]

export type Testimonial = {
  quote: string
  name: string
  title: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "One of the rare people who can move seamlessly between design and engineering. The work shipped faster and looked better because of it.",
    name: "Alex Rivera",
    title: "VP Product, Northwind",
  },
  {
    quote:
      "Thoughtful, meticulous, and genuinely easy to work with. Our product finally feels like a single, coherent experience.",
    name: "Priya Shah",
    title: "Founder, Loop",
  },
  {
    quote:
      "Delivered a design system that our whole org actually uses. It changed how our teams build.",
    name: "Marcus Lee",
    title: "Head of Engineering, Atlas",
  },
]

export const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://x.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
]

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
]
