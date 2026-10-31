import React from 'react'
import {
  CheckCircle2,
  ShieldCheck,
  FileCode,
  Layers,
  AlertTriangle,
  Eye,
  Zap,
  Lock,
} from 'lucide-react'
import { principles } from '../data/principles'

const ICON_MAP = {
  CheckCircle2,
  ShieldCheck,
  FileCode,
  Layers,
  AlertTriangle,
  Eye,
  Zap,
  Lock,
}

export function EngineeringPrinciples() {
  return (
    <section id="principles" aria-label="Engineering Principles" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-3 flex items-baseline gap-2.5">
            <span className="text-[#F59E0B] font-mono text-xs uppercase tracking-widest font-semibold">
              04
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              ENGINEERING PRINCIPLES
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F5] tracking-tight leading-[1.08]">
              Guiding Engineering Practices
            </h2>
            <p className="text-[#A1A1AA] mt-4 text-base sm:text-lg leading-relaxed">
              Foundational principles I strive to understand, develop, and demonstrate across every system I architect.
            </p>
          </div>
        </div>

        {/* 8 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#232736]">
          {principles.map((p) => {
            const Icon = ICON_MAP[p.iconName] || CheckCircle2
            return (
              <div
                key={p.number}
                className="p-6 rounded-2xl bg-[#11131A] border border-white/5 hover:border-[#F59E0B]/30 transition-colors flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-[#F59E0B] font-bold">
                      {p.number}
                    </span>
                    <Icon className="w-4 h-4 text-zinc-500 group-hover:text-[#F59E0B] transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs font-mono text-amber-300/90 mb-3">
                    {p.summary}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  Guiding Standard
                </div>
              </div>
            )
          })}
        </div>

        {/* Professional statement note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-zinc-500 max-w-xl mx-auto">
            // Professional statement of technical values: practiced and strengthened across academic projects and personal development
          </p>
        </div>

      </div>
    </section>
  )
}

export default EngineeringPrinciples
