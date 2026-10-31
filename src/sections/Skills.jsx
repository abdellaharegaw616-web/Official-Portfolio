import React from 'react'
import { skillCategories, currentlyLearning } from '../data/skills'
import { Sparkles } from 'lucide-react'

export function Skills() {
  return (
    <section id="skills" aria-label="Technical Toolkit" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-3 flex items-baseline gap-2.5">
            <span className="text-[#F59E0B] font-mono text-xs uppercase tracking-widest font-semibold">
              03
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              TOOLKIT
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F5] tracking-tight leading-[1.08]">
              Technical Toolkit
            </h2>
            <p className="text-[#A1A1AA] max-w-xl mt-4 text-base sm:text-lg leading-relaxed">
              The primary stack, tools, and engineering workflows I apply to build practical full-stack web applications.
            </p>
          </div>
        </div>

        {/* 4-Column Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 border-t border-[#232736] pt-12 sm:pt-16">
          <div className="hidden lg:block lg:col-span-3" />
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="space-y-4">
                <div className="pb-3 border-b border-[#232736]">
                  <h3 className="text-base font-semibold text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {cat.description}
                  </p>
                </div>

                <ul className="space-y-2.5 text-zinc-300 text-sm">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between text-zinc-300 hover:text-white transition-colors py-0.5"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning / Exploring Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
              CURRENTLY EXPLORING
            </span>
          </div>

          <div className="lg:col-span-9 flex flex-wrap items-center gap-3">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11131A] border border-white/10 text-xs font-mono text-zinc-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
