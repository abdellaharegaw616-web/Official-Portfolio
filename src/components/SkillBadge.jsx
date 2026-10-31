import React from 'react'

/**
 * SkillBadge: Clean chip/badge component for technical skills.
 * Features:
 * - Subtle orange accent for emphasis
 * - Clean typography
 * - Dark mode compliant
 */
export function SkillBadge({ name, isCore = true, isHighlighted = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 ${
        isHighlighted
          ? 'bg-orange-50 text-orange-950 dark:bg-orange-950/40 dark:text-orange-200 border border-orange-300 dark:border-orange-800/80 shadow-xs'
          : 'bg-slate-100/80 text-slate-800 dark:bg-[#1a2333] dark:text-slate-200 border border-slate-200/80 dark:border-gray-800 hover:border-orange-500/40'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isHighlighted ? 'bg-orange-500' : 'bg-orange-500/70'
        }`}
      />
      <span>{name}</span>
    </div>
  )
}

export default SkillBadge
