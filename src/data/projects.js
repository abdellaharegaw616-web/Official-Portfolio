/**
 * Selected Work / Four Main Projects for Abdellah Aregaw.
 * 100% authentic, transparent student projects with clear status indicators.
 * Strictly no exaggerated claims of commercial deployments or fake users.
 */

export const projectCategories = [
  "All Projects",
  "Full-Stack Web",
  "Web Application",
  "Campus Navigation",
]

export const projects = [
  {
    id: "shopnest",
    num: "01",
    title: "ShopNest Ethiopia",
    category: "Full-Stack Web · E-Commerce",
    categoryLabel: "FULL-STACK WEB · E-COMMERCE",
    badge: "PROTOTYPE / CONCEPT",
    status: "Prototype / Concept",
    isAmberTitle: false,
    description:
      "ShopNest Ethiopia is an e-commerce platform concept focused on making online product discovery and shopping more convenient. The project explores product catalogs, customer accounts, cart management, checkout workflows, order handling, and administration using a modern full-stack architecture.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    sourceUrl: "https://github.com/abdellaharegaw616-web/shopnest-ethiopia",
    githubUrl: "https://github.com/abdellaharegaw616-web/shopnest-ethiopia",
    liveUrl: null, // Only enabled when verified deployment exists
    hasLiveDemo: false,
    features: [
      "Product browsing and search across categorized inventory",
      "Categories, filtering, and price sorting",
      "User authentication and protected user profile routes",
      "Interactive shopping cart and checkout order simulation",
      "Order history and administrative product catalog management",
      "Client-side and server-side form validation with error handling",
      "Responsive layout optimized for mobile and desktop screens",
    ],
    engineeringFocus:
      "State management for shopping carts, MongoDB relational schemas, and input validation boundaries.",
  },
  {
    id: "ethiojobs",
    num: "02",
    title: "EthioJobs Finder",
    category: "Web Application · Job Discovery",
    categoryLabel: "WEB APPLICATION · JOB DISCOVERY",
    badge: "IN DEVELOPMENT",
    status: "In development",
    isAmberTitle: true,
    description:
      "EthioJobs Finder is a job-discovery platform concept intended to help job seekers find relevant opportunities more efficiently. Its goal is to organize job information and simplify the process of discovering opportunities, reviewing requirements, and accessing application details.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    sourceUrl: "https://github.com/abdellaharegaw616-web/ethiojobs-finder",
    githubUrl: "https://github.com/abdellaharegaw616-web/ethiojobs-finder",
    liveUrl: null,
    hasLiveDemo: false,
    features: [
      "Job listings directory with keyword search",
      "Location and job-category filters",
      "Employment-type filters (Full-time, Part-time, Internship)",
      "Comprehensive job requirement details and direct application links",
      "Employer job posting and listing management workflow",
      "Candidate account creation, saved vacancies, and application tracking",
      "Secure authentication and defensive input sanitization",
    ],
    engineeringFocus:
      "Query pipeline filtering, pagination for large datasets, and secure role-based job submission.",
  },
  {
    id: "taskflow",
    num: "03",
    title: "TaskFlow Project Management System",
    category: "Full-Stack Web · Project Management",
    categoryLabel: "FULL-STACK WEB · PROJECT MANAGEMENT",
    badge: "ACTIVE CODEBASE",
    status: "Active Codebase",
    isAmberTitle: false,
    description:
      "TaskFlow is a project-management system designed to centralize project organization, task tracking, team collaboration, and progress visibility in one application. It aims to reduce fragmented workflows and make project information easier to manage.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    sourceUrl: "https://github.com/abdellaharegaw616-web/2026-internship-project",
    githubUrl: "https://github.com/abdellaharegaw616-web/2026-internship-project",
    liveUrl: null,
    hasLiveDemo: false,
    features: [
      "JWT-based user authentication and role-based access control",
      "Project workspace creation and milestone management",
      "Task assignment, priority levels, and dynamic status tracking",
      "Team collaboration permissions and activity auditing",
      "Progress dashboard with visual completion indicators",
      "RESTful API validation, middleware error handling, and unit testable endpoints",
      "Clean responsive user interface engineered with Tailwind CSS",
    ],
    engineeringFocus:
      "Debugging, authorization boundaries, data integrity, API validation, testing, and deployment reliability.",
  },
  {
    id: "amu-navigation",
    num: "04",
    title: "AMU Navigation System",
    category: "Web · Campus Navigation",
    categoryLabel: "WEB · CAMPUS NAVIGATION",
    badge: "CONCEPT & PROTOTYPE",
    status: "Concept & Prototype",
    isAmberTitle: true,
    description:
      "AMU Navigation System is a campus-navigation project concept intended to help students and visitors locate campus buildings and important destinations more easily. The project focuses on improving campus orientation through clear location information and an accessible navigation interface.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    sourceUrl: "https://github.com/abdellaharegaw616-web/amu-navigation-system",
    githubUrl: "https://github.com/abdellaharegaw616-web/amu-navigation-system",
    liveUrl: null,
    hasLiveDemo: false,
    features: [
      "Campus location directory indexing faculties, libraries, and administrative offices",
      "Search and filter facilities by faculty and department",
      "Interactive SVG-based campus map layout with key destination highlights",
      "Location categories and building detail cards",
      "Accessible map controls, zoom, and high-contrast indicators",
      "Mobile-responsive navigation layout for on-campus smartphone access",
    ],
    engineeringFocus:
      "Accessible SVG map interactivity, search indexing, and mobile viewport optimization.",
  },
]

export default projects
