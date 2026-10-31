import React from 'react'
import {
  Github,
  ExternalLink,
  Layers,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  ShoppingCart,
  Pill,
  Maximize2,
} from 'lucide-react'

export function ProjectCard({ project, onOpenCaseStudy, onOpenGallery }) {
  const {
    id,
    title,
    subtitle,
    badge,
    isFeatured,
    status,
    description,
    categories,
    technologies = [],
    features = project.highlights || [],
    githubUrl,
    demoUrl,
    demoStatusLabel,
    gallery,
  } = project

  return (
    <article
      className={`group relative rounded-[20px] bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between overflow-hidden ${
        isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
    >
      <div>
        {/* Visual Architectural Preview / Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-slate-100/50 to-orange-50/20 dark:from-[#0e1626] dark:via-[#111827] dark:to-[#1a1c2e] border-b border-slate-100 dark:border-gray-800 overflow-hidden">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#F97316 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Top Label & Status */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                  isFeatured
                    ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/30'
                    : 'bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400 border border-orange-200/80 dark:border-orange-900/60'
                }`}
              >
                {isFeatured && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                {badge}
              </span>

              {categories && categories.length > 0 && (
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-gray-800 border border-slate-200/60 dark:border-gray-700/60">
                  {categories[0]}
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-gray-800/80 border border-slate-200/80 dark:border-gray-700/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {status}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {title}
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400 font-mono">
              {subtitle}
            </p>
          </div>

          {/* Mini Architectural Graphic / Interactive Preview Blueprint */}
          <div className="relative z-10 mt-6 pt-5 border-t border-slate-200/60 dark:border-gray-800/80 transition-transform duration-300 group-hover:scale-[1.01]">
            <div className="rounded-xl bg-white/90 dark:bg-[#161f30] p-4 border border-slate-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                  {id === 'taskflow' && <LayoutDashboard className="w-5 h-5" />}
                  {id === 'shopnest' && <ShoppingCart className="w-5 h-5" />}
                  {id === 'smart-pharmacy' && <Pill className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {id === 'taskflow'
                      ? 'Centralized Workspace & Task Pipelines'
                      : id === 'shopnest'
                      ? 'Product Catalog & Cart Synchronization'
                      : 'Inventory & Medicine Safety Tracking'}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {id === 'taskflow'
                      ? 'MERN Architecture · JWT Security'
                      : id === 'shopnest'
                      ? 'React State · Dynamic Filtering'
                      : 'WPF · SQLite · MVVM Pattern'}
                  </div>
                </div>
              </div>

              {/* Blueprint / Diagram Trigger */}
              {gallery && gallery.length > 0 && (
                <button
                  type="button"
                  onClick={() => onOpenGallery(project)}
                  className="text-xs font-mono font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50/80 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-900/40"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Blueprints ({gallery.length})</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>

          {/* Key Implemented Features Snippet */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2.5">
              Key Capabilities
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.slice(0, isFeatured ? 6 : 4).map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2.5">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-gray-800/80 mt-2">
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm shadow-sm shadow-orange-500/20 transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 px-3 py-2 bg-slate-100/80 dark:bg-gray-800/80 rounded-xl border border-slate-200/80 dark:border-gray-700/60">
              {demoStatusLabel}
            </span>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium"
            >
              <span>Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
