import React from 'react'
import { Terminal, CheckCircle2, Shield, Layers, Sparkles } from 'lucide-react'

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Subtle background glow */}
      <div className="absolute -inset-1 rounded-3xl bg-blue-600/10 dark:bg-blue-500/10 blur-xl"></div>

      {/* Main Terminal / Code Window */}
      <div className="relative rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
        {/* Editor Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-[#0d131f] border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 dark:bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 dark:bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400 dark:bg-emerald-500"></span>
            <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
              TaskFlowController.js
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              ES6+ / MERN
            </span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200 space-y-1">
          <div>
            <span className="text-purple-600 dark:text-purple-400 font-semibold">import</span>{' '}
            <span className="text-slate-700 dark:text-slate-300">&#123; Task, Project &#125;</span>{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">from</span>{' '}
            <span className="text-emerald-600 dark:text-emerald-400">'../models/schema.js'</span>
          </div>
          <div className="text-slate-400 dark:text-slate-500 italic">
            // Validate input & maintain data consistency
          </div>
          <div>
            <span className="text-purple-600 dark:text-purple-400 font-semibold">export async function</span>{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">createTask</span>(
            <span className="text-amber-600 dark:text-amber-400">req</span>,{' '}
            <span className="text-amber-600 dark:text-amber-400">res</span>
            ) &#123;
          </div>
          <div className="pl-4">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
            &#123; title, assigneeId, projectId &#125; ={' '}
            <span className="text-amber-600 dark:text-amber-400">req</span>.body
          </div>
          <div className="pl-4 text-slate-400 dark:text-slate-500 italic">
            // Clean validation before database write
          </div>
          <div className="pl-4">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">if</span> (!title || !projectId) &#123;
          </div>
          <div className="pl-8">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">return</span>{' '}
            <span className="text-amber-600 dark:text-amber-400">res</span>.status(400).json(&#123; error: <span className="text-emerald-600 dark:text-emerald-400">'Required fields missing'</span> &#125;)
          </div>
          <div className="pl-4">&#125;</div>
          <div className="pl-4">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span> task ={' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">await</span>{' '}
            Task.create(&#123; title, assigneeId, projectId, status: <span className="text-emerald-600 dark:text-emerald-400">'active'</span> &#125;)
          </div>
          <div className="pl-4">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">return</span>{' '}
            <span className="text-amber-600 dark:text-amber-400">res</span>.status(201).json(task)
          </div>
          <div>&#125;</div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-[#0d131f] border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Clean Code Architecture</span>
            </span>
            <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              <span>Input Validated</span>
            </span>
          </div>
          <div className="font-mono text-slate-400">Arba Minch Univ.</div>
        </div>
      </div>

      {/* Floating detail badge 1 */}
      <div className="hidden sm:flex items-center gap-3 absolute -bottom-4 -left-4 p-3 bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg text-xs">
        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
          <Layers className="w-4 h-4" />
        </div>
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">MERN Stack</div>
          <div className="text-slate-500 dark:text-slate-400">React · Express · Node · Mongo</div>
        </div>
      </div>

      {/* Floating detail badge 2 */}
      <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 px-3 py-1.5 bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-medium text-slate-700 dark:text-slate-200">
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        <span>Graduation 2027</span>
      </div>
    </div>
  )
}

export default HeroIllustration
