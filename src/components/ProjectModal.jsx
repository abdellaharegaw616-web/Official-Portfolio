import React, { useEffect } from 'react'
import {
  X,
  Github,
  ExternalLink,
  Layers,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Clock,
  UserCheck,
  Maximize2,
  Sparkles,
} from 'lucide-react'

export function ProjectModal({ project, isOpen, onClose, onOpenGallery }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#111827] rounded-[20px] shadow-2xl border border-slate-200 dark:border-gray-800 p-6 sm:p-10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-6 border-b border-slate-100 dark:border-gray-800">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold tracking-wider text-orange-600 dark:text-orange-500 uppercase bg-orange-50 dark:bg-orange-950/50 px-2.5 py-0.5 rounded border border-orange-200/80 dark:border-orange-900/60">
              {project.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              {project.status}
            </span>
          </div>

          <h3
            id="case-study-title"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body with Case Study Details */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#0e1626] border border-slate-200/80 dark:border-gray-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-mono">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem || project.problemStatement}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/40 dark:bg-orange-950/20 border border-orange-200/60 dark:border-orange-900/40">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 mb-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>The Solution</span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-[#0e1626] border border-slate-200/80 dark:border-gray-800 text-xs sm:text-sm">
            <UserCheck className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">My Role: </span>
              <span className="text-slate-600 dark:text-slate-300">{project.role}</span>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Implemented Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Implemented Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#0e1626] border border-slate-100 dark:border-gray-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Features (Clearly Separated) */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2.5 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Planned Features (In Roadmap)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.plannedFeatures.map((planned, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{planned}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Challenges */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#0e1626] border border-slate-200/80 dark:border-gray-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 font-mono">
              <Layers className="w-4 h-4 text-orange-500" />
              <span>Engineering Challenges & Decisions</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Lessons Learned */}
          {project.lessonsLearned && (
            <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/30 dark:bg-orange-950/10 border border-orange-200/50 dark:border-orange-900/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300 mb-2 font-mono">
                <Lightbulb className="w-4 h-4 text-orange-500" />
                <span>Lessons Learned</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer / Actions */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Gallery trigger button if project has diagrams */}
            {project.gallery && project.gallery.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenGallery(project)
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-orange-500/50 bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-semibold text-xs sm:text-sm hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <Maximize2 className="w-4 h-4" />
                <span>View Architecture Diagrams ({project.gallery.length})</span>
              </button>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 shadow-sm shadow-orange-500/25"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-gray-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                // {project.demoStatusLabel}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
