import React from 'react'
import { Globe, Smartphone, Cpu, Check, Layers } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

const CARD_ICONS = {
  'web-apps': Globe,
  'mobile-apps': Smartphone,
  'problem-solving': Cpu,
}

export function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      aria-label="What I Build"
      className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-gray-800/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          badge="Specialization"
          title="What I Build"
          subtitle="Practical software solutions spanning full-stack web applications, mobile interfaces, and real-world system workflows."
        />

        {/* Three Large Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {(profile.whatIBuild || []).map((item, index) => {
            const Icon = CARD_ICONS[item.id] || Globe
            return (
              <div
                key={item.id}
                className="group relative rounded-[20px] bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-gray-800 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 dark:from-orange-500/10 to-transparent pointer-events-none rounded-bl-full" />

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold tracking-wider text-orange-600 dark:text-orange-500 uppercase bg-orange-50 dark:bg-orange-950/50 px-2.5 py-1 rounded border border-orange-200/80 dark:border-orange-900/60">
                      {item.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Technologies List */}
                <div className="pt-6 border-t border-slate-100 dark:border-gray-800">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-3">
                    Technologies & Focus
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium font-mono bg-slate-100 dark:bg-gray-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-gray-700/60 group-hover:border-orange-500/30 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatIBuild
