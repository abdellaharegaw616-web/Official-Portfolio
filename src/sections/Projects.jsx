import React from 'react'
import { ArrowUpRight, Github, ExternalLink, Layers, ShieldCheck, Terminal } from 'lucide-react'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="work" aria-label="Selected Work" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-3 flex items-baseline gap-2.5">
            <span className="text-[#F59E0B] font-mono text-xs uppercase tracking-widest font-semibold">
              01
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              SELECTED WORK
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F5] tracking-tight leading-[1.08]">
              Projects built to solve practical problems.
            </h2>
            <p className="text-[#A1A1AA] mt-4 text-base sm:text-lg leading-relaxed">
              A collection of web and mobile development projects focused on useful functionality, thoughtful design, and sound engineering.
            </p>
          </div>
        </div>

        {/* Project Editorial Rows */}
        <div className="space-y-0">
          {projects.map((project) => {
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 sm:py-14 border-t border-[#232736] group transition-colors duration-150"
              >
                {/* Col 1: Number, Category & Status Badge */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="text-[#F59E0B] font-mono text-sm font-semibold">
                    {project.num}
                  </div>
                  <div className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                    {project.categoryLabel}
                  </div>
                  <span className="inline-block font-mono text-[10px] uppercase font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                    {project.status}
                  </span>
                </div>

                {/* Col 2: Title, Description, Features & Engineering Focus */}
                <div className="lg:col-span-5 max-w-xl">
                  <h3
                    className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors ${
                      project.isAmberTitle
                        ? 'text-[#F59E0B] group-hover:text-amber-300'
                        : 'text-white group-hover:text-[#F59E0B]'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[#A1A1AA] mt-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlighted Verified Features */}
                  {project.features && project.features.length > 0 && (
                    <ul className="mt-5 space-y-2 text-xs text-zinc-400">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70 mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Engineering Focus Note */}
                  {project.engineeringFocus && (
                    <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-zinc-400">
                      <span className="text-amber-400 font-semibold mr-1.5">Engineering focus:</span>
                      <span>{project.engineeringFocus}</span>
                    </div>
                  )}
                </div>

                {/* Col 3: Tech Stack & Action Links */}
                <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end gap-6">
                  {/* Tech Stack List */}
                  <div className="font-mono text-xs sm:text-sm text-zinc-400 lg:text-right leading-relaxed flex flex-wrap gap-x-2.5 gap-y-1 lg:justify-end">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Available Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {/* View Source Link */}
                    {project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Github className="w-4 h-4 text-zinc-400" />
                        <span>View source</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 cursor-not-allowed">
                        <Github className="w-3.5 h-3.5" />
                        <span>Source in local repository</span>
                      </span>
                    )}

                    {/* Live Demo Action: Only enabled when verified deployment exists */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#F59E0B] hover:text-amber-300 transition-colors"
                      >
                        <span>Live demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-xs font-mono text-zinc-500">
                        {project.status === 'Active Codebase'
                          ? 'Local testing & verification'
                          : 'Deployment in preparation'}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Projects
