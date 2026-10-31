/**
 * Engineering Principles prioritized by Abdellah Aregaw.
 * 8 foundational engineering practices highlighted as professional guiding standards.
 */

export const principles = [
  {
    number: "01",
    title: "Correctness",
    summary: "Features should behave as intended across edge cases.",
    description:
      "A feature is not done when it works once on happy paths. It is done when it handles empty inputs, boundary values, and invalid states predictably.",
    iconName: "CheckCircle2",
  },
  {
    number: "02",
    title: "Security",
    summary: "Validate input and enforce authorization on the server.",
    description:
      "Client validation is for user experience; server validation is for security. Never trust incoming payloads, enforce strict role checks, and guard against injections.",
    iconName: "ShieldCheck",
  },
  {
    number: "03",
    title: "Testability",
    summary: "Critical business logic should be verifiable.",
    description:
      "Structure code into modular, decoupled functions and controllers that can be automatically verified with unit and integration tests.",
    iconName: "FileCode",
  },
  {
    number: "04",
    title: "Maintainability",
    summary: "Organize code into understandable modules.",
    description:
      "Write code with clear naming, single responsibilities, and intuitive file structures so future maintainers can modify it with confidence.",
    iconName: "Layers",
  },
  {
    number: "05",
    title: "Reliability",
    summary: "Handle loading, errors, empty states, and network failures.",
    description:
      "Real-world networks drop and servers fail. User interfaces must provide helpful feedback during loading, clear error messages, and graceful degradation.",
    iconName: "AlertTriangle",
  },
  {
    number: "06",
    title: "Accessibility",
    summary: "Support keyboard navigation and readable interfaces.",
    description:
      "Ensure proper semantic HTML, accessible ARIA attributes, visible focus rings, readable color contrast, and smooth screen-reader navigation.",
    iconName: "Eye",
  },
  {
    number: "07",
    title: "Performance",
    summary: "Avoid unnecessary work and optimize where evidence supports it.",
    description:
      "Keep bundle sizes lean, optimize database queries with appropriate indexing, and avoid premature optimization in favor of evidence-backed profiling.",
    iconName: "Zap",
  },
  {
    number: "08",
    title: "Deployment Readiness",
    summary: "Configure environments correctly and never expose secrets.",
    description:
      "Separate development from production configurations, manage environment variables securely, and ensure reproducible build pipelines.",
    iconName: "Lock",
  },
]

export default principles
