import React from 'react'
import { Terminal, CheckCircle2, ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'

export function About() {
  return (
    <section
      id="about"
      aria-label="About Abdellah Aregaw"
      className="py-20 sm:py-28 relative border-t border-white/5"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-3 flex items-baseline gap-2.5">
            <span className="text-[#F59E0B] font-mono text-xs uppercase tracking-widest font-semibold">
              ABOUT
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              PROFILE & MINDSET
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F5] tracking-tight leading-[1.12]">
              {profile.about.heading}
            </h2>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8 border-t border-[#232736]">
          <div className="hidden lg:block lg:col-span-3">
            <div className="space-y-4 font-mono text-xs text-zinc-500">
              <div>
                <span className="text-zinc-400 block font-medium">PRIMARY FOCUS</span>
                <span>Full-Stack Web Engineering</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-medium">METHODOLOGY</span>
                <span>Fundamentals & Security</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-medium">CAMPUS</span>
                <span>Arba Minch University</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 max-w-3xl space-y-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            {profile.about.paragraphs.map((para, idx) => (
              <p key={idx} className="first:text-zinc-200">
                {para}
              </p>
            ))}

            {/* Quick Highlights / Learning Pillars */}
            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#11131A] border border-white/5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F59E0B] font-semibold block mb-1">
                  01 · Code Health
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Focusing on systematic debugging, isolated components, and structured error handling.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#11131A] border border-white/5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F59E0B] font-semibold block mb-1">
                  02 · Data Security
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Prioritizing strict server-side validation, JWT auth boundaries, and sanitized input.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#11131A] border border-white/5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F59E0B] font-semibold block mb-1">
                  03 · Testability
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Writing automated contract tests to verify normal cases and failure edge conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
