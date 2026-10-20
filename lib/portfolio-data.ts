
/**
 * Central content for Hamza Nizardeen's portfolio.
 * Keep personal details, projects, skills, and experience here.
 * Only include verified achievements, projects, and links.
 */

export const site = {
  name: "Hamza Nizardeen",
  role: "Frontend Developer & Software Engineer",
  location: "Based in Qatar",
  email: "hamzanizar3109@gmail.com",

  hero: {
    greeting: "Hello, I'm Hamza Nizardeen",
    headline: "Building modern web experiences with clean, thoughtful code.",
    subline:
      "I'm a frontend-focused software engineer who enjoys turning ideas into responsive, user-friendly digital products. I work primarily with React, Next.js, TypeScript, and Tailwind CSS, with experience in e-commerce, API integration, and full-stack development.",
  },

  about: [
    "I'm a software engineering graduate with hands-on experience developing and maintaining web applications. My work has included e-commerce storefronts, vendor portals, internal management systems, and projects that connect frontend interfaces with backend APIs.",
    "I enjoy building responsive interfaces, improving existing products, and solving practical problems through code. My experience spans React, Next.js, Nuxt.js, Tailwind CSS, WordPress, WooCommerce, and backend technologies including FastAPI and .NET Core.",
    "Alongside software development, I've gained experience in e-commerce operations, technical support, and IT environments. These experiences have helped me understand the importance of reliable systems, clear communication, and creating digital experiences that work for real users.",
  ],

  // Only include statistics that can be verified.
  stats: [
    { value: "3+", label: "Years in web development" },
    { value: "BEng", label: "Software Engineering" },
    { value: "React", label: "Frontend development" },
  ],
} as const

export type ProjectMeta = {
  label: string
  value: string
}

export type Project = {
  slug: string
  title: string
  description: string
  year: string
  image: string
  tags: string[]
  tagline: string
  meta: ProjectMeta[]
  overview: string[]
  highlights: string[]
  gallery: string[]
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    slug: "primepick-file-transfer",
    title: "PrimePick — File Transfer System",
    description:
      "A secure file transfer system with a web interface for uploading, managing, and sharing files.",
    year: "Not specified",
    image: "/project-1.png",
    tags: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    tagline:
      "A responsive web interface for secure file management and sharing.",
    meta: [
      { label: "Type", value: "Software Project" },
      { label: "Focus", value: "File Transfer & Management" },
      { label: "Technologies", value: "Next.js, React, Tailwind CSS" },
    ],
    overview: [
      "PrimePick is a file transfer system built with Next.js, with a modern interface for uploading, managing, and securely sharing files.",
      "The project includes responsive frontend components and REST API integration to support file storage and sharing workflows.",
      "The interface and workflows were developed with a focus on usability, responsiveness, and reliability.",
    ],
    highlights: [
      "Built responsive frontend components with Next.js, React, and Tailwind CSS.",
      "Implemented file management and sharing workflows.",
      "Integrated RESTful APIs and authentication.",
    ],
    gallery: ["/project-1.png", "/project-2.png"],
  },
  {
    slug: "auren-marketplace",
    title: "Auren — Multi-Vendor Apparel Marketplace",
    description:
      "A multi-vendor apparel marketplace in development, intended to help small apparel businesses in Qatar sell online.",
    year: "In development",
    image: "/project-2.png",
    tags: ["WordPress", "WooCommerce", "E-commerce", "SEO"],
    tagline:
      "Building a shared online marketplace for apparel vendors.",
    meta: [
      { label: "Status", value: "Currently in Development" },
      { label: "Focus", value: "Multi-Vendor E-commerce" },
      { label: "Technologies", value: "WordPress, WooCommerce" },
    ],
    overview: [
      "Auren is being developed as a multi-vendor e-commerce marketplace to help small apparel businesses in Qatar sell their products online without upfront platform costs.",
      "The platform is intended to let vendors manage their products while customers browse and purchase from multiple businesses through one marketplace.",
      "Development work includes vendor management, product catalogs, payment gateways, order processing, commissions, SEO, and responsive design.",
    ],
    highlights: [
      "Building a multi-vendor marketplace with WordPress and WooCommerce.",
      "Configuring vendor and product management workflows.",
      "Working on payment, order processing, and commission-based transactions.",
      "Considering SEO, performance, and mobile responsiveness.",
    ],
    gallery: ["/project-2.png", "/project-3.png"],
  },
  {
    slug: "harriet-ecommerce",
    title: "Harriet Shopping",
    description:
      "An e-commerce platform with a customer storefront, shopping cart, checkout integrations, and a vendor management portal.",
    year: "2024–2025",
    image: "/project-1.png",
    tags: ["Next.js", "React", "Tailwind CSS", "WooCommerce"],
    tagline:
      "Building and maintaining an e-commerce experience across storefront and vendor tools.",
    meta: [
      { label: "Role", value: "Software Developer" },
      { label: "Focus", value: "Frontend & E-commerce" },
      { label: "Technologies", value: "Next.js, Nuxt.js, WooCommerce" },
    ],
    overview: [
      "At Harriet Shopping, I worked on the development and maintenance of an e-commerce storefront built with Next.js and Tailwind CSS, helping keep the shopping experience functional, responsive, and user-friendly.",
      "I collaborated with design and marketing teams on user experience and SEO improvements, worked on Meta Pixel and Conversions API integrations, and contributed to payment integrations.",
      "I also worked with a Nuxt.js-based vendor portal, including a real-time analytics dashboard for sellers.",
    ],
    highlights: [
      "Maintained and improved Next.js storefront pages.",
      "Worked on e-commerce tracking and conversion integrations.",
      "Contributed to payment integrations and checkout functionality.",
      "Developed and maintained features in a Nuxt.js vendor portal.",
    ],
    gallery: ["/project-1.png", "/project-2.png"],
  },
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    description:
      "An internal management application developed with a React frontend and .NET Core backend APIs.",
    year: "2022–2023",
    image: "/project-2.png",
    tags: ["React", ".NET Core", "REST APIs", "Figma"],
    tagline:
      "Connecting a practical management interface with backend application services.",
    meta: [
      { label: "Role", value: "Software Engineer Intern" },
      { label: "Company", value: "Cubo Systems International" },
      { label: "Focus", value: "Frontend & API Integration" },
    ],
    overview: [
      "During my internship at Cubo Systems International, I contributed to an Employee Management System using React on the frontend and .NET Core for backend APIs.",
      "My responsibilities included contributing to the frontend implementation, understanding client requirements, and preparing interface prototypes in Figma.",
      "This experience gave me practical exposure to working with application requirements, frontend development, and communication between frontend interfaces and backend services.",
    ],
    highlights: [
      "Worked with React and .NET Core in the same application.",
      "Contributed to frontend development and API integration.",
      "Participated in client requirement discussions.",
      "Prepared interface prototypes using Figma.",
    ],
    gallery: ["/project-2.png", "/project-3.png"],
  },
  {
    slug: "emolingual",
    title: "Emolingual",
    description:
      "An academic machine learning project exploring sentiment analysis of romanized Tamil-English text with emojis.",
    year: "2024",
    image: "/project-3.png",
    tags: ["Python", "Deep Learning", "NLP", "BiLSTM", "CNN"],
    tagline:
      "Exploring sentiment in code-mixed language and emoji-rich text.",
    meta: [
      { label: "Type", value: "Academic Research Project" },
      { label: "Focus", value: "Natural Language Processing" },
      { label: "Model", value: "BiLSTM + CNN" },
    ],
    overview: [
      "Emolingual explored sentiment analysis for Tamil-English code-mixed text written using the Latin alphabet, including messages containing emojis.",
      "The project focused on a language style commonly found in informal digital communication, where romanized Tamil and English appear together rather than using Tamil Unicode characters.",
      "I worked with a deep learning model combining Bidirectional LSTM and CNN layers and evaluated its performance using five-fold cross-validation.",
    ],
    highlights: [
      "Focused on romanized Tamil-English code-mixed text.",
      "Included emoji-containing text in the analysis.",
      "Combined BiLSTM and CNN architectures.",
      "Evaluated using five-fold cross-validation.",
    ],
    gallery: ["/project-3.png", "/project-4.png"],
  },
  {
    slug: "chord-ar",
    title: "Chord AR",
    description:
      "An augmented reality apparel try-on application developed using Unity and ARCore.",
    year: "2024",
    image: "/project-4.png",
    tags: ["Unity", "ARCore", "Augmented Reality", "C#"],
    tagline:
      "Exploring augmented reality for interactive apparel experiences.",
    meta: [
      { label: "Type", value: "Academic Project" },
      { label: "Focus", value: "Augmented Reality" },
      { label: "Technologies", value: "Unity, ARCore" },
    ],
    overview: [
      "Chord AR explored the use of augmented reality to create an interactive apparel try-on experience.",
      "The application was developed using Unity and ARCore, providing practical exposure to building an application that combines software development with augmented reality technology.",
    ],
    highlights: [
      "Explored augmented reality for apparel try-on.",
      "Developed using Unity and ARCore.",
      "Combined interactive application development with AR technology.",
    ],
    gallery: ["/project-4.png", "/project-1.png"],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Nuxt.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Integrations",
    items: [
      "FastAPI",
      ".NET Core",
      "REST APIs",
      "API Integration",
      "Python",
      "SQL",
    ],
  },
  {
    title: "E-commerce & CMS",
    items: [
      "WordPress",
      "WooCommerce",
      "E-commerce Development",
      "Payment Integrations",
      "SEO",
      "Meta Pixel",
      "Conversions API",
    ],
  },
  {
    title: "Tools & Other Experience",
    items: [
      "Git",
      "Figma",
      "Unity",
      "ARCore",
      "Microsoft OneDrive",
      "Adobe Applications",
      "IT Troubleshooting",
    ],
  },
]

export type Service = {
  title: string
  description: string
  deliverables: string[]
}

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive, user-friendly web interfaces built with React, Next.js, TypeScript, and Tailwind CSS.",
    deliverables: [
      "Responsive web pages",
      "Reusable UI components",
      "Next.js applications",
      "Frontend maintenance",
      "API integration",
    ],
  },
  {
    title: "E-commerce Development",
    description:
      "Development and maintenance of e-commerce experiences, with practical experience in WooCommerce, WordPress, storefronts, and vendor portals.",
    deliverables: [
      "E-commerce storefronts",
      "WooCommerce integration",
      "Checkout and payment integrations",
      "Vendor portal features",
      "SEO and tracking integrations",
    ],
  },
  {
    title: "Web Application Integration",
    description:
      "Connecting frontend applications with backend services to support useful, data-driven web experiences.",
    deliverables: [
      "REST API integration",
      "Frontend-backend communication",
      "Data-driven interfaces",
      "Application feature development",
      "Existing application improvements",
    ],
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
    role: "E-commerce Specialist",
    company: "The Grocer",
    period: "May 2026 — Present",
    description:
      "Manage and optimize the e-commerce platform, apply SEO best practices, maintain product listings and promotions, support the company's social media presence, and review website analytics to identify opportunities for better customer engagement and online performance.",
  },
  {
    role: "IT Support — Contract Project",
    company: "Qatar Free Zones Authority, BIP Building",
    period: "Contract Project",
    description:
      "Helped set up and prepare laptops, monitors, keyboards, mice, and other equipment for existing users. Provided first-line support for hardware and software issues, including Microsoft OneDrive synchronization and file access, Adobe applications, and other common user problems; escalated issues when required.",
  },
  {
    role: "ELV Engineer",
    company: "Al Mana Security Services",
    period: "Dec 2025 — Mar 2026",
    description:
      "Worked in an extra-low-voltage engineering role, broadening my experience in technical and IT-related environments.",
  },
  {
    role: "Software Developer",
    company: "Harriet Shopping",
    period: "Jun 2024 — Apr 2025",
    description:
      "Maintained Next.js and Tailwind CSS e-commerce pages, collaborated with design and marketing on user experience and SEO, worked on Meta Pixel and Conversions API integrations, contributed to payment integrations, and developed features for a Nuxt.js vendor portal.",
  },
  {
    role: "Software Engineer Intern",
    company: "Cubo Systems International",
    period: "Aug 2022 — Aug 2023",
    description:
      "Contributed to an Employee Management System using React and .NET Core APIs, participated in client requirement discussions, and prepared UI prototypes in Figma.",
  },
]

export type Testimonial = {
  quote: string
  name: string
  title: string
}

// Add testimonials only when you have genuine, approved quotes
// from real colleagues, managers, or clients.
export const testimonials: Testimonial[] = []

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamza-nizardeen-65a522246/",
  },
  // Add your actual GitHub and other professional profile URLs
  // once you have confirmed the links.
]

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
]
