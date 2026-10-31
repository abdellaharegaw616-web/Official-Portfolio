import React from 'react'
import { Github, ExternalLink, FolderGit2, Code2, Terminal } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/SectionHeading'

export function GitHub() {
  return (
    <section
      id="github"
      aria-label="Open Source & Code"
      className="py-16 sm:py-24 border-t border-slate-200/60 dark:border-gray-800/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          badge="Source Repositories"
          title="Open Source & Code"
          subtitle="Explore public source code, implementation patterns, and ongoing academic engineering repositories."
        />

        {/* Dark Bento GitHub Section */}
        <div className="relative rounded-[20px] bg-[#111827] text-white border border-gray-800 p-8 sm:p-12 shadow-xl overflow-hidden">
          {/* Subtle background glow & grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#F97316 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center border border-orange-500/30">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Open Source & Code
                  </h3>
                  <p className="text-xs font-mono text-orange-400">
                    github.com/abdellaharegaw616-web
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                My GitHub contains projects, experiments, learning work, and ongoing development.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base shadow-sm shadow-orange-500/30 transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub</span>
                </a>

                <a
                  href={profile.links.featuredRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-800/80 hover:bg-gray-800 text-slate-200 border border-gray-700/80 hover:border-gray-600 text-sm sm:text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <FolderGit2 className="w-4 h-4 text-orange-400" />
                  <span>TaskFlow Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Mini Bento Card for Verified Public Repo */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#0B0F19] border border-gray-800 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-orange-400" />
                    <span className="font-mono text-xs font-semibold text-white">
                      2026-internship-project
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950/80 text-orange-400 border border-orange-800/60">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Full-stack MERN repository engineered for TaskFlow project management system, including component hierarchy, Express controllers, and MongoDB schema models.
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <span>JavaScript · MERN</span>
                  </div>
                  <span className="text-emerald-400 text-[11px]">Active Branch</span>
                </div>

                <a
                  href={profile.links.featuredRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-slate-200 text-xs font-medium transition-colors"
                >
                  <span>Open on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHub
