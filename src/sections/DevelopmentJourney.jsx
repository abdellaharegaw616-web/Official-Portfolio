import React, { useState } from 'react'
import {
  Bug,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Search,
  FileCode,
  Lock,
  Smartphone,
  Eye,
  Check,
} from 'lucide-react'
import { journeyMilestones } from '../data/journey'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/SectionHeading'

const PRACTICE_ICONS = {
  'reproducing-bugs': Bug,
  'error-reading': Search,
  'validating-inputs': ShieldCheck,
  'handling-errors': FileCode,
  'auth-concepts': Lock,
  'meaningful-tests': CheckCircle2,
  'responsive-ux': Smartphone,
  'code-review': Eye,
}

export function DevelopmentJourney() {
  const { engineeringPractices = [] } = profile
  // Store expanded state for each journey milestone
  const [expandedIds, setExpandedIds] = useState(['foundations', 'mern'])
  const [activePracticeId, setActivePracticeId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleExpandAll = () => {
    if (expandedIds.length === journeyMilestones.length) {
      setExpandedIds([])
    } else {
      setExpandedIds(journeyMilestones.map((m) => m.id))
    }
  }

  return (
    <section
      id="journey"
      aria-label="Development Journey & Engineering Quality"
      className="py-16 sm:py-24 border-t border-slate-200/60 dark:border-gray-800/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 13: ENGINEERING QUALITY SHOWCASE — BEYOND MAKING IT WORK */}
        <div className="mb-20">
          <SectionHeading
            number="05"
            badge="Engineering Rigor"
            title="Beyond Making It Work"
            subtitle="Software engineering habits and verification practices I am actively learning. Focus on understanding root causes, defensive validation, and software reliability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {engineeringPractices.map((practice) => {
              const Icon = PRACTICE_ICONS[practice.id] || CheckCircle2
              const isSelected = activePracticeId === practice.id
              return (
                <div
                  key={practice.id}
                  onClick={() => setActivePracticeId(isSelected ? null : practice.id)}
                  className={`group relative rounded-[20px] bg-white dark:bg-[#111827] border transition-all duration-200 p-6 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-md shadow-orange-500/10'
                      : 'border-slate-200/90 dark:border-gray-800 hover:border-orange-500/40 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                        {practice.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {practice.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {practice.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-gray-800/80">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 block mb-1">
                      Project Practice:
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-snug">
                      "{practice.example}"
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* SECTION 12: DEVELOPMENT JOURNEY TIMELINE */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <SectionHeading
              number="06"
              badge="Growth Roadmap"
              title="Development Journey"
              subtitle="An interactive timeline representing real progression through computer science coursework and hands-on full-stack development."
              className="mb-0"
            />

            <button
              type="button"
              onClick={handleExpandAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-gray-800 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 hover:border-orange-500 hover:text-orange-600 self-start sm:self-auto transition-colors"
            >
              <span>
                {expandedIds.length === journeyMilestones.length ? 'Collapse All' : 'Expand All'}
              </span>
            </button>
          </div>

          {/* Timeline Cards Grid */}
          <div className="space-y-4">
            {journeyMilestones.map((milestone, index) => {
              const isExpanded = expandedIds.includes(milestone.id)
              return (
                <div
                  key={milestone.id}
                  className="rounded-[20px] bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-gray-800 shadow-sm transition-all duration-200 hover:border-orange-500/30 overflow-hidden"
                >
                  {/* Collapsible Header */}
                  <div
                    onClick={() => toggleExpand(milestone.id)}
                    className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                        0{index + 1}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                            {milestone.area}
                          </h4>
                          <span className="font-mono text-[10px] text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50 px-2 py-0.5 rounded border border-orange-200/80 dark:border-orange-900/60 uppercase">
                            {milestone.phase}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          {milestone.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="hidden md:inline-block font-mono text-xs text-slate-400 dark:text-slate-500">
                        {milestone.status}
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-gray-800 space-y-4 animate-fadeIn">
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>

                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono block mb-2">
                          Key Practiced Topics & Concepts:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {milestone.items.map((item, itemIdx) => (
                            <span
                              key={itemIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-gray-700/60"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default DevelopmentJourney
