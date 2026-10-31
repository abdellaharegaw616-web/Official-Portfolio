import React from 'react'
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'
import { DeveloperProfileVisual } from '../components/DeveloperProfileVisual'

export function Hero({ onOpenResumeModal }) {
  const handleScrollToWork = (e) => {
    e.preventDefault()
    const target = document.getElementById('work')
    if (target) {
      const navOffset = 80
      const pos = target.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
      window.history.pushState(null, '', '#work')
    }
  }

  const handleResumeClick = (e) => {
    e.preventDefault()
    if (profile.links.hasRealResumePdf) {
      window.open(profile.links.resumePath, '_blank')
    } else if (onOpenResumeModal) {
      onOpenResumeModal()
    }
  }

  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Main Hero Top: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#11131A] text-xs font-mono text-zinc-300 w-fit mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{profile.hero.badge}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] mb-5 leading-[1.08]">
              Abdellah Aregaw<span className="text-[#F59E0B]">.</span>
            </h1>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl font-medium text-zinc-200 leading-snug mb-6 max-w-xl">
              {profile.hero.headline}
            </h2>

            {/* Biography */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mb-10">
              {profile.hero.bio}
            </p>

            {/* Actions: Primary & Secondary Buttons & External Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary Action: Explore my work */}
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold text-sm transition-all duration-150 active:scale-[0.98] shadow-md shadow-amber-500/20"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary Action: View resume */}
              <button
                type="button"
                onClick={handleResumeClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-[#151821] hover:bg-white/10 text-white font-medium text-sm transition-all duration-150 active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#F59E0B]" />
                <span>View resume</span>
              </button>

              {/* External Profile Links */}
              <div className="flex items-center gap-5 pl-1 sm:pl-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  aria-label="Abdellah's GitHub Profile"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                {/* LinkedIn: Appears only when a real URL is configured */}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    aria-label="Abdellah's LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 text-zinc-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DeveloperProfileVisual />
          </div>

        </div>

        {/* Small Information Row (3 Honest Items) */}
        <div className="mt-20 sm:mt-28 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <span className="text-xs font-mono tracking-wider text-zinc-500 uppercase block">
                {stat.label}
              </span>
              <div className="text-base sm:text-lg font-medium text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
