import React from 'react'
import { GraduationCap, Code2, ArrowUpRight } from 'lucide-react'
import { experiences } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" aria-label="Background and learning" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-3 flex items-baseline gap-2.5">
            <span className="text-[#F59E0B] font-mono text-xs uppercase tracking-widest font-semibold">
              02
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              BACKGROUND & LEARNING
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F5] tracking-tight leading-[1.08]">
              Background and learning.
            </h2>
            <p className="text-[#A1A1AA] mt-4 text-base sm:text-lg leading-relaxed">
              Academic foundation at Arba Minch University combined with continuous self-directed development building practical full-stack systems.
            </p>
          </div>
        </div>

        {/* Experience & Education List */}
        <div className="space-y-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 sm:py-14 border-t border-[#232736]"
            >
              {/* Left: Period & Location */}
              <div className="lg:col-span-3 font-mono text-xs sm:text-sm text-zinc-500 space-y-1.5">
                <div className="text-zinc-300 font-medium">{exp.period}</div>
                <div>{exp.location}</div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-zinc-400">
                  {exp.badge}
                </span>
              </div>

              {/* Right: Role, Org, Description & Highlights */}
              <div className="lg:col-span-9 max-w-3xl">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  {exp.orgUrl ? (
                    <a
                      href={exp.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F59E0B] hover:text-amber-300 underline decoration-amber-500/30 underline-offset-4 hover:decoration-amber-300 transition-colors inline-flex items-center gap-1 font-medium text-sm sm:text-base"
                    >
                      <span>{exp.organization}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[#F59E0B] font-medium text-sm sm:text-base">
                      {exp.organization}
                    </span>
                  )}
                </div>

                <p className="text-[#A1A1AA] mt-4 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Key Coursework / Practical Highlights */}
                {exp.keyPoints && exp.keyPoints.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {exp.keyPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="relative pl-5 text-zinc-400 text-sm leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-amber-500/70"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies / Coursework Tags */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs font-mono text-zinc-400">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
