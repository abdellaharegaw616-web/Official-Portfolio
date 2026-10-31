/**
 * Technical Toolkit for Abdellah Aregaw.
 * 4 primary skill groups + distinct currently learning group.
 * No inflated skill claims or fake percentages.
 */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, accessible, and intuitive user interfaces.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "React.js", level: "Core" },
      { name: "HTML5 & Semantic Markup", level: "Core" },
      { name: "CSS3 & Modern Layouts", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Developing robust APIs and server-side business logic.",
    skills: [
      { name: "Node.js", level: "Core" },
      { name: "Express.js", level: "Core" },
      { name: "REST API Development", level: "Core" },
      { name: "Auth & Access Control", level: "Core" },
      { name: "Server-Side Validation", level: "Core" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Data modeling, schema design, and persistence.",
    skills: [
      { name: "MongoDB", level: "Core" },
      { name: "Mongoose ODM", level: "Core" },
      { name: "Schema Design", level: "Core" },
      { name: "CRUD Operations", level: "Core" },
      { name: "Data Validation & Integrity", level: "Core" },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Tools",
    description: "Development environment, version control, and testing habits.",
    skills: [
      { name: "Git & GitHub", level: "Core" },
      { name: "VS Code", level: "Core" },
      { name: "Debugging & Error Analysis", level: "Core" },
      { name: "API Testing (Postman)", level: "Core" },
      { name: "Automated Testing Basics", level: "Core" },
    ],
  },
]

export const currentlyLearning = [
  "Mobile app development concepts",
  "TypeScript basics & static typing",
  "Docker fundamentals & containerization",
  "Application security best practices",
]

export default skillCategories
