/**
 * Background and Learning for Abdellah Aregaw.
 * Completely honest student records: Arba Minch University education & Independent technical development.
 * No fake commercial jobs, invented dates, or fake employers.
 */

export const experiences = [
  {
    id: "amu-education",
    period: "Expected 2027",
    location: "Arba Minch, Ethiopia",
    role: "Bachelor of Science in Software Engineering",
    organization: "Arba Minch University",
    orgUrl: "https://www.amu.edu.et",
    badge: "IN PROGRESS",
    isEducation: true,
    description:
      "Studying software engineering with a focus on programming, software design, databases, data structures, and application development.",
    technologies: [
      "Software Design",
      "Data Structures & Algorithms",
      "Database Systems",
      "Object-Oriented Programming",
      "Web Technologies",
      "Operating Systems",
    ],
    keyPoints: [
      "Rigorous coursework covering programming paradigms, data structures, and database modeling",
      "Practical semester team projects applying software engineering methodologies and version control",
      "Focusing on foundational software principles: correctness, modularity, and maintainable architecture",
    ],
  },
  {
    id: "independent-development",
    period: "2024 – Present",
    location: "Arba Minch, Ethiopia",
    role: "Independent Projects & Technical Development",
    organization: "Self-Directed Engineering",
    orgUrl: null,
    badge: "PRACTICAL WORK",
    isEducation: false,
    description:
      "Developing and refining full-stack applications to strengthen practical skills in frontend development, REST APIs, database modeling, authentication, debugging, testing, and deployment.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Git & GitHub",
    ],
    keyPoints: [
      "Architected MERN stack applications (ShopNest, TaskFlow) with modular service and controller separation",
      "Engineered secure authentication workflows utilizing JWT tokens and role-based route protection",
      "Designed normalized MongoDB schemas with Mongoose validation rules and indexing for query performance",
      "Practiced systematic debugging, input sanitization, and automated test writing with Node test runner",
    ],
  },
]

export default experiences
