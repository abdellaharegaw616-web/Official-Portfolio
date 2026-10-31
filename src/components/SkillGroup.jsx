import React from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'

export function SkillGroup({ category }) {
  const { title, description, skills } = category

  return (
    <div className="flex flex-col bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <div className="flex-1 space-y-3">
        {skills.map((skill) => {
          const isLearning = skill.level === 'Learning Focus'
          return (
            <div
              key={skill.name}
              className="p-3 rounded-xl bg-slate-50/70 dark:bg-[#0e1626] border border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-sm text-slate-800 dark:text-slate-200">
                  {skill.name}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${
                    isLearning
                      ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                      : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                  }`}
                >
                  {isLearning ? (
                    <>
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>Learning Focus</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Current Core</span>
                    </>
                  )}
                </span>
              </div>
              {skill.description && (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {skill.description}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillGroup
