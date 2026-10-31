import React from 'react'
import { Layers, Smartphone, ShieldCheck, Target } from 'lucide-react'
import { profile } from '../data/profile'

const ICONS = [Layers, Smartphone, ShieldCheck, Target]

export function QuickIntro() {
  return (
    <section aria-label="Quick Introduction" className="py-6 sm:py-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {(profile.quickIntro || []).map((item, index) => {
            const Icon = ICONS[index % ICONS.length]
            return (
              <div
                key={item.label}
                className="group relative rounded-[20px] bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-gray-800 p-5 sm:p-6 transition-all duration-200 hover:border-orange-500/40 hover:shadow-md hover:shadow-orange-500/5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold tracking-wider text-orange-600 dark:text-orange-500 uppercase bg-orange-50 dark:bg-orange-950/50 px-2 py-0.5 rounded border border-orange-200/80 dark:border-orange-900/60">
                    {item.label}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 flex items-center justify-center transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  {item.description}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                  <span>{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-700 group-hover:bg-orange-500 transition-colors" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickIntro
